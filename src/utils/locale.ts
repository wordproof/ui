import { EnglishStrings } from '../i18n';

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://unpkg.com/@wordproof/uikit/dist/uikit'
    : '';

export const getComponentClosestLanguage = (element: HTMLElement): string => {
  let closestElement = element.closest('[lang]') as HTMLElement;
  return closestElement ? closestElement.lang : 'en';
};

const fetchLocaleStringsForComponent = (
  componentName: string,
  locale: string,
): Promise<any> => {
  return new Promise((resolve, reject): void => {
    fetch(`${BASE_URL}/i18n/${componentName}.i18n.${locale}.json`).then(
      result => {
        if (result.ok) resolve(result.json());
        else reject();
      },
      () => reject(),
    );
  });
};

const getLocaleComponentStrings = async (
  componentName: string,
  componentLanguage: string,
): Promise<Record<string, string>> => {
  if (componentLanguage.startsWith('en')) {
    return EnglishStrings[componentName];
  }

  let strings: Record<string, string>;
  try {
    strings = await fetchLocaleStringsForComponent(
      componentName,
      componentLanguage,
    );
  } catch (e) {
    console.warn(
      `wordproof uikit: no locale for ${componentName} (${componentLanguage}) loading default locale en.`,
    );
    componentLanguage = 'en';
    strings = EnglishStrings[componentName];
  }

  return strings;
};

export const getLocaleStringsByNameAndLang = async (
  componentName: string,
  componentLanguage: string,
): Promise<Record<string, string>> => {
  const strings = await getLocaleComponentStrings(
    componentName,
    componentLanguage,
  );

  return new Proxy(strings, {
    get: (target, prop, receiver) => {
      if (prop === 'then') {
        return '';
      }

      const value = Reflect.get(target, prop, receiver);
      if (value === undefined) {
        throw new Error(
          `wordproof uikit: no translation key: "${String(
            prop,
          )}" component: "${componentName}" locale: "${componentLanguage}"`,
        );
      }

      return value;
    },
  });
};

export const getLocaleStrings = async (
  element: HTMLElement,
): Promise<Record<string, string>> => {
  const componentName = element.tagName.toLowerCase();
  const componentLanguage = getComponentClosestLanguage(element);

  return getLocaleStringsByNameAndLang(componentName, componentLanguage);
};

export interface DateTimeFormatOptions {
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  year?: 'numeric' | '2-digit';
}

export const formatDate = (
  dateStr: string,
  locale: string,
  options: DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  },
): string => new Date(dateStr).toLocaleDateString(locale, options);
