const letters = 'abcdefghijklmnopqrstuvwxyz'

module.exports = function (index) {
    return letters[index % 26];
}