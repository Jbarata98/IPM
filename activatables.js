function toggle_visibility(id) {
	var e = document.getElementById(id);
	if (e.style.visibility == 'visible') e.style.visibility = 'hidden';
	else e.style.visibility = 'visible';
}

var cerveja = { name: "Cerveja", price: 0.50, qntCart: 0, imgsrc: "assets/Cerveja.png"};
var sangria = { name: "Sangria", price: 0.60, qntCart: 0,  imgsrc: "assets/Sangria.png"};
var vodkaredbull = { name: "Vodka Red Bull", price: 1.00, qntCart: 0, imgsrc: "assets/VodkaRedBull.png" };

var options = [];
options["cerveja"] = cerveja;
options["sangria"] = sangria;
options["vodkaredbull"] = vodkaredbull;

var quant = 1;
var prod;

function makeList(array) {
	var list = document.createElement('ul');
	list.style.listStyleType = 'none';
	list.style.textAlign = "left";
	for (var i = 0; i < array.length; i++) {
		var fufu = function(){array[index].qntCart = selector.value; showCart();}
		var index = i; /* Used to correct function use*/
		var item = document.createElement('li');
		item.appendChild(document.createTextNode(array[i].name + ' x'));
		var selector = document.createElement("input");
		selector.type = 'number';
		selector.min = 1;
		selector.max = 99;
		selector.defaultValue = array[i].qntCart;
		selector.style.width = '2.5em';
		selector.style.textAlign = 'center';
		selector.addEventListener("click", fufu);
		item.appendChild(selector);
		list.appendChild(item);
	}
	
	return list;
}

