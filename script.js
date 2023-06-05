let menu = 
    [
        {
          "id": 1,
          "name": "Cheeseburger",
          "price": 5.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
        },
        {
          "id": 2,
          "name": "Pizza",
          "price": 8.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
        },
        {
          "id": 3,
          "name": "Tacos",
          "price": 3.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
        },
        {
          "id": 4,
          "name": "Sushi",
          "price": 11.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
        },
        {
          "id": 5,
          "name": "Pasta",
          "price": 9.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
        },
        {
          "id": 6,
          "name": "Fried Chicken",
          "price": 7.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
        },
        {
          "id": 7,
          "name": "Grilled Cheese Sandwich",
          "price": 4.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
        },
        {
          "id": 8,
          "name": "Steak",
          "price": 15.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
        },
        {
          "id": 9,
          "name": "Caesar Salad",
          "price": 6.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
        },
        {
          "id": 10,
          "name": "Fish and Chips",
          "price": 8.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
        },
        {
          "id": 11,
          "name": "Ramen",
          "price": 9.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
        },
        {
          "id": 12,
          "name": "Burrito",
          "price": 7.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
        },
        {
          "id": 13,
          "name": "Pho",
          "price": 8.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
        },
        {
          "id": 14,
          "name": "Pad Thai",
          "price": 9.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
        },
        {
          "id": 15,
          "name": "Gyro",
          "price": 6.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
        },
        {
          "id": 16,
          "name": "Ice Cream",
          "price": 3.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
        },
        {
          "id": 17,
          "name": "Smoothie",
          "price": 4.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
        },
        {
          "id": "18",
          "name": "Apple Pie",
          "price": 4.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
        },
        {
          "id": 19,
          "name": "Chocolate Cake",
          "price": 5.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
        },
        {
          "id": 20,
          "name": "Pancakes",
          "price": 4.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
        },
        {
          "id": 21,
          "name": "Cupcake",
          "price": 2.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
        },
        {
          "id": 22,
          "name": "Crepes",
          "price": 5.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
        },
        {
          "id": 23,
          "name": "Club Sandwich",
          "price": 6.99,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
        },
        {
          "id": 24,
          "name": "Falafel",
          "price": 5.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
        },
        {
          "id": 25,
          "name": "Curry",
          "price": 9.49,
          "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
        }
      ]


  const header = document.querySelector("header");

  window.addEventListener("scroll",function(){

  });





function getMenu() {
  return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(menu => {
      // Display menu options to the user
      console.log('Menu:');
      for (const category in menu) {
        console.log(`- ${category}: ${menu[category].join(', ')}`);
      }
    })
    .catch(error => console.log('Error:', error));
  }

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = {
        items: []
      };


      // Prompt the user to enter their order
      const userInput = prompt('Enter your order (separate multiple items with commas):');
      const orderedItems = userInput.split(',').map(item => item.trim());

      // Add the ordered items to the order
      for (const item of orderedItems) {
        order.items.push(item);
      }

      resolve(order);
    }, 2500);
  });
}

function orderPrep(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orderStatus = true;
      const paid = false;
      order.order_status = orderStatus;
      order.paid = paid;
      resolve(order);
    }, 1500);
  });
}

function payOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orderStatus = true;
      const paid = prompt('Enter payment amount:');
      if (paid) {
        order.order_status = orderStatus;
        order.paid = parseFloat(paid);
        resolve(order);
      }else{
        reject('Payment amount not provided.');
      }
    }, 1000);
  });
}

// function placeOrder(){
//   orderPrep()
//     .then(orderStatus => {
//       console.log("Order status:", orderStatus);
//       // Handle the order status as needed
//     })
//     .catch(error => {
//       console.error("Error occurred during order preparation:", error);
//     });
  
//     let popup = document.getElementsByClassName("model-container")[0];
//     popup.style.transform = 'scale(1)';
  
//     let status = document.getElementById("status");
//     const message = `Your order is placed. To pay please click the pay button`;
  
//     status.innerText = message;
  
//     document.getElementById("pay-button").innerText = "Pay Now"
//   }


function thankyouFnc() {
  alert('Thank you for eating with us today!');
}

// Promise chaining
getMenu()
  .then(takeOrder)
  .then(orderPrep)
  .then(payOrder)
  .then(thankyouFnc)
  .catch(error => console.log(error));









