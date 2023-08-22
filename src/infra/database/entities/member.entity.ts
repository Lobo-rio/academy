import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'members' })
export class Member {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    phone: string;

    @Column({ name: 'is_active' })
    isActive: boolean;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;
}
