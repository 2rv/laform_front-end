import { ReactChild } from 'react';

export interface TabBlocksComponentProps {
  children: ReactChild[];
  tabItems: string[];
  otherUseState?: [number, (val: number) => void];
  disabled?: boolean;
}
