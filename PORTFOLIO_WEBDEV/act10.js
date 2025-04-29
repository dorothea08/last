function calculate(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
 
        if(isNaN(num1) || isNaN(num2)){
            document.getElementById("sum").innerHTML = "Please enter valid numbers.";
            return;
        }
 
        const sum = num1 + num2;
        document.getElementById("sum").innerHTML = "The sum is: " + sum;
       
        const difference = num1 - num2;
        document.getElementById("difference").innerHTML = "The difference is: " + difference;
 
        const product = num1 * num2;
        document.getElementById("product").innerHTML = "The product is: " + product;
 
        const quotient = num1 / num2;
        document.getElementById("quotient").innerHTML = "The quotient is: " + quotient;
 
        const remainder = num1 % num2;
        document.getElementById("remainder").innerHTML = "The remainder is: " + remainder;
 
}
 
function clearFields(){
    document.getElementById("sum").innerHTML = " ";
    document.getElementById("difference").innerHTML = " ";
    document.getElementById("product").innerHTML = " ";
    document.getElementById("quotient").innerHTML = " ";
    document.getElementById("remainder").innerHTML = " ";
 
}