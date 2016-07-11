import React, {Component} from 'react'
import jquery from 'jquery'

export default class MessageBar extends Component {

	constructor (props) {
	    super(props)

		this.state = {
			msgs: []
		};

		// {h:'hd', m:'msg'}, {h:'hhdd', m:'mmsgg'}

		app.on(app.events.show_message, this.show_message.bind(this))
	}


	render () {
		return (
			this.state.msgs.length>0 &&
			<div id='msg_bar' ref='msg_bar'>
				<div className='container'>
					<div>
						{
							this.state.msgs.map(function (m, i) {
								return (
									<p className='one_line' key={i}><span className='exclaim'>{ m.h.length>1 ? m.h+' : ' : '' }</span>{ m.m }<br/></p>
								)
							})
						}
						<a className='close fa fa-close' onClick={this.closeWindow.bind(this)}></a>
					</div>
				</div>
			</div>
		)
	}

	//	------------	------------	------------	------------

	show_message (h, m) {
		const msgs = this.state.msgs
		msgs.push({h:unescape(h), m:unescape(m)})

		this.setState({
			msgs
		})

		jquery(this.refs.msg_bar).slideDown()
	}

	closeWindow () {
		this.state.msgs = []
		jquery(this.refs.msg_bar).slideUp()
	}

	test_message () {
		app.trigger(app.events.show_message, 'header', 'this is message')
	}
}

MessageBar.propTypes = {
}
