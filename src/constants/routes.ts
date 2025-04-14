import Home from "../containers/Home/Home";
import MyProfile from "../containers/MyProfile/MyProfile";

export const privateRoutes = [
    { path: "/me", container: MyProfile },
];

export const publicRoutes = [
    { path: "/", container: Home },
    { path: "/home", container: Home },
];

export const mainLayoutSubRoutes = [
 
]

export const memberDashboardSubRoutes = [

];


export const adminDashboardSubRoutes = [
 
]