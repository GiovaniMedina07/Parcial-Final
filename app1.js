const equipos = [
    { nombre: 'Equipo 1', deporte: 'Fútbol', entrenador: 'Entrenador 1', jugadores: 15 },
    { nombre: 'Equipo 2', deporte: 'Baloncesto', entrenador: 'Entrenador 2', jugadores: 10 },
    { nombre: 'Equipo 3', deporte: 'Voleibol', entrenador: 'Entrenador 3', jugadores: 12 }
  ];
  
  // Función para mostrar la lista de equipos
  function mostrarEquipos() {
    const teamsList = document.getElementById('teams');
    teamsList.innerHTML = '';
  
    equipos.forEach((equipo, index) => {
      const teamItem = document.createElement('li');
      teamItem.textContent = equipo.nombre;
      teamItem.setAttribute('data-index', index); // Añadir un atributo para identificar el equipo
      teamItem.addEventListener('click', mostrarDetallesEquipo);
      teamsList.appendChild(teamItem);
    });
  }
  
  // Función para mostrar los detalles de un equipo seleccionado
  function mostrarDetallesEquipo(event) {
    const index = event.target.getAttribute('data-index');
    const detallesEquipo = document.getElementById('details');
    const equipo = equipos[index];
  
    detallesEquipo.innerHTML = `
      <h3>${equipo.nombre}</h3>
      <p><strong>Deporte:</strong> ${equipo.deporte}</p>
      <p><strong>Entrenador:</strong> ${equipo.entrenador}</p>
      <p><strong>Jugadores:</strong> ${equipo.jugadores}</p>
    `;
  }