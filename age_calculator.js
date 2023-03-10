const birth_date = new Date('1988-02-10');
const future_date = new Date('2026-03-10');

//calculate date diff and convert from millisec to year
const year_diff = Math.floor((future_date - birth_date ) / (1000 * 60 * 60 * 24 * 365.25));

console.log(`If you were born on ${birth_date.toDateString()}, then in ${future_date.getFullYear()} you'll be ${year_diff} years old.`);