import React, { useContext } from "react";
import AuthContext from "../../../context/authContext";

const ChildDemo = (props: { show: boolean, demoFn: () => void, friends: Array<string> }) => {

    console.log("[CHILD]")

    const context = useContext(AuthContext);

    return (
        <>
            {context.isLoggedIn && <h2> The child Component </h2>}
            {props.show && <p>Toggle Paragraph</p>}
        </>
    )
}

export default React.memo(ChildDemo);

// props.curr.show === props.prev.show      => no rendering