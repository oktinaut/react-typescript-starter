import * as React from "react";

import * as styles from "./App.scss";

interface IAppProps {

}

interface IAppState {

}

export class App extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <div className={styles["app"]}>App</div>
        );
    }

}
