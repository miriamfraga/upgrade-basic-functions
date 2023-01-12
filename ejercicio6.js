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

let uniques = [];
let doubble = [];
for ( let i=0; i< param.length; i++) {
  let word = param[i];
  if (uniques.includes(word)) {
    doubble.push(word);
  }else {
    uniques.push(word);
    
  } 
} return doubble;
 } 
console.log(removeDuplicates(duplicates));
