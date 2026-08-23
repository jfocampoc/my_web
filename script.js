document.getElementById('botonAlerta').addEventListener('click', () => {
    alert('¡Hola! Has interactuado con la página.');
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  // Funciones para abrir y cerrar
  const openSidebar = () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
  };

  const closeSidebar = () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  };

  // Event Listeners
  menuToggle.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);

  // Cerrar el menú al hacer clic en cualquier enlace
  navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
  });
});
