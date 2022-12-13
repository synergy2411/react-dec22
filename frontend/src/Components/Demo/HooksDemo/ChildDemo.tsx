import React from "react";

const ChildDemo = (props: { show: boolean, demoFn: () => void }) => {

    console.log("[CHILD]")

    return (
        <>
            <h2>
                The child Component
            </h2>
            {props.show && <p>Toggle Paragraph</p>}
        </>
    )
}

export default React.memo(ChildDemo);

// props.curr.show === props.prev.show      => no rendering