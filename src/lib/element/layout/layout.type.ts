import { ReactNode } from 'react';

export interface ContentLayoutPropsType {
  horizontal?: 'center' | undefined;
  vertical?: 'center' | undefined;
  children: any;
  className?: string;
}
export interface PageLayoutPropsType {
  type?: 'DEFAULT' | 'SMALL' | 'MEDIUM' | undefined;
  children: any;
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
  children: ReactNode;
  className?: string;
}
export interface FieldLayoutPropsType {
  type?: 'double' | undefined;
  adaptive?: boolean;
  children: any;
  className?: string;
}
