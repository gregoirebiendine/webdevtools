export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX;
export type ColorObject = {r: number, g: number, b: number, a: number};

export function ColorToOject(color: Color): ColorObject {
    const cut = color.replace('#', '');

    return {
        r: parseInt(cut.slice(0, 2), 16),
        g: parseInt(cut.slice(2, 4), 16),
        b: parseInt(cut.slice(4, 6), 16),
        a: 1
    };
}