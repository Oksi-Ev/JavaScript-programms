function fishTank(lenght, width, hight, perCentCount) {
    let scope = lenght * width * hight;
    let litres = scope * 0.001;
    let perCent = perCentCount * 0.01;
    let water = litres - (litres * perCent);
    console.log(water);
}
fishTank('85', '75', '47', '17');