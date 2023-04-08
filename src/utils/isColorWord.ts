import { IColor } from "../models/IColor";

const isColorWord = (value: IColor): boolean => {
  const rgbRegex = /^rgb\((\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5]),\s*(\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5]),\s*(\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5])\)$/;
  const rgbaRegex = /^rgba\((\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5]),\s*(\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5]),\s*(\d{1,2}|1\d{1,2}|2[0-4]\d|25[0-5]),\s*(0?\.\d+|1)\)$/;
  const hexRegex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;
  
  return rgbRegex.test(value) || rgbaRegex.test(value) || hexRegex.test(value);
}

export { isColorWord }

// npm test -- isColorWord.test.ts