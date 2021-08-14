export interface ContentLayoutPropsType {
  horizontal?: 'center' | undefined;
  vertical?: 'center' | undefined;
  children?: React.ReactElement<any> | React.ReactElement<any>[] | null;
  className?: string;
}

export interface PageLayoutPropsType {
  type?: 'DEFAULT' | 'SMALL' | 'MEDIUM' | undefined;
  children?: React.ReactElement<any> | React.ReactElement<any>[] | null;
  className?: string;
}

export interface IndentLayoutPropsType {
  type?: 'DEFAULT' | 'SMALL' | 'MEDIUM' | undefined;
  children?: React.ReactElement<any> | React.ReactElement<any>[] | null;
  className?: string;
}

export interface SectionLayoutPropsType {
  type?: 'DEFAULT' | 'MEDIUM' | 'SMALL' | 'LARGE' | undefined;
  children: React.ReactElement<any> | React.ReactElement<any>[] | null;
  className?: string;
}

export interface GridLayoutPropsType {
  type?: 'double' | undefined;
  children: React.ReactElement<any> | null;
}
