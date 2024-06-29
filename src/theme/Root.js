import React from 'react';

export default function Root({children}) {

return (
    <React.Fragment>
        <p>Hello</p>
        <>{children}</>
    </React.Fragment>
  );
}
