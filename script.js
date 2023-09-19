document.getElementById('calculate').addEventListener('click',function (){
const value = document.getElementById ('value').value
const fee = (document.getElementById ('fee').value)
const result = (value*1.1)/fee
document.getElementById('total').innerHTML = ("R$ " + result.toFixed(2))
console.log (result)
});