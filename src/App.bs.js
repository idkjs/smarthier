// Generated by BUCKLESCRIPT VERSION 5.0.1, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as ReactLeaflet from "react-leaflet";
import * as Data$ReactTemplate from "./Data.bs.js";
import * as Styles$ReactTemplate from "./Styles.bs.js";

function s(prim) {
  return prim;
}

function App(Props) {
  return React.createElement("div", undefined, React.createElement("h1", undefined, "Cities"), React.createElement("ul", undefined, Belt_List.toArray(Belt_List.map(Data$ReactTemplate.cities, (function (city) {
                            return React.createElement("li", {
                                        key: city[/* id */0]
                                      }, city[/* name */1]);
                          })))), React.createElement(ReactLeaflet.Map, {
                  center: /* tuple */[
                    10,
                    10
                  ],
                  zoom: 1,
                  className: Styles$ReactTemplate.mapClass,
                  children: null
                }, React.createElement(ReactLeaflet.TileLayer, {
                      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    }), Belt_List.toArray(Belt_List.map(Data$ReactTemplate.cities, (function (city) {
                            return React.createElement(ReactLeaflet.Marker, {
                                        position: /* tuple */[
                                          city[/* coordinates */2][/* lat */0],
                                          city[/* coordinates */2][/* lng */1]
                                        ],
                                        key: city[/* id */0]
                                      });
                          })))));
}

var make = App;

export {
  s ,
  make ,
  
}
/* react Not a pure module */
