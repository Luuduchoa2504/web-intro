export class Login {
  constructor(public username: string, public password: string, public rememberMe: boolean) {}
}

export interface User {
  name: string,
  email: string,
  password: string,
  role: string,
}

export interface DataResponseLogin {
  success : Boolean,
  message: string,
  accessToken: string,
  user: User,
}
