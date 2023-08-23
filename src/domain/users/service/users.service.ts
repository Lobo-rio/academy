import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUsersRepository } from '../repository/users-abstract.repository';
import { User } from '../../../infra/database/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject("IUsersRepository")
    private readonly repository: IUsersRepository
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.repository.findByEmail(createUserDto.email)
    
    if (user) throw new BadRequestException('Resource existed!', { description: 'There is a registered user with this email' })
    
    await this.repository.create(createUserDto);

    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<User> {
    const userExisted = await this.repository.findById(id)

    if (!userExisted) throw new NotFoundException('Resource not found!!', { description: 'There is no registered user with this identifier' })

    return userExisted;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const userExisted = await this.repository.findById(id)

    if (!userExisted) throw new NotFoundException('Resource not found!!', { description: 'There is no registered user with this identifier' })

    return await this.repository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const userExisted = await this.repository.findById(id)

    if (!userExisted) throw new NotFoundException('Resource not found!!', { description: 'There is no registered user with this identifier' })
    
    return await this.repository.remove(id);
  }
}
