import React, { Component } from 'react';
import 'styles/css/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            twitter_followers : 957,
            instagram_followers : 749
        };
    }
    
    increaseTFollowers() {
        this.setState(
            {twitter_followers: this.state.twitter_followers + 1
            }
        );

        document.getElementById("button1").style.display = "none";
        document.getElementById("button_following1").style.display = "inline";
    }

    increaseIFollowers() {
        this.setState(
            {instagram_followers: this.state.instagram_followers + 1
            }
        );
        document.getElementById("button2").style.display = "none";
        document.getElementById("button_following2").style.display = "inline";
    }

    decreaseTFollowers() {
        this.setState(
            {twitter_followers: this.state.twitter_followers - 1}
        );
        document.getElementById("button_following1").style.display = "none";
        document.getElementById("button1").style.display = "inline";
    }

    decreaseIFollowers() {
        this.setState(
            {instagram_followers: this.state.instagram_followers - 1}
        );
        document.getElementById("button_following2").style.display = "none";
        document.getElementById("button2").style.display = "inline";
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div id="profpic">
                        <img src={require("images/cutecat.jpg")} />
                    </div>
                    <div id="profdesc">
                        <h1>Romeow</h1>
                        <p>Hello, human. Others tell me that I'm cute and all sort of stuff but I consider myself as just a regular cat. Regular, but fabulous.</p>
                    </div>
                </div>
                <div id="social">
                    <div id="twitter">
                        <i className="fa fa-twitter fa-2x fa-fw"></i>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Following</th>
                                    <th>Followers</th>
                                </tr>
                                <tr>
                                    <td>841</td>
                                    <td>{this.state.twitter_followers}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="button" id="button1" onClick={this.increaseTFollowers.bind(this)}>Follow</button>
                        <button className="button" id="button_following1" onClick={this.decreaseTFollowers.bind(this)}><span id="following">Following</span><span id="unfollow">Unfollow</span></button>
                    </div>
                    <div id="instagram">
                        <i className="fa fa-instagram fa-2x fa-fw"></i>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Following</th>
                                    <th>Followers</th>
                                </tr>
                                <tr>
                                    <td>545</td>
                                    <td>{this.state.instagram_followers}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="button" id="button2" onClick={this.increaseIFollowers.bind(this)}>Follow</button>
                        <button className="button" id="button_following2" onClick={this.decreaseIFollowers.bind(this)}><span id="following">Following</span><span id="unfollow">Unfollow</span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
