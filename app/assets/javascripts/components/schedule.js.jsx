var Event = React.createClass({
    render: function () {
        return (
            <div className="event row">
                <div className="event-image flex-center col-md-2 col-md-offset-1 hidden-xs">
                    <img src={this.props.event.image}></img>
                </div>
                <div className="event-description flex-center col-md-8 col-xs-12">
                    <h4>{this.props.event.title}</h4>
                    <p>{this.props.event.description}</p>
                </div>
            </div>
        );
    }
});

var Timeline = React.createClass({
    render: function () {
        let events = Events.map(function (event, index) {
            var icon = (index === this.props.selectedEvent) ? 'fa-circle' : 'fa-circle-thin';
            return (
                <div key={index} className="timeline-item flex-center"
                     onClick={this.props.changeSelected.bind(null, index)}>
                    <span><i className={"fa fa-lg " + icon}></i></span>
                    {event.title}<br/>
                    {event.startTime}
                </div>
            );
        }.bind(this));
        return (
            <div id="timeline">
                {events}
            </div>
        );
    }
});

var Schedule = React.createClass({
    getInitialState: function () {
        return ({
            selected_event: 0
        });
    },

    changeSelected: function (selected) {
        this.setState({selected_event: selected});
    },

    render: function () {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div id="schedule" className="section">
                        <div className="row">
                            <h2>Schedule</h2>
                        </div>
                        <Event event={Events[this.state.selected_event]}/>
                        <Timeline selectedEvent={this.state.selected_event} changeSelected={this.changeSelected}/>
                    </div>
                </div>
            </div>
        );
    }
});
