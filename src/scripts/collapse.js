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
        <h1 className="border">Buyer's Details <span onClick={this.toggleTab}>Hide</span></h1>
        <table style={{display: this.state.toggle ? 'block' : 'none' }}>
            <tbody>
               <tr>
                    <th>Name:</th>
                    <td>Mr David Shepherd</td>
                </tr>

                <tr>
                    <th>Buying position:</th>
                    <td>Property to sell - 20 weeks on the market</td>
                </tr>
                <tr>
                    <th>Financial position:</th>
                    <td>Mortgage required - approved</td>
                </tr>

                <tr>
                     <th>Timescale:</th>
                     <td>Would like to move in 10 weeks - no chain</td>
                </tr>
            </tbody>
         </table>
        </div>
        );
    }
}

export default Collapse;
