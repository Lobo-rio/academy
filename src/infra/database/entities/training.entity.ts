import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'trainings' })
export class Training {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ name: 'member-id' })
    memberId: string;

    @Column({ name: 'date-training' })
    dateTraining: Date;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;
}