// const menu = [
//     {
//         "id": 1,
//         "name": "Cheeseburger",
//         "price": 5.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
//       },
//       {
//         "id": 2,
//         "name": "Pizza",
//         "price": 8.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
//       },
//       {
//         "id": 3,
//         "name": "Tacos",
//         "price": 3.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
//       },
//       {
//         "id": 4,
//         "name": "Sushi",
//         "price": 11.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
//       },
//       {
//         "id": 5,
//         "name": "Pasta",
//         "price": 9.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
//       },
//       {
//         "id": 6,
//         "name": "Fried Chicken",
//         "price": 7.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
//       },
//       {
//         "id": 7,
//         "name": "Grilled Cheese Sandwich",
//         "price": 4.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
//       },
//       {
//         "id": 8,
//         "name": "Steak",
//         "price": 15.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
//       },
//       {
//         "id": 9,
//         "name": "Caesar Salad",
//         "price": 6.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
//       },
//       {
//         "id": 10,
//         "name": "Fish and Chips",
//         "price": 8.49,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
//       },
//       {
//         "id": 11,
//         "name": "Ramen",
//         "price": 9.49,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
//       },
//       {
//         "id": 12,
//         "name": "Burrito",
//         "price": 7.49,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
//       },
//       {
//         "id": 13,
//         "name": "Pho",
//         "price": 8.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
//       },
//       {
//         "id": 14,
//         "name": "Pad Thai",
//         "price": 9.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
//       },
//       {
//         "id": 15,
//         "name": "Gyro",
//         "price": 6.49,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
//       },
//       {
//         "id": 16,
//         "name": "Ice Cream",
//         "price": 3.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
//       },
//       {
//         "id": 17,
//         "name": "Smoothie",
//         "price": 4.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
//       },
//       {
//         "id": "18",
//         "name": "Apple Pie",
//         "price": 4.49,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
//       },
//       {
//         "id": 19,
//         "name": "Chocolate Cake",
//         "price": 5.49,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
//       },
//       {
//         "id": 20,
//         "name": "Pancakes",
//         "price": 4.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
//       },
//       {
//         "id": 21,
//         "name": "Cupcake",
//         "price": 2.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
//       },
//       {
//         "id": 22,
//         "name": "Crepes",
//         "price": 5.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
//       },
//       {
//         "id": 23,
//         "name": "Club Sandwich",
//         "price": 6.99,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
//       },
//       {
//         "id": 24,
//         "name": "Falafel",
//         "price": 5.49,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
//       },
//       {
//         "id": 25,
//         "name": "Curry",
//         "price": 9.49,
//         "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
//       }
//     ]

    // console.log(menu);
    // menu.forEach(item =>{
    //     console.log(`Burger Name:${item.name}`);
    //     console.log(`Price:$${item.price}`);
    //     console.log('----------------------')
    // });






// // this function to get the menu 
// async function getMenu() {

// }

// fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
//     .then(response => response.json())
//     .then(function(data) {
//         var container = document.getElementById("container");
//         console.log(data)
//         for (let i = 0; i < data.length; i++) {


//             var divBody = `
//       <div class="card" >
//           <img src="${data[i].imgSrc}" class="card-img" alt="" >
//           <div class="content">
//               <h2>${data[i].id}</h2>
//               <h3>${data[i].name}</h3>
//               <h3> Price: ${data[i].price}</h3>
              
//                <a href="#" onclick="takeOrder(${data[i].id},'${data[i].imgSrc}','${data[i].name}',${data[i].price})"> Order now</a>
//           </div>
//       </div>`;
//             container.innerHTML += divBody;
//         }


//     })
//     .catch(error => console.error(error));






// // Function to take the order
// function takeOrder() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             // console.log(orderid,imglink,proName,proPrice);
//             // console.log(orderid.children[1].children[2].innerText);
//             const burgers = ["Burger 1", "Burger 2", "Burger 3"];
//             //  const order=burgers;
//             const order = {
//                 burger1: burgers[Math.floor(Math.random() * burgers.length)],
//                 burger2: burgers[Math.floor(Math.random() * burgers.length)],
//                 burger3: burgers[Math.floor(Math.random() * burgers.length)]
//             };

//             resolve(order);
//         }, 2500);
//     });
// }

// // order preparation
// function orderPrep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const orderStatus = true;
//             const paid = false;
//             resolve({ orderStatus, paid });
//         }, 1500);
//     });
// }

