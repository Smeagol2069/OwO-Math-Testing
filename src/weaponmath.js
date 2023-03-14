const widStats = require('./stats.json'); 

const data = {   id: '210177401064390658',
    uwid: 135,
    wid: 15,
    stat: '49,2',
    pcount: 0,
    wpid: 12,
    pstat: '58,88'
 }

function calculate(data) { // Returns an array, 0 index is best % without crit, 1 index is best % with crit
		const wid = data.wid;
		let output = []

		const statSum = 1 + .5 + .5
		const numberStats = widStats[wid].numstats
		output[0] = (100*statSum / numberStats)
		output[1] = (100*(statSum + 1) / (numberStats + 1))
	return output	
}
console.log(calculate(data))
