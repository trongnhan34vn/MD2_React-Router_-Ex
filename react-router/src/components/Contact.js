import React from 'react'

export default function Contact() {
    return (
        <div>
            <section className="contact-us-section">
                <h3 className="contact-us-title">Contact Us</h3>
                <form className="contact-us-form" action="">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Example textarea
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                        />
                    </div>
                    <button className="btn btn-primary">Send Messages</button>
                </form>
            </section>

        </div>
    )
}
