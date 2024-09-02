import { routes } from "../../routes";
import {ReactComponent as Home} from "../../app/assets/images/home.svg";
import {ReactComponent as Search} from "../../app/assets/images/search.svg"
import { ReactComponent as Library} from "../../app/assets/images/library.svg";
import { ReactComponent as Plus} from "../../app/assets/images/plus.svg";
import { ReactComponent as Heart} from "../../app/assets/images/heart.svg";
import { ReactComponent as Bookmark} from "../../app/assets/images/bookmark.svg";

export const sidebarMenu = [
    {
        name: "Home",
        url: routes.dashboard,
        icon: <Home />
    },
    {
        name: "Search",
        url: routes.dashboard,
        icon: <Search />
    },
    {
        name: "Your Library",
        url: routes.dashboard,
        icon: <Library />
    },
    {
        name: "Create Playlist",
        url: routes.playlist,
        icon: <Plus />
    },
    {
        name: "Liked Songs",
        url: routes.likedSongs,
        icon: <Heart />
    },
    {
        name: "Your Episodes",
        url: routes.episodes,
        icon: <Bookmark />
    },
]

export const recommendations = ['jazz', 'Hangover Cure', 'Your Top Songs 2022', 'Indie', 'Rock', 'RADAR']