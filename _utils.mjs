const assertEquals = (expected, value) => {
	if (expected !== value) throw new Error(`not equal! expected: ${expected}, got: ${value}`)
}

 // Identity
export const id = (a) => a

// Multiline input parser
export const parse = (string, mapper = id) => string.split(/\n/).map(mapper)

// Parse Int (no radix)
export const int = (string) => parseInt(string, 10)

// Iterate Arrays, Objects & strings
export const each = (iterable, fn) => Object.keys(iterable).forEach((key) => fn(iterable[key], key))

// Borrow Array prototype reduce to apply to iterable
export const reduce = (iterable, reducer, init) => [].reduce.call(iterable, reducer, init)

// Create sum reducer from increment function
export const sum = (increment) => (count, item, index) => count + increment(item, index)

// Run implementations with provided input after testing optional samples
export const run = (implementations, input) => each(implementations, ({ fn, sample }) => {
	each(sample || [], (expected, value) => assertEquals(expected, fn(value)));
	console.log(fn(input))
})
