function converter() {
    let fah = Number( document.getElementById ("fah").value);

    let tcelsius = (fah - 32) * 5 / 9;

    
    document.getElementById("julia").innerHTML = "<p>temperatura de "+tcelsius+"</p>"
    
}