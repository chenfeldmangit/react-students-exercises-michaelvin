import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'

import FormInput from "./FormInput";
import PropTypes from "prop-types";

class EditProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: "", bio: "", location: ""};
    }

    render() {
        return (
            <div id="edit-profile-page" style={{display: this.props.shouldDisplay ? "block" : "none"}}>
                <dialog open id="edit-profile-dialog">
                    <div id="edit-profile-control">
                        <div id="edit-profile-control-sub">
                            <div>
                                <button className="close-button" onClick={this.closeEditProfilePage}>
                                    <object className="svgs" title={"close-button-img"} data={require('../../resources/close.svg')}/>
                                </button>
                            </div>
                            <div style={{margin: "0 0 0 2em"}}>
                                <strong>Edit profile</strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input className="blue-style-button" type="button" value="Save" onClick={this.updateProfile}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img id="edit-profile-profile-background" alt="profile-background" src={require('../../resources/picture.jpg')}/>
                    </div>
                    <div>
                        <img id="edit-profile-profile-img" alt="profile-img" src={require('../../resources/shmul.webp')}/>
                    </div>
                    <div>
                        <form onSubmit={this.updateProfile}>

                            <FormInput id="name" maxLength={50} label="Name" value={this.props.profile.name} onChange={this.handleChange}/><br/>
                            <FormInput id="bio" maxLength={250} label="Bio" value={this.props.profile.bio} onChange={this.handleChange}/><br/>
                            <FormInput id="location" maxLength={100} label="Location" value={this.props.profile.location} onChange={this.handleChange}/>

                        </form>

                    </div>
                </dialog>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    closeEditProfilePage = () => {
        this.props.closeEditProfilePageFunction();
    };

    updateProfile = () => {
        this.props.updateProfileFunction(this.state.name, this.state.bio, this.state.location);
    };

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };
}

export default EditProfilePage;

EditProfilePage.propTypes = {
    closeEditProfilePageFunction: PropTypes.func.isRequired,
    updateProfileFunction: PropTypes.func.isRequired
};