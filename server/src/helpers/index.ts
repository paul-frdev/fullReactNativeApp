function isStringified(jsonValue: string) {
  // use this function to check
  try {
    console.log('need to parse');
    return JSON.parse(jsonValue);
  } catch (err) {
    console.log('not need to parse');

    return jsonValue;
  }
}

module.exports = isStringified;
