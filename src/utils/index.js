// 모듈 함수
export const getRandom = (n) => Math.random() * n;
export const getRandomMinMax = (min = 0, max = 10) =>
  Math.floor(getRandom(max - min) + min);

export const logger = (message, cssCode = '') => 
  console.log(`%c${message}`, cssCode);

export const transformText = (text) => {
  return text.toString().replace(/\n\s+/g, '').trim();
}