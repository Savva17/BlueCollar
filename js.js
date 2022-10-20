















// все обьекты которые поддаются анимации
const animItems = document.querySelectorAll('._anim-items');
// проверка есть ли обьекты для анимации
if(animItems.length > 0){
    //запуск функции при скролле страницы
    window.addEventListener('scroll', animOnScroll)

    // функция анимации
    function animOnScroll(params){
        // 
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];// получение каждого элемента массива
            const animItemHeight = animItem.offsetHeight;// получение высоты обьекта
            
            const animItemsOffset = offset(animItem).top; // позиция обьекта относительно верха страницы
            const animStart = 4; // коэфицент старта анимации

            let animItemPoint = window.innerHeight - animItemHeight / animStart; //начальная позиция анимации

            //если высота элеента больше высоты окна браузера
            //window.innerHeight высота окна браузера в пикселях
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            // pageYOffset переменная показывает колличество проскроленых пикселей
            // добавить класс если прокрутили больше чем позиция обьекта минус точка старта, 
            // но при этом прокрутили меньше чем позиция обьекта плюс его высота

            if((pageYOffset > animItemsOffset - animItemPoint) && pageYOffset < (animItemsOffset + animItemHeight) ){
                
                animItem.classList.add('_active')
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active')
                }
                
            }
        }
    }

    //получение позиции обьекта относительно верха страницы
    function offset(el){
        // getBoundingClientRect() возвращает DOMRectобъект, предоставляющий информацию о размере элемента и
        // его положении относительно области просмотра .
        const rect = el.getBoundingClientRect(),
          
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            //rect.top позиция обьекта относительно видимого окна
            return {top: rect.top + scrollTop}
    }
    console.log(document.documentElement.scrollTop)
}
setTimeout(() => {
    animOnScroll()
}, 300);

