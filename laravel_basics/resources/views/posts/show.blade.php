
@extends('layouts.app')

@section('title', 'Post Details')

@section('content')
<div class="container">
    <h1>Post Details</h1>

    <p><strong>ID:</strong> {{ $post->id }}</p>

    <p><strong>Title:</strong> {{ $post->title }}</p>

    <p><strong>Content:</strong></p>
    <p>{{ $post->body }}</p>

    <p><strong>Author:</strong> {{ $post->author }}</p>

    <p><strong>Created:</strong> {{ $post->created_at->format('d M Y, h:i A') }}</p>

    <a href="{{ route('posts.edit', $post) }}">Edit Post</a>

    <p><a href="{{ route('posts.index') }}">Back to All Posts</a></p>
</div>
@endsection
