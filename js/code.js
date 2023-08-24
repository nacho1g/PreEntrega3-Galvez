const shopContent = document.getElementById("shopContent");
const productContent = document.getElementById("productContent");

let cart = [];


function createProducts(shoes){
shoes.forEach((shoe) => {
    const content = document.createElement("div");
    content.innerHTML = `
    <a href="./pages/product${shoe.id}.html"><img src="${shoe.img}"></a>
    <h3>${shoe.mark}</h3>
    <p>$${shoe.price}</p>
    `;

    
        shopContent.append(content);

});
}   
createProducts(shoes);

const button = document.getElementsByTagName("button");
console.log(button);

let arr = Array.from(button);
console.log(arr);
arr.forEach((element) => {
    element.addEventListener("click", (e) => {
        for (let key in shoes[element.id]){
            
            
        }
    });
});
