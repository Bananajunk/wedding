var Rsvp = React.createClass({
    getInitialState: function () {
        return ({
            invite: null,
            error: null
        })
    },
    setInvite: function (invite, error) {
        this.setState({invite: invite, error: error});
    },
    generateDisplay: function () {
        if (this.state.invite === null) {
            return <EnterCode setInvite={this.setInvite}/>;
        } else {
            if (this.state.invite.rsvp) {
                return <Thanks invite={this.state.invite}/>;
            } else {
                return <Invite invite={this.state.invite} setInvite={this.setInvite}/>;
            }
        }
    },
    generateError: function () {
        if (!(this.state.error === null)) {
            return (
                <div className="custom-flash row" style={{marginTop: '15px'}}>
                    <div className=" col-xs-12">
                        <div className=" alert alert-danger">
                            <ul className=" fa-ul">
                                <li>
                                    <i className=" fa-li fa fa-exclamation-circle"></i>
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
            <div id="rsvp">
                {this.generateDisplay()}
                {this.generateError()}
            </div>
        )
    }
});
