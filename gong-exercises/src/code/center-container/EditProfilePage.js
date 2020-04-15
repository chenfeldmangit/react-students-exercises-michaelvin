import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'


class EditProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          bio: '',
          location:''
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(event){
        console.log(`Calling handle change with values ${event.target.name} ${event.target.value}`);
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state);
    }

    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleFieldChange}/>
                    {this.state.name !== '' ? "V" : "X"}
                    <label htmlFor="name">Bio:</label>
                    <textarea value={this.state.bio} name="bio" onChange={this.handleFieldChange}/>
                    {this.state.bio !== '' ? "V" : "X"}
                    <label htmlFor="name">Location:</label>
                    <input type="text" name="location" value={this.state.location} onChange={this.handleFieldChange}/>
                    {this.state.location !== '' ? "V" : "X"}
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default EditProfilePage;