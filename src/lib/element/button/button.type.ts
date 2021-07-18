import { HTMLAttributes } from 'react';

export interface ButtonPropsType extends HTMLAttributes<HTMLButtonElement> {
  tid?: string;
  tvalue?: object;
  icon?: any;
  disabled?: boolean;
  children?: any;
}
