import { Outlet } from "react-router";
import { Header } from "../header/Header";

export function AppLayout () {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}