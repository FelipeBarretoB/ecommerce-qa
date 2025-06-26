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
        data: {"result": {"minY": 135776.0, "minX": 0.0, "maxY": 136644.0, "series": [{"data": [[0.0, 135776.0], [0.1, 135776.0], [0.2, 135776.0], [0.3, 135776.0], [0.4, 135776.0], [0.5, 135776.0], [0.6, 135776.0], [0.7, 135776.0], [0.8, 135776.0], [0.9, 135776.0], [1.0, 135785.0], [1.1, 135785.0], [1.2, 135785.0], [1.3, 135785.0], [1.4, 135785.0], [1.5, 135785.0], [1.6, 135785.0], [1.7, 135785.0], [1.8, 135785.0], [1.9, 135785.0], [2.0, 135795.0], [2.1, 135795.0], [2.2, 135795.0], [2.3, 135795.0], [2.4, 135795.0], [2.5, 135795.0], [2.6, 135795.0], [2.7, 135795.0], [2.8, 135795.0], [2.9, 135795.0], [3.0, 135805.0], [3.1, 135805.0], [3.2, 135805.0], [3.3, 135805.0], [3.4, 135805.0], [3.5, 135805.0], [3.6, 135805.0], [3.7, 135805.0], [3.8, 135805.0], [3.9, 135805.0], [4.0, 135817.0], [4.1, 135817.0], [4.2, 135817.0], [4.3, 135817.0], [4.4, 135817.0], [4.5, 135817.0], [4.6, 135817.0], [4.7, 135817.0], [4.8, 135817.0], [4.9, 135817.0], [5.0, 135825.0], [5.1, 135825.0], [5.2, 135825.0], [5.3, 135825.0], [5.4, 135825.0], [5.5, 135825.0], [5.6, 135825.0], [5.7, 135825.0], [5.8, 135825.0], [5.9, 135825.0], [6.0, 135834.0], [6.1, 135834.0], [6.2, 135834.0], [6.3, 135834.0], [6.4, 135834.0], [6.5, 135834.0], [6.6, 135834.0], [6.7, 135834.0], [6.8, 135834.0], [6.9, 135834.0], [7.0, 135843.0], [7.1, 135843.0], [7.2, 135843.0], [7.3, 135843.0], [7.4, 135843.0], [7.5, 135843.0], [7.6, 135843.0], [7.7, 135843.0], [7.8, 135843.0], [7.9, 135843.0], [8.0, 135856.0], [8.1, 135856.0], [8.2, 135856.0], [8.3, 135856.0], [8.4, 135856.0], [8.5, 135856.0], [8.6, 135856.0], [8.7, 135856.0], [8.8, 135856.0], [8.9, 135856.0], [9.0, 135863.0], [9.1, 135863.0], [9.2, 135863.0], [9.3, 135863.0], [9.4, 135863.0], [9.5, 135863.0], [9.6, 135863.0], [9.7, 135863.0], [9.8, 135863.0], [9.9, 135863.0], [10.0, 135874.0], [10.1, 135874.0], [10.2, 135874.0], [10.3, 135874.0], [10.4, 135874.0], [10.5, 135874.0], [10.6, 135874.0], [10.7, 135874.0], [10.8, 135874.0], [10.9, 135874.0], [11.0, 135883.0], [11.1, 135883.0], [11.2, 135883.0], [11.3, 135883.0], [11.4, 135883.0], [11.5, 135883.0], [11.6, 135883.0], [11.7, 135883.0], [11.8, 135883.0], [11.9, 135883.0], [12.0, 135892.0], [12.1, 135892.0], [12.2, 135892.0], [12.3, 135892.0], [12.4, 135892.0], [12.5, 135892.0], [12.6, 135892.0], [12.7, 135892.0], [12.8, 135892.0], [12.9, 135892.0], [13.0, 135904.0], [13.1, 135904.0], [13.2, 135904.0], [13.3, 135904.0], [13.4, 135904.0], [13.5, 135904.0], [13.6, 135904.0], [13.7, 135904.0], [13.8, 135904.0], [13.9, 135904.0], [14.0, 135916.0], [14.1, 135916.0], [14.2, 135916.0], [14.3, 135916.0], [14.4, 135916.0], [14.5, 135916.0], [14.6, 135916.0], [14.7, 135916.0], [14.8, 135916.0], [14.9, 135916.0], [15.0, 135925.0], [15.1, 135925.0], [15.2, 135925.0], [15.3, 135925.0], [15.4, 135925.0], [15.5, 135925.0], [15.6, 135925.0], [15.7, 135925.0], [15.8, 135925.0], [15.9, 135925.0], [16.0, 135935.0], [16.1, 135935.0], [16.2, 135935.0], [16.3, 135935.0], [16.4, 135935.0], [16.5, 135935.0], [16.6, 135935.0], [16.7, 135935.0], [16.8, 135935.0], [16.9, 135935.0], [17.0, 135945.0], [17.1, 135945.0], [17.2, 135945.0], [17.3, 135945.0], [17.4, 135945.0], [17.5, 135945.0], [17.6, 135945.0], [17.7, 135945.0], [17.8, 135945.0], [17.9, 135945.0], [18.0, 135956.0], [18.1, 135956.0], [18.2, 135956.0], [18.3, 135956.0], [18.4, 135956.0], [18.5, 135956.0], [18.6, 135956.0], [18.7, 135956.0], [18.8, 135956.0], [18.9, 135956.0], [19.0, 135965.0], [19.1, 135965.0], [19.2, 135965.0], [19.3, 135965.0], [19.4, 135965.0], [19.5, 135965.0], [19.6, 135965.0], [19.7, 135965.0], [19.8, 135965.0], [19.9, 135965.0], [20.0, 135975.0], [20.1, 135975.0], [20.2, 135975.0], [20.3, 135975.0], [20.4, 135975.0], [20.5, 135975.0], [20.6, 135975.0], [20.7, 135975.0], [20.8, 135975.0], [20.9, 135975.0], [21.0, 135984.0], [21.1, 135984.0], [21.2, 135984.0], [21.3, 135984.0], [21.4, 135984.0], [21.5, 135984.0], [21.6, 135984.0], [21.7, 135984.0], [21.8, 135984.0], [21.9, 135984.0], [22.0, 135996.0], [22.1, 135996.0], [22.2, 135996.0], [22.3, 135996.0], [22.4, 135996.0], [22.5, 135996.0], [22.6, 135996.0], [22.7, 135996.0], [22.8, 135996.0], [22.9, 135996.0], [23.0, 136004.0], [23.1, 136004.0], [23.2, 136004.0], [23.3, 136004.0], [23.4, 136004.0], [23.5, 136004.0], [23.6, 136004.0], [23.7, 136004.0], [23.8, 136004.0], [23.9, 136004.0], [24.0, 136015.0], [24.1, 136015.0], [24.2, 136015.0], [24.3, 136015.0], [24.4, 136015.0], [24.5, 136015.0], [24.6, 136015.0], [24.7, 136015.0], [24.8, 136015.0], [24.9, 136015.0], [25.0, 136026.0], [25.1, 136026.0], [25.2, 136026.0], [25.3, 136026.0], [25.4, 136026.0], [25.5, 136026.0], [25.6, 136026.0], [25.7, 136026.0], [25.8, 136026.0], [25.9, 136026.0], [26.0, 136034.0], [26.1, 136034.0], [26.2, 136034.0], [26.3, 136034.0], [26.4, 136034.0], [26.5, 136034.0], [26.6, 136034.0], [26.7, 136034.0], [26.8, 136034.0], [26.9, 136034.0], [27.0, 136044.0], [27.1, 136044.0], [27.2, 136044.0], [27.3, 136044.0], [27.4, 136044.0], [27.5, 136044.0], [27.6, 136044.0], [27.7, 136044.0], [27.8, 136044.0], [27.9, 136044.0], [28.0, 136055.0], [28.1, 136055.0], [28.2, 136055.0], [28.3, 136055.0], [28.4, 136055.0], [28.5, 136055.0], [28.6, 136055.0], [28.7, 136055.0], [28.8, 136055.0], [28.9, 136055.0], [29.0, 136064.0], [29.1, 136064.0], [29.2, 136064.0], [29.3, 136064.0], [29.4, 136064.0], [29.5, 136064.0], [29.6, 136064.0], [29.7, 136064.0], [29.8, 136064.0], [29.9, 136064.0], [30.0, 136075.0], [30.1, 136075.0], [30.2, 136075.0], [30.3, 136075.0], [30.4, 136075.0], [30.5, 136075.0], [30.6, 136075.0], [30.7, 136075.0], [30.8, 136075.0], [30.9, 136075.0], [31.0, 136085.0], [31.1, 136085.0], [31.2, 136085.0], [31.3, 136085.0], [31.4, 136085.0], [31.5, 136085.0], [31.6, 136085.0], [31.7, 136085.0], [31.8, 136085.0], [31.9, 136085.0], [32.0, 136094.0], [32.1, 136094.0], [32.2, 136094.0], [32.3, 136094.0], [32.4, 136094.0], [32.5, 136094.0], [32.6, 136094.0], [32.7, 136094.0], [32.8, 136094.0], [32.9, 136094.0], [33.0, 136106.0], [33.1, 136106.0], [33.2, 136106.0], [33.3, 136106.0], [33.4, 136106.0], [33.5, 136106.0], [33.6, 136106.0], [33.7, 136106.0], [33.8, 136106.0], [33.9, 136106.0], [34.0, 136115.0], [34.1, 136115.0], [34.2, 136115.0], [34.3, 136115.0], [34.4, 136115.0], [34.5, 136115.0], [34.6, 136115.0], [34.7, 136115.0], [34.8, 136115.0], [34.9, 136115.0], [35.0, 136123.0], [35.1, 136123.0], [35.2, 136123.0], [35.3, 136123.0], [35.4, 136123.0], [35.5, 136123.0], [35.6, 136123.0], [35.7, 136123.0], [35.8, 136123.0], [35.9, 136123.0], [36.0, 136134.0], [36.1, 136134.0], [36.2, 136134.0], [36.3, 136134.0], [36.4, 136134.0], [36.5, 136134.0], [36.6, 136134.0], [36.7, 136134.0], [36.8, 136134.0], [36.9, 136134.0], [37.0, 136147.0], [37.1, 136147.0], [37.2, 136147.0], [37.3, 136147.0], [37.4, 136147.0], [37.5, 136147.0], [37.6, 136147.0], [37.7, 136147.0], [37.8, 136147.0], [37.9, 136147.0], [38.0, 136154.0], [38.1, 136154.0], [38.2, 136154.0], [38.3, 136154.0], [38.4, 136154.0], [38.5, 136154.0], [38.6, 136154.0], [38.7, 136154.0], [38.8, 136154.0], [38.9, 136154.0], [39.0, 136163.0], [39.1, 136163.0], [39.2, 136163.0], [39.3, 136163.0], [39.4, 136163.0], [39.5, 136163.0], [39.6, 136163.0], [39.7, 136163.0], [39.8, 136163.0], [39.9, 136163.0], [40.0, 136176.0], [40.1, 136176.0], [40.2, 136176.0], [40.3, 136176.0], [40.4, 136176.0], [40.5, 136176.0], [40.6, 136176.0], [40.7, 136176.0], [40.8, 136176.0], [40.9, 136176.0], [41.0, 136185.0], [41.1, 136185.0], [41.2, 136185.0], [41.3, 136185.0], [41.4, 136185.0], [41.5, 136185.0], [41.6, 136185.0], [41.7, 136185.0], [41.8, 136185.0], [41.9, 136185.0], [42.0, 136193.0], [42.1, 136193.0], [42.2, 136193.0], [42.3, 136193.0], [42.4, 136193.0], [42.5, 136193.0], [42.6, 136193.0], [42.7, 136193.0], [42.8, 136193.0], [42.9, 136193.0], [43.0, 136206.0], [43.1, 136206.0], [43.2, 136206.0], [43.3, 136206.0], [43.4, 136206.0], [43.5, 136206.0], [43.6, 136206.0], [43.7, 136206.0], [43.8, 136206.0], [43.9, 136206.0], [44.0, 136216.0], [44.1, 136216.0], [44.2, 136216.0], [44.3, 136216.0], [44.4, 136216.0], [44.5, 136216.0], [44.6, 136216.0], [44.7, 136216.0], [44.8, 136216.0], [44.9, 136216.0], [45.0, 136226.0], [45.1, 136226.0], [45.2, 136226.0], [45.3, 136226.0], [45.4, 136226.0], [45.5, 136226.0], [45.6, 136226.0], [45.7, 136226.0], [45.8, 136226.0], [45.9, 136226.0], [46.0, 136235.0], [46.1, 136235.0], [46.2, 136235.0], [46.3, 136235.0], [46.4, 136235.0], [46.5, 136235.0], [46.6, 136235.0], [46.7, 136235.0], [46.8, 136235.0], [46.9, 136235.0], [47.0, 136245.0], [47.1, 136245.0], [47.2, 136245.0], [47.3, 136245.0], [47.4, 136245.0], [47.5, 136245.0], [47.6, 136245.0], [47.7, 136245.0], [47.8, 136245.0], [47.9, 136245.0], [48.0, 136254.0], [48.1, 136254.0], [48.2, 136254.0], [48.3, 136254.0], [48.4, 136254.0], [48.5, 136254.0], [48.6, 136254.0], [48.7, 136254.0], [48.8, 136254.0], [48.9, 136254.0], [49.0, 136266.0], [49.1, 136266.0], [49.2, 136266.0], [49.3, 136266.0], [49.4, 136266.0], [49.5, 136266.0], [49.6, 136266.0], [49.7, 136266.0], [49.8, 136266.0], [49.9, 136266.0], [50.0, 136274.0], [50.1, 136274.0], [50.2, 136274.0], [50.3, 136274.0], [50.4, 136274.0], [50.5, 136274.0], [50.6, 136274.0], [50.7, 136274.0], [50.8, 136274.0], [50.9, 136274.0], [51.0, 136284.0], [51.1, 136284.0], [51.2, 136284.0], [51.3, 136284.0], [51.4, 136284.0], [51.5, 136284.0], [51.6, 136284.0], [51.7, 136284.0], [51.8, 136284.0], [51.9, 136284.0], [52.0, 136296.0], [52.1, 136296.0], [52.2, 136296.0], [52.3, 136296.0], [52.4, 136296.0], [52.5, 136296.0], [52.6, 136296.0], [52.7, 136296.0], [52.8, 136296.0], [52.9, 136296.0], [53.0, 136305.0], [53.1, 136305.0], [53.2, 136305.0], [53.3, 136305.0], [53.4, 136305.0], [53.5, 136305.0], [53.6, 136305.0], [53.7, 136305.0], [53.8, 136305.0], [53.9, 136305.0], [54.0, 136313.0], [54.1, 136313.0], [54.2, 136313.0], [54.3, 136313.0], [54.4, 136313.0], [54.5, 136313.0], [54.6, 136313.0], [54.7, 136313.0], [54.8, 136313.0], [54.9, 136313.0], [55.0, 136323.0], [55.1, 136323.0], [55.2, 136323.0], [55.3, 136323.0], [55.4, 136323.0], [55.5, 136323.0], [55.6, 136323.0], [55.7, 136323.0], [55.8, 136323.0], [55.9, 136323.0], [56.0, 136333.0], [56.1, 136333.0], [56.2, 136333.0], [56.3, 136333.0], [56.4, 136333.0], [56.5, 136333.0], [56.6, 136333.0], [56.7, 136333.0], [56.8, 136333.0], [56.9, 136333.0], [57.0, 136343.0], [57.1, 136343.0], [57.2, 136343.0], [57.3, 136343.0], [57.4, 136343.0], [57.5, 136343.0], [57.6, 136343.0], [57.7, 136343.0], [57.8, 136343.0], [57.9, 136343.0], [58.0, 136355.0], [58.1, 136355.0], [58.2, 136355.0], [58.3, 136355.0], [58.4, 136355.0], [58.5, 136355.0], [58.6, 136355.0], [58.7, 136355.0], [58.8, 136355.0], [58.9, 136355.0], [59.0, 136363.0], [59.1, 136363.0], [59.2, 136363.0], [59.3, 136363.0], [59.4, 136363.0], [59.5, 136363.0], [59.6, 136363.0], [59.7, 136363.0], [59.8, 136363.0], [59.9, 136363.0], [60.0, 136375.0], [60.1, 136375.0], [60.2, 136375.0], [60.3, 136375.0], [60.4, 136375.0], [60.5, 136375.0], [60.6, 136375.0], [60.7, 136375.0], [60.8, 136375.0], [60.9, 136375.0], [61.0, 136384.0], [61.1, 136384.0], [61.2, 136384.0], [61.3, 136384.0], [61.4, 136384.0], [61.5, 136384.0], [61.6, 136384.0], [61.7, 136384.0], [61.8, 136384.0], [61.9, 136384.0], [62.0, 136395.0], [62.1, 136395.0], [62.2, 136395.0], [62.3, 136395.0], [62.4, 136395.0], [62.5, 136395.0], [62.6, 136395.0], [62.7, 136395.0], [62.8, 136395.0], [62.9, 136395.0], [63.0, 136407.0], [63.1, 136407.0], [63.2, 136407.0], [63.3, 136407.0], [63.4, 136407.0], [63.5, 136407.0], [63.6, 136407.0], [63.7, 136407.0], [63.8, 136407.0], [63.9, 136407.0], [64.0, 136416.0], [64.1, 136416.0], [64.2, 136416.0], [64.3, 136416.0], [64.4, 136416.0], [64.5, 136416.0], [64.6, 136416.0], [64.7, 136416.0], [64.8, 136416.0], [64.9, 136416.0], [65.0, 136426.0], [65.1, 136426.0], [65.2, 136426.0], [65.3, 136426.0], [65.4, 136426.0], [65.5, 136426.0], [65.6, 136426.0], [65.7, 136426.0], [65.8, 136426.0], [65.9, 136426.0], [66.0, 136436.0], [66.1, 136436.0], [66.2, 136436.0], [66.3, 136436.0], [66.4, 136436.0], [66.5, 136436.0], [66.6, 136436.0], [66.7, 136436.0], [66.8, 136436.0], [66.9, 136436.0], [67.0, 136445.0], [67.1, 136445.0], [67.2, 136445.0], [67.3, 136445.0], [67.4, 136445.0], [67.5, 136445.0], [67.6, 136445.0], [67.7, 136445.0], [67.8, 136445.0], [67.9, 136445.0], [68.0, 136455.0], [68.1, 136455.0], [68.2, 136455.0], [68.3, 136455.0], [68.4, 136455.0], [68.5, 136455.0], [68.6, 136455.0], [68.7, 136455.0], [68.8, 136455.0], [68.9, 136455.0], [69.0, 136464.0], [69.1, 136464.0], [69.2, 136464.0], [69.3, 136464.0], [69.4, 136464.0], [69.5, 136464.0], [69.6, 136464.0], [69.7, 136464.0], [69.8, 136464.0], [69.9, 136464.0], [70.0, 136475.0], [70.1, 136475.0], [70.2, 136475.0], [70.3, 136475.0], [70.4, 136475.0], [70.5, 136475.0], [70.6, 136475.0], [70.7, 136475.0], [70.8, 136475.0], [70.9, 136475.0], [71.0, 136484.0], [71.1, 136484.0], [71.2, 136484.0], [71.3, 136484.0], [71.4, 136484.0], [71.5, 136484.0], [71.6, 136484.0], [71.7, 136484.0], [71.8, 136484.0], [71.9, 136484.0], [72.0, 136494.0], [72.1, 136494.0], [72.2, 136494.0], [72.3, 136494.0], [72.4, 136494.0], [72.5, 136494.0], [72.6, 136494.0], [72.7, 136494.0], [72.8, 136494.0], [72.9, 136494.0], [73.0, 136504.0], [73.1, 136504.0], [73.2, 136504.0], [73.3, 136504.0], [73.4, 136504.0], [73.5, 136504.0], [73.6, 136504.0], [73.7, 136504.0], [73.8, 136504.0], [73.9, 136504.0], [74.0, 136515.0], [74.1, 136515.0], [74.2, 136515.0], [74.3, 136515.0], [74.4, 136515.0], [74.5, 136515.0], [74.6, 136515.0], [74.7, 136515.0], [74.8, 136515.0], [74.9, 136515.0], [75.0, 136525.0], [75.1, 136525.0], [75.2, 136525.0], [75.3, 136525.0], [75.4, 136525.0], [75.5, 136525.0], [75.6, 136525.0], [75.7, 136525.0], [75.8, 136525.0], [75.9, 136525.0], [76.0, 136534.0], [76.1, 136534.0], [76.2, 136534.0], [76.3, 136534.0], [76.4, 136534.0], [76.5, 136534.0], [76.6, 136534.0], [76.7, 136534.0], [76.8, 136534.0], [76.9, 136534.0], [77.0, 136543.0], [77.1, 136543.0], [77.2, 136543.0], [77.3, 136543.0], [77.4, 136543.0], [77.5, 136543.0], [77.6, 136543.0], [77.7, 136543.0], [77.8, 136543.0], [77.9, 136543.0], [78.0, 136554.0], [78.1, 136554.0], [78.2, 136554.0], [78.3, 136554.0], [78.4, 136554.0], [78.5, 136554.0], [78.6, 136554.0], [78.7, 136554.0], [78.8, 136554.0], [78.9, 136554.0], [79.0, 136562.0], [79.1, 136562.0], [79.2, 136562.0], [79.3, 136562.0], [79.4, 136562.0], [79.5, 136562.0], [79.6, 136562.0], [79.7, 136562.0], [79.8, 136562.0], [79.9, 136562.0], [80.0, 136573.0], [80.1, 136573.0], [80.2, 136573.0], [80.3, 136573.0], [80.4, 136573.0], [80.5, 136573.0], [80.6, 136573.0], [80.7, 136573.0], [80.8, 136573.0], [80.9, 136573.0], [81.0, 136585.0], [81.1, 136585.0], [81.2, 136585.0], [81.3, 136585.0], [81.4, 136585.0], [81.5, 136585.0], [81.6, 136585.0], [81.7, 136585.0], [81.8, 136585.0], [81.9, 136585.0], [82.0, 136595.0], [82.1, 136595.0], [82.2, 136595.0], [82.3, 136595.0], [82.4, 136595.0], [82.5, 136595.0], [82.6, 136595.0], [82.7, 136595.0], [82.8, 136595.0], [82.9, 136595.0], [83.0, 136604.0], [83.1, 136604.0], [83.2, 136604.0], [83.3, 136604.0], [83.4, 136604.0], [83.5, 136604.0], [83.6, 136604.0], [83.7, 136604.0], [83.8, 136604.0], [83.9, 136604.0], [84.0, 136615.0], [84.1, 136615.0], [84.2, 136615.0], [84.3, 136615.0], [84.4, 136615.0], [84.5, 136615.0], [84.6, 136615.0], [84.7, 136615.0], [84.8, 136615.0], [84.9, 136615.0], [85.0, 136624.0], [85.1, 136624.0], [85.2, 136624.0], [85.3, 136624.0], [85.4, 136624.0], [85.5, 136624.0], [85.6, 136624.0], [85.7, 136624.0], [85.8, 136624.0], [85.9, 136624.0], [86.0, 136633.0], [86.1, 136633.0], [86.2, 136633.0], [86.3, 136633.0], [86.4, 136633.0], [86.5, 136633.0], [86.6, 136633.0], [86.7, 136633.0], [86.8, 136633.0], [86.9, 136633.0], [87.0, 136641.0], [87.1, 136641.0], [87.2, 136641.0], [87.3, 136641.0], [87.4, 136641.0], [87.5, 136641.0], [87.6, 136641.0], [87.7, 136641.0], [87.8, 136641.0], [87.9, 136641.0], [88.0, 136641.0], [88.1, 136641.0], [88.2, 136641.0], [88.3, 136641.0], [88.4, 136641.0], [88.5, 136641.0], [88.6, 136641.0], [88.7, 136641.0], [88.8, 136641.0], [88.9, 136641.0], [89.0, 136641.0], [89.1, 136641.0], [89.2, 136641.0], [89.3, 136641.0], [89.4, 136641.0], [89.5, 136641.0], [89.6, 136641.0], [89.7, 136641.0], [89.8, 136641.0], [89.9, 136641.0], [90.0, 136641.0], [90.1, 136641.0], [90.2, 136641.0], [90.3, 136641.0], [90.4, 136641.0], [90.5, 136641.0], [90.6, 136641.0], [90.7, 136641.0], [90.8, 136641.0], [90.9, 136641.0], [91.0, 136642.0], [91.1, 136642.0], [91.2, 136642.0], [91.3, 136642.0], [91.4, 136642.0], [91.5, 136642.0], [91.6, 136642.0], [91.7, 136642.0], [91.8, 136642.0], [91.9, 136642.0], [92.0, 136642.0], [92.1, 136642.0], [92.2, 136642.0], [92.3, 136642.0], [92.4, 136642.0], [92.5, 136642.0], [92.6, 136642.0], [92.7, 136642.0], [92.8, 136642.0], [92.9, 136642.0], [93.0, 136642.0], [93.1, 136642.0], [93.2, 136642.0], [93.3, 136642.0], [93.4, 136642.0], [93.5, 136642.0], [93.6, 136642.0], [93.7, 136642.0], [93.8, 136642.0], [93.9, 136642.0], [94.0, 136643.0], [94.1, 136643.0], [94.2, 136643.0], [94.3, 136643.0], [94.4, 136643.0], [94.5, 136643.0], [94.6, 136643.0], [94.7, 136643.0], [94.8, 136643.0], [94.9, 136643.0], [95.0, 136643.0], [95.1, 136643.0], [95.2, 136643.0], [95.3, 136643.0], [95.4, 136643.0], [95.5, 136643.0], [95.6, 136643.0], [95.7, 136643.0], [95.8, 136643.0], [95.9, 136643.0], [96.0, 136643.0], [96.1, 136643.0], [96.2, 136643.0], [96.3, 136643.0], [96.4, 136643.0], [96.5, 136643.0], [96.6, 136643.0], [96.7, 136643.0], [96.8, 136643.0], [96.9, 136643.0], [97.0, 136644.0], [97.1, 136644.0], [97.2, 136644.0], [97.3, 136644.0], [97.4, 136644.0], [97.5, 136644.0], [97.6, 136644.0], [97.7, 136644.0], [97.8, 136644.0], [97.9, 136644.0], [98.0, 136644.0], [98.1, 136644.0], [98.2, 136644.0], [98.3, 136644.0], [98.4, 136644.0], [98.5, 136644.0], [98.6, 136644.0], [98.7, 136644.0], [98.8, 136644.0], [98.9, 136644.0], [99.0, 136644.0], [99.1, 136644.0], [99.2, 136644.0], [99.3, 136644.0], [99.4, 136644.0], [99.5, 136644.0], [99.6, 136644.0], [99.7, 136644.0], [99.8, 136644.0], [99.9, 136644.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 135700.0, "maxY": 17.0, "series": [{"data": [[136600.0, 17.0], [135800.0, 10.0], [136400.0, 10.0], [136200.0, 10.0], [136000.0, 10.0], [136500.0, 10.0], [135900.0, 10.0], [136100.0, 10.0], [135700.0, 3.0], [136300.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 55.059999999999974, "minX": 1.75090794E12, "maxY": 55.059999999999974, "series": [{"data": [[1.75090794E12, 55.059999999999974]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75090794E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135785.0, "minX": 2.0, "maxY": 136643.0, "series": [{"data": [[2.0, 136193.0], [3.0, 136426.0], [4.0, 135883.0], [9.0, 136124.5], [11.0, 136384.0], [12.0, 136259.66666666666], [14.0, 136223.0], [15.0, 135892.0], [17.0, 136543.0], [18.0, 136333.0], [19.0, 135984.0], [22.0, 136379.66666666666], [24.0, 136003.0], [25.0, 136633.0], [27.0, 136274.0], [30.0, 136323.0], [31.0, 136554.0], [33.0, 136029.5], [35.0, 136641.0], [34.0, 135925.0], [37.0, 136055.0], [36.0, 136484.0], [39.0, 136352.5], [40.0, 136642.0], [43.0, 136444.5], [45.0, 136075.0], [46.0, 136239.5], [47.0, 136475.0], [48.0, 136363.5], [50.0, 136269.5], [52.0, 136319.0], [55.0, 136305.0], [54.0, 136504.0], [58.0, 136123.66666666666], [60.0, 136295.0], [63.0, 135870.5], [62.0, 136029.5], [67.0, 136245.0], [66.0, 135785.0], [64.0, 135856.0], [71.0, 136216.0], [70.0, 136195.5], [68.0, 135941.0], [75.0, 136515.5], [72.0, 135996.0], [79.0, 136643.0], [78.0, 136544.0], [77.0, 136410.5], [83.0, 135984.0], [82.0, 136344.0], [88.0, 136349.0], [95.0, 135956.0], [92.0, 135863.0], [97.0, 136643.0], [100.0, 136341.26666666666]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[55.059999999999974, 136261.50999999998]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75090794E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75090794E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75090794E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75090794E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 136261.50999999998, "minX": 1.75090794E12, "maxY": 136261.50999999998, "series": [{"data": [[1.75090794E12, 136261.50999999998]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75090794E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75090794E12, "maxY": 4.9E-324, "series": [{"data": [[1.75090794E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75090794E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 136261.43999999992, "minX": 1.75090794E12, "maxY": 136261.43999999992, "series": [{"data": [[1.75090794E12, 136261.43999999992]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75090794E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 136270.0, "minX": 100.0, "maxY": 136270.0, "series": [{"data": [[100.0, 136270.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75090776E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75090776E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75090776E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75090794E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75090794E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75090794E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75090794E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75090794E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75090794E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75090794E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75090794E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75090794E12, "title": "Total Transactions Per Second"}},
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

