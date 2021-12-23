import { FileType } from 'src/lib/basic-types';
export type SelectFileItemProps = {
  index: number;
  file: FileType;
  name: string;
  setFieldValue: (n: string, v: FileType) => void;
  remove: (i: number) => void;
};
export type SelectFilesListProps = {
  files?: FileType[];
  name?: string;
  setFieldValue: (n: string, v: FileType) => void;
};
