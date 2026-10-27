
# PHP Fundamentals

## Overview
This project demonstrates basic PHP programming and server-side form handling.

## Files
- `basics.php` — Variables, arrays, conditionals, loops, and functions.
- `index.php` — Form handling using POST, server-side validation, sessions, and safe output escaping.
- `get_example.php` — GET parameters and safe output escaping.

## Technologies
- PHP 8.5
- HTML5
- Visual Studio Code

## How to Run
1. Install PHP and ensure it is available in your terminal.
2. Open a terminal in the project root.
3. Start the PHP development server:

   `php -S localhost:8000 -t php_basics`

4. Open these URLs in your browser:
   - `http://localhost:8000/basics.php`
   - `http://localhost:8000/index.php`
   - `http://localhost:8000/get_example.php?name=Deepak`

## Security Practices
- Validate user input on the server.
- Use `htmlspecialchars()` to escape output and help prevent cross-site scripting (XSS).
- Use sessions to retain data between requests.
