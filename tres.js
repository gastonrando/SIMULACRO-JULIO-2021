/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	var edad;
	var nombre;
	var genero;
	var vacuna;
	var temperatura;
	var respuesta;
	var banderatemperatura;
	var nombreMayorTemperatura;
	var mayorTemperatura;
	var vacunaMayorTemperatura;
	var contadorMujeresSputnik;
	var contadorNB;
	var contadorTemperaturaMayor38;
	var promedioEdad;
	var contadorHombresSputnik;
	var sumaEdadHombreSputnik;


	respuesta=true;
	banderatemperatura="es el primero";
	contadorMujeresSputnik=0;
	contadorNB=0;
	contadorTemperaturaMayor38=0;
	contadorHombresSputnik=0;

	while(respuesta==true)
	{
		nombre=prompt("Ingrese el nombre:");
		edad=prompt("ingrese la edad:");
		edad=parseInt(edad);
		
		genero=prompt("Ingrese el genero “F”, “M”, “NB”");
		while(genero!="F" && genero!="M" && genero!="NB")
		{
			genero=prompt("Genero no valido!\nIngrese el genero “F”, “M”, “NB”");
		}
		
		vacuna=prompt("Ingrese la vacuna: “SputnikV”, “AstraZeneca”, “Otra”");
		while(vacuna!="SputnikV" && vacuna!="AstraZeneca" && vacuna!="Otra")
		{
			vacuna=prompt("Vacuna no valida!\nIngrese la vacuna: “SputnikV”, “AstraZeneca”, “Otra”");
		}
		temperatura=prompt("Ingrese la temperatura corporal de la primera noche:");
		temperatura=parseInt(temperatura);
		while(temperatura<34 || temperatura>40)
		{
			temperatura=prompt("Temperatura no valida.\nIngrese una temperatura entre 34° y 40°:");
			temperatura=parseInt(temperatura);
		}
		
		//a
		if(banderatemperatura=="es el primero")
		{
			banderatemperatura="ya no";
			mayorTemperatura=temperatura;
			nombreMayorTemperatura=nombre;
			vacunaMayorTemperatura=vacuna;
		}
		else
		{
			if(mayorTemperatura<temperatura)
			{
				mayorTemperatura=temperatura;
				nombreMayorTemperatura=nombre;
				vacunaMayorTemperatura=vacuna;
			}
		}
		//b
		if(vacuna=="SputnikV")
		{
			if(genero=="F")
			{
				contadorMujeresSputnik+=1;
			}
			else
			{
				if(genero=="M")
				{
					if(temperatura<38)
					{
						sumaEdadHombreSputnik+=edad;
						contadorHombresSputnik+=1;
					}
				}
			}
		}
		else
		{
			//c
			if(genero=="NB")
			{
				contadorNB+=1;
			}
		}
		//d
		if(vacuna=="AstraZeneca")
		{
			if(temperatura>38)
			{
				contadorTemperaturaMayor38+=1;
			}
		}


		respuesta=confirm("Desea ingresar otra persona?");
	}

	promedioEdad=sumaEdadHombreSputnik/contadorHombresSputnik;
	mensaje="La persona con mayor temperatura fue: "+nombreMayorTemperatura;
	mensaje+="\n"+contadorMujeresSputnik+" mujeres recibieron la vacuna SputnikV";
	mensaje+="\n"+contadorNB+" personas de genero NB recibieron Aztrazeneca u Otra."
	mensaje+="\n"+contadorTemperaturaMayor38+" personas que se aplicaron Aztrazeneca, presentaron mas de 38°";
	mensaje+="\nLa edad promedio de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos) "+promedioEdad;
}
