import axios from 'axios';

export default () => {

    const handleAddUser = () => {
        axios.post('http://localhost:3001/api/user/create', {
            name: 'Uma',
            email: 'nathalie@muggins.com',
            preferred_crypto: 'Cardano',
            cuenta: 'ES47 234234'
        }).then(response => console.log(response.data))
    }
    return (
        <div>
            <h3>This is <b>Astronaut UMA</b></h3>
            <p>She will help you. But first you need to create your user.</p>
            <p>Let's start selecting your favorite cryptocurrency.</p>
            <button onClick={handleAddUser}>Add user</button>
        </div>
    );
};