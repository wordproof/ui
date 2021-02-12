export const getComponentClosestLanguage = (element: HTMLElement): string => {
  let closestElement = element.closest('[lang]') as HTMLElement;
  return closestElement ? closestElement.lang : 'en';
};

export const fetchLocaleStringsForComponent = (
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

export const getLocaleComponentStrings = async (
  element: HTMLElement,
): Promise<Record<string, string>> => {
  let componentName = element.tagName.toLowerCase();
  let componentLanguage = getComponentClosestLanguage(element);
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
    strings = await fetchLocaleStringsForComponent(componentName, 'en');
  }
  return strings;
};
