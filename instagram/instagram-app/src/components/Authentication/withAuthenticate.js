import React from 'react';

// This component should be able to take in a component as an argument, 
// and it will return a `class` component.

const withAuthenticate = Comp =>
    class extends React.Component {
        render() {
            //some functionality

            return <Comp />;
        }
    };

export default withAuthenticate;