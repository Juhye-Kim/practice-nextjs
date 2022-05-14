import Link from "next/link";

const Child = () => {
    return <a>Move to '/'</a>
}

const Tomato = () => {
    return (
        <div>
            <h2>Link to 'main' page</h2>
            <Link href="/" passHref>
                {/* <Child /> */}
                <p>Move to '/'</p>
            </Link>
        </div>
    )
}

export default Tomato;