import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class JapaneseLibrary {
  @PrimaryGeneratedColumn('uuid')
  JapaneseLibId: string;

  @Column({ default: 0 })
  wordCount: number;

  @Column({ default: '' })
  word: string;
}
