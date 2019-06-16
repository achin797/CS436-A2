/*
Started off the assignment with https://bit.ly/2Wr10yi as template
 */

import React, {Component} from "react";
import {connect} from "react-redux";
import Messages from "./Messages";
import "./MessageList.css";
import {addMessage, deleteMessage} from "../actions";

class MessageList extends Component {

    //TODO use different method for resolving 'this' keyword
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.props.addMessage(newItem);
            this._inputElement.value = "";
        }

        //doesn't immediately get logged
        console.log(this.props.items);

        e.preventDefault();
    }
    deleteMessage(key){
        var filteredItems = this.props.items.filter(function (item) {
            return (item.key !== key);
        });

        this.props.deleteMessage(filteredItems);
    }

    render() {
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


export default connect(mapStateToProps, { addMessage, deleteMessage })(MessageList);