

/*
 * Ensures that the provided pattern is either a string or RegExp
 * @param {string|RegExp} pattern - a regular expression pattern
 * @returns {RegExp} - converts string to a RegExp or returns the pattern
 * @throws Error
 */
const guardRegex = (pattern) => {
  if (pattern instanceof RegExp) return pattern;
  if (typeof pattern === 'string') return new RegExp(pattern, 'g');
  throw new Error('pattern is neither a RegExp or string');
}

/*
 * Tokenizes a string by a delimiter.
 * Inspired by:
 * - https://stackoverflow.com/a/17414844/1762224
 * - https://docs.oracle.com/javase/8/docs/api/java/util/StringTokenizer.html
 * @param {string} str - a string to be parsed
 * @param {string|RegExp} delim - the delimiters
 * @param {boolean} [returnDelims=false] - whether to return the delimiters as tokens
 * @returns {string[]} - list of tokens
 */
const stringTokenizer = (str, delim, returnDelims = false) => {
  const regex = guardRegex(delim), result = [];
  let token, index;
  while (str !== '') {
    regex.lastIndex = 0;
    token = regex.exec(str);
    if (token === null) { break; }
    index = token.index;
    if (token[0].length === 0) { index = 1; }
    result.push(str.substr(0, index));
    if (returnDelims) {
      result.push(token[0]);
    }
    index = index + token[0].length;
    str = str.slice(index);
  }
  result.push(str);
  return result;
}

const FormattedShortStory = ({ className, pattern, text }) => (
  <p>
    {stringTokenizer(text, pattern, true).map((token, index) =>
      guardRegex(pattern).exec(token)
        ? <span key={token + index} className={className}>{token}</span>
        : token
    )}
  </p>
);



export default FormattedShortStory;