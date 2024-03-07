const produtc = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  };
  

let cart = document.getElementById("items")

async function getProducts(){
     const response = await fetch("https://fakestoreapi.com/products");
     const products = await response.json();

     localStorage.setItem( "products", JSON.stringify(products) )

     console.log("products",products)
     
     let allitems = " ";
     products.map((item)=>{
        allitems += `<div class="item" id=${item.id}>
        <img src="${item.image}" alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price"> $ ${item.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Category: ${item.category}</div>
          <div class="row">Rating: ${item.rating.rate}</div>
          <div class="row">Title: ${item.title}</div>
        </div>
        <button id="addBtn">Add to Cart</button>
        </div>`
     })
     cart.innerHTML = allitems;

}

getProducts();

function searhProduct(){
    let searchValue = document.getElementById("search").value; 
    let data  = JSON.parse(localStorage.getItem("products"))
    console.log("data",data);
    if(searchValue.length>0){
        var searchedProducts = data.filter((item) => {
            return item.title.includes(searchValue)
    })
    
    let allitems = " ";
    searchedProducts.map((item)=>{
       allitems += `<div class="item"  id=${item.id}>
       <img src="${item.image}" alt="Item" />
       <div class="info">
         <div class="row">
           <div class="price"> $ ${item.price}</div>
           <div class="sized">S,M,L</div>
         </div>
         <div class="colors">
           Colors:
           <div class="row">
             <div class="circle" style="background-color: #000"></div>
             <div class="circle" style="background-color: #4938af"></div>
             <div class="circle" style="background-color: #203d3e"></div>
           </div>
         </div>
         <div class="row">Category: ${item.category}</div>
         <div class="row">Rating: ${item.rating.rate}</div>
         <div class="row">Title: ${item.title}</div>
       </div>
       <button id="addBtn">Add to Cart</button>
       </div>`
    })
    cart.innerHTML = allitems;
 }
}





