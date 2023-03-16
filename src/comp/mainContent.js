import React from 'react';
import "./MainContent.css";
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
 