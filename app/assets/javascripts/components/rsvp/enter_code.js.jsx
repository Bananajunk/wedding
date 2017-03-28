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
                <form onSubmit={this.submit}>
                    <div className="input-group">
                        <div className="input-group-addon">Enter Code:</div>
                        <input type="text" className="form-control" ref="code" maxLength="4"/>
                    </div>
                    <input type="submit" className="btn btn-success form-control" value="Check Code"/>
                </form>
            </div>
        )
    }
});
