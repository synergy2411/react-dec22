import { useCallback, useState } from "react";
import ChildDemo from "./ChildDemo";

const ParentDemo = () => {

    const [show, setShow] = useState<boolean>(false)

    const toggleShowClickHandler = () => setShow(!show);

    const demoFn = useCallback(() => { console.log("Demo Fired") }, [])

    console.log("[PARENT]")

    return (
        <div className="container">
            <h1>The Parent Component</h1>
            <button className="btn btn-light" onClick={toggleShowClickHandler}>Toggle</button>
            <hr />
            <ChildDemo show={true} demoFn={demoFn} />
        </div>
    )
}

export default ParentDemo;