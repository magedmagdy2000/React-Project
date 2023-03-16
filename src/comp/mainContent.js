import React from 'react';

const MainContent = ({pageName, designer}) => {
  return (
    <div>
            <main> 
              {pageName}
              <br />
              {designer}
            </main>
    </div>
  );
}

export default MainContent;
