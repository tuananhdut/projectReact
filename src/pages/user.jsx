import { useEffect, useState } from "react";
import UserForm from "../components/user/userForm"
import UserTable from "../components/user/userTable"
import axios from "axios";
import { notification } from "antd";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
    const [listDataUser, setListDataUser] = useState()

    useEffect(() => {
        loadUser()
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setListDataUser(res.data)
    }

    return (
        <>
            <UserForm
                loadUser={loadUser}
            />
            <UserTable
                listDataUser={listDataUser}
            />
        </>
    )
}
export default UserPage