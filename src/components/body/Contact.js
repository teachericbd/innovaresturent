import React, { Component } from "react";
import { Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button } from "reactstrap";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            phone: "",
            subject: "",
            contactType: "",
            msg: "",
            agrement: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.frmSubmit = this.frmSubmit.bind(this);
    }
    handleInput = event => {
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        let name = event.target.name;
        this.setState({
            [name] : value
        });
        console.log(this.state);
    }

    frmSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Card className="my-5">
                            <CardHeader className="text-center">
                                <h4>
                                    Send Your Feedback
                                </h4>

                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={this.frmSubmit}>
                                    <FormGroup>
                                        <Label for="username">Your Name</Label>
                                        <Input
                                            type="text"
                                            name="username"
                                            placeholder="Your Name"
                                            id="username"
                                            value={this.state.username}
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Your Email Address</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            id="email"
                                            value={this.state.email}
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="phone">Your Phone Number</Label>
                                        <Input
                                            type="tel"
                                            name="phone"
                                            placeholder="Your phone number"
                                            id="phone"
                                            value={this.state.phone}
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="subject">Subject</Label>
                                        <Input
                                            type="text"
                                            name="subject"
                                            placeholder="Your Subject"
                                            id="subject"
                                            value={this.state.subject}
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="contactType">Contact Type</Label>
                                        <Input
                                            type="select"
                                            name="contactType"
                                            id="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInput}
                                        >
                                            <option value="">Select</option>
                                            <option value="Email">Email</option>
                                            <option value="Phone">Phone</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="msg">Your Message</Label>
                                        <Input
                                            type="textarea"
                                            name="msg"
                                            placeholder="Your Message"
                                            id="msg"
                                            value={this.state.msg}
                                            onChange={this.handleInput}
                                        />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input
                                            type="checkbox"
                                            id="agrement"
                                            name="agrement"
                                            checked={this.state.agrement}
                                            onChange={this.handleInput}
                                        />
                                        <Label check for="agrement">
                                            I agree with your all trams and conditions
                                        </Label>
                                    </FormGroup>
                                    <FormGroup className="text-center mt-5">
                                        <Button type="submit" className="btn-success">Send feedback</Button>
                                    </FormGroup>

                                </Form>
                            </CardBody>
                        </Card>

                    </div>
                    <div className="col-md-6 mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.2527277260488!2d91.12346761443519!3d22.635616536360253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754ad4b93e01151%3A0x21b65fdbe8071a26!2sINNOVA%20Computers%20BD!5e1!3m2!1sbn!2sbd!4v1681022643396!5m2!1sbn!2sbd" width="600" height="750" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        )
    }

}
export default Contact;