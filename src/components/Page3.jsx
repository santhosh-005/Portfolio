import React from 'react';
import '../App.css'


function Page3() {

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = React.useState("");
  const [model, setModel] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.name.trim() != ""  && formData.email.trim() != ""  && formData.message.trim() != "" ){
    try {
      setModel(true)
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('send');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("failed");
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('failed');
    }
  }
  };

  const handleBack = () => {
    setStatus("");
    setModel(false);
  }


  return (
    <div id="page3">
      <div>
        <h3>
          Let's chat. <br />
          About tech, project and ideas.
        </h3>
        <p>
          You can connect with me on email, instagram or this form.
        </p>
      </div>
      <div className='form-div'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Enter your Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        { model && 
          <div className="notify-msg-div">
            {
              status == "" ?
              <>
                <h1 id='notify-symbol'>⏳</h1>
                <p id='notify-msg'>sending...</p> 
              </> :
              <> 
              {
                status ==  "send" ? 
                <>
                  <h1 id='notify-symbol'>✔️</h1> 
                  <p id='notify-msg'> Message send! <span onClick={handleBack}> back</span></p>
                </> :
                <>
                  <h1 id='notify-symbol'>⚠️</h1> 
                  <p id='notify-msg'> Something went wrong! <span onClick={handleBack}> back</span></p>
                </>
                
              }
              </>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default React.memo(Page3)
