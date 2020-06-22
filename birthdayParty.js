function birthdayParty(rentHall) {
    let hallPrice = Number(rentHall);
    let cakePrice = hallPrice * 0.20;
    let drinks = cakePrice - (cakePrice * 0.45);
    let animator = hallPrice / 3;
    let result = hallPrice + cakePrice + drinks + animator;
    console.log(result);
 }
 birthdayParty('2250');