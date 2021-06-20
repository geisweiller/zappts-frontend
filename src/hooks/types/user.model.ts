export interface UserContextData {
  signUp({ name, email, password }: SignUpType): Promise<any>;
  signIn({ email, password }: SignInType): Promise<any>;
}

export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface SignUpType {
  name: string;
  email: string;
  password: string;
}

export interface SignInType {
  email: string;
  password: string;
}
