import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") // uuid id를 생성한다.  increment숫자를 1씩 증가시킴
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  // @Column({})
  // isDeleted: boolean;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;
}

// 값을 무조건 받을거다 하면 ! 있어도 되구 없어도 된다면 ? 로 표시
