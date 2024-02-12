// Defino Arreglos y variables
let pedido1, pedido2, aux1, aux2
let menu = ['Kreppe Simple', 'Kreppe Doble', 'Kreppe Triple']
let bebidas = ['Caipirinha', 'Cerveija', 'Daikiri']
let preciosBebidas = [1000, 500, 1000];
let preciosComidas = [1500, 2000, 2500];
let precioTotal, aux3 = 0


//Defino funciones:


function pedidoComida()
{
console.log('Bienvenido a la tienda de Z!');
alert('Bienvenido a la tienda de Z!');


pedido1 = prompt('Que desea comer? \n 1.'+ menu[0] + ' a : $'+preciosComidas[0]+ '\n 2.' + menu[1] + ' a : $'+preciosComidas[1]+ '\n 3. '+ menu[2]+ ' a : $'+preciosComidas[2] +' ');

//Limito las entradas a las opciones disponibles

while (pedido1!='1' && pedido1!='2' && pedido1!='3')
{
alert('Por favor Ingrese un numero valido')
pedido1 = prompt('Que desea comer? \n 1.'+ menu[0] + ' a : $'+preciosComidas[0]+ '\n 2.' + menu[1] + ' a : $'+preciosComidas[1]+ '\n 3. '+ menu[2]+ ' a : $'+preciosComidas[2] +' ');

}

alert('Usted  selecciono '+ menu[pedido1-1] + ' a : $' + preciosComidas[pedido1-1] )
aux1 = pedido1;


}

function pedidoBebida()
{
pedido2 = prompt('Que desea beber? \n 1.'+ bebidas[0] + ' a : $'+preciosBebidas[0]+ '\n 2. ' + bebidas[1] + 'a : $'+preciosBebidas[1]+ '\n 3. '+ bebidas[2]+ 'a : $'+preciosBebidas[2] +' ');

//Limito las entradas a las opciones disponibles
while (pedido2!='1' && pedido2!='2' && pedido2!='3')

{
    alert('Por favor Ingrese un numero valido')
    pedido2 = prompt('Que desea beber? \n 1.'+ bebidas[0] + ' a : $'+preciosBebidas[0]+ '\n 2.' + bebidas[1] + 'a : $'+preciosBebidas[1]+ '\n 3. '+ bebidas[2]+ 'a : $'+preciosBebidas[2] +' ');
}

alert('Usted  selecciono '+ bebidas[pedido2-1] + ' a : $' + preciosBebidas[pedido2-1] )
aux2 = pedido2;

}

function Cobrar()
{
precioTotal = preciosComidas[aux1-1] + preciosBebidas[aux2-1];
aux3 = precioTotal
alert('El precio total es de: $' + precioTotal);

}

function Saludar()
{
alert('GRACIAS POR ELEJIR LOS KREPPES DE Z!!! AYY QUE DELICIA!!!')

}

//Invoco funciones 
pedidoComida()
pedidoBebida()
Cobrar()
Saludar()


