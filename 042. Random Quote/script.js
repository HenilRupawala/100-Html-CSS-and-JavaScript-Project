const quoteOutput = document.querySelector(".quoteOutput");
const authorOutput = document.querySelector(".authorOutput");
const button = document.querySelector(".btn");

button.addEventListener('click', getQuote)

const quoteArray = [
  {
    author: "Nelson Mandela",
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    author: "Steve Jobs",
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  },
  {
    author: "Eleanor Roosevelt",
    quote: "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    author: "Oprah Winfrey",
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
  {
    author: "James Cameron",
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  },
  {
    author: "John Lennon",
    quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "You must be the change you wish to see in the world.",
  },
]

function getQuote() {
  let random = Math.floor(Math.random() * 9);
  quoteOutput.innerHTML = `<span>${quoteArray[random].quote}</span>`;
  authorOutput.innerHTML = `<small>-${quoteArray[random].author}-</small>`;
}