import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

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
