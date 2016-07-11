jest.unmock('../prep_env');
import prep_env from '../prep_env'
jest.unmock('ampersand-app'); 
import app from 'ampersand-app'

// import ws_conf from '../../../ws_conf.xml'
/*
const ws_conf = '<?xml version='1.0' encoding="UTF-8"?>'

const x2js = new X2JS({	attributePrefix: ''	})
const conf_json = x2js.xml2js(ws_conf)
app.settings.ws_conf = conf_json.data
*/


// let app = {}
// app.settings = {}
// app.settings.ws_conf = null
app.settings = {
		ws_conf: null,
	}

app.settings.ws_conf = 
{  
        "site": {
            "vals": {
                "year": "2016",
                "author": "kisla interactive"
            }
        },
        "conf": {
            "ga_acc": {
                "an": "UA-379313-16"
            }
        },
        "loc": {
            "_SCRIPT_ROOT": {
                "u": "http://z2/projs/kisla/X-react-starter/dev/WS/"
            },
            "SCRIPT_ROOT": {
                "u": "http://X-react-starter.kisla.com/"
            },
            "SCRIPT__contact_form": {
                "u": "e/s"
            }
        },
        "main_menu": {
            "pages": {
                "p": [
                    {
                        "name": "User",
                        "u": "user",
                        "ico": "fa fa-user"
                    },
                    {
                        "name": "Page",
                        "u": "pg/txtpg",
                        "ico": "fa fa-file-text"
                    }
                ]
            }
        },
        "header": {
            "head_l_logo": {
                "i": "images/react_sha.png",
                "u": "/"
            },
            "site_title": {
                "txt": "X react starter pack",
                "u": "/"
            }
        },
        "footer": {
            "items": {
                "i": [
                    {
                        "tp": "txt",
                        "txt": "Copyright © 2016 kisla interactive"
                    },
                    {
                        "tp": "ln",
                        "txt": "terms and conditions",
                        "u": "pupg/terms-and-conditions"
                    },
                    {
                        "tp": "ln",
                        "txt": "privacy",
                        "u": "pupg/privacy-policy"
                    },
                    {
                        "tp": "ln",
                        "txt": "contact us",
                        "u": "contact-us"
                    }
                ]
            },
            "foot_msg": {
                "txt": "This is a minimal React.js pack combined from different sources."
            },
            "foot_r_logo": {
                "i": "images/k_logo.png",
                "u": "http://www.kisla.com",
                "t": "blank"
            }
        },
        "pgs": {
            "txtpg": {
                "pg_name": "Standard text page defined in conf xml",
                "__cdata": "\r\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n\t\t\t\t<br/>\r\n\t\t\t\t<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\r\n\t\t\t\t<br/>\r\n\t\t\t\t<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\t\t\t"
            },
            "terms-and-conditions": {
                "pg_name": "WEBSITE TERMS AND CONDITIONS",
                "__cdata": "\r\n\t\t\t\t<p>The Privacy Policy, Information on this website form part of conditions of entry.</p>\r\n\t\t\t\t<p>1. By entering the competition you agree to be bound by these PopUp_page and conditions, and the terms and conditions applicable to the following</p>\r\n\t\t\t\t<p>13. The Promoter is not responsible for any problems or technical malfunction of any telephone network or lines, computer on-line systems, servers, or providers, computer equipment, software, technical problems or traffic congestion on the Internet or at any web site, or any combination thereof, including any injury or damage to participants or any other person's computer related to or resulting from participation.</p>\r\n\t\t\t"
            },
            "privacy-policy": {
                "pg_name": "Web Site Privacy Policy",
                "__cdata": "\r\n\t\t\t\t<p>We are committed to providing and maintaining a safe and secure environment on the internet for everyone. The privacy of any information we collect is important to us.</p>\r\n\r\n\t\t\t\t<h4>Comments? Questions? Suggestions?</h4>\r\n\t\t\t\t<p>We welcome any suggestions on how to make this a better and safer place for everyone. If you would like to communicate with us about our Privacy Policy, please use ‘contact us’ form.</p>\r\n\t\t\t"
            }
        }
}



describe('prep_env', () => {
	it('loaded from xml year', () => {
		// const disc_model = require('../disc_model');

		expect(app.settings.ws_conf.site.vals.year).toBe(2016);
	});

});





