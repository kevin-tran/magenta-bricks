import React from 'react';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({toggle: true});
        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab() {
        this.setState({toggle: !this.state.toggle});
    }

    render() {
        return (
        <div className="main__panel">
        <h1 className="border">Buyer's Details <small  onClick={this.toggleTab}>Hide <i className={"fa fa-angle-" + (this.state.toggle ? 'down' : 'up')} aria-hidden="true"></i></small></h1>
        <table style={{display: this.state.toggle ? 'block' : 'none' }}>
            <tbody>
               <tr>
                    <td>Name:</td>
                    <td>Mr David Shepherd</td>
                </tr>

                <tr>
                    <td>Buying position:</td>
                    <td>Property to sell - 20 weeks on the market</td>
                </tr>
                <tr>
                    <td>Financial position:</td>
                    <td>Mortgage required - approved</td>
                </tr>

                <tr>
                     <td>Timescale:</td>
                     <td>Would like to move in 10 weeks - no chain</td>
                </tr>
            </tbody>
         </table>
        </div>
        );
    }
}

export default Collapse;
