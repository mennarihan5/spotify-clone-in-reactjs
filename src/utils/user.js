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
    const app = appSettings();
    localStorage.setItem('app-settings', JSON.stringify(
        {...appSettings,
            hasInstalledApp: true
        }));
    const confirm = window.confirm("Have you downloaded the app?");
    if (confirm) {
        console.log(confirm)
        window.location.reload();
    }
}