function makeDiv(product) {
	prod = product;
	var div = document.createElement('div');
	div.setAttribute("id", 'innercart'); // Just a nice name
	var pic = document.createElement('IMG');
	var ratio = pic.width/pic.height;
	pic.setAttribute("src", product.imgsrc);
	pic.style.display = 'block';
	pic.style.margin = '0 auto';
	pic.setAttribute("width", 100);
	pic.setAttribute("height", pic.width * ratio);
	div.appendChild(pic);
	var name = document.createElement('span');
	name.style.display = 'block';
	name.textContent = product.name;
	name.style.fontSize = '1.5em';
	div.appendChild(name);
	var quantity = document.createElement('span');
	quantity.setAttribute("id", 'varquantity');
	quantity.textContent = 'Quantidade: ' + quant;
	quantity.style.display = 'inline-block';
	quantity.style.fontSize = '1em';
	div.appendChild(quantity);
	var buttonsdiv = document.createElement('div');
	buttonsdiv.style.display = 'inline-block';
	buttonsdiv.style.verticalAlign = 'middle';
	buttonsdiv.style.margin = '8px';
	var addbutton = document.createElement('button');
	addbutton.innerHTML = '+';
	addbutton.style.display = 'block';
	addbutton.style.cursor = 'pointer';
	addbutton.style.fontSize = '1em';
	addbutton.style.fontWeight = 'bold';
	addbutton.style.backgroundColor = 'white';
	addbutton.style.width = '2em';
	addbutton.style.height = '2em';
	addbutton.style.border = '2px solid';
	addbutton.style.margin = '4px';
	addbutton.style.borderRadius = '35px';
	addbutton.onclick = increasequant;
	buttonsdiv.appendChild(addbutton);
	var subtrbutton = document.createElement('button');
	subtrbutton.innerHTML = '-';
	subtrbutton.style.display = 'block';
	subtrbutton.style.cursor = 'pointer';
	subtrbutton.style.fontSize = '1em';
	subtrbutton.style.fontWeight = 'bold';
	subtrbutton.style.backgroundColor = 'white';
	subtrbutton.style.width = '2em';
	subtrbutton.style.height = '2em';
	subtrbutton.style.border = '2px solid';
	subtrbutton.style.margin = '4px';
	subtrbutton.style.borderRadius = '35px';
	subtrbutton.onclick = decreasequant;
	buttonsdiv.appendChild(subtrbutton);
	div.appendChild(buttonsdiv);
	var unitarypricetag = document.createElement('span');
	unitarypricetag.textContent = 'Preço unitário:';
	unitarypricetag.style.display = 'inline-block';
	unitarypricetag.style.fontSize = '1em';
	unitarypricetag.style.marginRight = '4px'; /*Used to correct missed space, no other way found*/
	div.appendChild(unitarypricetag);
	var unitaryprice = document.createElement('span');
	unitaryprice.setAttribute("id", 'unitprice');
	unitaryprice.textContent = (Number(product.price).toFixed(2));
	unitaryprice.style.display = 'inline-block';
	unitaryprice.style.fontSize = '1em';
	unitaryprice.style.marginRight = '4px'; /*Used to correct missed space, no other way found*/
	div.appendChild(unitaryprice);
	var euro = document.createElement('span');
	euro.textContent = ' €';
	euro.style.display = 'inline-block';
	euro.style.fontSize = '1em';
	div.appendChild(euro);
	var totalprice = document.createElement('span');
	totalprice.setAttribute("id", 'finalprice');
	totalprice.textContent = 'Preço total: ' + (Number(product.price * quant).toFixed(2)) + ' €';
	totalprice.style.display = 'block';
	totalprice.style.fontSize = '1em';
	div.appendChild(totalprice);
	
	var finishbutton = document.createElement('button');
	finishbutton.innerHTML = 'Adicionar';
	finishbutton.style.display = 'inline-block';
	finishbutton.style.cursor = 'pointer';
	finishbutton.style.fontSize = '1em';
	finishbutton.style.fontWeight = 'bold';
	finishbutton.style.backgroundColor = 'white';
	finishbutton.style.width = '6em';
	finishbutton.style.height = '3em';
	finishbutton.style.border = '2px solid';
	finishbutton.style.margin = '4px';
	finishbutton.onclick = addtocart; /*Falta alterar*/
	div.appendChild(finishbutton);
	var cancelbutton = document.createElement('button');
	cancelbutton.innerHTML = 'Cancelar';
	cancelbutton.style.display = 'inline-block';
	cancelbutton.style.cursor = 'pointer';
	cancelbutton.style.fontSize = '1em';
	cancelbutton.style.fontWeight = 'bold';
	cancelbutton.style.backgroundColor = 'white';
	cancelbutton.style.width = '6em';
	cancelbutton.style.height = '3em';
	cancelbutton.style.border = '2px solid';
	cancelbutton.style.margin = '4px';
	cancelbutton.onclick = closeproduct;
	div.appendChild(cancelbutton);
	
	return div;
}


function openproduct(div, product) {
	toggle_visibility(div);
	document.getElementById(div).appendChild(makeDiv(options[product]));
}

function closeproduct() {
	resetquantity();
	toggle_visibility('addtocart');
	document.getElementById('addtocart').innerHTML="";
}

function openlist() {
	toggle_visibility('list');
	document.getElementById('list').appendChild(makeList(cart));
	document.getElementById('cart').onclick = closelist;
}

function closelist() {
	toggle_visibility('list');
	document.getElementById('list').innerHTML = "Ver Pedido";
	document.getElementById('cart').onclick = openlist;
}

function increasequant(){
	if(quant < 99) quant++;
	updatequantity();
	updatefinalprice();
}

function decreasequant(){
	if(quant > 1) quant--;
	updatequantity();
	updatefinalprice();
}

function updatequantity() {
	document.getElementById("varquantity").textContent = 'Quantidade: ' + quant;
}

function updatefinalprice() {
	var unitaryprice = document.getElementById("unitprice").textContent;
	document.getElementById('finalprice').textContent = 'Preço total: ' + Number(unitaryprice * quant).toFixed(2) + ' €';
}

function resetquantity() {
	quant = 1;
}

function addtocart() {
	addCart(quant, prod);
	closeproduct();
}