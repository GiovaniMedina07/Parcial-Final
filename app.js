// Datos de ejemplo para los perfiles de usuario
const usuarios = [
    { username: 'Usuario1', email: 'usuario1@example.com' },
    { username: 'Usuario2', email: 'usuario2@example.com' },
    { username: 'Usuario3', email: 'usuario3@example.com' }
  ];
  
  // Función para mostrar los perfiles de usuario en la página
  function mostrarUsuarios() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    usuarios.forEach((usuario) => {
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `<strong>${usuario.username}</strong> - ${usuario.email}`;
      userList.appendChild(userDiv);
    });
  }
  
  // Event listener para el formulario de registro
  document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Aquí podrías agregar la lógica para guardar el nuevo usuario en la base de datos o en una variable, por ejemplo:
    usuarios.push({ username, email });
  
    // Mostrar los perfiles de usuario actualizados
    mostrarUsuarios();
  });
  
  // Mostrar los perfiles de usuario al cargar la página
  mostrarUsuarios();
  