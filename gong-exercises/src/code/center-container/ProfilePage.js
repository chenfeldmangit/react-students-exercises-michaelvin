import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'

import profileBackground from "../../resources/picture.jpg"
import profileImg from "../../resources/shmul.webp"
import PropTypes from "prop-types";
import EditProfilePage from "./EditProfilePage";


class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { profile: this.props.profile };
    }

    render() {
        return (
            <>

                <div id="profile-page" style={{display: this.props.shouldDisplay ? "flex" : "none"}}>
                    <div className="profile-page-upper-line">
                        <div>
                            <button className="return-button" onClick={this.props.returnToTweetFeedFunction}>
                                <object className="svgs" data={require("../../resources/back.svg")} title={"return-button"}/>
                            </button>
                        </div>
                        <div style={{margin: "0 0 0 0.5em"}}>
                            <span className="profile-name">{this.state.profile.name}</span>
                        </div>
                    </div>
                    <div>
                        <img id="profile-background" src={profileBackground} alt="profile-background"/>
                    </div>
                    <div className="profile-page-sub">
                        <div>
                            <img id="profile-img" src={profileImg} alt="profile-img"/>
                        </div>
                        <div>
                            <button className="edit-profile-button" onClick={this.openEditProfileDialog}>Edit profile</button>
                        </div>
                    </div>
                    <div>
                        <span className="profile-name">{this.state.profile.name}</span><br/>
                        <span id="profile-id">{this.state.profile.id}</span><br/>
                        <span id="profile-bio">{this.state.profile.bio}</span><br/>
                        <object id="profile-bio-location-pin" className="svgs" data={require("../../resources/pin.svg")} title={"profile-bio-location-pin"}/>
                        <span id="profile-location">{this.state.profile.location}</span>
                    </div>
                </div>

                <EditProfilePage shouldDisplay={this.state.shouldDisplayEditProfilePage} updateProfileFunction={this.updateProfile} closeEditProfilePageFunction={this.closeEditProfileDialog} profile={this.state.profile}/>

                </>
        )
    }

    updateProfile= (name, bio, location) => {
        let userProfile = JSON.parse(localStorage.getItem("userProfile"));
        userProfile.name = name;
        userProfile.id = this.state.profile.id;
        userProfile.bio = bio;
        userProfile.location = location;
        userProfile.profileImgSrc = this.state.profile.profileImgSrc;
        userProfile.backgroundImgSrc = this.state.profile.backgroundImgSrc;
        localStorage.setItem("userProfile", JSON.stringify(userProfile));

        this.setState({["profile"]: userProfile});

        this.closeEditProfileDialog();
    };

    openEditProfileDialog = () => {
        this.setState({["shouldDisplayEditProfilePage"]: true})
    };

    closeEditProfileDialog = () => {
        this.setState({["shouldDisplayEditProfilePage"]: false})
    };
}

export default ProfilePage;

ProfilePage.propTypes = {
    shouldDisplay: PropTypes.bool.isRequired,
    returnToTweetFeedFunction: PropTypes.func.isRequired
};

ProfilePage.defaultProps = {
    shouldDisplay: false
};