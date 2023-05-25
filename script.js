var reservas = {};

    // Función para verificar si una fecha está disponible
    function verificarDisponibilidad(fecha) {
      // Verificar si la fecha está en el objeto de reservas
      if (reservas.hasOwnProperty(fecha)) {
        return false; // Fecha ocupada
      } else {
        return true; // Fecha disponible
      }
    }

    // Función para realizar una reserva
    function hacerReserva() {
      var nombre = document.getElementById('nombre').value;
      var fecha = document.getElementById('fecha').value;

      // Verificar disponibilidad de la fecha
      if (verificarDisponibilidad(fecha)) {
        reservas[fecha] = nombre; // Registrar la reserva
        mostrarMensaje('Reserva realizada:'+ fecha, 'disponible');
      } else {
        mostrarMensaje('La fecha seleccionada no está disponible.', 'no-disponible');
      }
    }

    // Función para mostrar mensajes en el documento
    function mostrarMensaje(mensaje, clase) {
      var mensajeElemento = document.createElement('p');
      mensajeElemento.textContent = mensaje;
      mensajeElemento.className = clase;
      document.body.appendChild(mensajeElemento);
    }

  