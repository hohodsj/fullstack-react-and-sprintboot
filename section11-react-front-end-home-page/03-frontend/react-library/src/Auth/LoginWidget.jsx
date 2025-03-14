import { Redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { SpinnerLoading } from "../layouts/Utils/SpinnerLoading";
import React from "react";
import OktaSignInWidget from "./OktaSignInWidget";


const LoginWidget = ({ config }) => {
    const {oktaAuth, authState} = useOktaAuth();

    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) => {
        console.log("error logging in", err);
    };

    if(!authState) {
        return (
            <SpinnerLoading />
        );
    }

    return authState.isAuthenticated ?
    <Redirect to={{ pathname: '/' }}/>
    :
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />;
};

export default LoginWidget;