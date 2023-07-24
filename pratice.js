// The Array.from() static method creates a new, shallow-copied Array instance from
// an iterable or array-like object.

const str = "1234567";

// [1, 2, 3, 4, 5, 6, 7]

const inOrder = Array.from(str, Number); 

console.log(inOrder);

// new Set : it will give unique value 

const numbers = [11,12,13,11,14,15,12,11];

const duplicateNumberNotRepeat = new Set(numbers);

console.log(duplicateNumberNotRepeat); // it will return an object , not an array


// that why we need to use here Array.from to convert in array

const perfect = Array.from(new Set(numbers));

console.log(perfect);

// another example in string

const strName = ["manan","sinh" ,"rajput" ,"manan","sinh"];

const duplicateNameNotReapeat = Array.from(new Set(strName));


console.log(duplicateNameNotReapeat);


// reduce function

const items = [

   { name: "rice", price: 5},
   { name: "Book", price: 20},
   { name: "soyabean", price: 10},
   { name: "monitor", price: 100},

];

// let totalPrice = 0;

// items.forEach(item => {

//     totalPrice += item.price;
// })

// console.log(totalPrice);


// now we gonna convert to the reduce function

// reduce method has two parameter : (1) basic function ()=> and inside of this function there 2 arg (2)starting from 0

 const totalPrice = items.reduce((total , item) => {
    
   //  console.log(`total: ${total}`);
   //  console.log(`Item: ${item.price}`);             // this is just for understanding
    return total + item.price;
    
},0);   // written here (0) cause total start from 0 and add value one by one

console.log(totalPrice);
/* -------------------------------------------------------------------------------------------------------------------- */

console.log("real answer:");

//a 

ratingData = [  
 {restaurant: 'KFC', rating:5},
 {restaurant: 'Burger King', rating:4},
 {restaurant: 'KFC', rating:3},
 {restaurant: 'Domino', rating:2},
 {restaurant: 'Subway', rating:3},
 {restaurant: 'Domino', rating:1},
 {restaurant: 'Subway', rating:4},
 {restaurant: 'Pizza Hut', rating:5} ]  
 
 

const uniqueRestaurant = Array.from(new Set(ratingData.map(({restaurant}) => restaurant)));

// console.log(uniqueRestaurant);

let arr = [];

uniqueRestaurant.map(restaurantName => {
      
    const filteredratingData = ratingData.filter(obj => obj.restaurant == restaurantName);

     let outputObject = {
          
        restaurant : restaurantName,
        averageRating : filteredratingData.reduce((prev , next) => prev + next.rating,0) / filteredratingData.length,
     }

     arr.push(outputObject);
})


console.log(arr);

//b- find out aevrage rating 

const secondOutput = arr.filter(item => item.averageRating >= 4);

console.log(secondOutput);