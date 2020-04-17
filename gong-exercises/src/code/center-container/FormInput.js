import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'
import PropTypes from "prop-types";

class FormInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {input: ""};
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label><br/>
                {/*<textarea className="edit-profile-input" id={this.props.id} maxLength={this.props.maxLength} name="input-tweet-box" cols="50" placeholder={this.props.value} onInput={this.showNumberOfCharactersInserted} onChange={this.props.onChange}/><br/>*/}
                <input type="text" className="edit-profile-input" id={this.props.id} onInput={this.showNumberOfCharactersInserted} onChange={this.props.onChange} maxLength={this.props.maxLength} placeholder={this.props.value} size={60}/><br/>
                <label className="edit-profile-input-char-count">{this.state.input.length + "/" + this.props.maxLength}</label>
            </div>
        )
    }

    showNumberOfCharactersInserted = (event) => {
        this.setState({input: event.target.value});
    };

}

export default FormInput;

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    maxLength: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};