import styled from 'styled-components';
import { PromocodesListItemComponent } from './promocodes-list-item.component'
import { Spinner } from '../../../../lib/element/spinner';
import { spacing } from '../../../../lib/theme';

export function PromocodesListComponent({ promocodes, isPending }) {
  return (
    <UnorderedList>
      {isPending ? (
        <Spinner />
      ) : (
        promocodes.map((promocode) => (
          <PromocodesListItemComponent key={promocode.id} {...promocode}  />
        ))
      )}
    </UnorderedList>
  );
}

const UnorderedList = styled.ul`
  display: grid;
  gap: ${spacing(3)};
`;
