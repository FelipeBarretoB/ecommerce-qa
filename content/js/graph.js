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
        data: {"result": {"minY": 132712.0, "minX": 0.0, "maxY": 133603.0, "series": [{"data": [[0.0, 132712.0], [0.1, 132712.0], [0.2, 132712.0], [0.3, 132712.0], [0.4, 132712.0], [0.5, 132712.0], [0.6, 132712.0], [0.7, 132712.0], [0.8, 132712.0], [0.9, 132712.0], [1.0, 132723.0], [1.1, 132723.0], [1.2, 132723.0], [1.3, 132723.0], [1.4, 132723.0], [1.5, 132723.0], [1.6, 132723.0], [1.7, 132723.0], [1.8, 132723.0], [1.9, 132723.0], [2.0, 132732.0], [2.1, 132732.0], [2.2, 132732.0], [2.3, 132732.0], [2.4, 132732.0], [2.5, 132732.0], [2.6, 132732.0], [2.7, 132732.0], [2.8, 132732.0], [2.9, 132732.0], [3.0, 132750.0], [3.1, 132750.0], [3.2, 132750.0], [3.3, 132750.0], [3.4, 132750.0], [3.5, 132750.0], [3.6, 132750.0], [3.7, 132750.0], [3.8, 132750.0], [3.9, 132750.0], [4.0, 132754.0], [4.1, 132754.0], [4.2, 132754.0], [4.3, 132754.0], [4.4, 132754.0], [4.5, 132754.0], [4.6, 132754.0], [4.7, 132754.0], [4.8, 132754.0], [4.9, 132754.0], [5.0, 132763.0], [5.1, 132763.0], [5.2, 132763.0], [5.3, 132763.0], [5.4, 132763.0], [5.5, 132763.0], [5.6, 132763.0], [5.7, 132763.0], [5.8, 132763.0], [5.9, 132763.0], [6.0, 132782.0], [6.1, 132782.0], [6.2, 132782.0], [6.3, 132782.0], [6.4, 132782.0], [6.5, 132782.0], [6.6, 132782.0], [6.7, 132782.0], [6.8, 132782.0], [6.9, 132782.0], [7.0, 132786.0], [7.1, 132786.0], [7.2, 132786.0], [7.3, 132786.0], [7.4, 132786.0], [7.5, 132786.0], [7.6, 132786.0], [7.7, 132786.0], [7.8, 132786.0], [7.9, 132786.0], [8.0, 132793.0], [8.1, 132793.0], [8.2, 132793.0], [8.3, 132793.0], [8.4, 132793.0], [8.5, 132793.0], [8.6, 132793.0], [8.7, 132793.0], [8.8, 132793.0], [8.9, 132793.0], [9.0, 132793.0], [9.1, 132793.0], [9.2, 132793.0], [9.3, 132793.0], [9.4, 132793.0], [9.5, 132793.0], [9.6, 132793.0], [9.7, 132793.0], [9.8, 132793.0], [9.9, 132793.0], [10.0, 132802.0], [10.1, 132802.0], [10.2, 132802.0], [10.3, 132802.0], [10.4, 132802.0], [10.5, 132802.0], [10.6, 132802.0], [10.7, 132802.0], [10.8, 132802.0], [10.9, 132802.0], [11.0, 132806.0], [11.1, 132806.0], [11.2, 132806.0], [11.3, 132806.0], [11.4, 132806.0], [11.5, 132806.0], [11.6, 132806.0], [11.7, 132806.0], [11.8, 132806.0], [11.9, 132806.0], [12.0, 132823.0], [12.1, 132823.0], [12.2, 132823.0], [12.3, 132823.0], [12.4, 132823.0], [12.5, 132823.0], [12.6, 132823.0], [12.7, 132823.0], [12.8, 132823.0], [12.9, 132823.0], [13.0, 132827.0], [13.1, 132827.0], [13.2, 132827.0], [13.3, 132827.0], [13.4, 132827.0], [13.5, 132827.0], [13.6, 132827.0], [13.7, 132827.0], [13.8, 132827.0], [13.9, 132827.0], [14.0, 132832.0], [14.1, 132832.0], [14.2, 132832.0], [14.3, 132832.0], [14.4, 132832.0], [14.5, 132832.0], [14.6, 132832.0], [14.7, 132832.0], [14.8, 132832.0], [14.9, 132832.0], [15.0, 132861.0], [15.1, 132861.0], [15.2, 132861.0], [15.3, 132861.0], [15.4, 132861.0], [15.5, 132861.0], [15.6, 132861.0], [15.7, 132861.0], [15.8, 132861.0], [15.9, 132861.0], [16.0, 132872.0], [16.1, 132872.0], [16.2, 132872.0], [16.3, 132872.0], [16.4, 132872.0], [16.5, 132872.0], [16.6, 132872.0], [16.7, 132872.0], [16.8, 132872.0], [16.9, 132872.0], [17.0, 132877.0], [17.1, 132877.0], [17.2, 132877.0], [17.3, 132877.0], [17.4, 132877.0], [17.5, 132877.0], [17.6, 132877.0], [17.7, 132877.0], [17.8, 132877.0], [17.9, 132877.0], [18.0, 132881.0], [18.1, 132881.0], [18.2, 132881.0], [18.3, 132881.0], [18.4, 132881.0], [18.5, 132881.0], [18.6, 132881.0], [18.7, 132881.0], [18.8, 132881.0], [18.9, 132881.0], [19.0, 132883.0], [19.1, 132883.0], [19.2, 132883.0], [19.3, 132883.0], [19.4, 132883.0], [19.5, 132883.0], [19.6, 132883.0], [19.7, 132883.0], [19.8, 132883.0], [19.9, 132883.0], [20.0, 132907.0], [20.1, 132907.0], [20.2, 132907.0], [20.3, 132907.0], [20.4, 132907.0], [20.5, 132907.0], [20.6, 132907.0], [20.7, 132907.0], [20.8, 132907.0], [20.9, 132907.0], [21.0, 132922.0], [21.1, 132922.0], [21.2, 132922.0], [21.3, 132922.0], [21.4, 132922.0], [21.5, 132922.0], [21.6, 132922.0], [21.7, 132922.0], [21.8, 132922.0], [21.9, 132922.0], [22.0, 132929.0], [22.1, 132929.0], [22.2, 132929.0], [22.3, 132929.0], [22.4, 132929.0], [22.5, 132929.0], [22.6, 132929.0], [22.7, 132929.0], [22.8, 132929.0], [22.9, 132929.0], [23.0, 132932.0], [23.1, 132932.0], [23.2, 132932.0], [23.3, 132932.0], [23.4, 132932.0], [23.5, 132932.0], [23.6, 132932.0], [23.7, 132932.0], [23.8, 132932.0], [23.9, 132932.0], [24.0, 132934.0], [24.1, 132934.0], [24.2, 132934.0], [24.3, 132934.0], [24.4, 132934.0], [24.5, 132934.0], [24.6, 132934.0], [24.7, 132934.0], [24.8, 132934.0], [24.9, 132934.0], [25.0, 132955.0], [25.1, 132955.0], [25.2, 132955.0], [25.3, 132955.0], [25.4, 132955.0], [25.5, 132955.0], [25.6, 132955.0], [25.7, 132955.0], [25.8, 132955.0], [25.9, 132955.0], [26.0, 132962.0], [26.1, 132962.0], [26.2, 132962.0], [26.3, 132962.0], [26.4, 132962.0], [26.5, 132962.0], [26.6, 132962.0], [26.7, 132962.0], [26.8, 132962.0], [26.9, 132962.0], [27.0, 132963.0], [27.1, 132963.0], [27.2, 132963.0], [27.3, 132963.0], [27.4, 132963.0], [27.5, 132963.0], [27.6, 132963.0], [27.7, 132963.0], [27.8, 132963.0], [27.9, 132963.0], [28.0, 132985.0], [28.1, 132985.0], [28.2, 132985.0], [28.3, 132985.0], [28.4, 132985.0], [28.5, 132985.0], [28.6, 132985.0], [28.7, 132985.0], [28.8, 132985.0], [28.9, 132985.0], [29.0, 133003.0], [29.1, 133003.0], [29.2, 133003.0], [29.3, 133003.0], [29.4, 133003.0], [29.5, 133003.0], [29.6, 133003.0], [29.7, 133003.0], [29.8, 133003.0], [29.9, 133003.0], [30.0, 133011.0], [30.1, 133011.0], [30.2, 133011.0], [30.3, 133011.0], [30.4, 133011.0], [30.5, 133011.0], [30.6, 133011.0], [30.7, 133011.0], [30.8, 133011.0], [30.9, 133011.0], [31.0, 133013.0], [31.1, 133013.0], [31.2, 133013.0], [31.3, 133013.0], [31.4, 133013.0], [31.5, 133013.0], [31.6, 133013.0], [31.7, 133013.0], [31.8, 133013.0], [31.9, 133013.0], [32.0, 133033.0], [32.1, 133033.0], [32.2, 133033.0], [32.3, 133033.0], [32.4, 133033.0], [32.5, 133033.0], [32.6, 133033.0], [32.7, 133033.0], [32.8, 133033.0], [32.9, 133033.0], [33.0, 133050.0], [33.1, 133050.0], [33.2, 133050.0], [33.3, 133050.0], [33.4, 133050.0], [33.5, 133050.0], [33.6, 133050.0], [33.7, 133050.0], [33.8, 133050.0], [33.9, 133050.0], [34.0, 133053.0], [34.1, 133053.0], [34.2, 133053.0], [34.3, 133053.0], [34.4, 133053.0], [34.5, 133053.0], [34.6, 133053.0], [34.7, 133053.0], [34.8, 133053.0], [34.9, 133053.0], [35.0, 133053.0], [35.1, 133053.0], [35.2, 133053.0], [35.3, 133053.0], [35.4, 133053.0], [35.5, 133053.0], [35.6, 133053.0], [35.7, 133053.0], [35.8, 133053.0], [35.9, 133053.0], [36.0, 133056.0], [36.1, 133056.0], [36.2, 133056.0], [36.3, 133056.0], [36.4, 133056.0], [36.5, 133056.0], [36.6, 133056.0], [36.7, 133056.0], [36.8, 133056.0], [36.9, 133056.0], [37.0, 133079.0], [37.1, 133079.0], [37.2, 133079.0], [37.3, 133079.0], [37.4, 133079.0], [37.5, 133079.0], [37.6, 133079.0], [37.7, 133079.0], [37.8, 133079.0], [37.9, 133079.0], [38.0, 133087.0], [38.1, 133087.0], [38.2, 133087.0], [38.3, 133087.0], [38.4, 133087.0], [38.5, 133087.0], [38.6, 133087.0], [38.7, 133087.0], [38.8, 133087.0], [38.9, 133087.0], [39.0, 133113.0], [39.1, 133113.0], [39.2, 133113.0], [39.3, 133113.0], [39.4, 133113.0], [39.5, 133113.0], [39.6, 133113.0], [39.7, 133113.0], [39.8, 133113.0], [39.9, 133113.0], [40.0, 133115.0], [40.1, 133115.0], [40.2, 133115.0], [40.3, 133115.0], [40.4, 133115.0], [40.5, 133115.0], [40.6, 133115.0], [40.7, 133115.0], [40.8, 133115.0], [40.9, 133115.0], [41.0, 133123.0], [41.1, 133123.0], [41.2, 133123.0], [41.3, 133123.0], [41.4, 133123.0], [41.5, 133123.0], [41.6, 133123.0], [41.7, 133123.0], [41.8, 133123.0], [41.9, 133123.0], [42.0, 133130.0], [42.1, 133130.0], [42.2, 133130.0], [42.3, 133130.0], [42.4, 133130.0], [42.5, 133130.0], [42.6, 133130.0], [42.7, 133130.0], [42.8, 133130.0], [42.9, 133130.0], [43.0, 133151.0], [43.1, 133151.0], [43.2, 133151.0], [43.3, 133151.0], [43.4, 133151.0], [43.5, 133151.0], [43.6, 133151.0], [43.7, 133151.0], [43.8, 133151.0], [43.9, 133151.0], [44.0, 133165.0], [44.1, 133165.0], [44.2, 133165.0], [44.3, 133165.0], [44.4, 133165.0], [44.5, 133165.0], [44.6, 133165.0], [44.7, 133165.0], [44.8, 133165.0], [44.9, 133165.0], [45.0, 133167.0], [45.1, 133167.0], [45.2, 133167.0], [45.3, 133167.0], [45.4, 133167.0], [45.5, 133167.0], [45.6, 133167.0], [45.7, 133167.0], [45.8, 133167.0], [45.9, 133167.0], [46.0, 133172.0], [46.1, 133172.0], [46.2, 133172.0], [46.3, 133172.0], [46.4, 133172.0], [46.5, 133172.0], [46.6, 133172.0], [46.7, 133172.0], [46.8, 133172.0], [46.9, 133172.0], [47.0, 133183.0], [47.1, 133183.0], [47.2, 133183.0], [47.3, 133183.0], [47.4, 133183.0], [47.5, 133183.0], [47.6, 133183.0], [47.7, 133183.0], [47.8, 133183.0], [47.9, 133183.0], [48.0, 133186.0], [48.1, 133186.0], [48.2, 133186.0], [48.3, 133186.0], [48.4, 133186.0], [48.5, 133186.0], [48.6, 133186.0], [48.7, 133186.0], [48.8, 133186.0], [48.9, 133186.0], [49.0, 133199.0], [49.1, 133199.0], [49.2, 133199.0], [49.3, 133199.0], [49.4, 133199.0], [49.5, 133199.0], [49.6, 133199.0], [49.7, 133199.0], [49.8, 133199.0], [49.9, 133199.0], [50.0, 133201.0], [50.1, 133201.0], [50.2, 133201.0], [50.3, 133201.0], [50.4, 133201.0], [50.5, 133201.0], [50.6, 133201.0], [50.7, 133201.0], [50.8, 133201.0], [50.9, 133201.0], [51.0, 133216.0], [51.1, 133216.0], [51.2, 133216.0], [51.3, 133216.0], [51.4, 133216.0], [51.5, 133216.0], [51.6, 133216.0], [51.7, 133216.0], [51.8, 133216.0], [51.9, 133216.0], [52.0, 133232.0], [52.1, 133232.0], [52.2, 133232.0], [52.3, 133232.0], [52.4, 133232.0], [52.5, 133232.0], [52.6, 133232.0], [52.7, 133232.0], [52.8, 133232.0], [52.9, 133232.0], [53.0, 133241.0], [53.1, 133241.0], [53.2, 133241.0], [53.3, 133241.0], [53.4, 133241.0], [53.5, 133241.0], [53.6, 133241.0], [53.7, 133241.0], [53.8, 133241.0], [53.9, 133241.0], [54.0, 133259.0], [54.1, 133259.0], [54.2, 133259.0], [54.3, 133259.0], [54.4, 133259.0], [54.5, 133259.0], [54.6, 133259.0], [54.7, 133259.0], [54.8, 133259.0], [54.9, 133259.0], [55.0, 133267.0], [55.1, 133267.0], [55.2, 133267.0], [55.3, 133267.0], [55.4, 133267.0], [55.5, 133267.0], [55.6, 133267.0], [55.7, 133267.0], [55.8, 133267.0], [55.9, 133267.0], [56.0, 133275.0], [56.1, 133275.0], [56.2, 133275.0], [56.3, 133275.0], [56.4, 133275.0], [56.5, 133275.0], [56.6, 133275.0], [56.7, 133275.0], [56.8, 133275.0], [56.9, 133275.0], [57.0, 133276.0], [57.1, 133276.0], [57.2, 133276.0], [57.3, 133276.0], [57.4, 133276.0], [57.5, 133276.0], [57.6, 133276.0], [57.7, 133276.0], [57.8, 133276.0], [57.9, 133276.0], [58.0, 133290.0], [58.1, 133290.0], [58.2, 133290.0], [58.3, 133290.0], [58.4, 133290.0], [58.5, 133290.0], [58.6, 133290.0], [58.7, 133290.0], [58.8, 133290.0], [58.9, 133290.0], [59.0, 133305.0], [59.1, 133305.0], [59.2, 133305.0], [59.3, 133305.0], [59.4, 133305.0], [59.5, 133305.0], [59.6, 133305.0], [59.7, 133305.0], [59.8, 133305.0], [59.9, 133305.0], [60.0, 133317.0], [60.1, 133317.0], [60.2, 133317.0], [60.3, 133317.0], [60.4, 133317.0], [60.5, 133317.0], [60.6, 133317.0], [60.7, 133317.0], [60.8, 133317.0], [60.9, 133317.0], [61.0, 133320.0], [61.1, 133320.0], [61.2, 133320.0], [61.3, 133320.0], [61.4, 133320.0], [61.5, 133320.0], [61.6, 133320.0], [61.7, 133320.0], [61.8, 133320.0], [61.9, 133320.0], [62.0, 133322.0], [62.1, 133322.0], [62.2, 133322.0], [62.3, 133322.0], [62.4, 133322.0], [62.5, 133322.0], [62.6, 133322.0], [62.7, 133322.0], [62.8, 133322.0], [62.9, 133322.0], [63.0, 133329.0], [63.1, 133329.0], [63.2, 133329.0], [63.3, 133329.0], [63.4, 133329.0], [63.5, 133329.0], [63.6, 133329.0], [63.7, 133329.0], [63.8, 133329.0], [63.9, 133329.0], [64.0, 133352.0], [64.1, 133352.0], [64.2, 133352.0], [64.3, 133352.0], [64.4, 133352.0], [64.5, 133352.0], [64.6, 133352.0], [64.7, 133352.0], [64.8, 133352.0], [64.9, 133352.0], [65.0, 133352.0], [65.1, 133352.0], [65.2, 133352.0], [65.3, 133352.0], [65.4, 133352.0], [65.5, 133352.0], [65.6, 133352.0], [65.7, 133352.0], [65.8, 133352.0], [65.9, 133352.0], [66.0, 133352.0], [66.1, 133352.0], [66.2, 133352.0], [66.3, 133352.0], [66.4, 133352.0], [66.5, 133352.0], [66.6, 133352.0], [66.7, 133352.0], [66.8, 133352.0], [66.9, 133352.0], [67.0, 133371.0], [67.1, 133371.0], [67.2, 133371.0], [67.3, 133371.0], [67.4, 133371.0], [67.5, 133371.0], [67.6, 133371.0], [67.7, 133371.0], [67.8, 133371.0], [67.9, 133371.0], [68.0, 133382.0], [68.1, 133382.0], [68.2, 133382.0], [68.3, 133382.0], [68.4, 133382.0], [68.5, 133382.0], [68.6, 133382.0], [68.7, 133382.0], [68.8, 133382.0], [68.9, 133382.0], [69.0, 133389.0], [69.1, 133389.0], [69.2, 133389.0], [69.3, 133389.0], [69.4, 133389.0], [69.5, 133389.0], [69.6, 133389.0], [69.7, 133389.0], [69.8, 133389.0], [69.9, 133389.0], [70.0, 133411.0], [70.1, 133411.0], [70.2, 133411.0], [70.3, 133411.0], [70.4, 133411.0], [70.5, 133411.0], [70.6, 133411.0], [70.7, 133411.0], [70.8, 133411.0], [70.9, 133411.0], [71.0, 133412.0], [71.1, 133412.0], [71.2, 133412.0], [71.3, 133412.0], [71.4, 133412.0], [71.5, 133412.0], [71.6, 133412.0], [71.7, 133412.0], [71.8, 133412.0], [71.9, 133412.0], [72.0, 133413.0], [72.1, 133413.0], [72.2, 133413.0], [72.3, 133413.0], [72.4, 133413.0], [72.5, 133413.0], [72.6, 133413.0], [72.7, 133413.0], [72.8, 133413.0], [72.9, 133413.0], [73.0, 133432.0], [73.1, 133432.0], [73.2, 133432.0], [73.3, 133432.0], [73.4, 133432.0], [73.5, 133432.0], [73.6, 133432.0], [73.7, 133432.0], [73.8, 133432.0], [73.9, 133432.0], [74.0, 133442.0], [74.1, 133442.0], [74.2, 133442.0], [74.3, 133442.0], [74.4, 133442.0], [74.5, 133442.0], [74.6, 133442.0], [74.7, 133442.0], [74.8, 133442.0], [74.9, 133442.0], [75.0, 133442.0], [75.1, 133442.0], [75.2, 133442.0], [75.3, 133442.0], [75.4, 133442.0], [75.5, 133442.0], [75.6, 133442.0], [75.7, 133442.0], [75.8, 133442.0], [75.9, 133442.0], [76.0, 133460.0], [76.1, 133460.0], [76.2, 133460.0], [76.3, 133460.0], [76.4, 133460.0], [76.5, 133460.0], [76.6, 133460.0], [76.7, 133460.0], [76.8, 133460.0], [76.9, 133460.0], [77.0, 133462.0], [77.1, 133462.0], [77.2, 133462.0], [77.3, 133462.0], [77.4, 133462.0], [77.5, 133462.0], [77.6, 133462.0], [77.7, 133462.0], [77.8, 133462.0], [77.9, 133462.0], [78.0, 133478.0], [78.1, 133478.0], [78.2, 133478.0], [78.3, 133478.0], [78.4, 133478.0], [78.5, 133478.0], [78.6, 133478.0], [78.7, 133478.0], [78.8, 133478.0], [78.9, 133478.0], [79.0, 133495.0], [79.1, 133495.0], [79.2, 133495.0], [79.3, 133495.0], [79.4, 133495.0], [79.5, 133495.0], [79.6, 133495.0], [79.7, 133495.0], [79.8, 133495.0], [79.9, 133495.0], [80.0, 133510.0], [80.1, 133510.0], [80.2, 133510.0], [80.3, 133510.0], [80.4, 133510.0], [80.5, 133510.0], [80.6, 133510.0], [80.7, 133510.0], [80.8, 133510.0], [80.9, 133510.0], [81.0, 133516.0], [81.1, 133516.0], [81.2, 133516.0], [81.3, 133516.0], [81.4, 133516.0], [81.5, 133516.0], [81.6, 133516.0], [81.7, 133516.0], [81.8, 133516.0], [81.9, 133516.0], [82.0, 133518.0], [82.1, 133518.0], [82.2, 133518.0], [82.3, 133518.0], [82.4, 133518.0], [82.5, 133518.0], [82.6, 133518.0], [82.7, 133518.0], [82.8, 133518.0], [82.9, 133518.0], [83.0, 133521.0], [83.1, 133521.0], [83.2, 133521.0], [83.3, 133521.0], [83.4, 133521.0], [83.5, 133521.0], [83.6, 133521.0], [83.7, 133521.0], [83.8, 133521.0], [83.9, 133521.0], [84.0, 133551.0], [84.1, 133551.0], [84.2, 133551.0], [84.3, 133551.0], [84.4, 133551.0], [84.5, 133551.0], [84.6, 133551.0], [84.7, 133551.0], [84.8, 133551.0], [84.9, 133551.0], [85.0, 133566.0], [85.1, 133566.0], [85.2, 133566.0], [85.3, 133566.0], [85.4, 133566.0], [85.5, 133566.0], [85.6, 133566.0], [85.7, 133566.0], [85.8, 133566.0], [85.9, 133566.0], [86.0, 133567.0], [86.1, 133567.0], [86.2, 133567.0], [86.3, 133567.0], [86.4, 133567.0], [86.5, 133567.0], [86.6, 133567.0], [86.7, 133567.0], [86.8, 133567.0], [86.9, 133567.0], [87.0, 133569.0], [87.1, 133569.0], [87.2, 133569.0], [87.3, 133569.0], [87.4, 133569.0], [87.5, 133569.0], [87.6, 133569.0], [87.7, 133569.0], [87.8, 133569.0], [87.9, 133569.0], [88.0, 133571.0], [88.1, 133571.0], [88.2, 133571.0], [88.3, 133571.0], [88.4, 133571.0], [88.5, 133571.0], [88.6, 133571.0], [88.7, 133571.0], [88.8, 133571.0], [88.9, 133571.0], [89.0, 133582.0], [89.1, 133582.0], [89.2, 133582.0], [89.3, 133582.0], [89.4, 133582.0], [89.5, 133582.0], [89.6, 133582.0], [89.7, 133582.0], [89.8, 133582.0], [89.9, 133582.0], [90.0, 133584.0], [90.1, 133584.0], [90.2, 133584.0], [90.3, 133584.0], [90.4, 133584.0], [90.5, 133584.0], [90.6, 133584.0], [90.7, 133584.0], [90.8, 133584.0], [90.9, 133584.0], [91.0, 133588.0], [91.1, 133588.0], [91.2, 133588.0], [91.3, 133588.0], [91.4, 133588.0], [91.5, 133588.0], [91.6, 133588.0], [91.7, 133588.0], [91.8, 133588.0], [91.9, 133588.0], [92.0, 133589.0], [92.1, 133589.0], [92.2, 133589.0], [92.3, 133589.0], [92.4, 133589.0], [92.5, 133589.0], [92.6, 133589.0], [92.7, 133589.0], [92.8, 133589.0], [92.9, 133589.0], [93.0, 133590.0], [93.1, 133590.0], [93.2, 133590.0], [93.3, 133590.0], [93.4, 133590.0], [93.5, 133590.0], [93.6, 133590.0], [93.7, 133590.0], [93.8, 133590.0], [93.9, 133590.0], [94.0, 133590.0], [94.1, 133590.0], [94.2, 133590.0], [94.3, 133590.0], [94.4, 133590.0], [94.5, 133590.0], [94.6, 133590.0], [94.7, 133590.0], [94.8, 133590.0], [94.9, 133590.0], [95.0, 133594.0], [95.1, 133594.0], [95.2, 133594.0], [95.3, 133594.0], [95.4, 133594.0], [95.5, 133594.0], [95.6, 133594.0], [95.7, 133594.0], [95.8, 133594.0], [95.9, 133594.0], [96.0, 133595.0], [96.1, 133595.0], [96.2, 133595.0], [96.3, 133595.0], [96.4, 133595.0], [96.5, 133595.0], [96.6, 133595.0], [96.7, 133595.0], [96.8, 133595.0], [96.9, 133595.0], [97.0, 133600.0], [97.1, 133600.0], [97.2, 133600.0], [97.3, 133600.0], [97.4, 133600.0], [97.5, 133600.0], [97.6, 133600.0], [97.7, 133600.0], [97.8, 133600.0], [97.9, 133600.0], [98.0, 133600.0], [98.1, 133600.0], [98.2, 133600.0], [98.3, 133600.0], [98.4, 133600.0], [98.5, 133600.0], [98.6, 133600.0], [98.7, 133600.0], [98.8, 133600.0], [98.9, 133600.0], [99.0, 133603.0], [99.1, 133603.0], [99.2, 133603.0], [99.3, 133603.0], [99.4, 133603.0], [99.5, 133603.0], [99.6, 133603.0], [99.7, 133603.0], [99.8, 133603.0], [99.9, 133603.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 132700.0, "maxY": 17.0, "series": [{"data": [[133400.0, 10.0], [132800.0, 10.0], [133000.0, 10.0], [133200.0, 9.0], [133600.0, 3.0], [133500.0, 17.0], [132900.0, 9.0], [132700.0, 10.0], [133100.0, 11.0], [133300.0, 11.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 133600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 61.03000000000001, "minX": 1.75825086E12, "maxY": 61.03000000000001, "series": [{"data": [[1.75825086E12, 61.03000000000001]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75825086E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132723.0, "minX": 3.0, "maxY": 133595.0, "series": [{"data": [[32.0, 133200.0], [35.0, 132723.0], [34.0, 132848.5], [36.0, 132793.0], [38.0, 133113.0], [41.0, 132732.0], [40.0, 133417.66666666666], [43.0, 133016.0], [46.0, 133259.0], [3.0, 133031.0], [51.0, 133595.0], [53.0, 133518.0], [54.0, 133216.0], [55.0, 133267.0], [57.0, 133386.33333333334], [60.0, 133165.0], [62.0, 133305.0], [67.0, 133590.0], [65.0, 133115.0], [4.0, 133462.0], [71.0, 133090.0], [69.0, 133242.4166666667], [68.0, 133589.5], [75.0, 133199.0], [73.0, 133354.5], [79.0, 133320.0], [77.0, 132867.0], [76.0, 133079.0], [82.0, 133334.5], [81.0, 132985.0], [5.0, 132802.0], [84.0, 133225.0], [91.0, 133348.33333333334], [90.0, 133013.0], [89.0, 133188.0], [88.0, 133275.0], [93.0, 133191.0], [98.0, 133478.0], [97.0, 132929.0], [96.0, 133196.33333333334], [6.0, 132872.0], [100.0, 133190.49999999997], [7.0, 133172.0], [10.0, 133324.66666666666], [14.0, 133029.33333333334], [26.0, 133222.0], [28.0, 133185.33333333334], [31.0, 132970.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[61.03000000000001, 133195.82]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75825086E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75825086E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75825086E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75825086E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133195.82, "minX": 1.75825086E12, "maxY": 133195.82, "series": [{"data": [[1.75825086E12, 133195.82]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75825086E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75825086E12, "maxY": 4.9E-324, "series": [{"data": [[1.75825086E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75825086E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 133178.82999999993, "minX": 1.75825086E12, "maxY": 133178.82999999993, "series": [{"data": [[1.75825086E12, 133178.82999999993]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75825086E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 133200.0, "minX": 100.0, "maxY": 133200.0, "series": [{"data": [[100.0, 133200.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75825074E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75825074E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75825074E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75825086E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75825086E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75825086E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75825086E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75825086E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75825086E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75825086E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75825086E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75825086E12, "title": "Total Transactions Per Second"}},
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

