import { SectionLayout } from 'src/lib/element/layout';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';

export function AuthChangeEmailComponent(props) {
  const { pending, error, success, errorMessage } = props;
  return (
    <SectionLayout>
      {pending && <LoaderPrimary />}
      {(error || errorMessage) && <ErrorAlert tid={errorMessage} />}
      {success && <SuccessAlert tid="Вы успешно изменили почту" />}
    </SectionLayout>
  );
}
