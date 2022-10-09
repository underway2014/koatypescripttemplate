import {Table, Column, Model} from 'sequelize-typescript'

@Table({
  tableName: 'users'
})
export default class User extends Model {
    // @Column({ 
    //     primaryKey: true,
    //     autoIncrement: true,
    //     unique: true
    // })
    // id: number;

    @Column({
      comment: 'user name'
    })
    name: string;

    @Column({
      comment: 'user email'
    })
    age!: number;
    
}