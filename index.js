const togglePanel = document.getElementById('toggle-panel');
const sidebar = document.querySelector('.sidebar');
togglePanel.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('closed');
});