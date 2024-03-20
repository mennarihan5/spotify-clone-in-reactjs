import { useState } from "react";

export const getCurrentHash = () => {
    return window.location.hash.replace("#/", "").replace("#", "");
}

export const navigate = (path) => {
    window.location.hash = "#/" + path;
}

export const UseNavigation = () => {
    const [url, setUrl] = useState(getCurrentHash());

    window.addEventListener("hashchange", function (e) {
        const path = getCurrentHash();
        setUrl(path);
    });
    return{ url, navigate};
}
