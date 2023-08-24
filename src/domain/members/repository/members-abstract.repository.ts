import { Member } from '../../../infra/database/entities/member.entity';
import { CreateMemberDto } from '../dto/create-member.dto';
import { UpdateMemberDto } from '../dto/update-member.dto';

export interface IMembersRepository {
    findAll(): Promise<Member[]>;
    findById(id: string): Promise<Member | null>;
    findByEmail(email: string): Promise<Member | null>;
    create(data: CreateMemberDto): Promise<Member | null>;
    update(id: string, data: UpdateMemberDto): Promise<void>;
    remove(id: string): Promise<void>;
}
