import React from 'react';
import SocialLoginButtonProvider from 'react-social-login-buttons/lib/buttons/SocialLoginButtonProvider'

const defaults = {
    text: 'Login with Twitter',
    icon: 'twitter',
    iconFormat: () => `fa fa-twitter`,
    style: {background: "#1dcaff", justify:"center", align: "middle", padding:"5px"},
    activeStyle: {background: "#00aced"},
    onClick: () => window.location.href="http://twitter.com"
};

/** My Facebook login button. */
const MyTwitterLoginButton = (props) => {
    return <SocialLoginButtonProvider defaults={defaults} props={props}/>
};

export default MyTwitterLoginButton;
