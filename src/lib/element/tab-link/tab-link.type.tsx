export interface TabLinkComponentProps {
  activePath: string | undefined;
  pathItems: {
    name: string;
    path: string | Function;
    pathConfig?: { params?: { type?: string } };
  }[];
  disabled: boolean;
}
