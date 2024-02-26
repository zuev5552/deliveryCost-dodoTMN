const inputDays = document.querySelector('.inputDays');
const daysTa = document.querySelector('.daysTa');

inputDays.value = 4
daysTa.value = 8

const inputHours = document.querySelector('.inputHours');
const hoursTa = document.querySelector('.hoursTa');

inputDays.addEventListener('input', function (e) {
    daysTa.textContent = `${e.target.value} дней в неделю`;
});

inputHours.addEventListener('input', function (e) {
    hoursTa.textContent = `${e.target.value} часов в день`;
});

const prize = 10
const priceOfOrder = 160
const priceOfOrderFull = priceOfOrder + prize
const efficiency = 1.85
const distance = 8
const priceDistance = 6
const nightPrice = 1200
const week = document.querySelector('.week');
const month = document.querySelector('.month');
let weekOrder = document.querySelector('.weekOrder');
let weekDistance = document.querySelector('.weekDistance');
let night = document.querySelector('.night');
const nightCost = document.querySelector('.nightCost');

night.addEventListener('input', function (e) {
    if (night.value == "on") {
        let nightCos = (inputDays.value * nightPrice);
        nightCost.textContent = `${nightCos} рублей в неделю*`
    }
});
console.log(`Ставка за заказ ${priceOfOrder} руб.`);
console.log(`Премия к заказу ${prize} руб.`);
console.log(`Производительность ${efficiency} заказ/час`);
console.log(`Средняя дистанция (туда/обратно) ${distance} км.`);
console.log(`Плата на бензин (за пробег) ${priceDistance} руб.`);
console.log(`Ночная оплата (с 04 до 08) ${nightPrice} руб.`);


// Расчет по умолчанию (при загрузке)
let incomeOrder = ((daysTa.value * efficiency) * priceOfOrderFull) * inputDays.value
    let distanceW = ((daysTa.value * efficiency) * inputDays.value) * distance
    let distanceWeek = Math.round(distanceW);
    weekDistance.textContent = distanceWeek
    let weekOr = (daysTa.value * efficiency * inputDays.value );
    let weekOrd = Math.round(weekOr);
    weekOrder.textContent = weekOrd;
    let distanceCostWeek = (distanceWeek * priceDistance)
    let incomeWeek = (incomeOrder + distanceCostWeek)
    let ruWeek = new Intl.NumberFormat("ru").format(incomeWeek);
    week.textContent = ` ${ruWeek} рублей`
    incomeMonth = (incomeWeek * 4.35)
    let ruMonth = new Intl.NumberFormat("ru").format(incomeMonth);
    month.textContent = `   ${ruMonth} рублей`

inputHours.addEventListener('input', function (e) {
    let incomeOrder = ((e.target.value * efficiency) * priceOfOrderFull) * inputDays.value
    let distanceW = ((e.target.value * efficiency) * inputDays.value) * distance
    let distanceWeek = Math.round(distanceW);
    weekDistance.textContent = distanceWeek
    let weekOr = (e.target.value * efficiency * inputDays.value );
    let weekOrd = Math.round(weekOr);
    weekOrder.textContent = weekOrd;
    let distanceCostWeek = (distanceWeek * priceDistance)
    let incomeWeek = (incomeOrder + distanceCostWeek)
    let ruWeek = new Intl.NumberFormat("ru").format(incomeWeek);
    week.textContent = ` ${ruWeek} рублей`
    incomeMonth = (incomeWeek * 4.35)
    let ruMonth = new Intl.NumberFormat("ru").format(incomeMonth);
    month.textContent = `   ${ruMonth} рублей`
});

inputDays.addEventListener('input', function (e) {
    incomeOrder = ((e.target.value * efficiency) * priceOfOrderFull) * inputHours.value
    let distanceW = ((e.target.value * efficiency) * inputHours.value) * distance    
    let distanceWeek = Math.round(distanceW);
    weekDistance.textContent = distanceWeek
    let weekOr = ((e.target.value * efficiency) * inputHours.value);
    let weekOrd = Math.round(weekOr);
    weekOrder.textContent = weekOrd;
    let distanceCostWeek = (distanceWeek * priceDistance)
    let incomeWeek = (incomeOrder + distanceCostWeek)
    let ruWeek = new Intl.NumberFormat("ru").format(incomeWeek);
    week.textContent = ` ${ruWeek} рублей`
    incomeMonth = (incomeWeek * 4.35)
    let ruMonth = new Intl.NumberFormat("ru").format(incomeMonth);
    month.textContent = `   ${ruMonth} рублей`
});







