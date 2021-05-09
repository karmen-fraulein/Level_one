//Solution Recursion

function caunt(first = 1, second = 1, maxNumber, sum = 0) {
  let tmp = first;
  first = second;
  second = first + tmp;
  if (second % 2 == 0) {
    sum += second;
  }
  if (second > maxNumber) {
    console.log(sum);
    return;
  }
  caunt(first, second, maxNumber, sum);
}
caunt(1, 1, 4000000);
