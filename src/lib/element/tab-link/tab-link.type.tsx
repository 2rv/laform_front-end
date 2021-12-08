export interface TabLinkComponentProps {
  activePath: string;
  pathItems: [
    { name: string; path: string; pathConfig?: { params?: { type?: string } } },
  ];
  disabled: boolean;
}
