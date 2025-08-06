/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 133468.0, "minX": 0.0, "maxY": 134350.0, "series": [{"data": [[0.0, 133468.0], [0.1, 133468.0], [0.2, 133468.0], [0.3, 133468.0], [0.4, 133468.0], [0.5, 133468.0], [0.6, 133468.0], [0.7, 133468.0], [0.8, 133468.0], [0.9, 133468.0], [1.0, 133480.0], [1.1, 133480.0], [1.2, 133480.0], [1.3, 133480.0], [1.4, 133480.0], [1.5, 133480.0], [1.6, 133480.0], [1.7, 133480.0], [1.8, 133480.0], [1.9, 133480.0], [2.0, 133492.0], [2.1, 133492.0], [2.2, 133492.0], [2.3, 133492.0], [2.4, 133492.0], [2.5, 133492.0], [2.6, 133492.0], [2.7, 133492.0], [2.8, 133492.0], [2.9, 133492.0], [3.0, 133500.0], [3.1, 133500.0], [3.2, 133500.0], [3.3, 133500.0], [3.4, 133500.0], [3.5, 133500.0], [3.6, 133500.0], [3.7, 133500.0], [3.8, 133500.0], [3.9, 133500.0], [4.0, 133511.0], [4.1, 133511.0], [4.2, 133511.0], [4.3, 133511.0], [4.4, 133511.0], [4.5, 133511.0], [4.6, 133511.0], [4.7, 133511.0], [4.8, 133511.0], [4.9, 133511.0], [5.0, 133521.0], [5.1, 133521.0], [5.2, 133521.0], [5.3, 133521.0], [5.4, 133521.0], [5.5, 133521.0], [5.6, 133521.0], [5.7, 133521.0], [5.8, 133521.0], [5.9, 133521.0], [6.0, 133529.0], [6.1, 133529.0], [6.2, 133529.0], [6.3, 133529.0], [6.4, 133529.0], [6.5, 133529.0], [6.6, 133529.0], [6.7, 133529.0], [6.8, 133529.0], [6.9, 133529.0], [7.0, 133541.0], [7.1, 133541.0], [7.2, 133541.0], [7.3, 133541.0], [7.4, 133541.0], [7.5, 133541.0], [7.6, 133541.0], [7.7, 133541.0], [7.8, 133541.0], [7.9, 133541.0], [8.0, 133550.0], [8.1, 133550.0], [8.2, 133550.0], [8.3, 133550.0], [8.4, 133550.0], [8.5, 133550.0], [8.6, 133550.0], [8.7, 133550.0], [8.8, 133550.0], [8.9, 133550.0], [9.0, 133560.0], [9.1, 133560.0], [9.2, 133560.0], [9.3, 133560.0], [9.4, 133560.0], [9.5, 133560.0], [9.6, 133560.0], [9.7, 133560.0], [9.8, 133560.0], [9.9, 133560.0], [10.0, 133570.0], [10.1, 133570.0], [10.2, 133570.0], [10.3, 133570.0], [10.4, 133570.0], [10.5, 133570.0], [10.6, 133570.0], [10.7, 133570.0], [10.8, 133570.0], [10.9, 133570.0], [11.0, 133580.0], [11.1, 133580.0], [11.2, 133580.0], [11.3, 133580.0], [11.4, 133580.0], [11.5, 133580.0], [11.6, 133580.0], [11.7, 133580.0], [11.8, 133580.0], [11.9, 133580.0], [12.0, 133590.0], [12.1, 133590.0], [12.2, 133590.0], [12.3, 133590.0], [12.4, 133590.0], [12.5, 133590.0], [12.6, 133590.0], [12.7, 133590.0], [12.8, 133590.0], [12.9, 133590.0], [13.0, 133600.0], [13.1, 133600.0], [13.2, 133600.0], [13.3, 133600.0], [13.4, 133600.0], [13.5, 133600.0], [13.6, 133600.0], [13.7, 133600.0], [13.8, 133600.0], [13.9, 133600.0], [14.0, 133611.0], [14.1, 133611.0], [14.2, 133611.0], [14.3, 133611.0], [14.4, 133611.0], [14.5, 133611.0], [14.6, 133611.0], [14.7, 133611.0], [14.8, 133611.0], [14.9, 133611.0], [15.0, 133620.0], [15.1, 133620.0], [15.2, 133620.0], [15.3, 133620.0], [15.4, 133620.0], [15.5, 133620.0], [15.6, 133620.0], [15.7, 133620.0], [15.8, 133620.0], [15.9, 133620.0], [16.0, 133629.0], [16.1, 133629.0], [16.2, 133629.0], [16.3, 133629.0], [16.4, 133629.0], [16.5, 133629.0], [16.6, 133629.0], [16.7, 133629.0], [16.8, 133629.0], [16.9, 133629.0], [17.0, 133639.0], [17.1, 133639.0], [17.2, 133639.0], [17.3, 133639.0], [17.4, 133639.0], [17.5, 133639.0], [17.6, 133639.0], [17.7, 133639.0], [17.8, 133639.0], [17.9, 133639.0], [18.0, 133649.0], [18.1, 133649.0], [18.2, 133649.0], [18.3, 133649.0], [18.4, 133649.0], [18.5, 133649.0], [18.6, 133649.0], [18.7, 133649.0], [18.8, 133649.0], [18.9, 133649.0], [19.0, 133662.0], [19.1, 133662.0], [19.2, 133662.0], [19.3, 133662.0], [19.4, 133662.0], [19.5, 133662.0], [19.6, 133662.0], [19.7, 133662.0], [19.8, 133662.0], [19.9, 133662.0], [20.0, 133669.0], [20.1, 133669.0], [20.2, 133669.0], [20.3, 133669.0], [20.4, 133669.0], [20.5, 133669.0], [20.6, 133669.0], [20.7, 133669.0], [20.8, 133669.0], [20.9, 133669.0], [21.0, 133679.0], [21.1, 133679.0], [21.2, 133679.0], [21.3, 133679.0], [21.4, 133679.0], [21.5, 133679.0], [21.6, 133679.0], [21.7, 133679.0], [21.8, 133679.0], [21.9, 133679.0], [22.0, 133692.0], [22.1, 133692.0], [22.2, 133692.0], [22.3, 133692.0], [22.4, 133692.0], [22.5, 133692.0], [22.6, 133692.0], [22.7, 133692.0], [22.8, 133692.0], [22.9, 133692.0], [23.0, 133699.0], [23.1, 133699.0], [23.2, 133699.0], [23.3, 133699.0], [23.4, 133699.0], [23.5, 133699.0], [23.6, 133699.0], [23.7, 133699.0], [23.8, 133699.0], [23.9, 133699.0], [24.0, 133709.0], [24.1, 133709.0], [24.2, 133709.0], [24.3, 133709.0], [24.4, 133709.0], [24.5, 133709.0], [24.6, 133709.0], [24.7, 133709.0], [24.8, 133709.0], [24.9, 133709.0], [25.0, 133722.0], [25.1, 133722.0], [25.2, 133722.0], [25.3, 133722.0], [25.4, 133722.0], [25.5, 133722.0], [25.6, 133722.0], [25.7, 133722.0], [25.8, 133722.0], [25.9, 133722.0], [26.0, 133729.0], [26.1, 133729.0], [26.2, 133729.0], [26.3, 133729.0], [26.4, 133729.0], [26.5, 133729.0], [26.6, 133729.0], [26.7, 133729.0], [26.8, 133729.0], [26.9, 133729.0], [27.0, 133740.0], [27.1, 133740.0], [27.2, 133740.0], [27.3, 133740.0], [27.4, 133740.0], [27.5, 133740.0], [27.6, 133740.0], [27.7, 133740.0], [27.8, 133740.0], [27.9, 133740.0], [28.0, 133750.0], [28.1, 133750.0], [28.2, 133750.0], [28.3, 133750.0], [28.4, 133750.0], [28.5, 133750.0], [28.6, 133750.0], [28.7, 133750.0], [28.8, 133750.0], [28.9, 133750.0], [29.0, 133760.0], [29.1, 133760.0], [29.2, 133760.0], [29.3, 133760.0], [29.4, 133760.0], [29.5, 133760.0], [29.6, 133760.0], [29.7, 133760.0], [29.8, 133760.0], [29.9, 133760.0], [30.0, 133770.0], [30.1, 133770.0], [30.2, 133770.0], [30.3, 133770.0], [30.4, 133770.0], [30.5, 133770.0], [30.6, 133770.0], [30.7, 133770.0], [30.8, 133770.0], [30.9, 133770.0], [31.0, 133780.0], [31.1, 133780.0], [31.2, 133780.0], [31.3, 133780.0], [31.4, 133780.0], [31.5, 133780.0], [31.6, 133780.0], [31.7, 133780.0], [31.8, 133780.0], [31.9, 133780.0], [32.0, 133792.0], [32.1, 133792.0], [32.2, 133792.0], [32.3, 133792.0], [32.4, 133792.0], [32.5, 133792.0], [32.6, 133792.0], [32.7, 133792.0], [32.8, 133792.0], [32.9, 133792.0], [33.0, 133799.0], [33.1, 133799.0], [33.2, 133799.0], [33.3, 133799.0], [33.4, 133799.0], [33.5, 133799.0], [33.6, 133799.0], [33.7, 133799.0], [33.8, 133799.0], [33.9, 133799.0], [34.0, 133812.0], [34.1, 133812.0], [34.2, 133812.0], [34.3, 133812.0], [34.4, 133812.0], [34.5, 133812.0], [34.6, 133812.0], [34.7, 133812.0], [34.8, 133812.0], [34.9, 133812.0], [35.0, 133819.0], [35.1, 133819.0], [35.2, 133819.0], [35.3, 133819.0], [35.4, 133819.0], [35.5, 133819.0], [35.6, 133819.0], [35.7, 133819.0], [35.8, 133819.0], [35.9, 133819.0], [36.0, 133829.0], [36.1, 133829.0], [36.2, 133829.0], [36.3, 133829.0], [36.4, 133829.0], [36.5, 133829.0], [36.6, 133829.0], [36.7, 133829.0], [36.8, 133829.0], [36.9, 133829.0], [37.0, 133839.0], [37.1, 133839.0], [37.2, 133839.0], [37.3, 133839.0], [37.4, 133839.0], [37.5, 133839.0], [37.6, 133839.0], [37.7, 133839.0], [37.8, 133839.0], [37.9, 133839.0], [38.0, 133849.0], [38.1, 133849.0], [38.2, 133849.0], [38.3, 133849.0], [38.4, 133849.0], [38.5, 133849.0], [38.6, 133849.0], [38.7, 133849.0], [38.8, 133849.0], [38.9, 133849.0], [39.0, 133858.0], [39.1, 133858.0], [39.2, 133858.0], [39.3, 133858.0], [39.4, 133858.0], [39.5, 133858.0], [39.6, 133858.0], [39.7, 133858.0], [39.8, 133858.0], [39.9, 133858.0], [40.0, 133871.0], [40.1, 133871.0], [40.2, 133871.0], [40.3, 133871.0], [40.4, 133871.0], [40.5, 133871.0], [40.6, 133871.0], [40.7, 133871.0], [40.8, 133871.0], [40.9, 133871.0], [41.0, 133880.0], [41.1, 133880.0], [41.2, 133880.0], [41.3, 133880.0], [41.4, 133880.0], [41.5, 133880.0], [41.6, 133880.0], [41.7, 133880.0], [41.8, 133880.0], [41.9, 133880.0], [42.0, 133889.0], [42.1, 133889.0], [42.2, 133889.0], [42.3, 133889.0], [42.4, 133889.0], [42.5, 133889.0], [42.6, 133889.0], [42.7, 133889.0], [42.8, 133889.0], [42.9, 133889.0], [43.0, 133902.0], [43.1, 133902.0], [43.2, 133902.0], [43.3, 133902.0], [43.4, 133902.0], [43.5, 133902.0], [43.6, 133902.0], [43.7, 133902.0], [43.8, 133902.0], [43.9, 133902.0], [44.0, 133911.0], [44.1, 133911.0], [44.2, 133911.0], [44.3, 133911.0], [44.4, 133911.0], [44.5, 133911.0], [44.6, 133911.0], [44.7, 133911.0], [44.8, 133911.0], [44.9, 133911.0], [45.0, 133921.0], [45.1, 133921.0], [45.2, 133921.0], [45.3, 133921.0], [45.4, 133921.0], [45.5, 133921.0], [45.6, 133921.0], [45.7, 133921.0], [45.8, 133921.0], [45.9, 133921.0], [46.0, 133932.0], [46.1, 133932.0], [46.2, 133932.0], [46.3, 133932.0], [46.4, 133932.0], [46.5, 133932.0], [46.6, 133932.0], [46.7, 133932.0], [46.8, 133932.0], [46.9, 133932.0], [47.0, 133942.0], [47.1, 133942.0], [47.2, 133942.0], [47.3, 133942.0], [47.4, 133942.0], [47.5, 133942.0], [47.6, 133942.0], [47.7, 133942.0], [47.8, 133942.0], [47.9, 133942.0], [48.0, 133950.0], [48.1, 133950.0], [48.2, 133950.0], [48.3, 133950.0], [48.4, 133950.0], [48.5, 133950.0], [48.6, 133950.0], [48.7, 133950.0], [48.8, 133950.0], [48.9, 133950.0], [49.0, 133960.0], [49.1, 133960.0], [49.2, 133960.0], [49.3, 133960.0], [49.4, 133960.0], [49.5, 133960.0], [49.6, 133960.0], [49.7, 133960.0], [49.8, 133960.0], [49.9, 133960.0], [50.0, 133969.0], [50.1, 133969.0], [50.2, 133969.0], [50.3, 133969.0], [50.4, 133969.0], [50.5, 133969.0], [50.6, 133969.0], [50.7, 133969.0], [50.8, 133969.0], [50.9, 133969.0], [51.0, 133981.0], [51.1, 133981.0], [51.2, 133981.0], [51.3, 133981.0], [51.4, 133981.0], [51.5, 133981.0], [51.6, 133981.0], [51.7, 133981.0], [51.8, 133981.0], [51.9, 133981.0], [52.0, 133991.0], [52.1, 133991.0], [52.2, 133991.0], [52.3, 133991.0], [52.4, 133991.0], [52.5, 133991.0], [52.6, 133991.0], [52.7, 133991.0], [52.8, 133991.0], [52.9, 133991.0], [53.0, 134000.0], [53.1, 134000.0], [53.2, 134000.0], [53.3, 134000.0], [53.4, 134000.0], [53.5, 134000.0], [53.6, 134000.0], [53.7, 134000.0], [53.8, 134000.0], [53.9, 134000.0], [54.0, 134010.0], [54.1, 134010.0], [54.2, 134010.0], [54.3, 134010.0], [54.4, 134010.0], [54.5, 134010.0], [54.6, 134010.0], [54.7, 134010.0], [54.8, 134010.0], [54.9, 134010.0], [55.0, 134020.0], [55.1, 134020.0], [55.2, 134020.0], [55.3, 134020.0], [55.4, 134020.0], [55.5, 134020.0], [55.6, 134020.0], [55.7, 134020.0], [55.8, 134020.0], [55.9, 134020.0], [56.0, 134028.0], [56.1, 134028.0], [56.2, 134028.0], [56.3, 134028.0], [56.4, 134028.0], [56.5, 134028.0], [56.6, 134028.0], [56.7, 134028.0], [56.8, 134028.0], [56.9, 134028.0], [57.0, 134040.0], [57.1, 134040.0], [57.2, 134040.0], [57.3, 134040.0], [57.4, 134040.0], [57.5, 134040.0], [57.6, 134040.0], [57.7, 134040.0], [57.8, 134040.0], [57.9, 134040.0], [58.0, 134050.0], [58.1, 134050.0], [58.2, 134050.0], [58.3, 134050.0], [58.4, 134050.0], [58.5, 134050.0], [58.6, 134050.0], [58.7, 134050.0], [58.8, 134050.0], [58.9, 134050.0], [59.0, 134060.0], [59.1, 134060.0], [59.2, 134060.0], [59.3, 134060.0], [59.4, 134060.0], [59.5, 134060.0], [59.6, 134060.0], [59.7, 134060.0], [59.8, 134060.0], [59.9, 134060.0], [60.0, 134070.0], [60.1, 134070.0], [60.2, 134070.0], [60.3, 134070.0], [60.4, 134070.0], [60.5, 134070.0], [60.6, 134070.0], [60.7, 134070.0], [60.8, 134070.0], [60.9, 134070.0], [61.0, 134080.0], [61.1, 134080.0], [61.2, 134080.0], [61.3, 134080.0], [61.4, 134080.0], [61.5, 134080.0], [61.6, 134080.0], [61.7, 134080.0], [61.8, 134080.0], [61.9, 134080.0], [62.0, 134092.0], [62.1, 134092.0], [62.2, 134092.0], [62.3, 134092.0], [62.4, 134092.0], [62.5, 134092.0], [62.6, 134092.0], [62.7, 134092.0], [62.8, 134092.0], [62.9, 134092.0], [63.0, 134100.0], [63.1, 134100.0], [63.2, 134100.0], [63.3, 134100.0], [63.4, 134100.0], [63.5, 134100.0], [63.6, 134100.0], [63.7, 134100.0], [63.8, 134100.0], [63.9, 134100.0], [64.0, 134110.0], [64.1, 134110.0], [64.2, 134110.0], [64.3, 134110.0], [64.4, 134110.0], [64.5, 134110.0], [64.6, 134110.0], [64.7, 134110.0], [64.8, 134110.0], [64.9, 134110.0], [65.0, 134120.0], [65.1, 134120.0], [65.2, 134120.0], [65.3, 134120.0], [65.4, 134120.0], [65.5, 134120.0], [65.6, 134120.0], [65.7, 134120.0], [65.8, 134120.0], [65.9, 134120.0], [66.0, 134130.0], [66.1, 134130.0], [66.2, 134130.0], [66.3, 134130.0], [66.4, 134130.0], [66.5, 134130.0], [66.6, 134130.0], [66.7, 134130.0], [66.8, 134130.0], [66.9, 134130.0], [67.0, 134139.0], [67.1, 134139.0], [67.2, 134139.0], [67.3, 134139.0], [67.4, 134139.0], [67.5, 134139.0], [67.6, 134139.0], [67.7, 134139.0], [67.8, 134139.0], [67.9, 134139.0], [68.0, 134148.0], [68.1, 134148.0], [68.2, 134148.0], [68.3, 134148.0], [68.4, 134148.0], [68.5, 134148.0], [68.6, 134148.0], [68.7, 134148.0], [68.8, 134148.0], [68.9, 134148.0], [69.0, 134159.0], [69.1, 134159.0], [69.2, 134159.0], [69.3, 134159.0], [69.4, 134159.0], [69.5, 134159.0], [69.6, 134159.0], [69.7, 134159.0], [69.8, 134159.0], [69.9, 134159.0], [70.0, 134169.0], [70.1, 134169.0], [70.2, 134169.0], [70.3, 134169.0], [70.4, 134169.0], [70.5, 134169.0], [70.6, 134169.0], [70.7, 134169.0], [70.8, 134169.0], [70.9, 134169.0], [71.0, 134179.0], [71.1, 134179.0], [71.2, 134179.0], [71.3, 134179.0], [71.4, 134179.0], [71.5, 134179.0], [71.6, 134179.0], [71.7, 134179.0], [71.8, 134179.0], [71.9, 134179.0], [72.0, 134190.0], [72.1, 134190.0], [72.2, 134190.0], [72.3, 134190.0], [72.4, 134190.0], [72.5, 134190.0], [72.6, 134190.0], [72.7, 134190.0], [72.8, 134190.0], [72.9, 134190.0], [73.0, 134202.0], [73.1, 134202.0], [73.2, 134202.0], [73.3, 134202.0], [73.4, 134202.0], [73.5, 134202.0], [73.6, 134202.0], [73.7, 134202.0], [73.8, 134202.0], [73.9, 134202.0], [74.0, 134211.0], [74.1, 134211.0], [74.2, 134211.0], [74.3, 134211.0], [74.4, 134211.0], [74.5, 134211.0], [74.6, 134211.0], [74.7, 134211.0], [74.8, 134211.0], [74.9, 134211.0], [75.0, 134220.0], [75.1, 134220.0], [75.2, 134220.0], [75.3, 134220.0], [75.4, 134220.0], [75.5, 134220.0], [75.6, 134220.0], [75.7, 134220.0], [75.8, 134220.0], [75.9, 134220.0], [76.0, 134231.0], [76.1, 134231.0], [76.2, 134231.0], [76.3, 134231.0], [76.4, 134231.0], [76.5, 134231.0], [76.6, 134231.0], [76.7, 134231.0], [76.8, 134231.0], [76.9, 134231.0], [77.0, 134241.0], [77.1, 134241.0], [77.2, 134241.0], [77.3, 134241.0], [77.4, 134241.0], [77.5, 134241.0], [77.6, 134241.0], [77.7, 134241.0], [77.8, 134241.0], [77.9, 134241.0], [78.0, 134259.0], [78.1, 134259.0], [78.2, 134259.0], [78.3, 134259.0], [78.4, 134259.0], [78.5, 134259.0], [78.6, 134259.0], [78.7, 134259.0], [78.8, 134259.0], [78.9, 134259.0], [79.0, 134262.0], [79.1, 134262.0], [79.2, 134262.0], [79.3, 134262.0], [79.4, 134262.0], [79.5, 134262.0], [79.6, 134262.0], [79.7, 134262.0], [79.8, 134262.0], [79.9, 134262.0], [80.0, 134269.0], [80.1, 134269.0], [80.2, 134269.0], [80.3, 134269.0], [80.4, 134269.0], [80.5, 134269.0], [80.6, 134269.0], [80.7, 134269.0], [80.8, 134269.0], [80.9, 134269.0], [81.0, 134281.0], [81.1, 134281.0], [81.2, 134281.0], [81.3, 134281.0], [81.4, 134281.0], [81.5, 134281.0], [81.6, 134281.0], [81.7, 134281.0], [81.8, 134281.0], [81.9, 134281.0], [82.0, 134292.0], [82.1, 134292.0], [82.2, 134292.0], [82.3, 134292.0], [82.4, 134292.0], [82.5, 134292.0], [82.6, 134292.0], [82.7, 134292.0], [82.8, 134292.0], [82.9, 134292.0], [83.0, 134300.0], [83.1, 134300.0], [83.2, 134300.0], [83.3, 134300.0], [83.4, 134300.0], [83.5, 134300.0], [83.6, 134300.0], [83.7, 134300.0], [83.8, 134300.0], [83.9, 134300.0], [84.0, 134309.0], [84.1, 134309.0], [84.2, 134309.0], [84.3, 134309.0], [84.4, 134309.0], [84.5, 134309.0], [84.6, 134309.0], [84.7, 134309.0], [84.8, 134309.0], [84.9, 134309.0], [85.0, 134319.0], [85.1, 134319.0], [85.2, 134319.0], [85.3, 134319.0], [85.4, 134319.0], [85.5, 134319.0], [85.6, 134319.0], [85.7, 134319.0], [85.8, 134319.0], [85.9, 134319.0], [86.0, 134329.0], [86.1, 134329.0], [86.2, 134329.0], [86.3, 134329.0], [86.4, 134329.0], [86.5, 134329.0], [86.6, 134329.0], [86.7, 134329.0], [86.8, 134329.0], [86.9, 134329.0], [87.0, 134340.0], [87.1, 134340.0], [87.2, 134340.0], [87.3, 134340.0], [87.4, 134340.0], [87.5, 134340.0], [87.6, 134340.0], [87.7, 134340.0], [87.8, 134340.0], [87.9, 134340.0], [88.0, 134346.0], [88.1, 134346.0], [88.2, 134346.0], [88.3, 134346.0], [88.4, 134346.0], [88.5, 134346.0], [88.6, 134346.0], [88.7, 134346.0], [88.8, 134346.0], [88.9, 134346.0], [89.0, 134347.0], [89.1, 134347.0], [89.2, 134347.0], [89.3, 134347.0], [89.4, 134347.0], [89.5, 134347.0], [89.6, 134347.0], [89.7, 134347.0], [89.8, 134347.0], [89.9, 134347.0], [90.0, 134347.0], [90.1, 134347.0], [90.2, 134347.0], [90.3, 134347.0], [90.4, 134347.0], [90.5, 134347.0], [90.6, 134347.0], [90.7, 134347.0], [90.8, 134347.0], [90.9, 134347.0], [91.0, 134347.0], [91.1, 134347.0], [91.2, 134347.0], [91.3, 134347.0], [91.4, 134347.0], [91.5, 134347.0], [91.6, 134347.0], [91.7, 134347.0], [91.8, 134347.0], [91.9, 134347.0], [92.0, 134348.0], [92.1, 134348.0], [92.2, 134348.0], [92.3, 134348.0], [92.4, 134348.0], [92.5, 134348.0], [92.6, 134348.0], [92.7, 134348.0], [92.8, 134348.0], [92.9, 134348.0], [93.0, 134348.0], [93.1, 134348.0], [93.2, 134348.0], [93.3, 134348.0], [93.4, 134348.0], [93.5, 134348.0], [93.6, 134348.0], [93.7, 134348.0], [93.8, 134348.0], [93.9, 134348.0], [94.0, 134348.0], [94.1, 134348.0], [94.2, 134348.0], [94.3, 134348.0], [94.4, 134348.0], [94.5, 134348.0], [94.6, 134348.0], [94.7, 134348.0], [94.8, 134348.0], [94.9, 134348.0], [95.0, 134349.0], [95.1, 134349.0], [95.2, 134349.0], [95.3, 134349.0], [95.4, 134349.0], [95.5, 134349.0], [95.6, 134349.0], [95.7, 134349.0], [95.8, 134349.0], [95.9, 134349.0], [96.0, 134349.0], [96.1, 134349.0], [96.2, 134349.0], [96.3, 134349.0], [96.4, 134349.0], [96.5, 134349.0], [96.6, 134349.0], [96.7, 134349.0], [96.8, 134349.0], [96.9, 134349.0], [97.0, 134349.0], [97.1, 134349.0], [97.2, 134349.0], [97.3, 134349.0], [97.4, 134349.0], [97.5, 134349.0], [97.6, 134349.0], [97.7, 134349.0], [97.8, 134349.0], [97.9, 134349.0], [98.0, 134350.0], [98.1, 134350.0], [98.2, 134350.0], [98.3, 134350.0], [98.4, 134350.0], [98.5, 134350.0], [98.6, 134350.0], [98.7, 134350.0], [98.8, 134350.0], [98.9, 134350.0], [99.0, 134350.0], [99.1, 134350.0], [99.2, 134350.0], [99.3, 134350.0], [99.4, 134350.0], [99.5, 134350.0], [99.6, 134350.0], [99.7, 134350.0], [99.8, 134350.0], [99.9, 134350.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 133400.0, "maxY": 17.0, "series": [{"data": [[133600.0, 11.0], [134200.0, 10.0], [133800.0, 9.0], [133400.0, 3.0], [134000.0, 10.0], [133700.0, 10.0], [133900.0, 10.0], [133500.0, 10.0], [134100.0, 10.0], [134300.0, 17.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 134300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 100.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 57.959999999999994, "minX": 1.7544519E12, "maxY": 57.959999999999994, "series": [{"data": [[1.7544519E12, 57.959999999999994]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7544519E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 133468.0, "minX": 8.0, "maxY": 134349.0, "series": [{"data": [[8.0, 133829.0], [9.0, 133669.0], [10.0, 133839.0], [11.0, 133529.0], [13.0, 134079.0], [18.0, 133913.5], [20.0, 133799.0], [21.0, 133889.0], [23.0, 134102.0], [24.0, 133899.0], [26.0, 133699.0], [27.0, 133894.0], [28.0, 134179.0], [30.0, 133928.5], [31.0, 133639.0], [33.0, 133480.0], [32.0, 133960.0], [35.0, 133570.0], [34.0, 134060.0], [37.0, 134130.0], [36.0, 133871.0], [38.0, 133468.0], [40.0, 133995.0], [43.0, 134028.0], [42.0, 134070.0], [45.0, 134055.66666666666], [46.0, 134040.0], [49.0, 134223.5], [48.0, 133750.0], [51.0, 134319.0], [53.0, 133760.0], [52.0, 134348.0], [55.0, 134060.0], [56.0, 134059.0], [59.0, 134246.0], [60.0, 133780.0], [63.0, 134020.0], [62.0, 133815.0], [67.0, 133590.0], [66.0, 133580.0], [65.0, 133560.0], [64.0, 133550.0], [71.0, 133796.0], [69.0, 133600.0], [68.0, 133950.0], [75.0, 134190.0], [74.0, 133745.5], [73.0, 133541.0], [78.0, 134130.0], [77.0, 134220.0], [83.0, 134324.5], [81.0, 134339.5], [80.0, 134349.0], [87.0, 133921.0], [85.0, 134016.5], [91.0, 134245.0], [90.0, 133679.0], [89.0, 134292.0], [88.0, 134202.0], [94.0, 134068.33333333334], [98.0, 133717.0], [96.0, 134006.0], [100.0, 133876.8888888889]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[57.959999999999994, 133958.34000000005]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.7544519E12, "maxY": 4708.333333333333, "series": [{"data": [[1.7544519E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7544519E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7544519E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 133958.34000000005, "minX": 1.7544519E12, "maxY": 133958.34000000005, "series": [{"data": [[1.7544519E12, 133958.34000000005]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7544519E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.7544519E12, "maxY": 4.9E-324, "series": [{"data": [[1.7544519E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7544519E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 133958.15999999995, "minX": 1.7544519E12, "maxY": 133958.15999999995, "series": [{"data": [[1.7544519E12, 133958.15999999995]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7544519E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 133964.5, "minX": 100.0, "maxY": 133964.5, "series": [{"data": [[100.0, 133964.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 100.0, "maxY": 4.9E-324, "series": [{"data": [[100.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75445178E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75445178E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75445178E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7544519E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7544519E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7544519E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7544519E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7544519E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7544519E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7544519E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7544519E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7544519E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