// // pay the order
// function payOrder() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const orderStatus = true;
//             const paid = true;
//             resolve({ orderStatus, paid });
//         }, 1000);
//     });
// }

// //thank alert
// function thankyouFnc() {
//     alert('Thank you for eating with us today!');
// }

// // see the Promise chaining
// getMenu()
//     .then(() => takeOrder())
//     .then(order => {
//         console.log(order);

//         return orderPrep();
//     })
//     .then(status => {
//         console.log(status);
//         return payOrder();
//     })
//     .then(status => {
//         console.log(status);
//         thankyouFnc();
//     })
//     .catch(error => console.error(error));

// //   this Async/await
// async function runOrder() {
//     try {
//         await getMenu();
//         const order = await takeOrder();
//         console.log(order);
//         const status = await orderPrep();
//         console.log(status);
//         const payment = await payOrder();
//         console.log(payment);
//         thankyouFnc();
//     } catch (error) {
//         console.error(error);
//     }
// }

// runOrder();











// // getMenu() function: Fetch food items from the JSON and display them
// // let firstScript = document.getElementsByTagName("script")[0];
// // firstScript.addEventListener("load" , getMenu)
// let foods;
// async function getMenu() {
//     try {
      
//     let response = await fetch(`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`)

//     let result = await response.json();
    
//     foods = result;
//     for(let i = 0 ; i < result.length; i++){

//         let Container = document.getElementsByClassName("container")[0];

//         let item = result[i];

//         let food = document.createElement("div")
//         food.className = "food-info"
//         food.innerHTML = `<img src="${item.imgSrc}" alt="">
//         <div class="specs">
//         <p>Name:${item.name}</p>
//         <p>Price:${item.price}$</p>
//         </div>
//         <span class="material-symbols-outlined btn">
//             done
//             </span>`;

//             Container.append(food);


//     }   
//     } catch (error) {
//       console.log("Error fetching menu:", error);
//     }
//   }
  
//   // takeOrder() function: Return a promise that resolves after 2500 milliseconds
//   function takeOrder() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const burgers = foods;
//         const order = {
//           burgers: burgers.sort(() => 0.5 - Math.random()).slice(0, 3) // Select 3 random burgers
//         };
//         resolve(order);
//       }, 2500);
//     });
//   }
  
//   // orderPrep() function: Return a promise that resolves after 1500 milliseconds
//   function orderPrep() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const orderStatus = true;
//         const paid = false;
//         resolve({ order_status: orderStatus, paid });
//       }, 1500);
//     });
//   }
  
//   // payOrder() function: Return a promise that resolves after 1000 milliseconds
//   function payOrder() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const orderStatus = true;
//         const paid = true;
//         resolve({ order_status: orderStatus, paid });
//       }, 1000);
//     });
//   }
  
//   // thankyouFnc() function: Display an alert message on the screen
//   function thankyouFnc() {
//     const alertDiv = document.createElement("div");
//     alertDiv.className = "alert";
//     alertDiv.textContent = "Thank you for eating with us today!";
//     document.body.appendChild(alertDiv);
//     window.alert("Thank you for eating with us today!")
//   }
  
//   // Function to handle the promises sequentially
//   async function handlePromises() {
//     try {
//       await getMenu(); // Fetch and display the menu
//       console.log("Menu:",foods)
//       console.log("Note:Go below and click order now to take the orders")
  
//       const orderBtn = document.getElementById("order-btn");
//       orderBtn.addEventListener("click", async () => {
//         const order = await takeOrder();
//         console.log("Order:", order);
  
//         const orderPrepResult = await orderPrep();
//         console.log("Order Preparation Status:", orderPrepResult);
  
//         const payOrderResult = await payOrder();
//         console.log("Payment Status:", payOrderResult);
  
//         thankyouFnc();
//       });
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   }
  
//   // Call the function to start the process
//   handlePromises();
  















// // getMenu() function
// async function getMenu() {
//     try {
//         const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
//         const menuData = await response.json();

//         // Displaying food items to the user
//         console.log('Menu:', menuData);

//         // Get the container element
//         const container = document.getElementById('menu-container');

//         // Loop through the menu items
//         menuData.forEach(item => {
//             // Create a new div for each menu item
//             const menuItem = document.createElement('div');
//             menuItem.classList.add('menu-item');

