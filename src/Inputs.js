import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Home from './Home';

function Inputs() {
    const inputData = [
        {
            name: "firstname",
            type: "text",
            id: "exampletext",
            label: "First Name"
        },
        {
            name: "lastname",
            type: "text",
            id: "exampletext1",
            label: "Last name"
        },
        {
            name: "email",
            type: "email",
            id: "InputEmail1",
            label: "Enter Email address"
        },
        {
            name: "password",
            type: "password",
            id: "InputPassword",
            label: "Enter New Password"

        },
        {
            name: "confirmpassword",
            type: "password",
            id: "InputPassword",
            label: "Confirm Password"
        }

    ]
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login data={inputData}/>} />
                <Route path="/register" element={<Register data={inputData} />} />
                </Routes>
        </BrowserRouter>
    )
}
export default Inputs;