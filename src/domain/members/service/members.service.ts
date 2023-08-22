import { Inject, Injectable } from '@nestjs/common';

import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';
import { IMembersRepository } from '../repository/members-abstract.repository';

@Injectable()
export class MembersService {
  constructor(
    @Inject("IMembersRepository")
    private readonly repository: IMembersRepository
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    return await this.repository.create(createMemberDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, updateMemberDto: UpdateMemberDto) {
    return await this.repository.update(id, updateMemberDto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}
