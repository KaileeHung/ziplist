function zipList(arr1, arr2) {
  const retList = [];
  for (let i = 0; i < arr1.length; i++) {
    retList.push(arr1[i]);
    retList.push(arr2[i]);
  }
  return retList;
}

function zipListTheSimpleWay(arr1, arr2) {
  const zipped = _.zip(arr1, arr2);
  return _.flatten(zipped);
}

const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
