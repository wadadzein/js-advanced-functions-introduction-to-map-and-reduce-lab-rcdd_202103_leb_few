// function map(sourceArray, func){
//   return sourceArray.map(func);
// }
// const sourceArray= [1,2,3,4];
// const mapToNegativize=
//   sourceArray.map(function(item){
//     return item * -1;
//   });
// console.log (mapToNegative);

function mapToNegativize(sourceArray){
  sourceArray.map(function(item){
    return item*-1;
  });
}
function mapToNoChange(sourceArray){
 sourceArray.map(function(item){
    return item;
  });
}


function mapToDouble(sourceArray){
sourceArray.map(function(item){
    return item * 2;
  });
}
function mapToSquare(sourceArray){
sourceArray.map(function(item){
    return item * item;
  });
}
