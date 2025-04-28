// $(document).ready(function () {
//     $('#cardCount').on('change', function () {
//       const selected = $(this).val();
//       const $cards = $('#cardRow .card-col');

//       // Remove any existing Bootstrap column classes
//       $cards.removeClass('col-md-3 col-md-4 col-md-6');

//       // Apply new class based on selected option
//       if (selected == '4') {
//         $cards.addClass('col-md-3'); // 4 cards per row
//       } else if(selected == '3') {
//         $cards.addClass('col-md-4'); // 3 cards per row
//       }else{
//         $cards.addClass('col-md-6')
//       }
//     });
// });

// const cardCountBtn = document.querySelector('#cardCount');
// const allCourseCard = document.querySelectorAll('#cardRow .card-col');

// cardCountBtn.addEventListener('change' , e => {

//     let cardNumber = e.target.value;

//     allCourseCard.forEach((card) => {

//         // remove existing class
//         card.classList.remove('col-md-4' , 'col-md-3', 'col-md-6')

//         // add class according to select
//         if(cardNumber === '4'){
//             card.classList.add('col-md-3')
//         }else if(cardNumber === '3'){
//             card.classList.add('col-md-4')
//         }else{
//             card.classList.add('col-md-6')
//         }
//     })
// })

// module step js start

// const allCourseCard = document.querySelectorAll('#cardRow .card-col');
// const cardSwitcher = document.querySelector('#cardViewSwitcher')
// cardSwitcher.addEventListener('change', () => {

//     let cardNumber = document.querySelector('input[name="car-number-sel"]:checked').value;

//     allCourseCard.forEach((card) => {

//         // remove existing class
//         card.classList.remove('col-md-4', 'col-md-3', 'col-md-6')

//         // add class according to select
//         if (cardNumber === '4') {
//             card.classList.add('col-md-3')
//         } else if (cardNumber === '3') {
//             card.classList.add('col-md-4')
//         } else {
//             card.classList.add('col-md-6')
//         }
//     })
// })

// module step js end

// active button js

document.addEventListener('DOMContentLoaded', function () {
    var currentUrl = window.location.href;

    // Get all category links
    var categoryLinks = document.querySelectorAll('.category-pill');

    // Remove active class from all links
    categoryLinks.forEach(function (link) {
        link.classList.remove('active');
    });

    // Check the current URL and add the active class to the correct link
    
    categoryLinks.forEach(function (link) {
        // console.log(link.href);
        
        if (currentUrl === link.href) {
            link.classList.add('active');
        } else if (currentUrl.indexOf("group=18") > -1 && link.href === "https://higher-edu.uk/courses?group=18") {
            link.classList.add('active');
        } else if (currentUrl.indexOf("group=19") > -1 && link.href === "https://higher-edu.uk/courses?group=19") {
            link.classList.add('active');
        }
    });
});
