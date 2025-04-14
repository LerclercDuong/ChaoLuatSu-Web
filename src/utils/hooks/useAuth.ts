import React from "react";
import axios from "axios";
import { GetAccessToken } from "../tokens";
import { setIsAuthenticatedAction, setIsLoadedAction, setUserInfoAction } from "../../features/auth";
import { GetMyInfo } from "../../services/user";
import { useDispatch } from "react-redux";

// Định nghĩa kiểu dữ liệu cho User
interface User {
    id: string;
    name: string;
    email: string;
    profilePicture?: string;
    role: string;
}

const useAuth = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const fetchUser = async () => {
            const accessToken = GetAccessToken();
            if (!accessToken) {
                setLoading(false);
                return;
            }
            try {
                const response = await GetMyInfo({});
                if(response.data.payload){
                    dispatch(setIsAuthenticatedAction(true));
                    dispatch(setUserInfoAction(response.data.payload))
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);
      return { loading };
};

export default useAuth;
