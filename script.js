const toggleSideBarBtn = document.getElementById('toggleSideBarBtn');
const sideBar = document.getElementById('sidebar')

function toggleSideBar(){
    sideBar.classList.toggle('close')
    toggleSideBarBtn.classList.toggle('rotate')
}

const tabs = document.querySelectorAll('#sidebar ul li');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove 'active' class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add 'active' class to the clicked tab
        this.classList.add('active');
    });
});
