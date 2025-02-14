export default function () {
    return (
        <>
        <div className="text">
            <h1>Get in Touch</h1>
            <p> We would love to hear from you! If you have any comments or
          suggestions about our website or our tours, please don t hesitate to
          get in touch. We are always looking for ways to improve and make your
          travel experience even better.</p>
        </div>
        
        <div className="form">
            <div className="text">
                <h4>Contact Us</h4>
            </div>
            <form>
                <div className="row">
                    <div className="information">
                        <label htmlFor="exampleFormControlInput1"form-label>First name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Input your first name here"/>
                    </div>
                    <div className="information">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Last name</label>
                        <input type="text"className="form-control" id="exampleFormControlInput2"placeholder="Input your Last Name in Here"/>
                    </div>
             </div>
             <div className="row">
            <div className="mb-4">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email"className="form-control"id="exampleFormControlInput1"placeholder="name@example.com"/>
              </div>
            </div>
            <div className="row">
            <div className="input-group flex-nowrap mb-4 ">
              <span className="input-group-text" id="addon-wrapping">+237</span>
              <input type="text"className="form-control"placeholder="Username"aria-label="Username"aria-describedby="addon-wrapping"/>
            </div>
          </div>
          <div className="row">
            <div className="mb-4">
              <label htmlFor="exampleFormControlTextarea1"className="form-label">Message</label>
              <textarea className="form-control"id="exampleFormControlTextarea1"rows={3}defaultValue={""}/>
            </div>
          </div>
          <div className="mb-4 row">
            <button type="submit" className="btn submit">submit</button>
          </div>    
            </form>
        </div>
        <div className="contact-info">
        <div className="box-info">
          <h3>Social media</h3>
          <div className="contact-icons">
            <div>
            <i className="fa-brands fa-facebook-f"/>
            </div>
            <div>
            <i className="fa-brands fa-twitter"/>
            </div>
            <div>
            <i className="fa-brands fa-instagram"/>
            </div>
            <div>
            <i className="fa-brands fa-linkedin-in"/>
            </div>
          </div>
        </div>
        <div className="box-info">
          <h3>Email & phone</h3>
          <div className="d-flex align-items-center justify-content-start icon">
            <span className="material-icons-sharp">phone_enabled</span>
            <span>+237 651831211</span>
          </div>
          <div className="d-flex icon">
            <span className="material-icons-sharp">email</span>
            <span>bbonteemma@gmail.com</span>
          </div>
        </div>
        <div className="box-info icon">
          <h3>Address</h3>
          <p>kk 600 st <br/>Kigali, Rwanda</p>
        </div>
      </div>
        </>
    )
}