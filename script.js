document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        var dropbtn = dropdown.querySelector('.dropbtn');
        var dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function(event) {
            event.preventDefault();
            dropdowns.forEach(function(otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('show');
                }
            });
            dropdown.classList.toggle('show');
        });

        // 
        dropdownContent.addEventListener('click', function() {
            dropdown.classList.remove('show');
        });
    });

    // close dropdown 
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            dropdowns.forEach(function(dropdown) {
                dropdown.classList.remove('show');
            });
        }
    });
});
