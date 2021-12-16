import { ButtonHTMLAttributes } from 'react';

export interface ButtonPropsType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  tid?: string;
  tvalue?: object;
}
