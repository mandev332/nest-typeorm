import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { UserService } from 'src/users/users.service';
import { UsersResolver } from 'src/users/users.resolver';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'Mahalla',
      signOptions: { expiresIn: '300s' },
    }),
  ],
  controllers: [AuthController, UsersResolver],
  providers: [AuthService, UserService],
  exports: [AuthModule],
})
export class AuthModule {}
