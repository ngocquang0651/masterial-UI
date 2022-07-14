import React from "react"
import { useRoutes } from "react-router-dom";
import { routes } from "./router"

export default function Layout1(){
    const element = useRoutes(routes);
    return(
        <div>
            {element}
        </div>
    )
}