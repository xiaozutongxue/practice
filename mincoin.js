function minCoinChange(coins, amout) {
    const cache = [];
    const makeChange = (value) => {
        if (!value) {
            return [];
        }
        if (cache[value]) {
            return cache[value];
        }
        let min = [];
        let newMin;
        let newAmount;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            newAmount = value - coin;
            if (newAmount >= 0) {
                newMin = makeChange(newAmount)
                
            }
            if (newAmount >= 0 && (!min.length || newMin.length < min.length ) && (newMin.length || ! newAmount)) {
                
                min = [coin].concat(newMin);
                // console.log(newMin,coin)
            }

        }
        console.log(min)
        return (cache[value] = min)
    }
    return makeChange(amout)
}
console.log(minCoinChange([1,10,25], 36)) 