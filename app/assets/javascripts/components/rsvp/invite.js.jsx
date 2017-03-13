var Invite = React.createClass({
    confirm: function (e) {
        e.preventDefault();
        var guest_name = (this.props.invite.guest_name != null) ? this.props.invite.guest_name : this.refs.guest_name.value;
        var children = {};
        $.each($(e.target).find(':checkbox:checked'), function (_index, child) {
            children[parseInt(child.id.replace('child-', ''))] = true
        });
        $.ajax({
                url: "/invites/" + this.props.invite.id,
                method: "PATCH",
                data: {
                    guest_name: guest_name,
                    children: children
                }
            })
            .done(function (invite) {
                this.props.setInvite(invite, null);
            }.bind(this))
            .fail(function (error) {
                this.props.setInvite(null, error.responseJSON.error);
            }.bind(this));
    },
    determineGuest: function () {
        if (this.props.invite.guest) {
            if (this.props.invite.guest_name == null) {
                return (
                    <div id="guest">
                        <p>Would you like to bring a guest?</p>
                        <input type="text" className="form-control" ref="guest_name"/>
                    </div>
                );
            } else {
                return (
                    <div id="guest">
                        <p>&</p>
                        <h4>{this.props.invite.guest_name}</h4>
                    </div>
                );
            }
        } else {
            return null;
        }
    },
    determineChildren: function () {
        if (this.props.invite.children.length > 0) {
            var children = this.props.invite.children.map(function (child) {
                return (
                    <div className="checkbox">
                        <input id={"child-" + child.id} type="checkbox"/>
                        <label htmlFor={"child-" + child.id}>{child.name}</label>
                    </div>
                );
            });
            return (
                <div id="children">
                    <p>Are you bringing your children?</p>
                    {children}
                </div>
            );
        } else {
            return null;
        }
    },
    render: function () {
        var guest = this.determineGuest();
        var children = this.determineChildren();
        return (
            <div>
                <h4>{this.props.invite.name}</h4>
                <form onSubmit={this.confirm}>
                    {guest}
                    {children}
                    <p>Thank-you for visiting!</p>
                    <input type="submit" className="btn btn-rsvp form-control" value="Confirm RSVP"/>
                </form>
            </div>
        )
    }
});
