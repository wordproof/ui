import { FunctionalComponent, h } from '@stencil/core';
import { format } from 'date-fns';
import cx from 'classnames';

interface DateLabelProps {
  date: Date;
  selected?: boolean;
  enabled?: boolean;
  grayed?: boolean;
  onSelect?:Function;
}
const DateLabel: FunctionalComponent<DateLabelProps> = ({
  date,
  selected,
  enabled,
  grayed,
  onSelect=()=>{},
}) => (
  <div
    class={cx('w-11 h-11 relative', {
      'bg-gray-200': grayed,
      'cursor-pointer': enabled,
    })}
    onClick={() => {
      if (enabled || grayed) {
        onSelect(date);
      }
    }}
  >
    {selected ? (
      <div class="absolute -top-1.5 left-0 w-11 h-11 bg-yellow rounded-full"></div>
    ) : null}

    <div
      class={cx(
        'absolute w-3 h-3 bg-gradient-to-r from-yellow to-pink border border-sand rounded-full left-1/2 transform -translate-x-1/2',
        {
          visible: enabled,
          invisible: !enabled,
        },
      )}
    ></div>

    <div
      class={cx(
        'absolute text-center text-xs text-black top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 select-none',
        {
          'opacity-50': !enabled,
        },
      )}
    >
      {format(date, 'd')}
    </div>
  </div>
);

export default DateLabel;
