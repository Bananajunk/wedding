var Rsvp = React.createClass({
    getInitialState: function () {
        return ({
            invite: null,
            error: null
        })
    },
    componentDidMount: function(){
        $('#rsvp-instructions').popover({
            trigger: 'focus hover',
            content: 'Your Code is found on the back of the invitation. Enter it below and then confirm your details after we load your info.',
            placement: 'auto'
        });
    },
    setInvite: function (invite, error) {
        this.setState({invite: invite, error: error});
    },
    generateDisplay: function () {
        if (this.state.invite === null) {
            return <EnterCode setInvite={this.setInvite}/>;
        } else {
            if (this.state.invite.rsvp == 'unknown') {
                return <Invite invite={this.state.invite} setInvite={this.setInvite}/>;
            } else {
                return <Thanks invite={this.state.invite}/>;
            }
        }
    },
    generateError: function () {
        if (!(this.state.error === null)) {
            return (
                <div className="custom-flash row" style={{marginTop: '15px'}}>
                    <div className="col-xs-12">
                        <div className="alert alert-danger">
                            <ul className="fa-ul">
                                <li>
                                    <i className="fa-li fa fa-exclamation-circle"></i>
                                    {this.state.error}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    },
    render: function () {
        return (
            <div id="rsvp" className="container section">
                <div className="row title">
                    <h2>RSVP Here</h2>
                    <span id="rsvp-instructions" className="fa-stack text-muted">
                        <i className="fa fa-circle-o fa-stack-2x"></i>
                        <i className="fa fa-question fa-stack-1x"></i>
                    </span>
                </div>
                {this.generateDisplay()}
                {this.generateError()}
            </div>
        )
    }
});
