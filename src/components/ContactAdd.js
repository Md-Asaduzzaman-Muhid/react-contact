import React from "react";

class ContactAdd extends React.Component{
    render(){
        return(
            <section className="contact-add">
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default ContactAdd;