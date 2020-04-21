
export interface ISession {
  accessToken: string,
  validThrough: Date | null, // expiration dateTime
  validateSession: () => boolean;
}

export class Session implements ISession {
  
  constructor(_accessToken: string, _validThrough: Date | null) {
    this.accessToken = _accessToken;
    this.validThrough = _validThrough;
  }

  accessToken: string;
  validThrough: Date | null;

  validateSession() {
    const date = new Date();
    return this.validThrough !== null ? (this.validThrough < date) : false;
  }

}