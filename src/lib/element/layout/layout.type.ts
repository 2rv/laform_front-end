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
export interface SectionLayoutPropsType {
  type?:
    | 'DEFAULT'
    | 'MEDIUM'
    | 'SMALL'
    | 'LARGE'
    | 'TEXT'
    | 'TEXT_SMALL'
    | undefined;
  children: React.ReactElement<any> | React.ReactElement<any>[] | null;
  className?: string;
}
export interface FieldLayoutPropsType {
  type?: 'double' | undefined;
  adaptive?: boolean;
  children: React.ReactElement<any>[] | null;
}
