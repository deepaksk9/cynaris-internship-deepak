<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;

class PostCommentSeeder extends Seeder
{
    public function run(): void
    {
        Post::factory(20)
            ->hasComments(fake()->numberBetween(1, 5))
            ->create();
    }
}
