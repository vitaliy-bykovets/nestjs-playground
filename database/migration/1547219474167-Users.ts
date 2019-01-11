import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Users1547219474167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'text',
            isPrimary: true,
          },
          {
            name: 'username',
            type: 'text',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'text',
          },
        ],
      }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('users');
    }

}
