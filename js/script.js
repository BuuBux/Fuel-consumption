let boxes = document.querySelectorAll('.box');
const traveled = document.querySelector('[name=traveled]');
const wastedFuel = document.querySelector('[name=wasted]');
const sizeOfTank = document.querySelector('[name=tank]');
const avgFuel = document.querySelector('[name=avg]');
const avgFuelRoad = document.querySelector('[name=avg-road]');
const roadLength = document.querySelector('[name=road]');
const fuelPrice = document.querySelector('[name=fuel]');
const btnOne = document.querySelector('[name=avg-score]');
const btnTwo = document.querySelector('[name=tank-score]');
const btnThree = document.querySelector('[name=road-score]');
const wrapper = document.querySelector('.wrapper');
const scoreOne = document.querySelector('.avgScore');
const scoreTwo = document.querySelector('.tankScore');
const scoreThree = document.querySelector('.roadScore');
const body = document.querySelector('.wrapper');

function selectOption(e) {
    box = [...boxes];
    if(this.classList.contains('active', 'toggle')){
        e.preventDefault();
    }else{
        for(i=0; i<box.length; i++){
            if(box[i].classList.contains('active')){
                box[i].classList.remove('active', 'toggle');
                this.classList.add('active');
                setTimeout(() => this.classList.contains('active') && this.classList.add('toggle'), 500);
            }
        }
        if(!this.classList.contains('active'))
        {
            this.classList.add('active');
            setTimeout(() => this.classList.contains('active') && this.classList.add('toggle'), 500);
        }
    }
}

function avgFuelUsing(e) {
    e.stopPropagation();
    const score = ((wastedFuel.value / traveled.value) * 100).toFixed(1);
    const price = (fuelPrice.value * wastedFuel.value).toFixed(2);

    scoreOne.innerHTML = `
        <p> Twoje średnie spalanie wynosi : <strong>${score} l/100km</strong> </p>
        <p> Koszt paliwa przy <strong>${traveled.value} km</strong> wynosi : <strong>${price}</strong> </p>
    `;
}

function tankFilled(e) {
    e.stopPropagation();
    const score = ((sizeOfTank.value / avgFuel.value) * 100).toFixed(1);
    const price = (fuelPrice.value * sizeOfTank.value).toFixed(2);

    scoreTwo.innerHTML = `
        <p> Na jednym baku przejedziesz <strong>${score}</strong> km </p>
        <p> Koszt całego baku to <strong>${price}</strong> zł </p>
    `;
}

function travelCost(e) {
    e.stopPropagation();
    const score = ((roadLength.value * avgFuelRoad.value) / 100).toFixed(1);
    const price = (fuelPrice.value * score).toFixed(2);

    scoreThree.innerHTML = `
        <p> Podczas trasy o długości <strong>${roadLength.value}</strong> km zostanie spalone <strong>${score}</strong> l </p>
        <p> Cena paliwa na tą trase wyniesie <strong>${price}</strong> zł </p>
    `;
}

function resetBoxes(e) {
    box = [...boxes];
    if (!e.target.classList.contains('wrapper'))
    {

    }else{
        for(i=0; i<box.length; i++){
            if(box[i].classList.contains('active'))
            {
                box[i].classList.remove('active', 'toggle');
            }
        }    
    }
}

/*function exitOption(e) {
    e.stopPropagation();
    box = [...boxes];
    console.log(this);
    for(i=0; i<box.length; i++){
            box[i].classList.remove('active', 'toggle');
    }
}*/

boxes.forEach(box => box.addEventListener('click', selectOption));
//wrapper.addEventListener('click', exitOption, {capture: false});

btnOne.addEventListener('click', avgFuelUsing, {
    capture: false
});
btnTwo.addEventListener('click', tankFilled, {
    capture: false
});
btnThree.addEventListener('click', travelCost, {
    capture: false
});

body.addEventListener('click', resetBoxes, {
    capture: false
})