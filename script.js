function entrarInvitacion() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}


// ===============================
// CUENTA REGRESIVA
// ===============================

const fechaBoda = new Date("December 31, 2026 18:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) /
        1000
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);


// ===============================
// COPIAR ALIAS
// ===============================

function copiarAlias() {

    navigator.clipboard.writeText("zani.1995");

    document.getElementById("mensaje-copiado").textContent =
        "✓ Alias copiado correctamente";
}


// ===============================
// CALCULAR TOTAL DE TARJETAS
// ===============================

function calcularTotal() {

    const personas =
        Number(document.getElementById("personas").value);

    const total = personas * 45000;

    document.getElementById("totalPagar").textContent =
        "$" + total.toLocaleString("es-AR");
}


// Actualizar el total cuando cambia la cantidad
document.addEventListener("DOMContentLoaded", function () {

    const selector =
        document.getElementById("personas");

    if (selector) {

        calcularTotal();

        selector.addEventListener(
            "change",
            calcularTotal
        );
    }

});


// ===============================
// CONFIRMAR ASISTENCIA POR WHATSAPP
// ===============================

function confirmarAsistencia() {

    const nombre =
        document.getElementById("nombre").value.trim();

    const personas =
        Number(document.getElementById("personas").value);

    if (nombre === "") {

        document.getElementById("mensaje-confirmacion").textContent =
            "Por favor, ingresá tu nombre.";

        return;
    }

    const total = personas * 50000;

    const mensaje =
        "💍 CONFIRMACIÓN DE ASISTENCIA\n\n" +
        "Nombre: " + nombre + "\n" +
        "Personas: " + personas + "\n" +
        "Total de tarjetas: $" +
        total.toLocaleString("es-AR") +
        "\n\nCarlos & Milagros";

    const telefono = "5493764339743";

    const whatsapp =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(whatsapp, "_blank");
}


// ===============================
// NO PODRÉ ASISTIR
// ===============================

function noPuedoAsistir() {

    const nombre =
        document.getElementById("nombre").value.trim();

    if (nombre === "") {

        document.getElementById("mensaje-confirmacion").textContent =
            "Por favor, ingresá tu nombre.";

        return;
    }

    const mensaje =
        "💍 AVISO DE NO ASISTENCIA\n\n" +
        "Nombre: " + nombre +
        "\n\nCarlos & Milagros";

    const telefono = "5493764339743";

    const whatsapp =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(whatsapp, "_blank");
}
