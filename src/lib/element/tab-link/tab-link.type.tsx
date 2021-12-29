export interface TabLinkComponentProps {
  activePath: string | undefined;
  pathItems: {
    name: string;
    path: string | (() => string);
    pathConfig?: { params?: { type?: string } };
  }[];
  disabled: boolean;
}
