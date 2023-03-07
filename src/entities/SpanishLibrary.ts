import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SpanishLibrary {
  @PrimaryGeneratedColumn('uuid')
  spanishLibId: string;

  @Column({ default: 0 })
  wordCount: number;

  @Column({ default: '' })
  word: string;
}
