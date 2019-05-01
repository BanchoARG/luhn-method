function verificarTarjeta() {
    const numeroTarjeta = document.getElementById("numero-tarjeta").value;    
    const verificador = parseInt(numeroTarjeta.slice(-1));
    const arrayNumeros = numeroTarjeta.split("");
    let acumulador = 0;
    arrayNumeros.forEach((valor, indice) => {
        if ((arrayNumeros.length - 1) !== indice) {
            valor = parseInt(valor);
            let aux = (indice % 2) ? valor * 2: valor;
            if (aux > 9)
                aux -= 9;
            acumulador += aux;
        }
    });
    const nuevoTr = `<tr>
        <td>${numeroTarjeta}</td>
        <td>${((acumulador * 9) % 10 === verificador) ? 'Valid' : 'Invalid'}</td>
    </tr>`;
    if(numeroTarjeta.length < 16){
        return alert('El numero ingresado debe contener 16 digitos');
    } else { 
    document.getElementById("result-table").getElementsByTagName("tbody")[0].innerHTML += nuevoTr;
}
 }