//             // Create an image element
//             const image = document.createElement('img');
//             image.src = item.imgSrc;
//             image.alt = item.name;

//             // Create a heading element for the menu item name
//             const name = document.createElement('h3');
//             name.textContent = item.name;

//             // Create a paragraph element for the menu item price
//             const price = document.createElement('p');
//             price.textContent = 'Price: ' + item.price;

//             // Append the image, name, and price elements to the menu item div
//             menuItem.appendChild(image);
//             menuItem.appendChild(name);
//             menuItem.appendChild(price);

//             // Append the menu item div to the container
//             container.appendChild(menuItem);

//         });
//         return menuData;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // takeOrder() function
// /* function takeOrder() {
//    return new Promise((resolve,reject) => {
//      setTimeout(() => {
//        const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'];
//        const order = {
//          burgers: burgers.slice(0, 3), // Selecting 3 random burgers
//        };
//        if(order.burgers.length === 3){
//        resolve(order);
//        }else{
//          reject(new Error("Failed to take the order."));
//        }
//      }, 2500);
//    });
//  }*/

// /*async function getMenu() {
//   try {
//     const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
//     const menuData = await response.json();
//     return menuData;
//   } catch (error) {
//     console.error('Failed to fetch the menu:', error);
//     throw new Error('Failed to fetch the menu.');
//   }
// }*/

// function takeOrder(menu) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const ordersContainer = document.getElementById('orders-container');
//             //const menuContainer = document.getElementById('menu-container');
//             ordersContainer.innerHTML = ''; // Clear previous orders
//             //menuContainer.innerHTML = ''; // Clear menu items


//             const orders = [];
//       for (let i = 0; i < 3; i++) {
//         const randomIndex = Math.floor(Math.random() * menu.length);
//         const order = menu[randomIndex];
//         orders.push(order);

//         const orderItem = document.createElement('div');
//         orderItem.classList.add('order-item');

//         const image = document.createElement('img');
//         image.src = order.imgSrc;
//         image.alt = order.name;

//         const name = document.createElement('h3');
//         name.textContent = order.name;

//         const price = document.createElement('p');
//         price.textContent = 'Price: ' + order.price;

//         orderItem.appendChild(image);
//         orderItem.appendChild(name);
//         orderItem.appendChild(price);

//         ordersContainer.appendChild(orderItem);
//       }

//             resolve(orders);
//         }, 2500);
//     });
// }




// // orderPrep() function
// function orderPrep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const orderStatus = {
//                 order_status: true,
//                 paid: false,
//             };
//             if (orderStatus.order_status && !orderStatus.paid) {
//                 resolve(orderStatus);
//             } else {
//                 reject(new Error("Failed to prepare the order."));
//             }
//         }, 1500);
//     });
// }

// // payOrder() function
// function payOrder() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const orderStatus = {
//                 order_status: true,
//                 paid: true,
//             };
//             if (orderStatus.order_status && orderStatus.paid) {
//                 resolve(orderStatus);
//             } else {
//                 reject(new Error("Failed to process the payment."));
//             }
//         }, 1000);
//     });
// }

// // thankyouFnc() function
// function thankyouFnc() {
//     alert('Thank you for eating with us today!');
// }

// // Execute the restaurant flow when the screen loads
// window.onload = async function () {
//     const menuData = await getMenu();
//     // console.log('Menu:', menuData);

//     const order = await takeOrder(menuData);
//     console.log('Order:', order);

//     const orderStatus = await orderPrep();
//     console.log('Order Status:', orderStatus);

//     const paidOrder = await payOrder();
//     console.log('Order Status:', paidOrder);

//     thankyouFnc();
// };




















// const menu = [
//     {
//       "name": "Cheeseburger",
//       "price": 8.99
//     },
//     {
//       "name": "BBQ Burger",
//       "price": 9.99
//     },
//     {
//       "name": "Veggie Burger",
//       "price": 7.99
//     },
//     // Add more burger items as needed
//   ];
//   console.log(menu);  // Output the entire menu array

// // Iterate over the menu items and display burger details
// menu.forEach(item => {
//   console.log(`Burger Name: ${item.name}`);
//   console.log(`Price: $${item.price}`);
//   console.log('--------------------------');
// });
  













// // Define functions
// let arrayOfDishes=[];
// async function getMenu() {
  
