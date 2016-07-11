import rand_to_fro from './rand_to_fro'

const rand_arr_elem = function (a) {

	return a ? a[rand_to_fro(a.length-1)] : null

}

export default rand_arr_elem
