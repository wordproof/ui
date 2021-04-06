import { parse } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';

export const parseDate = (dateStr: string): Date =>
  parse(dateStr, DATE_FORMAT, new Date());
