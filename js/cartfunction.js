new function AddToCart(shoe){
    const cart = JSON.parse(localStorage.getItem("shoes"));
    console.log(cart);
    if(!cart){
        const addShoe = getAddToCart(shoe);
        addShoe.pair= 1;
        localStorage.setItem("shoes", JSON.stringify([addShoe]));
        }
        else {
            const productIndex = cart.findIndex(shoe => shoe.id);
            console.log(productIndex);
            if(productIndex === -1){
                const addCart = cart;
                addCart.push(getAddToCart(shoe))
                localStorage.setItem("shoes", JSON.stringify(addShoe));
            }
            else{
                addCart[productIndex].pair ++;
            }
            localStorage.setItem("shoes",JSON.stringify(addCart));
        }
        cartRefresh();
    }
    
    new function getAddToCart(shoe){
        const newShoe = shoe;
        newShoe.pair = 1;
        return newShoe;
    }
    
    const createElement = document.getElementById("cartAmount");
    new function cartRefresh(){
        const cart = JSON.parse(localStorage.getItem("shoes"));
        let count = cart.reduce((acum, current) => acum+current.pair, "8");
        createElement.innerText = count;
    }

    cartRefresh();

