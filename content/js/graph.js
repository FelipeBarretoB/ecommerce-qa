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
        data: {"result": {"minY": 135188.0, "minX": 0.0, "maxY": 136057.0, "series": [{"data": [[0.0, 135188.0], [0.1, 135188.0], [0.2, 135188.0], [0.3, 135188.0], [0.4, 135188.0], [0.5, 135188.0], [0.6, 135188.0], [0.7, 135188.0], [0.8, 135188.0], [0.9, 135188.0], [1.0, 135193.0], [1.1, 135193.0], [1.2, 135193.0], [1.3, 135193.0], [1.4, 135193.0], [1.5, 135193.0], [1.6, 135193.0], [1.7, 135193.0], [1.8, 135193.0], [1.9, 135193.0], [2.0, 135204.0], [2.1, 135204.0], [2.2, 135204.0], [2.3, 135204.0], [2.4, 135204.0], [2.5, 135204.0], [2.6, 135204.0], [2.7, 135204.0], [2.8, 135204.0], [2.9, 135204.0], [3.0, 135223.0], [3.1, 135223.0], [3.2, 135223.0], [3.3, 135223.0], [3.4, 135223.0], [3.5, 135223.0], [3.6, 135223.0], [3.7, 135223.0], [3.8, 135223.0], [3.9, 135223.0], [4.0, 135228.0], [4.1, 135228.0], [4.2, 135228.0], [4.3, 135228.0], [4.4, 135228.0], [4.5, 135228.0], [4.6, 135228.0], [4.7, 135228.0], [4.8, 135228.0], [4.9, 135228.0], [5.0, 135231.0], [5.1, 135231.0], [5.2, 135231.0], [5.3, 135231.0], [5.4, 135231.0], [5.5, 135231.0], [5.6, 135231.0], [5.7, 135231.0], [5.8, 135231.0], [5.9, 135231.0], [6.0, 135238.0], [6.1, 135238.0], [6.2, 135238.0], [6.3, 135238.0], [6.4, 135238.0], [6.5, 135238.0], [6.6, 135238.0], [6.7, 135238.0], [6.8, 135238.0], [6.9, 135238.0], [7.0, 135250.0], [7.1, 135250.0], [7.2, 135250.0], [7.3, 135250.0], [7.4, 135250.0], [7.5, 135250.0], [7.6, 135250.0], [7.7, 135250.0], [7.8, 135250.0], [7.9, 135250.0], [8.0, 135259.0], [8.1, 135259.0], [8.2, 135259.0], [8.3, 135259.0], [8.4, 135259.0], [8.5, 135259.0], [8.6, 135259.0], [8.7, 135259.0], [8.8, 135259.0], [8.9, 135259.0], [9.0, 135270.0], [9.1, 135270.0], [9.2, 135270.0], [9.3, 135270.0], [9.4, 135270.0], [9.5, 135270.0], [9.6, 135270.0], [9.7, 135270.0], [9.8, 135270.0], [9.9, 135270.0], [10.0, 135283.0], [10.1, 135283.0], [10.2, 135283.0], [10.3, 135283.0], [10.4, 135283.0], [10.5, 135283.0], [10.6, 135283.0], [10.7, 135283.0], [10.8, 135283.0], [10.9, 135283.0], [11.0, 135293.0], [11.1, 135293.0], [11.2, 135293.0], [11.3, 135293.0], [11.4, 135293.0], [11.5, 135293.0], [11.6, 135293.0], [11.7, 135293.0], [11.8, 135293.0], [11.9, 135293.0], [12.0, 135309.0], [12.1, 135309.0], [12.2, 135309.0], [12.3, 135309.0], [12.4, 135309.0], [12.5, 135309.0], [12.6, 135309.0], [12.7, 135309.0], [12.8, 135309.0], [12.9, 135309.0], [13.0, 135317.0], [13.1, 135317.0], [13.2, 135317.0], [13.3, 135317.0], [13.4, 135317.0], [13.5, 135317.0], [13.6, 135317.0], [13.7, 135317.0], [13.8, 135317.0], [13.9, 135317.0], [14.0, 135323.0], [14.1, 135323.0], [14.2, 135323.0], [14.3, 135323.0], [14.4, 135323.0], [14.5, 135323.0], [14.6, 135323.0], [14.7, 135323.0], [14.8, 135323.0], [14.9, 135323.0], [15.0, 135337.0], [15.1, 135337.0], [15.2, 135337.0], [15.3, 135337.0], [15.4, 135337.0], [15.5, 135337.0], [15.6, 135337.0], [15.7, 135337.0], [15.8, 135337.0], [15.9, 135337.0], [16.0, 135341.0], [16.1, 135341.0], [16.2, 135341.0], [16.3, 135341.0], [16.4, 135341.0], [16.5, 135341.0], [16.6, 135341.0], [16.7, 135341.0], [16.8, 135341.0], [16.9, 135341.0], [17.0, 135354.0], [17.1, 135354.0], [17.2, 135354.0], [17.3, 135354.0], [17.4, 135354.0], [17.5, 135354.0], [17.6, 135354.0], [17.7, 135354.0], [17.8, 135354.0], [17.9, 135354.0], [18.0, 135361.0], [18.1, 135361.0], [18.2, 135361.0], [18.3, 135361.0], [18.4, 135361.0], [18.5, 135361.0], [18.6, 135361.0], [18.7, 135361.0], [18.8, 135361.0], [18.9, 135361.0], [19.0, 135372.0], [19.1, 135372.0], [19.2, 135372.0], [19.3, 135372.0], [19.4, 135372.0], [19.5, 135372.0], [19.6, 135372.0], [19.7, 135372.0], [19.8, 135372.0], [19.9, 135372.0], [20.0, 135389.0], [20.1, 135389.0], [20.2, 135389.0], [20.3, 135389.0], [20.4, 135389.0], [20.5, 135389.0], [20.6, 135389.0], [20.7, 135389.0], [20.8, 135389.0], [20.9, 135389.0], [21.0, 135400.0], [21.1, 135400.0], [21.2, 135400.0], [21.3, 135400.0], [21.4, 135400.0], [21.5, 135400.0], [21.6, 135400.0], [21.7, 135400.0], [21.8, 135400.0], [21.9, 135400.0], [22.0, 135405.0], [22.1, 135405.0], [22.2, 135405.0], [22.3, 135405.0], [22.4, 135405.0], [22.5, 135405.0], [22.6, 135405.0], [22.7, 135405.0], [22.8, 135405.0], [22.9, 135405.0], [23.0, 135412.0], [23.1, 135412.0], [23.2, 135412.0], [23.3, 135412.0], [23.4, 135412.0], [23.5, 135412.0], [23.6, 135412.0], [23.7, 135412.0], [23.8, 135412.0], [23.9, 135412.0], [24.0, 135421.0], [24.1, 135421.0], [24.2, 135421.0], [24.3, 135421.0], [24.4, 135421.0], [24.5, 135421.0], [24.6, 135421.0], [24.7, 135421.0], [24.8, 135421.0], [24.9, 135421.0], [25.0, 135432.0], [25.1, 135432.0], [25.2, 135432.0], [25.3, 135432.0], [25.4, 135432.0], [25.5, 135432.0], [25.6, 135432.0], [25.7, 135432.0], [25.8, 135432.0], [25.9, 135432.0], [26.0, 135439.0], [26.1, 135439.0], [26.2, 135439.0], [26.3, 135439.0], [26.4, 135439.0], [26.5, 135439.0], [26.6, 135439.0], [26.7, 135439.0], [26.8, 135439.0], [26.9, 135439.0], [27.0, 135448.0], [27.1, 135448.0], [27.2, 135448.0], [27.3, 135448.0], [27.4, 135448.0], [27.5, 135448.0], [27.6, 135448.0], [27.7, 135448.0], [27.8, 135448.0], [27.9, 135448.0], [28.0, 135461.0], [28.1, 135461.0], [28.2, 135461.0], [28.3, 135461.0], [28.4, 135461.0], [28.5, 135461.0], [28.6, 135461.0], [28.7, 135461.0], [28.8, 135461.0], [28.9, 135461.0], [29.0, 135479.0], [29.1, 135479.0], [29.2, 135479.0], [29.3, 135479.0], [29.4, 135479.0], [29.5, 135479.0], [29.6, 135479.0], [29.7, 135479.0], [29.8, 135479.0], [29.9, 135479.0], [30.0, 135484.0], [30.1, 135484.0], [30.2, 135484.0], [30.3, 135484.0], [30.4, 135484.0], [30.5, 135484.0], [30.6, 135484.0], [30.7, 135484.0], [30.8, 135484.0], [30.9, 135484.0], [31.0, 135491.0], [31.1, 135491.0], [31.2, 135491.0], [31.3, 135491.0], [31.4, 135491.0], [31.5, 135491.0], [31.6, 135491.0], [31.7, 135491.0], [31.8, 135491.0], [31.9, 135491.0], [32.0, 135508.0], [32.1, 135508.0], [32.2, 135508.0], [32.3, 135508.0], [32.4, 135508.0], [32.5, 135508.0], [32.6, 135508.0], [32.7, 135508.0], [32.8, 135508.0], [32.9, 135508.0], [33.0, 135510.0], [33.1, 135510.0], [33.2, 135510.0], [33.3, 135510.0], [33.4, 135510.0], [33.5, 135510.0], [33.6, 135510.0], [33.7, 135510.0], [33.8, 135510.0], [33.9, 135510.0], [34.0, 135521.0], [34.1, 135521.0], [34.2, 135521.0], [34.3, 135521.0], [34.4, 135521.0], [34.5, 135521.0], [34.6, 135521.0], [34.7, 135521.0], [34.8, 135521.0], [34.9, 135521.0], [35.0, 135538.0], [35.1, 135538.0], [35.2, 135538.0], [35.3, 135538.0], [35.4, 135538.0], [35.5, 135538.0], [35.6, 135538.0], [35.7, 135538.0], [35.8, 135538.0], [35.9, 135538.0], [36.0, 135540.0], [36.1, 135540.0], [36.2, 135540.0], [36.3, 135540.0], [36.4, 135540.0], [36.5, 135540.0], [36.6, 135540.0], [36.7, 135540.0], [36.8, 135540.0], [36.9, 135540.0], [37.0, 135556.0], [37.1, 135556.0], [37.2, 135556.0], [37.3, 135556.0], [37.4, 135556.0], [37.5, 135556.0], [37.6, 135556.0], [37.7, 135556.0], [37.8, 135556.0], [37.9, 135556.0], [38.0, 135560.0], [38.1, 135560.0], [38.2, 135560.0], [38.3, 135560.0], [38.4, 135560.0], [38.5, 135560.0], [38.6, 135560.0], [38.7, 135560.0], [38.8, 135560.0], [38.9, 135560.0], [39.0, 135572.0], [39.1, 135572.0], [39.2, 135572.0], [39.3, 135572.0], [39.4, 135572.0], [39.5, 135572.0], [39.6, 135572.0], [39.7, 135572.0], [39.8, 135572.0], [39.9, 135572.0], [40.0, 135581.0], [40.1, 135581.0], [40.2, 135581.0], [40.3, 135581.0], [40.4, 135581.0], [40.5, 135581.0], [40.6, 135581.0], [40.7, 135581.0], [40.8, 135581.0], [40.9, 135581.0], [41.0, 135599.0], [41.1, 135599.0], [41.2, 135599.0], [41.3, 135599.0], [41.4, 135599.0], [41.5, 135599.0], [41.6, 135599.0], [41.7, 135599.0], [41.8, 135599.0], [41.9, 135599.0], [42.0, 135600.0], [42.1, 135600.0], [42.2, 135600.0], [42.3, 135600.0], [42.4, 135600.0], [42.5, 135600.0], [42.6, 135600.0], [42.7, 135600.0], [42.8, 135600.0], [42.9, 135600.0], [43.0, 135611.0], [43.1, 135611.0], [43.2, 135611.0], [43.3, 135611.0], [43.4, 135611.0], [43.5, 135611.0], [43.6, 135611.0], [43.7, 135611.0], [43.8, 135611.0], [43.9, 135611.0], [44.0, 135621.0], [44.1, 135621.0], [44.2, 135621.0], [44.3, 135621.0], [44.4, 135621.0], [44.5, 135621.0], [44.6, 135621.0], [44.7, 135621.0], [44.8, 135621.0], [44.9, 135621.0], [45.0, 135634.0], [45.1, 135634.0], [45.2, 135634.0], [45.3, 135634.0], [45.4, 135634.0], [45.5, 135634.0], [45.6, 135634.0], [45.7, 135634.0], [45.8, 135634.0], [45.9, 135634.0], [46.0, 135640.0], [46.1, 135640.0], [46.2, 135640.0], [46.3, 135640.0], [46.4, 135640.0], [46.5, 135640.0], [46.6, 135640.0], [46.7, 135640.0], [46.8, 135640.0], [46.9, 135640.0], [47.0, 135651.0], [47.1, 135651.0], [47.2, 135651.0], [47.3, 135651.0], [47.4, 135651.0], [47.5, 135651.0], [47.6, 135651.0], [47.7, 135651.0], [47.8, 135651.0], [47.9, 135651.0], [48.0, 135659.0], [48.1, 135659.0], [48.2, 135659.0], [48.3, 135659.0], [48.4, 135659.0], [48.5, 135659.0], [48.6, 135659.0], [48.7, 135659.0], [48.8, 135659.0], [48.9, 135659.0], [49.0, 135670.0], [49.1, 135670.0], [49.2, 135670.0], [49.3, 135670.0], [49.4, 135670.0], [49.5, 135670.0], [49.6, 135670.0], [49.7, 135670.0], [49.8, 135670.0], [49.9, 135670.0], [50.0, 135682.0], [50.1, 135682.0], [50.2, 135682.0], [50.3, 135682.0], [50.4, 135682.0], [50.5, 135682.0], [50.6, 135682.0], [50.7, 135682.0], [50.8, 135682.0], [50.9, 135682.0], [51.0, 135690.0], [51.1, 135690.0], [51.2, 135690.0], [51.3, 135690.0], [51.4, 135690.0], [51.5, 135690.0], [51.6, 135690.0], [51.7, 135690.0], [51.8, 135690.0], [51.9, 135690.0], [52.0, 135701.0], [52.1, 135701.0], [52.2, 135701.0], [52.3, 135701.0], [52.4, 135701.0], [52.5, 135701.0], [52.6, 135701.0], [52.7, 135701.0], [52.8, 135701.0], [52.9, 135701.0], [53.0, 135710.0], [53.1, 135710.0], [53.2, 135710.0], [53.3, 135710.0], [53.4, 135710.0], [53.5, 135710.0], [53.6, 135710.0], [53.7, 135710.0], [53.8, 135710.0], [53.9, 135710.0], [54.0, 135720.0], [54.1, 135720.0], [54.2, 135720.0], [54.3, 135720.0], [54.4, 135720.0], [54.5, 135720.0], [54.6, 135720.0], [54.7, 135720.0], [54.8, 135720.0], [54.9, 135720.0], [55.0, 135729.0], [55.1, 135729.0], [55.2, 135729.0], [55.3, 135729.0], [55.4, 135729.0], [55.5, 135729.0], [55.6, 135729.0], [55.7, 135729.0], [55.8, 135729.0], [55.9, 135729.0], [56.0, 135740.0], [56.1, 135740.0], [56.2, 135740.0], [56.3, 135740.0], [56.4, 135740.0], [56.5, 135740.0], [56.6, 135740.0], [56.7, 135740.0], [56.8, 135740.0], [56.9, 135740.0], [57.0, 135752.0], [57.1, 135752.0], [57.2, 135752.0], [57.3, 135752.0], [57.4, 135752.0], [57.5, 135752.0], [57.6, 135752.0], [57.7, 135752.0], [57.8, 135752.0], [57.9, 135752.0], [58.0, 135761.0], [58.1, 135761.0], [58.2, 135761.0], [58.3, 135761.0], [58.4, 135761.0], [58.5, 135761.0], [58.6, 135761.0], [58.7, 135761.0], [58.8, 135761.0], [58.9, 135761.0], [59.0, 135770.0], [59.1, 135770.0], [59.2, 135770.0], [59.3, 135770.0], [59.4, 135770.0], [59.5, 135770.0], [59.6, 135770.0], [59.7, 135770.0], [59.8, 135770.0], [59.9, 135770.0], [60.0, 135779.0], [60.1, 135779.0], [60.2, 135779.0], [60.3, 135779.0], [60.4, 135779.0], [60.5, 135779.0], [60.6, 135779.0], [60.7, 135779.0], [60.8, 135779.0], [60.9, 135779.0], [61.0, 135794.0], [61.1, 135794.0], [61.2, 135794.0], [61.3, 135794.0], [61.4, 135794.0], [61.5, 135794.0], [61.6, 135794.0], [61.7, 135794.0], [61.8, 135794.0], [61.9, 135794.0], [62.0, 135806.0], [62.1, 135806.0], [62.2, 135806.0], [62.3, 135806.0], [62.4, 135806.0], [62.5, 135806.0], [62.6, 135806.0], [62.7, 135806.0], [62.8, 135806.0], [62.9, 135806.0], [63.0, 135814.0], [63.1, 135814.0], [63.2, 135814.0], [63.3, 135814.0], [63.4, 135814.0], [63.5, 135814.0], [63.6, 135814.0], [63.7, 135814.0], [63.8, 135814.0], [63.9, 135814.0], [64.0, 135820.0], [64.1, 135820.0], [64.2, 135820.0], [64.3, 135820.0], [64.4, 135820.0], [64.5, 135820.0], [64.6, 135820.0], [64.7, 135820.0], [64.8, 135820.0], [64.9, 135820.0], [65.0, 135836.0], [65.1, 135836.0], [65.2, 135836.0], [65.3, 135836.0], [65.4, 135836.0], [65.5, 135836.0], [65.6, 135836.0], [65.7, 135836.0], [65.8, 135836.0], [65.9, 135836.0], [66.0, 135845.0], [66.1, 135845.0], [66.2, 135845.0], [66.3, 135845.0], [66.4, 135845.0], [66.5, 135845.0], [66.6, 135845.0], [66.7, 135845.0], [66.8, 135845.0], [66.9, 135845.0], [67.0, 135849.0], [67.1, 135849.0], [67.2, 135849.0], [67.3, 135849.0], [67.4, 135849.0], [67.5, 135849.0], [67.6, 135849.0], [67.7, 135849.0], [67.8, 135849.0], [67.9, 135849.0], [68.0, 135863.0], [68.1, 135863.0], [68.2, 135863.0], [68.3, 135863.0], [68.4, 135863.0], [68.5, 135863.0], [68.6, 135863.0], [68.7, 135863.0], [68.8, 135863.0], [68.9, 135863.0], [69.0, 135870.0], [69.1, 135870.0], [69.2, 135870.0], [69.3, 135870.0], [69.4, 135870.0], [69.5, 135870.0], [69.6, 135870.0], [69.7, 135870.0], [69.8, 135870.0], [69.9, 135870.0], [70.0, 135884.0], [70.1, 135884.0], [70.2, 135884.0], [70.3, 135884.0], [70.4, 135884.0], [70.5, 135884.0], [70.6, 135884.0], [70.7, 135884.0], [70.8, 135884.0], [70.9, 135884.0], [71.0, 135898.0], [71.1, 135898.0], [71.2, 135898.0], [71.3, 135898.0], [71.4, 135898.0], [71.5, 135898.0], [71.6, 135898.0], [71.7, 135898.0], [71.8, 135898.0], [71.9, 135898.0], [72.0, 135907.0], [72.1, 135907.0], [72.2, 135907.0], [72.3, 135907.0], [72.4, 135907.0], [72.5, 135907.0], [72.6, 135907.0], [72.7, 135907.0], [72.8, 135907.0], [72.9, 135907.0], [73.0, 135908.0], [73.1, 135908.0], [73.2, 135908.0], [73.3, 135908.0], [73.4, 135908.0], [73.5, 135908.0], [73.6, 135908.0], [73.7, 135908.0], [73.8, 135908.0], [73.9, 135908.0], [74.0, 135920.0], [74.1, 135920.0], [74.2, 135920.0], [74.3, 135920.0], [74.4, 135920.0], [74.5, 135920.0], [74.6, 135920.0], [74.7, 135920.0], [74.8, 135920.0], [74.9, 135920.0], [75.0, 135937.0], [75.1, 135937.0], [75.2, 135937.0], [75.3, 135937.0], [75.4, 135937.0], [75.5, 135937.0], [75.6, 135937.0], [75.7, 135937.0], [75.8, 135937.0], [75.9, 135937.0], [76.0, 135939.0], [76.1, 135939.0], [76.2, 135939.0], [76.3, 135939.0], [76.4, 135939.0], [76.5, 135939.0], [76.6, 135939.0], [76.7, 135939.0], [76.8, 135939.0], [76.9, 135939.0], [77.0, 135953.0], [77.1, 135953.0], [77.2, 135953.0], [77.3, 135953.0], [77.4, 135953.0], [77.5, 135953.0], [77.6, 135953.0], [77.7, 135953.0], [77.8, 135953.0], [77.9, 135953.0], [78.0, 135965.0], [78.1, 135965.0], [78.2, 135965.0], [78.3, 135965.0], [78.4, 135965.0], [78.5, 135965.0], [78.6, 135965.0], [78.7, 135965.0], [78.8, 135965.0], [78.9, 135965.0], [79.0, 135979.0], [79.1, 135979.0], [79.2, 135979.0], [79.3, 135979.0], [79.4, 135979.0], [79.5, 135979.0], [79.6, 135979.0], [79.7, 135979.0], [79.8, 135979.0], [79.9, 135979.0], [80.0, 135988.0], [80.1, 135988.0], [80.2, 135988.0], [80.3, 135988.0], [80.4, 135988.0], [80.5, 135988.0], [80.6, 135988.0], [80.7, 135988.0], [80.8, 135988.0], [80.9, 135988.0], [81.0, 135991.0], [81.1, 135991.0], [81.2, 135991.0], [81.3, 135991.0], [81.4, 135991.0], [81.5, 135991.0], [81.6, 135991.0], [81.7, 135991.0], [81.8, 135991.0], [81.9, 135991.0], [82.0, 136008.0], [82.1, 136008.0], [82.2, 136008.0], [82.3, 136008.0], [82.4, 136008.0], [82.5, 136008.0], [82.6, 136008.0], [82.7, 136008.0], [82.8, 136008.0], [82.9, 136008.0], [83.0, 136017.0], [83.1, 136017.0], [83.2, 136017.0], [83.3, 136017.0], [83.4, 136017.0], [83.5, 136017.0], [83.6, 136017.0], [83.7, 136017.0], [83.8, 136017.0], [83.9, 136017.0], [84.0, 136022.0], [84.1, 136022.0], [84.2, 136022.0], [84.3, 136022.0], [84.4, 136022.0], [84.5, 136022.0], [84.6, 136022.0], [84.7, 136022.0], [84.8, 136022.0], [84.9, 136022.0], [85.0, 136032.0], [85.1, 136032.0], [85.2, 136032.0], [85.3, 136032.0], [85.4, 136032.0], [85.5, 136032.0], [85.6, 136032.0], [85.7, 136032.0], [85.8, 136032.0], [85.9, 136032.0], [86.0, 136037.0], [86.1, 136037.0], [86.2, 136037.0], [86.3, 136037.0], [86.4, 136037.0], [86.5, 136037.0], [86.6, 136037.0], [86.7, 136037.0], [86.8, 136037.0], [86.9, 136037.0], [87.0, 136048.0], [87.1, 136048.0], [87.2, 136048.0], [87.3, 136048.0], [87.4, 136048.0], [87.5, 136048.0], [87.6, 136048.0], [87.7, 136048.0], [87.8, 136048.0], [87.9, 136048.0], [88.0, 136048.0], [88.1, 136048.0], [88.2, 136048.0], [88.3, 136048.0], [88.4, 136048.0], [88.5, 136048.0], [88.6, 136048.0], [88.7, 136048.0], [88.8, 136048.0], [88.9, 136048.0], [89.0, 136048.0], [89.1, 136048.0], [89.2, 136048.0], [89.3, 136048.0], [89.4, 136048.0], [89.5, 136048.0], [89.6, 136048.0], [89.7, 136048.0], [89.8, 136048.0], [89.9, 136048.0], [90.0, 136048.0], [90.1, 136048.0], [90.2, 136048.0], [90.3, 136048.0], [90.4, 136048.0], [90.5, 136048.0], [90.6, 136048.0], [90.7, 136048.0], [90.8, 136048.0], [90.9, 136048.0], [91.0, 136049.0], [91.1, 136049.0], [91.2, 136049.0], [91.3, 136049.0], [91.4, 136049.0], [91.5, 136049.0], [91.6, 136049.0], [91.7, 136049.0], [91.8, 136049.0], [91.9, 136049.0], [92.0, 136049.0], [92.1, 136049.0], [92.2, 136049.0], [92.3, 136049.0], [92.4, 136049.0], [92.5, 136049.0], [92.6, 136049.0], [92.7, 136049.0], [92.8, 136049.0], [92.9, 136049.0], [93.0, 136050.0], [93.1, 136050.0], [93.2, 136050.0], [93.3, 136050.0], [93.4, 136050.0], [93.5, 136050.0], [93.6, 136050.0], [93.7, 136050.0], [93.8, 136050.0], [93.9, 136050.0], [94.0, 136050.0], [94.1, 136050.0], [94.2, 136050.0], [94.3, 136050.0], [94.4, 136050.0], [94.5, 136050.0], [94.6, 136050.0], [94.7, 136050.0], [94.8, 136050.0], [94.9, 136050.0], [95.0, 136050.0], [95.1, 136050.0], [95.2, 136050.0], [95.3, 136050.0], [95.4, 136050.0], [95.5, 136050.0], [95.6, 136050.0], [95.7, 136050.0], [95.8, 136050.0], [95.9, 136050.0], [96.0, 136052.0], [96.1, 136052.0], [96.2, 136052.0], [96.3, 136052.0], [96.4, 136052.0], [96.5, 136052.0], [96.6, 136052.0], [96.7, 136052.0], [96.8, 136052.0], [96.9, 136052.0], [97.0, 136052.0], [97.1, 136052.0], [97.2, 136052.0], [97.3, 136052.0], [97.4, 136052.0], [97.5, 136052.0], [97.6, 136052.0], [97.7, 136052.0], [97.8, 136052.0], [97.9, 136052.0], [98.0, 136052.0], [98.1, 136052.0], [98.2, 136052.0], [98.3, 136052.0], [98.4, 136052.0], [98.5, 136052.0], [98.6, 136052.0], [98.7, 136052.0], [98.8, 136052.0], [98.9, 136052.0], [99.0, 136057.0], [99.1, 136057.0], [99.2, 136057.0], [99.3, 136057.0], [99.4, 136057.0], [99.5, 136057.0], [99.6, 136057.0], [99.7, 136057.0], [99.8, 136057.0], [99.9, 136057.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 135100.0, "maxY": 18.0, "series": [{"data": [[135400.0, 11.0], [136000.0, 18.0], [135600.0, 10.0], [135200.0, 10.0], [135800.0, 10.0], [135900.0, 10.0], [135500.0, 10.0], [135300.0, 9.0], [135700.0, 10.0], [135100.0, 2.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 81.07000000000004, "minX": 1.76144826E12, "maxY": 81.07000000000004, "series": [{"data": [[1.76144826E12, 81.07000000000004]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76144826E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135231.0, "minX": 36.0, "maxY": 136049.0, "series": [{"data": [[37.0, 135250.0], [36.0, 135259.0], [41.0, 135270.0], [43.0, 135849.0], [42.0, 135483.75], [44.0, 135729.0], [46.0, 135929.5], [48.0, 135888.5], [51.0, 136048.0], [50.0, 136048.0], [53.0, 135991.0], [52.0, 135714.5], [55.0, 135979.0], [56.0, 135231.0], [58.0, 136032.5], [61.0, 135644.5], [63.0, 135309.0], [67.0, 135794.5], [65.0, 135464.0], [64.0, 135779.0], [70.0, 135693.0], [75.0, 135706.66666666666], [74.0, 135641.0], [82.0, 135701.0], [81.0, 136049.0], [80.0, 135611.0], [85.0, 135551.0], [84.0, 135645.5], [90.0, 135521.0], [89.0, 135835.5], [93.0, 135736.0], [100.0, 135643.20833333337]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[81.07000000000004, 135669.75000000006]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.76144826E12, "maxY": 4708.333333333333, "series": [{"data": [[1.76144826E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76144826E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76144826E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 135669.75000000006, "minX": 1.76144826E12, "maxY": 135669.75000000006, "series": [{"data": [[1.76144826E12, 135669.75000000006]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76144826E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.76144826E12, "maxY": 4.9E-324, "series": [{"data": [[1.76144826E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76144826E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 135669.45999999996, "minX": 1.76144826E12, "maxY": 135669.45999999996, "series": [{"data": [[1.76144826E12, 135669.45999999996]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76144826E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 135676.0, "minX": 100.0, "maxY": 135676.0, "series": [{"data": [[100.0, 135676.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76144814E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76144814E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76144814E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76144826E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76144826E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76144826E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76144826E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76144826E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76144826E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76144826E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76144826E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76144826E12, "title": "Total Transactions Per Second"}},
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

