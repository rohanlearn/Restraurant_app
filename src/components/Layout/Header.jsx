import "./Header.css"


const Header = (props)=>{


    return(
        <header>
            <h1>ReactMeals</h1>
            <div className="cart">
                <span>Your Cart</span>
            </div>
        </header>
    )

}

export default Header