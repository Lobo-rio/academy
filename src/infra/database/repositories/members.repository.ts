import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
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
    try {
      return await this.memberRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async findById(id: string) {
    try {
      const member = await this.memberRepository.findOne({ where: { id } });
      if (!member) return null;
      return member;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async findByEmail(email: string) {
    try {
      const member = await this.memberRepository.findOne({ where: { email } });
      if (!member) return null;
      return member;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async create(data: CreateMemberDto) {
    try {
      const memberNew = this.memberRepository.create(data);
      await this.memberRepository.save(memberNew);
      return memberNew;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async update(id: string, data: UpdateMemberDto) {
    try {
      const member = await this.findById(id);
      const memberUpdate = this.memberRepository.merge(member, data);
      await this.memberRepository.save(memberUpdate);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async remove(id: string) {
    try {
      await this.memberRepository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }
}
