import "../../styles/typography.scss";
import React, { FunctionComponent } from "react";
import * as styles from "./sticky.module.scss";

export interface StickyProps {
    containerStyle?: {[key: string]: any};
    elementStyle?: {[key: string]: any};
}

export const Sticky: FunctionComponent<StickyProps> = ({ children, containerStyle = {}, elementStyle = {} }): JSX.Element => {
    return (
        <div className={styles.stickyContainer} style={containerStyle}>
            <div className={styles.stickyElement} style={elementStyle}>{children}</div>
        </div>
    );
}