export interface EventList {
  event_id: string;
  title: string;
  start_date: string;
  end_date: string;
  link: string;
  imgUrl: string;
}

export interface NoteData {
  nickname: string;
  date: string;
  password1: string;
  password2: string;
  content: string;
}

export interface NoteDetail {
  nickname: string;
  content: string;
  show_date: string;
  date: string;
  problem_num: number;
  check_num: number;
}

export interface EditNote {
  nickname: string;
  content: string;
  show_date: string;
}

interface User {
  name: string;
  coded_email: string;
  introduction: string;
}

interface Omr {
  color: number;
  pageNum: number;
  omrInfo: [];
  noteInfo: [];
  isOwner: boolean;
}

export interface OmrData {
  user: User;
  omr: Omr;
}