//   const data = await response.json();
//   const menu = document.getElementById("menu");
//   data.forEach((item) => {
//     menu.innerHTML += `
//       <div class="card-body">
//         <img src="${item.imgSrc}" alt="${item.imageAlt}" width="50%">
//         <h2>${item.name}</h2>
//         <p>${item.price}$</p>
//       </div>
//     `;
//     arrayOfDishes.push(item.name);
//   });
// }
 
// function takeOrder() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const order = {
//         burgers: [arrayOfDishes[Math.floor(Math.random() * arrayOfDishes.length)], arrayOfDishes[Math.floor(Math.random() * arrayOfDishes.length)], arrayOfDishes[Math.floor(Math.random() * arrayOfDishes.length)]]
        
//       };
//       console.log(order.burgers);
//       resolve(order);
//     }, 2500);
//   });
// }
 
// function orderPrep() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({order_status: true, paid: false});
//     }, 1500);
//   });
// }
 
// function payOrder() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({order_status: true, paid: true});
//     }, 1000);
//   });
// }
 
// function thankyouFnc() {
//   alert("Thank you for eating with us today!");
// }
 
// // Attach event listener to order button
// const orderBtn = document.getElementById("order-btn");
// orderBtn.addEventListener("click", async () => {
//   try {
//     const order = await takeOrder();
//     console.log("Order placed: ", order);
 
//     const orderStatus = await orderPrep();
//     console.log("Order status: ", orderStatus);
 
//     const payment = await payOrder();
//     console.log("Payment status: ", payment);
 
//     if (payment.paid) {
//       thankyouFnc();
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });
 
// // Call getMenu function on page load
// getMenu();












// let data = [];

// fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
// .then(response => response.json())
// .then(dataResponse => {
//   data = dataResponse;
//   renderTable(data);
// })
// .catch(error => {
//   console.error('Error:', error);
// });



// let url="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";


// async function getMenu(){
//     try{
//         let res = await fetch(url)
//         let data =await res.json()
//         displayFoodItems(data);
//         return new Promise((resolve,reject)=> resolve(data));
//     }catch(err){
//         console.log(err.message);
//     }
// }

// function takeOrder (data) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(async()=>{
//             let selectedBurgers;
//            try{
//                 selectedBurgers = select3Burgers(data);
//                 displaySelectedBurgers(selectedBurgers);
//            }
//            catch(e){
//             console.log(e);
//            }
//            resolve(selectedBurgers);
//         },2500);
//     })
// }
// function orderPrep(data){
//     let order={order_status:true, paid:false};
//     return new Promise((resolve, reject) => {
//         setTimeout(async()=>{
//             try{
//                 orderStatus(data,order);
//             }catch(err){
//                 console.log(err);
//             }
//             resolve(order);
//         },1500);
//     })
// }

