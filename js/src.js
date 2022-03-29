/*
1- Initialiser un projet git dans le dossier DS
2- Ecrire le code HTML et CSS pour réaliser cette page
3- Faire un commit des changements avec le message "satatic page"
4- Completer la fonction  updateList pour afficher la liste des produits 
5- Faire un commit des changements avec le message "updateList"
6- Un clique sur (+) permet d'ajouter un produit au panier. 
Completer le code de "addProd" pour ajouter des element au panier et modifier le prix total
7-Faire un commit des changements avec le message "addProd"
8-Completer le code de "delProd" pour supprimer un element au panier
9-Faire un commit des changements avec le message "delProd"
10-Completer le code de "searchfun" pour filtrer les element de la liste
11- Faire un commit des changements avec le message "searchfun"
12- utiliser ajax pour récuperer la list des produit de http://este.ovh:8080/prods
*/


let listProducts = document.querySelector(".content-left")
let addProduct = document.querySelector(".content-right")
let totalPrice = document.getElementById("total")


function updateList(products) {
    //Mettre à jour la liste des produit
    listProducts.innerHTML = " "
    products.forEach(element => {
        listProducts.innerHTML +=
            `
        <div id="elm${element.id}" class="prod">
            <img id="pro" src="${element.path}" alt="">
            <img id="img${element.id}" class="plus" src="${element.plus}" alt="">
            <div class="info">
                <h4>${element.name}<h4>
                <h4>${element.price} dh<h4>
            </div>
        </div>
        `
    })
}
updateList(products)


function addProd() {
    // Ajout d'un produit au panier (e : event object)
    products.forEach(element => {
        let elm = document.createElement("div")
        elm.setAttribute("class", "pr")
        elm.setAttribute("id", `pr${element.id}`)
        elm.innerHTML = ""
        elm.innerHTML += `
        <h4>${element.name}</h4>
        <h4>${element.price}DH</h4>
        <h4 id="qtt${element.id}">${element.qtt}</h4>
        <img id="del${element.id}" src="${element.del}" >
    `
        let pl = document.getElementById(`img${element.id}`);
        addProduct.appendChild(elm)
        pl.onclick = function() {
            elm.style.display = "flex"
            let qtt = document.getElementById(`qtt${element.id}`)
            qtt.innerHTML = parseInt(qtt.innerHTML) + 1
            totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + element.price
        }
    })
}
addProd()



function delProd() {
    // Suppression d'un produit du panier (e : event object)
    products.forEach(element => {
        let pr = document.getElementById(`pr${element.id}`)
        let del = document.getElementById(`del${element.id}`)
        let qtt = document.getElementById(`qtt${element.id}`)
        del.onclick = function() {
            qtt.innerHTML = parseInt(qtt.innerHTML) - 1
            totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - element.price
            if (parseInt(qtt.innerHTML) <= 0) {
                pr.style.display = "none"
            }
        }
    })
}

delProd()

function updateChart() {
    // fonction pour mettre à jour le panier 
}



let search = document.getElementById("search")
let btns = document.getElementById("sear")

function searchfun(e) {
    // recherche des des produits contenant le texte saisie dans la zone recherche

    products.forEach(element => {
        let elm = document.getElementById(`elm${element.id}`)
        btns.addEventListener("click", function() {
            if ((search.value) !== (element.name)) {
                elm.style.display = "none"
                console.log(search.value)
            }
        })
    })
}

searchfun()