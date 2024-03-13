import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/user";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import CustomButton from "../UI/Button/CustomButton";

type UserItemPageParams = {
    id: string;
}
const UserPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();

    const navigate = useNavigate();

    useEffect(()=>{
        fetchUser();
    } ,[]);

    async function fetchUser (){
        try{
            let response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUser(response.data);
        }
        catch(e){
            alert(e);
        }
    }
    return (
        <div >
            <CustomButton
                callback = {()=>navigate('/users')}
            >Назад</CustomButton>
            <h3>{user?.id}.<Link to={'/users/' + params.id}>{user?.name}</Link></h3>
            <div>{user?.address.city}{user?.address.street}</div>
            <div>{user?.email}</div>
        </div>
    );
};

export default UserPage;