import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Remove } from '../../asset/svg/remove.svg';
import { Divider as ElementDivider } from '../../lib/element/divider';
import { SectionLayout, FieldLayout } from '../../lib/element/layout';
import { ButtonSecondary, IconButton } from '../../lib/element/button';
import { BasicField } from '../../lib/element/field';
import { TextSecondary } from '../../lib/element/text';
import { spacing } from '../../lib/theme';

export function PromocodesComponent({ promocodes, setPromocodes }) {
  const [promocodeValue, setPromocodeValue] = useState('');
  const [requiredField, setRequiredField] = useState(false);

  const addPromocode = () => {
    if (!promocodeValue.length) {
      setRequiredField(true);
      return;
    }

    setPromocodes([ ...promocodes, { id: Date.now(), promocode: promocodeValue } ]);
    setPromocodeValue('');
    setRequiredField(false);
  };

  const removePromocode = (id) => {
    setPromocodes((prevPromocodes) => prevPromocodes.filter((promocode) => promocode.id !== id));
  };

  return (
    <SectionLayout>
      <FieldLayout type="double">
        <div>
          <BasicField
            placeholderTid="Введите промокод"
            name="writePromocode"
            value={promocodeValue}
            onChange={(e) => setPromocodeValue(e.target.value)}
            error={requiredField && 'VALIDATION.REQUIRED'}
          />
        </div>
        <Button tid="Добавить" onClick={addPromocode} />
      </FieldLayout>
      <ul>
        {promocodes.map(({ id, promocode }) => (
          <>
          <List key={id}>
            <TextSecondary>{promocode}</TextSecondary>
            <IconButton onClick={() => removePromocode(id)}>
              <Remove />
            </IconButton>
            <Divider />
          </List>
          </>
        ))}
      </ul>
    </SectionLayout>
  );
}

const List = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 0;
`;

const Button = styled(ButtonSecondary)`
  width: 250px;
`;

const Divider = styled(ElementDivider)`
  margin: ${spacing(3)};
`;
