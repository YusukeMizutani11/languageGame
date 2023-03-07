import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EnglishLibrary {
  @PrimaryGeneratedColumn('uuid')
  englishLibId: string;

  @Column({ default: 0 })
  wordCount: number;

  @Column({ default: '' })
  word: string;
}
