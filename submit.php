<?php
// Contact Form Handler for Gaurav Ghadge Portfolio
// This file handles form submissions and sends email notifications

// Set headers for CORS and content type
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'subject', 'message'];
$errors = [];

foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        $errors[] = "Field '$field' is required";
    }
}

// Validate email format
if (!empty($input['email']) && !filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

// If there are validation errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => 'Validation failed', 'details' => $errors]);
    exit();
}

// Sanitize input data
$name = htmlspecialchars(trim($input['name']));
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(trim($input['subject']));
$message = htmlspecialchars(trim($input['message']));

// Prepare email content
$to = 'gghadge225@gmail.com'; // Your email address
$email_subject = "Portfolio Contact: $subject";
$email_body = "
New message from your portfolio website:

Name: $name
Email: $email
Subject: $subject

Message:
$message

---
Sent from: " . $_SERVER['HTTP_HOST'] . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
Date: " . date('Y-m-d H:i:s') . "
";

$headers = [
    'From' => 'noreply@' . $_SERVER['HTTP_HOST'],
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
];

// Try to send email
try {
    $mail_sent = mail($to, $email_subject, $email_body, $headers);
    
    if ($mail_sent) {
        // Log successful submission (optional)
        logSubmission($name, $email, $subject, $message);
        
        // Return success response
        echo json_encode([
            'success' => true,
            'message' => 'Thank you! Your message has been sent successfully.'
        ]);
    } else {
        throw new Exception('Failed to send email');
    }
    
} catch (Exception $e) {
    // Log error (optional)
    error_log("Contact form error: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'error' => 'Sorry, something went wrong. Please try again later.',
        'debug' => $e->getMessage() // Remove this in production
    ]);
}

/**
 * Log form submission to a file (optional)
 */
function logSubmission($name, $email, $subject, $message) {
    $log_entry = date('Y-m-d H:i:s') . " | $name | $email | $subject\n";
    $log_file = 'contact_log.txt';
    
    // Create log file if it doesn't exist
    if (!file_exists($log_file)) {
        file_put_contents($log_file, "Date | Name | Email | Subject\n");
        file_put_contents($log_file, str_repeat('-', 50) . "\n", FILE_APPEND);
    }
    
    // Append log entry
    file_put_contents($log_file, $log_entry, FILE_APPEND);
}

/**
 * Alternative: Save to database (if you have one)
 * Uncomment and modify as needed
 */
/*
function saveToDatabase($name, $email, $subject, $message) {
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=portfolio', 'username', 'password');
        $stmt = $pdo->prepare("INSERT INTO contact_submissions (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())");
        $stmt->execute([$name, $email, $subject, $message]);
        return true;
    } catch (PDOException $e) {
        error_log("Database error: " . $e->getMessage());
        return false;
    }
}
*/

/**
 * Alternative: Send to external service (like Formspree, Netlify Forms, etc.)
 * Uncomment and modify as needed
 */
/*
function sendToExternalService($data) {
    $url = 'https://formspree.io/f/YOUR_FORM_ID';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/x-www-form-urlencoded'
    ]);
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    return $http_code === 200;
}
*/
?>
