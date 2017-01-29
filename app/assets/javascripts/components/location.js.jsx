var LocationSpotlight = React.createClass({
    render: function () {
        return (
            <div className="location-spotlight">
                <img src={this.props.image}/>
            </div>
        );
    }
});

var LocationThumbnails = React.createClass({
     render: function(){
         let thumbnails = LocationImages.map(function(image, index){
             return (
                 <img src={image} key={"thumbnail-" + index}
                      onClick={this.props.setSpotlight.bind(null, image)}
                      onMouseOver={this.props.setSpotlight.bind(null, image)} />
             );
         }.bind(this));
         return (
            <div className="location-thumbnails">
                {thumbnails}
            </div>
         );
     }
});

var Location = React.createClass({
    getInitialState: function(){
        return ({
            image: LocationImages[0]
        });
    },

    setSpotlight: function(image) {
        this.setState({image: image});
    },

    render: function () {
        return (
            <div id="location" className="container section">
                <div className="location-info col-md-6 col-sm-12">
                    <h2>Alton Mill Arts Centre</h2>
                    <p className="lead">
                        1402 Queen St. <br/>
                        Village of Alton <br/>
                        Caledon, Ontario <br/>
                        Canada, L7K 0C3 <br/>
                    </p>
                    <LocationThumbnails setSpotlight={this.setSpotlight} />
                </div>
                <div className="col-md-6 col-sm-12">
                    <LocationSpotlight image={this.state.image}/>
                </div>
            </div>
        );
    }
});
