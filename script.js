const projects = document.querySelectorAll('.project');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;
let interval;

// Создание всех точек (по количеству проектов)
function createDots() {
  dotsContainer.innerHTML = '';
  projects.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });
}

createDots();
const dots = document.querySelectorAll('.dot');

// Отображение конкретного проекта
function showProject(index) {
  projects.forEach(p => p.classList.remove('active'));
  projects[index].classList.add('active');
  currentIndex = index;
  updateDots();
}


// Автопрокрутка каждые 5 секунд
function startAutoScroll() {
  interval = setInterval(() => {
    let nextIndex = (currentIndex + 1) % projects.length;
    showProject(nextIndex);
  }, 5000);
}

// Клик по точке
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(interval);
    const index = parseInt(dot.dataset.index);
    showProject(index);
    startAutoScroll();
  });
});

// Инициализация
showProject(0);
startAutoScroll();

