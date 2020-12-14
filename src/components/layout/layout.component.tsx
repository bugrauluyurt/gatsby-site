import "../../styles/typography.scss";
import React, { FunctionComponent } from "react";

export interface LayoutProps {
    customStyle?: {[key: string]: any};
}

export const Layout: FunctionComponent<LayoutProps> = ({ children, customStyle = {} }): JSX.Element => {
    return <div className="app-root" style={customStyle}>{children}</div>;
}