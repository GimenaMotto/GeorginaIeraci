import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Page2D from "../pages/Page2D"
import Page3D from "../pages/Page3D"

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/2D" element={<Page2D />}></Route>
            <Route path="/3D" element={<Page3D />}></Route>
        </Routes>
    )
}

export default AppRoutes