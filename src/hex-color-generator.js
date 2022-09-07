/// Returns the hex value which can then be used for a color
function generateColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

module.exports = { generateColor };