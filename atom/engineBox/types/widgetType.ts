export type ObjectLight = {
  value?: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
};

export type ObjectFull = {
  title?: ObjectLight;
  description?: ObjectLight;
  mainImage?: ObjectLight;
};

export type CustomerActionObject = {
  record_id?: String;
  type?: String;
  title?: String;
  description?: String;
  body?: any;
  mainnumber?: String;
  urlpath?: String;
};
