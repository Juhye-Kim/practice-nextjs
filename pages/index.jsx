import { useState } from "react";
import { useRouter } from "next/router";

const App = () => {
    const [name, setName] = useState("");
    const router = useRouter();

    return (
        <div>
            <img src="/icon.png" />
            <button type="button" onClick={() => router.push("/tomato")}>
                tomato로 이동하기!
            </button>
            <p>이름</p>
            <input value={name} onChange={(e) => setName(e.target.value)} style={{marginRight: "12px"}} />
            <button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
                {name}으로 이동하기!
            </button>
        </div>
    )
}

export default App;