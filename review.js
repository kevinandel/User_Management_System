function review(arr1, arr2) {
  let finarr = [];
  for(let i = 0;i<arr1.length;i++) {
    for(let j = 0;j<arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
        finarr.push(arr1[i]);
      }
    }
  }
  return finarr;
}


const array1 = [1,2,3];
const array2 = [2,3,4];
console.log(review(array1,array2));
