import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
=======
import { MongooseModule } from '@nestjs/mongoose';
>>>>>>> 5a3128a (update)
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { User } from './users/entities/user.entity';
import { Post } from './posts/entities/post.entity';
import { Comment } from './comments/entities/comment.entity';
<<<<<<< HEAD
=======
import mongodbConfig from './config/mongodb.config';
>>>>>>> 5a3128a (update)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Config ni global qilish (har joyda ishlaydi)
<<<<<<< HEAD
=======
      load: [mongodbConfig],
>>>>>>> 5a3128a (update)
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User, Post, Comment],
        synchronize: true, // Faqat developmentda true bo‘lishi kerak
        autoLoadEntities: true,
      }),
    }),
<<<<<<< HEAD
=======
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('mongodb.uri'),
        user: configService.get<string>('mongodb.user'),
        pass: configService.get<string>('mongodb.password'),
      }),
    }),
>>>>>>> 5a3128a (update)
    UsersModule,
    PostsModule,
    CommentsModule,
  ],
})
export class AppModule {}
