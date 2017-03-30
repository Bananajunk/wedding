var Thanks = React.createClass({
    determineInvite: function () {
        var result = this.props.invite.name;
        if (this.props.invite.guest && this.props.invite.guest_name != null && this.props.invite.guest_name != "") {
            return result + " & " + this.props.invite.guest_name;
        }

        return result;
    },
    render: function () {
        var thank_you = "Thanks for your RSVP!";
        if (this.props.invite.rsvp == 'coming') {
            thank_you = thank_you + " See you there!"
        }
        var invite = this.determineInvite();
        return (
            <div>
                <h4>{thank_you}</h4>
                <h2>{invite}</h2>
            </div>
        )
    }
});
