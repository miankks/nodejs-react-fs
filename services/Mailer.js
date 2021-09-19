const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');
const sgMail = require('@sendgrid/mail');

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    // sgMail.setApiKey(keys.sendGridKey);
    // const msg = {
    //   to: 'techbilal85@gmail.com',
    //   from: 'miankks85@gmail.com',
    //   subject: 'Hello',
    //   text: 'Hello from',
    //   html: '<h1>Hello from sendgrip</h1>'
    // }

    // sgMail.send(msg).then(response => console.log('Email sent ...')).catch((error) => console.log(error.message));
   
    // sgMail.setApiKey(keys.sendGridKey);
    // const formattedRecipients = recipients.map(({email}) => email);
    // const msg = {
    //   to: formattedRecipients,
    //   from: 'someone@gmail.com',
    //   subject: subject,
    //   html: content,
    // };
    // return await sgMail.send(msg);

    // this.sgApi = sendgrid(keys.sendGridKey);
    this.sgApi = sgMail.setApiKey(keys.sendGridKey);
    this.from_email = new helper.Email('miankks85@gmail.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });
    try{
      const response = await this.sgApi.API(request);
      return response;
    } catch (err) {
      res.status(425).send(err);
    }
  }
}

module.exports = Mailer;
