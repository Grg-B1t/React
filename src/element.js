
function element(a) {
    const colorHex = a.toString(16);
    return colorHex.length === 1 ? '0' + colorHex:colorHex;
}

function rgbHexColor(r, g, b){
    return '#' + element(r) + element(g) + element(b);
}

export default rgbHexColor;