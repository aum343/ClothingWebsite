//This js file is for the home page and cart
const card1=document.getElementById('card1');
const card2=document.getElementById('card2');
const card3=document.getElementById('card3');
const card4=document.getElementById('card4');
const card5=document.getElementById('card5');
const card6=document.getElementById('card6');
const card7=document.getElementById('card7');
const card8=document.getElementById('card8');
let isFlipped = false;

card1.addEventListener('click', () => {
    if (!isFlipped) {
        card1.style.transform = 'rotateY(180deg)';
    } else {
        card1.style.transform = 'rotateY(0deg)';
    }
    isFlipped = !isFlipped;
});

card2.addEventListener('click', () => {
    if (!isFlipped) {
        card2.style.transform = 'rotateY(180deg)';
    } else {
        card2.style.transform = 'rotateY(0deg)';
    }
    isFlipped = !isFlipped;
});

card3.addEventListener('click', () => {
    if (!isFlipped) {
        card3.style.transform = 'rotateY(180deg)';
    } else {
        card3.style.transform = 'rotateY(0deg)';
    }
    isFlipped = !isFlipped;
});

card4.addEventListener('click', () => {
    if (!isFlipped) {
        card4.style.transform = 'rotateY(180deg)';
    } else {
        card4.style.transform = 'rotateY(0deg)';
    }
    isFlipped = !isFlipped;
});

card5.addEventListener('click', () => {
    if (!isFlipped) {
        card5.style.transform = 'rotateY(180deg)';
    } else {
        card5.style.transform = 'rotateY(0deg)';
    }
    isFlipped = !isFlipped;
});

card6.addEventListener('click', () => {
    if (!isFlipped) {
        card6.style.transform = 'rotateY(180deg)';
    } else {
        card6.style.transform = 'rotateY(0deg)';
    }
    isFlipped = !isFlipped;
});

card7.addEventListener('click', () => {
    if (!isFlipped) {
        card7.style.transform = 'rotateY(180deg)';
    } else {
        card7.style.transform = 'rotateY(0deg)';
    }
    isFlipped = !isFlipped;
});

card8.addEventListener('click', () => {
    if (!isFlipped) {
        card8.style.transform = 'rotateY(180deg)';
    } else {
        card8.style.transform = 'rotateY(0deg)';
    }
    isFlipped = !isFlipped;
});
//Cart

$(document).ready(() => {
    let totalAmount = 0;
    
    $(".addToCart").on("click", (event) => {
        console.log("add button is clicked");
        var price = $(event.currentTarget).attr("price");
        var image = $(event.currentTarget).attr("image");
        const tax=0.14957;
        // Convert the price to a number using parseFloat
        var numPrice = parseFloat(price);

        //console.log(`The price of this item is ${numericPrice}`);

        totalAmount =(totalAmount+ numPrice)+(numPrice*tax);
        updateTotalAmountDisplay();
        var cartItem = `<li><img class="cart-image" src="${image}" alt="Product Image"><span class="price">${numPrice}</span><span><button class="removeFromCart">Remove</button></li>`;
        $("#cart-items").append(cartItem);
    });

    $(document).on("click", ".removeFromCart", function () {
        const tax=0.14957;
        var removeItemPrice = $(this).closest("li").find(".price").text();

        totalAmount =totalAmount- parseFloat(removeItemPrice)-parseFloat(removeItemPrice*tax);
        updateTotalAmountDisplay();

        $(this).closest("li").remove();
    });

    function updateTotalAmountDisplay() {
        $("#total-amount").text("Total Amount: $" + totalAmount.toFixed(2));
    }
});

