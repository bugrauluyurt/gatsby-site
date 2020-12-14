import { Layout } from "../../components/layout/layout.component";
import React, { useState, FunctionComponent } from "react";
import { Mbp16Section1 } from '../../components/mbp16/mbp16-section-1/mbp16-section-1.component';
import { useScrollPosition, ScrollEffectPositionState } from "../../hooks/useScrollPosition";
import * as styles from "./index.scss";
import { Sticky } from "../../components/sticky/sticky.component";

const MacBookPro16: FunctionComponent = (): JSX.Element => {
    const [scrollPositionY, setScrollPositionY] = useState(0);
    useScrollPosition((position: ScrollEffectPositionState) => {
        setScrollPositionY(position.currPos.y);
    }, [], undefined, true);

    return (<div className={styles.wrapper}>
        <Layout customStyle={{minHeight: "2000px"}}>
            <Sticky>
                <Mbp16Section1 scrollPositionY={scrollPositionY}/>
            </Sticky>
        </Layout>;
    </div>);
};

export default MacBookPro16;