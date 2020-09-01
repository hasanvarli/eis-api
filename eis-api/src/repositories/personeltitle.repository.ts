import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataSourcePgDataSource} from '../datasources';
import {Personeltitle, PersoneltitleRelations} from '../models';

export class PersoneltitleRepository extends DefaultCrudRepository<
  Personeltitle,
  typeof Personeltitle.prototype.id,
  PersoneltitleRelations
  > {
  constructor(
    @inject('datasources.dataSourcePg') dataSource: DataSourcePgDataSource,
  ) {
    super(Personeltitle, dataSource);
  }
}
