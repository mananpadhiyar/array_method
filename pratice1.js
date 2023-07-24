ratingData = [  
    {restaurant: 'KFC', rating:5}, 
   {restaurant: 'Burger King', rating:4}, 
   {restaurant: 'KFC', rating:3}, 
   {restaurant: 'Domino', rating:2}, 
   {restaurant: 'Subway', rating:3}, 
   {restaurant: 'Domino', rating:1}, 
   {restaurant: 'Subway', rating:4}, 
   {restaurant: 'Pizza Hut', rating:5} ]  
   
   // a. Calculate the Average rating for all the restaurants.
 
   //1st task in this que => to get unique restaurant Name(done)
   // by using new set => will give output in object
   // to convert into an array => Array.from

let uniqueRestaurants = Array.from(new Set(ratingData.map((value , index) => {
        
   return value.restaurant;
     
})))


// console.log(uniqueRestaurants)

let array = [];

let finalOut = uniqueRestaurants.map((restaurantName , index) => {
            

   let filteredData = ratingData.filter((value , index) => {
       
      return value.restaurant == restaurantName;

   })

   // console.log(filteredData.length)
           
  let totalRating = filteredData.reduce((pre , next) => {
         
     return pre + next.rating;

  },0)

//   console.log(averageRating)
   return {
      
      "restaurant" : restaurantName,
      "averageRating" : totalRating / filteredData.length

   }

})


array.push(finalOut);

console.log(array)

      
//    [{ restaurant: 'KFC', averageRating: 4}, 
//    { restaurant: 'Burger King', averageRating: 4}, 
//    { restaurant: 'Domino', averageRating: 1.5}, 
//    { restaurant: 'Subway', averageRating: 3.5}, 
//    { restaurant: 'Pizza Hut', averageRating: 5}] 

// b. List of all restaurants with average rating greater than or equal to 4.

let greaterThen4 = finalOut.filter((value , index) => {
         
   return value.averageRating >= 4;

})

console.log(greaterThen4);