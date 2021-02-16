import { Component, Prop, h } from '@stencil/core';
import cx from 'classnames';

const COLORS = {
  WHITE: '#FFFFFF',
  BLUE: '#2000FF',
  TEAL: '#00E8C6',
};

@Component({
  tag: 'w-logo',
  styleUrl: 'w-logo.css',
  shadow: true,
})
export class WLogo {
  /**
   * sets the logo colors to blue on white
   */
  @Prop() blueOnWhite: boolean = false;

  /**
   * sets the logo colors to blue on white
   */
  @Prop() whiteOnBlue: boolean = false;

  /**
   * sets the logo colors to blue on white
   */
  @Prop() tealOnWhite: boolean = false;

  /**
   * adds "WordProof" text to logo
   */
  @Prop() text: boolean = false;

  /**
   * shows "WordProof" in blue and teal
   */
  @Prop() doubleColored: boolean = false;

  /**
   * icon will try to fit into the available space maintainig aspect ratio
   */
  @Prop() fit: boolean = false;

  textColor: string = COLORS.WHITE;
  bgColor: string = COLORS.TEAL;
  wordColor: string = COLORS.TEAL;
  proofColor: string = COLORS.TEAL;

  componentWillLoad() {
    if (this.blueOnWhite) {
      this.textColor = COLORS.BLUE;
      this.bgColor = COLORS.WHITE;
      this.wordColor = COLORS.WHITE;
      this.proofColor = COLORS.WHITE;
    }

    if (this.whiteOnBlue) {
      this.textColor = COLORS.WHITE;
      this.bgColor = COLORS.BLUE;
      this.wordColor = COLORS.BLUE;
      this.proofColor = COLORS.BLUE;
    }

    if (this.tealOnWhite) {
      this.textColor = COLORS.TEAL;
      this.bgColor = COLORS.WHITE;
      this.wordColor = COLORS.WHITE;
      this.proofColor = COLORS.WHITE;
    }

    if (this.doubleColored) {
      this.wordColor = COLORS.BLUE;
      this.proofColor = COLORS.TEAL;
    }
  }

  render() {
    return (
      <svg
        viewBox={this.text ? '0 0 330 100' : '0 0 100 100'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class={cx({
          ['logo']: !this.text && !this.fit,
          ['logo-with-text']: this.text && !this.fit,
          ['h-full']: this.fit,
        })}
      >
        <rect width="100" height="100" rx="2" fill={this.bgColor} />
        <path
          d="M82 24.615a2 2 0 011.93 2.525L70.803 75.448a2 2 0 01-1.93 1.475H57.49L50.77 49.68h10.61l2.655 12.429 10.482-37.493H82z"
          fill={this.textColor}
        />
        <path
          opacity=".8"
          d="M45.276 24.615L34.84 62.021l-8.052-37.406h-8.85a2 2 0 00-1.941 2.479l11.907 48.308a2 2 0 001.942 1.521h9.802a2 2 0 001.93-1.476L54.699 27.14a2 2 0 00-1.93-2.525h-7.493z"
          fill={this.textColor}
        />
        {this.text ? (
          <path
            d="M141.36 35.28l-4.56 18.76-4.64-18.76h-6.92L132.92 64h6.44l4.72-18.36 4.8 18.36h6.44l7.64-28.72h-6.76l-4.6 18.76-4.6-18.76h-5.64zm42.426 18.2c0-6.56-4.36-11-10.56-11-6.24 0-10.56 4.44-10.56 11s4.32 10.96 10.56 10.96c6.2 0 10.56-4.4 10.56-10.96zm-14.76 0c0-3.68 1.64-5.76 4.2-5.76 2.56 0 4.2 2.08 4.2 5.76 0 3.68-1.64 5.76-4.2 5.76-2.56 0-4.2-2.08-4.2-5.76zm31.778-10.6c-.4-.04-.8-.08-1.4-.08-2.44 0-4.48 1.2-5.44 2.88v-2.76h-6.4V64h6.4V53.64c0-3.04 2.2-4.76 4.96-4.76.72 0 1.2.04 1.88.16v-6.16zm10.919 21.56c2.52 0 4.52-1.04 5.72-2.52V64h6.4V35.28h-6.4v9.76c-1.2-1.52-3.2-2.56-5.72-2.56-5.8 0-9.08 4.96-9.08 11 0 6 3.28 10.96 9.08 10.96zm5.76-11.52v1.12c0 3.16-1.72 4.96-4.12 4.96-2.8 0-4.28-2.28-4.28-5.52 0-3.24 1.48-5.52 4.28-5.52 2.4 0 4.12 1.76 4.12 4.96z"
            fill={this.wordColor}
          />
        ) : null}
        t
        {this.text ? (
          <path
            d="M235.67 54h5.44c6.76 0 10.96-3.24 10.96-9.36 0-6.16-4.2-9.36-10.96-9.36h-12.12V64h6.68V54zm0-5.6v-7.48h5.08c3.16 0 4.76 1.36 4.76 3.72 0 2.36-1.6 3.76-4.76 3.76h-5.08zm32.754-5.52c-.4-.04-.8-.08-1.4-.08-2.44 0-4.48 1.2-5.44 2.88v-2.76h-6.4V64h6.4V53.64c0-3.04 2.2-4.76 4.96-4.76.72 0 1.2.04 1.88.16v-6.16zm22.802 10.6c0-6.56-4.36-11-10.56-11-6.24 0-10.56 4.44-10.56 11s4.32 10.96 10.56 10.96c6.2 0 10.56-4.4 10.56-10.96zm-14.76 0c0-3.68 1.64-5.76 4.2-5.76 2.56 0 4.2 2.08 4.2 5.76 0 3.68-1.64 5.76-4.2 5.76-2.56 0-4.2-2.08-4.2-5.76zm38.576 0c0-6.56-4.36-11-10.56-11-6.24 0-10.56 4.44-10.56 11s4.32 10.96 10.56 10.96c6.2 0 10.56-4.4 10.56-10.96zm-14.76 0c0-3.68 1.64-5.76 4.2-5.76 2.56 0 4.2 2.08 4.2 5.76 0 3.68-1.64 5.76-4.2 5.76-2.56 0-4.2-2.08-4.2-5.76zm29.658-18.44c-.88-.08-1.48-.12-2.36-.12-5.52 0-7.96 2.52-7.96 7v1h-2.72v5.28h2.72V64h6.4V48.2h3.88v-5.28h-3.88v-.64c0-1.84.84-2.28 2.48-2.28.6 0 .96 0 1.44.04v-5z"
            fill={this.proofColor}
          />
        ) : null}
      </svg>
    );
  }
}
