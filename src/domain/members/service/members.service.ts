import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';

import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';
import { IMembersRepository } from '../repository/members-abstract.repository';
import { Member } from '../../../infra/database/entities/member.entity';

@Injectable()
export class MembersService {
  constructor(
    @Inject("IMembersRepository")
    private readonly repository: IMembersRepository
  ) {}

  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    const memberExisted = await this.repository.findByEmail(createMemberDto.email);
    if (memberExisted) throw new BadRequestException('Resource existed!', { description: 'There is a registered member with this email' });
    
    const member = await this.repository.create(createMemberDto);
    return member;
  }

  async findAll(): Promise<Member[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<Member> {
    const memberExisted = await this.repository.findById(id);
    if (!memberExisted) throw new NotFoundException('Resource not found!!', { description: 'There is no registered member with this identifier' });
    return memberExisted;
  }

  async update(id: string, updateMemberDto: UpdateMemberDto): Promise<void> {
    await this.findById(id);
    await this.repository.update(id, updateMemberDto);
  }

  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.remove(id);
  }
}
