// ----- Single Student tabs -----//
const singleStudentTabs = document.querySelectorAll('.single-student__toggle ');
const singleStudentContent = document.querySelectorAll('.single-student__content');

singleStudentTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        singleStudentContent.forEach((content) => {
            content.classList.remove('is-active');
         });
        
         singleStudentTabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        singleStudentContent[index].classList.add('is-active');
        singleStudentTabs[index].classList.add('is-active');
    });
});


// ----- Book Modal tabs -----//
const bookModalTabs = document.querySelectorAll('.book-modal-main__toggle');
const bookModalContent = document.querySelectorAll('.book-modal-main__content');
bookModalTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        bookModalContent.forEach((content) => {
            content.classList.remove('is-active');
        });

        bookModalTabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        bookModalContent[index].classList.add('is-active');
        bookModalTabs[index].classList.add('is-active');
    });
});


// ----- Show all activities ----- //

showAllBtn.addEventListener('click', () => {
    hiddenActivities.classList.toggle('hidden');
});


// ----- Chart ----- //

const barChart = document.getElementById('barChart');

new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['Izdate knjige', 'Rezervisane knjige', 'Knjige u prekoracenju'],
        datasets: [
            {
                label: 'Statistika',
                data: [97, 50,25],
                backgroundColor: [
                    'rgba(46, 204, 113, 1)',
                    'rgba(249,105,14,1)',
                    'rgba(255,0,0,1)'
                ]
            }
        ]    
    }
});


// ----- Modals ----- //


// Single User Modal
const singleUserModal = document.querySelector('.single-user');
const singleUserModalBtn = document.querySelector('.single-user-modal-open');
singleUserModalBtn.addEventListener('click', () => {
    singleUserModal.style.display = 'block';
});

// Single Student Modal
const singleStudentModal = document.querySelector('.single-student');
const singleStudentModalBtn = document.querySelector('.single-student-modal-open');
singleStudentModalBtn.addEventListener('click', () => {
    singleStudentModal.style.display = 'block';
});

// Book Modal
const bookModal = document.querySelector('.book-modal');
const bookModalBtn = document.querySelector('.book-modal-open');
bookModalBtn.addEventListener('click', () => {
    bookModal.style.display = 'block';
});


// Close Modal
const btnCancel = document.querySelectorAll('.btn-cancel');
const btnSubmit = document.querySelectorAll('.btn-save');
const navLinks = document.querySelectorAll('.nav-links');

function closeModals() {
    singleUserModal.style.display = 'none';
    singleStudentModal.style.display = 'none';
    bookModal.style.display = 'none';
}

btnCancel.forEach(cancel => {
    cancel.addEventListener('click', () => {
        closeModals();
    });
});

btnSubmit.forEach(submit => {
    submit.addEventListener('click', () => {
        closeModals();
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeModals();
    });
});