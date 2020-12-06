import "../../styles/typography.scss";
import React from "react";

export const Layout = ({ children }): JSX.Element => {
    return <div className="app-root">{children}</div>;
}