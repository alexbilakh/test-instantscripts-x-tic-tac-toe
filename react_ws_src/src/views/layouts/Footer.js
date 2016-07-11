import React, {Component} from 'react'
import { Link } from 'react-router'

// import X_logo from '../../../static/images/X_logo.png'

export default class Footer extends Component {
	render () {
		return (
			<footer>
				<div className='container'>
					<nav>
						<ul>
							{
								app.settings.ws_conf.footer.items.i.map(function (it, i) {
									return (
										it.tp == 'ln' ?
											(<li key={i}><Link to={it.u}>{it.txt}</Link></li>) :
											(<li key={i}>{it.txt}</li>)
									)
								})
							}
						</ul>
					</nav>

					<div className='foot_message'> {app.settings.ws_conf.footer.foot_msg.txt} </div>

					<a className='foot-r-logo' href={app.settings.ws_conf.footer.foot_r_logo.u} target={app.settings.ws_conf.footer.foot_r_logo.t} rel="noopener noreferrer" >
						<img alt='footer logo' src={app.settings.ws_conf.footer.foot_r_logo.i} />
					</a>
				</div>
			</footer>
		)
	}
}
