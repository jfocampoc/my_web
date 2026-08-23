document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  // Abrir Menú
  const openSidebar = () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
  };

  // Cerrar Menú
  const closeSidebar = () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  };

  // Event Listeners para abrir/cerrar
  menuToggle.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);

  // Cerrar el menú automáticamente al seleccionar una opción
  navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
  });
});
