window.addEventListener('DOMContentLoaded', (event) => {
    
    $('#btnTop').click(function(){
        window.scrollTo(0,0);
    });
    

    let productos;
    
    $.ajax({
        url: "../js/data.json", 
        dataType: "json",
        success: function(data) {
            productos = data;
            console.log(productos)
            let listItemProd = localStorage.getItem("listItem");
            switch(listItemProd) {
                case '"mandalaModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.mandala);
                    break;
                case '"negrasModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.negras);
                    break;
                case '"guardasModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.guardas);
                    break;
                case '"puntiModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.puntillismo);
                    break;
                case '"floresModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.flores); 
                    break;
                case '"yogaModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.yoga);
                    break;
                case '"personajesModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.personajes);
                    break;
                case '"andinasModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.andinas);
                    break;
                case '"grandesModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.grandes);
                    break;
                case '"chicasModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.chicas);
                    break;
                case '"infantilesModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.infantiles);
                    break;
                case '"navidadModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.navidad);
                    break;
                case '"institucionalesModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.institucionales);
                    break;
                case '"souvenirsModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.souvenirs);
                    break;
                case '"texturasModel"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.texturas);
                    break;
                case '"tutoresAccessories"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.tutores);
                    break; 
                case '"portamacetasAccessories"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.portamacetas);
                    break;
                case '"portasahumeriosAccessories"':
                    document.getElementById("prod-categories").classList.remove("show"); 
                    document.getElementById("prod-products").classList.remove("hide");
                    showProducts(productos.portasahumerios);
                    break;      
                default:
                    document.getElementById("prod-categories").classList.add("show"); 
                    document.getElementById("prod-products").classList.add("hide");
                    showCardsAll(listItemProd);
                    show(listItemProd);
                }
            
            modelActive("mandalaModel", productos.mandala, listItemProd, listItemProd);
            modelActive("negrasModel", productos.negras, listItemProd);
            modelActive("guardasModel", productos.guardas, listItemProd);
            modelActive("puntiModel", productos.puntillismo, listItemProd);
            modelActive("floresModel", productos.flores, listItemProd);
            modelActive("yogaModel", productos.yoga, listItemProd);
            modelActive("personajesModel", productos.personajes, listItemProd);
            modelActive("andinasModel", productos.andinas, listItemProd);
            modelActive("grandesModel", productos.grandes, listItemProd);
            modelActive("chicasModel", productos.chicas, listItemProd);
            modelActive("infantilesModel", productos.infantiles, listItemProd);
            modelActive("navidadModel", productos.navidad, listItemProd);
            modelActive("institucionalesModel", productos.institucionales, listItemProd);
            modelActive("souvenirsModel", productos.souvenirs, listItemProd);
            modelActive("texturasModel", productos.texturas, listItemProd);
            modelActive("tutoresAccessories", productos.tutores, listItemProd);
            modelActive("portamacetasAccessories", productos.portamacetas, listItemProd);
            modelActive("portasahumeriosAccessories", productos.portasahumerios, listItemProd);

            showCardsAll(listItemProd);
            

        }
    });
   

    function showCardsCategories (list, idCategories){
        let acuModels = ``;
        for(let i = 0; i < list.length; i++){
            acuModels += `
            <div id="${list[i].idModel}" class="card bg-dark text-white card-models ${list[i].idModel}">
                <img src=${list[i].imgModel} class="card-img card-img-model" alt=${list[i].title}>
                <div class="card-img-overlay card-model-text">
                    <h5 class="card-title card-model-text-title">${list[i].title}</h5>
                </div>
            </div>
            `;
    
        }
        document.getElementById(`${idCategories}`).innerHTML = acuModels;
    };


    function show(local){
        document.getElementById("prod-categories").classList.add("show"); 
        document.getElementById("prod-products").classList.add("hide");

        showCardsCategories(productos.productsCategories, "prod-box-categories");
        showCardsCategories(productos.productsAccessories, "prod-box-accessories");

        modelActive("mandalaModel", productos.mandala, local);
        modelActive("negrasModel", productos.negras, local);
        modelActive("guardasModel", productos.guardas, local);
        modelActive("puntiModel", productos.puntillismo, local);
        modelActive("floresModel", productos.flores, local);
        modelActive("yogaModel", productos.yoga, local);
        modelActive("personajesModel", productos.personajes, local);
        modelActive("andinasModel", productos.andinas, local);
        modelActive("grandesModel", productos.grandes, local);
        modelActive("chicasModel", productos.chicas, local);
        modelActive("infantilesModel", productos.infantiles, local);
        modelActive("navidadModel", productos.navidad, local);
        modelActive("institucionalesModel", productos.institucionales, local);
        modelActive("souvenirsModel", productos.souvenirs, local);
        modelActive("texturasModel", productos.texturas, local);
        modelActive("tutoresAccessories", productos.tutores, local);
        modelActive("portamacetasAccessories", productos.portamacetas, local);
        modelActive("portasahumeriosAccessories", productos.portasahumerios, local);
    };

    function showCardsAll (local){
        document.getElementById(`prod-all-btn`).addEventListener('click', () => {
            local = ``;
            localStorage.setItem("listItem", JSON.stringify(local));
            show(local);

        });
    };

    function showProducts (list){
        let acu = ``;
        let title = ``;
        for(let i = 0; i < list.length; i++){
            if(list[i].slider == 0){
                if(list[i].nombre == "Maceta clásica de 35 cm de diámetro"){
                    acu += `
                <div class="card card-item  animate__animated animate__fadeIn" style="width: 18rem;" type="button" data-bs-toggle="modal" data-bs-target="#productModal-${i}">
                    <img src=${list[i].img} class="card-img-top" alt="${list[i].nombre}">
                    <div class="card-body card-item-body">
                        <h5 class="card-title card-item-title">${list[i].nombre}</h5>
                        <p class="card-text"> ${list[i].precio}</p>
                    </div>
                </div>
                <div class="modal fade" id="productModal-${i}" tabindex="-1" aria-labelledby="productModalLabel-${i}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="productModalLabel-${i}">${list[i].nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src=${list[i].img} class="card-img-top" alt="${list[i].nombre}">
                            </div>
                            <div class="modal-bottom">
                                <h6 class="modal-bottom-title">Características:</h6>
                                <ul>
                                    <li class="modal-bottom-li">Es puro diseño nuestro, 100% artesanal.</li>
                                    <li class="modal-bottom-li">Macetas impermeabilizadas.</li>
                                    <li class="modal-bottom-li">Utilizamos esmaltes acrílicos de primera marca.</li>
                                    <li class="modal-bottom-li">Están protegidos con filtro UV doble, para su estadía en el exterior.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                }else if(list[i].nombre == "Souvenirs ~ Maceta clásica de 7 cm de diámetro"){
                    acu += `
                    <div class="card card-item  animate__animated animate__fadeIn" style="width: 18rem;" type="button" data-bs-toggle="modal" data-bs-target="#productModal-${i}">
                        <img src=${list[i].img} class="card-img-top" alt="${list[i].nombre}">
                        <div class="card-body card-item-body">
                            <h5 class="card-title card-item-title">${list[i].nombre}</h5>
                            <p class="card-text mb-1"> Precio: $ ${list[i].precio}</p>
                            <p class="card-text"> Pedidos por mayor, consultar por privado <i class="far fa-smile-beam"></i></p>
                        </div>
                    </div>
                    <div class="modal fade" id="productModal-${i}" tabindex="-1" aria-labelledby="productModalLabel-${i}" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="productModalLabel-${i}">${list[i].nombre}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src=${list[i].img} class="card-img-top" alt="${list[i].nombre}">
                                </div>
                                <div class="modal-bottom">
                                    <h6 class="modal-bottom-title">Características:</h6>
                                    <ul>
                                        <li class="modal-bottom-li">Es puro diseño nuestro, 100% artesanal.</li>
                                        <li class="modal-bottom-li">Macetas impermeabilizadas.</li>
                                        <li class="modal-bottom-li">Utilizamos esmaltes acrílicos de primera marca.</li>
                                        <li class="modal-bottom-li">Están protegidos con filtro UV doble, para su estadía en el exterior.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    }else{
                acu += `
                <div class="card card-item  animate__animated animate__fadeIn" style="width: 18rem;" type="button" data-bs-toggle="modal" data-bs-target="#productModal-${i}">
                    <img src=${list[i].img} class="card-img-top" alt="${list[i].nombre}">
                    <div class="card-body card-item-body">
                        <h5 class="card-title card-item-title">${list[i].nombre}</h5>
                        <p class="card-text"> Precio: $ ${list[i].precio}</p>
                    </div>
                </div>
                <div class="modal fade" id="productModal-${i}" tabindex="-1" aria-labelledby="productModalLabel-${i}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="productModalLabel-${i}">${list[i].nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src=${list[i].img} class="card-img-top" alt="${list[i].nombre}">
                            </div>
                            <div class="modal-bottom">
                                <h6 class="modal-bottom-title">Características:</h6>
                                <ul>
                                    <li class="modal-bottom-li">Es puro diseño nuestro, 100% artesanal.</li>
                                    <li class="modal-bottom-li">Macetas impermeabilizadas.</li>
                                    <li class="modal-bottom-li">Utilizamos esmaltes acrílicos de primera marca.</li>
                                    <li class="modal-bottom-li">Están protegidos con filtro UV doble, para su estadía en el exterior.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                }
            }else if (list[i].slider == 1){
                acu += `
                <div class="card card-item animate__animated animate__fadeIn" style="width: 18rem;">
                    <div class="card-item-modalBtn" type="button" data-bs-toggle="modal" data-bs-target="#productModal-${i}"></div>
                    <div id="carouselItem-${i}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src=${list[i].img} class="d-block w-100" alt="${list[i].nombre}">
                        </div>
                        <div class="carousel-item">
                            <img src=${list[i].imgSlider1} class="d-block w-100" alt="${list[i].nombre}">
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselItem-${i}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previo</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselItem-${i}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                    <div class="card-body card-item-body">
                        <h5 class="card-title card-item-title">${list[i].nombre}</h5>
                        <p class="card-text"> Precio: $ ${list[i].precio}</p>
                    </div>
                </div>
                <div class="modal fade" id="productModal-${i}" tabindex="-1" aria-labelledby="productModalLabel-${i}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="productModalLabel-${i}">${list[i].nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div id="carouselItemModal-${i}" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src=${list[i].img} class="d-block w-100" alt="${list[i].nombre}">
                                    </div>
                                    <div class="carousel-item">
                                        <img src=${list[i].imgSlider1} class="d-block w-100" alt="${list[i].nombre}">
                                    </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselItemModal-${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previo</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselItemModal-${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Siguiente</span>
                                    </button>
                                </div>
                            </div>
                            <div class="modal-bottom">
                                <h6 class="modal-bottom-title">Características:</h6>
                                <ul>
                                    <li class="modal-bottom-li">Es puro diseño nuestro, 100% artesanal.</li>
                                    <li class="modal-bottom-li">Macetas impermeabilizadas.</li>
                                    <li class="modal-bottom-li">Utilizamos esmaltes acrílicos de primera marca.</li>
                                    <li class="modal-bottom-li">Están protegidos con filtro UV doble, para su estadía en el exterior.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }else if (list[i].slider == 2){
                acu += `
                <div class="card card-item animate__animated animate__fadeIn" style="width: 18rem;">
                    <div class="card-item-modalBtn" type="button" data-bs-toggle="modal" data-bs-target="#productModal-${i}"></div>
                    <div id="carouselItem-${i}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src=${list[i].img} class="d-block w-100" alt="${list[i].nombre}">
                        </div>
                        <div class="carousel-item">
                            <img src=${list[i].imgSlider1} class="d-block w-100" alt="${list[i].nombre}">
                        </div>
                        <div class="carousel-item">
                            <img src=${list[i].imgSlider2} class="d-block w-100" alt="${list[i].nombre}">
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselItem-${i}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previo</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselItem-${i}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                    <div class="card-body card-item-body">
                        <h5 class="card-title card-item-title">${list[i].nombre}</h5>
                        <p class="card-text"> Precio: $ ${list[i].precio}</p>
                    </div>
                </div>
                <div class="modal fade" id="productModal-${i}" tabindex="-1" aria-labelledby="productModalLabel-${i}" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="productModalLabel-${i}">${list[i].nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div id="carouselItemModal-${i}" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src=${list[i].img} class="d-block w-100" alt="${list[i].nombre}">
                                    </div>
                                    <div class="carousel-item">
                                        <img src=${list[i].imgSlider1} class="d-block w-100" alt="${list[i].nombre}">
                                    </div>
                                    <div class="carousel-item">
                                        <img src=${list[i].imgSlider2} class="d-block w-100" alt="${list[i].nombre}">
                                    </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselItemModal-${i}" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previo</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselItemModal-${i}" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Siguiente</span>
                                    </button>
                                </div>
                            </div>
                            <div class="modal-bottom">
                                <h6 class="modal-bottom-title">Características:</h6>
                                <ul>
                                    <li class="modal-bottom-li">Es puro diseño nuestro, 100% artesanal.</li>
                                    <li class="modal-bottom-li">Macetas impermeabilizadas.</li>
                                    <li class="modal-bottom-li">Utilizamos esmaltes acrílicos de primera marca.</li>
                                    <li class="modal-bottom-li">Están protegidos con filtro UV doble, para su estadía en el exterior.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }
            
            title = list[i].tipo;

        };
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        
        document.getElementById("prod-box-products").innerHTML = acu;
        document.getElementById("prod-section-title").innerHTML = `<h3 class="title-section title-section-products animate__animated animate__fadeInUp animate__faster">${title}</h3>`;
    };

    
    function modelActive (id, productType, local) {
        let elementos = document.getElementsByClassName(`${id}`);
        
        for(let i = 0; i < elementos.length; i++) {
            elementos[i].addEventListener("click", (event) => {
                document.getElementById("prod-categories").classList.remove("show");
                document.getElementById("prod-products").classList.remove("hide");
                local = `${id}`;
                localStorage.setItem("listItem", JSON.stringify(local));
                
                showProducts(productType);
                event.preventDefault();
            
            });
        }

    };

  
    




});