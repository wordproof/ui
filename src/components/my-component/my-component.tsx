import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import cx from 'classnames';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * color weight
   */
  @Prop() color: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
        <div
          class={cx(`text-white p-4 text-center rounded shadow w-64 mx-auto`, {
            ['bg-gray-300']: this.color === '300',
            ['bg-gray-700']: this.color === '700',
          })}
        >
          Hello, World! I'm {this.getText()}
        </div>
    );
  }
}
