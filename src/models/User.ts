import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Note } from "./Note";

@Table({
  tableName: User.USER_TABLE_NAME,
})
export class User extends Model {
  public static USER_TABLE_NAME = "users" as string;
  public static USER_ID = "id" as string;
  public static USER_FIRST_NAME = "first_name" as string;
  public static USER_LAST_NAME = "last_name" as string;
  public static USER_EMAIL = "email" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: User.USER_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    field: User.USER_FIRST_NAME,
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
    field: User.USER_LAST_NAME,
  })
  last_name!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    field: User.USER_EMAIL,
  })
  email!: string;

  @HasMany(() => Note)
  notes!: Note[];
}
