export interface ObjectLight {
  value?: string | number | boolean;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface ObjectFull {
  title?: ObjectLight;
  description?: ObjectLight;
  mainImage?: ObjectLight;
}
