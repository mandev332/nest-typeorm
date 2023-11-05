import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(contact, password) {
    try {
      const user = await this.userService.findContact(contact);
      if (user?.contact !== contact) {
        throw new UnauthorizedException();
      }
      if (!(await bcrypt.compare(password, user.password))) {
        throw new Error('Wrong Password!');
      }
      return {
        token: await this.jwtService.signAsync(
          { id: user.id },
          { secret: process.env.SECRET },
        ),
      };
    } catch (error) {
      return error.message;
    }
  }
  async createToken(id: number) {
    return {
      token: await this.jwtService.signAsync(
        { id },
        { secret: process.env.SECRET },
      ),
    };
  }
}
