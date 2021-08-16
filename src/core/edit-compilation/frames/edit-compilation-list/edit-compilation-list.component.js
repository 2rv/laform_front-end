import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { EditCompilationListItemComponent } from './edit-compilation-list-item.component';
import { TitlePrimary } from '../../../../lib/element/title';
import { Spinner } from '../../../../lib/element/spinner';

export function EditCompilationListComponent(props) {
  const {
    title,
    items,
    compilationName,
  } = props;

  return (
    <Container>
      <Title tid={title} />
      <Content>
        {items?.map((item) => (
          <EditCompilationListItemComponent
            {...item}
            key={item?.id}
            compilationNamе={compilationName}
          />
        ))}
      </Content>
    </Container>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
`;
const Content = styled.div`
  display: grid;
  gap: ${spacing(2)};
`;
