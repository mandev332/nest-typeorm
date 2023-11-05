import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './users.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { AuthController } from 'src/auth/auth.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UserService, JwtService, AuthService],
  controllers: [UserController, AuthController],
})
export class UsersModule {}
