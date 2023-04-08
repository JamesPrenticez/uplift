import isColorWord from './isColorWord';

describe('isColorWord', () => {
  it('should return true for valid RGB strings', () => {
    expect(isColorWord('rgb(255, 0, 0)')).toBe(true);
    expect(isColorWord('rgb(0, 255, 0)')).toBe(true);
    expect(isColorWord('rgb(0, 0, 255)')).toBe(true);
    expect(isColorWord('rgb(255, 255, 255)')).toBe(true);
    expect(isColorWord('rgb(128, 128, 128)')).toBe(true);
  });

  it('should return true for valid RGBA strings', () => {
    expect(isColorWord('rgba(255, 0, 0, 0.5)')).toBe(true);
    expect(isColorWord('rgba(0, 255, 0, 0.5)')).toBe(true);
    expect(isColorWord('rgba(0, 0, 255, 0.5)')).toBe(true);
    expect(isColorWord('rgba(255, 255, 255, 0.5)')).toBe(true);
    expect(isColorWord('rgba(128, 128, 128, 0.5)')).toBe(true);
  });

  it('should return true for valid HEX strings', () => {
    expect(isColorWord('#ff0000')).toBe(true);
    expect(isColorWord('#00ff00')).toBe(true);
    expect(isColorWord('#0000ff')).toBe(true);
    expect(isColorWord('#ffffff')).toBe(true);
    expect(isColorWord('#808080')).toBe(true);
  });

  it('should return false for invalid color strings', () => {
    expect(isColorWord('hsl(0, 100%, 50%)')).toBe(false);
    expect(isColorWord('invalid-string')).toBe(false);
    expect(isColorWord('rgb(256, 0, 0)')).toBe(false);
    expect(isColorWord('rgb(0, 256, 0)')).toBe(false);
    expect(isColorWord('rgb(0, 0, 256)')).toBe(false);
    expect(isColorWord('rgba(255, 0, 0, 1.1)')).toBe(false);
    expect(isColorWord('rgba(255, 0, 0, -0.1)')).toBe(false);
    expect(isColorWord('#fg0000')).toBe(false);
    expect(isColorWord('#ff00000')).toBe(false);
    expect(isColorWord('red')).toBe(false);
    expect(isColorWord('green')).toBe(false);
    expect(isColorWord('blue')).toBe(false);
  });
});