import React from 'react';
import PropTypes from "prop-types";


class RightContainer extends React.Component {

    render() {
        return (
            <div id="right-container">

                <div id="logout">
                    <button id="logout-button" onClick={this.props.logOutFromTwitter}>Log Out</button>
                </div>

                <div id="search">
                    <label>
                        <input id="search-input" type="text" name="search-twitter-box" placeholder="Search Twitter"/>
                    </label>
                </div>

                <div id="trends">
                    <div className="right-container-title">
                        <div className="right-container-title-text">Trends for you</div>
                        {/* <!--                <div><object class="svgs" data="myTwitter/resources/gear.svg"> </object></div>-->*/}
                        <div><img src={require("../../resources/gear.svg")} alt="settings" className="menu-button-img"/></div>
                    </div>

                    <TrendObject/>
                    <TrendObject/>

                    <div className="right-container-title-text">
                        <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">Show more</a>
                    </div>

                </div>

                <div id="follow">
                    <div className="right-container-title">
                        <div className="right-container-title-text">Who to follow</div>
                    </div>

                    <FollowObject src={"https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg"} user={"Barack Obama"} id={"@BarackObama"}/>
                    <FollowObject src={"https://pbs.twimg.com/profile_images/664849888925065217/tVaCCUG-_400x400.jpg"} user={"Pierre Hermé Paris"} id={"@PierreHerme"}/>

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
                            <img className="follow-object-img" alt={this.props.src} src={this.props.src}/>
                            {/*<img className="follow-object-img" alt={this.props.src} src={this.props.src}/>*/}
                        </div>
                        <div>
                            <strong>{this.props.user}</strong><br/>{this.props.id}
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

RightContainer.propTypes = {
    logOutFromTwitter: PropTypes.func.isRequired
};

export default RightContainer;