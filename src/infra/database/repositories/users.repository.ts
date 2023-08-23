import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
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
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async findById(id: string) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) return null;
      return user;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error});
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await this.userRepository.findOne({ where: { email } });
      if (!user) return null;
      return user;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error});
    }
  }

  async create(data: CreateUserDto) {
    try {
      const userNew = this.userRepository.create(data);
      await this.userRepository.save(userNew);
      return userNew;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error});
    }
  }

  async update(id: string, data: UpdateUserDto) {
    try {
      const user = await this.findById(id);
      const userUpdate = this.userRepository.merge(user, data);
      await this.userRepository.save(userUpdate);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error});
    }
  }

  async remove(id: string) {
    try {
      await this.userRepository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error});
    }
  }
}
