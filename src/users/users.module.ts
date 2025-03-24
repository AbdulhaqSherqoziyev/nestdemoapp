import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // User entity qo‘shildi
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule], // Eksport qilish kerak, agar boshqa joyda ishlatmoqchi bo‘lsangiz
})
export class UsersModule {}
