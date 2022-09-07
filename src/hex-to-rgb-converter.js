const HEX_MAP = new Map([
    ["0", 0],
    ["1", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9],
    ["A", 10],
    ["B", 11],
    ["C", 12],
    ["D", 13],
    ["E", 14],
    ["F", 15],
]);

/// Converts a hex value to an rgb value
function convertToRGB(color = "") {
    let rgb = "";

    // TODO: We should also handle for the opacity values before the HEX rgb value
    if (color.length > 6) {
        window.alert("Invalid HEX color code");
        return;
    }

    // If the char is an alpha character, we will need to grab it from the map, then multiply by 16
    rgb = rgb.concat(colorSection(color.substring(0, 2)) + ", ");
    rgb = rgb.concat(colorSection(color.substring(2, 4)) + ", ");
    rgb = rgb.concat(colorSection(color.substring(4, 6)));

    return rgb;
}

function colorSection(colorSection = "") {
    let colorValue = 0;

    colorValue += (HEX_MAP.get(colorSection.charAt(0).toUpperCase()) * 16);
    colorValue += (HEX_MAP.get(colorSection.charAt(1).toUpperCase()));

    return colorValue;
}

module.exports = { convertToRGB };