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
        data: {"result": {"minY": 14230.0, "minX": 0.0, "maxY": 16878.0, "series": [{"data": [[0.0, 14230.0], [0.1, 14230.0], [0.2, 14230.0], [0.3, 14230.0], [0.4, 14230.0], [0.5, 14230.0], [0.6, 14230.0], [0.7, 14230.0], [0.8, 14230.0], [0.9, 14230.0], [1.0, 14253.0], [1.1, 14253.0], [1.2, 14253.0], [1.3, 14253.0], [1.4, 14253.0], [1.5, 14253.0], [1.6, 14253.0], [1.7, 14253.0], [1.8, 14253.0], [1.9, 14253.0], [2.0, 14301.0], [2.1, 14301.0], [2.2, 14301.0], [2.3, 14301.0], [2.4, 14301.0], [2.5, 14301.0], [2.6, 14301.0], [2.7, 14301.0], [2.8, 14301.0], [2.9, 14301.0], [3.0, 14319.0], [3.1, 14319.0], [3.2, 14319.0], [3.3, 14319.0], [3.4, 14319.0], [3.5, 14319.0], [3.6, 14319.0], [3.7, 14319.0], [3.8, 14319.0], [3.9, 14319.0], [4.0, 14320.0], [4.1, 14320.0], [4.2, 14320.0], [4.3, 14320.0], [4.4, 14320.0], [4.5, 14320.0], [4.6, 14320.0], [4.7, 14320.0], [4.8, 14320.0], [4.9, 14320.0], [5.0, 14356.0], [5.1, 14356.0], [5.2, 14356.0], [5.3, 14356.0], [5.4, 14356.0], [5.5, 14356.0], [5.6, 14356.0], [5.7, 14356.0], [5.8, 14356.0], [5.9, 14356.0], [6.0, 14357.0], [6.1, 14357.0], [6.2, 14357.0], [6.3, 14357.0], [6.4, 14357.0], [6.5, 14357.0], [6.6, 14357.0], [6.7, 14357.0], [6.8, 14357.0], [6.9, 14357.0], [7.0, 14395.0], [7.1, 14395.0], [7.2, 14395.0], [7.3, 14395.0], [7.4, 14395.0], [7.5, 14395.0], [7.6, 14395.0], [7.7, 14395.0], [7.8, 14395.0], [7.9, 14395.0], [8.0, 14399.0], [8.1, 14399.0], [8.2, 14399.0], [8.3, 14399.0], [8.4, 14399.0], [8.5, 14399.0], [8.6, 14399.0], [8.7, 14399.0], [8.8, 14399.0], [8.9, 14399.0], [9.0, 14541.0], [9.1, 14541.0], [9.2, 14541.0], [9.3, 14541.0], [9.4, 14541.0], [9.5, 14541.0], [9.6, 14541.0], [9.7, 14541.0], [9.8, 14541.0], [9.9, 14541.0], [10.0, 14567.0], [10.1, 14567.0], [10.2, 14567.0], [10.3, 14567.0], [10.4, 14567.0], [10.5, 14567.0], [10.6, 14567.0], [10.7, 14567.0], [10.8, 14567.0], [10.9, 14567.0], [11.0, 14582.0], [11.1, 14582.0], [11.2, 14582.0], [11.3, 14582.0], [11.4, 14582.0], [11.5, 14582.0], [11.6, 14582.0], [11.7, 14582.0], [11.8, 14582.0], [11.9, 14582.0], [12.0, 14593.0], [12.1, 14593.0], [12.2, 14593.0], [12.3, 14593.0], [12.4, 14593.0], [12.5, 14593.0], [12.6, 14593.0], [12.7, 14593.0], [12.8, 14593.0], [12.9, 14593.0], [13.0, 14631.0], [13.1, 14631.0], [13.2, 14631.0], [13.3, 14631.0], [13.4, 14631.0], [13.5, 14631.0], [13.6, 14631.0], [13.7, 14631.0], [13.8, 14631.0], [13.9, 14631.0], [14.0, 14658.0], [14.1, 14658.0], [14.2, 14658.0], [14.3, 14658.0], [14.4, 14658.0], [14.5, 14658.0], [14.6, 14658.0], [14.7, 14658.0], [14.8, 14658.0], [14.9, 14658.0], [15.0, 14659.0], [15.1, 14659.0], [15.2, 14659.0], [15.3, 14659.0], [15.4, 14659.0], [15.5, 14659.0], [15.6, 14659.0], [15.7, 14659.0], [15.8, 14659.0], [15.9, 14659.0], [16.0, 14695.0], [16.1, 14695.0], [16.2, 14695.0], [16.3, 14695.0], [16.4, 14695.0], [16.5, 14695.0], [16.6, 14695.0], [16.7, 14695.0], [16.8, 14695.0], [16.9, 14695.0], [17.0, 14712.0], [17.1, 14712.0], [17.2, 14712.0], [17.3, 14712.0], [17.4, 14712.0], [17.5, 14712.0], [17.6, 14712.0], [17.7, 14712.0], [17.8, 14712.0], [17.9, 14712.0], [18.0, 14728.0], [18.1, 14728.0], [18.2, 14728.0], [18.3, 14728.0], [18.4, 14728.0], [18.5, 14728.0], [18.6, 14728.0], [18.7, 14728.0], [18.8, 14728.0], [18.9, 14728.0], [19.0, 14750.0], [19.1, 14750.0], [19.2, 14750.0], [19.3, 14750.0], [19.4, 14750.0], [19.5, 14750.0], [19.6, 14750.0], [19.7, 14750.0], [19.8, 14750.0], [19.9, 14750.0], [20.0, 14765.0], [20.1, 14765.0], [20.2, 14765.0], [20.3, 14765.0], [20.4, 14765.0], [20.5, 14765.0], [20.6, 14765.0], [20.7, 14765.0], [20.8, 14765.0], [20.9, 14765.0], [21.0, 14770.0], [21.1, 14770.0], [21.2, 14770.0], [21.3, 14770.0], [21.4, 14770.0], [21.5, 14770.0], [21.6, 14770.0], [21.7, 14770.0], [21.8, 14770.0], [21.9, 14770.0], [22.0, 14794.0], [22.1, 14794.0], [22.2, 14794.0], [22.3, 14794.0], [22.4, 14794.0], [22.5, 14794.0], [22.6, 14794.0], [22.7, 14794.0], [22.8, 14794.0], [22.9, 14794.0], [23.0, 14810.0], [23.1, 14810.0], [23.2, 14810.0], [23.3, 14810.0], [23.4, 14810.0], [23.5, 14810.0], [23.6, 14810.0], [23.7, 14810.0], [23.8, 14810.0], [23.9, 14810.0], [24.0, 14818.0], [24.1, 14818.0], [24.2, 14818.0], [24.3, 14818.0], [24.4, 14818.0], [24.5, 14818.0], [24.6, 14818.0], [24.7, 14818.0], [24.8, 14818.0], [24.9, 14818.0], [25.0, 14830.0], [25.1, 14830.0], [25.2, 14830.0], [25.3, 14830.0], [25.4, 14830.0], [25.5, 14830.0], [25.6, 14830.0], [25.7, 14830.0], [25.8, 14830.0], [25.9, 14830.0], [26.0, 14839.0], [26.1, 14839.0], [26.2, 14839.0], [26.3, 14839.0], [26.4, 14839.0], [26.5, 14839.0], [26.6, 14839.0], [26.7, 14839.0], [26.8, 14839.0], [26.9, 14839.0], [27.0, 14854.0], [27.1, 14854.0], [27.2, 14854.0], [27.3, 14854.0], [27.4, 14854.0], [27.5, 14854.0], [27.6, 14854.0], [27.7, 14854.0], [27.8, 14854.0], [27.9, 14854.0], [28.0, 14911.0], [28.1, 14911.0], [28.2, 14911.0], [28.3, 14911.0], [28.4, 14911.0], [28.5, 14911.0], [28.6, 14911.0], [28.7, 14911.0], [28.8, 14911.0], [28.9, 14911.0], [29.0, 14915.0], [29.1, 14915.0], [29.2, 14915.0], [29.3, 14915.0], [29.4, 14915.0], [29.5, 14915.0], [29.6, 14915.0], [29.7, 14915.0], [29.8, 14915.0], [29.9, 14915.0], [30.0, 14934.0], [30.1, 14934.0], [30.2, 14934.0], [30.3, 14934.0], [30.4, 14934.0], [30.5, 14934.0], [30.6, 14934.0], [30.7, 14934.0], [30.8, 14934.0], [30.9, 14934.0], [31.0, 14939.0], [31.1, 14939.0], [31.2, 14939.0], [31.3, 14939.0], [31.4, 14939.0], [31.5, 14939.0], [31.6, 14939.0], [31.7, 14939.0], [31.8, 14939.0], [31.9, 14939.0], [32.0, 14964.0], [32.1, 14964.0], [32.2, 14964.0], [32.3, 14964.0], [32.4, 14964.0], [32.5, 14964.0], [32.6, 14964.0], [32.7, 14964.0], [32.8, 14964.0], [32.9, 14964.0], [33.0, 14977.0], [33.1, 14977.0], [33.2, 14977.0], [33.3, 14977.0], [33.4, 14977.0], [33.5, 14977.0], [33.6, 14977.0], [33.7, 14977.0], [33.8, 14977.0], [33.9, 14977.0], [34.0, 14978.0], [34.1, 14978.0], [34.2, 14978.0], [34.3, 14978.0], [34.4, 14978.0], [34.5, 14978.0], [34.6, 14978.0], [34.7, 14978.0], [34.8, 14978.0], [34.9, 14978.0], [35.0, 14991.0], [35.1, 14991.0], [35.2, 14991.0], [35.3, 14991.0], [35.4, 14991.0], [35.5, 14991.0], [35.6, 14991.0], [35.7, 14991.0], [35.8, 14991.0], [35.9, 14991.0], [36.0, 15006.0], [36.1, 15006.0], [36.2, 15006.0], [36.3, 15006.0], [36.4, 15006.0], [36.5, 15006.0], [36.6, 15006.0], [36.7, 15006.0], [36.8, 15006.0], [36.9, 15006.0], [37.0, 15040.0], [37.1, 15040.0], [37.2, 15040.0], [37.3, 15040.0], [37.4, 15040.0], [37.5, 15040.0], [37.6, 15040.0], [37.7, 15040.0], [37.8, 15040.0], [37.9, 15040.0], [38.0, 15046.0], [38.1, 15046.0], [38.2, 15046.0], [38.3, 15046.0], [38.4, 15046.0], [38.5, 15046.0], [38.6, 15046.0], [38.7, 15046.0], [38.8, 15046.0], [38.9, 15046.0], [39.0, 15106.0], [39.1, 15106.0], [39.2, 15106.0], [39.3, 15106.0], [39.4, 15106.0], [39.5, 15106.0], [39.6, 15106.0], [39.7, 15106.0], [39.8, 15106.0], [39.9, 15106.0], [40.0, 15108.0], [40.1, 15108.0], [40.2, 15108.0], [40.3, 15108.0], [40.4, 15108.0], [40.5, 15108.0], [40.6, 15108.0], [40.7, 15108.0], [40.8, 15108.0], [40.9, 15108.0], [41.0, 15117.0], [41.1, 15117.0], [41.2, 15117.0], [41.3, 15117.0], [41.4, 15117.0], [41.5, 15117.0], [41.6, 15117.0], [41.7, 15117.0], [41.8, 15117.0], [41.9, 15117.0], [42.0, 15119.0], [42.1, 15119.0], [42.2, 15119.0], [42.3, 15119.0], [42.4, 15119.0], [42.5, 15119.0], [42.6, 15119.0], [42.7, 15119.0], [42.8, 15119.0], [42.9, 15119.0], [43.0, 15124.0], [43.1, 15124.0], [43.2, 15124.0], [43.3, 15124.0], [43.4, 15124.0], [43.5, 15124.0], [43.6, 15124.0], [43.7, 15124.0], [43.8, 15124.0], [43.9, 15124.0], [44.0, 15150.0], [44.1, 15150.0], [44.2, 15150.0], [44.3, 15150.0], [44.4, 15150.0], [44.5, 15150.0], [44.6, 15150.0], [44.7, 15150.0], [44.8, 15150.0], [44.9, 15150.0], [45.0, 15162.0], [45.1, 15162.0], [45.2, 15162.0], [45.3, 15162.0], [45.4, 15162.0], [45.5, 15162.0], [45.6, 15162.0], [45.7, 15162.0], [45.8, 15162.0], [45.9, 15162.0], [46.0, 15170.0], [46.1, 15170.0], [46.2, 15170.0], [46.3, 15170.0], [46.4, 15170.0], [46.5, 15170.0], [46.6, 15170.0], [46.7, 15170.0], [46.8, 15170.0], [46.9, 15170.0], [47.0, 15176.0], [47.1, 15176.0], [47.2, 15176.0], [47.3, 15176.0], [47.4, 15176.0], [47.5, 15176.0], [47.6, 15176.0], [47.7, 15176.0], [47.8, 15176.0], [47.9, 15176.0], [48.0, 15197.0], [48.1, 15197.0], [48.2, 15197.0], [48.3, 15197.0], [48.4, 15197.0], [48.5, 15197.0], [48.6, 15197.0], [48.7, 15197.0], [48.8, 15197.0], [48.9, 15197.0], [49.0, 15230.0], [49.1, 15230.0], [49.2, 15230.0], [49.3, 15230.0], [49.4, 15230.0], [49.5, 15230.0], [49.6, 15230.0], [49.7, 15230.0], [49.8, 15230.0], [49.9, 15230.0], [50.0, 15250.0], [50.1, 15250.0], [50.2, 15250.0], [50.3, 15250.0], [50.4, 15250.0], [50.5, 15250.0], [50.6, 15250.0], [50.7, 15250.0], [50.8, 15250.0], [50.9, 15250.0], [51.0, 15258.0], [51.1, 15258.0], [51.2, 15258.0], [51.3, 15258.0], [51.4, 15258.0], [51.5, 15258.0], [51.6, 15258.0], [51.7, 15258.0], [51.8, 15258.0], [51.9, 15258.0], [52.0, 15271.0], [52.1, 15271.0], [52.2, 15271.0], [52.3, 15271.0], [52.4, 15271.0], [52.5, 15271.0], [52.6, 15271.0], [52.7, 15271.0], [52.8, 15271.0], [52.9, 15271.0], [53.0, 15280.0], [53.1, 15280.0], [53.2, 15280.0], [53.3, 15280.0], [53.4, 15280.0], [53.5, 15280.0], [53.6, 15280.0], [53.7, 15280.0], [53.8, 15280.0], [53.9, 15280.0], [54.0, 15388.0], [54.1, 15388.0], [54.2, 15388.0], [54.3, 15388.0], [54.4, 15388.0], [54.5, 15388.0], [54.6, 15388.0], [54.7, 15388.0], [54.8, 15388.0], [54.9, 15388.0], [55.0, 15400.0], [55.1, 15400.0], [55.2, 15400.0], [55.3, 15400.0], [55.4, 15400.0], [55.5, 15400.0], [55.6, 15400.0], [55.7, 15400.0], [55.8, 15400.0], [55.9, 15400.0], [56.0, 15413.0], [56.1, 15413.0], [56.2, 15413.0], [56.3, 15413.0], [56.4, 15413.0], [56.5, 15413.0], [56.6, 15413.0], [56.7, 15413.0], [56.8, 15413.0], [56.9, 15413.0], [57.0, 15418.0], [57.1, 15418.0], [57.2, 15418.0], [57.3, 15418.0], [57.4, 15418.0], [57.5, 15418.0], [57.6, 15418.0], [57.7, 15418.0], [57.8, 15418.0], [57.9, 15418.0], [58.0, 15422.0], [58.1, 15422.0], [58.2, 15422.0], [58.3, 15422.0], [58.4, 15422.0], [58.5, 15422.0], [58.6, 15422.0], [58.7, 15422.0], [58.8, 15422.0], [58.9, 15422.0], [59.0, 15427.0], [59.1, 15427.0], [59.2, 15427.0], [59.3, 15427.0], [59.4, 15427.0], [59.5, 15427.0], [59.6, 15427.0], [59.7, 15427.0], [59.8, 15427.0], [59.9, 15427.0], [60.0, 15436.0], [60.1, 15436.0], [60.2, 15436.0], [60.3, 15436.0], [60.4, 15436.0], [60.5, 15436.0], [60.6, 15436.0], [60.7, 15436.0], [60.8, 15436.0], [60.9, 15436.0], [61.0, 15467.0], [61.1, 15467.0], [61.2, 15467.0], [61.3, 15467.0], [61.4, 15467.0], [61.5, 15467.0], [61.6, 15467.0], [61.7, 15467.0], [61.8, 15467.0], [61.9, 15467.0], [62.0, 15471.0], [62.1, 15471.0], [62.2, 15471.0], [62.3, 15471.0], [62.4, 15471.0], [62.5, 15471.0], [62.6, 15471.0], [62.7, 15471.0], [62.8, 15471.0], [62.9, 15471.0], [63.0, 15485.0], [63.1, 15485.0], [63.2, 15485.0], [63.3, 15485.0], [63.4, 15485.0], [63.5, 15485.0], [63.6, 15485.0], [63.7, 15485.0], [63.8, 15485.0], [63.9, 15485.0], [64.0, 15497.0], [64.1, 15497.0], [64.2, 15497.0], [64.3, 15497.0], [64.4, 15497.0], [64.5, 15497.0], [64.6, 15497.0], [64.7, 15497.0], [64.8, 15497.0], [64.9, 15497.0], [65.0, 15518.0], [65.1, 15518.0], [65.2, 15518.0], [65.3, 15518.0], [65.4, 15518.0], [65.5, 15518.0], [65.6, 15518.0], [65.7, 15518.0], [65.8, 15518.0], [65.9, 15518.0], [66.0, 15540.0], [66.1, 15540.0], [66.2, 15540.0], [66.3, 15540.0], [66.4, 15540.0], [66.5, 15540.0], [66.6, 15540.0], [66.7, 15540.0], [66.8, 15540.0], [66.9, 15540.0], [67.0, 15582.0], [67.1, 15582.0], [67.2, 15582.0], [67.3, 15582.0], [67.4, 15582.0], [67.5, 15582.0], [67.6, 15582.0], [67.7, 15582.0], [67.8, 15582.0], [67.9, 15582.0], [68.0, 15604.0], [68.1, 15604.0], [68.2, 15604.0], [68.3, 15604.0], [68.4, 15604.0], [68.5, 15604.0], [68.6, 15604.0], [68.7, 15604.0], [68.8, 15604.0], [68.9, 15604.0], [69.0, 15651.0], [69.1, 15651.0], [69.2, 15651.0], [69.3, 15651.0], [69.4, 15651.0], [69.5, 15651.0], [69.6, 15651.0], [69.7, 15651.0], [69.8, 15651.0], [69.9, 15651.0], [70.0, 15721.0], [70.1, 15721.0], [70.2, 15721.0], [70.3, 15721.0], [70.4, 15721.0], [70.5, 15721.0], [70.6, 15721.0], [70.7, 15721.0], [70.8, 15721.0], [70.9, 15721.0], [71.0, 15743.0], [71.1, 15743.0], [71.2, 15743.0], [71.3, 15743.0], [71.4, 15743.0], [71.5, 15743.0], [71.6, 15743.0], [71.7, 15743.0], [71.8, 15743.0], [71.9, 15743.0], [72.0, 15776.0], [72.1, 15776.0], [72.2, 15776.0], [72.3, 15776.0], [72.4, 15776.0], [72.5, 15776.0], [72.6, 15776.0], [72.7, 15776.0], [72.8, 15776.0], [72.9, 15776.0], [73.0, 15788.0], [73.1, 15788.0], [73.2, 15788.0], [73.3, 15788.0], [73.4, 15788.0], [73.5, 15788.0], [73.6, 15788.0], [73.7, 15788.0], [73.8, 15788.0], [73.9, 15788.0], [74.0, 15794.0], [74.1, 15794.0], [74.2, 15794.0], [74.3, 15794.0], [74.4, 15794.0], [74.5, 15794.0], [74.6, 15794.0], [74.7, 15794.0], [74.8, 15794.0], [74.9, 15794.0], [75.0, 15874.0], [75.1, 15874.0], [75.2, 15874.0], [75.3, 15874.0], [75.4, 15874.0], [75.5, 15874.0], [75.6, 15874.0], [75.7, 15874.0], [75.8, 15874.0], [75.9, 15874.0], [76.0, 15876.0], [76.1, 15876.0], [76.2, 15876.0], [76.3, 15876.0], [76.4, 15876.0], [76.5, 15876.0], [76.6, 15876.0], [76.7, 15876.0], [76.8, 15876.0], [76.9, 15876.0], [77.0, 15877.0], [77.1, 15877.0], [77.2, 15877.0], [77.3, 15877.0], [77.4, 15877.0], [77.5, 15877.0], [77.6, 15877.0], [77.7, 15877.0], [77.8, 15877.0], [77.9, 15877.0], [78.0, 15944.0], [78.1, 15944.0], [78.2, 15944.0], [78.3, 15944.0], [78.4, 15944.0], [78.5, 15944.0], [78.6, 15944.0], [78.7, 15944.0], [78.8, 15944.0], [78.9, 15944.0], [79.0, 15964.0], [79.1, 15964.0], [79.2, 15964.0], [79.3, 15964.0], [79.4, 15964.0], [79.5, 15964.0], [79.6, 15964.0], [79.7, 15964.0], [79.8, 15964.0], [79.9, 15964.0], [80.0, 15981.0], [80.1, 15981.0], [80.2, 15981.0], [80.3, 15981.0], [80.4, 15981.0], [80.5, 15981.0], [80.6, 15981.0], [80.7, 15981.0], [80.8, 15981.0], [80.9, 15981.0], [81.0, 16016.0], [81.1, 16016.0], [81.2, 16016.0], [81.3, 16016.0], [81.4, 16016.0], [81.5, 16016.0], [81.6, 16016.0], [81.7, 16016.0], [81.8, 16016.0], [81.9, 16016.0], [82.0, 16037.0], [82.1, 16037.0], [82.2, 16037.0], [82.3, 16037.0], [82.4, 16037.0], [82.5, 16037.0], [82.6, 16037.0], [82.7, 16037.0], [82.8, 16037.0], [82.9, 16037.0], [83.0, 16048.0], [83.1, 16048.0], [83.2, 16048.0], [83.3, 16048.0], [83.4, 16048.0], [83.5, 16048.0], [83.6, 16048.0], [83.7, 16048.0], [83.8, 16048.0], [83.9, 16048.0], [84.0, 16069.0], [84.1, 16069.0], [84.2, 16069.0], [84.3, 16069.0], [84.4, 16069.0], [84.5, 16069.0], [84.6, 16069.0], [84.7, 16069.0], [84.8, 16069.0], [84.9, 16069.0], [85.0, 16081.0], [85.1, 16081.0], [85.2, 16081.0], [85.3, 16081.0], [85.4, 16081.0], [85.5, 16081.0], [85.6, 16081.0], [85.7, 16081.0], [85.8, 16081.0], [85.9, 16081.0], [86.0, 16114.0], [86.1, 16114.0], [86.2, 16114.0], [86.3, 16114.0], [86.4, 16114.0], [86.5, 16114.0], [86.6, 16114.0], [86.7, 16114.0], [86.8, 16114.0], [86.9, 16114.0], [87.0, 16182.0], [87.1, 16182.0], [87.2, 16182.0], [87.3, 16182.0], [87.4, 16182.0], [87.5, 16182.0], [87.6, 16182.0], [87.7, 16182.0], [87.8, 16182.0], [87.9, 16182.0], [88.0, 16192.0], [88.1, 16192.0], [88.2, 16192.0], [88.3, 16192.0], [88.4, 16192.0], [88.5, 16192.0], [88.6, 16192.0], [88.7, 16192.0], [88.8, 16192.0], [88.9, 16192.0], [89.0, 16198.0], [89.1, 16198.0], [89.2, 16198.0], [89.3, 16198.0], [89.4, 16198.0], [89.5, 16198.0], [89.6, 16198.0], [89.7, 16198.0], [89.8, 16198.0], [89.9, 16198.0], [90.0, 16283.0], [90.1, 16283.0], [90.2, 16283.0], [90.3, 16283.0], [90.4, 16283.0], [90.5, 16283.0], [90.6, 16283.0], [90.7, 16283.0], [90.8, 16283.0], [90.9, 16283.0], [91.0, 16430.0], [91.1, 16430.0], [91.2, 16430.0], [91.3, 16430.0], [91.4, 16430.0], [91.5, 16430.0], [91.6, 16430.0], [91.7, 16430.0], [91.8, 16430.0], [91.9, 16430.0], [92.0, 16439.0], [92.1, 16439.0], [92.2, 16439.0], [92.3, 16439.0], [92.4, 16439.0], [92.5, 16439.0], [92.6, 16439.0], [92.7, 16439.0], [92.8, 16439.0], [92.9, 16439.0], [93.0, 16452.0], [93.1, 16452.0], [93.2, 16452.0], [93.3, 16452.0], [93.4, 16452.0], [93.5, 16452.0], [93.6, 16452.0], [93.7, 16452.0], [93.8, 16452.0], [93.9, 16452.0], [94.0, 16563.0], [94.1, 16563.0], [94.2, 16563.0], [94.3, 16563.0], [94.4, 16563.0], [94.5, 16563.0], [94.6, 16563.0], [94.7, 16563.0], [94.8, 16563.0], [94.9, 16563.0], [95.0, 16668.0], [95.1, 16668.0], [95.2, 16668.0], [95.3, 16668.0], [95.4, 16668.0], [95.5, 16668.0], [95.6, 16668.0], [95.7, 16668.0], [95.8, 16668.0], [95.9, 16668.0], [96.0, 16674.0], [96.1, 16674.0], [96.2, 16674.0], [96.3, 16674.0], [96.4, 16674.0], [96.5, 16674.0], [96.6, 16674.0], [96.7, 16674.0], [96.8, 16674.0], [96.9, 16674.0], [97.0, 16676.0], [97.1, 16676.0], [97.2, 16676.0], [97.3, 16676.0], [97.4, 16676.0], [97.5, 16676.0], [97.6, 16676.0], [97.7, 16676.0], [97.8, 16676.0], [97.9, 16676.0], [98.0, 16734.0], [98.1, 16734.0], [98.2, 16734.0], [98.3, 16734.0], [98.4, 16734.0], [98.5, 16734.0], [98.6, 16734.0], [98.7, 16734.0], [98.8, 16734.0], [98.9, 16734.0], [99.0, 16878.0], [99.1, 16878.0], [99.2, 16878.0], [99.3, 16878.0], [99.4, 16878.0], [99.5, 16878.0], [99.6, 16878.0], [99.7, 16878.0], [99.8, 16878.0], [99.9, 16878.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 14200.0, "maxY": 10.0, "series": [{"data": [[14300.0, 7.0], [14200.0, 2.0], [14500.0, 4.0], [14800.0, 5.0], [14700.0, 6.0], [14600.0, 4.0], [14900.0, 8.0], [15000.0, 3.0], [15100.0, 10.0], [15200.0, 5.0], [15300.0, 1.0], [15400.0, 10.0], [15500.0, 3.0], [15700.0, 5.0], [15600.0, 2.0], [15800.0, 3.0], [15900.0, 3.0], [16000.0, 5.0], [16100.0, 4.0], [16200.0, 1.0], [16400.0, 3.0], [16500.0, 1.0], [16600.0, 3.0], [16800.0, 1.0], [16700.0, 1.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.759999999999984, "minX": 1.74984378E12, "maxY": 50.759999999999984, "series": [{"data": [[1.74984378E12, 50.759999999999984]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74984378E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14301.0, "minX": 1.0, "maxY": 16878.0, "series": [{"data": [[2.0, 16878.0], [3.0, 16283.0], [4.0, 16668.0], [5.0, 16676.0], [6.0, 16048.0], [7.0, 15877.0], [8.0, 16430.0], [11.0, 16329.666666666666], [12.0, 16563.0], [13.0, 16114.0], [16.0, 16227.0], [17.0, 15794.0], [19.0, 15962.5], [20.0, 15540.0], [21.0, 15944.0], [22.0, 16198.0], [23.0, 15604.0], [24.0, 15964.0], [25.0, 16016.0], [26.0, 15427.0], [27.0, 15721.0], [28.0, 15258.0], [29.0, 15518.0], [30.0, 16081.0], [31.0, 15471.0], [33.0, 15981.0], [32.0, 16069.0], [35.0, 15271.0], [34.0, 15874.0], [37.0, 15280.0], [36.0, 15170.0], [39.0, 15788.0], [38.0, 15436.0], [41.0, 15162.0], [40.0, 15651.0], [43.0, 15355.0], [45.0, 15106.0], [44.0, 14964.0], [47.0, 15457.5], [48.0, 15176.0], [51.0, 15485.0], [50.0, 15524.5], [53.0, 15087.0], [54.0, 14765.0], [57.0, 14830.0], [56.0, 15417.5], [59.0, 14541.0], [58.0, 15400.0], [61.0, 15046.0], [60.0, 14991.0], [63.0, 15388.0], [62.0, 14750.0], [67.0, 14695.0], [66.0, 15119.0], [65.0, 14839.0], [64.0, 15230.0], [71.0, 14631.0], [70.0, 14854.0], [69.0, 14978.0], [68.0, 14939.0], [75.0, 14728.0], [74.0, 15117.0], [73.0, 15250.0], [72.0, 15040.0], [79.0, 14911.0], [78.0, 14659.0], [77.0, 14712.0], [76.0, 15124.0], [83.0, 15108.0], [82.0, 15150.0], [81.0, 14319.0], [80.0, 14395.0], [87.0, 14595.0], [84.0, 14320.0], [90.0, 14301.0], [89.0, 14461.5], [94.0, 14818.0], [93.0, 14425.666666666666], [96.0, 14908.0], [100.0, 14622.25], [1.0, 16734.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[50.759999999999984, 15337.360000000004]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 248.33333333333334, "minX": 1.74984378E12, "maxY": 1505.0, "series": [{"data": [[1.74984378E12, 1505.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74984378E12, 248.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74984378E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 15337.360000000004, "minX": 1.74984378E12, "maxY": 15337.360000000004, "series": [{"data": [[1.74984378E12, 15337.360000000004]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74984378E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 15317.27, "minX": 1.74984378E12, "maxY": 15317.27, "series": [{"data": [[1.74984378E12, 15317.27]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74984378E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 378.39, "minX": 1.74984378E12, "maxY": 378.39, "series": [{"data": [[1.74984378E12, 378.39]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74984378E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 14230.0, "minX": 1.74984378E12, "maxY": 16878.0, "series": [{"data": [[1.74984378E12, 16878.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74984378E12, 16274.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74984378E12, 16876.559999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74984378E12, 16662.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.74984378E12, 14230.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74984378E12, 15240.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74984378E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14712.0, "minX": 21.0, "maxY": 16192.0, "series": [{"data": [[21.0, 16192.0], [48.0, 15394.0], [31.0, 14712.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14658.0, "minX": 21.0, "maxY": 16186.0, "series": [{"data": [[21.0, 16186.0], [48.0, 15373.0], [31.0, 14658.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.74984378E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.74984378E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74984378E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.74984378E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.74984378E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74984378E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.74984378E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.74984378E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74984378E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.74984378E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.74984378E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74984378E12, "title": "Total Transactions Per Second"}},
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

