"use strict"
let cards = document.getElementById('cards');
let selectProduct = document.querySelector('#selectProduct');
let caunt = selectProduct.value;
let x = "";
let url = `https://fakestoreapi.com/products?limit=${caunt}`;
console.log(selectProduct);


const changeUrl= y => url = `https://fakestoreapi.com/products?limit=${y}`


selectProduct.addEventListener('change', function(){
    caunt = selectProduct.value ;
    changeUrl(caunt);
    console.log(url)
    cardUrl(url);

})



//fetch url 
function cardUrl(url){
    fetch(url)
        .then(res => res.json())
        .then(json => {
            x = " ";
            json.map((el) => {
                x +=`
            <div class="card card__div align-items-center text-center d-flex p-5 col-4">
                <img src="${el.image}" class="card-img-top image-card" alt="...">
                  <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star last"></i>
                </div>
                <div class="card-body">
                    <h6 class="card-text">${el.title}</h6>
                    <h5 class="card-title">${el.price}</h5>
                </div>
                <div class="d-flex">
                    <i class="dot blue"></i>
                    <i class="dot pink"></i>
                    <i class="dot grey"></i>
                </div>
                </div>
              
            </div>
            `
            })
            cards.innerHTML = '';
            cards.innerHTML += x;
           
        });
};
cardUrl(url);









