import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { ulid } from "ulid";

@Entity()
export class Habilidad {
    
  @PrimaryColumn()
  id: string;

  @Column()
  nombre: string;

  @BeforeInsert()
  generateUlid() {
    this.id = ulid();
  }
}