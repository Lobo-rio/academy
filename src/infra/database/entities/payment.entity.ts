import {
    Entity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'payments' })
export class Payment {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    membro_id: string;

    @Column()
    valor: number;

    @Column()
    data_pagamento: Date;

    @CreateDateColumn({ name: 'created-at' })
    createdAt: string;

    @DeleteDateColumn({ name: 'deleted-at' })
    deletedAt: string;
}
