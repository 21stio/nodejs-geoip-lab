#!/bin/bash

set -e

geoip_database_location=http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz
destination=geoip_database

wget ${geoip_database_location} -O ${destination}.gz
gzip --decompress --stdout ${destination}.gz > ${destination}.dat