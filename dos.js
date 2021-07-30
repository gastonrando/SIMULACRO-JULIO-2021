/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  var tipo;
  var cantidadBolsas;
  var precioBolsa;
  var respuesta;
  var totalBruto;
  var sumaCantidadBolsas;
  var totalNeto;
  var descuento;
  var importeDescuento;
  var mensaje;
  var cantidadBolsasYerba;
  var cantidadBolsasAzucar;
  var cantidadBolsasCafe;
  var banderaCompra;
  var tipoMinimo;
  var totalBrutoMinimo;
  var totalComparacionMinimo;

  respuesta=true;
  sumaCantidadBolsas=0;
  totalBruto=0;
  descuento=0;
  totalNeto=0;
  importeDescuento=0;
  cantidadBolsasYerba=0;
  cantidadBolsasAzucar=0;
  cantidadBolsasCafe=0;
  banderaCompra="es el primero";

  while(respuesta==true) 
  {
    tipo=prompt("Ingrese un tipo de producto (Yerba, Azúcar, Café)");
    while(tipo!="Yerba" && tipo!="Azúcar" && tipo!="Café")
    {
      tipo=prompt('Producto no valido\nIngrese un tipo de producto (Yerba, Azúcar, Café)');
    }

    cantidadBolsas=prompt("Ingrese la cantidad de bolsas del producto:");
    cantidadBolsas=parseInt(cantidadBolsas);
    while(cantidadBolsas<1)
    {
      cantidadBolsas=prompt("Cantidad no valida! Tiene que ser mayor a 0.\nIngrese la cantidad de bolsas del producto:");
      cantidadBolsas=parseInt(cantidadBolsas);
    }

    precioBolsa=prompt("ingrese el precio de la bolsa:");
    precioBolsa=parseInt(precioBolsa);
    while(precioBolsa<1)
    {
      precioBolsa=prompt("Cantidad no valida! Tiene que ser mayor a 0.\nIngrese la cantidad de bolsas del producto:");
      precioBolsa=parseInt(precioBolsa);
    }

    //a
    totalBruto+=(cantidadBolsas+precioBolsa);
    //b
    sumaCantidadBolsas+=cantidadBolsas;
    //c
    switch(tipo)
    {
      case "Yerba":
        cantidadBolsasYerba+=cantidadBolsas;
      break;
      case "Azúcar":
        cantidadBolsasAzucar+=cantidadBolsas;
      break;
      default:
        cantidadBolsasCafe+=cantidadBolsas;
    }
    //d por si estas mirando, entiendo que es solo esto...suerte!
    totalComparacionMinimo=precioBolsa*cantidadBolsas;
    if(banderaCompra=="es el primero")
    {
      banderaCompra="ya no";
      tipoMinimo=tipo;
      totalBrutoMinimo=totalComparacionMinimo;
    }
    else
    {
      if(totalBrutoMinimo>totalComparacionMinimo)
      {
        tipoMinimo=tipo;
        totalBrutoMinimo=totalComparacionMinimo;
      }
    }
    respuesta=confirm("Desea ingresar mas productos?");
  } 

mensaje="El precio total bruto sin descuento es de: "+totalBruto;

if(sumaCantidadBolsas>5)
{
  if(sumaCantidadBolsas>10)
  {
    descuento=15;
  }
  else
  {
    descuento=10;
  }
  importeDescuento=totalBruto*descuento/100;
  totalNeto=totalBruto-importeDescuento;
  mensaje+="\nEl importe a pagar con descuento es de: $ "+totalNeto;
}

if(cantidadBolsasAzucar>cantidadBolsasCafe && cantidadBolsasAzucar> cantidadBolsasYerba)
{
  mensaje+="\nEl tipo con mas cantidad de bolsas es Azucar";
}
else
{
  if(cantidadBolsasCafe>cantidadBolsasYerba)
  {
    mensaje+="\nEl tipo con mas cantidad de bolsas es Cafe";
  }
  else
  {
    mensaje+="\nEl tipo con mas cantidad de bolsas es Yerba";
  }
}

mensaje+="\nEl tipo de la compra mas barata es: "+tipoMinimo;


alert(mensaje);

}
