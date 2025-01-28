import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { httpGetUserData } from "../services/login";

const TOKEN_KEY = 'GKToken';
const USER_KEY = 'GKKey';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [loadingGlobal, setLoadingGlobal] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return window.localStorage.getItem(TOKEN_KEY) ? true : false;
    });
    const [session, setSession] = useState(null);

    const login = useCallback((token, id_usuario) => {
        window.localStorage.setItem(TOKEN_KEY, token);
        window.localStorage.setItem(USER_KEY, id_usuario);
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.removeItem(USER_KEY); // Agregado para limpiar el usuario
        setIsAuthenticated(false);
    }, []);




    useEffect(() => {
        if (isAuthenticated) {
            const tokenEncrypt = window.localStorage.getItem(TOKEN_KEY);
            const userEncrypt = window.localStorage.getItem(USER_KEY);
            httpGetUserData({ token: tokenEncrypt, usuario: userEncrypt }).then((res) => {
                if (!res.isVerifyToken && res.err) {
                    logout();
                } else {
                    setSession(res);
                }
            }).finally(() => setLoadingGlobal(false));
        }
    }, [isAuthenticated, logout]);

    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated,
        session,
        loadingGlobal,
    }), [login, logout, isAuthenticated, session]);

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export function useAuthContext() {
    return useContext(AuthContext);
}
