let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');

let dollarBuy = document.getElementById('dollarBuy')
let poundBuy = document.getElementById('poundBuy')


dollar.onkeyup = function()
{
    pound.value = dollar.value * 47.71;
}

pound.onkeyup = function()
{
    dollar.value = pound.value / 47.71;
}

dollarBuy.onkeyup = function()
{
    poundBuy.value = dollarBuy.value * 48;
}

poundBuy.onkeyup = function()
{
    dollarBuy.value = poundBuy.value / 47.71;
}