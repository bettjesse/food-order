import { Link } from "react-router-dom"

const Header = ()=> {
    return (
        <div className=" border-b-2 border-b-orange-500">
            <div className="container flex mx-auto justify-between py-6">
                <Link to = "/" className="text-3xl  font-bold tracking-tight text-orange-500">
                MunchMate
                </Link>

            </div>

        </div>
    )
}
export default Header