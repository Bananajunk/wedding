var EnterCode = React.createClass({
    submit: function (e) {
        e.preventDefault();
        var code = this.refs.code.value;
        $.get("/invites/" + code)
            .done(function (invite) {
                this.props.setInvite(invite, null);
            }.bind(this))
            .fail(function (error) {
                this.props.setInvite(null, error.responseJSON.error);
            }.bind(this));
    },
    render: function () {
        return (
            <div className="row">
                <h4>Enter Code:</h4>
                <form onSubmit={this.submit}>
                    <input type="text" className="form-control" ref="code" maxLength="4"/>
                    <input type="submit" className="btn btn-rsvp form-control"/>
                </form>
            </div>
        )
    }
});
