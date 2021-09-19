// SurveyForm shows a form for a user to add input
import _ from 'lodash'
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

    class SurveyForm extends Component {
        renderFields () {
            return _.map(formFields, field => {
                return <Field 
                            key={field.name}
                            component={SurveyField}
                            type='text'
                            name= {field.name}
                            label= {field.label}
                        />
            })
        }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                    Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    
    errors.recipients = validateEmails(values.recipients || '');
    _.each(formFields, ({ name }) => {
        if (!values[name]) {
          errors[name] = 'You must provide a value';
        }
      });

      return errors
    }
    
    export default reduxForm({
        validate,
        form: 'surveyForm',
        destroyOnUnmount: false
    })(SurveyForm);
    
    // if (!values.title) {
    //     errors.title = 'You must provide a title';
    // }
// return (
//     <div>
//         <Field 
//         type='text'
//         name='title'
//         label= 'Survey Title'
//         component= {SurveyField}
//         />
//         <Field 
//         type='text'
//         name='subject'
//         label= 'Subject Line'
//         component= {SurveyField}
//         />
//         <Field 
//         type='text'
//         name='body'
//         label= 'Email Body'
//         component= {SurveyField}
//         />
//         <Field 
//         type='text'
//         name='emails'
//         label= 'Recipiets List'
//         component= {SurveyField}
//         />
//     </div>
// )