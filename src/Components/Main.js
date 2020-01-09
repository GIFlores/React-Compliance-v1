import React, {Component} from 'react';
import {Route,  Link} from  'react-router-dom';
import Header from './Header'

import Prospect from './Prospect'
import Payment from './Payment'
import Receipt from './Receipt'

class Main extends Component {

    constructor() {
        //state of components
        super()
        this.state = {loading: true}
    }

    componentDidMount() {
        // this.props.startLoadingPosts().then( () => {
        //     this.setState({loading:false})
        // } );
        // this.props.startLoadingComments();
    }
    
    render() {
        console.log(this.props);

        return (
            <div>
                <h1> <Link to="/">Compliance Template v1</Link> </h1>

                <Header/>

                <Route exact path="/" render={() => (
                    <Prospect {...this.props} />
                )}/>

                <Route exact path="/payment" render={() => (
                    <Payment {...this.props} />
                )}/>

                <Route exact path="/receipt" render={() => (
                    <Receipt {...this.props} />
                )}/>

            </div>
        )
    }
}

export default Main