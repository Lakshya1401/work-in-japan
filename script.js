document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = navLink.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Apply Now buttons
    const applyButtons = document.querySelectorAll('.job-listing button');

    applyButtons.forEach(function(applyButton) {
        applyButton.addEventListener('click', function() {
            const jobTitle = applyButton.parentElement.querySelector('h3').textContent;
            alert(`You have applied for the job: ${jobTitle}`);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // About Japan accordion
    const accordionItems = document.querySelectorAll('#about-japan .accordion-item');

    accordionItems.forEach(function(item) {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', function() {
            item.classList.toggle('active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Collapse content
            } else {
                content.style.maxHeight = content.scrollHeight + 'px'; // Expand content
            }
        });
    });
});

