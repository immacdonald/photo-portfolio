import style from "./NavLink.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavLink = (props) => {
    const location = useLocation();

    const { label, link } = props;

    return (
        <div className={style.link + (link === location.pathname ? ` ${style.selected}` : "")}>
            <Link to={link}>{label}</Link>
        </div>
    )
}

export default NavLink;