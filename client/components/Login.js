import React, { PropTypes as T } from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import AuthService from '../utils/AuthService';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const { auth } = this.props;

        return (
            <div style={{textAlign: 'center'}}>
                <h2>Login</h2>
                <ButtonToolbar style={{display:'inline-block'}}>
                    <Button bsStyle="primary" onClick={this.props.route.auth.login.bind(this)}>Login</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Login;