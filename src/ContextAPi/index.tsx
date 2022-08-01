import { createContext, FC, useState } from "react";

export const CurrentUserContext = createContext<any>(null);

export const CurrentUserProvider: any = ({ children }: any) => {
    const [userData, setUserData] = useState<any>("hello from context")
    const values = {
        userData,
        setUserData
    } 
    return <CurrentUserContext.Provider value={values}>{ children }</CurrentUserContext.Provider>
}
  