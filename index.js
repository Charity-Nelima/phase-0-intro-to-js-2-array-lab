// Write your solution here!
const cats = ["Milo", "Otis", "Garfield","Ralph" ];
cats.pop();

// // const cats = cats.push("Ralph");
// const Arrayfunctions = [];
// cats.push('Milo', 'Otis', 'Garfield');
// const destructivelyAppendCat = ["Milo", "Otis", "Garfield"];
// destructivelyAppendCat.push("Ralph");
function destructivelyAppendCat(name){
    cats.push(name)
    return cats}
    // function destructivelyAppendCat(name){
    //     cats.unshift(name)
    //     return cats}
// 

function destructivelyPrependCat(name) {
   cats.unshift(name);
}

function destructivelyRemoveLastCat() {
   cats.pop();
}

function destructivelyRemoveFirstCat() {
   cats.shift();
}

function appendCat(name) {
   var newArr = [...cats];
   newArr.push(name);
   return newArr;
}

function prependCat(name) {
   var newArr = [...cats];
   newArr.unshift(name);
   return newArr;
}

function removeLastCat() {
   var newArr = [...cats];
   newArr.pop();
   return newArr;
}

function removeFirstCat() {
   var newArr = [...cats];
   newArr.shift();
   return newArr;
}





















// cats.push("Ralph");