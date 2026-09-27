const likeButtons = document.querySelectorAll('.card__like-btn');

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');

    const countSpan = button.querySelector('.card__like-count');
    let count = parseInt(countSpan.textContent, 10);

    if (button.classList.contains('liked')) {
      count += 1;
    } else {
      count -= 1;
    }

    countSpan.textContent = count;

  });
});
