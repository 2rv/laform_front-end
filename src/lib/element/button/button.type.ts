import { HTMLAttributes } from 'react';

export interface ButtonPropsType extends HTMLAttributes<HTMLButtonElement> {
  tid?: string;
  tvalue?: object;
  icon?: any;
  disabled?: boolean;
  children?: any;
  width?: number;
  adaptive?: boolean;
}

export interface IconButtonPropsType extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children: any;
  width?: number;
  auto?: boolean;
}
