import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserLoginFetchData } from '../../Actions/actions'
import * as Constants from '../../utils/Constants';
import config from '../../utils/config.json';
import { ToastsContainer, ToastsStore } from 'react-toasts'
import HeaderBar from '../HeaderBar';


class Home extends Component {

    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: '' };
    }

    render() {

        return  (

      <HeaderBar>
            <div className="container-fluid">
                <div className="container jumbotron vertical-cente">
                    <h6><b>Let's make it as concrete a posssible and,as the saying goes,a saaS pricing page is worth a thousand
                            words.</b></h6>
                            <br/>
                    <div className="container-fluid">
                        <div className="row">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th></th>
                                        {/* style="color: #0D86FF" */}
                                        <th><b>Developer</b><br/><h4 className="h-color" >$7/Month</h4>Get started with Powerful <br/>API and site monitoring</th>
                                        <th><b>Developer</b><br/><h4 className="h-color" >$7/Month</h4>Get started with Powerful <br/>API and site monitoring</th>
                                        <th><b>Developer</b><br/><h4 className="h-color"> $7/Month</h4>Get started with Powerful <br/>API and site monitoring</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b>API checks</b></td>
                                        <td>5</td>
                                        <td>5</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td><b>Browser Checks</b></td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><b>Public DashBoard</b></td>
                                        <td>1 min/10min</td>
                                        <td>1 min/10min</td>
                                        <td>1 min/10min</td>
                                    </tr>
                                    <tr>
                                        <td><b>Data center Locations</b></td>
                                        <td>1</td>
                                        <td>1</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><b>SSL Monitoring</b></td>
                                        <td>x</td>
                                        <td>x</td>
                                        <td>x</td>
                                    </tr>
                                    <tr>
                                        <td><b>Email,Slack & webhooks</b></td>
                                        <td>16</td>
                                        <td>16</td>
                                        <td>16</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
            </HeaderBar>

        )

    }
}
function mapStateToProps(state, actions) {
    if (state.fetchLogin && state.fetchLogin.Status) {
        return { registerResponse: state.fetchLogin }


    }
    else {

        return {}


    }

 
}

export default connect(mapStateToProps)(Home);