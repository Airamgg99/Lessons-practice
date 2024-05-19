const container= document.getElementsByClassName('container')
const calculatePricesButton = document.getElementById("calc-prices-button");
calculatePricesButton.addEventListener("click", getTotalPrice);
const totalAddDiv= document.createElement( 'div')

//crear elemento
const create = document.getElementById('new-item-create')
create.addEventListener('click', ()=>{
  const productName = document.getElementById('newName').value
  const productPrice = document.getElementById('newPrice').value
  createNewItemRow(productName, productPrice)
})

//borrar elemento
function deleteItem(e) {
e.target.closest('div').parentNode.remove()
}


function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}



//precio total
function getTotalPrice() {
  const unitPrice = document.getElementsByClassName("productUnitPrice");
  const quantity = document.getElementsByClassName("productQTY");
  const totalPrice = document.getElementsByClassName("productTotalPrice");  
  totalAddDiv.innerHTML = '' 
  let totalAdd = 0;
  for (let i = 0; i < unitPrice.length; i++) {
    let priceValue = unitPrice[i].textContent;
    let quantityValue = quantity[i].value;
    let totalPriceValue = totalPrice[i];    
    const calculatedPrice =
         Math.round(Number(priceValue), 2) * Math.round(Number(quantityValue), 2);
    totalPriceValue.innerText = calculatedPrice;
    totalAdd += calculatedPrice;
  }


  totalAddDiv.style.textAlign ='center'
  totalAddDiv.innerHTML = `<h2>Total Price:  ${totalAdd} €</h2>` 
  container[0].appendChild(totalAddDiv)
}

function createNewItemRow(itemName, itemUnitPrice) {
    const newRow = document.createElement('div')
    newRow.className = 'product'

    //container nombre del producto
    const productName = document.createElement('div')
    productName.className = 'divProductName'
    productName.innerHTML =`<span>${itemName}</span>`
    newRow.appendChild(productName)

    //container precio del producto
    const productPrice = document.createElement('div')
    productPrice.textContent = `${itemUnitPrice}`
    productPrice.className = 'productUnitPrice'
    newRow.appendChild(productPrice)

    //cantidad del producto
    const divLabel = document.createElement('div')
    const productLabel = document.createElement('label')
    productLabel.innerHTML = 'QTY'
    divLabel.appendChild(productLabel)
    
    const productInput = document.createElement('input')
    productInput.className = 'productQTY'
    divLabel.appendChild(productInput)
    newRow.appendChild(divLabel)

    const  productTotalPrice = document.createElement('div')
    productTotalPrice.innerHTML = `<span>0</span>€`
    productTotalPrice.className = 'productTotalPrice'
    newRow.appendChild(productTotalPrice)

    const buttonDiv = document.createElement('div')
    const productButton = document.createElement('button')
    productButton.type = 'reset'
    productButton.innerText = 'Delete' 
    productButton.className = 'btn-delete'
    buttonDiv.appendChild(productButton)
    newRow.appendChild(buttonDiv)
    container[0].appendChild(newRow)
}

window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(let i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
