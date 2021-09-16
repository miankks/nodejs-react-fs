// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux'

const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
     
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}
export default connect(mapStateToProps)(SurveyFormReview);



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