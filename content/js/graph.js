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
        data: {"result": {"minY": 133650.0, "minX": 0.0, "maxY": 134538.0, "series": [{"data": [[0.0, 133650.0], [0.1, 133650.0], [0.2, 133650.0], [0.3, 133650.0], [0.4, 133650.0], [0.5, 133650.0], [0.6, 133650.0], [0.7, 133650.0], [0.8, 133650.0], [0.9, 133650.0], [1.0, 133651.0], [1.1, 133651.0], [1.2, 133651.0], [1.3, 133651.0], [1.4, 133651.0], [1.5, 133651.0], [1.6, 133651.0], [1.7, 133651.0], [1.8, 133651.0], [1.9, 133651.0], [2.0, 133671.0], [2.1, 133671.0], [2.2, 133671.0], [2.3, 133671.0], [2.4, 133671.0], [2.5, 133671.0], [2.6, 133671.0], [2.7, 133671.0], [2.8, 133671.0], [2.9, 133671.0], [3.0, 133673.0], [3.1, 133673.0], [3.2, 133673.0], [3.3, 133673.0], [3.4, 133673.0], [3.5, 133673.0], [3.6, 133673.0], [3.7, 133673.0], [3.8, 133673.0], [3.9, 133673.0], [4.0, 133689.0], [4.1, 133689.0], [4.2, 133689.0], [4.3, 133689.0], [4.4, 133689.0], [4.5, 133689.0], [4.6, 133689.0], [4.7, 133689.0], [4.8, 133689.0], [4.9, 133689.0], [5.0, 133708.0], [5.1, 133708.0], [5.2, 133708.0], [5.3, 133708.0], [5.4, 133708.0], [5.5, 133708.0], [5.6, 133708.0], [5.7, 133708.0], [5.8, 133708.0], [5.9, 133708.0], [6.0, 133713.0], [6.1, 133713.0], [6.2, 133713.0], [6.3, 133713.0], [6.4, 133713.0], [6.5, 133713.0], [6.6, 133713.0], [6.7, 133713.0], [6.8, 133713.0], [6.9, 133713.0], [7.0, 133719.0], [7.1, 133719.0], [7.2, 133719.0], [7.3, 133719.0], [7.4, 133719.0], [7.5, 133719.0], [7.6, 133719.0], [7.7, 133719.0], [7.8, 133719.0], [7.9, 133719.0], [8.0, 133729.0], [8.1, 133729.0], [8.2, 133729.0], [8.3, 133729.0], [8.4, 133729.0], [8.5, 133729.0], [8.6, 133729.0], [8.7, 133729.0], [8.8, 133729.0], [8.9, 133729.0], [9.0, 133740.0], [9.1, 133740.0], [9.2, 133740.0], [9.3, 133740.0], [9.4, 133740.0], [9.5, 133740.0], [9.6, 133740.0], [9.7, 133740.0], [9.8, 133740.0], [9.9, 133740.0], [10.0, 133745.0], [10.1, 133745.0], [10.2, 133745.0], [10.3, 133745.0], [10.4, 133745.0], [10.5, 133745.0], [10.6, 133745.0], [10.7, 133745.0], [10.8, 133745.0], [10.9, 133745.0], [11.0, 133756.0], [11.1, 133756.0], [11.2, 133756.0], [11.3, 133756.0], [11.4, 133756.0], [11.5, 133756.0], [11.6, 133756.0], [11.7, 133756.0], [11.8, 133756.0], [11.9, 133756.0], [12.0, 133764.0], [12.1, 133764.0], [12.2, 133764.0], [12.3, 133764.0], [12.4, 133764.0], [12.5, 133764.0], [12.6, 133764.0], [12.7, 133764.0], [12.8, 133764.0], [12.9, 133764.0], [13.0, 133776.0], [13.1, 133776.0], [13.2, 133776.0], [13.3, 133776.0], [13.4, 133776.0], [13.5, 133776.0], [13.6, 133776.0], [13.7, 133776.0], [13.8, 133776.0], [13.9, 133776.0], [14.0, 133787.0], [14.1, 133787.0], [14.2, 133787.0], [14.3, 133787.0], [14.4, 133787.0], [14.5, 133787.0], [14.6, 133787.0], [14.7, 133787.0], [14.8, 133787.0], [14.9, 133787.0], [15.0, 133798.0], [15.1, 133798.0], [15.2, 133798.0], [15.3, 133798.0], [15.4, 133798.0], [15.5, 133798.0], [15.6, 133798.0], [15.7, 133798.0], [15.8, 133798.0], [15.9, 133798.0], [16.0, 133804.0], [16.1, 133804.0], [16.2, 133804.0], [16.3, 133804.0], [16.4, 133804.0], [16.5, 133804.0], [16.6, 133804.0], [16.7, 133804.0], [16.8, 133804.0], [16.9, 133804.0], [17.0, 133813.0], [17.1, 133813.0], [17.2, 133813.0], [17.3, 133813.0], [17.4, 133813.0], [17.5, 133813.0], [17.6, 133813.0], [17.7, 133813.0], [17.8, 133813.0], [17.9, 133813.0], [18.0, 133823.0], [18.1, 133823.0], [18.2, 133823.0], [18.3, 133823.0], [18.4, 133823.0], [18.5, 133823.0], [18.6, 133823.0], [18.7, 133823.0], [18.8, 133823.0], [18.9, 133823.0], [19.0, 133834.0], [19.1, 133834.0], [19.2, 133834.0], [19.3, 133834.0], [19.4, 133834.0], [19.5, 133834.0], [19.6, 133834.0], [19.7, 133834.0], [19.8, 133834.0], [19.9, 133834.0], [20.0, 133855.0], [20.1, 133855.0], [20.2, 133855.0], [20.3, 133855.0], [20.4, 133855.0], [20.5, 133855.0], [20.6, 133855.0], [20.7, 133855.0], [20.8, 133855.0], [20.9, 133855.0], [21.0, 133857.0], [21.1, 133857.0], [21.2, 133857.0], [21.3, 133857.0], [21.4, 133857.0], [21.5, 133857.0], [21.6, 133857.0], [21.7, 133857.0], [21.8, 133857.0], [21.9, 133857.0], [22.0, 133864.0], [22.1, 133864.0], [22.2, 133864.0], [22.3, 133864.0], [22.4, 133864.0], [22.5, 133864.0], [22.6, 133864.0], [22.7, 133864.0], [22.8, 133864.0], [22.9, 133864.0], [23.0, 133873.0], [23.1, 133873.0], [23.2, 133873.0], [23.3, 133873.0], [23.4, 133873.0], [23.5, 133873.0], [23.6, 133873.0], [23.7, 133873.0], [23.8, 133873.0], [23.9, 133873.0], [24.0, 133892.0], [24.1, 133892.0], [24.2, 133892.0], [24.3, 133892.0], [24.4, 133892.0], [24.5, 133892.0], [24.6, 133892.0], [24.7, 133892.0], [24.8, 133892.0], [24.9, 133892.0], [25.0, 133893.0], [25.1, 133893.0], [25.2, 133893.0], [25.3, 133893.0], [25.4, 133893.0], [25.5, 133893.0], [25.6, 133893.0], [25.7, 133893.0], [25.8, 133893.0], [25.9, 133893.0], [26.0, 133903.0], [26.1, 133903.0], [26.2, 133903.0], [26.3, 133903.0], [26.4, 133903.0], [26.5, 133903.0], [26.6, 133903.0], [26.7, 133903.0], [26.8, 133903.0], [26.9, 133903.0], [27.0, 133912.0], [27.1, 133912.0], [27.2, 133912.0], [27.3, 133912.0], [27.4, 133912.0], [27.5, 133912.0], [27.6, 133912.0], [27.7, 133912.0], [27.8, 133912.0], [27.9, 133912.0], [28.0, 133923.0], [28.1, 133923.0], [28.2, 133923.0], [28.3, 133923.0], [28.4, 133923.0], [28.5, 133923.0], [28.6, 133923.0], [28.7, 133923.0], [28.8, 133923.0], [28.9, 133923.0], [29.0, 133944.0], [29.1, 133944.0], [29.2, 133944.0], [29.3, 133944.0], [29.4, 133944.0], [29.5, 133944.0], [29.6, 133944.0], [29.7, 133944.0], [29.8, 133944.0], [29.9, 133944.0], [30.0, 133955.0], [30.1, 133955.0], [30.2, 133955.0], [30.3, 133955.0], [30.4, 133955.0], [30.5, 133955.0], [30.6, 133955.0], [30.7, 133955.0], [30.8, 133955.0], [30.9, 133955.0], [31.0, 133965.0], [31.1, 133965.0], [31.2, 133965.0], [31.3, 133965.0], [31.4, 133965.0], [31.5, 133965.0], [31.6, 133965.0], [31.7, 133965.0], [31.8, 133965.0], [31.9, 133965.0], [32.0, 133966.0], [32.1, 133966.0], [32.2, 133966.0], [32.3, 133966.0], [32.4, 133966.0], [32.5, 133966.0], [32.6, 133966.0], [32.7, 133966.0], [32.8, 133966.0], [32.9, 133966.0], [33.0, 133975.0], [33.1, 133975.0], [33.2, 133975.0], [33.3, 133975.0], [33.4, 133975.0], [33.5, 133975.0], [33.6, 133975.0], [33.7, 133975.0], [33.8, 133975.0], [33.9, 133975.0], [34.0, 133987.0], [34.1, 133987.0], [34.2, 133987.0], [34.3, 133987.0], [34.4, 133987.0], [34.5, 133987.0], [34.6, 133987.0], [34.7, 133987.0], [34.8, 133987.0], [34.9, 133987.0], [35.0, 134006.0], [35.1, 134006.0], [35.2, 134006.0], [35.3, 134006.0], [35.4, 134006.0], [35.5, 134006.0], [35.6, 134006.0], [35.7, 134006.0], [35.8, 134006.0], [35.9, 134006.0], [36.0, 134012.0], [36.1, 134012.0], [36.2, 134012.0], [36.3, 134012.0], [36.4, 134012.0], [36.5, 134012.0], [36.6, 134012.0], [36.7, 134012.0], [36.8, 134012.0], [36.9, 134012.0], [37.0, 134012.0], [37.1, 134012.0], [37.2, 134012.0], [37.3, 134012.0], [37.4, 134012.0], [37.5, 134012.0], [37.6, 134012.0], [37.7, 134012.0], [37.8, 134012.0], [37.9, 134012.0], [38.0, 134034.0], [38.1, 134034.0], [38.2, 134034.0], [38.3, 134034.0], [38.4, 134034.0], [38.5, 134034.0], [38.6, 134034.0], [38.7, 134034.0], [38.8, 134034.0], [38.9, 134034.0], [39.0, 134035.0], [39.1, 134035.0], [39.2, 134035.0], [39.3, 134035.0], [39.4, 134035.0], [39.5, 134035.0], [39.6, 134035.0], [39.7, 134035.0], [39.8, 134035.0], [39.9, 134035.0], [40.0, 134049.0], [40.1, 134049.0], [40.2, 134049.0], [40.3, 134049.0], [40.4, 134049.0], [40.5, 134049.0], [40.6, 134049.0], [40.7, 134049.0], [40.8, 134049.0], [40.9, 134049.0], [41.0, 134059.0], [41.1, 134059.0], [41.2, 134059.0], [41.3, 134059.0], [41.4, 134059.0], [41.5, 134059.0], [41.6, 134059.0], [41.7, 134059.0], [41.8, 134059.0], [41.9, 134059.0], [42.0, 134066.0], [42.1, 134066.0], [42.2, 134066.0], [42.3, 134066.0], [42.4, 134066.0], [42.5, 134066.0], [42.6, 134066.0], [42.7, 134066.0], [42.8, 134066.0], [42.9, 134066.0], [43.0, 134076.0], [43.1, 134076.0], [43.2, 134076.0], [43.3, 134076.0], [43.4, 134076.0], [43.5, 134076.0], [43.6, 134076.0], [43.7, 134076.0], [43.8, 134076.0], [43.9, 134076.0], [44.0, 134088.0], [44.1, 134088.0], [44.2, 134088.0], [44.3, 134088.0], [44.4, 134088.0], [44.5, 134088.0], [44.6, 134088.0], [44.7, 134088.0], [44.8, 134088.0], [44.9, 134088.0], [45.0, 134102.0], [45.1, 134102.0], [45.2, 134102.0], [45.3, 134102.0], [45.4, 134102.0], [45.5, 134102.0], [45.6, 134102.0], [45.7, 134102.0], [45.8, 134102.0], [45.9, 134102.0], [46.0, 134108.0], [46.1, 134108.0], [46.2, 134108.0], [46.3, 134108.0], [46.4, 134108.0], [46.5, 134108.0], [46.6, 134108.0], [46.7, 134108.0], [46.8, 134108.0], [46.9, 134108.0], [47.0, 134118.0], [47.1, 134118.0], [47.2, 134118.0], [47.3, 134118.0], [47.4, 134118.0], [47.5, 134118.0], [47.6, 134118.0], [47.7, 134118.0], [47.8, 134118.0], [47.9, 134118.0], [48.0, 134122.0], [48.1, 134122.0], [48.2, 134122.0], [48.3, 134122.0], [48.4, 134122.0], [48.5, 134122.0], [48.6, 134122.0], [48.7, 134122.0], [48.8, 134122.0], [48.9, 134122.0], [49.0, 134133.0], [49.1, 134133.0], [49.2, 134133.0], [49.3, 134133.0], [49.4, 134133.0], [49.5, 134133.0], [49.6, 134133.0], [49.7, 134133.0], [49.8, 134133.0], [49.9, 134133.0], [50.0, 134143.0], [50.1, 134143.0], [50.2, 134143.0], [50.3, 134143.0], [50.4, 134143.0], [50.5, 134143.0], [50.6, 134143.0], [50.7, 134143.0], [50.8, 134143.0], [50.9, 134143.0], [51.0, 134154.0], [51.1, 134154.0], [51.2, 134154.0], [51.3, 134154.0], [51.4, 134154.0], [51.5, 134154.0], [51.6, 134154.0], [51.7, 134154.0], [51.8, 134154.0], [51.9, 134154.0], [52.0, 134162.0], [52.1, 134162.0], [52.2, 134162.0], [52.3, 134162.0], [52.4, 134162.0], [52.5, 134162.0], [52.6, 134162.0], [52.7, 134162.0], [52.8, 134162.0], [52.9, 134162.0], [53.0, 134170.0], [53.1, 134170.0], [53.2, 134170.0], [53.3, 134170.0], [53.4, 134170.0], [53.5, 134170.0], [53.6, 134170.0], [53.7, 134170.0], [53.8, 134170.0], [53.9, 134170.0], [54.0, 134186.0], [54.1, 134186.0], [54.2, 134186.0], [54.3, 134186.0], [54.4, 134186.0], [54.5, 134186.0], [54.6, 134186.0], [54.7, 134186.0], [54.8, 134186.0], [54.9, 134186.0], [55.0, 134192.0], [55.1, 134192.0], [55.2, 134192.0], [55.3, 134192.0], [55.4, 134192.0], [55.5, 134192.0], [55.6, 134192.0], [55.7, 134192.0], [55.8, 134192.0], [55.9, 134192.0], [56.0, 134202.0], [56.1, 134202.0], [56.2, 134202.0], [56.3, 134202.0], [56.4, 134202.0], [56.5, 134202.0], [56.6, 134202.0], [56.7, 134202.0], [56.8, 134202.0], [56.9, 134202.0], [57.0, 134222.0], [57.1, 134222.0], [57.2, 134222.0], [57.3, 134222.0], [57.4, 134222.0], [57.5, 134222.0], [57.6, 134222.0], [57.7, 134222.0], [57.8, 134222.0], [57.9, 134222.0], [58.0, 134230.0], [58.1, 134230.0], [58.2, 134230.0], [58.3, 134230.0], [58.4, 134230.0], [58.5, 134230.0], [58.6, 134230.0], [58.7, 134230.0], [58.8, 134230.0], [58.9, 134230.0], [59.0, 134241.0], [59.1, 134241.0], [59.2, 134241.0], [59.3, 134241.0], [59.4, 134241.0], [59.5, 134241.0], [59.6, 134241.0], [59.7, 134241.0], [59.8, 134241.0], [59.9, 134241.0], [60.0, 134252.0], [60.1, 134252.0], [60.2, 134252.0], [60.3, 134252.0], [60.4, 134252.0], [60.5, 134252.0], [60.6, 134252.0], [60.7, 134252.0], [60.8, 134252.0], [60.9, 134252.0], [61.0, 134260.0], [61.1, 134260.0], [61.2, 134260.0], [61.3, 134260.0], [61.4, 134260.0], [61.5, 134260.0], [61.6, 134260.0], [61.7, 134260.0], [61.8, 134260.0], [61.9, 134260.0], [62.0, 134274.0], [62.1, 134274.0], [62.2, 134274.0], [62.3, 134274.0], [62.4, 134274.0], [62.5, 134274.0], [62.6, 134274.0], [62.7, 134274.0], [62.8, 134274.0], [62.9, 134274.0], [63.0, 134281.0], [63.1, 134281.0], [63.2, 134281.0], [63.3, 134281.0], [63.4, 134281.0], [63.5, 134281.0], [63.6, 134281.0], [63.7, 134281.0], [63.8, 134281.0], [63.9, 134281.0], [64.0, 134282.0], [64.1, 134282.0], [64.2, 134282.0], [64.3, 134282.0], [64.4, 134282.0], [64.5, 134282.0], [64.6, 134282.0], [64.7, 134282.0], [64.8, 134282.0], [64.9, 134282.0], [65.0, 134309.0], [65.1, 134309.0], [65.2, 134309.0], [65.3, 134309.0], [65.4, 134309.0], [65.5, 134309.0], [65.6, 134309.0], [65.7, 134309.0], [65.8, 134309.0], [65.9, 134309.0], [66.0, 134312.0], [66.1, 134312.0], [66.2, 134312.0], [66.3, 134312.0], [66.4, 134312.0], [66.5, 134312.0], [66.6, 134312.0], [66.7, 134312.0], [66.8, 134312.0], [66.9, 134312.0], [67.0, 134315.0], [67.1, 134315.0], [67.2, 134315.0], [67.3, 134315.0], [67.4, 134315.0], [67.5, 134315.0], [67.6, 134315.0], [67.7, 134315.0], [67.8, 134315.0], [67.9, 134315.0], [68.0, 134330.0], [68.1, 134330.0], [68.2, 134330.0], [68.3, 134330.0], [68.4, 134330.0], [68.5, 134330.0], [68.6, 134330.0], [68.7, 134330.0], [68.8, 134330.0], [68.9, 134330.0], [69.0, 134346.0], [69.1, 134346.0], [69.2, 134346.0], [69.3, 134346.0], [69.4, 134346.0], [69.5, 134346.0], [69.6, 134346.0], [69.7, 134346.0], [69.8, 134346.0], [69.9, 134346.0], [70.0, 134350.0], [70.1, 134350.0], [70.2, 134350.0], [70.3, 134350.0], [70.4, 134350.0], [70.5, 134350.0], [70.6, 134350.0], [70.7, 134350.0], [70.8, 134350.0], [70.9, 134350.0], [71.0, 134368.0], [71.1, 134368.0], [71.2, 134368.0], [71.3, 134368.0], [71.4, 134368.0], [71.5, 134368.0], [71.6, 134368.0], [71.7, 134368.0], [71.8, 134368.0], [71.9, 134368.0], [72.0, 134377.0], [72.1, 134377.0], [72.2, 134377.0], [72.3, 134377.0], [72.4, 134377.0], [72.5, 134377.0], [72.6, 134377.0], [72.7, 134377.0], [72.8, 134377.0], [72.9, 134377.0], [73.0, 134378.0], [73.1, 134378.0], [73.2, 134378.0], [73.3, 134378.0], [73.4, 134378.0], [73.5, 134378.0], [73.6, 134378.0], [73.7, 134378.0], [73.8, 134378.0], [73.9, 134378.0], [74.0, 134394.0], [74.1, 134394.0], [74.2, 134394.0], [74.3, 134394.0], [74.4, 134394.0], [74.5, 134394.0], [74.6, 134394.0], [74.7, 134394.0], [74.8, 134394.0], [74.9, 134394.0], [75.0, 134400.0], [75.1, 134400.0], [75.2, 134400.0], [75.3, 134400.0], [75.4, 134400.0], [75.5, 134400.0], [75.6, 134400.0], [75.7, 134400.0], [75.8, 134400.0], [75.9, 134400.0], [76.0, 134402.0], [76.1, 134402.0], [76.2, 134402.0], [76.3, 134402.0], [76.4, 134402.0], [76.5, 134402.0], [76.6, 134402.0], [76.7, 134402.0], [76.8, 134402.0], [76.9, 134402.0], [77.0, 134430.0], [77.1, 134430.0], [77.2, 134430.0], [77.3, 134430.0], [77.4, 134430.0], [77.5, 134430.0], [77.6, 134430.0], [77.7, 134430.0], [77.8, 134430.0], [77.9, 134430.0], [78.0, 134440.0], [78.1, 134440.0], [78.2, 134440.0], [78.3, 134440.0], [78.4, 134440.0], [78.5, 134440.0], [78.6, 134440.0], [78.7, 134440.0], [78.8, 134440.0], [78.9, 134440.0], [79.0, 134450.0], [79.1, 134450.0], [79.2, 134450.0], [79.3, 134450.0], [79.4, 134450.0], [79.5, 134450.0], [79.6, 134450.0], [79.7, 134450.0], [79.8, 134450.0], [79.9, 134450.0], [80.0, 134450.0], [80.1, 134450.0], [80.2, 134450.0], [80.3, 134450.0], [80.4, 134450.0], [80.5, 134450.0], [80.6, 134450.0], [80.7, 134450.0], [80.8, 134450.0], [80.9, 134450.0], [81.0, 134458.0], [81.1, 134458.0], [81.2, 134458.0], [81.3, 134458.0], [81.4, 134458.0], [81.5, 134458.0], [81.6, 134458.0], [81.7, 134458.0], [81.8, 134458.0], [81.9, 134458.0], [82.0, 134469.0], [82.1, 134469.0], [82.2, 134469.0], [82.3, 134469.0], [82.4, 134469.0], [82.5, 134469.0], [82.6, 134469.0], [82.7, 134469.0], [82.8, 134469.0], [82.9, 134469.0], [83.0, 134471.0], [83.1, 134471.0], [83.2, 134471.0], [83.3, 134471.0], [83.4, 134471.0], [83.5, 134471.0], [83.6, 134471.0], [83.7, 134471.0], [83.8, 134471.0], [83.9, 134471.0], [84.0, 134488.0], [84.1, 134488.0], [84.2, 134488.0], [84.3, 134488.0], [84.4, 134488.0], [84.5, 134488.0], [84.6, 134488.0], [84.7, 134488.0], [84.8, 134488.0], [84.9, 134488.0], [85.0, 134497.0], [85.1, 134497.0], [85.2, 134497.0], [85.3, 134497.0], [85.4, 134497.0], [85.5, 134497.0], [85.6, 134497.0], [85.7, 134497.0], [85.8, 134497.0], [85.9, 134497.0], [86.0, 134505.0], [86.1, 134505.0], [86.2, 134505.0], [86.3, 134505.0], [86.4, 134505.0], [86.5, 134505.0], [86.6, 134505.0], [86.7, 134505.0], [86.8, 134505.0], [86.9, 134505.0], [87.0, 134512.0], [87.1, 134512.0], [87.2, 134512.0], [87.3, 134512.0], [87.4, 134512.0], [87.5, 134512.0], [87.6, 134512.0], [87.7, 134512.0], [87.8, 134512.0], [87.9, 134512.0], [88.0, 134512.0], [88.1, 134512.0], [88.2, 134512.0], [88.3, 134512.0], [88.4, 134512.0], [88.5, 134512.0], [88.6, 134512.0], [88.7, 134512.0], [88.8, 134512.0], [88.9, 134512.0], [89.0, 134512.0], [89.1, 134512.0], [89.2, 134512.0], [89.3, 134512.0], [89.4, 134512.0], [89.5, 134512.0], [89.6, 134512.0], [89.7, 134512.0], [89.8, 134512.0], [89.9, 134512.0], [90.0, 134513.0], [90.1, 134513.0], [90.2, 134513.0], [90.3, 134513.0], [90.4, 134513.0], [90.5, 134513.0], [90.6, 134513.0], [90.7, 134513.0], [90.8, 134513.0], [90.9, 134513.0], [91.0, 134519.0], [91.1, 134519.0], [91.2, 134519.0], [91.3, 134519.0], [91.4, 134519.0], [91.5, 134519.0], [91.6, 134519.0], [91.7, 134519.0], [91.8, 134519.0], [91.9, 134519.0], [92.0, 134522.0], [92.1, 134522.0], [92.2, 134522.0], [92.3, 134522.0], [92.4, 134522.0], [92.5, 134522.0], [92.6, 134522.0], [92.7, 134522.0], [92.8, 134522.0], [92.9, 134522.0], [93.0, 134522.0], [93.1, 134522.0], [93.2, 134522.0], [93.3, 134522.0], [93.4, 134522.0], [93.5, 134522.0], [93.6, 134522.0], [93.7, 134522.0], [93.8, 134522.0], [93.9, 134522.0], [94.0, 134522.0], [94.1, 134522.0], [94.2, 134522.0], [94.3, 134522.0], [94.4, 134522.0], [94.5, 134522.0], [94.6, 134522.0], [94.7, 134522.0], [94.8, 134522.0], [94.9, 134522.0], [95.0, 134524.0], [95.1, 134524.0], [95.2, 134524.0], [95.3, 134524.0], [95.4, 134524.0], [95.5, 134524.0], [95.6, 134524.0], [95.7, 134524.0], [95.8, 134524.0], [95.9, 134524.0], [96.0, 134527.0], [96.1, 134527.0], [96.2, 134527.0], [96.3, 134527.0], [96.4, 134527.0], [96.5, 134527.0], [96.6, 134527.0], [96.7, 134527.0], [96.8, 134527.0], [96.9, 134527.0], [97.0, 134529.0], [97.1, 134529.0], [97.2, 134529.0], [97.3, 134529.0], [97.4, 134529.0], [97.5, 134529.0], [97.6, 134529.0], [97.7, 134529.0], [97.8, 134529.0], [97.9, 134529.0], [98.0, 134534.0], [98.1, 134534.0], [98.2, 134534.0], [98.3, 134534.0], [98.4, 134534.0], [98.5, 134534.0], [98.6, 134534.0], [98.7, 134534.0], [98.8, 134534.0], [98.9, 134534.0], [99.0, 134538.0], [99.1, 134538.0], [99.2, 134538.0], [99.3, 134538.0], [99.4, 134538.0], [99.5, 134538.0], [99.6, 134538.0], [99.7, 134538.0], [99.8, 134538.0], [99.9, 134538.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 133600.0, "maxY": 14.0, "series": [{"data": [[134000.0, 10.0], [133800.0, 10.0], [134400.0, 11.0], [133600.0, 5.0], [134200.0, 9.0], [133900.0, 9.0], [134100.0, 11.0], [134300.0, 10.0], [133700.0, 11.0], [134500.0, 14.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 134500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 89.49999999999999, "minX": 1.75229076E12, "maxY": 89.49999999999999, "series": [{"data": [[1.75229076E12, 89.49999999999999]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75229076E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 133671.0, "minX": 39.0, "maxY": 134538.0, "series": [{"data": [[39.0, 134450.0], [43.0, 134282.0], [45.0, 134512.0], [44.0, 133671.0], [47.0, 134513.0], [51.0, 134312.0], [54.0, 134402.0], [57.0, 133804.0], [58.0, 134363.0], [63.0, 134081.5], [65.0, 133957.5], [64.0, 134252.0], [71.0, 134222.0], [69.0, 134538.0], [68.0, 133912.0], [74.0, 133923.0], [79.0, 134002.0], [81.0, 134148.0], [82.0, 133975.0], [90.0, 133892.0], [91.0, 134122.0], [95.0, 134377.0], [94.0, 134401.0], [92.0, 134330.10000000003], [98.0, 133931.5], [97.0, 133915.0], [100.0, 134090.72222222225]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[89.49999999999999, 134136.03]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75229076E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75229076E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75229076E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75229076E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 134136.03, "minX": 1.75229076E12, "maxY": 134136.03, "series": [{"data": [[1.75229076E12, 134136.03]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75229076E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75229076E12, "maxY": 4.9E-324, "series": [{"data": [[1.75229076E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75229076E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 134136.01000000004, "minX": 1.75229076E12, "maxY": 134136.01000000004, "series": [{"data": [[1.75229076E12, 134136.01000000004]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75229076E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 134138.0, "minX": 100.0, "maxY": 134138.0, "series": [{"data": [[100.0, 134138.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75229064E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75229064E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75229064E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75229076E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75229076E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75229076E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75229076E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75229076E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75229076E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75229076E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75229076E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75229076E12, "title": "Total Transactions Per Second"}},
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

