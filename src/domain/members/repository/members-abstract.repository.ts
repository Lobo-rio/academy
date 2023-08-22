import { NotFoundException } from '@nestjs/common';

import { Member } from '../../../infra/database/entities/member.entity';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';

export interface IMembersRepository {
    findAll(): Promise<Member[]>;
    findById(id: string): Promise<Member | NotFoundException>;
    findByEmail(email: string): Promise<Member>;
    create(data: CreateMemberDto): Promise<void | NotFoundException>;
    update(id: string, data: UpdateMemberDto): Promise<void>;
    remove(id: string): Promise<void>;
}
