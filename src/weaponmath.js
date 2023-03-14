const widStats = require('./stats.json'); 

const data = {   id: '210177401064390658',
    uwid: 135,
    wid: 15,
    stat: '0,0',
    pcount: 0,
    wpid: 12,
    pstat: '58,88'
 }

function calculate(data) { // Returns an array (or string if rune/orb), 0 index is best % without crit, 1 index is best % with crit
		const wid = data.wid;

        if (wid == 4) return "Rune"
        if (wid == 6) return "Orb"
    
		let output = []
		const statSum = 100 + data.stat.split(',').map(numStr => parseInt(numStr)).reduce(addArr)
		const numberStats = widStats[wid]
		output[0] = (statSum / numberStats)
		output[1] = ((statSum + 100) / (numberStats + 1))
	return output
}
console.log(calculate(data))

function addArr(sum, num) {
    return sum += num
}
