import React from "react";
import App from "./App";
import { Auth0Provider } from "../api/react-auth0-spa";
import config from "../auth_config.json";
import history from "../utils/history";


const SecureApp = () => {
   
    // A function that routes the user to the right place
    // after login
    const onRedirectCallback = appState => {
        history.push(
          appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
        );
    };

    return(
        <Auth0Provider
            domain={config.domain}
            client_id={config.clientId}
            redirect_uri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            <App />
        </Auth0Provider>
    );
};

export default SecureApp;