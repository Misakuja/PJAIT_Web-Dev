let previouslyFetchedData = {};
let lastThreeNews = [];
let lastNewsShown = -1;

function fetchAndDisplayNewStock() {
    $.getJSON("https://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php", function (data) {
        const stockTableBody = $("#stockPricesTable tbody");
        stockTableBody.empty();

        const stock = data.stock;

        let stockChange = '';
        let arrowColor = 'black';

        for (const company in stock) {
            const price = stock[company];

            if (previouslyFetchedData[company] !== undefined) {
                const previousPrice = previouslyFetchedData[company];
                if (price > previousPrice) {
                    stockChange = '&uarr;';
                    arrowColor = 'green';
                } else if (price < previousPrice) {
                    stockChange = '&darr;';
                    arrowColor = 'red';
                } else {
                    stockChange = '&rarr;';
                    arrowColor = 'gray';
                }
            }

            stockTableBody.append(`
                <tr class="bg-white border-b border-gray-200">
                    <td class="px-6 py-4">${company}</td>
                    <td class="px-6 py-4" style="color:${arrowColor}">${price} ${stockChange}</td>
                </tr>
            `)
        }

        const news = data.news;

        if (news !== undefined && news !== lastThreeNews[0]) {
            lastThreeNews.unshift(news);
            if (lastThreeNews.length > 3) {
                lastThreeNews.pop();
            }
        }

        previouslyFetchedData = { ...stock };

        const newsDiv = $("#news");
        newsDiv.empty();
        lastThreeNews.forEach((n, i) => {
            newsDiv.append(`<p class="text-sm" id="news-${i}">${n}</p>`);
        });
    })
}
fetchAndDisplayNewStock();
setInterval(fetchAndDisplayNewStock, 5000);


