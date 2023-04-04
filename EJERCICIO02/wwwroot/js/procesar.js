var cant = document.getElementById("cantidad");
var prec = document.getElementById("precio");

function getProcesar()
{
    var Importe_Compra = (parseInt(cant.value) * parseFloat(prec.value)).toFixed(2);
    var Descuento = (Importe_Compra * 0.07).toFixed(2);
    var Importe_Pagar = Importe_Compra - Descuento;
    var cant_choco =  3 * parseInt(cant.value);

    document.getElementById("resultado").value = "Importe de compra: " + Importe_Compra + "\n" +
                                                 "Importe de descuento: " + Descuento + "\n" +
                                                 "Importe a pagar: " + Importe_Pagar + "\n" +
                                                 "Chocolates obsequiados: " + cant_choco;
    return false;
}