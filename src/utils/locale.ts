export const getComponentClosestLanguage = (element: HTMLElement): string => {
  let closestElement = element.closest('[lang]') as HTMLElement;
  return closestElement ? closestElement.lang : 'en';
};

const fetchLocaleStringsForComponent = (
  componentName: string,
  locale: string,
): Promise<any> => {
  return new Promise((resolve, reject): void => {
    fetch(`/i18n/${componentName}.i18n.${locale}.json`).then(
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
    strings = await fetchLocaleStringsForComponent(
      componentName,
      componentLanguage,
    );
  }

  return strings;
};

export const getLocaleStrings = async (
  element: HTMLElement,
): Promise<Record<string, string>> => {
  const componentName = element.tagName.toLowerCase();
  const componentLanguage = getComponentClosestLanguage(element);

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
