import { BasicCardList } from 'src/lib/element/card-list';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { PaginationComponentProps } from './pagination.type';
import styled from 'styled-components';
import { spacing } from 'src/lib/theme';

export function PaginationComponent(props: PaginationComponentProps) {
  const { listItems, pending, ...otheProps } = props;
  return (
    <Container>
      <BasicCardList items={listItems} {...otheProps} />
      <CenteredSpinner isPending={pending} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    gap: ${spacing(3)};
  }
`;
