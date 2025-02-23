const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(para) {


  let splitedword = para.replace(/[.,%&@\$!?;#]/g, "").toLowerCase().split(" ")
  
  const frequencyMap = {};
  splitedword.forEach((word) => {
    if (word) {
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }
  });
  
  return Object.entries(frequencyMap)
    .sort(([,count1], [,count2]) => count2 - count1)
    .slice(0, 3)
    .map(([word, count]) => ({ word, count }));
}
console.log(cleanText(sentence));
    