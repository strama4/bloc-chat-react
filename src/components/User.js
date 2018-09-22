import React, {Component} from 'react';

class User extends Component {
    signIn = () => {
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup(provider).then((result) => {
            const user = result.user;
            this.props.setUser(user);
        });
    }

    signOut = () => {
        this.props.firebase.auth().signOut().then(() => {
            this.props.setUser({username: 'Guest',
                                displayName: 'Guest'});
        });
        
    }

    // compountDidMount = () => {
    //     this.props.firebase.auth().onAuthStateChanged( user => {
    //         if (user) {
    //             this.props.setUser(user);
    //         } else {
    //             this.props.setUser('Guest');
    //         }
    //     });
    // }

    render() {        
        return (
            <div>
                <button className="mdc-button" onClick={this.props.user.username === 'Guest' ? this.signIn : this.signOut}>{this.props.user.username === 'Guest' ? "Sign In" : "Sign Out"}</button>               
                <h3>You are signed in as {this.props.user.username === 'Guest' ? "Guest" : this.props.user.displayName}.</h3>
            </div>
            
        );
    }
}

export default User;