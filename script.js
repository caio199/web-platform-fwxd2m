function addToCart() {
  var quantityInput = document.getElementById("quantity");
  var descriptionInput = document.getElementById("description");
  var unitPriceInput = document.getElementById("unit-price");
  
  var quantity = parseInt(quantityInput.value);
  var description = descriptionInput.value;
  var unitPrice = parseFloat(unitPriceInput.value);
  
  var total = quantity * unitPrice;
  
  var table = document.getElementById("cart-items");
  var newRow = table.insertRow();
  var quantityCell = newRow.insertCell(0);
  var descriptionCell = newRow.insertCell(1);
  var unitPriceCell = newRow.insertCell(2);
  var totalCell = newRow.insertCell(3);
  
  quantityCell.innerHTML = quantity;
  descriptionCell.innerHTML = description;
  unitPriceCell.innerHTML = "R$ " + unitPrice.toFixed(2);
  totalCell.innerHTML = "R$ " + total.toFixed(2);
  
  updateCartTotal(total);
  
  // Limpa os campos de entrada
  quantityInput.value = "";
  descriptionInput.value = "";
  unitPriceInput.value = "";
}

function updateCartTotal(amount) {
  var cartTotalCell = document.getElementById("cart-total");
  var cartTotal = parseFloat(cartTotalCell.innerHTML.substring(2));
  cartTotal += amount;
  cartTotalCell.innerHTML = "R$ " + cartTotal.toFixed(2);
}


