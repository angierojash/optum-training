import { Entity, ObjectIdColumn, ObjectId, Column, BaseEntity } from "typeorm";

@Entity("Product")
export class Product extends BaseEntity {
  @ObjectIdColumn()
  _id!: ObjectId

  @Column()
  name!: string

  @Column()
  price!: number

  @Column()
  stock!: number

  @Column()
  description!: string

  @Column()
  categories!: string[]

  @Column()
  available!: boolean
}
