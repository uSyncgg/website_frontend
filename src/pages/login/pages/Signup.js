import { useState, useEffect } from 'react';
import SignUpForm from '../components/SignUpForm';
import { useAuth0 } from '@auth0/auth0-react';

function Signup() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        // You can render a spinner or placeholder
        return <div>Loading...</div>;
    }

    return (
        <>
            {isAuthenticated && (
                <>
                    <SignUpForm />
                </>
            )}
        </>
    )
}

export default Signup;