import moment from 'moment';
import 'moment/locale/ru';

export function ConvertTime(time: string | Date) {
  return moment(time).local().fromNow();
}
export function ConvertDate(date?: string | Date, format?: string) {
  return moment(date).format(format);
}
