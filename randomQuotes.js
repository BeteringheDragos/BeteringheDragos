var quotes = [
    'quote 1',
	'quote 2',
	'quote++',
]

function newQuotes() {
    var random = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotes').innerHTML = quotes[random];
}