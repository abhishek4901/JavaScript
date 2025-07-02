 let prices = [100, 200, 300, 400, 500];

 console.log("The original price is:");
 
 for (let price of prices ){
     console.log(`The  price is: ${price}`);
     let offer = price /10;
    price = price - offer;
    console.log(`The offer price is: ${price}`);
 }