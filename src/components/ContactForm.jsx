import React from "react";
import './../styles/Contact.css';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <div className="ContactForm">
                <form id="form" class="topBefore" onSubmit={this.handleSubmit.bind(this)} method="POST">

                    <input id="name" type="text" placeholder="NAME" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    <input id="email" type="text" placeholder="E-MAIL" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    <textarea id="message" type="text" placeholder="MESSAGE" value={this.state.message} onChange={this.onMessageChange.bind(this)} ></textarea>
                    <input id="submit" type="submit" value="SEND!" />

                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        fetch('/', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
}

export default ContactForm;