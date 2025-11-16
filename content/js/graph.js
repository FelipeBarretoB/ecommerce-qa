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
        data: {"result": {"minY": 133726.0, "minX": 0.0, "maxY": 134612.0, "series": [{"data": [[0.0, 133726.0], [0.1, 133726.0], [0.2, 133726.0], [0.3, 133726.0], [0.4, 133726.0], [0.5, 133726.0], [0.6, 133726.0], [0.7, 133726.0], [0.8, 133726.0], [0.9, 133726.0], [1.0, 133745.0], [1.1, 133745.0], [1.2, 133745.0], [1.3, 133745.0], [1.4, 133745.0], [1.5, 133745.0], [1.6, 133745.0], [1.7, 133745.0], [1.8, 133745.0], [1.9, 133745.0], [2.0, 133767.0], [2.1, 133767.0], [2.2, 133767.0], [2.3, 133767.0], [2.4, 133767.0], [2.5, 133767.0], [2.6, 133767.0], [2.7, 133767.0], [2.8, 133767.0], [2.9, 133767.0], [3.0, 133773.0], [3.1, 133773.0], [3.2, 133773.0], [3.3, 133773.0], [3.4, 133773.0], [3.5, 133773.0], [3.6, 133773.0], [3.7, 133773.0], [3.8, 133773.0], [3.9, 133773.0], [4.0, 133783.0], [4.1, 133783.0], [4.2, 133783.0], [4.3, 133783.0], [4.4, 133783.0], [4.5, 133783.0], [4.6, 133783.0], [4.7, 133783.0], [4.8, 133783.0], [4.9, 133783.0], [5.0, 133790.0], [5.1, 133790.0], [5.2, 133790.0], [5.3, 133790.0], [5.4, 133790.0], [5.5, 133790.0], [5.6, 133790.0], [5.7, 133790.0], [5.8, 133790.0], [5.9, 133790.0], [6.0, 133799.0], [6.1, 133799.0], [6.2, 133799.0], [6.3, 133799.0], [6.4, 133799.0], [6.5, 133799.0], [6.6, 133799.0], [6.7, 133799.0], [6.8, 133799.0], [6.9, 133799.0], [7.0, 133809.0], [7.1, 133809.0], [7.2, 133809.0], [7.3, 133809.0], [7.4, 133809.0], [7.5, 133809.0], [7.6, 133809.0], [7.7, 133809.0], [7.8, 133809.0], [7.9, 133809.0], [8.0, 133814.0], [8.1, 133814.0], [8.2, 133814.0], [8.3, 133814.0], [8.4, 133814.0], [8.5, 133814.0], [8.6, 133814.0], [8.7, 133814.0], [8.8, 133814.0], [8.9, 133814.0], [9.0, 133817.0], [9.1, 133817.0], [9.2, 133817.0], [9.3, 133817.0], [9.4, 133817.0], [9.5, 133817.0], [9.6, 133817.0], [9.7, 133817.0], [9.8, 133817.0], [9.9, 133817.0], [10.0, 133823.0], [10.1, 133823.0], [10.2, 133823.0], [10.3, 133823.0], [10.4, 133823.0], [10.5, 133823.0], [10.6, 133823.0], [10.7, 133823.0], [10.8, 133823.0], [10.9, 133823.0], [11.0, 133834.0], [11.1, 133834.0], [11.2, 133834.0], [11.3, 133834.0], [11.4, 133834.0], [11.5, 133834.0], [11.6, 133834.0], [11.7, 133834.0], [11.8, 133834.0], [11.9, 133834.0], [12.0, 133853.0], [12.1, 133853.0], [12.2, 133853.0], [12.3, 133853.0], [12.4, 133853.0], [12.5, 133853.0], [12.6, 133853.0], [12.7, 133853.0], [12.8, 133853.0], [12.9, 133853.0], [13.0, 133863.0], [13.1, 133863.0], [13.2, 133863.0], [13.3, 133863.0], [13.4, 133863.0], [13.5, 133863.0], [13.6, 133863.0], [13.7, 133863.0], [13.8, 133863.0], [13.9, 133863.0], [14.0, 133866.0], [14.1, 133866.0], [14.2, 133866.0], [14.3, 133866.0], [14.4, 133866.0], [14.5, 133866.0], [14.6, 133866.0], [14.7, 133866.0], [14.8, 133866.0], [14.9, 133866.0], [15.0, 133874.0], [15.1, 133874.0], [15.2, 133874.0], [15.3, 133874.0], [15.4, 133874.0], [15.5, 133874.0], [15.6, 133874.0], [15.7, 133874.0], [15.8, 133874.0], [15.9, 133874.0], [16.0, 133883.0], [16.1, 133883.0], [16.2, 133883.0], [16.3, 133883.0], [16.4, 133883.0], [16.5, 133883.0], [16.6, 133883.0], [16.7, 133883.0], [16.8, 133883.0], [16.9, 133883.0], [17.0, 133893.0], [17.1, 133893.0], [17.2, 133893.0], [17.3, 133893.0], [17.4, 133893.0], [17.5, 133893.0], [17.6, 133893.0], [17.7, 133893.0], [17.8, 133893.0], [17.9, 133893.0], [18.0, 133919.0], [18.1, 133919.0], [18.2, 133919.0], [18.3, 133919.0], [18.4, 133919.0], [18.5, 133919.0], [18.6, 133919.0], [18.7, 133919.0], [18.8, 133919.0], [18.9, 133919.0], [19.0, 133922.0], [19.1, 133922.0], [19.2, 133922.0], [19.3, 133922.0], [19.4, 133922.0], [19.5, 133922.0], [19.6, 133922.0], [19.7, 133922.0], [19.8, 133922.0], [19.9, 133922.0], [20.0, 133924.0], [20.1, 133924.0], [20.2, 133924.0], [20.3, 133924.0], [20.4, 133924.0], [20.5, 133924.0], [20.6, 133924.0], [20.7, 133924.0], [20.8, 133924.0], [20.9, 133924.0], [21.0, 133948.0], [21.1, 133948.0], [21.2, 133948.0], [21.3, 133948.0], [21.4, 133948.0], [21.5, 133948.0], [21.6, 133948.0], [21.7, 133948.0], [21.8, 133948.0], [21.9, 133948.0], [22.0, 133955.0], [22.1, 133955.0], [22.2, 133955.0], [22.3, 133955.0], [22.4, 133955.0], [22.5, 133955.0], [22.6, 133955.0], [22.7, 133955.0], [22.8, 133955.0], [22.9, 133955.0], [23.0, 133965.0], [23.1, 133965.0], [23.2, 133965.0], [23.3, 133965.0], [23.4, 133965.0], [23.5, 133965.0], [23.6, 133965.0], [23.7, 133965.0], [23.8, 133965.0], [23.9, 133965.0], [24.0, 133981.0], [24.1, 133981.0], [24.2, 133981.0], [24.3, 133981.0], [24.4, 133981.0], [24.5, 133981.0], [24.6, 133981.0], [24.7, 133981.0], [24.8, 133981.0], [24.9, 133981.0], [25.0, 133988.0], [25.1, 133988.0], [25.2, 133988.0], [25.3, 133988.0], [25.4, 133988.0], [25.5, 133988.0], [25.6, 133988.0], [25.7, 133988.0], [25.8, 133988.0], [25.9, 133988.0], [26.0, 133996.0], [26.1, 133996.0], [26.2, 133996.0], [26.3, 133996.0], [26.4, 133996.0], [26.5, 133996.0], [26.6, 133996.0], [26.7, 133996.0], [26.8, 133996.0], [26.9, 133996.0], [27.0, 134005.0], [27.1, 134005.0], [27.2, 134005.0], [27.3, 134005.0], [27.4, 134005.0], [27.5, 134005.0], [27.6, 134005.0], [27.7, 134005.0], [27.8, 134005.0], [27.9, 134005.0], [28.0, 134010.0], [28.1, 134010.0], [28.2, 134010.0], [28.3, 134010.0], [28.4, 134010.0], [28.5, 134010.0], [28.6, 134010.0], [28.7, 134010.0], [28.8, 134010.0], [28.9, 134010.0], [29.0, 134036.0], [29.1, 134036.0], [29.2, 134036.0], [29.3, 134036.0], [29.4, 134036.0], [29.5, 134036.0], [29.6, 134036.0], [29.7, 134036.0], [29.8, 134036.0], [29.9, 134036.0], [30.0, 134039.0], [30.1, 134039.0], [30.2, 134039.0], [30.3, 134039.0], [30.4, 134039.0], [30.5, 134039.0], [30.6, 134039.0], [30.7, 134039.0], [30.8, 134039.0], [30.9, 134039.0], [31.0, 134043.0], [31.1, 134043.0], [31.2, 134043.0], [31.3, 134043.0], [31.4, 134043.0], [31.5, 134043.0], [31.6, 134043.0], [31.7, 134043.0], [31.8, 134043.0], [31.9, 134043.0], [32.0, 134053.0], [32.1, 134053.0], [32.2, 134053.0], [32.3, 134053.0], [32.4, 134053.0], [32.5, 134053.0], [32.6, 134053.0], [32.7, 134053.0], [32.8, 134053.0], [32.9, 134053.0], [33.0, 134056.0], [33.1, 134056.0], [33.2, 134056.0], [33.3, 134056.0], [33.4, 134056.0], [33.5, 134056.0], [33.6, 134056.0], [33.7, 134056.0], [33.8, 134056.0], [33.9, 134056.0], [34.0, 134063.0], [34.1, 134063.0], [34.2, 134063.0], [34.3, 134063.0], [34.4, 134063.0], [34.5, 134063.0], [34.6, 134063.0], [34.7, 134063.0], [34.8, 134063.0], [34.9, 134063.0], [35.0, 134092.0], [35.1, 134092.0], [35.2, 134092.0], [35.3, 134092.0], [35.4, 134092.0], [35.5, 134092.0], [35.6, 134092.0], [35.7, 134092.0], [35.8, 134092.0], [35.9, 134092.0], [36.0, 134099.0], [36.1, 134099.0], [36.2, 134099.0], [36.3, 134099.0], [36.4, 134099.0], [36.5, 134099.0], [36.6, 134099.0], [36.7, 134099.0], [36.8, 134099.0], [36.9, 134099.0], [37.0, 134111.0], [37.1, 134111.0], [37.2, 134111.0], [37.3, 134111.0], [37.4, 134111.0], [37.5, 134111.0], [37.6, 134111.0], [37.7, 134111.0], [37.8, 134111.0], [37.9, 134111.0], [38.0, 134119.0], [38.1, 134119.0], [38.2, 134119.0], [38.3, 134119.0], [38.4, 134119.0], [38.5, 134119.0], [38.6, 134119.0], [38.7, 134119.0], [38.8, 134119.0], [38.9, 134119.0], [39.0, 134125.0], [39.1, 134125.0], [39.2, 134125.0], [39.3, 134125.0], [39.4, 134125.0], [39.5, 134125.0], [39.6, 134125.0], [39.7, 134125.0], [39.8, 134125.0], [39.9, 134125.0], [40.0, 134129.0], [40.1, 134129.0], [40.2, 134129.0], [40.3, 134129.0], [40.4, 134129.0], [40.5, 134129.0], [40.6, 134129.0], [40.7, 134129.0], [40.8, 134129.0], [40.9, 134129.0], [41.0, 134134.0], [41.1, 134134.0], [41.2, 134134.0], [41.3, 134134.0], [41.4, 134134.0], [41.5, 134134.0], [41.6, 134134.0], [41.7, 134134.0], [41.8, 134134.0], [41.9, 134134.0], [42.0, 134145.0], [42.1, 134145.0], [42.2, 134145.0], [42.3, 134145.0], [42.4, 134145.0], [42.5, 134145.0], [42.6, 134145.0], [42.7, 134145.0], [42.8, 134145.0], [42.9, 134145.0], [43.0, 134155.0], [43.1, 134155.0], [43.2, 134155.0], [43.3, 134155.0], [43.4, 134155.0], [43.5, 134155.0], [43.6, 134155.0], [43.7, 134155.0], [43.8, 134155.0], [43.9, 134155.0], [44.0, 134165.0], [44.1, 134165.0], [44.2, 134165.0], [44.3, 134165.0], [44.4, 134165.0], [44.5, 134165.0], [44.6, 134165.0], [44.7, 134165.0], [44.8, 134165.0], [44.9, 134165.0], [45.0, 134176.0], [45.1, 134176.0], [45.2, 134176.0], [45.3, 134176.0], [45.4, 134176.0], [45.5, 134176.0], [45.6, 134176.0], [45.7, 134176.0], [45.8, 134176.0], [45.9, 134176.0], [46.0, 134194.0], [46.1, 134194.0], [46.2, 134194.0], [46.3, 134194.0], [46.4, 134194.0], [46.5, 134194.0], [46.6, 134194.0], [46.7, 134194.0], [46.8, 134194.0], [46.9, 134194.0], [47.0, 134200.0], [47.1, 134200.0], [47.2, 134200.0], [47.3, 134200.0], [47.4, 134200.0], [47.5, 134200.0], [47.6, 134200.0], [47.7, 134200.0], [47.8, 134200.0], [47.9, 134200.0], [48.0, 134204.0], [48.1, 134204.0], [48.2, 134204.0], [48.3, 134204.0], [48.4, 134204.0], [48.5, 134204.0], [48.6, 134204.0], [48.7, 134204.0], [48.8, 134204.0], [48.9, 134204.0], [49.0, 134222.0], [49.1, 134222.0], [49.2, 134222.0], [49.3, 134222.0], [49.4, 134222.0], [49.5, 134222.0], [49.6, 134222.0], [49.7, 134222.0], [49.8, 134222.0], [49.9, 134222.0], [50.0, 134229.0], [50.1, 134229.0], [50.2, 134229.0], [50.3, 134229.0], [50.4, 134229.0], [50.5, 134229.0], [50.6, 134229.0], [50.7, 134229.0], [50.8, 134229.0], [50.9, 134229.0], [51.0, 134245.0], [51.1, 134245.0], [51.2, 134245.0], [51.3, 134245.0], [51.4, 134245.0], [51.5, 134245.0], [51.6, 134245.0], [51.7, 134245.0], [51.8, 134245.0], [51.9, 134245.0], [52.0, 134253.0], [52.1, 134253.0], [52.2, 134253.0], [52.3, 134253.0], [52.4, 134253.0], [52.5, 134253.0], [52.6, 134253.0], [52.7, 134253.0], [52.8, 134253.0], [52.9, 134253.0], [53.0, 134256.0], [53.1, 134256.0], [53.2, 134256.0], [53.3, 134256.0], [53.4, 134256.0], [53.5, 134256.0], [53.6, 134256.0], [53.7, 134256.0], [53.8, 134256.0], [53.9, 134256.0], [54.0, 134265.0], [54.1, 134265.0], [54.2, 134265.0], [54.3, 134265.0], [54.4, 134265.0], [54.5, 134265.0], [54.6, 134265.0], [54.7, 134265.0], [54.8, 134265.0], [54.9, 134265.0], [55.0, 134273.0], [55.1, 134273.0], [55.2, 134273.0], [55.3, 134273.0], [55.4, 134273.0], [55.5, 134273.0], [55.6, 134273.0], [55.7, 134273.0], [55.8, 134273.0], [55.9, 134273.0], [56.0, 134284.0], [56.1, 134284.0], [56.2, 134284.0], [56.3, 134284.0], [56.4, 134284.0], [56.5, 134284.0], [56.6, 134284.0], [56.7, 134284.0], [56.8, 134284.0], [56.9, 134284.0], [57.0, 134302.0], [57.1, 134302.0], [57.2, 134302.0], [57.3, 134302.0], [57.4, 134302.0], [57.5, 134302.0], [57.6, 134302.0], [57.7, 134302.0], [57.8, 134302.0], [57.9, 134302.0], [58.0, 134303.0], [58.1, 134303.0], [58.2, 134303.0], [58.3, 134303.0], [58.4, 134303.0], [58.5, 134303.0], [58.6, 134303.0], [58.7, 134303.0], [58.8, 134303.0], [58.9, 134303.0], [59.0, 134314.0], [59.1, 134314.0], [59.2, 134314.0], [59.3, 134314.0], [59.4, 134314.0], [59.5, 134314.0], [59.6, 134314.0], [59.7, 134314.0], [59.8, 134314.0], [59.9, 134314.0], [60.0, 134330.0], [60.1, 134330.0], [60.2, 134330.0], [60.3, 134330.0], [60.4, 134330.0], [60.5, 134330.0], [60.6, 134330.0], [60.7, 134330.0], [60.8, 134330.0], [60.9, 134330.0], [61.0, 134334.0], [61.1, 134334.0], [61.2, 134334.0], [61.3, 134334.0], [61.4, 134334.0], [61.5, 134334.0], [61.6, 134334.0], [61.7, 134334.0], [61.8, 134334.0], [61.9, 134334.0], [62.0, 134351.0], [62.1, 134351.0], [62.2, 134351.0], [62.3, 134351.0], [62.4, 134351.0], [62.5, 134351.0], [62.6, 134351.0], [62.7, 134351.0], [62.8, 134351.0], [62.9, 134351.0], [63.0, 134356.0], [63.1, 134356.0], [63.2, 134356.0], [63.3, 134356.0], [63.4, 134356.0], [63.5, 134356.0], [63.6, 134356.0], [63.7, 134356.0], [63.8, 134356.0], [63.9, 134356.0], [64.0, 134365.0], [64.1, 134365.0], [64.2, 134365.0], [64.3, 134365.0], [64.4, 134365.0], [64.5, 134365.0], [64.6, 134365.0], [64.7, 134365.0], [64.8, 134365.0], [64.9, 134365.0], [65.0, 134374.0], [65.1, 134374.0], [65.2, 134374.0], [65.3, 134374.0], [65.4, 134374.0], [65.5, 134374.0], [65.6, 134374.0], [65.7, 134374.0], [65.8, 134374.0], [65.9, 134374.0], [66.0, 134394.0], [66.1, 134394.0], [66.2, 134394.0], [66.3, 134394.0], [66.4, 134394.0], [66.5, 134394.0], [66.6, 134394.0], [66.7, 134394.0], [66.8, 134394.0], [66.9, 134394.0], [67.0, 134398.0], [67.1, 134398.0], [67.2, 134398.0], [67.3, 134398.0], [67.4, 134398.0], [67.5, 134398.0], [67.6, 134398.0], [67.7, 134398.0], [67.8, 134398.0], [67.9, 134398.0], [68.0, 134410.0], [68.1, 134410.0], [68.2, 134410.0], [68.3, 134410.0], [68.4, 134410.0], [68.5, 134410.0], [68.6, 134410.0], [68.7, 134410.0], [68.8, 134410.0], [68.9, 134410.0], [69.0, 134415.0], [69.1, 134415.0], [69.2, 134415.0], [69.3, 134415.0], [69.4, 134415.0], [69.5, 134415.0], [69.6, 134415.0], [69.7, 134415.0], [69.8, 134415.0], [69.9, 134415.0], [70.0, 134425.0], [70.1, 134425.0], [70.2, 134425.0], [70.3, 134425.0], [70.4, 134425.0], [70.5, 134425.0], [70.6, 134425.0], [70.7, 134425.0], [70.8, 134425.0], [70.9, 134425.0], [71.0, 134433.0], [71.1, 134433.0], [71.2, 134433.0], [71.3, 134433.0], [71.4, 134433.0], [71.5, 134433.0], [71.6, 134433.0], [71.7, 134433.0], [71.8, 134433.0], [71.9, 134433.0], [72.0, 134443.0], [72.1, 134443.0], [72.2, 134443.0], [72.3, 134443.0], [72.4, 134443.0], [72.5, 134443.0], [72.6, 134443.0], [72.7, 134443.0], [72.8, 134443.0], [72.9, 134443.0], [73.0, 134463.0], [73.1, 134463.0], [73.2, 134463.0], [73.3, 134463.0], [73.4, 134463.0], [73.5, 134463.0], [73.6, 134463.0], [73.7, 134463.0], [73.8, 134463.0], [73.9, 134463.0], [74.0, 134469.0], [74.1, 134469.0], [74.2, 134469.0], [74.3, 134469.0], [74.4, 134469.0], [74.5, 134469.0], [74.6, 134469.0], [74.7, 134469.0], [74.8, 134469.0], [74.9, 134469.0], [75.0, 134472.0], [75.1, 134472.0], [75.2, 134472.0], [75.3, 134472.0], [75.4, 134472.0], [75.5, 134472.0], [75.6, 134472.0], [75.7, 134472.0], [75.8, 134472.0], [75.9, 134472.0], [76.0, 134482.0], [76.1, 134482.0], [76.2, 134482.0], [76.3, 134482.0], [76.4, 134482.0], [76.5, 134482.0], [76.6, 134482.0], [76.7, 134482.0], [76.8, 134482.0], [76.9, 134482.0], [77.0, 134494.0], [77.1, 134494.0], [77.2, 134494.0], [77.3, 134494.0], [77.4, 134494.0], [77.5, 134494.0], [77.6, 134494.0], [77.7, 134494.0], [77.8, 134494.0], [77.9, 134494.0], [78.0, 134503.0], [78.1, 134503.0], [78.2, 134503.0], [78.3, 134503.0], [78.4, 134503.0], [78.5, 134503.0], [78.6, 134503.0], [78.7, 134503.0], [78.8, 134503.0], [78.9, 134503.0], [79.0, 134531.0], [79.1, 134531.0], [79.2, 134531.0], [79.3, 134531.0], [79.4, 134531.0], [79.5, 134531.0], [79.6, 134531.0], [79.7, 134531.0], [79.8, 134531.0], [79.9, 134531.0], [80.0, 134533.0], [80.1, 134533.0], [80.2, 134533.0], [80.3, 134533.0], [80.4, 134533.0], [80.5, 134533.0], [80.6, 134533.0], [80.7, 134533.0], [80.8, 134533.0], [80.9, 134533.0], [81.0, 134541.0], [81.1, 134541.0], [81.2, 134541.0], [81.3, 134541.0], [81.4, 134541.0], [81.5, 134541.0], [81.6, 134541.0], [81.7, 134541.0], [81.8, 134541.0], [81.9, 134541.0], [82.0, 134557.0], [82.1, 134557.0], [82.2, 134557.0], [82.3, 134557.0], [82.4, 134557.0], [82.5, 134557.0], [82.6, 134557.0], [82.7, 134557.0], [82.8, 134557.0], [82.9, 134557.0], [83.0, 134571.0], [83.1, 134571.0], [83.2, 134571.0], [83.3, 134571.0], [83.4, 134571.0], [83.5, 134571.0], [83.6, 134571.0], [83.7, 134571.0], [83.8, 134571.0], [83.9, 134571.0], [84.0, 134572.0], [84.1, 134572.0], [84.2, 134572.0], [84.3, 134572.0], [84.4, 134572.0], [84.5, 134572.0], [84.6, 134572.0], [84.7, 134572.0], [84.8, 134572.0], [84.9, 134572.0], [85.0, 134573.0], [85.1, 134573.0], [85.2, 134573.0], [85.3, 134573.0], [85.4, 134573.0], [85.5, 134573.0], [85.6, 134573.0], [85.7, 134573.0], [85.8, 134573.0], [85.9, 134573.0], [86.0, 134581.0], [86.1, 134581.0], [86.2, 134581.0], [86.3, 134581.0], [86.4, 134581.0], [86.5, 134581.0], [86.6, 134581.0], [86.7, 134581.0], [86.8, 134581.0], [86.9, 134581.0], [87.0, 134587.0], [87.1, 134587.0], [87.2, 134587.0], [87.3, 134587.0], [87.4, 134587.0], [87.5, 134587.0], [87.6, 134587.0], [87.7, 134587.0], [87.8, 134587.0], [87.9, 134587.0], [88.0, 134589.0], [88.1, 134589.0], [88.2, 134589.0], [88.3, 134589.0], [88.4, 134589.0], [88.5, 134589.0], [88.6, 134589.0], [88.7, 134589.0], [88.8, 134589.0], [88.9, 134589.0], [89.0, 134590.0], [89.1, 134590.0], [89.2, 134590.0], [89.3, 134590.0], [89.4, 134590.0], [89.5, 134590.0], [89.6, 134590.0], [89.7, 134590.0], [89.8, 134590.0], [89.9, 134590.0], [90.0, 134590.0], [90.1, 134590.0], [90.2, 134590.0], [90.3, 134590.0], [90.4, 134590.0], [90.5, 134590.0], [90.6, 134590.0], [90.7, 134590.0], [90.8, 134590.0], [90.9, 134590.0], [91.0, 134591.0], [91.1, 134591.0], [91.2, 134591.0], [91.3, 134591.0], [91.4, 134591.0], [91.5, 134591.0], [91.6, 134591.0], [91.7, 134591.0], [91.8, 134591.0], [91.9, 134591.0], [92.0, 134591.0], [92.1, 134591.0], [92.2, 134591.0], [92.3, 134591.0], [92.4, 134591.0], [92.5, 134591.0], [92.6, 134591.0], [92.7, 134591.0], [92.8, 134591.0], [92.9, 134591.0], [93.0, 134596.0], [93.1, 134596.0], [93.2, 134596.0], [93.3, 134596.0], [93.4, 134596.0], [93.5, 134596.0], [93.6, 134596.0], [93.7, 134596.0], [93.8, 134596.0], [93.9, 134596.0], [94.0, 134597.0], [94.1, 134597.0], [94.2, 134597.0], [94.3, 134597.0], [94.4, 134597.0], [94.5, 134597.0], [94.6, 134597.0], [94.7, 134597.0], [94.8, 134597.0], [94.9, 134597.0], [95.0, 134602.0], [95.1, 134602.0], [95.2, 134602.0], [95.3, 134602.0], [95.4, 134602.0], [95.5, 134602.0], [95.6, 134602.0], [95.7, 134602.0], [95.8, 134602.0], [95.9, 134602.0], [96.0, 134604.0], [96.1, 134604.0], [96.2, 134604.0], [96.3, 134604.0], [96.4, 134604.0], [96.5, 134604.0], [96.6, 134604.0], [96.7, 134604.0], [96.8, 134604.0], [96.9, 134604.0], [97.0, 134610.0], [97.1, 134610.0], [97.2, 134610.0], [97.3, 134610.0], [97.4, 134610.0], [97.5, 134610.0], [97.6, 134610.0], [97.7, 134610.0], [97.8, 134610.0], [97.9, 134610.0], [98.0, 134611.0], [98.1, 134611.0], [98.2, 134611.0], [98.3, 134611.0], [98.4, 134611.0], [98.5, 134611.0], [98.6, 134611.0], [98.7, 134611.0], [98.8, 134611.0], [98.9, 134611.0], [99.0, 134612.0], [99.1, 134612.0], [99.2, 134612.0], [99.3, 134612.0], [99.4, 134612.0], [99.5, 134612.0], [99.6, 134612.0], [99.7, 134612.0], [99.8, 134612.0], [99.9, 134612.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 133700.0, "maxY": 17.0, "series": [{"data": [[134200.0, 10.0], [134400.0, 10.0], [133800.0, 11.0], [134600.0, 5.0], [134000.0, 10.0], [134300.0, 11.0], [134500.0, 17.0], [134100.0, 10.0], [133900.0, 9.0], [133700.0, 7.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 134600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 53.46, "minX": 1.76326314E12, "maxY": 53.46, "series": [{"data": [[1.76326314E12, 53.46]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76326314E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 133853.0, "minX": 2.0, "maxY": 134610.0, "series": [{"data": [[2.0, 133973.0], [3.0, 134433.0], [4.0, 134571.0], [6.0, 133958.5], [7.0, 134443.0], [8.0, 134533.0], [9.0, 134053.0], [12.0, 134286.33333333334], [13.0, 133863.0], [14.0, 134472.0], [15.0, 134334.0], [16.0, 134482.0], [18.0, 134224.5], [19.0, 134005.0], [20.0, 134581.0], [21.0, 134265.0], [23.0, 134450.5], [25.0, 134323.5], [26.0, 134590.0], [27.0, 134194.0], [28.0, 134284.0], [30.0, 134206.0], [33.0, 134155.0], [36.0, 133944.0], [39.0, 134008.66666666666], [41.0, 134165.0], [45.0, 134189.5], [46.0, 134036.0], [49.0, 134056.0], [48.0, 134197.0], [51.0, 134253.0], [50.0, 134610.0], [52.0, 133965.0], [55.0, 134531.0], [57.0, 133936.0], [56.0, 134572.0], [61.0, 134050.0], [60.0, 134092.0], [63.0, 134541.0], [67.0, 134027.75], [64.0, 134469.0], [69.0, 134062.75], [74.0, 133988.0], [73.0, 134238.0], [72.0, 133973.0], [79.0, 134234.0], [77.0, 133870.5], [76.0, 133948.0], [81.0, 133853.0], [80.0, 134394.0], [87.0, 134351.0], [86.0, 134597.0], [85.0, 133922.0], [84.0, 134365.66666666666], [91.0, 134410.0], [88.0, 134596.0], [93.0, 134330.0], [99.0, 134590.0], [98.0, 134229.0], [100.0, 134370.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[53.46, 134217.49]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.76326314E12, "maxY": 4708.333333333333, "series": [{"data": [[1.76326314E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76326314E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76326314E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 134217.49, "minX": 1.76326314E12, "maxY": 134217.49, "series": [{"data": [[1.76326314E12, 134217.49]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76326314E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.76326314E12, "maxY": 4.9E-324, "series": [{"data": [[1.76326314E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76326314E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 134209.31, "minX": 1.76326314E12, "maxY": 134209.31, "series": [{"data": [[1.76326314E12, 134209.31]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76326314E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 134225.5, "minX": 100.0, "maxY": 134225.5, "series": [{"data": [[100.0, 134225.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76326302E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76326302E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76326302E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76326314E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76326314E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76326314E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76326314E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76326314E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76326314E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76326314E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76326314E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76326314E12, "title": "Total Transactions Per Second"}},
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

