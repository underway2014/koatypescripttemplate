import {Table, Column, Model} from 'sequelize-typescript'

@Table({
  tableName: 'files'
})
export default class Files extends Model {
    @Column({
      comment: 'user id'
    })
    public user_id: number;

    @Column({
      comment: 'file name'
    })
    public name: string;

    @Column({
      comment: 'file size'
    })
    public size!: number;
    
}