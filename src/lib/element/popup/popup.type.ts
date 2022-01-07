import { ReactNode } from 'react';

export interface PopupPropsType {
  content: ReactNode | ((setVisible: (visible: boolean) => void) => ReactNode);
  children: ReactNode;
  top?: number;
  middleLeft?: boolean;
  mobileRight?: boolean;
  disableRelative?: boolean;
  disableBackground?: boolean;
  isLeft?: boolean;
}
