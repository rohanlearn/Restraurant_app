import classes from  "./Header.module.css"
import { Fragment} from "react"
import mealsImage from '../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton"

const Header = (props)=>{
    const handler = ()=>{
        
    }

    


    return(
        <>
        <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.cartSState}/>
        </header>
            
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food"/>
            </div>
        </>
    )

}

export default Header