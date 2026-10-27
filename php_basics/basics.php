<?php
// 1. Variables
$name = "Deepak";
$age = 22;
$course = "Information Technology";

echo "<h1>PHP Fundamentals</h1>";
echo "<h2>Variables</h2>";
echo "Name: " . $name . "<br>";
echo "Age: " . $age . "<br>";
echo "Course: " . $course . "<br>";

// 2. Arrays
$subjects = ["PHP", "JavaScript", "HTML", "CSS"];

echo "<h2>Arrays and Loops</h2>";
echo "<ul>";

foreach ($subjects as $subject) {
    echo "<li>" . htmlspecialchars($subject, ENT_QUOTES, "UTF-8") . "</li>";
}

echo "</ul>";

// 3. Conditional statements
echo "<h2>Conditional Statements</h2>";

if ($age >= 18) {
    echo "Eligible adult<br>";
} else {
    echo "Under 18<br>";
}

// 4. For loop
echo "<h2>For Loop</h2>";

for ($i = 1; $i <= 5; $i++) {
    echo "Number: " . $i . "<br>";
}

// 5. Function
function greet($person) {
    return "Welcome, " . htmlspecialchars($person, ENT_QUOTES, "UTF-8") . "!";
}

echo "<h2>Function</h2>";
echo greet($name);
?>