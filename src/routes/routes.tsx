import React, {FC} from 'react';
import { Navigate, Route, Routes} from "react-router-dom";

import Error from "../pages/Error";
import UserList from "../pages/UserList";
import TodoList from "../pages/TodoList";
import User from "../components/User/User";
import UserPage from "../pages/UserPage";
import TodoPage from "../pages/TodoPage";





const AppRouter : FC = () => {
    return (

         <Routes>
             <Route path = "/users" element={<UserList/>}/>
             <Route path = "/todos" element={<TodoList/>}/>
             <Route path = "/error" element={<Error/>}/>
             <Route path='/' element={<Navigate replace to='/users' />} />
             <Route path='/*' element={<Navigate replace to='/error' />} />
             <Route path = "/users/:id" element={<UserPage/>}/>
             <Route path = "/todos/:id" element={<TodoPage/>}/>
         </Routes>

    );
};

export default AppRouter;