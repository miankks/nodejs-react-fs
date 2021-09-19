// SurveyFormReview shows users their form inputs for review
import _ from 'lodash'
import React from 'react';
import { connect } from 'react-redux'
import formFields from './formFields';
import * as actions from '../../actions'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const reviewFields = _.map(formFields, field => {
    return (
       <div key={field.name}>
        <label>{field.label}</label>
        <div>
          {formValues[field.name]}
        </div>
       </div>
    )
  })
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)} 
        className='green btn-flat right white-text'>
          Send Survey
          <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));



// <div>
// <div>
//     <label>Survey Title</label>
//     <div>{formValues.title}</div>
// </div>
// <div>
//     <label>Subject Line</label>
//     <div>{formValues.subject}</div>
// </div>
// <div>
//     <label>Email body</label>
//     <div>{formValues.body}</div>
// </div>
// <div>
//     <label>Recipients</label>
//     <div>{formValues.emails}</div>
// </div>
// </div>