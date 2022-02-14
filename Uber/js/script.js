window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');
    /* Строка 1 - Сначала навешиваем на глобальный объект window обработчик события DOMContentLoaded, чтобы скрипт внутри коллбэка сработал только после загрузки DOM дерева. */
    /* Строки 2-4 - получение элементов со страницы по селекторам */

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
    /* Строки 8-11 - навешиваем обработчик события клика на гамбургер. При клике будет добавляться или убираться классы активности для меню и гамбургера. */

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})
    /* Строки 14-18 - тоже самое, только при клике на пункты меню. Так как их несколько - то перебираем их через forEach. */
