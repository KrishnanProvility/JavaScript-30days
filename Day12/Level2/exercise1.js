const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(para, numWords) {
  let splitedword = para.replace(/[.,]/g, "").split(" ");
  const frequencyMap = {};
  splitedword.forEach((word) => {
    if (word) {
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }
  });
  t

  return Object.entries(frequencyMap)
    .sort(([,count1], [,count2]) => count2 - count1)
    .slice(0, numWords)
    .map(([word, count]) => ({ word, count }));
}

console.log(tenMostFrequentWords(paragraph, 10));
