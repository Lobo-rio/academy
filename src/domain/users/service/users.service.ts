import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException, UnauthorizedException } from '@nestjs/common/exceptions';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { IUsersRepository } from '../repository/users-abstract.repository';
import { User } from '../../../infra/database/entities/user.entity';
import { MessageErrorHelpper } from '../../../helppers/errors';

@Injectable()
export class UsersService {
  constructor(
    @Inject("IUsersRepository")
    private readonly repository: IUsersRepository
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userExisted = await this.repository.findByEmail(createUserDto.email)
    if (userExisted) throw new BadRequestException('Resource existed!', { description: 'There is a registered user with this email' });
    
    const user = await this.repository.create(createUserDto);
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<User> {
    const userExisted = await this.repository.findById(id)
    if (!userExisted) throw new NotFoundException('Resource not found!!', { description: 'There is no registered user with this identifier' });
    return userExisted;
  }

  async findByEmail(email: string): Promise<User> {
    const userExisted = await this.repository.findByEmail(email)
    if (!userExisted) throw new UnauthorizedException('Resource not found!!', { description: MessageErrorHelpper.PASSWORD_OR_EMAIL_INVALID } );
    return userExisted;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    await this.findById(id)
    await this.repository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<void> {
    await this.findById(id)
    await this.repository.remove(id);
  }
}
