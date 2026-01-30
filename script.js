let totalBill = 0;

function addOrder() {
    const orderNameInput = document.getElementById("orderName");
    const orderPriceInput = document.getElementById("orderPrice");

    const orderName = orderNameInput.value.trim();
    const orderPrice = parseFloat(orderPriceInput.value);

    if (orderName === "" || isNaN(orderPrice) || orderPrice <= 0) {
        alert("Please enter valid order name and price");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${orderName} - ₹${orderPrice.toFixed(2)}</span>
        <button class="delete-btn" onclick="deleteOrder(this, ${orderPrice})">Delete</button>
    `;

    document.getElementById("orderList").appendChild(li);

    // Update total bill
    totalBill += orderPrice;
    updateTotalBill();

    orderNameInput.value = "";
    orderPriceInput.value = "";
}

function deleteOrder(button, price) {
    button.parentElement.remove();
    totalBill -= price;
    updateTotalBill();
}

function updateTotalBill() {
    document.getElementById("totalBill").innerText = totalBill.toFixed(2);
}
