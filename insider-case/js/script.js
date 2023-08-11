function GetProducts(){
  return fetch("https://opt-interview-projects.onrender.com/smart-recommender")
  .then(response =>response.json())
  .then(data=>{
    products=data;
    Change();
  })
}

function Change(){
  var count=products.length;
  var rndNumb=Math.floor(Math.random()*count);
  document.getElementById('id').innerText=products[rndNumb].id;
  document.getElementById('name').innerText=products[rndNumb].name;
  document.getElementById('url').innerText=products[rndNumb].url;
  document.getElementById('img').innerText=products[rndNumb].img;
  document.getElementById('price').innerText.products[rndNumb].price;
}

GetProducts();