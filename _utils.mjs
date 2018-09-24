const assertEquals = (expected, value) => {
	if (expected !== value) throw new Error(`not equal! expected: ${expected}, got: ${value}`)
}
 // Identity
export const id = (a) => a

export const int = (string) => parseInt(string, 10)

// Iterate Arrays, Objects & strings
export const each = (iterable, fn) => Object.keys(iterable).forEach((key) => fn(iterable[key], key))

// Borrow Array prototype reduce to apply to iterable
export const reduce = (iterable, reducer, init) => [].reduce.call(iterable, reducer, init)

// Run implementations with provided input after testing optional samples
export const run = (implementations, input) => each(implementations, ({ fn, sample }) => {
	each(sample || [], (expected, value) => assertEquals(expected, fn(value)));
	console.log(fn(input))
})
