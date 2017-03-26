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
        if (this.props.invite.guest && this.props.invite.guest_name == null) {
            return (
                <div id="guest">
                    <p>Who is your guest?</p>
                    <input type="text" className="form-control" ref="guest_name"/>
                </div>
            );
        } else {
            return null;
        }
    },
    determineInvite: function () {
        var invite = this.props.invite.name;
        if (this.props.invite.guest_name != null) {
            invite = invite + " & " + this.props.invite.guest_name;
        }
        return invite;
    },
    determineChildren: function () {
        if (this.props.invite.children.length > 0) {
            var children = this.props.invite.children.map(function (child) {
                return (
                    <div key={child.id} className="checkbox">
                        <input id={"child-" + child.id} type="checkbox"/>
                        <label htmlFor={"child-" + child.id}>{child.name}</label>
                    </div>
                );
            });
            return (
                <div>
                    <p>Are you bringing your children?</p>
                    <div id="children">
                        {children}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    },
    render: function () {
        var invite = this.determineInvite();
        var children = this.determineChildren();
        return (
            <div>
                <h2>{invite}</h2>
                <form onSubmit={this.confirm}>
                    {this.determineGuest()}
                    {children}
                    <p>Thank-you for visiting!</p>
                    <input type="submit" className="btn btn-success form-control" value="RSVP"/>
                </form>
            </div>
        )
    }
});
