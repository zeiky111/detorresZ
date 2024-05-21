function add1(p1,p2){
    return Number(p1) + Number(p2);
}
    function addition(){
    let num1= document.getElementById("add1").value;
    let num2= document.getElementById("add2").value;
    let result = add1(num1,num2);
    document.getElementById("sum").value= result;      
    }

function sub1(p1,p2){
        return Number(p1) - Number(p2);
    }
        function subtraction(){
        let num3= document.getElementById("sub3").value;
        let num4= document.getElementById("sub4").value;
        let result = sub1(num3,num4);
        document.getElementById("diff").value= result;      
        }
function mul1(p1,p2){
            return Number(p1) * Number(p2);
        }
            function multiplication(){
            let num5= document.getElementById("mul5").value;
            let num6= document.getElementById("mul6").value;
            let result = mul1(num5,num6);
            document.getElementById("product").value= result;      
            }   
function div1(p1,p2){
    return Number(p1) / Number(p2);
}
                function division(){
                let num7= document.getElementById("div7").value;
                let num8= document.getElementById("div8").value;
                let result = div1(num7,num8);
                document.getElementById("quotient").value= result;      
                }






 