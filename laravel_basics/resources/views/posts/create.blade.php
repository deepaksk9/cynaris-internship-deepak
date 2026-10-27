
@extends('layouts.app')

@section('title', 'Create Post')

@section('content')
<div class="container">
    <h1>Create New Post</h1>

    @if ($errors->any())
        <div style="color: red;">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('posts.store') }}" method="POST">
        @csrf

        <div>
            <label for="title">Title:</label><br>
            <input type="text" id="title" name="title"
                   value="{{ old('title') }}" required>
        </div>

        <br>

        <div>
            <label for="body">Content:</label><br>
            <textarea id="body" name="body" rows="5" required>{{ old('body') }}</textarea>
        </div>

        <br>

        <div>
            <label for="author">Author:</label><br>
            <input type="text" id="author" name="author"
                   value="{{ old('author') }}" required>
        </div>

        <br>

        <button type="submit">Save Post</button>
    </form>

    <p><a href="{{ route('posts.index') }}">Back to Posts</a></p>
</div>
@endsection
