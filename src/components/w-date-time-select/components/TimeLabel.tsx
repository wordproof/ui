import { FunctionalComponent, h } from '@stencil/core';
import { DateTimeOption } from '../w-date-time-select';
// import { format } from 'date-fns';
// import cx from 'classnames';

interface TimeLabelProps {
  dateTimeOption: DateTimeOption;
  locale?: string;
  onSelect?: Function;
}
const TimeLabel: FunctionalComponent<TimeLabelProps> = ({
  dateTimeOption,
  onSelect = () => {},
  locale = 'en',
}) => (
  <li
    class="text-blue px-12 py-5 hover:bg-gray-200"
    onClick={() => {
      onSelect();
    }}
  >
    {new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
      minute: 'numeric',
    }).format(dateTimeOption.value)}
  </li>
);

export default TimeLabel;
