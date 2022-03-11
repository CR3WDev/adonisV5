import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddLastLoginColumns extends BaseSchema {
  protected tableName = 'add_last_login_columns'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.dateTime('last_login_at')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('last_login_at')
    })
  }
}
