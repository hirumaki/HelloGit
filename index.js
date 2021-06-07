let money = 0;

const purchaseProduct = (productName) =>{
    console.log(productName);
    const product = document.getElementById(productName);
    console.log(product);
    const price = product.getElementsByClassName('price')[0].attributes[1].value;
    money -= price 
    document.getElementById('moneyarea').textContent = money;
    document.getElementById('purchased').innerHTML += `<p>${productName}を買いました。</p>`;
    resetButtons();
}


const resetButtons = () => {
    const products = document.getElementsByClassName('product');
    for(let i =0;i < products.length ; i++){
        const product = products[i];
        const price = product.getElementsByClassName('price')[0].attributes[1].value;
        if(money >= price){
            product.getElementsByClassName('product-button')[0].removeAttribute('disabled');
        }
        else{
            product.getElementsByClassName('product-button')[0].setAttribute('disabled',true);
        }
    }
}

const addMoney = (added)=>{
    money += added
    document.getElementById('moneyarea').textContent = money;
    resetButtons();
}

resetButtons();
