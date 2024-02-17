'use client'

import { createContext } from "react";

export const fakebookContext = createContext({})
const ContextApi = ({children}) => {
    const valur = {
        user: 'Raja'
    }
    return (
        <fakebookContext.Provider value={valur}>{children}</fakebookContext.Provider>
    );
};

export default ContextApi;