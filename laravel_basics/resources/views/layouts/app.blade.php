
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Laravel Basics')</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 40px auto;
            padding: 20px;
            background: #f4f7fb;
            color: #222;
        }
        nav {
            display: flex;
            gap: 20px;
            padding: 15px;
            background: #fff;
            border-radius: 8px;
        }
        nav a {
            color: #e34f26;
            text-decoration: none;
            font-weight: bold;
        }
        main {
            background: white;
            margin-top: 20px;
            padding: 25px;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    @include('partials.nav')

    <main>
        @yield('content')
    </main>
</body>
</html>
