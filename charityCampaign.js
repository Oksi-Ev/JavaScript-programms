function charityCampaign(days, cooks, cakes, waffles, pancekes) {
    let profitPerDay = (cakes * 45) + (waffles * 5.80) + (pancekes * 3.20);
    let commonProfit = profitPerDay * cooks * days;
    let taxes = commonProfit / 8;
    let result = commonProfit - taxes;
    console.log(result);
}
charityCampaign('23', '8', '14', '30', '16');