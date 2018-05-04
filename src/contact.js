import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  componentDidMount() {}

  render() {
    return (<div>
      <div id='contact-section'>

        <form className='contact-form-container' autocomplete="on" target="_blank" action="mailto:johnnybareket@gmail.com" method="post" enctype="text/plain">
          <br/>
          <div>Want to work together? Like what you see? Let me know!</div><br/>

          <input type='text' name='FullName' placeholder='Full Name' autocomplete='full-name'></input>
          <br/>
          <input type='text' name='Email' placeholder='Email Address' autocomplete='email'></input>
          <br/>
          <input type='text' name='Subject' placeholder='Subject' autocomplete='subject' ></input>
          <br/>
          <textarea id='text-area-contact' placeholder='Feedback goes here'></textarea>
          <input className='click-btn' type='submit' name='submit' value='Submit' id='button' autocomplete='submit'></input>
        </form>
      </div>
      <div className='footer'>© Jonathan Bareket 2018 - This website was built with React. Follow me on:
        <a href='https://github.com/Johnnybar'>GitHub</a>/<a href='https://www.linkedin.com/in/jonathan-bareket/'>LinkedIn</a>
      </div>

    </div>)
  }
}
