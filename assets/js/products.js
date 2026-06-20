let products = [];
let currentCategory = "Todos";

fetch("store/Products/prod.json")
.then(r => r.json())
.then(data => {

products = data;

renderProducts();

});

function renderProducts(){

const search =
document
.getElementById("search")
.value
.toLowerCase();

const container =
document.getElementById("products");

container.innerHTML = "";

products

.filter(product=>{

const matchSearch=

product.nome
.toLowerCase()
.includes(search)

||

product.codigo
.toLowerCase()
.includes(search);

const matchCategory=

currentCategory==="Todos"

||

product.categoria===currentCategory;

return matchSearch && matchCategory;

})

.forEach(product=>{

container.innerHTML+=`

<div class="card">

<img src="${product.imagem}">

<h3>${product.nome}</h3>

<p>${product.tipo}</p>

<p>R$ ${product.preco.toFixed(2)}</p>

<p class="stock">
Estoque: ${product.estoque}
</p>

<button
class="buy"
onclick="addToCart('${product.codigo}')">

Adicionar

</button>

</div>

`;

});

}

document
.getElementById("search")
.addEventListener(
"input",
renderProducts
);

document
.querySelectorAll(".categories button")
.forEach(btn=>{

btn.onclick=()=>{

currentCategory=
btn.dataset.category;

renderProducts();

};

});
