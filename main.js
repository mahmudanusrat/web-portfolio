const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab_active');
        });

        target.classList.add('tab_active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab_active');
        });
        
        tab.classList.add('tab_active');
    });
});


const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) =>{
    e.preventDefault();
};

contactForm.addEventListener('submit', sendEmail);
