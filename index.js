//  Исходные данные для расчета дохода курьера
let costHours = 0; // Ставка оплаты в час
let prize = 10; // Ставка за заказ
let priceOfOrder = 160; // Премия к заказу
let efficiency = 1.85; // Производительность
let distance = 6.5; // Средняя дистанция за один заказ (туда/обратно)
let priceDistance = 6; // Плата на бензин за каждый киллометр (за пробег)
let nightPrice = 300; // Ночная оплата (с 04 до 08) за каждый час
let weekInYears = 4.35; // Cреднее количество недель в месяце
let costFrends = 30000; // Оплата по акции "приведи друга"

console.log(`Часовая ставка  - ${costHours} руб./в час`);
console.log(`Ставка за заказ  - ${priceOfOrder} руб./заказ`);
console.log(`Премия к заказу - ${prize} руб./заказ`);
console.log(`Производительность - ${efficiency} заказ/час`);
console.log(`Средняя дистанция (туда/обратно) - ${distance} км.`);
console.log(`Плата на бензин  - ${priceDistance} руб./км.`);
console.log(`Ночная оплата (с 04 до 08) - ${nightPrice} руб. (за 4 часа)`);
console.log(`Среднее количество недель в месяце - ${weekInYears}`);
console.log(`Оплата по акции "приведи друга - ${costFrends} за каждого друга`);

// Формирование данных по расчету ЗП
const formEl = document.querySelector('.form');
const resultsEl = document.querySelector('.results');

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    costFrends = 30000;
    nightPrice = 300;
    const daysWeeksEl = document.querySelectorAll('.daysWeeks');
    const inputHoursEl = document.querySelector('.inputHours');

    if (resultsEl != "") {
        resultsEl.innerHTML = "";
    }

    //расчет количества работающих дней в неделю
    let arrDaysChecked = [];
    daysWeeksEl.forEach(element => {
        if (element.checked) {
            arrDaysChecked[arrDaysChecked.length] = element;
        }
    });
    let daysChecked = arrDaysChecked.length
    console.log(`Количество выбранных курьером дней в неделю: ${daysChecked}`);

    // Расчет количества часов
    let hoursChecked = inputHoursEl.value;
    console.log(`Количество выбранных курьером часов в день: ${hoursChecked}`);

    // Ночные часы
    let inputnightEl = document.querySelector('.inputnight');
    inputnightEl.checked ? "" : nightPrice = 0
    nightCost = nightPrice * hoursChecked;
    // За смену максимум 4 часа и соответственно максимум 1200 доплаты за ночь
    if (nightCost >= 1200) {
        nightCost = 1200;
    }
    console.log(`Оплата ночных часов за (сумма за одну смену) ${nightCost} руб.`);

    // Приведи друга
    let inputFrends = document.querySelector('.inputFrends');
    inputFrends.checked ? "" : costFrends = 0
    console.log(`Приведи друга ${costFrends}`);

    // расчет дистанции пройденной за 1 час
    let distanceOneHours = efficiency * distance;

    // расчет платы за бензин за 1 час
    let fuelCost = distanceOneHours * priceDistance;

    // Расчет одного часа работы
    let oneHoursCost = costHours + fuelCost + (efficiency * (prize + priceOfOrder));

    // Доход в неделю
    let sumWeekNoMatch = (oneHoursCost * hoursChecked * daysChecked) + (nightCost * daysChecked);
    let summWeek = Math.round(sumWeekNoMatch);
    // Доход в месяц
    let incomeMonthNoMatch = (((oneHoursCost * hoursChecked * daysChecked) + (nightCost * daysChecked)) * weekInYears) + costFrends;
    let incomeMonth = Math.round(incomeMonthNoMatch);

    //Общее количество заказов в месяц
    let orderMonthNoMath = efficiency * hoursChecked * daysChecked * weekInYears;
    let orderMont = Math.round(orderMonthNoMath);

    // Вывод результатов
    const results__tittle = document.createElement('h2');
    results__tittle.textContent = "Расчет среднего дохода";
    results__tittle.classList.add("results__tittle");
    resultsEl.append(results__tittle);

    const results__weeks = document.createElement('h4');
    results__weeks.textContent = `За неделю: ${summWeek} руб.`
    resultsEl.append(results__weeks);

    const results__month = document.createElement('h3');
    results__month.textContent = `За месяц: ${incomeMonth} руб.`;
    resultsEl.append(results__month);

    // Примечание для курьеров
    const comments = document.createElement('p');
    comments.textContent = `Справочная информация для курьера`;
    comments.classList.add("comments");
    resultsEl.append(comments);
""
    const comments__order = document.createElement('p');
    comments__order.textContent = `Количество отвезенных за месяц заказов: ${orderMont} штук.`;
    resultsEl.append(comments__order);

    const comments__distantion = document.createElement('p');
    comments__distantion.textContent = `Пройденный киллометраж за месяц: ${orderMont * distance} км.`;
    resultsEl.append(comments__distantion);

    // Хочу стать курьером
    const transitionEl = document.querySelector('.transition');
    
    const buttonApproval = document.createElement('button');
    buttonApproval.classList.add ("buttonApproval")
    buttonApproval.textContent = `Хочу стать курьером!!!`;
    transitionEl.append(buttonApproval);

    const buttonCancel = document.createElement('button');
    buttonCancel.classList.add ("buttonCancel")
    buttonCancel.textContent = `Мне это неинтересно`;
    transitionEl.append(buttonCancel);

    buttonCancel.addEventListener('click', function () {
        const commentsEl = document.querySelector('.commentsDiv');

        const formFeedbackEl = document.createElement("form");
        formFeedbackEl.classList.add ("fomr__feedback");
        commentsEl.append (formFeedbackEl);


        const commentInput = document.createElement("textarea");
        commentInput.setAttribute ("type", "text")
        commentInput.setAttribute ("placeholder", "Расскажите в двух словах почему Вам неинтересны наши условия")
        commentInput.setAttribute ("width", "200px");
        formFeedbackEl.append (commentInput);

        const buttonFeedback = document.createElement("button");
        buttonFeedback.textContent = "Рассказать";
        buttonFeedback.classList.add ("buttonFeedback");
        buttonFeedback.setAttribute ("type", "submit");
        formFeedbackEl.append (buttonFeedback);
    });

});

// Всплывающие подсказки (дизайн можно поменять, но сам текст нужно оставить)
tippy('.inputHours', {
    content: 'Один слот в день может быть от 2 до 14 часов',
    theme: "New style",
});

tippy('.night__form', {
    content: 'Ночные часы оплачиваются с 04:00 до 08:00 и в пиццерии по адресу: ул. 50 лет октября, 39А.',
    theme: "New-style",
});

tippy('.frends__form', {
    content: 'Бонус выплачивается за друга-курьера, так и за друга-пиццамейкера. Максимальный бонус за друга-курьера составляет 30 тыс. руб. а за друга-пиццамейкера -  10 тыс. руб.',
    theme: "New-style",
});

tippy('.results', {
    content: 'Это примерный доход курьеров. Реальный доход может быть выше — так как есть доплаты в дни повышенного спроса,  оплата за бронь смены в праздничные дни и пр.',
    theme: "New-style",
}); 
