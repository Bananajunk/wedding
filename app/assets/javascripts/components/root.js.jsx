var Root = React.createClass({
   render: function(){
       return(
           <div id="root">
               <Banner />
               <Location />
               <div className="container">
                   <Schedule />
               </div>
               <Accommodations />
           </div>
       );
   }
});
