// As defined by OWASP https://owasp.org/www-community/password-special-characters
export const symbols = ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`.split('');
export const alphaLower = `abcdefghijklmnopqrstuvwxyz`.split('');
export const alphaUpper = alphaLower.map(a => a.toUpperCase());
export const digits = `0123456789`.split('');
export const allCharacters = [...symbols, ...alphaLower, ...alphaUpper, ...digits];
