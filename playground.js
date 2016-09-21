function lookUpGeoIp() {
    var geoip = require('geoip');
    var edition = geoip.check(process.env.GEOIP_DATABASE);
    console.log(edition);

    var City = geoip.City;

    var city = new City(process.env.GEOIP_DATABASE);

    var city_obj = city.lookupSync('1.2.236.30');

    console.log(city_obj);
}

function downloadGeoIpDatabase() {
    const exec = require('child_process').exec;

    exec('./downloadGeoipDatabase.sh', function(error, stdout, stderr) {
        if (error) {
            console.error("exec error:", error);
            return;
        }
        console.error("exec stdout:", stdout);
        console.error("exec stderr:", stderr);
    });
}

lookUpGeoIp();
downloadGeoIpDatabase();