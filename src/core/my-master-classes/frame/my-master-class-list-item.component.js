import styled from 'styled-components';

import { TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function MyMasterClassListItemComponent(props) {
  const { title, program, image } = props;

  return (
    <LI>
      <Div>
        <MyMasterClassImg src={image.url} alt={image.alt} />
        <Text tid={title} color={THEME_COLOR.SECONDARY_DARK} lineHeight="24px" />
      </Div>
      <Text tid="MASTER_CLASSES.MY_MASTER_CLASSES.LIST.PROGRAM" paddingLeft={spacing(9)} />:&nbsp;
      <Text tid={program} color={THEME_COLOR.SECONDARY_DARK} />
    </LI>
  );
}

const Text = styled(TextSecondary)`
  ${(props) => props.color && `color: ${props.color};`}
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight};`}
  ${(props) => props.paddingLeft && `padding-left: ${props.paddingLeft};`}
`;

const MyMasterClassImg = styled.img`
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
  flex-direction: row;
  width: 400px;
`;
