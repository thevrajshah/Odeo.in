import { createContext, useEffect, useState } from 'react';
import Axios from 'axios';
// import useAuth from './hooks/useAuth';

// Context
const Context = createContext({});
export default Context;

// Provider
export const Provider = ({ children }) => {
	const [loginShow, setLoginShow] = useState(false);
	const [pswdModal, setPswdModal] = useState(false);
	const [data, setData] = useState({ loading: true, user: null });
	const [alerts, setAlerts] = useState([]);

	useEffect(() => {
		const getUser = async () => {
			Axios.get('/user')
				.then((r) => {
					localStorage.setItem(
						'auth-token',
						r.headers.authorization.split(' ')[1]
					);
					setData({ ...data, user: r.data.data });
				})
				.catch(()=>{console.warn('No User')})
				.finally(() => setData((data) => ({ ...data, loading: false })));
		};
		getUser();
	}, []);

	return (
		<Context.Provider
			value={{
				loginShow,
				setLoginShow,
				loading: data.loading,
				user: data.user,
				pswdModal,
				setPswdModal,
			}}
		>
			{children}
		</Context.Provider>
	);
};
