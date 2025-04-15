class Car {
    #year;
    #mileage;
    #basePrice;
    #finalPrice;

    constructor(year, mileage, basePrice) {
        this.#year = year;
        this.#mileage = mileage;
        this.#basePrice = basePrice;
        this.#finalPrice = this.calculateFinalPrice();
    }

    get year() {
        return this.#year;
    }

    get mileage() {
        return this.#mileage;
    }

    get basePrice() {
        return this.#basePrice;
    }

    get finalPrice() {
        return this.#finalPrice;
    }

    set year(newYear) {
        this.#year = newYear;
        this.#finalPrice = this.calculateFinalPrice();
    }

    set mileage(newMileage) {
        this.#mileage = newMileage;
        this.#finalPrice = this.calculateFinalPrice();
    }

    set basePrice(newPrice) {
        this.#basePrice = newPrice;
        this.#finalPrice = this.calculateFinalPrice();
    }

    increaseBasePrice() {
        this.basePrice = this.basePrice + 1000;
    }

    ageDiscount() {
        const currentYear = new Date().getFullYear();
        return (currentYear - this.year) * 1000;
    }

    mileageDiscount() {
        return Math.floor(this.mileage / 100000) * 10000;
    }

    updateMileageAndYear(newMileage, newYear) {
        this.mileage = newMileage;
        this.year = newYear;
    }

    calculateFinalPrice() {
        return this.basePrice - this.ageDiscount() - this.mileageDiscount();
    }
}

let carArray = [];

function addToCarArray(car) {
    if (car.finalPrice >= 10000) {
        carArray.push(car);
    }
}

function increaseYearForAllCars() {
    carArray.forEach(car => {
        car.year += 1;
    });
}

let car1 = new Car(2024, 100000, 9000);
let car2 = new Car(2025, 100000, 20000);
addToCarArray(car1);
addToCarArray(car2);

increaseYearForAllCars();

console.log(carArray);