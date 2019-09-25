  let btn = document.querySelector('#btn');
  let counter = 0;
  btn.addEventListener('click', function (e) {
      counter++;
      btn.innerHTML = counter;
  });