import moment from 'moment';
import 'moment/locale/ru';

export function ConvertTime(time: string) {
  return moment(time).local().fromNow();
}
export function ConvertDate(date?: string, format?: string) {
  return moment(date).format(format);
}
