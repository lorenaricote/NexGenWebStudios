// js/main.js

console.log("Sistema de auditoría iniciado...");

// Simulando un error de ejecución que bloquea la carga
try {
    const data = null;
    console.log(data.productos); // Esto lanzará un TypeError
} catch (error) {
    console.error("Error detectado en la Console:", error.message);
}

// Simulación de carga pesada para analizar en Network
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => console.log("Recursos pesados cargados:", data.length));