
<?php
$name = trim($_GET["name"] ?? "");

if ($name === "") {
    echo "Please provide a name in the URL.";
} else {
    echo "Hello, " . htmlspecialchars($name, ENT_QUOTES, "UTF-8") . "!";
}
?>
