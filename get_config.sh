#!/bin/bash
curl https://demo.confighub.com/rest/rawFile -H "Client-Token: $CONFIG_KEY" -H "Context: dev;firefly" -H "File: .env" -H "Application-Name: web-ui" -o ".env"