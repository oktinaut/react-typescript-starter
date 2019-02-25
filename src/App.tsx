import React from "react";

import * as styles from "./App.scss";

interface IAppProps {
    title: string;
}

export const App: React.FC<IAppProps> = (props) => {

    return (
        <div className={styles["app"]}>{props.title}</div>
    );
};
