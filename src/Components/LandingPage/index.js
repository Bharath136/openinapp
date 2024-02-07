import { useNavigate } from "react-router-dom"

const LandingPage = () => {
    const navigate = useNavigate()
    const onStart = () => {
        navigate('/login')
    }
    return(
        <div className="landingpage-container">
            <div className="card">
                <h1>Welcome To Base</h1>
                <button className="login-button" onClick={onStart}>Get Started</button>
            </div>

        </div>
    )
}

export default LandingPage