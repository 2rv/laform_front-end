import styled from 'styled-components';

import { MyPatternsListItemComponent } from './my-patterns-list-item.component';

import { ContentLayout } from 'src/lib/element/layout';
import { spacing } from 'src/lib/theme';

export function MyPatternsListComponent({ myPatternsList }) {
  return (
    <UL>
      {myPatternsList.map((myPattern) => (
        <MyPatternsListItemComponent key={myPattern.id} {...myPattern} />
      ))}
    </UL>
  );
}

const UL = styled.ul`
  position: relative;
  padding-top: ${spacing(4)};
`;
