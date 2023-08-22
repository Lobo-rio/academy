import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';
import { CreateUserDto } from '../../../domain/users/dto/create-user.dto';
import { UpdateUserDto } from '../../../domain/users/dto/update-user.dto';
import { IUsersRepository } from '../../../domain/users/repository/users-abstract.repository';

@Injectable()
export class UsersRepository implements IUsersRepository{
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findById(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) return null;

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    return user;
  }

  async create(data: CreateUserDto) {
    const user = await this.findByEmail(data.email);

    if (user) return null;

    const userNew = this.userRepository.create(data);

    await this.userRepository.save(userNew);
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.findById(id);

    const userUpdate = this.userRepository.merge(user, data);

    await this.userRepository.save(userUpdate);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.userRepository.softDelete(id);
  }
}
