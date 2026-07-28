import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

// Wraps the app with Auth0Provider, but plugs Auth0's redirect callback into
// react-router so that after login/signup the user lands back on whichever
// page they were trying to reach (e.g. a specific tour's booking page)
// instead of always being sent to "/".
function Auth0ProviderWithNavigate({ children }) {
  const navigate = useNavigate();

  if (!domain || !clientId) {
    console.error(
      'Missing Auth0 configuration. Make sure VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID are set in your .env file.'
    );
    return children;
  }

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;
