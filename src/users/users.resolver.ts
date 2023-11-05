import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './users.service';
import { Login, Register } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UserService) {}

  @Mutation('register')
  async register(@Args('Register') register: Register) {
    return await this.usersService.create(register);
  }
  @Mutation('login')
  async login(@Args('Login') login: Login) {
    return await this.usersService.login(login);
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }
  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}
