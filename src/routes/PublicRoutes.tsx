import { lazy } from "react"
import { Route, Navigate, Routes, useLocation} from "react-router-dom"

import { checkPathMatch, paths } from "./helpers"
import AccountSettingsPage from "../pages/AccountSettingsPage/AccountSettingsPage"

const HomePage = lazy(() => import('../pages/HomePage'))


const PublicRoutes: React.FC = () => {
    const location = useLocation()

    const isMatch = checkPathMatch(location.pathname, paths)


    return (
        <Route>
            <Route path={paths.home} element={<HomePage />} />
            <Route path="*" element={!isMatch ? <Navigate to={paths.home} /> : null} />
        </Route>
    )
}