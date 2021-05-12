import { useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import Profile from './api/profile';


const profile = new Profile();

const App = ({ Component, pageProps }) => {
    const [loggedUser, setLoggedUser] = useState(null);

    const fetchProfile = async (data) => {
        const response = await profile.create(data);
        setLoggedUser(response.data);
    };

    return (

        <UserProvider>
            <Menu fetchProfile={fetchProfile} />
            <Component loggedUser={loggedUser} {...pageProps} />
            <Footer />
        </UserProvider>
    )
};

export default App;