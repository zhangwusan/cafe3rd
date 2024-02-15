import { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext();

// Create a context provider component
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    window.localStorage.setItem("isLogin", true);
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("isLogin");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to consume the context
// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
