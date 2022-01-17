const quotes = [
    {
        quote : "The road to success and the road to failure are almost exactly the same.",
        author : "Colin R. Davis",
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author : "Walt Disney",
    },
    {
        quote : "Don't let the fear of losing be greater than the excitement of winning.",
        author : "Robert Kiyosaki",
    },
    {
        quote : "Action is the foundational key to all success.",
        author : "Pablo Picasso"
    }
];






function getQuote() {
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");

    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = `- ${todaysQuote.author} -`;
}

getQuote();
setInterval(getQuote, 5000);