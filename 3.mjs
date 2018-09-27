import { run, int } from './_utils'

const { round, floor, abs, sqrt, pow } = Math

const distance = (int) => {
	const deep = -round(-sqrt(int) / 2)
	const width = deep * 2 + 1
	return deep ? deep + abs(floor(width / 2) - (int - pow(width - 2, 2)) % (width - 1)) : 0
}

run([{
	fn: (string) => distance(int(string)),
	sample: { 1: 0, 12: 3, 23: 2, 1024: 31 }
	}],
	'277678'
)
