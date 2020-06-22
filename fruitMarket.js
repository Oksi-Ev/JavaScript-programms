function fruitMarket(strawberryPrice, bananasCount, orangesCount, raspberryCount, strawberryCount) {
    let raspberryPrice = strawberryPrice * 0.50;
    let orangePrice = raspberryPrice - (raspberryPrice * 0.40);
    let bananasPrice = raspberryPrice - (raspberryPrice * 0.80);
    let result = (strawberryPrice * strawberryCount) + (bananasPrice * bananasCount) + (orangePrice * orangesCount) + 
    (raspberryPrice * raspberryCount);
    console.log(`Mariq needs ${result} lv. for their shopping`);
}
fruitMarket('48', '10', '3.3', '6.5', '1.7');