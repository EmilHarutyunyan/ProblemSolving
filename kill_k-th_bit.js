function solution(n, k) {
  const binary = (n).toString(2).split('')
  binary[binary.length - k] = '0'
  return parseInt(binary.join(''), 2);
}
