import {useAppSelector} from "../hooks/useAppSelector.ts";
import useAppFetch from "../hooks/useAppFetch.ts";
import {useParams} from "react-router-dom";
import userSliceAsyncActions from "../redux/slices/user/userSliceAsyncActions.ts";
import LoadingComponent from "../components/LoadingComponent.tsx";
import {useCallback} from "react";

const UserPage = () => {
    console.log("user rerender", performance.now());
    const {user, loading} = useAppSelector(state => state.userSlice)
    const {userId} = useParams()


    const fetchUser = useCallback(() => {
        return userId ? userSliceAsyncActions.loadUser(+userId) : undefined
    }, [userId]);
    useAppFetch(fetchUser)
    return (
        <>
            {!loading && <LoadingComponent/>}
        {
            user && <ul><li>{user.id}</li><li>{user.name}</li></ul>
        }
        </>
    );
};

export default UserPage;