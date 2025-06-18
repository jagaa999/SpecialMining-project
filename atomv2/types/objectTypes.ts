export interface ObjectLight {
  value?: string | number | boolean;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export interface ObjectButton {
  value?: string | number | boolean;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

export interface ObjectFull {
  title?: string | ObjectLight;
  description?: string | ObjectLight;
  mainImage?: string | ObjectLight;
  button?: ObjectButton;
}

export interface BasketItemLight {
  id: number | string;
  title: string;
  mainimage: string;
  price: number | string;
  description?: string;
  count?: number;
}
