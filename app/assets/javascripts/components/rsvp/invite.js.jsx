var Invite = React.createClass({
    confirm: function () {
        var guest_name = (this.props.invite.guest_name != null) ? this.props.invite.guest_name : this.refs.guest_name.value;
        $.ajax({
                url: "/invites/" + this.props.invite.id,
                method: "PATCH",
                data: {
                    guest_name: guest_name
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
        if (this.props.invite.children.size > 0) {
            var children = this.props.children.map(function(child){
                return child.name;
            });
            var child_list = children.join();
            return (
                <div id="children">
                    <p>&</p>
                    <h4>your children</h4>
                    <p>({child_list})</p>
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
                {guest}
                {children}
                <p>Thank-you for visiting!</p>
                <input type="submit" className="btn btn-rsvp form-control" value="Confirm RSVP" onClick={this.confirm}/>
            </div>
        )
    }
});
