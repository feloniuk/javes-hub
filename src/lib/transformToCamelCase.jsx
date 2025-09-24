export default function transformToCamelCase(text) {
  const words = text.split(' ');
  const firstWord = words[0].toLowerCase();
  const otherWords = words.slice(1);
  const transformedText = [firstWord, ...otherWords].join('');
  return transformedText;
}