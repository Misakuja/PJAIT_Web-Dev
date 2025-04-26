function carTable() {
    let container = document.getElementById('table-container');
    let table = document.createElement('table');
    table.classList.add('w-full', 'text-sm', 'text-center');

    let table_head = document.createElement('thead');
    table_head.classList.add('bg-gray-100', 'uppercase', 'text-xs', 'font-bold', 'shadow-md');

    let table_row = document.createElement('tr');
    let table_headers = ['Id', 'Year', 'Mileage', 'Base Price', 'Final Price'];

    for (let i = 0; i < table_headers.length; i++) {
        let th = document.createElement('th');
        th.classList.add('px-6', 'py-3');

        let text = document.createTextNode(table_headers[i]);
        th.appendChild(text);
        table_row.appendChild(th);
    }
    table_head.appendChild(table_row);
    table.appendChild(table_head);

    let table_body = document.createElement('tbody');

    for (let i = 0; i < carArray.length; i++) {
        let row = document.createElement('tr');
        row.classList.add('border-b', 'border-gray-200', 'hover:bg-gray-100');

        let id_td = document.createElement('td');
        id_td.classList.add('px-6', 'py-4', 'text-center', 'border-b', 'border-gray-300');

        let year_td = document.createElement('td');
        year_td.classList.add('px-6', 'py-4', 'text-center', 'border-b', 'border-gray-300');

        let mileage_td = document.createElement('td');
        mileage_td.classList.add('px-6', 'py-4', 'text-center', 'border-b', 'border-gray-300');

        let base_price_td = document.createElement('td');
        base_price_td.classList.add('px-6', 'py-4', 'text-center', 'border-b', 'border-gray-300');

        let final_price_td = document.createElement('td');
        final_price_td.classList.add('px-6', 'py-4', 'text-center', 'border-b', 'border-gray-300');

        id_td.appendChild(document.createTextNode(String(i)));
        year_td.appendChild(document.createTextNode(carArray[i].year));
        mileage_td.appendChild(document.createTextNode(carArray[i].mileage));
        base_price_td.appendChild(document.createTextNode(carArray[i].basePrice));
        final_price_td.appendChild(document.createTextNode(carArray[i].finalPrice));

        row.appendChild(id_td);
        row.appendChild(year_td);
        row.appendChild(mileage_td);
        row.appendChild(base_price_td);
        row.appendChild(final_price_td);

        table_body.appendChild(row);
    }
    table.appendChild(table_body);
    container.appendChild(table);
}

let car3 = new Car(2025, 100000, 30000);
let car4 = new Car(2022, 100, 20000);
let car5 = new Car(2023, 10000, 45000);
let car6 = new Car(2024, 3000, 50000);
addToCarArray(car3);
addToCarArray(car4);
addToCarArray(car5);
addToCarArray(car6);

carTable();