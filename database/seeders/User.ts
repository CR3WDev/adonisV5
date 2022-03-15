import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'eMail'
    await User.updateOrCreateMany(uniqueKey, [
      {
        eMail: 'virk@adonisjs.com',
        password: 'secret2',
      },
      {
        eMail: 'romain@adonisjs.com',
        password: 'supersecret2',
      },
      {
        eMail: 'cr3w@adonisjs.com',
        password: 'supersecret2',
      },
    ])
  }
}
