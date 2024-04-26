export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX;
export type ColorObject = {r: number, g: number, b: number, a: number};

export function ColorToOject(color: Color): ColorObject {
    if (!color)
        return {r: 0, g: 0, b: 0, a: 0};
    if (color.includes('#')) {
        return {
            r: parseInt(color.slice(1, 3), 16),
            g: parseInt(color.slice(3, 5), 16),
            b: parseInt(color.slice(5, 7), 16),
            a: 1
        };
    }
    const splitted = color.split('(')[1].split(')')[0].split(', ');
    const nbs = splitted.map(el => {return parseFloat(el)});
    if (nbs.length == 3)
        return {r: nbs[0], g: nbs[1], b: nbs[2], a: 1};
    return {r: nbs[0], g: nbs[1], b: nbs[2], a: nbs[3]};
}

export function HEXBuilder(r: number, g: number, b: number): HEX {
    return `#${NumberToHex(r)}${NumberToHex(g)}${NumberToHex(b)}`;

}

export function isValidHexColor(color: string): boolean {
    return color.match(/^#([0-9a-f]{6})$/i) !== null;
}


// Private utils

function NumberToHex(nb: number): string {
    return Math.floor(nb).toString(16).padStart(2, "0");
}