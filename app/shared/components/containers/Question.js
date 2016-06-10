import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadQuestionDetail } from '../../state/actions/questions'
import { Link } from 'react-router'

class Question extends Component {

  static fetchData({ store, params }) {
    let { id } = params
    return store.dispatch(loadQuestionDetail({ id }))
  }
  componentDidMount() {
    let { id } = this.props.params
    this.props.loadQuestionDetail({ id })
    console.log();
  }

  render() {
    let { question } = this.props;
    console.log(question);
    return (
      <div>
        <h2>{ question.get('content') }</h2>
        <h3> User: {question.getIn(['user', 'name'])} </h3>
        <h3> User: {question.getIn(['stuff', 'title'])} </h3>
        <Link to="/questions">Back to Questions</Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { question: state.questionDetail }
}

Question.propTypes = {
  question: PropTypes.object.isRequired
}

export { Question }
export default connect(mapStateToProps, { loadQuestionDetail })(Question)
