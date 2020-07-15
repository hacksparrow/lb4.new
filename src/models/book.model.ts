import {Entity, model, property} from '@loopback/repository';

@model()
export class Book extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  title?: string;


  // @property({
  //   type: 'number',
  //   default: 12,
  //   example: 12
  // })
  // rate: number;


  @property({
    required: false,
    default: 12,
    jsonSchema: {
      range: [10, 100],
      errorMessage: {range: 'price should be in range 0 to 100'},
    },
  })
  price: number;

  @property({
    name: 'name',
    description: "The product's common name.",
    type: 'string',
    // Specify the JSON validation rules here
    jsonSchema: {
      maxLength: 5,
      minLength: 3,
      errorMessage: {minLength: 'TOO SHORT', maxLength: 'TOO LONG'}
    },
  })
  public name: string;


  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
