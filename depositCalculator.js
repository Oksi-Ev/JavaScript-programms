function depositCalculator(deposit, term, perCent) {
    let depositCount = Number(deposit);
    let commonPerCent = (depositCount * perCent) / 100;
    let perCentPerMounth = commonPerCent / 12;
    let sum = depositCount + (term * perCentPerMounth);
    console.log(sum);
}
depositCalculator('200', '3', '5.7');