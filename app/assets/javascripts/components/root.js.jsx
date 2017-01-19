var Root = React.createClass({
   render: function(){
       return(
           <div id="root">
               <Banner />
               <div className="container">
                   <Schedule />
               </div>
           </div>
       );
   }
});
