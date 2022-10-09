import {Table, Column, Model} from 'sequelize-typescript'

@Table({
  tableName: 'files'
})
export default class Files extends Model {
    @Column({
      comment: 'user id'
    })
    user_id: number;

    @Column({
      comment: 'file name'
    })
    name: string;

    @Column({
      comment: 'file size'
    })
    size!: number;
    
}