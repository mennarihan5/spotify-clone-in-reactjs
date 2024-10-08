import React from "react";
import { isUserLogged } from "../utils/user";

function IsProtectedRoute({children}) {
    const user = isUserLogged();
    if (user) {
        return children;
    }
    window.location.href = '/';
    return null;
}

export default IsProtectedRoute;