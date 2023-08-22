import { Inject, Injectable } from '@nestjs/common';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUsersRepository } from '../repository/users-abstract.repository';

@Injectable()
export class UsersService {
  constructor(
    @Inject("IUsersRepository")
    private readonly repository: IUsersRepository
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.repository.create(createUserDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.repository.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}
