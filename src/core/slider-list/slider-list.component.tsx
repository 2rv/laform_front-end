import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TitlePrimary } from 'src/lib/element/title';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { ErrorAlert } from 'src/lib/element/alert';
import { ButtonBasic } from 'src/lib/element/button';
import { ReactComponent as PlusIcon } from 'src/asset/svg/plus.svg';
import { TextSecondary } from 'src/lib/element/text';
import { SliderListComponentProps } from './slider-list.type';
import { SliderItem } from './slider-list.item';

export function SliderListComponent(props: SliderListComponentProps) {
  const { state, editSlide, addSlide, removeSlide } = props;
  const { data, pending, error } = state;
  return (
    <Container>
      <TitlePrimary tid="SLIDER.LIST.TITLE" />
      {pending && <CenteredSpinner />}
      {(data || []).map((data, index) => (
        <SliderItem
          key={index}
          index={index}
          data={data}
          removeSlide={removeSlide}
          editSlide={editSlide}
        />
      ))}
      <AddSlide onClick={addSlide} disabled={pending}>
        <Button>
          <PlusIcon />
        </Button>
        <TextSecondary tid="SLIDER.LIST.ADD_ASSEMLBY" />
      </AddSlide>
      {error && <ErrorAlert tid={error} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;

const AddSlide = styled(ButtonBasic)`
  background-color: transparent;
  width: fit-content;
  padding: 0;
  gap: ${spacing(3)};
`;
const Button = styled.div`
  background-color: ${THEME_COLOR.GRAY};
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
