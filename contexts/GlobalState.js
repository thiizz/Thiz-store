import { useState } from 'react'
import { createContext, useContext, useEffect } from 'react'
import { getData } from '../utils/fetchData'


export const DataContext = createContext()


export const DataProvider = ({ children }) => {
	const [auth, setAuth] = useState({})

	useEffect(() => {
		const firstLogin = localStorage.getItem("firstLogin");
		if (firstLogin) {
			getData('auth/accessToken').then(res => {
				if (res.err) return localStorage.removeItem("firstLogin")
				setAuth({ token: res.access_token, user: res.user })
			})
		}
	}, [])

	const state = {
		auth,
		setAuth
	}

	return (
		<DataContext.Provider value={state}>
			{children}
		</DataContext.Provider>
	)
}

export function useUser() {
	const context = useContext(DataContext)
	const {
		auth,
		setAuth
	} = context
	return {
		auth,
		setAuth
	}
}