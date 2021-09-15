import React from 'react';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { TextSecondary } from '../../lib/element/text';
import { ButtonBasic } from '../../lib/element/button';
import { ReactComponent as DeleteIcon } from '../../asset/svg/delete-cancel-icon.svg';
import { Divider } from '../../lib/element/divider';
import { SectionLayout } from '../../lib/element/layout';

export function RecomendationList(props) {
  const { items, onSelect } = props;

  return (
    <SectionLayout type="SMALL">
      {items.map((item) => {
        if (item?.selected) {
          return (
            <React.Fragment key={item.id}>
              <Container>
                <Content>
                  <Image src={item.image} />
                  <Name tid={item.name} />
                </Content>

                <Content>
                  <IconButton onClick={() => onSelect(item.id, false)}>
                    <DeleteIcon />
                  </IconButton>
                </Content>
              </Container>
              <Divider />
            </React.Fragment>
          );
        }
      })}
    </SectionLayout>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;

const Name = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  line-height: ${THEME_SIZE.FONT.LARGE};
`;
const Image = styled.img`
  height: 75px;
  width: 75px;
  min-width: 75px;
`;
const IconButton = styled(ButtonBasic)`
  width: 45px;
  height: 45px;
  padding: ${spacing(2.4)};
`;
