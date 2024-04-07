document.addEventListener('DOMContentLoaded', function () {
    // конечная дата
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
        /*Slider*/
        window.onload = function () {
          const carouselItem1 = document.querySelector('#carousel-1');
          const carouselItem2 = document.querySelector('#carousel-2');
          const carouselItem3 = document.querySelector('#carousel-3');
          const carouselItem4 = document.querySelector('#carousel-4');
      
          const leftArrow = document.querySelector('#left-arrow');
          const rightArrow = document.querySelector('#right-arrow');
      
          var i = 0;
      
          rightArrow.onclick = function () {
              i = (i + 1) % 4;
              showSlide(i);
          }
      
          leftArrow.onclick = function () {
              i = (i - 1 + 4) % 4;
              showSlide(i);
          }
          function showSlide(index) {
              if (index == 0) {
                  carouselItem1.style.opacity = 1;
                  carouselItem1.style.visibility = "visible";
                  carouselItem2.style.opacity = 0;
                  carouselItem2.style.visibility = "hidden";
                  carouselItem3.style.opacity = 0;
                  carouselItem3.style.visibility = "hidden";
                  carouselItem4.style.opacity = 0;
                  carouselItem4.style.visibility = "hidden";
              } else if (index == 1) {
                  carouselItem1.style.opacity = 0;
                  carouselItem1.style.visibility = "hidden";
                  carouselItem2.style.opacity = 1;
                  carouselItem2.style.visibility = "visible";
                  carouselItem3.style.opacity = 0;
                  carouselItem3.style.visibility = "hidden";
                  carouselItem4.style.opacity = 0;
                  carouselItem4.style.visibility = "hidden";
              } else if (index == 2) {
                  carouselItem1.style.opacity = 0;
                  carouselItem1.stle.visibility = "hidden";
                  carouselItem2.style.opacity = 0;
                  carouselItem2.style.visibility = "hidden";
                  carouselItem3.style.opacity = 1;
                  carouselItem3.style.visibility = "visible";
                  carouselItem4.style.opacity = 0;
                  carouselItem4.style.visibility = "hidden";
              } else if (index == 3) {
                  carouselItem1.style.opacity = 0;
                  carouselItem1.style.visibility = "hidden";
                  carouselItem2.style.opacity = 0;
                  carouselItem2.style.visibility = "hidden";
                  carouselItem3.style.opacity = 0;
                  carouselItem3.style.visibility = "hidden";
                  carouselItem4.style.opacity = 1;
                  carouselItem4.style.visibility = "visible";
              } 
          }
      };                