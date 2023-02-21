export interface User {
  name: string;
  password: string;
  tokken: string;
  id: string;
}

export interface UserState extends User {
  isLogged: Boolean;
}
