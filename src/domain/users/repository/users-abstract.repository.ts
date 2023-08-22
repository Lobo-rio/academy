import { NotFoundException } from '@nestjs/common';

import { User } from '../../../infra/database/entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUsersRepository {
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | NotFoundException>;
    findByEmail(email: string): Promise<User>;
    create(data: CreateUserDto): Promise<void | NotFoundException>;
    update(id: string, data: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<void>;
}
