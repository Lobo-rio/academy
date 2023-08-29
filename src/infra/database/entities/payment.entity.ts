import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Member } from './member.entity';

@Entity({ name: 'payments' })
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'member_id' })
    memberId: string;

    @ManyToOne(() => Member)
    @JoinColumn({ name: "member_id"})
    member: Member;

    @Column({ precision: 10.2 })
    value: number;

    @Column({ name: 'pay_day' })
    payDay: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
