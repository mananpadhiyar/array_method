 let ratingData = [  
 {restaurant: 'KFC', rating:5},
 {restaurant: 'Burger King', rating:4},
 {restaurant: 'KFC', rating:3},
 {restaurant: 'Domino', rating:2},
 {restaurant: 'Subway', rating:3},
 {restaurant: 'Domino', rating:1},
 {restaurant: 'Subway', rating:4},
 {restaurant: 'Pizza Hut', rating:5} ]

 
//  Average rating of all the restaurants :

const uniqueRestaurants = Array.from(new Set(ratingData.map(({restaurant}) => restaurant)));


let arr = [];

uniqueRestaurants.map(restaurantName => {

    const filteredData = ratingData.filter(obj => obj.restaurant == restaurantName);

     let outputObj = {
        restaurant: restaurantName,
        averageRating: filteredData.reduce((prev , next) => prev + next.rating,0) / filteredData.length
     }

     arr.push(outputObj);
});

console.log(arr);



// List of all restaurants with average rating greater than or equal to 4 :

const outputObj2 = arr.filter((item) => item.averageRating >= 4);

console.log(outputObj2);