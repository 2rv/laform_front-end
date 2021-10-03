import { ReactNode } from 'react';

export interface PopupPropsType {
  content: any;
  children: ReactNode;
  top?: number;
  middleLeft?: boolean;
  mobileRight?: boolean;
  disableRelative?: boolean;
}
