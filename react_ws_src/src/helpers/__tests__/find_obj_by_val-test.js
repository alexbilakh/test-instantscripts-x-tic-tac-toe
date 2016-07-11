jest.unmock('../find_obj_by_val');
import find_obj_by_val from '../find_obj_by_val'

const exm_obj = [
	{name:'Employee Discount', perc_val:'30', user_code:'emp'},
	{name:'Affiliate Discount', perc_val:'10', user_code:'aff'},
	{name:'Long Term Customer Discount', perc_val:'5', user_code:'c2y'}
]

describe('find_obj_by_val', () => {
	it('find_obj_by_val to find obj', () => {
		// const find_obj_by_val = require('../find_obj_by_val');
		expect(find_obj_by_val(exm_obj, 'user_code', 'aff')).toBe(exm_obj[1]);
	});

	it('find_obj_by_val to find obj val', () => {
		// const find_obj_by_val = require('../find_obj_by_val');
		expect(find_obj_by_val(exm_obj, 'user_code', 'c2y').perc_val*1).toBe(5);
	});
});





