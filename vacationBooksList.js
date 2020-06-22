function vacationBooksList(pagesCount, pagesPerHour, daysCount) {
 let hoursForBook = pagesCount / pagesPerHour;
 let hoursForDay = hoursForBook / daysCount;
 console.log(`For this book you need to spend ${hoursForDay} hours in a day.`);
}
vacationBooksList('212', '20', '2');