import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import * as styles from "./mpb16-section-1.module.scss";
import { useRef } from "react";
import styleDotOffset from '../../../styles/utils/dot-offset.style';

export interface Mbp16Section1Props {
    scrollPositionY?: number;
}

const scrollBoundaries = { start: 0, end: 2000 };
const initialState = { opacity: 1, transform: "translateY(0)" };

const getOpacity = (scrollPositionY: number, arbitrarySlower = 10): number => {
    return 1 / ((scrollPositionY / arbitrarySlower) || 1);
}
const getTranslateY = (scrollPositionY: number, arbitrarySlower = 20): string => {
    return `translateY(-${scrollPositionY^1.05 / arbitrarySlower}px)`;
}

export const Mbp16Section1: FunctionComponent<Mbp16Section1Props> = ({ scrollPositionY }: Mbp16Section1Props): JSX.Element => {
    const canvasRef = useRef(null);
    const boundaries = useRef(scrollBoundaries);
    const opacity = useMemo(() => getOpacity(scrollPositionY), [scrollPositionY]);
    const transform = useMemo(() => getTranslateY(scrollPositionY), [scrollPositionY]);
    const [dynamicStyle, setDynamicStyle] = useState(initialState);

    useEffect(() => {
        setDynamicStyle({ opacity, transform });
    }, [scrollPositionY]);

    return (
        <section className={styles.wrapper}>
            <div className={styles.heroHeadlineWrapper} style={dynamicStyle}>
                <div className={styles.heroHeadline}>
                    <h1 className="typographyHeroEyebrow">MacBookPro</h1>
                    <h2 className="typographyHeroHeadline">The best for the brightest<span style={styleDotOffset}>.</span></h2>
                </div>
            </div>
            <canvas ref={canvasRef}></canvas>
        </section>
    );
};