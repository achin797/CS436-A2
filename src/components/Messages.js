import React, {Component} from "react";

class Messages extends Component {

    constructor(props) {
        super(props);

        this.createMessage = this.createMessage.bind(this);
    }

    createMessage(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        var messageEntries = this.props.entries;
        var listItems = messageEntries.map(this.createMessage);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default Messages;