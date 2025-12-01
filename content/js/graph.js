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
        data: {"result": {"minY": 132411.0, "minX": 0.0, "maxY": 136485.0, "series": [{"data": [[0.0, 132411.0], [0.1, 132411.0], [0.2, 132411.0], [0.3, 132411.0], [0.4, 132411.0], [0.5, 132411.0], [0.6, 132411.0], [0.7, 132411.0], [0.8, 132411.0], [0.9, 132411.0], [1.0, 132412.0], [1.1, 132412.0], [1.2, 132412.0], [1.3, 132412.0], [1.4, 132412.0], [1.5, 132412.0], [1.6, 132412.0], [1.7, 132412.0], [1.8, 132412.0], [1.9, 132412.0], [2.0, 132421.0], [2.1, 132421.0], [2.2, 132421.0], [2.3, 132421.0], [2.4, 132421.0], [2.5, 132421.0], [2.6, 132421.0], [2.7, 132421.0], [2.8, 132421.0], [2.9, 132421.0], [3.0, 132442.0], [3.1, 132442.0], [3.2, 132442.0], [3.3, 132442.0], [3.4, 132442.0], [3.5, 132442.0], [3.6, 132442.0], [3.7, 132442.0], [3.8, 132442.0], [3.9, 132442.0], [4.0, 132442.0], [4.1, 132442.0], [4.2, 132442.0], [4.3, 132442.0], [4.4, 132442.0], [4.5, 132442.0], [4.6, 132442.0], [4.7, 132442.0], [4.8, 132442.0], [4.9, 132442.0], [5.0, 132460.0], [5.1, 132460.0], [5.2, 132460.0], [5.3, 132460.0], [5.4, 132460.0], [5.5, 132460.0], [5.6, 132460.0], [5.7, 132460.0], [5.8, 132460.0], [5.9, 132460.0], [6.0, 132461.0], [6.1, 132461.0], [6.2, 132461.0], [6.3, 132461.0], [6.4, 132461.0], [6.5, 132461.0], [6.6, 132461.0], [6.7, 132461.0], [6.8, 132461.0], [6.9, 132461.0], [7.0, 132470.0], [7.1, 132470.0], [7.2, 132470.0], [7.3, 132470.0], [7.4, 132470.0], [7.5, 132470.0], [7.6, 132470.0], [7.7, 132470.0], [7.8, 132470.0], [7.9, 132470.0], [8.0, 132486.0], [8.1, 132486.0], [8.2, 132486.0], [8.3, 132486.0], [8.4, 132486.0], [8.5, 132486.0], [8.6, 132486.0], [8.7, 132486.0], [8.8, 132486.0], [8.9, 132486.0], [9.0, 132498.0], [9.1, 132498.0], [9.2, 132498.0], [9.3, 132498.0], [9.4, 132498.0], [9.5, 132498.0], [9.6, 132498.0], [9.7, 132498.0], [9.8, 132498.0], [9.9, 132498.0], [10.0, 132512.0], [10.1, 132512.0], [10.2, 132512.0], [10.3, 132512.0], [10.4, 132512.0], [10.5, 132512.0], [10.6, 132512.0], [10.7, 132512.0], [10.8, 132512.0], [10.9, 132512.0], [11.0, 132513.0], [11.1, 132513.0], [11.2, 132513.0], [11.3, 132513.0], [11.4, 132513.0], [11.5, 132513.0], [11.6, 132513.0], [11.7, 132513.0], [11.8, 132513.0], [11.9, 132513.0], [12.0, 132521.0], [12.1, 132521.0], [12.2, 132521.0], [12.3, 132521.0], [12.4, 132521.0], [12.5, 132521.0], [12.6, 132521.0], [12.7, 132521.0], [12.8, 132521.0], [12.9, 132521.0], [13.0, 132532.0], [13.1, 132532.0], [13.2, 132532.0], [13.3, 132532.0], [13.4, 132532.0], [13.5, 132532.0], [13.6, 132532.0], [13.7, 132532.0], [13.8, 132532.0], [13.9, 132532.0], [14.0, 132542.0], [14.1, 132542.0], [14.2, 132542.0], [14.3, 132542.0], [14.4, 132542.0], [14.5, 132542.0], [14.6, 132542.0], [14.7, 132542.0], [14.8, 132542.0], [14.9, 132542.0], [15.0, 132551.0], [15.1, 132551.0], [15.2, 132551.0], [15.3, 132551.0], [15.4, 132551.0], [15.5, 132551.0], [15.6, 132551.0], [15.7, 132551.0], [15.8, 132551.0], [15.9, 132551.0], [16.0, 132561.0], [16.1, 132561.0], [16.2, 132561.0], [16.3, 132561.0], [16.4, 132561.0], [16.5, 132561.0], [16.6, 132561.0], [16.7, 132561.0], [16.8, 132561.0], [16.9, 132561.0], [17.0, 132573.0], [17.1, 132573.0], [17.2, 132573.0], [17.3, 132573.0], [17.4, 132573.0], [17.5, 132573.0], [17.6, 132573.0], [17.7, 132573.0], [17.8, 132573.0], [17.9, 132573.0], [18.0, 132590.0], [18.1, 132590.0], [18.2, 132590.0], [18.3, 132590.0], [18.4, 132590.0], [18.5, 132590.0], [18.6, 132590.0], [18.7, 132590.0], [18.8, 132590.0], [18.9, 132590.0], [19.0, 132592.0], [19.1, 132592.0], [19.2, 132592.0], [19.3, 132592.0], [19.4, 132592.0], [19.5, 132592.0], [19.6, 132592.0], [19.7, 132592.0], [19.8, 132592.0], [19.9, 132592.0], [20.0, 132602.0], [20.1, 132602.0], [20.2, 132602.0], [20.3, 132602.0], [20.4, 132602.0], [20.5, 132602.0], [20.6, 132602.0], [20.7, 132602.0], [20.8, 132602.0], [20.9, 132602.0], [21.0, 132611.0], [21.1, 132611.0], [21.2, 132611.0], [21.3, 132611.0], [21.4, 132611.0], [21.5, 132611.0], [21.6, 132611.0], [21.7, 132611.0], [21.8, 132611.0], [21.9, 132611.0], [22.0, 132620.0], [22.1, 132620.0], [22.2, 132620.0], [22.3, 132620.0], [22.4, 132620.0], [22.5, 132620.0], [22.6, 132620.0], [22.7, 132620.0], [22.8, 132620.0], [22.9, 132620.0], [23.0, 132632.0], [23.1, 132632.0], [23.2, 132632.0], [23.3, 132632.0], [23.4, 132632.0], [23.5, 132632.0], [23.6, 132632.0], [23.7, 132632.0], [23.8, 132632.0], [23.9, 132632.0], [24.0, 132642.0], [24.1, 132642.0], [24.2, 132642.0], [24.3, 132642.0], [24.4, 132642.0], [24.5, 132642.0], [24.6, 132642.0], [24.7, 132642.0], [24.8, 132642.0], [24.9, 132642.0], [25.0, 132652.0], [25.1, 132652.0], [25.2, 132652.0], [25.3, 132652.0], [25.4, 132652.0], [25.5, 132652.0], [25.6, 132652.0], [25.7, 132652.0], [25.8, 132652.0], [25.9, 132652.0], [26.0, 132662.0], [26.1, 132662.0], [26.2, 132662.0], [26.3, 132662.0], [26.4, 132662.0], [26.5, 132662.0], [26.6, 132662.0], [26.7, 132662.0], [26.8, 132662.0], [26.9, 132662.0], [27.0, 132681.0], [27.1, 132681.0], [27.2, 132681.0], [27.3, 132681.0], [27.4, 132681.0], [27.5, 132681.0], [27.6, 132681.0], [27.7, 132681.0], [27.8, 132681.0], [27.9, 132681.0], [28.0, 132683.0], [28.1, 132683.0], [28.2, 132683.0], [28.3, 132683.0], [28.4, 132683.0], [28.5, 132683.0], [28.6, 132683.0], [28.7, 132683.0], [28.8, 132683.0], [28.9, 132683.0], [29.0, 132690.0], [29.1, 132690.0], [29.2, 132690.0], [29.3, 132690.0], [29.4, 132690.0], [29.5, 132690.0], [29.6, 132690.0], [29.7, 132690.0], [29.8, 132690.0], [29.9, 132690.0], [30.0, 132700.0], [30.1, 132700.0], [30.2, 132700.0], [30.3, 132700.0], [30.4, 132700.0], [30.5, 132700.0], [30.6, 132700.0], [30.7, 132700.0], [30.8, 132700.0], [30.9, 132700.0], [31.0, 132711.0], [31.1, 132711.0], [31.2, 132711.0], [31.3, 132711.0], [31.4, 132711.0], [31.5, 132711.0], [31.6, 132711.0], [31.7, 132711.0], [31.8, 132711.0], [31.9, 132711.0], [32.0, 132727.0], [32.1, 132727.0], [32.2, 132727.0], [32.3, 132727.0], [32.4, 132727.0], [32.5, 132727.0], [32.6, 132727.0], [32.7, 132727.0], [32.8, 132727.0], [32.9, 132727.0], [33.0, 132743.0], [33.1, 132743.0], [33.2, 132743.0], [33.3, 132743.0], [33.4, 132743.0], [33.5, 132743.0], [33.6, 132743.0], [33.7, 132743.0], [33.8, 132743.0], [33.9, 132743.0], [34.0, 132747.0], [34.1, 132747.0], [34.2, 132747.0], [34.3, 132747.0], [34.4, 132747.0], [34.5, 132747.0], [34.6, 132747.0], [34.7, 132747.0], [34.8, 132747.0], [34.9, 132747.0], [35.0, 132753.0], [35.1, 132753.0], [35.2, 132753.0], [35.3, 132753.0], [35.4, 132753.0], [35.5, 132753.0], [35.6, 132753.0], [35.7, 132753.0], [35.8, 132753.0], [35.9, 132753.0], [36.0, 132758.0], [36.1, 132758.0], [36.2, 132758.0], [36.3, 132758.0], [36.4, 132758.0], [36.5, 132758.0], [36.6, 132758.0], [36.7, 132758.0], [36.8, 132758.0], [36.9, 132758.0], [37.0, 132781.0], [37.1, 132781.0], [37.2, 132781.0], [37.3, 132781.0], [37.4, 132781.0], [37.5, 132781.0], [37.6, 132781.0], [37.7, 132781.0], [37.8, 132781.0], [37.9, 132781.0], [38.0, 132782.0], [38.1, 132782.0], [38.2, 132782.0], [38.3, 132782.0], [38.4, 132782.0], [38.5, 132782.0], [38.6, 132782.0], [38.7, 132782.0], [38.8, 132782.0], [38.9, 132782.0], [39.0, 132794.0], [39.1, 132794.0], [39.2, 132794.0], [39.3, 132794.0], [39.4, 132794.0], [39.5, 132794.0], [39.6, 132794.0], [39.7, 132794.0], [39.8, 132794.0], [39.9, 132794.0], [40.0, 132801.0], [40.1, 132801.0], [40.2, 132801.0], [40.3, 132801.0], [40.4, 132801.0], [40.5, 132801.0], [40.6, 132801.0], [40.7, 132801.0], [40.8, 132801.0], [40.9, 132801.0], [41.0, 132811.0], [41.1, 132811.0], [41.2, 132811.0], [41.3, 132811.0], [41.4, 132811.0], [41.5, 132811.0], [41.6, 132811.0], [41.7, 132811.0], [41.8, 132811.0], [41.9, 132811.0], [42.0, 132820.0], [42.1, 132820.0], [42.2, 132820.0], [42.3, 132820.0], [42.4, 132820.0], [42.5, 132820.0], [42.6, 132820.0], [42.7, 132820.0], [42.8, 132820.0], [42.9, 132820.0], [43.0, 132832.0], [43.1, 132832.0], [43.2, 132832.0], [43.3, 132832.0], [43.4, 132832.0], [43.5, 132832.0], [43.6, 132832.0], [43.7, 132832.0], [43.8, 132832.0], [43.9, 132832.0], [44.0, 132841.0], [44.1, 132841.0], [44.2, 132841.0], [44.3, 132841.0], [44.4, 132841.0], [44.5, 132841.0], [44.6, 132841.0], [44.7, 132841.0], [44.8, 132841.0], [44.9, 132841.0], [45.0, 132850.0], [45.1, 132850.0], [45.2, 132850.0], [45.3, 132850.0], [45.4, 132850.0], [45.5, 132850.0], [45.6, 132850.0], [45.7, 132850.0], [45.8, 132850.0], [45.9, 132850.0], [46.0, 132861.0], [46.1, 132861.0], [46.2, 132861.0], [46.3, 132861.0], [46.4, 132861.0], [46.5, 132861.0], [46.6, 132861.0], [46.7, 132861.0], [46.8, 132861.0], [46.9, 132861.0], [47.0, 132869.0], [47.1, 132869.0], [47.2, 132869.0], [47.3, 132869.0], [47.4, 132869.0], [47.5, 132869.0], [47.6, 132869.0], [47.7, 132869.0], [47.8, 132869.0], [47.9, 132869.0], [48.0, 132880.0], [48.1, 132880.0], [48.2, 132880.0], [48.3, 132880.0], [48.4, 132880.0], [48.5, 132880.0], [48.6, 132880.0], [48.7, 132880.0], [48.8, 132880.0], [48.9, 132880.0], [49.0, 132890.0], [49.1, 132890.0], [49.2, 132890.0], [49.3, 132890.0], [49.4, 132890.0], [49.5, 132890.0], [49.6, 132890.0], [49.7, 132890.0], [49.8, 132890.0], [49.9, 132890.0], [50.0, 132900.0], [50.1, 132900.0], [50.2, 132900.0], [50.3, 132900.0], [50.4, 132900.0], [50.5, 132900.0], [50.6, 132900.0], [50.7, 132900.0], [50.8, 132900.0], [50.9, 132900.0], [51.0, 132911.0], [51.1, 132911.0], [51.2, 132911.0], [51.3, 132911.0], [51.4, 132911.0], [51.5, 132911.0], [51.6, 132911.0], [51.7, 132911.0], [51.8, 132911.0], [51.9, 132911.0], [52.0, 132931.0], [52.1, 132931.0], [52.2, 132931.0], [52.3, 132931.0], [52.4, 132931.0], [52.5, 132931.0], [52.6, 132931.0], [52.7, 132931.0], [52.8, 132931.0], [52.9, 132931.0], [53.0, 132932.0], [53.1, 132932.0], [53.2, 132932.0], [53.3, 132932.0], [53.4, 132932.0], [53.5, 132932.0], [53.6, 132932.0], [53.7, 132932.0], [53.8, 132932.0], [53.9, 132932.0], [54.0, 132950.0], [54.1, 132950.0], [54.2, 132950.0], [54.3, 132950.0], [54.4, 132950.0], [54.5, 132950.0], [54.6, 132950.0], [54.7, 132950.0], [54.8, 132950.0], [54.9, 132950.0], [55.0, 132962.0], [55.1, 132962.0], [55.2, 132962.0], [55.3, 132962.0], [55.4, 132962.0], [55.5, 132962.0], [55.6, 132962.0], [55.7, 132962.0], [55.8, 132962.0], [55.9, 132962.0], [56.0, 132967.0], [56.1, 132967.0], [56.2, 132967.0], [56.3, 132967.0], [56.4, 132967.0], [56.5, 132967.0], [56.6, 132967.0], [56.7, 132967.0], [56.8, 132967.0], [56.9, 132967.0], [57.0, 132979.0], [57.1, 132979.0], [57.2, 132979.0], [57.3, 132979.0], [57.4, 132979.0], [57.5, 132979.0], [57.6, 132979.0], [57.7, 132979.0], [57.8, 132979.0], [57.9, 132979.0], [58.0, 132990.0], [58.1, 132990.0], [58.2, 132990.0], [58.3, 132990.0], [58.4, 132990.0], [58.5, 132990.0], [58.6, 132990.0], [58.7, 132990.0], [58.8, 132990.0], [58.9, 132990.0], [59.0, 132999.0], [59.1, 132999.0], [59.2, 132999.0], [59.3, 132999.0], [59.4, 132999.0], [59.5, 132999.0], [59.6, 132999.0], [59.7, 132999.0], [59.8, 132999.0], [59.9, 132999.0], [60.0, 133006.0], [60.1, 133006.0], [60.2, 133006.0], [60.3, 133006.0], [60.4, 133006.0], [60.5, 133006.0], [60.6, 133006.0], [60.7, 133006.0], [60.8, 133006.0], [60.9, 133006.0], [61.0, 133011.0], [61.1, 133011.0], [61.2, 133011.0], [61.3, 133011.0], [61.4, 133011.0], [61.5, 133011.0], [61.6, 133011.0], [61.7, 133011.0], [61.8, 133011.0], [61.9, 133011.0], [62.0, 133025.0], [62.1, 133025.0], [62.2, 133025.0], [62.3, 133025.0], [62.4, 133025.0], [62.5, 133025.0], [62.6, 133025.0], [62.7, 133025.0], [62.8, 133025.0], [62.9, 133025.0], [63.0, 133035.0], [63.1, 133035.0], [63.2, 133035.0], [63.3, 133035.0], [63.4, 133035.0], [63.5, 133035.0], [63.6, 133035.0], [63.7, 133035.0], [63.8, 133035.0], [63.9, 133035.0], [64.0, 133042.0], [64.1, 133042.0], [64.2, 133042.0], [64.3, 133042.0], [64.4, 133042.0], [64.5, 133042.0], [64.6, 133042.0], [64.7, 133042.0], [64.8, 133042.0], [64.9, 133042.0], [65.0, 133050.0], [65.1, 133050.0], [65.2, 133050.0], [65.3, 133050.0], [65.4, 133050.0], [65.5, 133050.0], [65.6, 133050.0], [65.7, 133050.0], [65.8, 133050.0], [65.9, 133050.0], [66.0, 133061.0], [66.1, 133061.0], [66.2, 133061.0], [66.3, 133061.0], [66.4, 133061.0], [66.5, 133061.0], [66.6, 133061.0], [66.7, 133061.0], [66.8, 133061.0], [66.9, 133061.0], [67.0, 133077.0], [67.1, 133077.0], [67.2, 133077.0], [67.3, 133077.0], [67.4, 133077.0], [67.5, 133077.0], [67.6, 133077.0], [67.7, 133077.0], [67.8, 133077.0], [67.9, 133077.0], [68.0, 133080.0], [68.1, 133080.0], [68.2, 133080.0], [68.3, 133080.0], [68.4, 133080.0], [68.5, 133080.0], [68.6, 133080.0], [68.7, 133080.0], [68.8, 133080.0], [68.9, 133080.0], [69.0, 133082.0], [69.1, 133082.0], [69.2, 133082.0], [69.3, 133082.0], [69.4, 133082.0], [69.5, 133082.0], [69.6, 133082.0], [69.7, 133082.0], [69.8, 133082.0], [69.9, 133082.0], [70.0, 133082.0], [70.1, 133082.0], [70.2, 133082.0], [70.3, 133082.0], [70.4, 133082.0], [70.5, 133082.0], [70.6, 133082.0], [70.7, 133082.0], [70.8, 133082.0], [70.9, 133082.0], [71.0, 133083.0], [71.1, 133083.0], [71.2, 133083.0], [71.3, 133083.0], [71.4, 133083.0], [71.5, 133083.0], [71.6, 133083.0], [71.7, 133083.0], [71.8, 133083.0], [71.9, 133083.0], [72.0, 133083.0], [72.1, 133083.0], [72.2, 133083.0], [72.3, 133083.0], [72.4, 133083.0], [72.5, 133083.0], [72.6, 133083.0], [72.7, 133083.0], [72.8, 133083.0], [72.9, 133083.0], [73.0, 133083.0], [73.1, 133083.0], [73.2, 133083.0], [73.3, 133083.0], [73.4, 133083.0], [73.5, 133083.0], [73.6, 133083.0], [73.7, 133083.0], [73.8, 133083.0], [73.9, 133083.0], [74.0, 133083.0], [74.1, 133083.0], [74.2, 133083.0], [74.3, 133083.0], [74.4, 133083.0], [74.5, 133083.0], [74.6, 133083.0], [74.7, 133083.0], [74.8, 133083.0], [74.9, 133083.0], [75.0, 133083.0], [75.1, 133083.0], [75.2, 133083.0], [75.3, 133083.0], [75.4, 133083.0], [75.5, 133083.0], [75.6, 133083.0], [75.7, 133083.0], [75.8, 133083.0], [75.9, 133083.0], [76.0, 133084.0], [76.1, 133084.0], [76.2, 133084.0], [76.3, 133084.0], [76.4, 133084.0], [76.5, 133084.0], [76.6, 133084.0], [76.7, 133084.0], [76.8, 133084.0], [76.9, 133084.0], [77.0, 133084.0], [77.1, 133084.0], [77.2, 133084.0], [77.3, 133084.0], [77.4, 133084.0], [77.5, 133084.0], [77.6, 133084.0], [77.7, 133084.0], [77.8, 133084.0], [77.9, 133084.0], [78.0, 133087.0], [78.1, 133087.0], [78.2, 133087.0], [78.3, 133087.0], [78.4, 133087.0], [78.5, 133087.0], [78.6, 133087.0], [78.7, 133087.0], [78.8, 133087.0], [78.9, 133087.0], [79.0, 133091.0], [79.1, 133091.0], [79.2, 133091.0], [79.3, 133091.0], [79.4, 133091.0], [79.5, 133091.0], [79.6, 133091.0], [79.7, 133091.0], [79.8, 133091.0], [79.9, 133091.0], [80.0, 133092.0], [80.1, 133092.0], [80.2, 133092.0], [80.3, 133092.0], [80.4, 133092.0], [80.5, 133092.0], [80.6, 133092.0], [80.7, 133092.0], [80.8, 133092.0], [80.9, 133092.0], [81.0, 136306.0], [81.1, 136306.0], [81.2, 136306.0], [81.3, 136306.0], [81.4, 136306.0], [81.5, 136306.0], [81.6, 136306.0], [81.7, 136306.0], [81.8, 136306.0], [81.9, 136306.0], [82.0, 136318.0], [82.1, 136318.0], [82.2, 136318.0], [82.3, 136318.0], [82.4, 136318.0], [82.5, 136318.0], [82.6, 136318.0], [82.7, 136318.0], [82.8, 136318.0], [82.9, 136318.0], [83.0, 136327.0], [83.1, 136327.0], [83.2, 136327.0], [83.3, 136327.0], [83.4, 136327.0], [83.5, 136327.0], [83.6, 136327.0], [83.7, 136327.0], [83.8, 136327.0], [83.9, 136327.0], [84.0, 136339.0], [84.1, 136339.0], [84.2, 136339.0], [84.3, 136339.0], [84.4, 136339.0], [84.5, 136339.0], [84.6, 136339.0], [84.7, 136339.0], [84.8, 136339.0], [84.9, 136339.0], [85.0, 136346.0], [85.1, 136346.0], [85.2, 136346.0], [85.3, 136346.0], [85.4, 136346.0], [85.5, 136346.0], [85.6, 136346.0], [85.7, 136346.0], [85.8, 136346.0], [85.9, 136346.0], [86.0, 136354.0], [86.1, 136354.0], [86.2, 136354.0], [86.3, 136354.0], [86.4, 136354.0], [86.5, 136354.0], [86.6, 136354.0], [86.7, 136354.0], [86.8, 136354.0], [86.9, 136354.0], [87.0, 136368.0], [87.1, 136368.0], [87.2, 136368.0], [87.3, 136368.0], [87.4, 136368.0], [87.5, 136368.0], [87.6, 136368.0], [87.7, 136368.0], [87.8, 136368.0], [87.9, 136368.0], [88.0, 136380.0], [88.1, 136380.0], [88.2, 136380.0], [88.3, 136380.0], [88.4, 136380.0], [88.5, 136380.0], [88.6, 136380.0], [88.7, 136380.0], [88.8, 136380.0], [88.9, 136380.0], [89.0, 136389.0], [89.1, 136389.0], [89.2, 136389.0], [89.3, 136389.0], [89.4, 136389.0], [89.5, 136389.0], [89.6, 136389.0], [89.7, 136389.0], [89.8, 136389.0], [89.9, 136389.0], [90.0, 136398.0], [90.1, 136398.0], [90.2, 136398.0], [90.3, 136398.0], [90.4, 136398.0], [90.5, 136398.0], [90.6, 136398.0], [90.7, 136398.0], [90.8, 136398.0], [90.9, 136398.0], [91.0, 136409.0], [91.1, 136409.0], [91.2, 136409.0], [91.3, 136409.0], [91.4, 136409.0], [91.5, 136409.0], [91.6, 136409.0], [91.7, 136409.0], [91.8, 136409.0], [91.9, 136409.0], [92.0, 136416.0], [92.1, 136416.0], [92.2, 136416.0], [92.3, 136416.0], [92.4, 136416.0], [92.5, 136416.0], [92.6, 136416.0], [92.7, 136416.0], [92.8, 136416.0], [92.9, 136416.0], [93.0, 136428.0], [93.1, 136428.0], [93.2, 136428.0], [93.3, 136428.0], [93.4, 136428.0], [93.5, 136428.0], [93.6, 136428.0], [93.7, 136428.0], [93.8, 136428.0], [93.9, 136428.0], [94.0, 136436.0], [94.1, 136436.0], [94.2, 136436.0], [94.3, 136436.0], [94.4, 136436.0], [94.5, 136436.0], [94.6, 136436.0], [94.7, 136436.0], [94.8, 136436.0], [94.9, 136436.0], [95.0, 136447.0], [95.1, 136447.0], [95.2, 136447.0], [95.3, 136447.0], [95.4, 136447.0], [95.5, 136447.0], [95.6, 136447.0], [95.7, 136447.0], [95.8, 136447.0], [95.9, 136447.0], [96.0, 136457.0], [96.1, 136457.0], [96.2, 136457.0], [96.3, 136457.0], [96.4, 136457.0], [96.5, 136457.0], [96.6, 136457.0], [96.7, 136457.0], [96.8, 136457.0], [96.9, 136457.0], [97.0, 136467.0], [97.1, 136467.0], [97.2, 136467.0], [97.3, 136467.0], [97.4, 136467.0], [97.5, 136467.0], [97.6, 136467.0], [97.7, 136467.0], [97.8, 136467.0], [97.9, 136467.0], [98.0, 136476.0], [98.1, 136476.0], [98.2, 136476.0], [98.3, 136476.0], [98.4, 136476.0], [98.5, 136476.0], [98.6, 136476.0], [98.7, 136476.0], [98.8, 136476.0], [98.9, 136476.0], [99.0, 136485.0], [99.1, 136485.0], [99.2, 136485.0], [99.3, 136485.0], [99.4, 136485.0], [99.5, 136485.0], [99.6, 136485.0], [99.7, 136485.0], [99.8, 136485.0], [99.9, 136485.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 9.0, "minX": 132400.0, "maxY": 21.0, "series": [{"data": [[132600.0, 10.0], [132900.0, 10.0], [133000.0, 21.0], [132700.0, 10.0], [132800.0, 10.0], [132500.0, 10.0], [132400.0, 10.0], [136300.0, 10.0], [136400.0, 9.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 64.37, "minX": 1.76456112E12, "maxY": 64.37, "series": [{"data": [[1.76456112E12, 64.37]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76456112E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132470.0, "minX": 3.0, "maxY": 136411.66666666666, "series": [{"data": [[33.0, 132711.0], [32.0, 132850.0], [36.0, 133082.0], [40.0, 132880.0], [42.0, 133083.0], [43.0, 132890.0], [45.0, 132823.25], [3.0, 136380.0], [55.0, 132802.0], [54.0, 132781.0], [61.0, 132842.33333333334], [63.0, 132811.0], [67.0, 133084.0], [64.0, 132551.0], [70.0, 132646.5], [73.0, 132632.0], [77.0, 133083.0], [82.0, 132470.0], [80.0, 132652.0], [85.0, 132805.5], [91.0, 132502.0], [88.0, 132662.0], [98.0, 132911.0], [100.0, 132791.17500000002], [7.0, 136407.5], [10.0, 136411.66666666666], [11.0, 136389.0], [13.0, 136409.5], [14.0, 136392.0], [19.0, 136384.16666666666], [21.0, 132799.5], [23.0, 132972.0], [24.0, 132611.0], [25.0, 132681.0], [26.0, 133080.0], [27.0, 133082.0], [28.0, 132700.0], [30.0, 132532.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[64.37, 133478.86999999997]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.76456112E12, "maxY": 4708.333333333333, "series": [{"data": [[1.76456112E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76456112E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76456112E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133478.86999999997, "minX": 1.76456112E12, "maxY": 133478.86999999997, "series": [{"data": [[1.76456112E12, 133478.86999999997]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76456112E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.76456112E12, "maxY": 4.9E-324, "series": [{"data": [[1.76456112E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76456112E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 133477.67000000004, "minX": 1.76456112E12, "maxY": 133477.67000000004, "series": [{"data": [[1.76456112E12, 133477.67000000004]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76456112E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 132801.0, "minX": 19.0, "maxY": 136398.0, "series": [{"data": [[19.0, 136398.0], [81.0, 132801.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 19.0, "maxY": 4.9E-324, "series": [{"data": [[19.0, 0.0], [81.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.764561E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.764561E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.764561E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76456112E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76456112E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76456112E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76456112E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76456112E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76456112E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76456112E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76456112E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76456112E12, "title": "Total Transactions Per Second"}},
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

