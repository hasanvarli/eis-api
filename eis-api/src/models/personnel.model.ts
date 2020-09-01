import {Entity, model, property} from '@loopback/repository';

@model()
export class Personnel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  surname: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'date',
    required: false,
  })
  startedDate: string;

  @property({
    type: 'number',
    required: true,
  })
  salary: number;

  @property({
    type: 'number',
    required: true,
  })
  departmentId: number;




  constructor(data?: Partial<Personnel>) {
    super(data);
  }
}

export interface PersonnelRelations {
  // describe navigational properties here
}

export type PersonnelWithRelations = Personnel & PersonnelRelations;
