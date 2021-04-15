/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IconName } from "./components/w-icon/types";
import { WPContent, WPRevision } from "./utils/certificate-data";
import { RevisionOption } from "./components/w-certificate/views/w-certificate-compare-view/types";
import { CertificateStrings, CertificateV4Strings } from "./i18n";
import { DateTimeOption } from "./components/w-date-time-select/w-date-time-select";
import { DropdownMenuOption } from "./components/w-dropdown-menu/w-dropdown-menu";
import { Route } from "./components/w-router-outlet";
export namespace Components {
    interface WBadge {
        /**
          * color variant
         */
        "color": string;
        /**
          * size
         */
        "size": string;
    }
    interface WButton {
        /**
          * button text size
         */
        "color": 'gray' | 'white' | 'yellow';
        /**
          * button html "disabled" attribute
         */
        "disabled": boolean;
        /**
          * button html "type" attribute
         */
        "icon": IconName;
        /**
          * renders button as underlined text
         */
        "outline": boolean;
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
        /**
          * underline decoration for text button
         */
        "underlineNone": boolean;
    }
    interface WCertificate {
        /**
          * custom certificate link text
         */
        "linkText": string;
        /**
          * hides icon on certificate link
         */
        "noIcon": boolean;
    }
    interface WCertificateHeader {
    }
    interface WCertificateLink {
        /**
          * hides icon
         */
        "noIcon": boolean;
    }
    interface WCertificateV4 {
        /**
          * custom certificate link text
         */
        "linkText": string;
        /**
          * hides icon on certificate link
         */
        "noIcon": boolean;
    }
    interface WCertificateVersionsCompare {
        "allOptions": RevisionOption[];
        "allRevisions": WPRevision[];
    }
    interface WCertificateVersionsRaw {
        "allOptions": RevisionOption[];
        "allRevisions": WPRevision[];
    }
    interface WCertificateVersionsView {
        "content": WPContent;
        "hasRevisions": boolean;
        "locale": string;
        "raw": boolean;
        "strings": CertificateStrings;
    }
    interface WCompareVersionsView {
        "content": WPContent;
        "hasRevisions": boolean;
        "locale": string;
        "raw": boolean;
        "strings": CertificateV4Strings;
    }
    interface WDateTimeSelect {
        /**
          * by default the date picker opens to the bottom of the trigger elemnt if set to true opens it to the top
         */
        "openToTop": boolean;
        /**
          * on array of Date objects to select from
         */
        "options": DateTimeOption[];
        /**
          * index of the selected DateTimeOption
         */
        "selected": number | null;
    }
    interface WDropdownMenu {
        /**
          * Array of menu items options
         */
        "options": DropdownMenuOption[];
    }
    interface WIcon {
        /**
          * icon will try to fit into the available space maintainig aspect ratio
         */
        "fit": boolean;
        /**
          * renders the icon with corresponding name
         */
        "name": IconName;
    }
    interface WInputCheckbox {
        /**
          * form element checked property
         */
        "checked": boolean;
        /**
          * disabled
         */
        "disabled": boolean;
        /**
          * form error message
         */
        "error": string;
    }
    interface WInputDate {
        "openToTop": boolean;
        /**
          * value, date as a string in "YYYY-MM-DD" format
         */
        "value": string;
    }
    interface WInputSelect {
        /**
          * form element error message
         */
        "error": string;
        /**
          * placeholder
         */
        "placeholder": string;
        /**
          * value
         */
        "value": string | number;
    }
    interface WInputSelectOption {
        /**
          * disabled
         */
        "disabled": boolean;
        /**
          * form element error message
         */
        "label": string;
        /**
          * form element error message
         */
        "value": string | number;
    }
    interface WInputText {
        /**
          * input html tag "autocomplete" attribute, defaults to ""
         */
        "autocomplete": string;
        /**
          * input html tag "autofocus" attribute, defaults to "false"
         */
        "autofocus": boolean;
        /**
          * error message displayed in the form group, defaults to ""
         */
        "error": string;
        /**
          * input html tag "inputmode" attribute, defaults to ""
         */
        "inputmode": string;
        /**
          * label for the form group, defaults to ""
         */
        "label": string;
        /**
          * input html tag "placeholder" attribute, if not set defaults to "label" prop value
         */
        "placeholder": string;
        /**
          * input html tag "required" attribute, defaults to "false"
         */
        "required": boolean;
        /**
          * a regex string (new RegExp is creted from this string) that is stripped from input value (replaced with an empty string) could be used to strip protocol and route from an URL to get website name for example strip="^http[s]?:\/\/" will strip out the protocol from an URL and strip="^http[s]?:\/\/|\/$|\.examplemaindomain.com.*" will leave subdomain value only. combined with suffix=".examplemaindomain.com" will allow to get website name without protocol and any route, query etc.
         */
        "strip": string;
        /**
          * a string displayed inside input form field group as appended label and added to visible input value could be used to get from user an URL in a specific domain for example somesubdomain[.examplemaindomain.com]
         */
        "suffix": string;
        /**
          * input html tag "type" attribute, defaults to "text"
         */
        "type": string;
        /**
          * value, defaults to ""
         */
        "value": string;
    }
    interface WLogo {
        /**
          * sets the logo colors to blue on white
         */
        "blueOnWhite": boolean;
        /**
          * shows "WordProof" in blue and teal
         */
        "doubleColored": boolean;
        /**
          * icon will try to fit into the available space maintainig aspect ratio
         */
        "fit": boolean;
        /**
          * sets the logo colors to blue on white
         */
        "tealOnWhite": boolean;
        /**
          * adds "WordProof" text to logo
         */
        "text": boolean;
        /**
          * render large logo text
         */
        "textLarge": boolean;
        /**
          * sets the logo colors to blue on white
         */
        "whiteOnBlue": boolean;
    }
    interface WModal {
        /**
          * class names added to content wrapper element of the modal
         */
        "ariaModalDescription": string;
        /**
          * class names added to content wrapper element of the modal
         */
        "ariaModalTitle": string;
        /**
          * class names added to backdrop element of the modal
         */
        "backdropClassName": string;
        /**
          * class names added to content wrapper element of the modal
         */
        "contentClassName": string;
        /**
          * class names added to modal element of the modal
         */
        "modalClassName": string;
        /**
          * controls visibility of the modal
         */
        "rounded": 'sm' | 'md' | 'lg' | boolean;
        /**
          * controls visibility of the modal
         */
        "visible": boolean;
        /**
          * class names added to wrapper element of the modal
         */
        "wrapClassName": string;
    }
    interface WRouterOutlet {
        "routes": Route[];
    }
}
declare global {
    interface HTMLWBadgeElement extends Components.WBadge, HTMLStencilElement {
    }
    var HTMLWBadgeElement: {
        prototype: HTMLWBadgeElement;
        new (): HTMLWBadgeElement;
    };
    interface HTMLWButtonElement extends Components.WButton, HTMLStencilElement {
    }
    var HTMLWButtonElement: {
        prototype: HTMLWButtonElement;
        new (): HTMLWButtonElement;
    };
    interface HTMLWCertificateElement extends Components.WCertificate, HTMLStencilElement {
    }
    var HTMLWCertificateElement: {
        prototype: HTMLWCertificateElement;
        new (): HTMLWCertificateElement;
    };
    interface HTMLWCertificateHeaderElement extends Components.WCertificateHeader, HTMLStencilElement {
    }
    var HTMLWCertificateHeaderElement: {
        prototype: HTMLWCertificateHeaderElement;
        new (): HTMLWCertificateHeaderElement;
    };
    interface HTMLWCertificateLinkElement extends Components.WCertificateLink, HTMLStencilElement {
    }
    var HTMLWCertificateLinkElement: {
        prototype: HTMLWCertificateLinkElement;
        new (): HTMLWCertificateLinkElement;
    };
    interface HTMLWCertificateV4Element extends Components.WCertificateV4, HTMLStencilElement {
    }
    var HTMLWCertificateV4Element: {
        prototype: HTMLWCertificateV4Element;
        new (): HTMLWCertificateV4Element;
    };
    interface HTMLWCertificateVersionsCompareElement extends Components.WCertificateVersionsCompare, HTMLStencilElement {
    }
    var HTMLWCertificateVersionsCompareElement: {
        prototype: HTMLWCertificateVersionsCompareElement;
        new (): HTMLWCertificateVersionsCompareElement;
    };
    interface HTMLWCertificateVersionsRawElement extends Components.WCertificateVersionsRaw, HTMLStencilElement {
    }
    var HTMLWCertificateVersionsRawElement: {
        prototype: HTMLWCertificateVersionsRawElement;
        new (): HTMLWCertificateVersionsRawElement;
    };
    interface HTMLWCertificateVersionsViewElement extends Components.WCertificateVersionsView, HTMLStencilElement {
    }
    var HTMLWCertificateVersionsViewElement: {
        prototype: HTMLWCertificateVersionsViewElement;
        new (): HTMLWCertificateVersionsViewElement;
    };
    interface HTMLWCompareVersionsViewElement extends Components.WCompareVersionsView, HTMLStencilElement {
    }
    var HTMLWCompareVersionsViewElement: {
        prototype: HTMLWCompareVersionsViewElement;
        new (): HTMLWCompareVersionsViewElement;
    };
    interface HTMLWDateTimeSelectElement extends Components.WDateTimeSelect, HTMLStencilElement {
    }
    var HTMLWDateTimeSelectElement: {
        prototype: HTMLWDateTimeSelectElement;
        new (): HTMLWDateTimeSelectElement;
    };
    interface HTMLWDropdownMenuElement extends Components.WDropdownMenu, HTMLStencilElement {
    }
    var HTMLWDropdownMenuElement: {
        prototype: HTMLWDropdownMenuElement;
        new (): HTMLWDropdownMenuElement;
    };
    interface HTMLWIconElement extends Components.WIcon, HTMLStencilElement {
    }
    var HTMLWIconElement: {
        prototype: HTMLWIconElement;
        new (): HTMLWIconElement;
    };
    interface HTMLWInputCheckboxElement extends Components.WInputCheckbox, HTMLStencilElement {
    }
    var HTMLWInputCheckboxElement: {
        prototype: HTMLWInputCheckboxElement;
        new (): HTMLWInputCheckboxElement;
    };
    interface HTMLWInputDateElement extends Components.WInputDate, HTMLStencilElement {
    }
    var HTMLWInputDateElement: {
        prototype: HTMLWInputDateElement;
        new (): HTMLWInputDateElement;
    };
    interface HTMLWInputSelectElement extends Components.WInputSelect, HTMLStencilElement {
    }
    var HTMLWInputSelectElement: {
        prototype: HTMLWInputSelectElement;
        new (): HTMLWInputSelectElement;
    };
    interface HTMLWInputSelectOptionElement extends Components.WInputSelectOption, HTMLStencilElement {
    }
    var HTMLWInputSelectOptionElement: {
        prototype: HTMLWInputSelectOptionElement;
        new (): HTMLWInputSelectOptionElement;
    };
    interface HTMLWInputTextElement extends Components.WInputText, HTMLStencilElement {
    }
    var HTMLWInputTextElement: {
        prototype: HTMLWInputTextElement;
        new (): HTMLWInputTextElement;
    };
    interface HTMLWLogoElement extends Components.WLogo, HTMLStencilElement {
    }
    var HTMLWLogoElement: {
        prototype: HTMLWLogoElement;
        new (): HTMLWLogoElement;
    };
    interface HTMLWModalElement extends Components.WModal, HTMLStencilElement {
    }
    var HTMLWModalElement: {
        prototype: HTMLWModalElement;
        new (): HTMLWModalElement;
    };
    interface HTMLWRouterOutletElement extends Components.WRouterOutlet, HTMLStencilElement {
    }
    var HTMLWRouterOutletElement: {
        prototype: HTMLWRouterOutletElement;
        new (): HTMLWRouterOutletElement;
    };
    interface HTMLElementTagNameMap {
        "w-badge": HTMLWBadgeElement;
        "w-button": HTMLWButtonElement;
        "w-certificate": HTMLWCertificateElement;
        "w-certificate-header": HTMLWCertificateHeaderElement;
        "w-certificate-link": HTMLWCertificateLinkElement;
        "w-certificate-v4": HTMLWCertificateV4Element;
        "w-certificate-versions-compare": HTMLWCertificateVersionsCompareElement;
        "w-certificate-versions-raw": HTMLWCertificateVersionsRawElement;
        "w-certificate-versions-view": HTMLWCertificateVersionsViewElement;
        "w-compare-versions-view": HTMLWCompareVersionsViewElement;
        "w-date-time-select": HTMLWDateTimeSelectElement;
        "w-dropdown-menu": HTMLWDropdownMenuElement;
        "w-icon": HTMLWIconElement;
        "w-input-checkbox": HTMLWInputCheckboxElement;
        "w-input-date": HTMLWInputDateElement;
        "w-input-select": HTMLWInputSelectElement;
        "w-input-select-option": HTMLWInputSelectOptionElement;
        "w-input-text": HTMLWInputTextElement;
        "w-logo": HTMLWLogoElement;
        "w-modal": HTMLWModalElement;
        "w-router-outlet": HTMLWRouterOutletElement;
    }
}
declare namespace LocalJSX {
    interface WBadge {
        /**
          * color variant
         */
        "color"?: string;
        /**
          * size
         */
        "size"?: string;
    }
    interface WButton {
        /**
          * button text size
         */
        "color"?: 'gray' | 'white' | 'yellow';
        /**
          * button html "disabled" attribute
         */
        "disabled"?: boolean;
        /**
          * button html "type" attribute
         */
        "icon"?: IconName;
        /**
          * renders button as underlined text
         */
        "outline"?: boolean;
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
        /**
          * underline decoration for text button
         */
        "underlineNone"?: boolean;
    }
    interface WCertificate {
        /**
          * custom certificate link text
         */
        "linkText"?: string;
        /**
          * hides icon on certificate link
         */
        "noIcon"?: boolean;
    }
    interface WCertificateHeader {
    }
    interface WCertificateLink {
        /**
          * hides icon
         */
        "noIcon"?: boolean;
    }
    interface WCertificateV4 {
        /**
          * custom certificate link text
         */
        "linkText"?: string;
        /**
          * hides icon on certificate link
         */
        "noIcon"?: boolean;
    }
    interface WCertificateVersionsCompare {
        "allOptions"?: RevisionOption[];
        "allRevisions"?: WPRevision[];
        "onChoose"?: (event: CustomEvent<WPRevision>) => void;
    }
    interface WCertificateVersionsRaw {
        "allOptions"?: RevisionOption[];
        "allRevisions"?: WPRevision[];
        "onChoose"?: (event: CustomEvent<WPRevision>) => void;
    }
    interface WCertificateVersionsView {
        "content"?: WPContent;
        "hasRevisions"?: boolean;
        "locale"?: string;
        "raw"?: boolean;
        "strings"?: CertificateStrings;
    }
    interface WCompareVersionsView {
        "content"?: WPContent;
        "hasRevisions"?: boolean;
        "locale"?: string;
        "raw"?: boolean;
        "strings"?: CertificateV4Strings;
    }
    interface WDateTimeSelect {
        /**
          * by default the date picker opens to the bottom of the trigger elemnt if set to true opens it to the top
         */
        "openToTop"?: boolean;
        /**
          * on array of Date objects to select from
         */
        "options"?: DateTimeOption[];
        /**
          * index of the selected DateTimeOption
         */
        "selected"?: number | null;
    }
    interface WDropdownMenu {
        /**
          * Array of menu items options
         */
        "options"?: DropdownMenuOption[];
    }
    interface WIcon {
        /**
          * icon will try to fit into the available space maintainig aspect ratio
         */
        "fit"?: boolean;
        /**
          * renders the icon with corresponding name
         */
        "name"?: IconName;
    }
    interface WInputCheckbox {
        /**
          * form element checked property
         */
        "checked"?: boolean;
        /**
          * disabled
         */
        "disabled"?: boolean;
        /**
          * form error message
         */
        "error"?: string;
    }
    interface WInputDate {
        "openToTop"?: boolean;
        /**
          * value, date as a string in "YYYY-MM-DD" format
         */
        "value"?: string;
    }
    interface WInputSelect {
        /**
          * form element error message
         */
        "error"?: string;
        /**
          * placeholder
         */
        "placeholder"?: string;
        /**
          * value
         */
        "value"?: string | number;
    }
    interface WInputSelectOption {
        /**
          * disabled
         */
        "disabled"?: boolean;
        /**
          * form element error message
         */
        "label"?: string;
        "onChoose"?: (event: CustomEvent<HTMLElement>) => void;
        /**
          * form element error message
         */
        "value"?: string | number;
    }
    interface WInputText {
        /**
          * input html tag "autocomplete" attribute, defaults to ""
         */
        "autocomplete"?: string;
        /**
          * input html tag "autofocus" attribute, defaults to "false"
         */
        "autofocus"?: boolean;
        /**
          * error message displayed in the form group, defaults to ""
         */
        "error"?: string;
        /**
          * input html tag "inputmode" attribute, defaults to ""
         */
        "inputmode"?: string;
        /**
          * label for the form group, defaults to ""
         */
        "label"?: string;
        /**
          * input html tag "placeholder" attribute, if not set defaults to "label" prop value
         */
        "placeholder"?: string;
        /**
          * input html tag "required" attribute, defaults to "false"
         */
        "required"?: boolean;
        /**
          * a regex string (new RegExp is creted from this string) that is stripped from input value (replaced with an empty string) could be used to strip protocol and route from an URL to get website name for example strip="^http[s]?:\/\/" will strip out the protocol from an URL and strip="^http[s]?:\/\/|\/$|\.examplemaindomain.com.*" will leave subdomain value only. combined with suffix=".examplemaindomain.com" will allow to get website name without protocol and any route, query etc.
         */
        "strip"?: string;
        /**
          * a string displayed inside input form field group as appended label and added to visible input value could be used to get from user an URL in a specific domain for example somesubdomain[.examplemaindomain.com]
         */
        "suffix"?: string;
        /**
          * input html tag "type" attribute, defaults to "text"
         */
        "type"?: string;
        /**
          * value, defaults to ""
         */
        "value"?: string;
    }
    interface WLogo {
        /**
          * sets the logo colors to blue on white
         */
        "blueOnWhite"?: boolean;
        /**
          * shows "WordProof" in blue and teal
         */
        "doubleColored"?: boolean;
        /**
          * icon will try to fit into the available space maintainig aspect ratio
         */
        "fit"?: boolean;
        /**
          * sets the logo colors to blue on white
         */
        "tealOnWhite"?: boolean;
        /**
          * adds "WordProof" text to logo
         */
        "text"?: boolean;
        /**
          * render large logo text
         */
        "textLarge"?: boolean;
        /**
          * sets the logo colors to blue on white
         */
        "whiteOnBlue"?: boolean;
    }
    interface WModal {
        /**
          * class names added to content wrapper element of the modal
         */
        "ariaModalDescription"?: string;
        /**
          * class names added to content wrapper element of the modal
         */
        "ariaModalTitle"?: string;
        /**
          * class names added to backdrop element of the modal
         */
        "backdropClassName"?: string;
        /**
          * class names added to content wrapper element of the modal
         */
        "contentClassName"?: string;
        /**
          * class names added to modal element of the modal
         */
        "modalClassName"?: string;
        "onClose"?: (event: CustomEvent<any>) => void;
        /**
          * controls visibility of the modal
         */
        "rounded"?: 'sm' | 'md' | 'lg' | boolean;
        /**
          * controls visibility of the modal
         */
        "visible"?: boolean;
        /**
          * class names added to wrapper element of the modal
         */
        "wrapClassName"?: string;
    }
    interface WRouterOutlet {
        "routes"?: Route[];
    }
    interface IntrinsicElements {
        "w-badge": WBadge;
        "w-button": WButton;
        "w-certificate": WCertificate;
        "w-certificate-header": WCertificateHeader;
        "w-certificate-link": WCertificateLink;
        "w-certificate-v4": WCertificateV4;
        "w-certificate-versions-compare": WCertificateVersionsCompare;
        "w-certificate-versions-raw": WCertificateVersionsRaw;
        "w-certificate-versions-view": WCertificateVersionsView;
        "w-compare-versions-view": WCompareVersionsView;
        "w-date-time-select": WDateTimeSelect;
        "w-dropdown-menu": WDropdownMenu;
        "w-icon": WIcon;
        "w-input-checkbox": WInputCheckbox;
        "w-input-date": WInputDate;
        "w-input-select": WInputSelect;
        "w-input-select-option": WInputSelectOption;
        "w-input-text": WInputText;
        "w-logo": WLogo;
        "w-modal": WModal;
        "w-router-outlet": WRouterOutlet;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "w-badge": LocalJSX.WBadge & JSXBase.HTMLAttributes<HTMLWBadgeElement>;
            "w-button": LocalJSX.WButton & JSXBase.HTMLAttributes<HTMLWButtonElement>;
            "w-certificate": LocalJSX.WCertificate & JSXBase.HTMLAttributes<HTMLWCertificateElement>;
            "w-certificate-header": LocalJSX.WCertificateHeader & JSXBase.HTMLAttributes<HTMLWCertificateHeaderElement>;
            "w-certificate-link": LocalJSX.WCertificateLink & JSXBase.HTMLAttributes<HTMLWCertificateLinkElement>;
            "w-certificate-v4": LocalJSX.WCertificateV4 & JSXBase.HTMLAttributes<HTMLWCertificateV4Element>;
            "w-certificate-versions-compare": LocalJSX.WCertificateVersionsCompare & JSXBase.HTMLAttributes<HTMLWCertificateVersionsCompareElement>;
            "w-certificate-versions-raw": LocalJSX.WCertificateVersionsRaw & JSXBase.HTMLAttributes<HTMLWCertificateVersionsRawElement>;
            "w-certificate-versions-view": LocalJSX.WCertificateVersionsView & JSXBase.HTMLAttributes<HTMLWCertificateVersionsViewElement>;
            "w-compare-versions-view": LocalJSX.WCompareVersionsView & JSXBase.HTMLAttributes<HTMLWCompareVersionsViewElement>;
            "w-date-time-select": LocalJSX.WDateTimeSelect & JSXBase.HTMLAttributes<HTMLWDateTimeSelectElement>;
            "w-dropdown-menu": LocalJSX.WDropdownMenu & JSXBase.HTMLAttributes<HTMLWDropdownMenuElement>;
            "w-icon": LocalJSX.WIcon & JSXBase.HTMLAttributes<HTMLWIconElement>;
            "w-input-checkbox": LocalJSX.WInputCheckbox & JSXBase.HTMLAttributes<HTMLWInputCheckboxElement>;
            "w-input-date": LocalJSX.WInputDate & JSXBase.HTMLAttributes<HTMLWInputDateElement>;
            "w-input-select": LocalJSX.WInputSelect & JSXBase.HTMLAttributes<HTMLWInputSelectElement>;
            "w-input-select-option": LocalJSX.WInputSelectOption & JSXBase.HTMLAttributes<HTMLWInputSelectOptionElement>;
            "w-input-text": LocalJSX.WInputText & JSXBase.HTMLAttributes<HTMLWInputTextElement>;
            "w-logo": LocalJSX.WLogo & JSXBase.HTMLAttributes<HTMLWLogoElement>;
            "w-modal": LocalJSX.WModal & JSXBase.HTMLAttributes<HTMLWModalElement>;
            "w-router-outlet": LocalJSX.WRouterOutlet & JSXBase.HTMLAttributes<HTMLWRouterOutletElement>;
        }
    }
}
