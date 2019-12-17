import React from "react"

import * as styles from "./App.scss"

type AppProps = {
    title: string
}

export const App: React.FC<AppProps> = props => {

    return (
        <div className={styles["app"]}>{props.title}</div>
    )
}
