import styled from 'styled-components';
import { FieldSelect } from '../../lib/element/field';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { TextPrimary, TextSecondary } from '../../lib/element/text';
import { ReactComponent as QuestionIcon } from '../../asset/svg/question-mark.svg';
import { IconButton } from '../../lib/element/button';

export function BlockSelectComponent(props) {
  const { handleChange, selectOptions, values } = props;
  return (
    <Container>
      {selectOptions.map((item, index) => {
        const { name, tooltip, options, codeName } = item;
        return (
          <Content key={index}>
            <Line>
              <TextSecondary tid={name} />
              {tooltip && (
                <Button>
                  <QuestionIcon />
                </Button>
              )}
            </Line>
            <FieldSelect
              options={options}
              value={values[codeName]}
              onChange={(e) => {
                handleChange(e, codeName);
              }}
            />
          </Content>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  width: 100%;
`;

const Line = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Content = styled.div`
  display: grid;
  gap: ${spacing(3)};
  align-items: center;
  grid-template-columns: 100px 1fr;
  width: 100%;
`;
const Button = styled(IconButton)`
  padding: 0;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  height: 25px;
  width: 25px;
`;
