import { BaseRepository } from '../../../../domain/repositories/BaseRepository';
import { mysqlConnection } from '../data-source';
import { DataSource, EntityTarget, Repository } from 'typeorm';

export class MysqlRepository<T> implements BaseRepository<T> {

  public repository: Repository<T>;
  private connection: DataSource = mysqlConnection;
  private entity: EntityTarget<T>;

  constructor() {
    this.repository = this.connection.getRepository(this.entity);
  }

  find(): Promise<T[]> {
    return this.repository.find();
  }
}