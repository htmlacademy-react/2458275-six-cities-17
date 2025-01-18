export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type CommentForm = {
  rating: number;
  comment: string;
}

export type CommentData = {
  id: string;
  comment: CommentForm;
}

export type Review = CommentForm & {
  id: string;
  date: string;
  user: User;
}


