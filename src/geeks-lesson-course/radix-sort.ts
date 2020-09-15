function radix_sort(array: number[], base = 10) {
  const maxNumOfDigits = maxDigits(array);

  for (let d = 1; d <= maxNumOfDigits; d++) {
    const buckets = Array(base);
    const sorted = [];
    for (let k = 0; k < array.length; k++) {
      const curNum = array[k];
      const indexToPush = Math.floor((curNum % base ** d) / base ** (d - 1));
      if (!buckets[indexToPush]) buckets[indexToPush] = [];
      buckets[indexToPush].push(curNum);
    }

    for (let b = 0; b < buckets.length; b++) {
      if (buckets[b]) sorted.push(...buckets[b]);
    }

    array = sorted;
  }

  return array;
}

function maxDigits(array: number[] | string[]) {
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    const len = String(array[i]).length;
    if (len > max) max = len;
  }

  return max;
}

console.log(radix_sort([111, 101, 10, 11, 0, 1, 110], 2));
console.log(radix_sort([99, 5, 78, 52, 0, 1, 6, 3, 4, 88]));
