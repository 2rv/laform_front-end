import React, { useState, useCallback, useEffect, SyntheticEvent } from 'react';
import { SuccessAlert } from 'src/lib/element/alert';
import { ButtonSecondary } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { LinkPrimary } from 'src/lib/element/link';
import { TitlePrimary } from 'src/lib/element/title';
import { httpRequest } from 'src/main/http';

export function FooterPhone() {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [number, setNumber] = useState('');
  const getNumber = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    try {
      const response = await httpRequest({
        method: 'GET',
        url: '/footer/get',
      });
      if (Boolean(response.data.length)) {
        setNumber(response.data[0]?.phone);
      }
    } catch (err: any) {
      alert(err.response.data.message);
    }
    setIsSending(false);
  }, [isSending]);
  useEffect(() => {
    getNumber();
  }, []);
  const saveNumber = useCallback(
    async (phone: string) => {
      if (isSending) return;
      setIsSending(true);
      try {
        await httpRequest({
          method: 'POST',
          url: '/footer/save',
          data: { phone },
        });
        setisSuccess(true);
      } catch (err: any) {
        alert(err.response.data.message);
      }
      setIsSending(false);
    },
    [isSending],
  );
  function onChange(e: SyntheticEvent<HTMLInputElement>) {
    isSuccess && setisSuccess(false);
    setNumber(e.currentTarget.value.trim());
  }
  return (
    <SectionLayout type="SMALL">
      <TitlePrimary tid="Номер телефона для связи" />
      <FieldLayout type="double" adaptive>
        <BasicField
          placeholderTid="Введите номер телефона"
          value={number}
          onChange={onChange}
          disabled={isSending}
        />
        <ButtonSecondary
          tid="Сохранить"
          onClick={() => saveNumber(number)}
          disabled={isSending || !number}
        />
        {isSuccess && <SuccessAlert tid="Успешно" />}
      </FieldLayout>
    </SectionLayout>
  );
}
export function FooterPhoneComponent() {
  const [isSending, setIsSending] = useState(false);
  const [number, setNumber] = useState('');

  const getNumber = useCallback(async () => {
    if (isSending) return;
    setIsSending(true);
    try {
      const response = await httpRequest({
        method: 'GET',
        url: '/footer/get',
      });
      if (Boolean(response.data.length)) {
        setNumber(response.data[0]?.phone);
      }
    } catch (err: any) {
      alert(err.response.data.message);
    }
    setIsSending(false);
  }, [isSending]);

  useEffect(() => {
    getNumber();
  }, []);

  return (
    <LinkPrimary
      tid={`Позвонить нам - ${number}`}
      path={`tel:${number}`}
      pathConfig={{ local: false }}
    />
  );
}
