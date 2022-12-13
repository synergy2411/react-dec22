import { useCallback, useMemo, useState } from "react";
import ChildDemo from "./ChildDemo";

const ParentDemo = () => {

    const [show, setShow] = useState<boolean>(false)
    const [toggle, setToggle] = useState<boolean>(false)

    const toggleClickHandler = () => setToggle(!toggle);
    const showClickHandler = () => setShow(!show);

    // const demoFn = useCallback(() => { console.log("Demo Fired") }, [])
    const demoFn = useMemo(() => () => { console.log("Demo Fired") }, [])

    const friends = useMemo(() => ["Joe", "Chandler", "Monica"], [toggle]);

    console.log("[PARENT]")

    return (
        <div className="container">
            <h1>The Parent Component</h1>
            <button className="btn btn-light" onClick={toggleClickHandler}>Toggle</button>
            <button className="btn btn-dark" onClick={showClickHandler}>Show</button>
            <hr />
            <ChildDemo show={true} demoFn={demoFn} friends={friends} />
        </div>
    )
}

export default ParentDemo;