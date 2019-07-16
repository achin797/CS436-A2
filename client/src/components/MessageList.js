/*
Started off the assignment with https://bit.ly/2Wr10yi as template
 */

import React, {Component} from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import "./MessageList.css";
import {addMessage, postMessage, deleteMessageExpress} from "../actions";

class MessageList extends Component {

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then((res) => {
                for (var i = 0; i < res.length; i++) {
                    //THIS IS BAD! PLEASE CHANGE IT ACHIN!
                    if (res[i]) {
                        this.props.addMessage(res[i]);
                    }
                }
                this.setState({isLoading: false})
            })
            .catch(err => console.log(err));

    }

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend', {method: 'GET'});
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.state = {isLoading: true};
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            this.setState({isLoading: true});
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.props.postMessage(newItem).then(() => {
                    this.setState({isLoading: false})
                }
            );
            this._inputElement.value = "";
        }

        //doesn't immediately get logged
        console.log(this.props.items);

        e.preventDefault();
    }

    deleteMessage(key) {
        this.setState({isLoading: true});
        this.props.deleteMessageExpress(key).then(() => {
            this.setState({isLoading: false});
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="messageListMain">
                    <div className="loader">
                        <div className="loader-icon"></div>
                        <div className="loader-text">the server is super slow</div>
                    </div>
                </div>
            )
        }

        return (
            <div className="messageListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}>
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <Messages entries={this.props.items}
                          delete={this.deleteMessage}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => { //name is by convention
    //state has entire state of app!!
    return {items: state.items}; //now it will appear as props
};


export default connect(mapStateToProps, {addMessage, postMessage, deleteMessageExpress})(MessageList);