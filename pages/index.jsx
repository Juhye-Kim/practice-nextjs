import Link from "next/link";

const App = () => {
    return (
        <div>
            <h2>Link to 'potato' page</h2>
            <Link href="/vegetable/[name]" as="/vegetable/potato">
                <a>Move to ''</a>
            </Link>
        </div>
    )
}

export default App;