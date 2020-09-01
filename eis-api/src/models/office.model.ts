import {Entity, model, property} from '@loopback/repository';

@model()
export class Office extends Entity {
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
  address: string;

  @property({
    type: 'number',
    required: true,
  })
  postcode: number;

  @property({
    type: 'number',
    required: true,
  })
  cityId: number;

  @property({
    type: 'number',
  })
  lat?: number;

  @property({
    type: 'number',
  })
  lon?: number;


  constructor(data?: Partial<Office>) {
    super(data);
  }
}

export interface OfficeRelations {
  // describe navigational properties here
}

export type OfficeWithRelations = Office & OfficeRelations;
