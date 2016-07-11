import React, {Component} from 'react'

export default class MainContent extends Component {

	constructor (props) {
		super(props)
	}

	render () {
		return (
			<section id='main_content'>
				<div className='main_container'>
					{this.props.children}
				</div>
			</section>
		)
	}
}

MainContent.propTypes = {
	children: React.PropTypes.any
}
