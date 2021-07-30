/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
var contador;
var tipo;
var precio;
var cantidadUnidades;
var marca;
var capacidad;
var precioSSDBarato;
var cantidadSSDBarato;
var marcaSSDBarato;
var banderaSSDBarato;
var banderaHDDCaro;
var precioHDDCaro;
var capacidadHDDCaro;
var cantidadHDDCaro;
var cantidadTotalHDD;
var mensajeSSDBarato;
var mensajeHDDCaro;
var mensajeHDDTotal;

contador=0;
banderaSSDBarato="es el primero";
banderaHDDCaro="es el primero";
cantidadTotalHDD=0;

while(contador<5)
{
   contador+=1;

   tipo=prompt("Ingrese el tipo de disco: HDD-SSD-SSDM2");
   while(tipo!="HDD" && tipo!="SSD" && tipo!="SSDM2")
   {
      tipo=prompt("Tipo no valido\nIngrese el tipo de disco: HDD-SSD-SSDM2");
   }

   precio=prompt("Ingrese el precio 5000 y 18000:");
   precio=parseInt(precio);
   while(precio<5000 || precio>18000)
   {
      precio=prompt("Precio no valido\nIngrese el precio entre 5000 y 18000:");
      precio=parseInt(precio);
   }

   cantidadUnidades=prompt("Ingrese la cantidad de unidades entre 0 y 50:");
   cantidadUnidades=parseInt(cantidadUnidades);
   while(cantidadUnidades<1 || cantidadUnidades>50)
   {
      cantidadUnidades=prompt("Cantidad no valida.\nIngrese la cantidad de unidades entre 0 y 50:");
      cantidadUnidades=parseInt(cantidadUnidades);
   }

   marca=prompt("Ingrese la marca: Seagate, Western Digital, Kingston");
   while(marca!="Seagate" && marca!="Western Digital" && marca!="Kingston")
   {
      marca=prompt("Marca no valida.\nIngrese la marca: Seagate, Western Digital, Kingston");
   }

   capacidad=prompt("Ingrese la capacidad: 250Gb, 500Gb, 1Tb, 2Tb");
   while(capacidad!="250Gb" && capacidad!="500Gb" && capacidad!="1Tb" && capacidad!="2Tb")
   {
      capacidad=prompt("Capacidad no valida!\nIngrese la capacidad: 250Gb, 500Gb, 1Tb, 2Tb");
   }

   //a
   switch(tipo)
   {
      case "SSD":
         if(banderaSSDBarato=="es el primero")
         {
            banderaSSDBarato="ya no";
            precioSSDBarato=precio;
            cantidadSSDBarato=cantidadUnidades;
            marcaSSDBarato=marca;
         }
         else
         {
            if(precioSSDBarato>precio)
            {
               precioSSDBarato=precio;
               cantidadSSDBarato=cantidadUnidades;
               marcaSSDBarato=marca;
            }
         }
      break;
      case "HDD":
         //c
         cantidadTotalHDD+=cantidadUnidades;
         //b
         if(banderaHDDCaro=="es el primero")
         {
            banderaHDDCaro="ya no";
            precioHDDCaro=precio;
            capacidadHDDCaro=capacidad;
            cantidadHDDCaro=cantidadUnidades;
         }
         else
         {
            if(precioHDDCaro<precio)
            {
               precioHDDCaro=precio;
               capacidadHDDCaro=capacidad;
               cantidadHDDCaro=cantidadUnidades;
            }
         }
      break;
   }
}

mensajeSSDBarato="El disco SSD mas barato es de la marca: "+marcaSSDBarato+" y hay "+cantidadSSDBarato+" unidades disponibles. ";
mensajeHDDCaro="\nEl disco HDD mas caro posee "+capacidadHDDCaro+" de capacidad de almacenamiento y hay "+cantidadHDDCaro+" unidades disponibles. ";
mensajeHDDTotal="\nLa cantidad de HDD total disponibles es de: "+cantidadTotalHDD+" unidades.";

alert(mensajeSSDBarato+mensajeHDDCaro+mensajeHDDTotal);

}
