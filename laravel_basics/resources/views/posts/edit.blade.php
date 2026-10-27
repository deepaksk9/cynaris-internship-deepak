
@extends('layouts.app')

@section('title', 'Edit Post')

@section('content')
<div class="container">
    <h1>Edit Post</h1>

    @if ($errors->any())
        <div style="color: red;">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('posts.update', $post) }}" method="POST">
        @csrf
        @method('PUT')

        <div>
            <label for="title">Title:</label><br>
            <input type="text" id="title" name="title"
                   value="{{ old('title', $post->title) }}" required>
        </div>

        <br>

        <div>
            <label for="body">Content:</label><br>
            <textarea id="body" name="body" rows="5" required>{{ old('body', $post->body) }}</textarea>
        </div>

        <br>

        <div>
            <label for="author">Author:</label><br>
            <input type="text" id="author" name="author"
                   value="{{ old('author', $post->author) }}" required>
        </div>

        <br>

        <button type="submit">Update Post</button>
    </form>

    <p><a href="{{ route('posts.index') }}">Back to Posts</a></p>
</div>
@endsection
