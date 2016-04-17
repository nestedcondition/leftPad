function leftPad(...args) {
  var [str, finalLength, fillChar] = args;
  str = (str || '') + '';
  finalLength = parseInt(finalLength, 10) || str.length;
  if (fillChar === undefined) {
    fillChar = ' ';
  } else {
    fillChar = ('' + fillChar).slice('')[0];
  }
  return Array(finalLength - str.length).fill(fillChar).concat(str).join('');
}
