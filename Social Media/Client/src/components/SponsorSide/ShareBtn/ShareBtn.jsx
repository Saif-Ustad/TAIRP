import "./ShareBtn.scss";

import ShareModel from "../../ShareModel/ShareModel";
import { useState } from "react";

function ShareBtn() {

    const [modelOpen, setModelOpen] = useState(false);

    return (
        <div className="Sharebtn">
            <button onClick={() => setModelOpen(true)}>Share</button>
            <ShareModel modelOpen={modelOpen} setModelOpen={setModelOpen}/>
        </div>
    )
}

export default ShareBtn;