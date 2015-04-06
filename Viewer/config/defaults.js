﻿/*global define,location */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
    //Default configuration settings for the application. This is where you'll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",//"73909e939be34d2b931f0765ba3bf4a6",
    "webmap": "f5b13dbed07c46cdb783cf361833aa6b",
    "oauthappid": null, //"AFTKRmv16wj14N3z",
    //Group templates must support a group url parameter. This will contain the id of the group.
    //group: "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    //If you need localization set the localize value to true to get the localized strings
    //from the javascript/nls/resource files.
    //Note that we've included a placeholder nls folder and a resource file with one error string
    //to show how to setup the strings file.
    "localize": true,
    "units": null,
    //Theme defines the background color of the title area and tool dialog
    //Color defines the text color for the title and details. Note that
    //both these values must be specified as hex colors.
    "theme": "#80ab00",
    "color": "#fff",
    //Specify the tool icon color for the tools on the toolbar and the menu icon.
    // Valid values are white and black.
    "icons": "white",
    "logo": null,
    //Set of tools that will be added to the toolbar
    "tools": [
        {"name": "legend", "enabled": true},
        {"name": "bookmarks", "enabled": true},
        {"name": "layers", "enabled": true},
        {"name": "basemap", "enabled": true},
        {"name": "overview", "enabled": true},
        {"name": "measure", "enabled": true},
        {"name": "edit", "enabled": true, "toolbar": false}, 
        {"name": "print", "enabled": true, "legend": false, "layouts":false, "format":"pdf"},
        {"name": "details", "enabled": true},
        {"name": "share", "enabled": true}
    ],
    //Set the active tool on the toolbar. Note home and locate can't be the active tool.
    //Set to "" to display no tools at startup
    "activeTool": "legend",
    //Add the geocoding tool next to the title bar.
    "search": true,
    "locationSearch": true,
    //When searchExtent is true the locator will prioritize results within the current map extent.
    "searchExtent": false,
    "searchLayers":[{
        "id": "",
        "fields": []
    }],
    //Add the home extent button to the toolbar
    "home": true,
    //Add the geolocation button on the toolbar. Only displayed if browser supports geolocation
    "locate": true,
    //When true display a scalebar on the map
    "scalebar": false,
    //Specify a title for the application. If not provided the web map title is used.
    "title": "",
    //Optionally specify some sub title text. 
    "subtitle":null,
    "level": null,
    "center": null,
    //Replace these with your own bitly key
    "bitlyLogin": "esrimarketing",
    "bitlyKey": "R_52f84981da0e75b23aea2b3b20cbafbc"
});
