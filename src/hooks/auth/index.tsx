import React, {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

interface User {
  name: string;
  employe: boolean;
}

interface AuthContext {
  user: User;
  signIn({ name, employe }: User): void;
  signOut(): void;
  isEmploye: boolean;
  loading: boolean;
}
const AuthContext = createContext({} as AuthContext);

function useAuth(): AuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Context not provider');
  }

  return context;
}

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isEmploye, setIsEmploye] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading) setLoading(false);
  }, [loading]);

  const signIn = useCallback(({ name, employe }: User): void => {
    setUser({ name, employe });
    setIsEmploye(employe);
  }, []);

  const signOut = useCallback((): void => {
    setUser(null);
    setIsEmploye(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
        isEmploye,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useContext, useAuth };
