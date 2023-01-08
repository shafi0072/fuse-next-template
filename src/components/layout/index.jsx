import React from 'react';
import Navbar from '../core/Navbar'
import ToolbarLayout1 from '../core/Tolbar'
const Index = (props) => {
  return (
    <div>
      <div className="flex flex-auto min-w-0">
       <Navbar />

        <main id="fuse-main" className="flex flex-col flex-auto min-h-full min-w-0 relative z-10">
       
            <ToolbarLayout1 className={ 'sticky top-0'} /> 
     
          <div className="sticky top-0 z-99">
  
          </div>

          <div className="flex flex-col flex-auto min-h-0 relative z-10">
        

          
            {props.children}
          </div>

        
        </main>

       
      </div>
    </div>
  );
};

export default Index;