import React, {Component} from 'react'
import PopUp from '../layouts/PopUp'

export default class PopUp_page extends Component {

	constructor (props) {
		super(props)
	}

	render () {
		const { pu_page } = this.props.params
		const page_x = app.settings.ws_conf.pgs[pu_page]

		if (!pu_page || !page_x) return null

		// console.log(page_x)

		return (
			<PopUp pageTitle={page_x.pg_name}>
				<div dangerouslySetInnerHTML={{__html: page_x.__cdata}} />
			</PopUp>
		)
	}

}

PopUp_page.propTypes = {
	params: React.PropTypes.any
}