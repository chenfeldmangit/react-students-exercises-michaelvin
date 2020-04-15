import React from 'react';
import './App.css';
import './stylesheets/TwitterStylesheet.css'
import LeftContainer from './code/left-container/LeftContainer';
import CenterContainer from './code/center-container/CenterContainer';
import RightContainer from './code/right-container/RightContainer';
// import ProfilePage from "./code/center-container/ProfilePage";
// import TweetFeed from "./code/center-container/TweetFeed";

function App() {
    const profile = createProfile();
    return (
        <div className="App">
            <LeftContainer/>
            <CenterContainer profile={profile}/>
            {/*<TweetFeed shouldDisplay={true} profile={profile}/>*/}
            {/*<ProfilePage shouldDisplay={false} profile={profile}/>*/}
            <RightContainer/>
        </div>
    );
    
}

function createProfile() {
    let userProfile = localStorage.getItem("userProfile");
    if (userProfile == null) {
        localStorage.setItem("userProfile", JSON.stringify({
            name: "shmulikknoll",
            id: "@GuildHead",
            bio: "some bio",
            location: "Tel-Aviv",
            backgroundImgSrc: "../../resources/picture.jpg",
            profileImgSrc: "../../resources/shmul.webp"
        }));
    }
    return JSON.parse(localStorage.getItem("userProfile"));
}

// App.propTypes = {
//     profile: PropTypes.instanceOf(TweetObject).isRequired
// };

export default App;
