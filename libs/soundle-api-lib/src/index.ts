import { Module } from '@nestjs/common';
import { UsersModule } from './lib/users/users.module';
import { PostsModule } from './lib/posts/posts.module';
import { SongsModule } from './lib/songs/songs.module';
import { ChatsModule } from './lib/chats/chats.module';


@Module({
  imports: [
    UsersModule,
    PostsModule,
    SongsModule,
    ChatsModule
  ],
})

export class RootModule {}
