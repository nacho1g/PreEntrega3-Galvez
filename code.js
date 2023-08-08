const shopContent = document.getElementById("shopContent");
let shoes = [
    {
        id: 1,
        mark: "Nike",
        price: 120,
        size: [7,8,9,10],
        color: ["green", "blue", "pink"],
        img: "./assets/nike.webp",
    },
    {  
        id: 2,
        mark: "Adidas",
        price: 99,
        size: [7,8,9,10],
        color: ["orange", "black", "white"],
        img: "./assets/adidas.png",
    },
    {
        id: 3,
        mark: "Puma",
        price: 99,
        size: [7,8,9,10],
        color: ["black", "white", "grey"],
        img: "./assets/puma.png",
    },
];

let cart = [];

shoes.forEach((shoe) => {
    let content = document.createElement("div");
    content.innerHTML = `
        <img src="${shoe.img}">
        <h3>${shoe.mark}</h3>
        <p>$${shoe.price}</p>
        <select name="size" id="sizes">
            <option value ="${shoe.size[0]}">${shoe.size[0]}</option>
            <option value ="${shoe.size[1]}">${shoe.size[1]}</option>
            <option value ="${shoe.size[2]}">${shoe.size[2]}</option>
            <option value ="${shoe.size[3]}">${shoe.size[3]}</option>
        </select>
        <select name="color" id="colors">
            <option value ="${shoe.color[0]}">${shoe.color[0]}</option>
            <option value ="${shoe.color[1]}">${shoe.color[1]}</option>
            <option value ="${shoe.color[2]}">${shoe.color[2]}</option>
        </select>
        `;
    
    shopContent.append(content);
        
    let buy = document.createElement("button");
    buy.innerText = "Add to cart";
    content.append(buy);
        
    const size = document.querySelector("#sizes");
    size.addEventListener("change", () =>{
        let sizeValue =size.value
        console.log(sizeValue);
    })

    const color = document.querySelector("#colors");
    color.addEventListener("change", () =>{
        let colorValue =color.value
        console.log(colorValue);
    })

    buy.addEventListener("click", () => {
        cart.push({
            id : shoe.id,
            img : shoe.img,
            mark : shoe.mark,
            price : shoe.price,
            size : shoe.size,
            color : shoe.color,
        });
        console.log(cart);
    });
    
    
    });
    
