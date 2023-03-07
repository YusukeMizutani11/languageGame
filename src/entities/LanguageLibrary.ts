import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Library {
  @PrimaryGeneratedColumn('uuid')
  libraryId: string;

  @Column({ default: false })
  wordUsed: boolean;

  @Column({ default: 0 })
  wordCount: number;

  @Column({ default: '' })
  englishLibId: string;

  @Column({ default: '' })
  spanishLibId: string;

  @Column({ default: '' })
  JapaneseLibId: string;
}
