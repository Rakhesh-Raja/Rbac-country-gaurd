import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Role } from '../common/enums/role.enum';
import { Country } from '../common/enums/country.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    enum: Role,
  })
  role: Role;

  @Column({
    enum: Country,
  })
  country: Country;
}
