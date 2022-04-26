export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
export type FontStyle = 'normal' | 'italic' | undefined;

type Font = {
  fontFamily: string;
  fontSize: number;
  fontWeight: FontWeight;
  fontStyle: FontStyle;
  letterSpacing: number;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
  color: string;
};

export type FontType = {
  [key: string]: Font;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  alterEgo: string;
  imgUrl: string;
  comic: string;
};
