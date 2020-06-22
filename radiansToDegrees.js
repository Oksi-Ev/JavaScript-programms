function radiansToDegrees(input) {
    let radians = Number(input);
    let degres = radians * 180 / Math.PI;
    console.log(degres.toFixed(0));
}