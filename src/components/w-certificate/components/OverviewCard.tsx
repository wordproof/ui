import { FunctionalComponent, h } from '@stencil/core';

interface OverviewCardProps {
  icon: string;
  title: string;
  text: string;
  link: string;
  onLinkClick: Function;
  checked: boolean | null;
  checkedText: string;
}
const OverviewCard: FunctionalComponent<OverviewCardProps> = ({
  icon,
  title,
  text,
  link,
  onLinkClick,
  checked,
  checkedText,
}) => (
  <div class="border-2 border-solid border-gray-300 rounded-lg p-4 md:px-4 md:py-5">
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row text-base text-gray-700">
        <div class="mb-2 md:m-0 md:w-1/12">
          <w-icon name={icon} class="text-black"></w-icon>
        </div>
        <div class="md:pl-3">
          <h3 class="text-lg text-black font-medium">{title}</h3>
          <p class="mb-2">{text}</p>
          <button
            class="text-darkblue font-medium focus:outline-none"
            onClick={() => onLinkClick()}
          >
            &gt; {link}
          </button>
        </div>
      </div>
      <div class="flex flex-row text-sm mt-4 text-gray-600">
        <div class="w-1/12">
          <span class="float-right">
            {checked === null ? null : (
              <w-icon
                name={checked ? 'check-circle' : 'times-circle'}
                class={checked ? 'text-teal' : 'text-pink'}
              ></w-icon>
            )}
          </span>
        </div>
        <span class="pl-3">{checkedText}</span>
      </div>
    </div>
  </div>
);

export default OverviewCard;
