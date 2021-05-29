let money = 0;

function buttonClick(msg){
    const result = document.getElementById(msg);
    result.style.display = 'block';
}

function addMoney(added){
    money += added
    document.getElementById('moneyarea').textContent = money;
}
