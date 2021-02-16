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

  /**
   * render large logo text
   */
  @Prop() textLarge: boolean = false;

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
      <div class="inline-block h-full">
        <svg
          viewBox={cx({
            ['0 0 330 100']: this.text && !this.textLarge,
            ['0 0 100 100']: this.textLarge || (!this.text && !this.textLarge),
          })}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block"
          style={{ height: this.fit ? '100%' : '100px' }}
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
          {this.text && !this.textLarge ? (
            <path
              d="M141.36 35.28l-4.56 18.76-4.64-18.76h-6.92L132.92 64h6.44l4.72-18.36 4.8 18.36h6.44l7.64-28.72h-6.76l-4.6 18.76-4.6-18.76h-5.64zm42.426 18.2c0-6.56-4.36-11-10.56-11-6.24 0-10.56 4.44-10.56 11s4.32 10.96 10.56 10.96c6.2 0 10.56-4.4 10.56-10.96zm-14.76 0c0-3.68 1.64-5.76 4.2-5.76 2.56 0 4.2 2.08 4.2 5.76 0 3.68-1.64 5.76-4.2 5.76-2.56 0-4.2-2.08-4.2-5.76zm31.778-10.6c-.4-.04-.8-.08-1.4-.08-2.44 0-4.48 1.2-5.44 2.88v-2.76h-6.4V64h6.4V53.64c0-3.04 2.2-4.76 4.96-4.76.72 0 1.2.04 1.88.16v-6.16zm10.919 21.56c2.52 0 4.52-1.04 5.72-2.52V64h6.4V35.28h-6.4v9.76c-1.2-1.52-3.2-2.56-5.72-2.56-5.8 0-9.08 4.96-9.08 11 0 6 3.28 10.96 9.08 10.96zm5.76-11.52v1.12c0 3.16-1.72 4.96-4.12 4.96-2.8 0-4.28-2.28-4.28-5.52 0-3.24 1.48-5.52 4.28-5.52 2.4 0 4.12 1.76 4.12 4.96z"
              fill={this.wordColor}
            />
          ) : null}
          t
          {this.text && !this.textLarge ? (
            <path
              d="M235.67 54h5.44c6.76 0 10.96-3.24 10.96-9.36 0-6.16-4.2-9.36-10.96-9.36h-12.12V64h6.68V54zm0-5.6v-7.48h5.08c3.16 0 4.76 1.36 4.76 3.72 0 2.36-1.6 3.76-4.76 3.76h-5.08zm32.754-5.52c-.4-.04-.8-.08-1.4-.08-2.44 0-4.48 1.2-5.44 2.88v-2.76h-6.4V64h6.4V53.64c0-3.04 2.2-4.76 4.96-4.76.72 0 1.2.04 1.88.16v-6.16zm22.802 10.6c0-6.56-4.36-11-10.56-11-6.24 0-10.56 4.44-10.56 11s4.32 10.96 10.56 10.96c6.2 0 10.56-4.4 10.56-10.96zm-14.76 0c0-3.68 1.64-5.76 4.2-5.76 2.56 0 4.2 2.08 4.2 5.76 0 3.68-1.64 5.76-4.2 5.76-2.56 0-4.2-2.08-4.2-5.76zm38.576 0c0-6.56-4.36-11-10.56-11-6.24 0-10.56 4.44-10.56 11s4.32 10.96 10.56 10.96c6.2 0 10.56-4.4 10.56-10.96zm-14.76 0c0-3.68 1.64-5.76 4.2-5.76 2.56 0 4.2 2.08 4.2 5.76 0 3.68-1.64 5.76-4.2 5.76-2.56 0-4.2-2.08-4.2-5.76zm29.658-18.44c-.88-.08-1.48-.12-2.36-.12-5.52 0-7.96 2.52-7.96 7v1h-2.72v5.28h2.72V64h6.4V48.2h3.88v-5.28h-3.88v-.64c0-1.84.84-2.28 2.48-2.28.6 0 .96 0 1.44.04v-5z"
              fill={this.proofColor}
            />
          ) : null}
        </svg>
        {this.text && this.textLarge ? (
          <svg
            viewBox="-24 -24 339 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block"
            style={{ height: this.fit ? '100%' : '100px' }}
          >
            <path
              d="M67 .615a2 2 0 011.93 2.525L55.803 51.447a2 2 0 01-1.93 1.476H42.49L35.77 25.68h10.61l2.654 12.429L59.516.615H67z"
              fill={this.wordColor}
            />
            <path
              opacity=".8"
              d="M30.276.615L19.84 38.021 11.787.615h-8.85A2 2 0 00.996 3.094l11.907 48.308a2 2 0 001.941 1.521h9.803a2 2 0 001.93-1.476L39.699 3.14a2 2 0 00-1.93-2.525h-7.493z"
              fill={this.wordColor}
            />
            <path
              d="M100.06 32.22c0-9.84-6.54-16.5-15.84-16.5-9.36 0-15.84 6.66-15.84 16.5s6.48 16.44 15.84 16.44c9.3 0 15.84-6.6 15.84-16.44zm-22.14 0c0-5.52 2.46-8.64 6.3-8.64s6.3 3.12 6.3 8.64c0 5.52-2.46 8.64-6.3 8.64s-6.3-3.12-6.3-8.64zm46.513-15.9c-.6-.06-1.2-.12-2.1-.12-3.66 0-6.72 1.8-8.16 4.32v-4.14h-9.6V48h9.6V32.46c0-4.56 3.3-7.14 7.44-7.14 1.08 0 1.8.06 2.82.24v-9.24zm15.225 32.34c3.78 0 6.78-1.56 8.58-3.78V48h9.6V4.92h-9.6v14.64c-1.8-2.28-4.8-3.84-8.58-3.84-8.7 0-13.62 7.44-13.62 16.5 0 9 4.92 16.44 13.62 16.44zm8.64-17.28v1.68c0 4.74-2.58 7.44-6.18 7.44-4.2 0-6.42-3.42-6.42-8.28 0-4.86 2.22-8.28 6.42-8.28 3.6 0 6.18 2.64 6.18 7.44z"
              fill={this.wordColor}
            />
            <path
              opacity=".8"
              d="M177.44 33h8.16c10.14 0 16.44-4.86 16.44-14.04 0-9.24-6.3-14.04-16.44-14.04h-18.18V48h10.02V33zm0-8.4V13.38h7.62c4.74 0 7.14 2.04 7.14 5.58s-2.4 5.64-7.14 5.64h-7.62zm47.978-8.28c-.6-.06-1.2-.12-2.1-.12-3.66 0-6.72 1.8-8.16 4.32v-4.14h-9.6V48h9.6V32.46c0-4.56 3.3-7.14 7.44-7.14 1.08 0 1.8.06 2.82.24v-9.24zm33.048 15.9c0-9.84-6.54-16.5-15.84-16.5-9.36 0-15.84 6.66-15.84 16.5s6.48 16.44 15.84 16.44c9.3 0 15.84-6.6 15.84-16.44zm-22.14 0c0-5.52 2.46-8.64 6.3-8.64s6.3 3.12 6.3 8.64c0 5.52-2.46 8.64-6.3 8.64s-6.3-3.12-6.3-8.64zm56.711 0c0-9.84-6.54-16.5-15.84-16.5-9.36 0-15.84 6.66-15.84 16.5s6.48 16.44 15.84 16.44c9.3 0 15.84-6.6 15.84-16.44zm-22.14 0c0-5.52 2.46-8.64 6.3-8.64s6.3 3.12 6.3 8.64c0 5.52-2.46 8.64-6.3 8.64s-6.3-3.12-6.3-8.64zM314.23 4.56c-1.32-.12-2.22-.18-3.54-.18-8.28 0-11.94 3.78-11.94 10.5v1.5h-4.08v7.92h4.08V48h9.6V24.3h5.82v-7.92h-5.82v-.96c0-2.76 1.26-3.42 3.72-3.42.9 0 1.44 0 2.16.06v-7.5z"
              fill={this.proofColor}
            />
          </svg>
        ) : null}
      </div>
    );
  }
}
