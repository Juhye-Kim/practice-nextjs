import fetch from "isomorphic-unfetch";

const name = ({user, time}) => {
    const username = user && user.name;

    return <div>{username}{time}</div>;
}

export const getStaticProps = async ({params}) => {
    console.log('getStaticProps')
    const {name} = params;

    try {
        const res = await fetch(`https://api.github.com/users/${name}`);
        const user = await res.json();

        if (res.status === 200) {
            return {props: {user, time: new Date().toISOString()}};
        }
        return {props: {time: new Date().toISOString()}};

    } catch (e) {
        console.log(e);
        return {props: {time: new Date().toISOString()}};
    }
}

export async function getStaticPaths() {
    return {
        paths: [{params: {name: "Juhye-Kim"}}], 
        fallback: false
    }
}

export default name;