import axios from 'axios';

export default () => {

    const handleAddUser = () => {
        axios.post('http://localhost:3001/api/user/create', {
            name: 'Nathalie',
            email: 'nathalie@muggins.com',
            preferred_crypto: 'Cardano',
            cuenta: 'ES47 234234'
        }).then(res => console.log(res.data))
    }
    return (
        <div>
            <h3>This is George's page</h3>
            <p>Please pay attention</p>
            <p>I love arepas</p>
            <button onClick={handleAddUser}>Add user</button>
        </div>
    );
};