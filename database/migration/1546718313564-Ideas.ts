import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Ideas1546718313564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'ideas',
        columns: [
          {
            name: 'id',
            type: 'text',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'text',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'description',
            type: 'text',
          },
        ],
      }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('ideas');
    }

}
