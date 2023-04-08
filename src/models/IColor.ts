import { type CSSProperties } from "react";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type vanillaCSS = `${CSSProperties['color']}`
type tailwindCSS = "red" | "blue" | "green"

export type IColor = RGB | RGBA | HEX | tailwindCSS | vanillaCSS;