import { ISession } from "./Session";

export interface IUser {
  userID: number,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  session: ISession
}
