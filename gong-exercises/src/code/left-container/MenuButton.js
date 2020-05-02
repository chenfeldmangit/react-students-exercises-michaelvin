import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class MenuButton extends React.Component {

    showNumberOfNotifications = () => {
        return (
            this.props.notificationsList !== undefined && this.props.notificationsList.length > 0
                ? <label className="menu-labels">({this.props.notificationsList.length})</label>
                : <label/>
        )
    };

    render() {
        return (
            <>
                <button className="menu-button" onClick={this.props.onClick}>
                    {this.props.id === "" ? <img className="menu-button-img" src={this.props.src} alt={this.props.type}/>
                    : <img className="menu-button-img" id={this.props.id} src={this.props.src} alt={this.props.type}/>}
                    {/*<img className="menu-button-img" src={this.props.src} alt={this.props.content}/>*/}
                    {/*<object className="menu-button-img" data="../public/resources/home.svg"></object>*/}
                    <label className="menu-labels">{this.props.type}</label>{this.props.type === 'Notifications' && this.showNumberOfNotifications()}
                </button>
            </>
        )
    }
}

MenuButton.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string
};

MenuButton.defaultProps = {
    id: ""
};

const mapStateToProps = (store) => {
    return {
        notificationsList: [...store.notifications]
    };
};

export default connect(mapStateToProps)(MenuButton);
