import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Login, Register } from 'src/users/dto/create-user.input';
import { UserService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private service: UserService) {}

  @HttpCode(HttpStatus.OK)
  @ApiBody({
    type: 'object',
    schema: {
      properties: {
        username: { type: 'string' },
        password: { type: 'string' },
      },
    },
  })
  @Post('register')
  @ApiBody({ type: Register })
  async register(@Body() user: Register) {
    const newUser = await this.service.create(user);
    return await this.authService.createToken(newUser.id);
  }

  @Post('login')
  @ApiBody({ type: Login })
  async login(@Body() user: Login) {
    return await this.authService.signIn(user.contact, user.password);
  }
}
