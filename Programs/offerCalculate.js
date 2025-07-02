 let prices = [100, 200, 300, 400, 500];

 let i = 1;
 for (let price of prices ){
     console.log(`The original price of product number ${i} : ${price}`);
     let offer = price /10;
     price = price- offer;
     console.log(`The  after offer product  price is: ${price}`);
  
        i++;
 }