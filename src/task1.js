function stringLength(string) {
    if (string.length === 0 || string.length > 10) throw new Error('String should at least 1 character long and not longer than 10 characters.');
    return string.length;
}

module.exports = stringLength;