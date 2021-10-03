export interface TabFilterPropsType {
  activeTab: string | number;
  handleFilter: any;
  tabItems: [{ name: string; type: string | number }];
  isPending: boolean;
}
