const converter = require("./hex-to-rgb-converter.js");
const generator = require("./hex-color-generator.js");
/// Set of colors gets generated here
function generateNewColors(num = 5) {
    const colors = {
        color: [],
    };

    // Generate the actual color
    let hexColor = "";
    let rgbColor = "";

    for (let i = 0; i < num; i++) {
        hexColor = generator.generateColor();
        rgbColor = converter.convertToRGB(hexColor);
        let newColor = {
            HEX: "#" + hexColor,
            RGB: rgbColor,
        }; 

        colors.color.push(newColor);
    }

    return colors;
}

function generateSingleColor(){
    let hexColor = generator.generateColor();
    let rgbColor = converter.convertToRGB(hexColor);

    const newColor = {
        HEX: "#" + hexColor.toUpperCase(),
        RGB: rgbColor
    }

    return newColor;
}

module.exports = { generateNewColors, generateSingleColor };