var Thanks = React.createClass({
    determineGuest: function () {
        if (this.props.invite.guest && this.props.invite.guest_name != null) {
            return (
                <div id="guest">
                    <p>&</p>
                    <h4>{this.props.invite.guest_name}</h4>
                </div>
            );
        } else {
            return null;
        }
    },
    determineChildren: function () {
        if (this.props.invite.children.length > 0) {
            var children = this.props.invite.children.map(function(child){
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
                <h4>Thanks for your RSVP!</h4>
                <h4>{this.props.invite.name}</h4>
                {guest}
                {children}
            </div>
        )
    }
});
