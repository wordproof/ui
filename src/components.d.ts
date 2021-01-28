/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * color weight
         */
        "color": string;
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface WButton {
        /**
          * button html "disabled" attribute
         */
        "disabled": boolean;
        /**
          * button text size
         */
        "size": 'xs' | 'sm' | 'base' | 'lg' | 'xl';
        /**
          * renders button as underlined text
         */
        "text": boolean;
        /**
          * button html "type" attribute
         */
        "type": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLWButtonElement extends Components.WButton, HTMLStencilElement {
    }
    var HTMLWButtonElement: {
        prototype: HTMLWButtonElement;
        new (): HTMLWButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "w-button": HTMLWButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * color weight
         */
        "color"?: string;
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface WButton {
        /**
          * button html "disabled" attribute
         */
        "disabled"?: boolean;
        /**
          * button text size
         */
        "size"?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
        /**
          * renders button as underlined text
         */
        "text"?: boolean;
        /**
          * button html "type" attribute
         */
        "type"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "w-button": WButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "w-button": LocalJSX.WButton & JSXBase.HTMLAttributes<HTMLWButtonElement>;
        }
    }
}
