import React from 'react';
import SocialLoginButtonProvider from 'react-social-login-buttons/lib/buttons/SocialLoginButtonProvider'

const defaults = {
    text: 'Login with Facebook',
    icon: 'facebook',
    iconFormat: () => `fa fa-xs fa-facebook`,
    style: {background: "#3b5998", justify:"center", align: "middle", padding:"5px"},
    activeStyle: {background: "#293e69"},
    onClick: () => window.location.href="http://facebook.com"
};

/** My Facebook login button. */
const MyFacebookLoginButton = (props) => {
    return <SocialLoginButtonProvider defaults={defaults} props={props}/>
};

export default MyFacebookLoginButton;
