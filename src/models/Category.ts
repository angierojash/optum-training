import { Entity, ObjectIdColumn, Column, BaseEntity, ObjectId } from "typeorm";

@Entity("Category")
export class Category extends BaseEntity {
  @ObjectIdColumn()
  _id!: ObjectId

  @Column()
  name!: string;
}
