const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
 
function findLongestWord(param) {
     let palabraMasLarga = " ";

     for (let avenger of param) {
        // mira cada elemento
        if (avenger.length > palabraMasLarga.length) {
            palabraMasLarga = avenger;
        }
     }
     console.log(palabraMasLarga);
 }  
 findLongestWord(avengers);
