document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const burgerIcon = document.getElementById('burger-icon');
    const closeIcon = document.getElementById('close-icon');
    const content = document.getElementById('content');

    // Function to toggle sidebar visibility and blur content
    function toggleSidebar() {
        sidebar.style.left = sidebar.style.left === '-220px' ? '0' : '-220px';
        burgerIcon.style.display = burgerIcon.style.display === 'block'? 'none': 'block';
        closeIcon.style.display = closeIcon.style.display === 'none'? 'block': 'none';
        content.style.filter = content.style.filter === 'blur(5px)' ? 'none' : 'blur(5px)';
    }

    // Add click event listener to the burger icon
    burgerIcon.addEventListener('click', toggleSidebar);
    closeIcon.addEventListener('click', toggleSidebar);
});
