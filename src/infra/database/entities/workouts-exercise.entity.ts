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

import { Training } from './training.entity';
import { Exercise } from './exercise.entity';

@Entity({ name: 'workouts_exercises' })
export class WorkoutsExercise {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'training_id', type: 'uuid' })
    trainingId: string;

    @ManyToOne(() => Training)
    @JoinColumn({ name: "training_id"})
    training: Training;

    @Column({ name: 'exercise_id', type: 'uuid' })
    exerciseId: string;

    @ManyToOne(() => Exercise)
    @JoinColumn({ name: "exercise_id"})
    exercise: Exercise;

    @Column()
    series: number;

    @Column()
    repetitions: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;

    constructor() {
        if (!this.id) this.id = uuid();
    }
}
