import { run, int } from './_utils'

const parse = (string) => string.split(/\s/).map(int)

const distribute = (banks) => {
	banks = banks.slice()
	const max = Math.max(...banks)
	const index = banks.findIndex((value) => value === max)
	const amount = banks.splice(index, 1, 0).pop()
	const add = Math.floor(amount / banks.length)
	const extra = amount % banks.length
	// console.log({max,index,amount,add,extra,banks})
	return banks.map((value, i) =>
		value + add + ((i + index - 1) % banks.length < extra && (i + index) > 0 ? 1: 0)
	)
}

const roll = (banks, count) => {
	const seen = {}
	let i = 0
	while(!seen[banks]) {
		seen[banks] = i++
		banks = distribute(banks)
	}
	// console.log(seen, banks)
	return count(seen, banks)
}

const count = (states) => Object.keys(states).length

run([{
		fn: (string) => roll(parse(string), count),
		sample: { '0 2 7 0': 5 }
	}, {
		fn: (string) => roll(parse(string), (states, last) => count(states) - states[last]),
		sample: { '0 2 7 0': 4 }
	}],
	`4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5`,
)
