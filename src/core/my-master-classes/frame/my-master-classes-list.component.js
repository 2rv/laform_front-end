import styled from 'styled-components';

import { MyMasterClassListItemComponent } from './my-master-class-list-item.component';

import { spacing } from 'src/lib/theme';

export function MyMasterClassesListComponent({ myMasterClassesList }) {
  return (
    <UL>
      {myMasterClassesList.map((myMasterClass) => (
        <MyMasterClassListItemComponent key={myMasterClass.id} {...myMasterClass} />
      ))}
    </UL>
  );
}

const UL = styled.ul`
  padding-top: ${spacing(4)};
`;
