import React, { ReactNode, useContext, useState } from "react";
import { User } from "../types/User"

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const userContext = React.createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{children: ReactNode}> = ({ children })=> {
  const [user, setUser] = useState<User | null>(null);

  return (
    <userContext.Provider value={{ user, setUser }} >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = (): UserContextType => { 
  const context = useContext(userContext)

  if (context === null) {
    throw new Error('Make sure to use it inside the right provider')
  }

  return context
}