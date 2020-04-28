import React, { createContext, useState } from 'react'

export const NameContext = createContext()

const NameProvider = ({children}) => {
    const [name, setName] = useState('Prateek')
    const valueObject = {
        name,
        setName
    }
    return (
        <NameContext.Provider value={valueObject}>
          {children}
        </NameContext.Provider>
    )
}

export default NameProvider