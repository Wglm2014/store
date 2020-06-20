export class Company {
  constructor(
    public id?: number,
    public title?: string,
    public commercialName?: string,
    public address?: string,
    public telephone?: string,
    public otherPhone?: string,
    public logo?: Blob,
    public logoContentType?: string
  ) { }
}
