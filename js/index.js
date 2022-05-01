window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    $('#btnTop').click(function(){
        window.scrollTo(0,0);
    });


    let productos;
    console.log(productos)
    
    $.ajax({
        url: "./js/data.json", 
        dataType: "json",
        success: function(data) {
            productos = data;
            console.log(productos)
            showCardsCategories(productos.productsCategories, "box-categories");
            showCardsCategories(productos.productsAccessories, "box-accessories");

            showItem(productos.productsCategories);
            showItem(productos.productsAccessories);
            
        }
    });


    function showCardsCategories (list, idCategories){
        let acuModels = ``;
        for(let i = 0; i < list.length; i++){
            console.log(list[i].title)
            acuModels += `
            <a id="${list[i].idModel}" class="card bg-dark text-white card-models ${list[i].idModel}" href="./views/products.html">
                <img src=${list[i].imgModel} class="card-img card-img-model" alt=${list[i].title}>
                <div class="card-img-overlay card-model-text">
                    <h5 class="card-title card-model-text-title">${list[i].title}</h5>
                </div>
            </a>
            `;
    
        }
        document.getElementById(`${idCategories}`).innerHTML = acuModels;
    };
    
    let listItem = ``;
    function showItem (list){
        listItem = ``;
        localStorage.setItem("listItem", JSON.stringify(listItem));
        
        for(let i = 0; i < list.length; i++){
            let elements = document.getElementsByClassName(`${list[i].idModel}`);
        
            for(let j = 0; j < elements.length; j++) {

                elements[j].addEventListener("click", () => {
                    
                    listItem = list[i].idModel;
                    localStorage.setItem("listItem", JSON.stringify(listItem));

                });
            };
        };
    };
    


});
