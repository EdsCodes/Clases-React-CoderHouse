import React from "react";

const ThemeContext = React.createContext(false);

const ContextoConsumer = () => {
    return (
        <ThemeContext.Consumer>
            {(isDarkMode) => (<p>Es Modo Oscuro? <b>{isDarkMode ? "Sí" : "No"}</b></p>)}
        </ThemeContext.Consumer>
    )
}

export default ContextoConsumer;