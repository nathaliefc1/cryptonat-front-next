import axios from 'axios';
import Form from '../components/Form'

const Simulator = () => {

    const handleAddUser = () => {
        axios.post('http://localhost:3000/api/profile', {
            name: `Uma`,
            email: `uma@123.com`,
            capital: `120`,
            divisa: `EUR`,
            prefered_cryptocurrency: `Stellar(XLM)`,
        }).then(response => console.log(response.data))
    }
    return (
        <div>
            <h3>This is <b>Astronaut UMA</b></h3>
            <p>She will help you. But first you need to create your user.</p>
            <p>Let's start selecting your favorite cryptocurrency.</p>
            <button className="btn btn-primary" onClick={handleAddUser}>Add user</button>


        </div>
    );
};

export default Simulator;