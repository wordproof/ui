export const kebabize = str =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
  );

export const getHtml = (tagName, attributes, slotContent = '') => {
  const attrStr = Object.entries(attributes)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${kebabize(key)}="${value}"`)
    .join(' ');

  return `<${tagName}${
    attrStr ? ' ' : ''
  }${attrStr}>${slotContent}</${tagName}>`;
};
