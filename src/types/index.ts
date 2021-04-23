export interface PhotoType{
  id: number;
  url: string;
}

export interface CommentTypeSubmit{
  name: string;
  comment: string;
}

export interface CommentType{
  id: number;
  text: string;
  date: number;
}

export interface PhotoPreviewType extends PhotoType{
  comments: CommentType[] | null;
}
