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
        data: {"result": {"minY": 133958.0, "minX": 0.0, "maxY": 134835.0, "series": [{"data": [[0.0, 133958.0], [0.1, 133958.0], [0.2, 133958.0], [0.3, 133958.0], [0.4, 133958.0], [0.5, 133958.0], [0.6, 133958.0], [0.7, 133958.0], [0.8, 133958.0], [0.9, 133958.0], [1.0, 133969.0], [1.1, 133969.0], [1.2, 133969.0], [1.3, 133969.0], [1.4, 133969.0], [1.5, 133969.0], [1.6, 133969.0], [1.7, 133969.0], [1.8, 133969.0], [1.9, 133969.0], [2.0, 133979.0], [2.1, 133979.0], [2.2, 133979.0], [2.3, 133979.0], [2.4, 133979.0], [2.5, 133979.0], [2.6, 133979.0], [2.7, 133979.0], [2.8, 133979.0], [2.9, 133979.0], [3.0, 133988.0], [3.1, 133988.0], [3.2, 133988.0], [3.3, 133988.0], [3.4, 133988.0], [3.5, 133988.0], [3.6, 133988.0], [3.7, 133988.0], [3.8, 133988.0], [3.9, 133988.0], [4.0, 133999.0], [4.1, 133999.0], [4.2, 133999.0], [4.3, 133999.0], [4.4, 133999.0], [4.5, 133999.0], [4.6, 133999.0], [4.7, 133999.0], [4.8, 133999.0], [4.9, 133999.0], [5.0, 134008.0], [5.1, 134008.0], [5.2, 134008.0], [5.3, 134008.0], [5.4, 134008.0], [5.5, 134008.0], [5.6, 134008.0], [5.7, 134008.0], [5.8, 134008.0], [5.9, 134008.0], [6.0, 134019.0], [6.1, 134019.0], [6.2, 134019.0], [6.3, 134019.0], [6.4, 134019.0], [6.5, 134019.0], [6.6, 134019.0], [6.7, 134019.0], [6.8, 134019.0], [6.9, 134019.0], [7.0, 134027.0], [7.1, 134027.0], [7.2, 134027.0], [7.3, 134027.0], [7.4, 134027.0], [7.5, 134027.0], [7.6, 134027.0], [7.7, 134027.0], [7.8, 134027.0], [7.9, 134027.0], [8.0, 134038.0], [8.1, 134038.0], [8.2, 134038.0], [8.3, 134038.0], [8.4, 134038.0], [8.5, 134038.0], [8.6, 134038.0], [8.7, 134038.0], [8.8, 134038.0], [8.9, 134038.0], [9.0, 134048.0], [9.1, 134048.0], [9.2, 134048.0], [9.3, 134048.0], [9.4, 134048.0], [9.5, 134048.0], [9.6, 134048.0], [9.7, 134048.0], [9.8, 134048.0], [9.9, 134048.0], [10.0, 134058.0], [10.1, 134058.0], [10.2, 134058.0], [10.3, 134058.0], [10.4, 134058.0], [10.5, 134058.0], [10.6, 134058.0], [10.7, 134058.0], [10.8, 134058.0], [10.9, 134058.0], [11.0, 134067.0], [11.1, 134067.0], [11.2, 134067.0], [11.3, 134067.0], [11.4, 134067.0], [11.5, 134067.0], [11.6, 134067.0], [11.7, 134067.0], [11.8, 134067.0], [11.9, 134067.0], [12.0, 134078.0], [12.1, 134078.0], [12.2, 134078.0], [12.3, 134078.0], [12.4, 134078.0], [12.5, 134078.0], [12.6, 134078.0], [12.7, 134078.0], [12.8, 134078.0], [12.9, 134078.0], [13.0, 134088.0], [13.1, 134088.0], [13.2, 134088.0], [13.3, 134088.0], [13.4, 134088.0], [13.5, 134088.0], [13.6, 134088.0], [13.7, 134088.0], [13.8, 134088.0], [13.9, 134088.0], [14.0, 134098.0], [14.1, 134098.0], [14.2, 134098.0], [14.3, 134098.0], [14.4, 134098.0], [14.5, 134098.0], [14.6, 134098.0], [14.7, 134098.0], [14.8, 134098.0], [14.9, 134098.0], [15.0, 134108.0], [15.1, 134108.0], [15.2, 134108.0], [15.3, 134108.0], [15.4, 134108.0], [15.5, 134108.0], [15.6, 134108.0], [15.7, 134108.0], [15.8, 134108.0], [15.9, 134108.0], [16.0, 134118.0], [16.1, 134118.0], [16.2, 134118.0], [16.3, 134118.0], [16.4, 134118.0], [16.5, 134118.0], [16.6, 134118.0], [16.7, 134118.0], [16.8, 134118.0], [16.9, 134118.0], [17.0, 134129.0], [17.1, 134129.0], [17.2, 134129.0], [17.3, 134129.0], [17.4, 134129.0], [17.5, 134129.0], [17.6, 134129.0], [17.7, 134129.0], [17.8, 134129.0], [17.9, 134129.0], [18.0, 134137.0], [18.1, 134137.0], [18.2, 134137.0], [18.3, 134137.0], [18.4, 134137.0], [18.5, 134137.0], [18.6, 134137.0], [18.7, 134137.0], [18.8, 134137.0], [18.9, 134137.0], [19.0, 134147.0], [19.1, 134147.0], [19.2, 134147.0], [19.3, 134147.0], [19.4, 134147.0], [19.5, 134147.0], [19.6, 134147.0], [19.7, 134147.0], [19.8, 134147.0], [19.9, 134147.0], [20.0, 134157.0], [20.1, 134157.0], [20.2, 134157.0], [20.3, 134157.0], [20.4, 134157.0], [20.5, 134157.0], [20.6, 134157.0], [20.7, 134157.0], [20.8, 134157.0], [20.9, 134157.0], [21.0, 134168.0], [21.1, 134168.0], [21.2, 134168.0], [21.3, 134168.0], [21.4, 134168.0], [21.5, 134168.0], [21.6, 134168.0], [21.7, 134168.0], [21.8, 134168.0], [21.9, 134168.0], [22.0, 134178.0], [22.1, 134178.0], [22.2, 134178.0], [22.3, 134178.0], [22.4, 134178.0], [22.5, 134178.0], [22.6, 134178.0], [22.7, 134178.0], [22.8, 134178.0], [22.9, 134178.0], [23.0, 134188.0], [23.1, 134188.0], [23.2, 134188.0], [23.3, 134188.0], [23.4, 134188.0], [23.5, 134188.0], [23.6, 134188.0], [23.7, 134188.0], [23.8, 134188.0], [23.9, 134188.0], [24.0, 134198.0], [24.1, 134198.0], [24.2, 134198.0], [24.3, 134198.0], [24.4, 134198.0], [24.5, 134198.0], [24.6, 134198.0], [24.7, 134198.0], [24.8, 134198.0], [24.9, 134198.0], [25.0, 134209.0], [25.1, 134209.0], [25.2, 134209.0], [25.3, 134209.0], [25.4, 134209.0], [25.5, 134209.0], [25.6, 134209.0], [25.7, 134209.0], [25.8, 134209.0], [25.9, 134209.0], [26.0, 134220.0], [26.1, 134220.0], [26.2, 134220.0], [26.3, 134220.0], [26.4, 134220.0], [26.5, 134220.0], [26.6, 134220.0], [26.7, 134220.0], [26.8, 134220.0], [26.9, 134220.0], [27.0, 134229.0], [27.1, 134229.0], [27.2, 134229.0], [27.3, 134229.0], [27.4, 134229.0], [27.5, 134229.0], [27.6, 134229.0], [27.7, 134229.0], [27.8, 134229.0], [27.9, 134229.0], [28.0, 134240.0], [28.1, 134240.0], [28.2, 134240.0], [28.3, 134240.0], [28.4, 134240.0], [28.5, 134240.0], [28.6, 134240.0], [28.7, 134240.0], [28.8, 134240.0], [28.9, 134240.0], [29.0, 134250.0], [29.1, 134250.0], [29.2, 134250.0], [29.3, 134250.0], [29.4, 134250.0], [29.5, 134250.0], [29.6, 134250.0], [29.7, 134250.0], [29.8, 134250.0], [29.9, 134250.0], [30.0, 134258.0], [30.1, 134258.0], [30.2, 134258.0], [30.3, 134258.0], [30.4, 134258.0], [30.5, 134258.0], [30.6, 134258.0], [30.7, 134258.0], [30.8, 134258.0], [30.9, 134258.0], [31.0, 134269.0], [31.1, 134269.0], [31.2, 134269.0], [31.3, 134269.0], [31.4, 134269.0], [31.5, 134269.0], [31.6, 134269.0], [31.7, 134269.0], [31.8, 134269.0], [31.9, 134269.0], [32.0, 134279.0], [32.1, 134279.0], [32.2, 134279.0], [32.3, 134279.0], [32.4, 134279.0], [32.5, 134279.0], [32.6, 134279.0], [32.7, 134279.0], [32.8, 134279.0], [32.9, 134279.0], [33.0, 134290.0], [33.1, 134290.0], [33.2, 134290.0], [33.3, 134290.0], [33.4, 134290.0], [33.5, 134290.0], [33.6, 134290.0], [33.7, 134290.0], [33.8, 134290.0], [33.9, 134290.0], [34.0, 134299.0], [34.1, 134299.0], [34.2, 134299.0], [34.3, 134299.0], [34.4, 134299.0], [34.5, 134299.0], [34.6, 134299.0], [34.7, 134299.0], [34.8, 134299.0], [34.9, 134299.0], [35.0, 134308.0], [35.1, 134308.0], [35.2, 134308.0], [35.3, 134308.0], [35.4, 134308.0], [35.5, 134308.0], [35.6, 134308.0], [35.7, 134308.0], [35.8, 134308.0], [35.9, 134308.0], [36.0, 134319.0], [36.1, 134319.0], [36.2, 134319.0], [36.3, 134319.0], [36.4, 134319.0], [36.5, 134319.0], [36.6, 134319.0], [36.7, 134319.0], [36.8, 134319.0], [36.9, 134319.0], [37.0, 134329.0], [37.1, 134329.0], [37.2, 134329.0], [37.3, 134329.0], [37.4, 134329.0], [37.5, 134329.0], [37.6, 134329.0], [37.7, 134329.0], [37.8, 134329.0], [37.9, 134329.0], [38.0, 134336.0], [38.1, 134336.0], [38.2, 134336.0], [38.3, 134336.0], [38.4, 134336.0], [38.5, 134336.0], [38.6, 134336.0], [38.7, 134336.0], [38.8, 134336.0], [38.9, 134336.0], [39.0, 134348.0], [39.1, 134348.0], [39.2, 134348.0], [39.3, 134348.0], [39.4, 134348.0], [39.5, 134348.0], [39.6, 134348.0], [39.7, 134348.0], [39.8, 134348.0], [39.9, 134348.0], [40.0, 134360.0], [40.1, 134360.0], [40.2, 134360.0], [40.3, 134360.0], [40.4, 134360.0], [40.5, 134360.0], [40.6, 134360.0], [40.7, 134360.0], [40.8, 134360.0], [40.9, 134360.0], [41.0, 134370.0], [41.1, 134370.0], [41.2, 134370.0], [41.3, 134370.0], [41.4, 134370.0], [41.5, 134370.0], [41.6, 134370.0], [41.7, 134370.0], [41.8, 134370.0], [41.9, 134370.0], [42.0, 134378.0], [42.1, 134378.0], [42.2, 134378.0], [42.3, 134378.0], [42.4, 134378.0], [42.5, 134378.0], [42.6, 134378.0], [42.7, 134378.0], [42.8, 134378.0], [42.9, 134378.0], [43.0, 134388.0], [43.1, 134388.0], [43.2, 134388.0], [43.3, 134388.0], [43.4, 134388.0], [43.5, 134388.0], [43.6, 134388.0], [43.7, 134388.0], [43.8, 134388.0], [43.9, 134388.0], [44.0, 134399.0], [44.1, 134399.0], [44.2, 134399.0], [44.3, 134399.0], [44.4, 134399.0], [44.5, 134399.0], [44.6, 134399.0], [44.7, 134399.0], [44.8, 134399.0], [44.9, 134399.0], [45.0, 134408.0], [45.1, 134408.0], [45.2, 134408.0], [45.3, 134408.0], [45.4, 134408.0], [45.5, 134408.0], [45.6, 134408.0], [45.7, 134408.0], [45.8, 134408.0], [45.9, 134408.0], [46.0, 134420.0], [46.1, 134420.0], [46.2, 134420.0], [46.3, 134420.0], [46.4, 134420.0], [46.5, 134420.0], [46.6, 134420.0], [46.7, 134420.0], [46.8, 134420.0], [46.9, 134420.0], [47.0, 134429.0], [47.1, 134429.0], [47.2, 134429.0], [47.3, 134429.0], [47.4, 134429.0], [47.5, 134429.0], [47.6, 134429.0], [47.7, 134429.0], [47.8, 134429.0], [47.9, 134429.0], [48.0, 134438.0], [48.1, 134438.0], [48.2, 134438.0], [48.3, 134438.0], [48.4, 134438.0], [48.5, 134438.0], [48.6, 134438.0], [48.7, 134438.0], [48.8, 134438.0], [48.9, 134438.0], [49.0, 134449.0], [49.1, 134449.0], [49.2, 134449.0], [49.3, 134449.0], [49.4, 134449.0], [49.5, 134449.0], [49.6, 134449.0], [49.7, 134449.0], [49.8, 134449.0], [49.9, 134449.0], [50.0, 134458.0], [50.1, 134458.0], [50.2, 134458.0], [50.3, 134458.0], [50.4, 134458.0], [50.5, 134458.0], [50.6, 134458.0], [50.7, 134458.0], [50.8, 134458.0], [50.9, 134458.0], [51.0, 134468.0], [51.1, 134468.0], [51.2, 134468.0], [51.3, 134468.0], [51.4, 134468.0], [51.5, 134468.0], [51.6, 134468.0], [51.7, 134468.0], [51.8, 134468.0], [51.9, 134468.0], [52.0, 134479.0], [52.1, 134479.0], [52.2, 134479.0], [52.3, 134479.0], [52.4, 134479.0], [52.5, 134479.0], [52.6, 134479.0], [52.7, 134479.0], [52.8, 134479.0], [52.9, 134479.0], [53.0, 134489.0], [53.1, 134489.0], [53.2, 134489.0], [53.3, 134489.0], [53.4, 134489.0], [53.5, 134489.0], [53.6, 134489.0], [53.7, 134489.0], [53.8, 134489.0], [53.9, 134489.0], [54.0, 134497.0], [54.1, 134497.0], [54.2, 134497.0], [54.3, 134497.0], [54.4, 134497.0], [54.5, 134497.0], [54.6, 134497.0], [54.7, 134497.0], [54.8, 134497.0], [54.9, 134497.0], [55.0, 134508.0], [55.1, 134508.0], [55.2, 134508.0], [55.3, 134508.0], [55.4, 134508.0], [55.5, 134508.0], [55.6, 134508.0], [55.7, 134508.0], [55.8, 134508.0], [55.9, 134508.0], [56.0, 134518.0], [56.1, 134518.0], [56.2, 134518.0], [56.3, 134518.0], [56.4, 134518.0], [56.5, 134518.0], [56.6, 134518.0], [56.7, 134518.0], [56.8, 134518.0], [56.9, 134518.0], [57.0, 134530.0], [57.1, 134530.0], [57.2, 134530.0], [57.3, 134530.0], [57.4, 134530.0], [57.5, 134530.0], [57.6, 134530.0], [57.7, 134530.0], [57.8, 134530.0], [57.9, 134530.0], [58.0, 134539.0], [58.1, 134539.0], [58.2, 134539.0], [58.3, 134539.0], [58.4, 134539.0], [58.5, 134539.0], [58.6, 134539.0], [58.7, 134539.0], [58.8, 134539.0], [58.9, 134539.0], [59.0, 134547.0], [59.1, 134547.0], [59.2, 134547.0], [59.3, 134547.0], [59.4, 134547.0], [59.5, 134547.0], [59.6, 134547.0], [59.7, 134547.0], [59.8, 134547.0], [59.9, 134547.0], [60.0, 134559.0], [60.1, 134559.0], [60.2, 134559.0], [60.3, 134559.0], [60.4, 134559.0], [60.5, 134559.0], [60.6, 134559.0], [60.7, 134559.0], [60.8, 134559.0], [60.9, 134559.0], [61.0, 134577.0], [61.1, 134577.0], [61.2, 134577.0], [61.3, 134577.0], [61.4, 134577.0], [61.5, 134577.0], [61.6, 134577.0], [61.7, 134577.0], [61.8, 134577.0], [61.9, 134577.0], [62.0, 134589.0], [62.1, 134589.0], [62.2, 134589.0], [62.3, 134589.0], [62.4, 134589.0], [62.5, 134589.0], [62.6, 134589.0], [62.7, 134589.0], [62.8, 134589.0], [62.9, 134589.0], [63.0, 134594.0], [63.1, 134594.0], [63.2, 134594.0], [63.3, 134594.0], [63.4, 134594.0], [63.5, 134594.0], [63.6, 134594.0], [63.7, 134594.0], [63.8, 134594.0], [63.9, 134594.0], [64.0, 134597.0], [64.1, 134597.0], [64.2, 134597.0], [64.3, 134597.0], [64.4, 134597.0], [64.5, 134597.0], [64.6, 134597.0], [64.7, 134597.0], [64.8, 134597.0], [64.9, 134597.0], [65.0, 134609.0], [65.1, 134609.0], [65.2, 134609.0], [65.3, 134609.0], [65.4, 134609.0], [65.5, 134609.0], [65.6, 134609.0], [65.7, 134609.0], [65.8, 134609.0], [65.9, 134609.0], [66.0, 134618.0], [66.1, 134618.0], [66.2, 134618.0], [66.3, 134618.0], [66.4, 134618.0], [66.5, 134618.0], [66.6, 134618.0], [66.7, 134618.0], [66.8, 134618.0], [66.9, 134618.0], [67.0, 134629.0], [67.1, 134629.0], [67.2, 134629.0], [67.3, 134629.0], [67.4, 134629.0], [67.5, 134629.0], [67.6, 134629.0], [67.7, 134629.0], [67.8, 134629.0], [67.9, 134629.0], [68.0, 134639.0], [68.1, 134639.0], [68.2, 134639.0], [68.3, 134639.0], [68.4, 134639.0], [68.5, 134639.0], [68.6, 134639.0], [68.7, 134639.0], [68.8, 134639.0], [68.9, 134639.0], [69.0, 134648.0], [69.1, 134648.0], [69.2, 134648.0], [69.3, 134648.0], [69.4, 134648.0], [69.5, 134648.0], [69.6, 134648.0], [69.7, 134648.0], [69.8, 134648.0], [69.9, 134648.0], [70.0, 134658.0], [70.1, 134658.0], [70.2, 134658.0], [70.3, 134658.0], [70.4, 134658.0], [70.5, 134658.0], [70.6, 134658.0], [70.7, 134658.0], [70.8, 134658.0], [70.9, 134658.0], [71.0, 134668.0], [71.1, 134668.0], [71.2, 134668.0], [71.3, 134668.0], [71.4, 134668.0], [71.5, 134668.0], [71.6, 134668.0], [71.7, 134668.0], [71.8, 134668.0], [71.9, 134668.0], [72.0, 134678.0], [72.1, 134678.0], [72.2, 134678.0], [72.3, 134678.0], [72.4, 134678.0], [72.5, 134678.0], [72.6, 134678.0], [72.7, 134678.0], [72.8, 134678.0], [72.9, 134678.0], [73.0, 134687.0], [73.1, 134687.0], [73.2, 134687.0], [73.3, 134687.0], [73.4, 134687.0], [73.5, 134687.0], [73.6, 134687.0], [73.7, 134687.0], [73.8, 134687.0], [73.9, 134687.0], [74.0, 134697.0], [74.1, 134697.0], [74.2, 134697.0], [74.3, 134697.0], [74.4, 134697.0], [74.5, 134697.0], [74.6, 134697.0], [74.7, 134697.0], [74.8, 134697.0], [74.9, 134697.0], [75.0, 134709.0], [75.1, 134709.0], [75.2, 134709.0], [75.3, 134709.0], [75.4, 134709.0], [75.5, 134709.0], [75.6, 134709.0], [75.7, 134709.0], [75.8, 134709.0], [75.9, 134709.0], [76.0, 134718.0], [76.1, 134718.0], [76.2, 134718.0], [76.3, 134718.0], [76.4, 134718.0], [76.5, 134718.0], [76.6, 134718.0], [76.7, 134718.0], [76.8, 134718.0], [76.9, 134718.0], [77.0, 134727.0], [77.1, 134727.0], [77.2, 134727.0], [77.3, 134727.0], [77.4, 134727.0], [77.5, 134727.0], [77.6, 134727.0], [77.7, 134727.0], [77.8, 134727.0], [77.9, 134727.0], [78.0, 134739.0], [78.1, 134739.0], [78.2, 134739.0], [78.3, 134739.0], [78.4, 134739.0], [78.5, 134739.0], [78.6, 134739.0], [78.7, 134739.0], [78.8, 134739.0], [78.9, 134739.0], [79.0, 134749.0], [79.1, 134749.0], [79.2, 134749.0], [79.3, 134749.0], [79.4, 134749.0], [79.5, 134749.0], [79.6, 134749.0], [79.7, 134749.0], [79.8, 134749.0], [79.9, 134749.0], [80.0, 134754.0], [80.1, 134754.0], [80.2, 134754.0], [80.3, 134754.0], [80.4, 134754.0], [80.5, 134754.0], [80.6, 134754.0], [80.7, 134754.0], [80.8, 134754.0], [80.9, 134754.0], [81.0, 134768.0], [81.1, 134768.0], [81.2, 134768.0], [81.3, 134768.0], [81.4, 134768.0], [81.5, 134768.0], [81.6, 134768.0], [81.7, 134768.0], [81.8, 134768.0], [81.9, 134768.0], [82.0, 134779.0], [82.1, 134779.0], [82.2, 134779.0], [82.3, 134779.0], [82.4, 134779.0], [82.5, 134779.0], [82.6, 134779.0], [82.7, 134779.0], [82.8, 134779.0], [82.9, 134779.0], [83.0, 134790.0], [83.1, 134790.0], [83.2, 134790.0], [83.3, 134790.0], [83.4, 134790.0], [83.5, 134790.0], [83.6, 134790.0], [83.7, 134790.0], [83.8, 134790.0], [83.9, 134790.0], [84.0, 134797.0], [84.1, 134797.0], [84.2, 134797.0], [84.3, 134797.0], [84.4, 134797.0], [84.5, 134797.0], [84.6, 134797.0], [84.7, 134797.0], [84.8, 134797.0], [84.9, 134797.0], [85.0, 134806.0], [85.1, 134806.0], [85.2, 134806.0], [85.3, 134806.0], [85.4, 134806.0], [85.5, 134806.0], [85.6, 134806.0], [85.7, 134806.0], [85.8, 134806.0], [85.9, 134806.0], [86.0, 134817.0], [86.1, 134817.0], [86.2, 134817.0], [86.3, 134817.0], [86.4, 134817.0], [86.5, 134817.0], [86.6, 134817.0], [86.7, 134817.0], [86.8, 134817.0], [86.9, 134817.0], [87.0, 134828.0], [87.1, 134828.0], [87.2, 134828.0], [87.3, 134828.0], [87.4, 134828.0], [87.5, 134828.0], [87.6, 134828.0], [87.7, 134828.0], [87.8, 134828.0], [87.9, 134828.0], [88.0, 134831.0], [88.1, 134831.0], [88.2, 134831.0], [88.3, 134831.0], [88.4, 134831.0], [88.5, 134831.0], [88.6, 134831.0], [88.7, 134831.0], [88.8, 134831.0], [88.9, 134831.0], [89.0, 134831.0], [89.1, 134831.0], [89.2, 134831.0], [89.3, 134831.0], [89.4, 134831.0], [89.5, 134831.0], [89.6, 134831.0], [89.7, 134831.0], [89.8, 134831.0], [89.9, 134831.0], [90.0, 134832.0], [90.1, 134832.0], [90.2, 134832.0], [90.3, 134832.0], [90.4, 134832.0], [90.5, 134832.0], [90.6, 134832.0], [90.7, 134832.0], [90.8, 134832.0], [90.9, 134832.0], [91.0, 134832.0], [91.1, 134832.0], [91.2, 134832.0], [91.3, 134832.0], [91.4, 134832.0], [91.5, 134832.0], [91.6, 134832.0], [91.7, 134832.0], [91.8, 134832.0], [91.9, 134832.0], [92.0, 134833.0], [92.1, 134833.0], [92.2, 134833.0], [92.3, 134833.0], [92.4, 134833.0], [92.5, 134833.0], [92.6, 134833.0], [92.7, 134833.0], [92.8, 134833.0], [92.9, 134833.0], [93.0, 134833.0], [93.1, 134833.0], [93.2, 134833.0], [93.3, 134833.0], [93.4, 134833.0], [93.5, 134833.0], [93.6, 134833.0], [93.7, 134833.0], [93.8, 134833.0], [93.9, 134833.0], [94.0, 134833.0], [94.1, 134833.0], [94.2, 134833.0], [94.3, 134833.0], [94.4, 134833.0], [94.5, 134833.0], [94.6, 134833.0], [94.7, 134833.0], [94.8, 134833.0], [94.9, 134833.0], [95.0, 134833.0], [95.1, 134833.0], [95.2, 134833.0], [95.3, 134833.0], [95.4, 134833.0], [95.5, 134833.0], [95.6, 134833.0], [95.7, 134833.0], [95.8, 134833.0], [95.9, 134833.0], [96.0, 134833.0], [96.1, 134833.0], [96.2, 134833.0], [96.3, 134833.0], [96.4, 134833.0], [96.5, 134833.0], [96.6, 134833.0], [96.7, 134833.0], [96.8, 134833.0], [96.9, 134833.0], [97.0, 134834.0], [97.1, 134834.0], [97.2, 134834.0], [97.3, 134834.0], [97.4, 134834.0], [97.5, 134834.0], [97.6, 134834.0], [97.7, 134834.0], [97.8, 134834.0], [97.9, 134834.0], [98.0, 134834.0], [98.1, 134834.0], [98.2, 134834.0], [98.3, 134834.0], [98.4, 134834.0], [98.5, 134834.0], [98.6, 134834.0], [98.7, 134834.0], [98.8, 134834.0], [98.9, 134834.0], [99.0, 134835.0], [99.1, 134835.0], [99.2, 134835.0], [99.3, 134835.0], [99.4, 134835.0], [99.5, 134835.0], [99.6, 134835.0], [99.7, 134835.0], [99.8, 134835.0], [99.9, 134835.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 133900.0, "maxY": 15.0, "series": [{"data": [[134200.0, 10.0], [134800.0, 15.0], [134400.0, 10.0], [134600.0, 10.0], [134000.0, 10.0], [134500.0, 10.0], [134700.0, 10.0], [134300.0, 10.0], [134100.0, 10.0], [133900.0, 5.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 134800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 55.86999999999996, "minX": 1.7547975E12, "maxY": 55.86999999999996, "series": [{"data": [[1.7547975E12, 55.86999999999996]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7547975E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 133958.0, "minX": 3.0, "maxY": 134834.0, "series": [{"data": [[3.0, 134242.5], [12.0, 134831.0], [15.0, 134258.0], [16.0, 134830.0], [17.0, 134437.5], [19.0, 134416.66666666666], [20.0, 134832.0], [21.0, 134457.5], [22.0, 134518.0], [23.0, 134157.0], [24.0, 134078.0], [25.0, 134067.0], [26.0, 134058.0], [28.0, 134429.0], [29.0, 134768.0], [35.0, 134063.0], [36.0, 134487.0], [39.0, 134449.0], [38.0, 133958.0], [41.0, 134413.66666666666], [43.0, 134458.0], [45.0, 133979.0], [44.0, 134454.0], [47.0, 134558.0], [49.0, 134019.0], [48.0, 134754.0], [51.0, 134323.0], [53.0, 134363.0], [55.0, 134383.0], [57.0, 134601.5], [59.0, 134388.0], [58.0, 134678.0], [61.0, 134108.0], [62.0, 134178.0], [66.0, 134568.0], [65.0, 133999.0], [64.0, 134618.0], [70.0, 134539.0], [69.0, 134318.66666666666], [75.0, 134399.0], [74.0, 134463.0], [73.0, 134329.0], [72.0, 134598.5], [79.0, 134727.0], [78.0, 134524.0], [77.0, 134168.0], [82.0, 134834.0], [81.0, 134360.0], [86.0, 134370.0], [85.0, 134607.0], [84.0, 134739.0], [91.0, 134769.5], [89.0, 134336.0], [88.0, 134250.0], [95.0, 134779.0], [93.0, 134558.0], [100.0, 134495.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[55.86999999999996, 134446.27000000005]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7547975E12, "maxY": 4708.333333333333, "series": [{"data": [[1.7547975E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7547975E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7547975E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 134446.27000000005, "minX": 1.7547975E12, "maxY": 134446.27000000005, "series": [{"data": [[1.7547975E12, 134446.27000000005]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7547975E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7547975E12, "maxY": 4.9E-324, "series": [{"data": [[1.7547975E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7547975E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 134445.94999999995, "minX": 1.7547975E12, "maxY": 134445.94999999995, "series": [{"data": [[1.7547975E12, 134445.94999999995]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7547975E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 134453.5, "minX": 100.0, "maxY": 134453.5, "series": [{"data": [[100.0, 134453.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75479732E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75479732E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75479732E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7547975E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7547975E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7547975E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7547975E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7547975E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7547975E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7547975E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7547975E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7547975E12, "title": "Total Transactions Per Second"}},
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

