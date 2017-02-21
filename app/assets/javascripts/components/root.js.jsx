var Root = React.createClass({
   render: function(){
       return(

       <div className="pure-container" data-effect="pure-effect-slide">
           <input type="checkbox" id="pure-toggle-right" className="pure-toggle" data-toggle="right"/>
           <label className="pure-toggle-label" htmlFor="pure-toggle-right" data-toggle-label="right">
               Click Here to RSVP
           </label>
           <div className="pure-drawer" data-position="right">
               <Rsvp />
           </div>
           <div className="pure-pusher-container">
               <div className="pure-pusher">
                   <div id="root">
                       <Banner />
                       <Location />
                       <div className="container">
                           <Schedule />
                       </div>
                       <Accommodations />
                   </div>
               </div>
           </div>
           <label className="pure-overlay" htmlFor="pure-toggle-right" data-overlay="right"></label>
       </div>
       );
   }
});
