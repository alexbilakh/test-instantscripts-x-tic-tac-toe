const serialize_params = function (obj) {

	return Object.keys(obj).map( (k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]) ).join('&')
	// return Object.keys(obj).reduce(function(a,k){a.push(encodeURIComponent(k)+'='+encodeURIComponent(obj[k]));return a},[]).join('&')
}

export default serialize_params