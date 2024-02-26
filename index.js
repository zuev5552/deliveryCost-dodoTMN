const inputDays = document.querySelector('.inputDays');
const daysTa = document.querySelector('.daysTa');

inputDays.value = 6
daysTa.value = 12

const inputHours = document.querySelector('.inputHours');
const hoursTa = document.querySelector('.hoursTa');

inputDays.addEventListener('input', function (e) {
    daysTa.textContent = `${e.target.value} дней в неделю`;
});

inputHours.addEventListener('input', function (e) {
    hoursTa.textContent = `${e.target.value} часов в день`;
});

const priceOfOrder = 160 + 10
const efficiency = 1.85
const distance = 8
const priceDistance = 6
const week = document.querySelector('.week');
const month = document.querySelector('.month');
let weekOrder = document.querySelector('.weekOrder');
let weekDistance = document.querySelector('.weekDistance');
let night = document.querySelector('.night');
const nightCost = document.querySelector('.nightCost');

night.addEventListener('input', function (e) {
    if (night.value == "on") {
        let nightCos = (inputDays.value * 1200);
        nightCost.textContent = `${nightCos} рублей в неделю*`
        console.log(nightCos);
    }
});

// Расчет по умолчанию (при загрузке)
let incomeOrder = ((daysTa.value * efficiency) * priceOfOrder) * inputDays.value
    console.log(`Оплата за заказы: ${incomeOrder}`);
    let distanceW = ((daysTa.value * efficiency) * inputDays.value) * distance
    let distanceWeek = Math.round(distanceW);
    weekDistance.textContent = distanceWeek
    let weekOr = (daysTa.value * efficiency * inputDays.value );
    let weekOrd = Math.round(weekOr);
    weekOrder.textContent = weekOrd;
    console.log(`Пройденная дистанция: ${distanceWeek} км.`);
    let distanceCostWeek = (distanceWeek * priceDistance)
    console.log(`Оплата за бензин: ${distanceCostWeek}`);
    let incomeWeek = (incomeOrder + distanceCostWeek)
    console.log(`Оплата за заказы + бензин + ночная: ${incomeWeek}`);
    let ruWeek = new Intl.NumberFormat("ru").format(incomeWeek);
    week.textContent = ` ${ruWeek} рублей`
    incomeMonth = (incomeWeek * 4.35)
    let ruMonth = new Intl.NumberFormat("ru").format(incomeMonth);
    month.textContent = `   ${ruMonth} рублей`

inputHours.addEventListener('input', function (e) {
    let incomeOrder = ((e.target.value * efficiency) * priceOfOrder) * inputDays.value
    console.log(`Оплата за заказы: ${incomeOrder}`);
    let distanceW = ((e.target.value * efficiency) * inputDays.value) * distance
    let distanceWeek = Math.round(distanceW);
    weekDistance.textContent = distanceWeek
    let weekOr = (e.target.value * efficiency * inputDays.value );
    let weekOrd = Math.round(weekOr);
    weekOrder.textContent = weekOrd;
    console.log(`Пройденная дистанция: ${distanceWeek} км.`);
    let distanceCostWeek = (distanceWeek * priceDistance)
    console.log(`Оплата за бензин: ${distanceCostWeek}`);
    let incomeWeek = (incomeOrder + distanceCostWeek)
    console.log(`Оплата за заказы + бензин + ночная: ${incomeWeek}`);
    let ruWeek = new Intl.NumberFormat("ru").format(incomeWeek);
    week.textContent = ` ${ruWeek} рублей`
    incomeMonth = (incomeWeek * 4.35)
    let ruMonth = new Intl.NumberFormat("ru").format(incomeMonth);
    month.textContent = `   ${ruMonth} рублей`
});

inputDays.addEventListener('input', function (e) {
    incomeOrder = ((e.target.value * efficiency) * priceOfOrder) * inputHours.value
    console.log(`Оплата за заказы: ${incomeOrder}`);
    let distanceW = ((e.target.value * efficiency) * inputHours.value) * distance    
    let distanceWeek = Math.round(distanceW);
    weekDistance.textContent = distanceWeek
    let weekOr = ((e.target.value * efficiency) * inputHours.value);
    let weekOrd = Math.round(weekOr);
    weekOrder.textContent = weekOrd;
    console.log(`Пройденная дистанция: ${distanceWeek}`);
    let distanceCostWeek = (distanceWeek * priceDistance)
    console.log(`Оплата за бензин: ${distanceCostWeek}`);
    let incomeWeek = (incomeOrder + distanceCostWeek)
    console.log(`Оплата за заказы + бензин: ${incomeWeek}`);
    let ruWeek = new Intl.NumberFormat("ru").format(incomeWeek);
    week.textContent = ` ${ruWeek} рублей`
    incomeMonth = (incomeWeek * 4.35)
    let ruMonth = new Intl.NumberFormat("ru").format(incomeMonth);
    month.textContent = `   ${ruMonth} рублей`
});







