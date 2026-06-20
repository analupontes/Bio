let cart = [];

function addToCart(codigo){

const product =
products.find(
p=>p.codigo===codigo
);

const existing =
cart.find(
p=>p.codigo===codigo
);

if(existing){

existing.qtd++;

}else{

cart.push({
...product,
qtd:1
});

}

updateCart();

}

function updateCart(){

document
.getElementById("cartCount")
.textContent =

cart.reduce(
(total,item)=>
total+item.qtd,
0
);

const items =
document
.getElementById("cartItems");

items.innerHTML="";

let total=0;

cart.forEach(item=>{

total +=
item.preco*item.qtd;

items.innerHTML += `

<div>

<b>${item.nome}</b>

<br>

Qtd:
${item.qtd}

</div>

<hr>

`;

});

document
.getElementById("cartTotal")
.innerHTML =

`<h3>Total:
R$ ${total.toFixed(2)}</h3>`;

}

document
.getElementById("cartButton")
.onclick=()=>{

document
.getElementById("cartPanel")
.classList
.toggle("open");

};

document
.getElementById("checkout")
.onclick=()=>{

let total=0;

let msg=
"Olá! Quero fazer um pedido:%0A%0A";

cart.forEach(item=>{

msg +=

`Código: ${item.codigo}%0A`+

`Nome: ${item.nome}%0A`+

`Tipo: ${item.tipo}%0A`+

`Quantidade: ${item.qtd}%0A`+

`Preço: R$${item.preco}%0A%0A`;

total +=
item.preco * item.qtd;

});

msg +=
`Total: R$${total.toFixed(2)}`;

window.open(
`https://wa.me/554396174585?text=${msg}`
);

};
