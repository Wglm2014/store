export class Company {
  constructor(
    public id?: number,
    public title?: string,
    public commercialName?: string,
    public address?: string,
    public telephone?: string,
    public otherPhone?: string,
    public logo?: any,
    public logoContentType?: string
  ) { }

  buildLogo(logoContentType: string, logo: any) {
    return `data:${logoContentType};base64,${logo}`;
  }
}


