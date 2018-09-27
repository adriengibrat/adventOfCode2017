import { run, int } from './_utils'

const parse = (string) => string.split(/\s/).map(int)

const distribute = (banks) => {
	banks = Array.from(banks)
	const max = Math.max(...banks)
	const index = banks.findIndex((value) => value === max)
	const amount = banks.splice(index, 1, 0).pop()
	for(let i = 1; i <= amount; i++)
		banks[(index + i) % banks.length]++
	return banks
}

const roll = (banks, count) => {
	const seen = {}
	let i = 0
	while(!seen[banks]) {
		seen[banks] = i++
		banks = distribute(banks)
	}
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
