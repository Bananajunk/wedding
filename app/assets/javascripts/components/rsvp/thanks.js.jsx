var Thanks = React.createClass({
    determineInvite: function () {
        var result = this.props.invite.name;
        if (this.props.invite.guest && this.props.invite.guest_name != null) {
            return result + " & " + this.props.invite.guest_name;
        }

        return result;
    },
    render: function () {
        var thank_you = this.determineInvite();
        return (
            <div>
                <h4>Thanks for your RSVP!</h4>
                <h2>{thank_you}</h2>
            </div>
        )
    }
});
