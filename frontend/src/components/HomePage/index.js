import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to MusicStorm!</h1>
            <div className='landingImage'>
            <img
                src='https://images.unsplash.com/photo-1619450300659-7e4b7648755d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            ></img>
            </div>
            <div className='info'>
                <h2>
                    Audiophiles! Look no further than MusicStorm for all your audio distibution and listening needs! 
                </h2>
            </div>
        </div>

    )
}

export default HomePage;
