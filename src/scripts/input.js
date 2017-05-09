import React from 'react';
import Cleave from 'cleave.js/dist/cleave-react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({input: '',
                        error: false});

        this.onChange = this.onChange.bind(this);
        this.showOffer = this.showOffer.bind(this);
    }

    onChange(e) {
            this.setState({error: false});
            this.setState({input: e.target.value});
    }

    showOffer() {
        if(this.state.input !== '') {
            this.setState({error: false});
            console.log('£' + this.state.input);
            alert('Your offer was £' + this.state.input);
        }

        else {
            this.setState({error: true});
        }
    }

    render() {
        return (
        <div>
        <h1>Enter an offer you would be willing to accept:</h1>
            <div className="row">
                <div className="col-md-6">
                <i className="fa fa-gbp" aria-hidden="true"></i>
                <Cleave
                className="input-field"
                style={{border: this.state.error ? '1px solid red' : '' }}
                value={this.state.input}
                options={{numeralThousandsGroupStyle: true, numeral: true}}
                onChange={this.onChange} />
                <h3 style={{display: this.state.error ? 'block' : 'none' }}>Please enter a value</h3>
                <button className="button-purple button-padding-fix">Add Comments</button>
                </div>
                <div className="col-md-6 text-right">
                <button className="button-blue button-padding-sm-spacing-fix" onClick={this.showOffer}>Submit offer</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Input;
