/* 
1. հաշվել թվի 1 արժեքով բիթերի քանակը
2. ստուգել թվի 1 արժեքով բիթերի քանակը կենտ է, թե զույգ
3. կատարել swap գործողություն թվի i և j բիթերը տեղափոխելու համար
4. շրջել թվի բիթերը(reverse), օրինակ՝ 11110000 -> 00001111 
*/


function getBinary(num) {
	const binaryInfo = {
  	binary:[],
    0: 0,
    1:0,
  };
  let i = 0;
  while (num > 0) {
    binaryInfo.binary[i] = num % 2;
    binaryInfo[num % 2] = binaryInfo[num % 2] + 1;
    num = Math.floor(num / 2);
    i++;
  }
  console.log(binaryInfo)
  return binaryInfo
}
//1.
function bitLength(num) {
  const binaryInfo = getBinary(num)
  return binaryInfo.binary.length;
}
//2.
function bitEvenOdd(num) {
  const binaryInfo = getBinary(num)
	return binaryInfo['1'].length % 2 ? 'odd' :  'even'
}

//4.
function reversBinary(num) {
  const binaryInfo = getBinary(num)
	return ~(num << 32 - binaryInfo.binary.length) >> 32 - binaryInfo.binary.length
}

console.log(bitLength(12))
console.log(bitEvenOdd(123))
console.log(reversBinary(240))