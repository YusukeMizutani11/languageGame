import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  passwordHash: string;

  @Column({ default: null })
  firstName: string;

  @Column({ default: null })
  lastName: string;

  @Column({ default: null, unique: true })
  userName: string;

  @Column({ default: null })
  libraryId: string;
}
