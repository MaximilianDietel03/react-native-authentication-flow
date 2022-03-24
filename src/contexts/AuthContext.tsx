import React, { useEffect, useReducer, createContext, ReactNode } from 'react';

const initialState = {
  token: null,
  isInitialized: false,
  isSignOut: false,
};

const reducer = (prevState: any, action: any) => {
  switch (action.type) {
    case 'INITIALISE':
      return {
        ...prevState,
        token: action.token,
        isInitialized: true,
        isSignOut: false
      };
    case 'LOGIN':
      return {
        ...prevState,
        token: action.token,
        isSignOut: false
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        token: null,
        isSignOut: true
      };
  }
};

const AuthContext = createContext({
  ...initialState,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  logOut: () => Promise.resolve(),
});

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Try to fetch the token from the local place you safe it
    const fetch = async () => {
      let token;

      try {
        // demo fetch
        await new Promise(resolve => setTimeout(resolve, 1000));
        // fetch successful
        token = 'demoToken';
      } catch (e) {
        // Handle error
      }

      // After restoring the token, we may need to validate it in production apps
      // This will switch to the App screen or Auth screen and the loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'INITIALISE', token: token });
    }
    fetch();
  }, [dispatch]);

  const signIn = async() => {
    // Your signin logic
    // You would probably safe the token somewhere locally here
    // demo fetch
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch({ type: 'LOGIN', token: 'demoToken' });
  }

  const signUp = async() => {
    // Your signup logic
    // You would probably safe the token somewhere locally here
    // demo fetch
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch({ type: 'LOGIN', token: 'demoToken' });
  }

  const logOut = async() => {
    // Your signout logic
    // You would probably delete the somewhere locally stored token here
    // demo fetch
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch({ type: 'SIGN_OUT' });
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };