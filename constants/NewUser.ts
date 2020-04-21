import { IUser } from "../models/User";
import { Session } from "../models/Session";

export const DefaultUser: IUser = {
  userID: 0,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  session: new Session('', null)
}