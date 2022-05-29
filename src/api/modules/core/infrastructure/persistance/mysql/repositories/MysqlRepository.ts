import { Repository } from '../../../../domain/repositories/Repository';
import { EntityBase } from '../../../../domain/entities/EntityBase';
import { mysqlConnection } from '../data-source';
import { Entity } from 'typeorm';

export class MysqlRepository<T extends EntityBase> implements Repository<T> {

  private repository;

  constructor() {
    this.repository = mysqlConnection.getRepository(T as Entity);
  }

  find() {
    return [];
  }
}