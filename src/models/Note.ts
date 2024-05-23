import {BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./User";

@Table({
    tableName: Note.NOTE_TABLE_NAME
})
export class Note extends Model {

    public static NOTE_TABLE_NAME = 'note' as string
    public static NOTE_ID = 'id' as string
    public static NOTE_NAME = 'name' as string
    public static NOTE_DESCRIPTION = 'description' as string
    public static NOTE_USER = 'user_id' as string

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Note.NOTE_ID
    })
    id!: number

    @Column({
        type: DataType.STRING,
        field: Note.NOTE_NAME
    })
    name!: string

    @Column({
        type: DataType.STRING,
        field: Note.NOTE_DESCRIPTION
    })
    description!: string

    @ForeignKey(() => User)
    @Column
    user_id!: number;
  
    @BelongsTo(() => User)
    user!: User;

}