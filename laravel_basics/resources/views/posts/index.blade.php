
@extends('layouts.app')

@section('title', 'All Posts')

@section('content')
<div class="container">
    <h1>All Posts</h1>

    <a href="{{ route('posts.create') }}">+ Create New Post</a>

    @if (session('success'))
        <p style="color: green;">
            {{ session('success') }}
        </p>
    @endif

    @if ($posts->isEmpty())
        <p>No posts found. Create your first post!</p>
    @else
        <table border="1" cellpadding="10" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($posts as $post)
                    <tr>
                        <td>{{ $post->id }}</td>
                        <td>{{ $post->title }}</td>
                        <td>{{ $post->author }}</td>
                        <td>
                            <a href="{{ route('posts.show', $post) }}">View</a>
                            |
                            <a href="{{ route('posts.edit', $post) }}">Edit</a>
                            |
                            <form action="{{ route('posts.destroy', $post) }}"
                                  method="POST"
                                  style="display:inline;">
                                @csrf
                                @method('DELETE')
                                <button type="submit"
                                        onclick="return confirm('Delete this post?')">
                                    Delete
                                </button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endif

    <p><a href="{{ route('home') }}">Back to Home</a></p>
</div>
@endsection
