<?php
ob_start();
session_start();

$errors = [];
$name = "";
$email = "";
$message = "";
$success = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $message = trim($_POST["message"] ?? "");

    if ($name === "") {
        $errors[] = "Name is required.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Please enter a valid email address.";
    }

    if ($message === "") {
        $errors[] = "Message is required.";
    }

    if (empty($errors)) {
        $_SESSION["submitted_name"] = $name;
        $success = "Form submitted successfully!";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Form Validation</title>
</head>
<body>
    <h1>PHP Form Handling</h1>

    <?php if (!empty($errors)): ?>
        <h2>Please correct these errors:</h2>
        <ul>
            <?php foreach ($errors as $error): ?>
                <li><?= htmlspecialchars($error, ENT_QUOTES, "UTF-8") ?></li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>

    <?php if ($success !== ""): ?>
        <p><?= htmlspecialchars($success, ENT_QUOTES, "UTF-8") ?></p>
        <p>Welcome, <?= htmlspecialchars($_SESSION["submitted_name"], ENT_QUOTES, "UTF-8") ?>!</p>
    <?php endif; ?>

    <form method="POST" action="">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"
               value="<?= htmlspecialchars($name, ENT_QUOTES, "UTF-8") ?>" required>
        <br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"
               value="<?= htmlspecialchars($email, ENT_QUOTES, "UTF-8") ?>" required>
        <br><br>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required><?= htmlspecialchars($message, ENT_QUOTES, "UTF-8") ?></textarea>
        <br><br>

        <button type="submit">Submit Form</button>
    </form>
</body>
</html>
