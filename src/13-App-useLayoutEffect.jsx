import React, { useState, useEffect, useLayoutEffect } from "react";

function App() {
    const [state1, setState1] = useState("hello");
    const [state2, setState2] = useState("hi");

    useEffect(() => {
        let i = 0;
        while (i < 1000000000) {
            i++;
        }
        setState1("world");
    }, []);
    
    useLayoutEffect(() => {
        let i = 0;
        while (i < 1000000000) {
            i++;
        }
        setState2("world");
    }, []);

    return (
        <>
            <h1>{state1}</h1>
            <h1>{state2}</h1>
        </>
    );
}

export default App;
