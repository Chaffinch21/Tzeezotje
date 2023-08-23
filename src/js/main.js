window.onload = function(){
  const modalClose = document.querySelector('.callback__close');
  const modalOpen = document.querySelector('.hero__btn');
  const callbackModal = document.querySelector('.callback');
  const burgerEl = document.querySelector('.burger-js');

  burgerEl.addEventListener('click', function(ev){
    document.querySelector('body').classList.toggle('open-burger');
  })

  const swiper = new Swiper('.feedback__slider', {
    loop: false,
    navigation: {
      nextEl: '.feedback-button-next',
      prevEl: '.feedback-button-prev',
      disabledClass: 'feedback-button-disabled'
    },

    pagination: {
      el: '.feedback-pagination',
      bulletClass:'feedback-bullit',
      clickable: true,
      bulletActiveClass: 'feedback-bullit__active',
    },
    
  });

  modalOpen.addEventListener('click', function(ev){
    console.log('1');
    callbackModal.classList.add('visible');
    document.querySelector('body').style.overflow = 'hidden';
  })

  callbackModal.addEventListener('click', function(ev){
    if((ev.target == modalClose) || (ev.target.classList.contains('callback'))) {
      callbackModal.classList.remove('visible');
      document.querySelector('body').style.overflow = 'auto';
    }
  });

  let inputTel = document.querySelector("input[type='tel']");
  let maskTel = new Inputmask("+7 (999)-999-99-99");
  maskTel.mask(inputTel);

  const validator = new JustValidate('#form', {
    validateBeforeSubmitting: true,
  });
  validator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Feltet er ikke fylt ut',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Ugyldig format'
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Ugyldig format'
      },
    ])
    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Feltet er ikke fylt ut',
      },
      {
        validator: (value) => {
          const phone = inputTel.inputmask.unmaskedvalue();
          const result = Number(phone) && phone.length === 10;
          return result;
        },
        errorMessage: 'Ugyldig format'
      },
    ])
    .onSuccess((ev) => {
      document.querySelector('.callback__start').style.display='none';
      document.querySelector('.callback__end').style.display='flex';

      let formData = new FormData(ev.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (afterSend) {
              afterSend();
            }
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', '/resources/mail.php', true);
      xhr.send(formData);

      ev.target.reset();
    }) 
            
} 


