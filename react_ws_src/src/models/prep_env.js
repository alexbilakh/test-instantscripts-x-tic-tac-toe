import superagent from 'superagent'
import X2JS from 'x2js'

import '../../static/ws_conf.xml'

const prep_env = function (ca) {

	// console.log("prep_env with : ", data_js, card_type, team, pos, sort);

	const call_after = ca

	load_conf()

	return

// ---- --------------------------------------------  --------------------------------------------  

	function load_conf () {
	    // console.log("conf_file", conf_file)

		superagent
			.get(conf_file)
			.end(function(err, res){

				if (err || !res.ok) {
					alert('Can\'t load site configuration')
					console.log('Can\'t load site configuration', err)
					return
				}

				const x2js = new X2JS({	attributePrefix: ''	})
				const conf_json = x2js.xml2js(res.text)

				app.settings.ws_conf = conf_json.data
				// console.log('loaded site configuration', app.settings.ws_conf)
				console.log('loaded site configuration', app.settings.ws_conf.site.vals.year)

				prep_site ()
			});

		set_settings ()

	}

// ---- --------------------------------------------  --------------------------------------------  

	function set_settings () {

		//	http://stackoverflow.com/questions/998245/how-can-i-detect-if-flash-is-installed-and-if-not-display-a-hidden-div-that-inf
		// https://forums.adobe.com/thread/1899487?start=0&tstart=0
		if('ActiveXObject' in window) {		// IE only
			try{
				app.settings.hasFlash = !!(new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
			}catch(e){}
		} else {							// W3C, better support in legacy browser
			app.settings.hasFlash = !!navigator.mimeTypes['application/x-shockwave-flash'];
		}

		// try{
		// 	if(new ActiveXObject('ShockwaveFlash.ShockwaveFlash')){		//IE only
		// 		app.settings.hasFlash = true;
		// 	}
		// }catch(e){
		// 	if(navigator.mimeTypes ['application/x-shockwave-flash'] !== undefined){	//W3C, better support in legacy browser
		// 		app.settings.hasFlash = true;
		// 	}
		// }

		app.settings.is_mobile = !!( navigator.userAgent.match(/Android/i) 
				|| navigator.userAgent.match(/iPad|iPhone|iPod/i)
				|| navigator.userAgent.match(/webOS|BlackBerry|Windows Phone|Opera Mini|IEMobile|windows mobile/i) )

		if (app.settings.is_mobile)
			app.settings.mobile_type = navigator.userAgent.match(/Android/i) ? 'Android' :
										( navigator.userAgent.match(/iPad|iPhone|iPod/i) ? 'iOS' : null)

		// app.settings.is_mobile = true

		app.settings.can_app = !!app.settings.mobile_type
		app.settings.couldHaveFlash = !app.settings.is_mobile


		// console.log("app.settings: ", app.settings)
	}

// ---- --------------------------------------------  --------------------------------------------  

	function prep_site () {

		call_after()

	}

// ---- --------------------------------------------  --------------------------------------------  

}

export default prep_env
