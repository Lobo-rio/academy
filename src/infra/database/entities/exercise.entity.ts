import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'exercises' })
export class Exercise {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ name: 'is_active' })
    isActive: boolean;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;
}
