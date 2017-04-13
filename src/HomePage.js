
import firebase from 'firebase'
import React, { Component } from 'react'
import QuestionList from './QuestionList'

class HomePage extends Component {
  static propTypes = {
    questions: React.PropTypes.array
  }
  render () {
    return (
      <div className='md-home-page'>
        <QuestionList questions={this.props.questions} />
      </div>
    )
  }
}

export default HomePage
