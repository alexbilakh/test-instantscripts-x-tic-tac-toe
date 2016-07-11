import React, { Component } from 'react'
import getBodyHeight from '../../helpers/getBodyHeight'
import { Motion, spring } from 'react-motion'

export default class PopUp extends Component {

  constructor (props) {
    super(props)
    this.state = {
      bodyHeight: 0,
      closing: false,
      mounted: false
    }
  }

  componentDidMount () {
    this.setState({
      bodyHeight: getBodyHeight()+200,
      mounted: true
    })
  }

  render () {
    const me = this
    const { mounted, closing, bodyHeight } = this.state
    const bottom = closing ? -bodyHeight : 0
    const springValue = [120, 15]

    if (!mounted) return null

    return (
      <Motion
        defaultStyle={{bottom: -bodyHeight}}
        style={{bottom: spring(bottom, springValue)}}>
        {
          (value) => (
            <section id='simple_popup' style={{bottom: value.bottom}}>
              <div className='container'>
                <a className='close fa fa-close' onClick={this.closeMe.bind(me)}></a>
                <h3>{ this.props.pageTitle } </h3>
              </div>
              <div className='content'>
                <div className='container'>
                  { this.props.children }
                </div>
              </div>
            </section>
          )
        }
      </Motion>
    )
  }

  closeMe () {
    this.setState({ closing: true })
    this.context.router.push('/')
  }
}

PopUp.propTypes = {
  pageTitle: React.PropTypes.string,
  children: React.PropTypes.any
}

PopUp.contextTypes = {
  router: React.PropTypes.object.isRequired
}
