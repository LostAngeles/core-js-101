/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  const answer = `Hello, ${firstName} ${lastName}!`;
  return answer;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  let answer = value.replace('Hello, ', '');
  answer = answer.replace('!', '');
  return answer;
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value.charAt(0);
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  const answer = value.replace(/\s/g, '');
  return answer.replace(/,/g, ', ');
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  return value.repeat([count]);
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  return str.replace('<', '').replace('>', '');
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(/* width, height */) {
  throw new Error('Not implemented');
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case 'A':
        arr[i] = 'N';
        break;
      case 'B':
        arr[i] = 'O';
        break;
      case 'C':
        arr[i] = 'P';
        break;
      case 'D':
        arr[i] = 'Q';
        break;
      case 'E':
        arr[i] = 'R';
        break;
      case 'F':
        arr[i] = 'S';
        break;
      case 'G':
        arr[i] = 'T';
        break;
      case 'H':
        arr[i] = 'U';
        break;
      case 'I':
        arr[i] = 'V';
        break;
      case 'J':
        arr[i] = 'W';
        break;
      case 'K':
        arr[i] = 'X';
        break;
      case 'L':
        arr[i] = 'Y';
        break;
      case 'M':
        arr[i] = 'Z';
        break;
      case 'N':
        arr[i] = 'A';
        break;
      case 'O':
        arr[i] = 'B';
        break;
      case 'P':
        arr[i] = 'C';
        break;
      case 'Q':
        arr[i] = 'D';
        break;
      case 'R':
        arr[i] = 'E';
        break;
      case 'S':
        arr[i] = 'F';
        break;
      case 'T':
        arr[i] = 'G';
        break;
      case 'U':
        arr[i] = 'H';
        break;
      case 'V':
        arr[i] = 'I';
        break;
      case 'W':
        arr[i] = 'J';
        break;
      case 'X':
        arr[i] = 'K';
        break;
      case 'Y':
        arr[i] = 'L';
        break;
      case 'Z':
        arr[i] = 'M';
        break;
      case 'a':
        arr[i] = 'n';
        break;
      case 'b':
        arr[i] = 'o';
        break;
      case 'c':
        arr[i] = 'p';
        break;
      case 'd':
        arr[i] = 'q';
        break;
      case 'e':
        arr[i] = 'r';
        break;
      case 'f':
        arr[i] = 's';
        break;
      case 'g':
        arr[i] = 't';
        break;
      case 'h':
        arr[i] = 'u';
        break;
      case 'i':
        arr[i] = 'v';
        break;
      case 'j':
        arr[i] = 'w';
        break;
      case 'k':
        arr[i] = 'x';
        break;
      case 'l':
        arr[i] = 'y';
        break;
      case 'm':
        arr[i] = 'z';
        break;
      case 'n':
        arr[i] = 'a';
        break;
      case 'o':
        arr[i] = 'b';
        break;
      case 'p':
        arr[i] = 'c';
        break;
      case 'q':
        arr[i] = 'd';
        break;
      case 'r':
        arr[i] = 'e';
        break;
      case 's':
        arr[i] = 'f';
        break;
      case 't':
        arr[i] = 'g';
        break;
      case 'u':
        arr[i] = 'h';
        break;
      case 'v':
        arr[i] = 'i';
        break;
      case 'w':
        arr[i] = 'j';
        break;
      case 'x':
        arr[i] = 'k';
        break;
      case 'y':
        arr[i] = 'l';
        break;
      case 'z':
        arr[i] = 'm';
        break;
      case ' ':
        arr[i] = ' ';
        break;
      case '?':
        arr[i] = '?';
        break;
      case '!':
        arr[i] = '!';
        break;
      default:
        arr[i] = '♥';
    }
  }
  return arr.join('');
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (typeof (value) === 'string') return true;
  if (value instanceof String) return true;
  return false;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  let answer = 0;
  switch (value) {
    case 'A♣':
      answer = 0;
      break;
    case '2♣':
      answer = 1;
      break;
    case '3♣':
      answer = 2;
      break;
    case '4♣':
      answer = 3;
      break;
    case '5♣':
      answer = 4;
      break;
    case '6♣':
      answer = 5;
      break;
    case '7♣':
      answer = 6;
      break;
    case '8♣':
      answer = 7;
      break;
    case '9♣':
      answer = 8;
      break;
    case '10♣':
      answer = 9;
      break;
    case 'J♣':
      answer = 10;
      break;
    case 'Q♣':
      answer = 11;
      break;
    case 'K♣':
      answer = 12;
      break;
    case 'A♦':
      answer = 13;
      break;
    case '2♦':
      answer = 14;
      break;
    case '3♦':
      answer = 15;
      break;
    case '4♦':
      answer = 16;
      break;
    case '5♦':
      answer = 17;
      break;
    case '6♦':
      answer = 18;
      break;
    case '7♦':
      answer = 19;
      break;
    case '8♦':
      answer = 20;
      break;
    case '9♦':
      answer = 21;
      break;
    case '10♦':
      answer = 22;
      break;
    case 'J♦':
      answer = 23;
      break;
    case 'Q♦':
      answer = 24;
      break;
    case 'K♦':
      answer = 25;
      break;
    case 'A♥':
      answer = 26;
      break;
    case '2♥':
      answer = 27;
      break;
    case '3♥':
      answer = 28;
      break;
    case '4♥':
      answer = 29;
      break;
    case '5♥':
      answer = 30;
      break;
    case '6♥':
      answer = 31;
      break;
    case '7♥':
      answer = 32;
      break;
    case '8♥':
      answer = 33;
      break;
    case '9♥':
      answer = 34;
      break;
    case '10♥':
      answer = 35;
      break;
    case 'J♥':
      answer = 36;
      break;
    case 'Q♥':
      answer = 37;
      break;
    case 'K♥':
      answer = 38;
      break;
    case 'A♠':
      answer = 39;
      break;
    case '2♠':
      answer = 40;
      break;
    case '3♠':
      answer = 41;
      break;
    case '4♠':
      answer = 42;
      break;
    case '5♠':
      answer = 43;
      break;
    case '6♠':
      answer = 44;
      break;
    case '7♠':
      answer = 45;
      break;
    case '8♠':
      answer = 46;
      break;
    case '9♠':
      answer = 47;
      break;
    case '10♠':
      answer = 48;
      break;
    case 'J♠':
      answer = 49;
      break;
    case 'Q♠':
      answer = 50;
      break;
    case 'K♠':
      answer = 51;
      break;
    default:
      answer = 0;
  }
  return answer;
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
