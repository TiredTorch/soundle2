import { Module } from '@nestjs/common';
import { UsersModule } from './lib/users/users.module';
import { PostsModule } from './lib/posts/posts.module';


@Module({
  imports: [
    UsersModule,
    PostsModule
  ],
})

export class RootModule {}
