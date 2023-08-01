let Numero;
const Kilogram=document.getElementById("Kilogram")
const Gram=document.getElementById("gram")
const Hours=document.getElementById("Hours")
const Mile=document.getElementById("mile")
const celsius=document.getElementById("Celsius")
const fahrenheit=document.getElementById("Fahrenheit")
document.getElementById("convertBtn").onclick = function(){
    if(Kilogram.checked){
        Numero=document.getElementById("EnterNumber").value;
        Numero=Number(Numero);
        Numero= Numero/1000;
        Numero=Numero.toLocaleString("en-US", {style:"unit", unit:"kilogram"})
        
        document.getElementById("KG").value=Numero
    }
    else if(Gram.checked){
        Numero=document.getElementById("EnterNumber").value;
        Numero=Number(Numero);
        Numero= Numero*1000;
        Numero=Numero.toLocaleString("en-US", {style:"unit", unit:"gram"})
        document.getElementById("G").value=Numero
    }
    else if(Hours.checked){
        Numero=document.getElementById("EnterNumber").value;
        Numero=Number(Numero);
        Numero= Math.ceil(Numero/60);
        document.getElementById("Hrs").value=Numero+"hrs"
    }
    else if(Mile.checked){
        Numero=document.getElementById("EnterNumber").value;
        Numero=Number(Numero);
        Numero= Math.ceil(Numero*1.609);
        Numero=Numero.toLocaleString("en-US", {style:"unit", unit:"mile"})
        document.getElementById("M").value=Numero
    }
    else if(celsius.checked){
        Numero=document.getElementById("EnterNumber").value;
        Numero=Number(Numero);
        Numero= Math.ceil((Numero-32)*(5/9));
        Numero=Numero.toLocaleString("en-US", {style:"unit", unit:"celsius"})
        document.getElementById("C").value=Numero
    }
    else if(fahrenheit.checked){
        Numero=document.getElementById("EnterNumber").value;
        Numero=Number(Numero);
        Numero=Math.ceil(Numero*9/5+32);
        Numero=Numero.toLocaleString("en-US", {style:"unit", unit:"fahrenheit"})
        document.getElementById("F").value=Numero
    }
    else Numero=window.alert(`Select to convert!`)
}
