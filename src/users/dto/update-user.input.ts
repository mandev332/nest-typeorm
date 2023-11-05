import { Register } from './create-user.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserInput extends PartialType(Register) {
  id: number;
}
