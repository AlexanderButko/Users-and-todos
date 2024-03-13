import React, {FC} from 'react';
import {Link, useNavigate} from "react-router-dom";
import CustomButton from "../UI/Button/CustomButton";

const Navbar : FC = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar">

            <div className="navbar_items">
                <CustomButton callback={() => navigate('/users')}>Сотрудники</CustomButton>
                <CustomButton callback={() => navigate('/todos')}>Задачи</CustomButton>
            </div>
        </div>
    );
};

export default Navbar;