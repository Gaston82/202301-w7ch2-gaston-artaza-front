export interface User {
  name: string;
  token: string;
  id: string;
}

export interface UserState extends User {
  isLogged: Boolean;
}

export interface UserCredentials {
  user: string;
  password: string;
}
