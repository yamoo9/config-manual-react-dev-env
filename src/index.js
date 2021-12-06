import { logger, getRandomMinMax, transformText } from './utils'

logger(
  getRandomMinMax(), 
  transformText(`
    font-size: 5rem;
    font-weight: 700;
  `)
);