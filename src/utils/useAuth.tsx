import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  shortTermToken: string | null;
  setShortTermToken: (shortTermToken: string | null) => void;
}

interface AuthContextType {
  shortTermToken: string | null;
  setShortTermToken: (shortTermToken: string | null) => void;
}

interface AuthProviderProps {
  children?: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  shortTermToken: null,
  setShortTermToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [shortTermToken, setShortTermToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ shortTermToken, setShortTermToken }}>
      {children}
    </AuthContext.Provider>
  );
};
