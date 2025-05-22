let libros = [];
let carrito = [];
let total = 0;

function agregarLibro() {
  const titulo = document.getElementById("titulo").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);

  if (titulo && !isNaN(precio) && precio > 0) {
    const libro = { titulo, precio };
    libros.push(libro);
    mostrarLibros();
    document.getElementById("titulo").value = '';
    document.getElementById("precio").value = '';
  }
}

function mostrarLibros() {
  const lista = document.getElementById("lista-libros");
  lista.innerHTML = '';

  libros.forEach((libro, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${libro.titulo}</strong><br>
      Precio: $${libro.precio.toFixed(2)}<br>
      <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
    `;
    lista.appendChild(li);
  });
}

function agregarAlCarrito(indice) {
  const libro = libros[indice];
  carrito.push(libro);
  total += libro.precio;
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = '';

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.titulo} - $${item.precio.toFixed(2)}
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

function eliminarDelCarrito(indice) {
  total -= carrito[indice].precio;
  carrito.splice(indice, 1);
  mostrarCarrito();
}
