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

const allCourseCard = document.querySelectorAll('#cardRow .card-col');
const cardSwitcher = document.querySelector('#cardViewSwitcher')
cardSwitcher.addEventListener('change', ()=> {
    
    let cardNumber = document.querySelector('input[name="car-number-sel"]:checked').value;

    allCourseCard.forEach((card) => {

        // remove existing class
        card.classList.remove('col-md-4' , 'col-md-3', 'col-md-6')

        // add class according to select
        if(cardNumber === '4'){
            card.classList.add('col-md-3')
        }else if(cardNumber === '3'){
            card.classList.add('col-md-4')
        }else{
            card.classList.add('col-md-6')
        }
    })
    
})