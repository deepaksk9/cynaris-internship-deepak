
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/about', [AboutController::class, 'index'])->name('about');

Route::get('/contact', function () {
    return 'Contact Page';
})->name('contact');

Route::post('/contact', function () {
    return 'Contact form submitted successfully!';
})->name('contact.submit');

Route::get('/services', function () {
    return 'Our Services';
})->name('services');
