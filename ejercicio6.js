const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
const removed = [];
const arrayT = param.sort()
for (i=0; i< arrayT.length; i++) {
if (arrayT[i +1] === arrayT[i]) {
    removed.push(arrayT[i]);
}
} console.log(removed);
 } removeDuplicates(duplicates);
