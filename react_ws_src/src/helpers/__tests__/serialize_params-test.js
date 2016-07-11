jest.unmock('../serialize_params'); // unmock to use the actual implementation of serialize_params
import serialize_params from '../serialize_params'

describe('serialize_params', () => {
	it('serialize_params {a} to equal a=a', () => {
		// const serialize_params = require('../serialize_params');
		expect(serialize_params({a:'a'})).toBe('a=a');
	});


	it('serialize_params {a, b, c} to equal a=a&b=b&c=c', () => {
		// const serialize_params = require('../serialize_params');
		expect(serialize_params({a:'a', b:'b', c:'c'})).toBe('a=a&b=b&c=c');
	});
});