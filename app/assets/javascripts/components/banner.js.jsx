var BannerTitle = React.createClass({
    render: function(){
        return (
            <div id="banner-title" className="container">
                <h1>Samantha & Liam</h1>
                <h4>August 25th, 2017</h4>
            </div>
        );
    }
});

var Banner = React.createClass({
    render: function(){
        return (
            <div id="banner" className="jumbotron">
                <BannerTitle />
            </div>
        );
    }
});
