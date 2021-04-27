import { useRouter } from "next/router";

export default (props) => {
    const {
        query: { post_id },
    } = useRouter();
    console.log(post_id);


    return (
        <div>
            <h2>POST PAGE</h2>
            <p>Hola hola</p>
        </div>
    );
};