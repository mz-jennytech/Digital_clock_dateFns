//timestamps

const before = new Date('February 1 2019 7:30:59');
const now = new Date();

const diff = now.getTime() - before.getTime()
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);


console.log(mins, hours, days);
console.log(`the blog was written ${days} ago`);

//converting timestamps to a date object

const timestamp = 129553742574;
console.log(new Date(timestamp));