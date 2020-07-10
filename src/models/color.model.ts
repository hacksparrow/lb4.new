import {Entity, model, property} from '@loopback/repository';

@model()
export class Color extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;


  constructor(data?: Partial<Color>) {
    super(data);
  }
}

export interface ColorRelations {
  // describe navigational properties here
}

export type ColorWithRelations = Color & ColorRelations;
