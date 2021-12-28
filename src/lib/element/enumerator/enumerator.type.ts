export interface EnumeratorCountProps {
  onChange: (val: number) => void;
  count: number;
  minNumber?: number;
  maxNumber?: number;
  titleTid?: string;
}
export interface EnumeratorLengthProps {
  onChange: (val: number) => void;
  length: number;
  minLength?: number;
  maxLength?: number;
  titleTid?: string;
}
