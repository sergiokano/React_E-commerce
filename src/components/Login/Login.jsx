import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

const Login = () => {
    // let navigate = useNavigate()
    const [btnDisable, setBtnDisable] = useState(true)
    const [message, setMessage] = useState("")
    const [visible, setVisible] = useState(true)
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const initialState = {
        email: "",
        password: "",
    }

    const clearState = () => {
        setData({ ...initialState })
    }


    useEffect(() => {
        if (data.email.length < 1 || data.password.length < 1) {
            setMessage("All gaps must be filled to log in")
            setBtnDisable(true)
        } else {
            setMessage(null)
            setBtnDisable(false)
        }
    }, [data]);

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data" + data.email + " " + data.password)
        localStorage.setItem("data", JSON.stringify(data))
        clearState()
        // setTimeout(() => {
        //     navigate("/profile")
        // }), 3000;
        setVisible(false)
    }

    return (
        <div>
            <br />
            <span> Please, fill the gaps to log in</span>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Insert your email'
                    onChange={handleInputChange}
                    name="email"
                />
                <br />
                <br />
                <input type="text"
                    placeholder='Insert your password'
                    onChange={handleInputChange}
                    name="password"
                />
                <br />
                <br />
                <button type="submit" disabled={btnDisable}>
                    Let's go!
                </button>
            </form>
            <p>{visible ? message : <>Succesfully loged. Redirecting <i>Profile</i> </>}
            </p>
        </div>
    )
}

export default Login