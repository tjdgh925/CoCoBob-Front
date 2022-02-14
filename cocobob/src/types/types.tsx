export interface LoginData {
  username: string;
  password: string;
}

export interface SignUpData {
  username: string;
  password: string;
  // sex: string;
  // birth: string;
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
  contents: string;
  tag: string;
  // deadline: string;
}

export interface PostState {
  error: ErrorData;
  data: PostInputData;
  change: number;
  success: PostSuccessData | null;
}

export interface PostSuccessData {
  id: number;
  title: string;
  username: string;
  contents: string;
  tag: string;
  view: any;
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

export interface PostChangeData {
  id: any;
  title: string;
  contents: string;
  tag: string;
}

export interface ResetPasswordState {
  error: ErrorData;
  verify: boolean;
  username: string | null;
  final: boolean;
}

export interface VerifyInput {
  username: string;
  password: string;
}

export interface Board {
  id: number;
  title: string;
  username: string;
  contents: string;
  tag: string;
  view: number;
}

export interface Reply {
  rno: number;
  username: string;
  content: string;
  board: Board;
}

export interface ReplyInput {
  postId: number;
  content: string;
}

export interface ReplyState {
  error: ErrorData;
  result: Reply[] | null;
  writeSuccess: boolean;
}
