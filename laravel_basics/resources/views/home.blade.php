
@extends('layouts.app')

@section('title', 'Home - Laravel Basics')

@section('content')
    <h1>Welcome to Laravel Basics</h1>
    <p>This project demonstrates Laravel routes, controllers, and Blade templates.</p>

    <h2>Student Information</h2>
    <p><strong>Name:</strong> {{ $name }}</p>
    <p><strong>Course:</strong> {{ $course }}</p>

    <h2>Topics Covered</h2>
    <ul>
        @foreach ($topics as $topic)
            <li>{{ $topic }}</li>
        @endforeach
    </ul>
@endsection
