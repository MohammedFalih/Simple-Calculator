//-------------->   GETTING VALUES 
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var res = document.getElementById("result");

//      CALCULATING THE VALUES 

document.getElementById("add").addEventListener("click", function()
{
    res.value = parseFloat(num1.value) + parseFloat(num2.value);
});

document.getElementById("sub").addEventListener("click", function() {
    res.value = parseFloat(num1.value) - parseFloat(num2.value);
});

document.getElementById("mul").addEventListener("click", function(){
    res.value = parseFloat(num1.value) * parseFloat(num2.value);
});

document.getElementById("div").addEventListener("click", function(){
    res.value = parseFloat(num1.value) / parseFloat(num2.value);
});k