function soma(){

    let n1 = document.getElementById("d1");
    let n2 = document.getElementById("d2");
    let n3 = document.getElementById("d3");

    let v1 = n1.value;
    let v2 = n2.value;

    let res = parseInt(v1) + parseInt(v2);

    n3.value = res;

}

function sub(){
    let n1 = document.getElementById("d1");
    let n2 = document.getElementById("d2");
    let n3 = document.getElementById("d3");


    let v1 = n1.value;
    let v2 = n2.value;

    let res = parseInt(v1) - parseInt(v2);

    n3.value = res;

}

function Mult(){
    let n1 = document.getElementById("d1");
    let n2 = document.getElementById("d2");
    let n3 = document.getElementById("d3");


    let v1 = n1.value;
    let v2 = n2.value;

    let res = parseInt(v1) * parseInt(v2);

    n3.value = res;

}

function Div(){
    let n1 = document.getElementById("d1");
    let n2 = document.getElementById("d2");
    let n3 = document.getElementById("d3");


    let v1 = n1.value;
    let v2 = n2.value;

    let res = parseInt(v1) / parseInt(v2);

    n3.value = res;

}
