import styled from 'styled-components';
import { FieldSelect } from '../../element/field';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../theme';
import { TextSecondary } from '../../element/text';
import { ReactComponent as QuestionIcon } from '../../../asset/svg/question-mark.svg';
import { ProductSelectFieldProps } from './type';
import { LinkSecondary } from 'src/lib/element/link';
import { FAQ_SIZE_ROUTE_PATH } from 'src/core/faq-article';

export function ProductSelect(props: ProductSelectFieldProps) {
  const {
    titleTid,
    defaultTid,
    name,
    options,
    value,
    onChange,
    onBlur,
    isSize,
  } = props;
  return (
    <Container>
      <Line>
        <TextSecondary tid={titleTid} />
        {isSize && (
          <Link path={FAQ_SIZE_ROUTE_PATH}>
            <QuestionIcon />
          </Link>
        )}
      </Line>
      <FieldSelect
        defaultTid={defaultTid}
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Container>
  );
}

const Line = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: grid;
  gap: ${spacing(3)};
  align-items: center;
  grid-template-columns: 150px 1fr;
  width: 100%;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: ${spacing(2)};
  }
`;
const Link = styled(LinkSecondary)`
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  min-height: 25px;
  min-width: 25px;
  max-height: 25px;
  max-width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${THEME_COLOR.GRAY};
`;
