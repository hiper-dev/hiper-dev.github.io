<?php
// Assuming your PHP endpoint is at /submit.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];

    // Process the name as needed (e.g., store in a database)

    echo json_encode(['name' => $name]);
} else {
    http_response_code(405); // Method Not Allowed
}>
