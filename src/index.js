// 모듈 함수
const getRandom = (n) => Math.random() * n;
const getRandomMinMax = (min = 0, max = 10) =>
  Math.floor(getRandom(max - min) + min);

const logger = (message, cssCode = '') => 
  console.log(`%c${message}`, cssCode);

const transformText = (text) => {
  return text.toString().replace(/\n\s+/g, '').trim();
}


// 함수 실행
logger(
  getRandomMinMax(), 
  transformText(`
    font-size: 5rem;
    font-weight: 700;
  `)
);