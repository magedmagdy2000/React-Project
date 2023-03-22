import React from 'react';
import "./MainContent.css";
const MainContent = ({pageName}) => {
  return (
    <div>
            <main> 
              {pageName}
              <br />
            </main>
    </div>
  );
}

export default MainContent;
 