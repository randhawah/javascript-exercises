const removeFromArray = function(arr, ...args) {
    
    //return arr.filter(x => !args.includes(x));

    args.forEach((arg) => {
        const index = arr.indexOf(arg);
        if (index > -1)
          arr.splice(index, 1);
      });
    
/*
      args.forEach(removeArg);

      function removeArg(item){
        const index = arr.indexOf(item);
        if (index > -1)
          arr.splice(index, 1);
      }
*/
      return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
