export const logout = () => {
    localStorage.removeItem('user');
}

export const isUserLogged = () => {
    const user = JSON.parse(localStorage.getItem('user') ?? '{}');
    return user.email && user.token
}

export const hasInstalledApp = () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
}

export const appSettings = () => {
    return JSON.parse(localStorage.getItem('app-settings') || '{}');
}

export const downloadApp = () => {
    
}