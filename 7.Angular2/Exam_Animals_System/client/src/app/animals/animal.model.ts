export class AnimalModel {
  constructor(
    public name?: string,
    public age?: number,
    public color?: string,
    public type?: string,
    public price?: number,
    public image?: string,
    public breed?: string,
    public reactions?: object,
    public createdOn?: any
  ) {}
}
