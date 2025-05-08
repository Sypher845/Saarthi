import React,{useState} from "react";

export const UserDataContext = React.createContext();

function UserContext({children}) {
    const [user, setUser] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    })
  return (
    <>
        <UserDataContext.Provider value={{user, setUser}}>
            {children}
        </UserDataContext.Provider>
    </>
  );
}

export default UserContext;
