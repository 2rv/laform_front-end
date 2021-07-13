import styled from 'styled-components';
import { THEME_SIZE, spacing } from '../../lib/theme';
import { ContentLayout, IndentLayout } from 'src/lib/element/layout';
import { SliderListComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonBasic } from '../../lib/element/button';
import { ReactComponent as PlusIcon } from '../../asset/svg/plus-icon.svg';
import { TextSecondary } from '../../lib/element/text';

export function SliderEditListComponent(props) {
  const { items } = props;
  return (
    <Container>
      <Content>
        <IndentLayout>
          <TitlePrimary tid="Слайдер" />
          <SliderListComponent items={items} />
          <AddSlide>
            <IconButton icon={PlusIcon} />
            <TextSecondary tid="Дополнить сборку" />
          </AddSlide>
        </IndentLayout>
      </Content>
    </Container>
  );
}
const AddSlide = styled.div`
  gap: ${spacing(3)};
  display: flex;
  align-items: center;
`;

const IconButton = styled(ButtonBasic)`
  padding: ${spacing(2)};
  width: 40px;
  height: 40px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled(ContentLayout)`
  padding: 0 ${spacing(6)};
`;
