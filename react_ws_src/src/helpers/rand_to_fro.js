const rand_to_fro = function (mx, mn=0) {

	return Math.floor(Math.random() * (mx - mn + 1)) + mn;

}

export default rand_to_fro
