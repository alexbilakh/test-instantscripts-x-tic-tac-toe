import React, {Component} from 'react'
import PopUp from '../layouts/PopUp'

export default class ErrorPage extends Component {

	constructor (props) {
		super(props)
	}

	render () {
		return (
			<PopUp pageTitle='Page Not Found'>
				<h4>Error 404 - Page Not Found</h4>
				<p>Please check the link and try again.</p>
			</PopUp>
		)
	}

}
