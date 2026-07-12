<?php
/**
 * PaintPro Marketing Site — lead capture endpoint
 * Copyright © 2026 Ryan William Hill. All rights reserved.
 *
 * Deliberately standalone: its own database (paintpro_site) and its own
 * mysqli connection. It does NOT include the PaintPro app's config.php, so
 * the app's auth, tenants, CORS, and ZeroTier setup are completely untouched.
 * Served by the same Apache on the same host, so it is reachable from every
 * ZeroTier crew device exactly like the app is.
 */
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'POST only']);
    exit;
}

$body = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

// Honeypot: real users never fill the hidden "website" field.
if (!empty($body['website'])) {
    echo json_encode(['ok' => true]); // pretend success, drop silently
    exit;
}

$name  = trim((string) ($body['name'] ?? ''));
$email = trim((string) ($body['email'] ?? ''));
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['error' => 'Name and a valid email are required']);
    exit;
}

$company  = substr(trim((string) ($body['company']   ?? '')), 0, 120);
$phone    = substr(trim((string) ($body['phone']     ?? '')), 0, 40);
$crew     = substr(trim((string) ($body['crew_size'] ?? '')), 0, 20);
$message  = substr(trim((string) ($body['message']   ?? '')), 0, 2000);
$name     = substr($name, 0, 120);
$email    = substr($email, 0, 190);

mysqli_report(MYSQLI_REPORT_OFF);
$db = @new mysqli('localhost', 'root', '');
if ($db->connect_errno) {
    http_response_code(500);
    echo json_encode(['error' => 'Database unavailable']);
    exit;
}

// Self-migrating: own schema, zero coupling to the PaintPro app databases.
$db->query("CREATE DATABASE IF NOT EXISTS paintpro_site CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
$db->select_db('paintpro_site');
$db->query("CREATE TABLE IF NOT EXISTS leads (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    company VARCHAR(120) NOT NULL DEFAULT '',
    email VARCHAR(190) NOT NULL,
    phone VARCHAR(40) NOT NULL DEFAULT '',
    crew_size VARCHAR(20) NOT NULL DEFAULT '',
    message TEXT NULL,
    ip VARCHAR(45) NOT NULL DEFAULT '',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

$ip = substr((string) ($_SERVER['REMOTE_ADDR'] ?? ''), 0, 45);

$stmt = $db->prepare("INSERT INTO leads (name, company, email, phone, crew_size, message, ip) VALUES (?,?,?,?,?,?,?)");
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not save']);
    exit;
}
$stmt->bind_param('sssssss', $name, $company, $email, $phone, $crew, $message, $ip);

if ($stmt->execute()) {
    echo json_encode(['ok' => true, 'id' => $db->insert_id]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Could not save']);
}
