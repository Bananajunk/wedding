var Accommodations = React.createClass({
    render: function () {
        return (
            <div id="accommodations" className="container section">
                <div className="row title">
                    <h2>Accommodations</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 accommodations-item">
                        <div className="hotel icon"></div>
                        <h2>BEST WESTERN PLUS Orangeville Inn & Suites</h2>
                        <p>(519)941-3311<br/>Reference ‘Samantha-Liam Wedding’ for block booking rate.</p>
                        <a href="http://bestwesternontario.com/hotels/best-western-plus-orangeville-inn-and-suites"
                           className="btn btn-info btn-radius">Visit Website</a>
                    </div>
                    <div className="col-lg-4 accommodations-item">
                        <div className="bed icon"></div>
                        <h2>Rooms</h2>
                        <p>
                            A block of rooms has been reserved.
                        </p>
                        <table className="table table-condensed table-striped">
                            <thead>
                            <tr>
                                <th>Room Type</th>
                                <th>August 24th</th>
                                <th>August 25th</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2 Queen Suite w/ Pull Out</td>
                                <td>2</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>King Suite w/ Pull Out</td>
                                <td>3</td>
                                <td>5</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4 accommodations-item">
                        <div className="compass icon"></div>
                        <h2>Directions</h2>
                        <p>7 Buena Vista Drive <br/> Orangeville, ON L9W 0A2</p>
                        <a href="https://goo.gl/maps/zisr7dFrb812"
                           className="btn btn-info btn-radius">Get Directions</a>
                    </div>
                </div>
            </div>
        );
    }
});
