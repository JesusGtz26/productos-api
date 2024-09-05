let divData = document.getElementById("divData");

function getData(){
    const promesa = fetch ("https://freetestapi.com/api/v1/products", {method: "GET"})
    promesa.then((response)=>{
        response.json().then(
            (data)=>{
                console.log(data);
                ceateCards(data);
            }).catch((error) => console.log("Problema con el JSON", error));
    }).catch((err)=> console.log("Existio un problema con la solicitud"));
}//getData

function createCards(products){
    console.log(products.length);
    console.log(products[0].name);
    }//crear una card por cada producto con sus datos esenciales.
    // De preferencia foreach: name description, image, price.


//createCards


function createCards(products){
    console.log(products.length);
    products.forEach(p => {
        divData.insertAdjacentHTML("beforeend", 
            <div class= "card col">
                <img src= "${p.image}" class="card-img-top"
                style="object-fit: contain;width: 100%;heigth: 250px;"
                alt="${p.description}"></img>

                <div class="card-body" >
                    <h5 class="card-title">${products.name}</h5>
                    <p class="card-text"><strong>${p.brand}</strong></p>
                    <p class="card-text">${p.description.slice(0,20)} ...</p>
                    <p class="card-text">${p.rating} </p>
                   


                </div>
            </div>
        )
    })
}