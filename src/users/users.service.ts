import { Injectable } from '@nestjs/common';
import { Login, Register } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(register: Register) {
    return await this.userRepository.create(register);
  }
  async login(login: Login) {
    return await this.userRepository.findOne({
      where: { contact: login.contact },
    });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }
  async findContact(contact: string) {
    return await this.userRepository.findOne({ where: { contact } });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return await this.userRepository.update(id, updateUserInput);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
