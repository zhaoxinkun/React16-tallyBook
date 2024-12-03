import React, {Component, Fragment} from 'react';

import log from '../logo.svg';



class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="App-header">
                    <div className="row mb-5 justify-content-center">
                        <img src={log} alt="log unable" title="log able" className='App-logo'/>
                    </div>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <div style={{textAlign: "center"}}>
                        Hello React
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Home;
