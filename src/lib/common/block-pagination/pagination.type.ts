export interface PaginationComponentProps {
  listItems: [];
  pending: boolean;
}

export interface PaginationContainerProps {
  totalItems: number;
  paginationAction: Function;
  listItems: [];
  pending: boolean;
  success: boolean;
}
