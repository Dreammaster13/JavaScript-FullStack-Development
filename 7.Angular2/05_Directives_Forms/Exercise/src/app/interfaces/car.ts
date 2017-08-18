export class Car {
  id: number;
  make: string;
  model: string;
  year: number;
  engine: number;
  owner: string;
  image: string;
  createdOn: Date;
  comments: Array<string>;

  constructor() {
    this.id = null;
    this.make = '';
    this.model = '';
    this.year = null;
    this.engine = null;
    this.owner = '';
    this.image = '';
    this.createdOn = new Date;
    this.comments = [];
  }
}
