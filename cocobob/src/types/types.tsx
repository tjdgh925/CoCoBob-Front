export interface loginData {
  email: string;
  user_pw: string;
}

export interface signUpData {
  email: string;
  user_pw: string;
  sex: string;
  birth: string;
}

export interface errorData {
  loading: boolean;
  error: Error | null;
}

export interface loginState {
  error: errorData;
  auth: boolean | null;
  data: loginData | null;
}

export interface signUpState {
  auth: boolean | null;
  error: errorData;
  data: signUpData | null;
}
