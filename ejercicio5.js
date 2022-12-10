const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let conteo = 0;
  for (i=0; i< param.length; i++) {
    if ( typeof param[i] === "number") {
        conteo += param[i];
    } else {
            conteo += param[i].length;

        }
        }
  console.log(conteo);
} averageWord(mixedElements);
