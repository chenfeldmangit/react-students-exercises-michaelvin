import React from 'react';
import './App.css';
import './stylesheets/TwitterStylesheet.css'

import gear from "./resources/gear.svg"


class RightContainer extends React.Component {

    render() {
        return (
            <div id="right-container">

                <div id="search">
                    <label>
                        <input id="search-input" type="text" name="search-twitter-box" placeholder="Search Twitter"/>
                    </label>
                </div>

                <div id="trends">
                    <div className="right-container-title">
                        <div className="right-container-title-text">Trends for you</div>
                        {/* <!--                <div><object class="svgs" data="myTwitter/resources/gear.svg"> </object></div>-->*/}
                        <div><img src={gear} alt="settings" className="menu-button-img"/></div>
                    </div>

                    <TrendObject/>
                    <TrendObject/>

                    <div className="right-container-title-text">
                        <a href="" rel="next" target="_blank">Show more</a>
                    </div>

                </div>

                <div id="follow">
                    <div className="right-container-title">
                        <div className="right-container-title-text">Who to follow</div>
                    </div>

                    <FollowObject src={"https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg"} user={"barack Obama"}/>
                    <FollowObject src={"https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg"} user={"barack Obama"}/>

                    <div style={{height: "10px"}}/>

                </div>
            </div>
        )
    }
}

class FollowObject extends React.Component {
    render() {
        return (
            <>
                <div className="follow-object">
                    <div className="follow-object-sub">
                        <div>
                            <img className="follow-object-img" alt="" src={this.props.src}/>
                            {/*<img className="follow-object-img" alt="" src="https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg"/>*/}
                        </div>
                        <div>
                            <strong>{this.props.user}</strong>
                        </div>
                    </div>
                    <div>
                        <button className="follow-button">Follow</button>
                    </div>
                </div>
            </>
        )
    }
}

class TrendObject extends React.Component {
    render() {
        return (
            <>
                <div className="trend-object">
                    a Trend
                </div>
            </>
        )
    }
}

export default RightContainer;