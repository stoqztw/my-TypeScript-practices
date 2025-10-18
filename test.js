function getCount(str) {
  return str.match(/[aeiou]/ig) === null ? 0 : str.match(/[aeiou]/ig).length;
}

console.log(getCount('my pyx'))