import format from 'date-fns/format';
import formatDistance from 'date-fns/formatDistance';
import ru from 'date-fns/locale/ru';

export function ConvertTime(time: Date = new Date()) {
  return formatDistance(new Date(time), new Date(), {
    addSuffix: true,
    locale: ru,
  });
}
export function ConvertDate(
  date: string | Date = new Date(),
  formating: string = 'dd MM yyyy',
): string {
  return format(new Date(date), formating, {
    locale: ru,
  });
}
