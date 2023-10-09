// burger menu
$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

// hero carules
const MENU_LINK = document.querySelectorAll('.header__menu-link')

MENU_LINK.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();

    const id = link.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: "center",
      inline: "start"
    });
}))

// hero switched dots
const HERO_DOTS = document.querySelectorAll('.hero__dot');
const HERO_TITLE = document.querySelector('.hero__title');
const HERO_SUBTITLE = document.querySelector('.hero__subtitle');

const HERO_TITLES = [
    'Большаков Артем Дмитриевич',
    'Обо мне',
    'Образование'
];

const HERO_SUBTITLES = [
    'Мужчина, 33 года, родился 4 октября 1989\nКонтакты +7 (920) 29-79-484 \nbolshartd@gmail.com',
    'Интересуюсь IT и хочу сменить род деятельности.\nОткрыт ко всему новому и готов к динамичному обучению.',
    'Высшее техническое.\nДПИ НГТУ им. Р.Е. Алексеева, Дзержинск (Нижегородская область).\nСпециальность: Инженер (Автомобильное хозяйство).\nДата окончания: 2011г.',
]

HERO_DOTS.forEach((dot, index) => dot.addEventListener('click', event => {
    HERO_DOTS.forEach(el => {
        el.classList.remove('active');
    });

    dot.classList.add('active');

    HERO_TITLE.textContent = HERO_TITLES[index];
    HERO_SUBTITLE.textContent = HERO_SUBTITLES[index]
}));

// features buttons
const TABS = document.querySelectorAll(".tab");
const TABS_TITLE = document.querySelector(".tabs__title");
 
const TABS_TITLES = [
    TABS_TITLE.textContent,
    'Есть репозитории на GitHub - https://github.com/Bolshartd.\n\nПримеры репозиториев:\nhttps://github.com/Bolshartd/profile - сайт визитка\nhttps://github.com/Bolshartd/test_parsing - парсинг сайта\nhttps://github.com/Bolshartd/study_task - ML. Развертывание приложения в Docker контейнере. Определение схожести слов по смыслу.\nhttps://github.com/Bolshartd/move_detector - Определение движения на веб камере без спользования ИИ.\nhttps://github.com/Bolshartd/evaluation_quality - Оценка качества лакокрасочного покрытия производственных деталей с использованием ИИ\nhttps://github.com/Bolshartd/covid_analyse - Анализ и кластеризация данных по covid-19',
];

TABS.forEach((tab, index) => tab.addEventListener('click', event => {
    TABS.forEach(el => {
        el.classList.remove('active');
    });

    tab.classList.add('active');

    TABS_TITLE.textContent = TABS_TITLES[index];
}));

// benefits images
$(".benefits__date img[alt='liebherr']").click(function() {
    $('.benefits__date[data-name="Июнь 2015 — Ноябрь 2022"]').toggleClass('benefits__date-active');
});

$(".benefits__date img[alt='dpc']").click(function() {
    $('.benefits__date[data-name="Октябрь 2012 — Май 2015"]').toggleClass('benefits__date-active');
});

$(".benefits__date img[alt='nipom']").click(function() {
    $('.benefits__date[data-name="Февраль 2012 — Сентябрь 2012"]').toggleClass('benefits__date-active');
});

$(".benefits__date img[alt='shpalann']").click(function() {
    $('.benefits__date[data-name="Июнь 2023 — н.в."]').toggleClass('benefits__date-active');
});

$(".benefits__date-title").click(function() {
    $('.benefits__date-title').toggleClass('benefits__date-active');
    $('.benefits__date[data-name="Сентябрь 2022 — н.в."]').toggleClass('benefits__date-active');
});