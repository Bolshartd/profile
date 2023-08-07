// let myVar = 'My name is Intensive';

// myVar = [11,22,33,44,55];

// const myOtherVar = myVar[2]

// const myFanction = (name) => {
//     alert('Hello ' + name + '!')
// }

// myFanction('Makar')

const MENU_LINK = document.querySelectorAll('.header__menu-link')

MENU_LINK.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();

    const id = link.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: "center"
    });
}))

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


const TABS = document.querySelectorAll(".tab");
const TABS_TITLE = document.querySelector(".tabs__title");

const TABS_TITLES = [
    'Python-разработчик (ML, Data Scientist)\nАкадемия Цифрового Образования ООО «Мобильное Электронное Образование»,\nPython-разработчик, май 2023',
    'Изучаю Python, есть репозитории на GitHub - https://github.com/Bolshartd.\n\nПримеры репозиториев:\nhttps://github.com/Bolshartd/test_parsing - парсинг сайта\nhttps://github.com/Bolshartd/study_task - ML. Развертывание приложения в Docker контейнере. Определение схожести слов по смыслу.(http://51.250.14.6/)\nhttps://github.com/Bolshartd/move_detector - Определение движения на веб камере без спользования ИИ.\nhttps://github.com/Bolshartd/evaluation_quality - Оценка качества лакокрасочного покрытия производственных деталей с использованием ИИ\nhttps://github.com/Bolshartd/covid_analyse - Анализ и кластеризация данных по covid-19',
    'Изучение литературы:\n1.Pro Git /Scott Chacon and Ben Straub/\n2.Начинаем программировать на Python /Тони Гэддис/\n\nДополнительное изучение:\n1.Проект "Феникс" / Джин Ким, Кевин Бер, Джордж Спаффорд/\n2.Изучаю лекции MIT OpenCourseWare:\nhttps://www.youtube.com/playlist?list=PLUl4u3cNGP63WbdFxL8giv4yhgdMGaZNA\n3.Прохождение интенсивов SkillFactory (тестирование, frontend-разработка)\n4.Изучение курса от KTS Metaclass (Начинающий Backend разработчик на Python)',
];

TABS.forEach((tab, index) => tab.addEventListener('click', event => {
    TABS.forEach(el => {
        el.classList.remove('active');
    });

    tab.classList.add('active');

    TABS_TITLE.textContent = TABS_TITLES[index];
}));
