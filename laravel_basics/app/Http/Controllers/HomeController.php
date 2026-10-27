<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class HomeController extends Controller
{
    public function index(): View
    {
        $name = 'Deepak';
        $course = 'B.Tech Information Technology';

        $topics = [
            'Laravel Routing',
            'Controllers',
            'Blade Templates',
            'Passing Data to Views',
        ];

        return view('home', compact('name', 'course', 'topics'));
    }
}