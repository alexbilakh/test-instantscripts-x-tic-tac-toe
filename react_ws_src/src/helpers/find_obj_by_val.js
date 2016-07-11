const find_obj_by_val = function (o, k, v) {

	if(!o || !o.length)		return

	return o.filter( function(i){ return i[k] && i[k] == v }  )[0]
}

export default find_obj_by_val
