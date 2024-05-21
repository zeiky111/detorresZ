function addition(){
    let x=0;
    x= document.getElementById("input1").value;
    let y=0;
    y= document.getElementById("input2").value;
    ans1= Number(x)+Number(y);
    document.getElementById("sum").value=ans1;
}
function subtraction(){
    let n=0;
    n= document.getElementById("input3").value;
    let a=0;
    a= document.getElementById("input4").value;
    ans2= Number(n)-Number(a);
    document.getElementById("diff").value=ans2;
}
function multiplication(){
    let c=0;
    c= document.getElementById("input5").value;
    let d=0;
    d= document.getElementById("input6").value;
    ans3= Number(c)*Number(d);
    document.getElementById("product").value=ans3;
}
function division(){
    let f=0;
    f= document.getElementById("input7").value;
    let g=0;
    g= document.getElementById("input8").value;
    ans4= Number(f)/Number(g);
    document.getElementById("quotient").value=ans4;
}