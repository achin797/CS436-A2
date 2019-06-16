import React, {Component} from "react";

//import Detail from "./Detail";

class Messages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dialogText: ''
        };

        this.createMessage = this.createMessage.bind(this);
        this.updateDialog = this.updateDialog.bind(this);
    }

    createMessage(item) {
        return (<div className={"theMessage"}>
            <li onClick={() => this.updateDialog(item.text)} key={item.key}>{item.text}
                <button onClick={e => this.deleteMessage(item.key, item.text, e)} className={"deleteButton"}>X</button>
            </li>
        </div>);
    }

    deleteMessage(key, text, e) {
        this.props.delete(key);
        if (this.state.dialogText === text) {
            this.updateDialog("")
        }
        e.stopPropagation();
    }


    updateDialog(text) {
        this.setState({
            dialogText: text
        });
    }

    render() {
        var messageEntries = this.props.entries;
        var listItems = messageEntries.map(this.createMessage);

        return (
            <div>
                <ul className="theList">
                    {listItems}
                </ul>
                <Detail text={this.state.dialogText} onChange={this.updateDialog}/>
            </div>
        );
    }
}


// Used https://stackoverflow.com/questions/51587598/how-to-re-render-in-a-react-functional-component-according-to-a-onchange
// Ask the TA why this works.

function Detail({text, onChange}) {
    return (
        <section onChange={onChange} className="theDialog">
            <h1>
                {text}
            </h1>
            <article>
                {text}
            </article>
        </section>
    );
}

export default Messages;