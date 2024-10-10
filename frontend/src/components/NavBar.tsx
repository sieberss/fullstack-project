import {Link} from "react-router-dom";
import Login from "./Login.tsx";
import './NavBar.css'

type Props = {
    loggedIn: boolean,
    setUserNameToAnonymous: () => void,
}
export default function NavBar(props: Props) {
    return (
            <ul>
                <li><Login loggedIn={props.loggedIn}
                           setUserNameToAnonymous={props.setUserNameToAnonymous}/></li>
                {props.loggedIn &&
                    <li><Link to={"/shoppinglist"} className={"login-link"}> Shopping
                        list </Link></li>}
                <li><Link to={"/"} className={"login-link"}> All Products </Link>
                </li>
            </ul>
    )

}