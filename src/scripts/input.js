import React from 'react';
import Cleave from 'cleave.js/dist/cleave-react';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({input: ''});

        this.onChange = this.onChange.bind(this);
        this.showOffer = this.showOffer.bind(this);
    }

    onChange(e) {
            this.setState({input: e.target.value});
    }

    showOffer() {
        console.log('£' + this.state.input);
        alert('Your offer was £' + this.state.input);
    }

    render() {
        return (
        <div className="main__panel">
        <h1>Enter an offer you would be willing to accept:</h1>
            <Cleave
                value={this.state.input}
                options={{numeralThousandsGroupStyle: true, numeral: true}}
                onChange={this.onChange} />
                <button className="button-primary" onClick={this.showOffer}>Submit offer</button>
        </div>
        );
    }
}

export default Collapse;
