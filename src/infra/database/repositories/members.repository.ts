import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { Member } from '../entities/member.entity';
import { IMembersRepository } from '../../../domain/members/repository/members-abstract.repository';
import { CreateMemberDto } from '../../../domain/members/dto/create-member.dto';
import { UpdateMemberDto } from '../../../domain/members/dto/update-member.dto';

@Injectable()
export class MembersRepository implements IMembersRepository{
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async findAll() {
    return await this.memberRepository.find();
  }

  async findById(id: string) {
    const member = await this.memberRepository.findOne({ where: { id } });

    if (!member) return null;

    return member;
  }

  async findByEmail(email: string) {
    const member = await this.memberRepository.findOne({ where: { email } });

    return member;
  }

  async create(data: CreateMemberDto) {
    const member = await this.findByEmail(data.email);

    if (member) return null;

    const memberNew = this.memberRepository.create(data);

    await this.memberRepository.save(memberNew);
  }

  async update(id: string, data: UpdateMemberDto) {
    const member = await this.findById(id);

    const memberUpdate = this.memberRepository.merge(member, data);

    await this.memberRepository.save(memberUpdate);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.memberRepository.softDelete(id);
  }
}
