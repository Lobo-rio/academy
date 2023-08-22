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

    @Column()
    membersId: string;

    @Column()
    dateTraining: Date;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;
}
