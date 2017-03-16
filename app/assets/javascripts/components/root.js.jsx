var Root = React.createClass({
   render: function(){
       return(

       <div className="pure-container" data-effect="pure-effect-slide">
           <div className="pure-pusher-container">
               <div className="pure-pusher">
                   <div id="root">
                       <Banner />
                       <Location />
                       <div className="container">
                           <Schedule />
                       </div>
                       <Accommodations />
                       <Rsvp />
                   </div>
               </div>
           </div>
       </div>
       );
   }
});
