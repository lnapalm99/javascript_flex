//Saludo
function Saludar()
{
alert('Bienvenido a la Tienda de Z! Haga click en los botones para llenar el carrito')

}

//Defino arreglo de productos

let productos = [{id: 'p1',  nombre: "Kreppe Simple", precio : 1300 },
{id: 'p2',  nombre: "Kreppe Doble", precio : 1800 },
{id: 'p3',  nombre: "Kreppe Triple XL", precio : 3000 }
]

let bebidas = [{id: 'b1',  nombre: "Caipirinha", precio : 1000 },
{id: 'b2',  nombre: "Daikiri", precio : 800 },
{id: 'b3',  nombre: "Zuko di laranja", precio : 300 }
]






//Recorrro los objetos del array y plasmo en el html

for (producto of productos){

let contenedorProductos = document.createElement('div')

contenedorProductos.innerHTML = `

    <p> ID:${producto.id}<p/>
    <p>Producto: ${producto.nombre}</p>
    <p>precio:${producto.precio}</p> 
    <button id="${producto.id}"> Comprar Comida!</button>

`
document.body.appendChild(contenedorProductos)

    
}




for (bebida of bebidas){

    let contenedorBebidas = document.createElement('div')

    contenedorBebidas.innerHTML = `
    
    <p> ID:${bebida.id}<p/>
    <p>Producto: ${bebida.nombre}</p>
    <p>precio:${bebida.precio}</p>  
    <button id="${bebida.id}"> Comprar Bebida!</button>
`
    document.body.appendChild(contenedorBebidas)
}





//Obtengo los elementos segun id, escucho los eventos asociados a cada boton y cargo en el contenedor del CARRITO
let p1 = document.getElementById('p1')

p1.addEventListener('click', function(){

    let cn1 = document.createElement('div')
    cn1.innerHTML = "Kreppe simple"
    miCarrito.appendChild(cn1)
    }


)

let p2 = document.getElementById('p2')

p2.addEventListener('click', function(){

    let cn2 = document.createElement('div')
    cn2.innerHTML = "Kreppe doble"
    miCarrito.appendChild(cn2)
    
    }


)


let p3 = document.getElementById('p3')

p3.addEventListener('click', function(){

    let cn3 = document.createElement('div')
    cn3.innerHTML = "Kreppe triple"
    miCarrito.appendChild(cn3)
    
    }


)


let p4 = document.getElementById('b1')

p4.addEventListener('click', function(){

    let cn4 = document.createElement('div')
    cn4.innerHTML = "Caipirinha"
   miCarrito.appendChild(cn4)
    
    }


)

let p5 = document.getElementById('b2')

p5.addEventListener('click', function(){

    let cn5 = document.createElement('div')
    cn5.innerHTML = "Daikiri"
    miCarrito.appendChild(cn5)
    
    }


)


let p6 = document.getElementById('b3')

p6.addEventListener('click', function(){

    let cn6 = document.createElement('div')
    cn6.innerHTML = "Zuko di laranja"
   miCarrito.appendChild(cn6)
    
    }


)


let miCarrito = document.getElementById('carrito')


function limpiarContenedor() {
    // Obtén una referencia al contenedor
    var contenedor = document.getElementById("carrito");
    
    // Limpia el contenido del contenedor
    contenedor.innerHTML = "";

}

Saludar()
