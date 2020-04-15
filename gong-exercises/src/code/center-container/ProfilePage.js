import React from 'react';
import '../../App.css';
import '../../stylesheets/TwitterStylesheet.css'

import profileBackground from "../../resources/picture.jpg"
import profileImg from "../../resources/shmul.webp"
import PropTypes from "prop-types";

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        if (!this.props.shouldDisplay) {
            this.state = {display: "none"};
        } else {
            this.state = {display: "flex"}
        }
    }

    render() {
        return (
            <div id="profile-page" style={{display: this.state.display}}>
                <div className="profile-page-upper-line">
                    <div>
                        {/*<button className="return-button" onClick={returnToTweetFeed}>*/}
                        <button className="return-button">
                            <object className="svgs" data={require("../../resources/back.svg")}/>
                        </button>
                    </div>
                    <div style={{margin: "0 0 0 0.5em"}}>
                        <span className="profile-name">{this.props.profile.name}</span>
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
                        <button className="edit-profile-button">Edit profile</button>
                        {/*<button className="edit-profile-button" onClick="editProfile()">Edit profile</button>*/}
                    </div>
                </div>
                <div>
                    <span className="profile-name">{this.props.profile.name}</span><br/>
                    <span id="profile-id">{this.props.profile.id}</span><br/>
                    <span id="profile-bio">{this.props.profile.bio}</span><br/>
                    <object id="show-profile-location-pin" className="svgs" data={require("../../resources/pin.svg")}/>
                    <span id="profile-location">{this.props.profile.location}</span>
                </div>
            </div>
        )
    }
}

ProfilePage.propTypes = {
    shouldDisplay: PropTypes.bool.isRequired
};

ProfilePage.defaultProps = {
    shouldDisplay: false
};

export default ProfilePage;