// function payOrder(order){
//     foodOrder={...order};
//     foodOrder.paid=true;
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             try{
//                 placeOrder(foodOrder);
//             }catch(err){
//                 console.log(err);
//             }
//             resolve(foodOrder);
//         },1000)
//     })
// }

// function thankYou(order){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 try {
//                     if(order.paid){
//                         successMsg();
//                         resolve();
//                     }
//                     else reject(new Error("Payment Failed!"));
//                 } catch (error) {
//                     console.log(error);
//                 }
//             },1000);
//         })
// }

// getMenu()
//     .then((data)=>takeOrder(data))
//     .then((burgers3)=>orderPrep(burgers3))
//     .then((order)=>payOrder(order))
//     .then((order)=>thankYou(order))
//     .catch((err)=>console.log(err))


// function select3Burgers (burgers) {
//     let arr=[];
//     arr.length=3;
//     for(let i=0;i<3;i++){
//         let rdnNum = randomNum(burgers.length);
//         arr[i]=rdnNum;
//         for(let j=0;j<i;j++){
//             if(arr[i]==arr[j]){ 
//                 i--;
//             }
//         }
//     }
//     let selectedFood=[];
//     arr.map((num)=>{
//         selectedFood.push(burgers[num]);
//     })
//     return selectedFood;
// }

// function randomNum(max){
//    return Math.floor(Math.random()*max);
// }

// function displayFoodItems (burgers) {
//     console.log(burgers);
//     burgers.map((burger)=>{
//         let foodBox=document.createElement("div");
//         foodBox.setAttribute("class","foodBox");
//         let img=document.createElement("img");
//         img.src=burger.img;
//         let name=document.createElement("p");
//         name.innerHTML=`Name: <strong>${burger.name}</strong>`;
//         let price=document.createElement("p");
//         price.innerHTML=`Price: <strong>$${burger.price}</strong>`;
//         let dsc=document.createElement("p");
//         dsc.innerHTML=`<strong>${burger.dsc}</strong>`;
//         let rating=document.createElement("p");
//         rating.innerHTML=`Rating: <strong>${burger.rate}</strong>⭐`;
//         foodBox.append(img,name,price,dsc,rating);
//         document.querySelector("main").append(foodBox);
//     })
// }

// function displaySelectedBurgers(burgers){
//     console.log(burgers);
//     document.querySelector(".modal").style.display="block";
//     document.querySelector("#modalHeading").textContent="Selected Food Items";
//     burgers.map((burger)=>{
//         let orderBox=document.createElement("div");
//         orderBox.setAttribute("class","orderBox")
//         let img=document.createElement("img");
//         img.src=burger.img;
//         let name=document.createElement("p");
//         name.innerHTML=`<strong>${burger.name}</strong>`;
//         let price=document.createElement("p");
//         price.innerHTML=`<strong>Price: </strong>$${burger.price}`
//         let rating=document.createElement("p");
//         rating.innerHTML=`<strong>Rating: </strong>${burger.rate}⭐`;
//         orderBox.append(img,name,price,rating);
//         document.querySelector(".modal-content").append(orderBox);
//     })
// }

// function orderStatus(burgers,order){
//     console.log(order);
//     document.querySelector("#orderStatus").innerHTML="";
//     let total=0;
//     burgers.map((burger)=>total+=burger.price);
//     let status=document.createElement("p");
//     status.innerHTML=`Make Payment of <strong>$${total}</strong> to place your order`;
//     status.style.color="red";
//     document.querySelector("#orderStatus").append(status);
// }

// function placeOrder(order){
//     console.log(order);
//     document.querySelector("#orderStatus").innerHTML="";
//     let status=document.createElement("p");
//     status.innerHTML=`Payment Done! ✅ Your order has been placed successfully`;
//     status.style.color="green";
//     document.querySelector("#orderStatus").append(status);
// }

// function successMsg(){
//     console.log("Thank You");
//     alert("Thank You!")
//     document.querySelector(".modal").style.display="none";
// }






// function getMenu() {
//     return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
//       .then(response => response.json())
//       .then(menu => {
//         const menuDiv = document.getElementById('menu');
//         const menuHTML = document.createElement('ul');
  
//         for (const category in menu) {
//           const categoryLi = document.createElement('li');
//           categoryLi.innerHTML = `<strong>${category}</strong>`;
//           const itemsUl = document.createElement('ul');
  
//           for (const item of menu[category]) {
//             const itemLi = document.createElement('li');
//             itemLi.innerHTML = `${item.name}: $${item.price}`;
//             itemsUl.appendChild(itemLi);
//           }
  
//           categoryLi.appendChild(itemsUl);
//           menuHTML.appendChild(categoryLi);
//         }
  
//         menuDiv.appendChild(menuHTML);
//       })
//       .catch(error => console.log('Error:', error));
//   }
  
//   getMenu();
  









// async function getMenu() {
//     try {
//         const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
//         const menuData = await response.json();

//         // Displaying food items to the user
//         console.log('Menu:', menuData);

//         // Get the container element
//         const container = document.getElementById('menu-container');

//         // Loop through the menu items
//         menuData.forEach(item => {
//             // Create a new div for each menu item
//             const menuItem = document.createElement('div');
//             menuItem.classList.add('menu-item');

//             // Create an image element
//             const image = document.createElement('img');
//             image.src = item.imgSrc;
//             image.alt = item.name;

//             // Create a heading element for the menu item name
//             const name = document.createElement('h3');
//             name.textContent = item.name;

//             // Create a paragraph element for the menu item price
//             const price = document.createElement('p');
//             price.textContent = 'Price: ' + item.price;

//             // Append the image, name, and price elements to the menu item div
//             menuItem.appendChild(image);
//             menuItem.appendChild(name);
//             menuItem.appendChild(price);

//             // Append the menu item div to the container
//             container.appendChild(menuItem);

//         });
//         return menuData;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // takeOrder() function
// /* function takeOrder() {
//    return new Promise((resolve,reject) => {
//      setTimeout(() => {
//        const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'];
//        const order = {
//          burgers: burgers.slice(0, 3), // Selecting 3 random burgers
//        };
//        if(order.burgers.length === 3){
//        resolve(order);
//        }else{
//          reject(new Error("Failed to take the order."));
//        }
//      }, 2500);
//    });
//  }*/

// /*async function getMenu() {
//   try {
//     const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
//     const menuData = await response.json();
//     return menuData;
//   } catch (error) {
//     console.error('Failed to fetch the menu:', error);
//     throw new Error('Failed to fetch the menu.');
//   }
// }*/

// function takeOrder(menu) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const ordersContainer = document.getElementById('orders-container');
//             //const menuContainer = document.getElementById('menu-container');
//             ordersContainer.innerHTML = ''; // Clear previous orders
//             //menuContainer.innerHTML = ''; // Clear menu items


//             const orders = [];
//       for (let i = 0; i < 3; i++) {
//         const randomIndex = Math.floor(Math.random() * menu.length);
//         const order = menu[randomIndex];
//         orders.push(order);

//         const orderItem = document.createElement('div');
//         orderItem.classList.add('order-item');

//         const image = document.createElement('img');
//         image.src = order.imgSrc;
//         image.alt = order.name;

//         const name = document.createElement('h3');
//         name.textContent = order.name;

//         const price = document.createElement('p');
//         price.textContent = 'Price: ' + order.price;

//         orderItem.appendChild(image);
//         orderItem.appendChild(name);
//         orderItem.appendChild(price);

//         ordersContainer.appendChild(orderItem);
//       }

//             resolve(orders);
//         }, 2500);
//     });
// }




// // orderPrep() function
// function orderPrep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const orderStatus = {
//                 order_status: true,
//                 paid: false,
//             };
//             if (orderStatus.order_status && !orderStatus.paid) {
//                 resolve(orderStatus);
//             } else {
//                 reject(new Error("Failed to prepare the order."));
//             }
//         }, 1500);
//     });
// }

// // payOrder() function
// function payOrder() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const orderStatus = {
//                 order_status: true,
//                 paid: true,
//             };
//             if (orderStatus.order_status && orderStatus.paid) {
//                 resolve(orderStatus);
//             } else {
//                 reject(new Error("Failed to process the payment."));
//             }
//         }, 1000);
//     });
// }

// // thankyouFnc() function
// function thankyouFnc() {
//     alert('Thank you for eating with us today!');
// }

// // Execute the restaurant flow when the screen loads
// window.onload = async function () {
//     const menuData = await getMenu();
//     // console.log('Menu:', menuData);

//     const order = await takeOrder(menuData);
//     console.log('Order:', order);

//     const orderStatus = await orderPrep();
//     console.log('Order Status:', orderStatus);

//     const paidOrder = await payOrder();
//     console.log('Order Status:', paidOrder);

//     thankyouFnc();
// };














// // // Function to get the menu
// function getMenu() {
//     return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
//       .then(response => response.json())
//       .then(menu => {
//         // Display menu options to the user
//         console.log('Menu:');
//         for (const category in menu) {
//           console.log(`- ${category}: ${menu[category].join(', ')}`);
//         }
//       })
//       .catch(error => console.log('Error:', error));
//   }
  
// function getMenu() {
//     if(document.body.classList.contains('menu')){
//         const ele = document.getElementsByClassName("menu");
//         ele.remove();
//     }else{
//         fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
//         .then(response => response.json())
//         .then(data => {
//             // Display the menu items on the webpage
//             const menuDiv = document.createElement('div');
//             menuDiv.setAttribute('id', 'menu');
//             data.forEach(item => {
//             const menuItem = document.createElement('p');
//             menuItem.textContent = item.name + ' - $' + item.price;
//             menuDiv.appendChild(menuItem);
//             });
//             const box = document.getElementsByClassName("dynamic-display");
//             box.appendTo(menuDiv);
//         })
//         .catch(error => {
//             console.log('Error fetching menu:', error);
//         });
//     }
    
//   }
  
//   // Function to take the order
//   function takeOrder() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const order = {
//           burgers: ['Burger 1', 'Burger 2', 'Burger 3']
//         };
//         resolve(order);
//       }, 2500);
//     });
//   }
  
//   // Function for order preparation
//   function orderPrep() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const orderStatus = {
//           order_status: true,
//           paid: false
//         };
//         resolve(orderStatus);
//       }, 1500);
//     });
//   }
  
//   // Function for payment
//   function payOrder() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         const orderStatus = {
//           order_status: true,
//           paid: true
//         };
//         resolve(orderStatus);
//       }, 1000);
//     });
//   }
  
//   // Function to display the thank you message
//   function thankYou() {
//     alert('Thank you for eating with us today!');
//   }
  
//   // Event listeners for the buttons
//   document.getElementById('menuButton').addEventListener('click', getMenu);
//   document.getElementById('orderButton').addEventListener('click', () => {
//     takeOrder()
//       .then(order => {
//         console.log('Order:', order);
//         return orderPrep();
//       })
//       .then(orderStatus => {
//         console.log('Order status:', orderStatus);
//         return payOrder();
//       })
//       .then(orderStatus => {
//         console.log('Order status:', orderStatus);
//         if (orderStatus.paid) {
//           thankYou();
//         }
//       })
//       .catch(error => {
//         console.log('Error:', error);
//       });
//   });
//   document.getElementById('payButton').addEventListener('click', payOrder);



















// function getMenu() {
//     const menu = {
//       pizzas: ['Margherita', 'Pepperoni', 'Vegetarian'],
//       burgers: ['Classic Burger', 'Cheeseburger', 'Veggie Burger'],
//       icecreams: ['Vanilla', 'Chocolate', 'Strawberry'],
//       smoothies: ['Mango', 'Banana', 'Berry'],
//       chocolates: ['Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
//       curries: ['Butter Chicken', 'Vegetable Curry', 'Paneer Tikka Masala']
//     };
  
//     const menuList = document.getElementById('menuList');
//     for (const category in menu) {
//       const categoryItem = document.createElement('li');
//       categoryItem.innerHTML = `<strong>${category}</strong>`;
//       menuList.appendChild(categoryItem);
  
//       const itemList = document.createElement('ul');
//       menu[category].forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         itemList.appendChild(li);
//       });
  
//       menuList.appendChild(itemList);
//     }
//   }
  
  // function takeOrder() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const menu = {
  //         pizzas: ['Margherita', 'Pepperoni', 'Vegetarian'],
  //         burgers: ['Classic Burger', 'Cheeseburger', 'Veggie Burger'],
  //         icecreams: ['Vanilla', 'Chocolate', 'Strawberry'],
  //         smoothies: ['Mango', 'Banana', 'Berry'],
  //         chocolates: ['Milk Chocolate', 'Dark Chocolate', 'White Chocolate'],
  //         curries: ['Butter Chicken', 'Vegetable Curry', 'Paneer Tikka Masala']
  //       };
  
  //       const order = {
  //         items: []
  //       };
  
  //       // Display menu options to the user
  //       console.log('Menu:');
  //       for (const category in menu) {
  //         console.log(`- ${category}: ${menu[category].join(', ')}`);
  //       }
  
  //       // Prompt the user to enter their order
  //       const userInput = prompt('Enter your order (separate multiple items with commas):');
  //       const orderedItems = userInput.split(',').map(item => item.trim());
  
  //       // Filter out invalid items and add them to the order
  //       for (const category in menu) {
  //         for (const item of orderedItems) {
  //           if (menu[category].includes(item)) {
  //             order.items.push(item);
  //           }
  //         }
  //       }
  
  //       resolve(order);
  //     }, 2500);
  //   });
  // }
  
  
  // function orderPrep(order) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const orderStatus = true;
  //       const paid = false;
  //       order.order_status = orderStatus;
  //       order.paid = paid;
  //       resolve(order);
  //     }, 1500);
  //   });
  // }
  // function payOrder(order) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const orderStatus = true;
  //       const paid = prompt('Enter payment amount:');
  //       if (paid) {
  //         order.order_status = orderStatus;
  //         order.paid = parseFloat(paid);
  //         resolve(order);
  //       } else {
  //         reject('Payment amount not provided.');
  //       }
  //     }, 1000);
  //   });
  // }
  
  
  // function thankyouFnc() {
  //   alert('Thank you for eating with us today!');
  // }
  
  // // Promise chaining
  // getMenu();
  // takeOrder()
  //   .then(orderPrep)
  //   .then(payOrder)
  //   .then(thankyouFnc)
  //   .catch(error => console.log(error));
  
  