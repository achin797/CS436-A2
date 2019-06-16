/*
Could not get it to re-render. Delete after asking TA how to do it
 */


import React, {Component} from "react";

class Detail extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        var detailText = this.props.dialogText;

        return (
            <div className="theDialog">
                <h1>
                    {detailText}
                </h1>
                <p>
                    {detailText}
                </p>
            </div>
        );
    }
}
export default Detail;