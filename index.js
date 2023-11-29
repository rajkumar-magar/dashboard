document.addEventListener('DOMContentLoaded', function () {
  

    var sidebarToggle = document.getElementById('sidebarToggle');
    var sidebarToggleTop = document.getElementById('sidebarToggleTop');
    var body = document.body;
    var sidebar = document.querySelector('.sidebar');
  
   
    function toggleSidebar() {
      body.classList.toggle('sidebar-toggled');
      sidebar.classList.toggle('toggled');
  

      if (sidebar.classList.contains('toggled')) {
        var collapseElements = sidebar.querySelectorAll('.collapse');
        collapseElements.forEach(function (collapse) {
          collapse.classList.remove('show');
        });
      }
    }
  
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', toggleSidebar);
    }
  
    if (sidebarToggleTop) {
      sidebarToggleTop.addEventListener('click', toggleSidebar);
    }
  });
  