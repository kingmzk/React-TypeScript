import React from 'react';

type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

const Greet = (props: GreetProps) => {
    const { name, messageCount = 0, isLoggedIn } = props;
    return (
        <div>
            {
                isLoggedIn ? <h1>Hi {name}. How are you! You have {messageCount} unread messages.</h1> : <h1>Welcome Guest</h1>
            }
        </div>
    );
}

export default Greet;
