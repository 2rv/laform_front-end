import styled from 'styled-components';

import { ReactComponent as ArrowDown } from 'src/asset/svg/arrow-down.svg';

import { ButtonBasic } from 'src/lib/element/button';
import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function MyPatternsListItemComponent(props) {
  const { title, format, size, image } = props;

  return (
    <LI>
      <Div>
        <MyPatternImg src={image.url} alt={image.alt} />
        <Text tid={title} color={THEME_COLOR.SECONDARY_DARK} />
      </Div>
      <Div marginLeft={spacing(12)}>
        <Text tid="PATTERNS.MY_PATTERNS.DETAILS.FORMAT" />:&nbsp;
        <Text tid={format} color={THEME_COLOR.SECONDARY_DARK} />,&nbsp;
        <Text tid="PATTERNS.MY_PATTERNS.DETAILS.SIZE" />:&nbsp;
        <Text tid={size} color={THEME_COLOR.SECONDARY_DARK} />:&nbsp;
      </Div>
      <Button>
        <img src="/static/test/down-arrow.png" />
      </Button>
    </LI>
  );
}

const Text = styled(TextSecondary)`
  ${(props) => props.color && `color: ${props.color};`}
`;

const MyPatternImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 5px;
  margin-right: ${spacing(3)};
`;

const LI = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 3px solid ${THEME_COLOR.BACKGROUND.GRAY};
  padding: ${spacing(2)} 0;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
`;

const Button = styled(ButtonBasic)`
  position: absolute;
  right: 0;
`;
