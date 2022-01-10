export interface LoginData {
  email: string;
  user_pw: string;
}

export interface SignUpData {
  email: string;
  user_pw: string;
  sex: string;
  birth: string;
}

export interface ErrorData {
  loading: boolean;
  error: Error | null;
}

export interface LoginState {
  error: ErrorData;
  auth: boolean | null;
  data: LoginData | null;
}

export interface SignUpState {
  auth: boolean | null;
  error: ErrorData;
  data: SignUpData | null;
}

export interface PostInputData {
  title: string;
  tag: string;
  contents: string;
  deadline: string;
}

export interface PostState {
  error: ErrorData;
  data: PostInputData;
  success: PostSuccessData | null;
}

export interface PostSuccessData {
  id: number;
  title: string;
  username: string;
  tag: string;
  contents: string;
  deadline: string;
}

export interface PostListData {
  tag: any;
  username: any;
  page: any;
}

export interface PostListState {
  error: ErrorData;
  data: PostListData | null;
  success: PostSuccessData[] | null;
}

export interface Comment {
  content: string;
  username: string;
}
