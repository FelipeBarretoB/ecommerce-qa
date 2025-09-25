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
        data: {"result": {"minY": 134309.0, "minX": 0.0, "maxY": 135176.0, "series": [{"data": [[0.0, 134309.0], [0.1, 134309.0], [0.2, 134309.0], [0.3, 134309.0], [0.4, 134309.0], [0.5, 134309.0], [0.6, 134309.0], [0.7, 134309.0], [0.8, 134309.0], [0.9, 134309.0], [1.0, 134314.0], [1.1, 134314.0], [1.2, 134314.0], [1.3, 134314.0], [1.4, 134314.0], [1.5, 134314.0], [1.6, 134314.0], [1.7, 134314.0], [1.8, 134314.0], [1.9, 134314.0], [2.0, 134326.0], [2.1, 134326.0], [2.2, 134326.0], [2.3, 134326.0], [2.4, 134326.0], [2.5, 134326.0], [2.6, 134326.0], [2.7, 134326.0], [2.8, 134326.0], [2.9, 134326.0], [3.0, 134339.0], [3.1, 134339.0], [3.2, 134339.0], [3.3, 134339.0], [3.4, 134339.0], [3.5, 134339.0], [3.6, 134339.0], [3.7, 134339.0], [3.8, 134339.0], [3.9, 134339.0], [4.0, 134349.0], [4.1, 134349.0], [4.2, 134349.0], [4.3, 134349.0], [4.4, 134349.0], [4.5, 134349.0], [4.6, 134349.0], [4.7, 134349.0], [4.8, 134349.0], [4.9, 134349.0], [5.0, 134359.0], [5.1, 134359.0], [5.2, 134359.0], [5.3, 134359.0], [5.4, 134359.0], [5.5, 134359.0], [5.6, 134359.0], [5.7, 134359.0], [5.8, 134359.0], [5.9, 134359.0], [6.0, 134369.0], [6.1, 134369.0], [6.2, 134369.0], [6.3, 134369.0], [6.4, 134369.0], [6.5, 134369.0], [6.6, 134369.0], [6.7, 134369.0], [6.8, 134369.0], [6.9, 134369.0], [7.0, 134378.0], [7.1, 134378.0], [7.2, 134378.0], [7.3, 134378.0], [7.4, 134378.0], [7.5, 134378.0], [7.6, 134378.0], [7.7, 134378.0], [7.8, 134378.0], [7.9, 134378.0], [8.0, 134386.0], [8.1, 134386.0], [8.2, 134386.0], [8.3, 134386.0], [8.4, 134386.0], [8.5, 134386.0], [8.6, 134386.0], [8.7, 134386.0], [8.8, 134386.0], [8.9, 134386.0], [9.0, 134394.0], [9.1, 134394.0], [9.2, 134394.0], [9.3, 134394.0], [9.4, 134394.0], [9.5, 134394.0], [9.6, 134394.0], [9.7, 134394.0], [9.8, 134394.0], [9.9, 134394.0], [10.0, 134406.0], [10.1, 134406.0], [10.2, 134406.0], [10.3, 134406.0], [10.4, 134406.0], [10.5, 134406.0], [10.6, 134406.0], [10.7, 134406.0], [10.8, 134406.0], [10.9, 134406.0], [11.0, 134416.0], [11.1, 134416.0], [11.2, 134416.0], [11.3, 134416.0], [11.4, 134416.0], [11.5, 134416.0], [11.6, 134416.0], [11.7, 134416.0], [11.8, 134416.0], [11.9, 134416.0], [12.0, 134424.0], [12.1, 134424.0], [12.2, 134424.0], [12.3, 134424.0], [12.4, 134424.0], [12.5, 134424.0], [12.6, 134424.0], [12.7, 134424.0], [12.8, 134424.0], [12.9, 134424.0], [13.0, 134432.0], [13.1, 134432.0], [13.2, 134432.0], [13.3, 134432.0], [13.4, 134432.0], [13.5, 134432.0], [13.6, 134432.0], [13.7, 134432.0], [13.8, 134432.0], [13.9, 134432.0], [14.0, 134444.0], [14.1, 134444.0], [14.2, 134444.0], [14.3, 134444.0], [14.4, 134444.0], [14.5, 134444.0], [14.6, 134444.0], [14.7, 134444.0], [14.8, 134444.0], [14.9, 134444.0], [15.0, 134457.0], [15.1, 134457.0], [15.2, 134457.0], [15.3, 134457.0], [15.4, 134457.0], [15.5, 134457.0], [15.6, 134457.0], [15.7, 134457.0], [15.8, 134457.0], [15.9, 134457.0], [16.0, 134466.0], [16.1, 134466.0], [16.2, 134466.0], [16.3, 134466.0], [16.4, 134466.0], [16.5, 134466.0], [16.6, 134466.0], [16.7, 134466.0], [16.8, 134466.0], [16.9, 134466.0], [17.0, 134477.0], [17.1, 134477.0], [17.2, 134477.0], [17.3, 134477.0], [17.4, 134477.0], [17.5, 134477.0], [17.6, 134477.0], [17.7, 134477.0], [17.8, 134477.0], [17.9, 134477.0], [18.0, 134487.0], [18.1, 134487.0], [18.2, 134487.0], [18.3, 134487.0], [18.4, 134487.0], [18.5, 134487.0], [18.6, 134487.0], [18.7, 134487.0], [18.8, 134487.0], [18.9, 134487.0], [19.0, 134496.0], [19.1, 134496.0], [19.2, 134496.0], [19.3, 134496.0], [19.4, 134496.0], [19.5, 134496.0], [19.6, 134496.0], [19.7, 134496.0], [19.8, 134496.0], [19.9, 134496.0], [20.0, 134507.0], [20.1, 134507.0], [20.2, 134507.0], [20.3, 134507.0], [20.4, 134507.0], [20.5, 134507.0], [20.6, 134507.0], [20.7, 134507.0], [20.8, 134507.0], [20.9, 134507.0], [21.0, 134517.0], [21.1, 134517.0], [21.2, 134517.0], [21.3, 134517.0], [21.4, 134517.0], [21.5, 134517.0], [21.6, 134517.0], [21.7, 134517.0], [21.8, 134517.0], [21.9, 134517.0], [22.0, 134526.0], [22.1, 134526.0], [22.2, 134526.0], [22.3, 134526.0], [22.4, 134526.0], [22.5, 134526.0], [22.6, 134526.0], [22.7, 134526.0], [22.8, 134526.0], [22.9, 134526.0], [23.0, 134536.0], [23.1, 134536.0], [23.2, 134536.0], [23.3, 134536.0], [23.4, 134536.0], [23.5, 134536.0], [23.6, 134536.0], [23.7, 134536.0], [23.8, 134536.0], [23.9, 134536.0], [24.0, 134547.0], [24.1, 134547.0], [24.2, 134547.0], [24.3, 134547.0], [24.4, 134547.0], [24.5, 134547.0], [24.6, 134547.0], [24.7, 134547.0], [24.8, 134547.0], [24.9, 134547.0], [25.0, 134556.0], [25.1, 134556.0], [25.2, 134556.0], [25.3, 134556.0], [25.4, 134556.0], [25.5, 134556.0], [25.6, 134556.0], [25.7, 134556.0], [25.8, 134556.0], [25.9, 134556.0], [26.0, 134566.0], [26.1, 134566.0], [26.2, 134566.0], [26.3, 134566.0], [26.4, 134566.0], [26.5, 134566.0], [26.6, 134566.0], [26.7, 134566.0], [26.8, 134566.0], [26.9, 134566.0], [27.0, 134575.0], [27.1, 134575.0], [27.2, 134575.0], [27.3, 134575.0], [27.4, 134575.0], [27.5, 134575.0], [27.6, 134575.0], [27.7, 134575.0], [27.8, 134575.0], [27.9, 134575.0], [28.0, 134586.0], [28.1, 134586.0], [28.2, 134586.0], [28.3, 134586.0], [28.4, 134586.0], [28.5, 134586.0], [28.6, 134586.0], [28.7, 134586.0], [28.8, 134586.0], [28.9, 134586.0], [29.0, 134596.0], [29.1, 134596.0], [29.2, 134596.0], [29.3, 134596.0], [29.4, 134596.0], [29.5, 134596.0], [29.6, 134596.0], [29.7, 134596.0], [29.8, 134596.0], [29.9, 134596.0], [30.0, 134609.0], [30.1, 134609.0], [30.2, 134609.0], [30.3, 134609.0], [30.4, 134609.0], [30.5, 134609.0], [30.6, 134609.0], [30.7, 134609.0], [30.8, 134609.0], [30.9, 134609.0], [31.0, 134617.0], [31.1, 134617.0], [31.2, 134617.0], [31.3, 134617.0], [31.4, 134617.0], [31.5, 134617.0], [31.6, 134617.0], [31.7, 134617.0], [31.8, 134617.0], [31.9, 134617.0], [32.0, 134630.0], [32.1, 134630.0], [32.2, 134630.0], [32.3, 134630.0], [32.4, 134630.0], [32.5, 134630.0], [32.6, 134630.0], [32.7, 134630.0], [32.8, 134630.0], [32.9, 134630.0], [33.0, 134639.0], [33.1, 134639.0], [33.2, 134639.0], [33.3, 134639.0], [33.4, 134639.0], [33.5, 134639.0], [33.6, 134639.0], [33.7, 134639.0], [33.8, 134639.0], [33.9, 134639.0], [34.0, 134647.0], [34.1, 134647.0], [34.2, 134647.0], [34.3, 134647.0], [34.4, 134647.0], [34.5, 134647.0], [34.6, 134647.0], [34.7, 134647.0], [34.8, 134647.0], [34.9, 134647.0], [35.0, 134658.0], [35.1, 134658.0], [35.2, 134658.0], [35.3, 134658.0], [35.4, 134658.0], [35.5, 134658.0], [35.6, 134658.0], [35.7, 134658.0], [35.8, 134658.0], [35.9, 134658.0], [36.0, 134667.0], [36.1, 134667.0], [36.2, 134667.0], [36.3, 134667.0], [36.4, 134667.0], [36.5, 134667.0], [36.6, 134667.0], [36.7, 134667.0], [36.8, 134667.0], [36.9, 134667.0], [37.0, 134678.0], [37.1, 134678.0], [37.2, 134678.0], [37.3, 134678.0], [37.4, 134678.0], [37.5, 134678.0], [37.6, 134678.0], [37.7, 134678.0], [37.8, 134678.0], [37.9, 134678.0], [38.0, 134687.0], [38.1, 134687.0], [38.2, 134687.0], [38.3, 134687.0], [38.4, 134687.0], [38.5, 134687.0], [38.6, 134687.0], [38.7, 134687.0], [38.8, 134687.0], [38.9, 134687.0], [39.0, 134697.0], [39.1, 134697.0], [39.2, 134697.0], [39.3, 134697.0], [39.4, 134697.0], [39.5, 134697.0], [39.6, 134697.0], [39.7, 134697.0], [39.8, 134697.0], [39.9, 134697.0], [40.0, 134707.0], [40.1, 134707.0], [40.2, 134707.0], [40.3, 134707.0], [40.4, 134707.0], [40.5, 134707.0], [40.6, 134707.0], [40.7, 134707.0], [40.8, 134707.0], [40.9, 134707.0], [41.0, 134716.0], [41.1, 134716.0], [41.2, 134716.0], [41.3, 134716.0], [41.4, 134716.0], [41.5, 134716.0], [41.6, 134716.0], [41.7, 134716.0], [41.8, 134716.0], [41.9, 134716.0], [42.0, 134725.0], [42.1, 134725.0], [42.2, 134725.0], [42.3, 134725.0], [42.4, 134725.0], [42.5, 134725.0], [42.6, 134725.0], [42.7, 134725.0], [42.8, 134725.0], [42.9, 134725.0], [43.0, 134735.0], [43.1, 134735.0], [43.2, 134735.0], [43.3, 134735.0], [43.4, 134735.0], [43.5, 134735.0], [43.6, 134735.0], [43.7, 134735.0], [43.8, 134735.0], [43.9, 134735.0], [44.0, 134749.0], [44.1, 134749.0], [44.2, 134749.0], [44.3, 134749.0], [44.4, 134749.0], [44.5, 134749.0], [44.6, 134749.0], [44.7, 134749.0], [44.8, 134749.0], [44.9, 134749.0], [45.0, 134761.0], [45.1, 134761.0], [45.2, 134761.0], [45.3, 134761.0], [45.4, 134761.0], [45.5, 134761.0], [45.6, 134761.0], [45.7, 134761.0], [45.8, 134761.0], [45.9, 134761.0], [46.0, 134766.0], [46.1, 134766.0], [46.2, 134766.0], [46.3, 134766.0], [46.4, 134766.0], [46.5, 134766.0], [46.6, 134766.0], [46.7, 134766.0], [46.8, 134766.0], [46.9, 134766.0], [47.0, 134776.0], [47.1, 134776.0], [47.2, 134776.0], [47.3, 134776.0], [47.4, 134776.0], [47.5, 134776.0], [47.6, 134776.0], [47.7, 134776.0], [47.8, 134776.0], [47.9, 134776.0], [48.0, 134789.0], [48.1, 134789.0], [48.2, 134789.0], [48.3, 134789.0], [48.4, 134789.0], [48.5, 134789.0], [48.6, 134789.0], [48.7, 134789.0], [48.8, 134789.0], [48.9, 134789.0], [49.0, 134795.0], [49.1, 134795.0], [49.2, 134795.0], [49.3, 134795.0], [49.4, 134795.0], [49.5, 134795.0], [49.6, 134795.0], [49.7, 134795.0], [49.8, 134795.0], [49.9, 134795.0], [50.0, 134809.0], [50.1, 134809.0], [50.2, 134809.0], [50.3, 134809.0], [50.4, 134809.0], [50.5, 134809.0], [50.6, 134809.0], [50.7, 134809.0], [50.8, 134809.0], [50.9, 134809.0], [51.0, 134815.0], [51.1, 134815.0], [51.2, 134815.0], [51.3, 134815.0], [51.4, 134815.0], [51.5, 134815.0], [51.6, 134815.0], [51.7, 134815.0], [51.8, 134815.0], [51.9, 134815.0], [52.0, 134828.0], [52.1, 134828.0], [52.2, 134828.0], [52.3, 134828.0], [52.4, 134828.0], [52.5, 134828.0], [52.6, 134828.0], [52.7, 134828.0], [52.8, 134828.0], [52.9, 134828.0], [53.0, 134835.0], [53.1, 134835.0], [53.2, 134835.0], [53.3, 134835.0], [53.4, 134835.0], [53.5, 134835.0], [53.6, 134835.0], [53.7, 134835.0], [53.8, 134835.0], [53.9, 134835.0], [54.0, 134846.0], [54.1, 134846.0], [54.2, 134846.0], [54.3, 134846.0], [54.4, 134846.0], [54.5, 134846.0], [54.6, 134846.0], [54.7, 134846.0], [54.8, 134846.0], [54.9, 134846.0], [55.0, 134857.0], [55.1, 134857.0], [55.2, 134857.0], [55.3, 134857.0], [55.4, 134857.0], [55.5, 134857.0], [55.6, 134857.0], [55.7, 134857.0], [55.8, 134857.0], [55.9, 134857.0], [56.0, 134865.0], [56.1, 134865.0], [56.2, 134865.0], [56.3, 134865.0], [56.4, 134865.0], [56.5, 134865.0], [56.6, 134865.0], [56.7, 134865.0], [56.8, 134865.0], [56.9, 134865.0], [57.0, 134879.0], [57.1, 134879.0], [57.2, 134879.0], [57.3, 134879.0], [57.4, 134879.0], [57.5, 134879.0], [57.6, 134879.0], [57.7, 134879.0], [57.8, 134879.0], [57.9, 134879.0], [58.0, 134888.0], [58.1, 134888.0], [58.2, 134888.0], [58.3, 134888.0], [58.4, 134888.0], [58.5, 134888.0], [58.6, 134888.0], [58.7, 134888.0], [58.8, 134888.0], [58.9, 134888.0], [59.0, 134896.0], [59.1, 134896.0], [59.2, 134896.0], [59.3, 134896.0], [59.4, 134896.0], [59.5, 134896.0], [59.6, 134896.0], [59.7, 134896.0], [59.8, 134896.0], [59.9, 134896.0], [60.0, 134909.0], [60.1, 134909.0], [60.2, 134909.0], [60.3, 134909.0], [60.4, 134909.0], [60.5, 134909.0], [60.6, 134909.0], [60.7, 134909.0], [60.8, 134909.0], [60.9, 134909.0], [61.0, 134918.0], [61.1, 134918.0], [61.2, 134918.0], [61.3, 134918.0], [61.4, 134918.0], [61.5, 134918.0], [61.6, 134918.0], [61.7, 134918.0], [61.8, 134918.0], [61.9, 134918.0], [62.0, 134928.0], [62.1, 134928.0], [62.2, 134928.0], [62.3, 134928.0], [62.4, 134928.0], [62.5, 134928.0], [62.6, 134928.0], [62.7, 134928.0], [62.8, 134928.0], [62.9, 134928.0], [63.0, 134937.0], [63.1, 134937.0], [63.2, 134937.0], [63.3, 134937.0], [63.4, 134937.0], [63.5, 134937.0], [63.6, 134937.0], [63.7, 134937.0], [63.8, 134937.0], [63.9, 134937.0], [64.0, 134948.0], [64.1, 134948.0], [64.2, 134948.0], [64.3, 134948.0], [64.4, 134948.0], [64.5, 134948.0], [64.6, 134948.0], [64.7, 134948.0], [64.8, 134948.0], [64.9, 134948.0], [65.0, 134959.0], [65.1, 134959.0], [65.2, 134959.0], [65.3, 134959.0], [65.4, 134959.0], [65.5, 134959.0], [65.6, 134959.0], [65.7, 134959.0], [65.8, 134959.0], [65.9, 134959.0], [66.0, 134969.0], [66.1, 134969.0], [66.2, 134969.0], [66.3, 134969.0], [66.4, 134969.0], [66.5, 134969.0], [66.6, 134969.0], [66.7, 134969.0], [66.8, 134969.0], [66.9, 134969.0], [67.0, 134979.0], [67.1, 134979.0], [67.2, 134979.0], [67.3, 134979.0], [67.4, 134979.0], [67.5, 134979.0], [67.6, 134979.0], [67.7, 134979.0], [67.8, 134979.0], [67.9, 134979.0], [68.0, 134987.0], [68.1, 134987.0], [68.2, 134987.0], [68.3, 134987.0], [68.4, 134987.0], [68.5, 134987.0], [68.6, 134987.0], [68.7, 134987.0], [68.8, 134987.0], [68.9, 134987.0], [69.0, 134996.0], [69.1, 134996.0], [69.2, 134996.0], [69.3, 134996.0], [69.4, 134996.0], [69.5, 134996.0], [69.6, 134996.0], [69.7, 134996.0], [69.8, 134996.0], [69.9, 134996.0], [70.0, 135008.0], [70.1, 135008.0], [70.2, 135008.0], [70.3, 135008.0], [70.4, 135008.0], [70.5, 135008.0], [70.6, 135008.0], [70.7, 135008.0], [70.8, 135008.0], [70.9, 135008.0], [71.0, 135016.0], [71.1, 135016.0], [71.2, 135016.0], [71.3, 135016.0], [71.4, 135016.0], [71.5, 135016.0], [71.6, 135016.0], [71.7, 135016.0], [71.8, 135016.0], [71.9, 135016.0], [72.0, 135028.0], [72.1, 135028.0], [72.2, 135028.0], [72.3, 135028.0], [72.4, 135028.0], [72.5, 135028.0], [72.6, 135028.0], [72.7, 135028.0], [72.8, 135028.0], [72.9, 135028.0], [73.0, 135037.0], [73.1, 135037.0], [73.2, 135037.0], [73.3, 135037.0], [73.4, 135037.0], [73.5, 135037.0], [73.6, 135037.0], [73.7, 135037.0], [73.8, 135037.0], [73.9, 135037.0], [74.0, 135047.0], [74.1, 135047.0], [74.2, 135047.0], [74.3, 135047.0], [74.4, 135047.0], [74.5, 135047.0], [74.6, 135047.0], [74.7, 135047.0], [74.8, 135047.0], [74.9, 135047.0], [75.0, 135058.0], [75.1, 135058.0], [75.2, 135058.0], [75.3, 135058.0], [75.4, 135058.0], [75.5, 135058.0], [75.6, 135058.0], [75.7, 135058.0], [75.8, 135058.0], [75.9, 135058.0], [76.0, 135068.0], [76.1, 135068.0], [76.2, 135068.0], [76.3, 135068.0], [76.4, 135068.0], [76.5, 135068.0], [76.6, 135068.0], [76.7, 135068.0], [76.8, 135068.0], [76.9, 135068.0], [77.0, 135077.0], [77.1, 135077.0], [77.2, 135077.0], [77.3, 135077.0], [77.4, 135077.0], [77.5, 135077.0], [77.6, 135077.0], [77.7, 135077.0], [77.8, 135077.0], [77.9, 135077.0], [78.0, 135086.0], [78.1, 135086.0], [78.2, 135086.0], [78.3, 135086.0], [78.4, 135086.0], [78.5, 135086.0], [78.6, 135086.0], [78.7, 135086.0], [78.8, 135086.0], [78.9, 135086.0], [79.0, 135097.0], [79.1, 135097.0], [79.2, 135097.0], [79.3, 135097.0], [79.4, 135097.0], [79.5, 135097.0], [79.6, 135097.0], [79.7, 135097.0], [79.8, 135097.0], [79.9, 135097.0], [80.0, 135108.0], [80.1, 135108.0], [80.2, 135108.0], [80.3, 135108.0], [80.4, 135108.0], [80.5, 135108.0], [80.6, 135108.0], [80.7, 135108.0], [80.8, 135108.0], [80.9, 135108.0], [81.0, 135116.0], [81.1, 135116.0], [81.2, 135116.0], [81.3, 135116.0], [81.4, 135116.0], [81.5, 135116.0], [81.6, 135116.0], [81.7, 135116.0], [81.8, 135116.0], [81.9, 135116.0], [82.0, 135128.0], [82.1, 135128.0], [82.2, 135128.0], [82.3, 135128.0], [82.4, 135128.0], [82.5, 135128.0], [82.6, 135128.0], [82.7, 135128.0], [82.8, 135128.0], [82.9, 135128.0], [83.0, 135136.0], [83.1, 135136.0], [83.2, 135136.0], [83.3, 135136.0], [83.4, 135136.0], [83.5, 135136.0], [83.6, 135136.0], [83.7, 135136.0], [83.8, 135136.0], [83.9, 135136.0], [84.0, 135146.0], [84.1, 135146.0], [84.2, 135146.0], [84.3, 135146.0], [84.4, 135146.0], [84.5, 135146.0], [84.6, 135146.0], [84.7, 135146.0], [84.8, 135146.0], [84.9, 135146.0], [85.0, 135157.0], [85.1, 135157.0], [85.2, 135157.0], [85.3, 135157.0], [85.4, 135157.0], [85.5, 135157.0], [85.6, 135157.0], [85.7, 135157.0], [85.8, 135157.0], [85.9, 135157.0], [86.0, 135167.0], [86.1, 135167.0], [86.2, 135167.0], [86.3, 135167.0], [86.4, 135167.0], [86.5, 135167.0], [86.6, 135167.0], [86.7, 135167.0], [86.8, 135167.0], [86.9, 135167.0], [87.0, 135170.0], [87.1, 135170.0], [87.2, 135170.0], [87.3, 135170.0], [87.4, 135170.0], [87.5, 135170.0], [87.6, 135170.0], [87.7, 135170.0], [87.8, 135170.0], [87.9, 135170.0], [88.0, 135171.0], [88.1, 135171.0], [88.2, 135171.0], [88.3, 135171.0], [88.4, 135171.0], [88.5, 135171.0], [88.6, 135171.0], [88.7, 135171.0], [88.8, 135171.0], [88.9, 135171.0], [89.0, 135171.0], [89.1, 135171.0], [89.2, 135171.0], [89.3, 135171.0], [89.4, 135171.0], [89.5, 135171.0], [89.6, 135171.0], [89.7, 135171.0], [89.8, 135171.0], [89.9, 135171.0], [90.0, 135171.0], [90.1, 135171.0], [90.2, 135171.0], [90.3, 135171.0], [90.4, 135171.0], [90.5, 135171.0], [90.6, 135171.0], [90.7, 135171.0], [90.8, 135171.0], [90.9, 135171.0], [91.0, 135172.0], [91.1, 135172.0], [91.2, 135172.0], [91.3, 135172.0], [91.4, 135172.0], [91.5, 135172.0], [91.6, 135172.0], [91.7, 135172.0], [91.8, 135172.0], [91.9, 135172.0], [92.0, 135172.0], [92.1, 135172.0], [92.2, 135172.0], [92.3, 135172.0], [92.4, 135172.0], [92.5, 135172.0], [92.6, 135172.0], [92.7, 135172.0], [92.8, 135172.0], [92.9, 135172.0], [93.0, 135173.0], [93.1, 135173.0], [93.2, 135173.0], [93.3, 135173.0], [93.4, 135173.0], [93.5, 135173.0], [93.6, 135173.0], [93.7, 135173.0], [93.8, 135173.0], [93.9, 135173.0], [94.0, 135173.0], [94.1, 135173.0], [94.2, 135173.0], [94.3, 135173.0], [94.4, 135173.0], [94.5, 135173.0], [94.6, 135173.0], [94.7, 135173.0], [94.8, 135173.0], [94.9, 135173.0], [95.0, 135173.0], [95.1, 135173.0], [95.2, 135173.0], [95.3, 135173.0], [95.4, 135173.0], [95.5, 135173.0], [95.6, 135173.0], [95.7, 135173.0], [95.8, 135173.0], [95.9, 135173.0], [96.0, 135173.0], [96.1, 135173.0], [96.2, 135173.0], [96.3, 135173.0], [96.4, 135173.0], [96.5, 135173.0], [96.6, 135173.0], [96.7, 135173.0], [96.8, 135173.0], [96.9, 135173.0], [97.0, 135173.0], [97.1, 135173.0], [97.2, 135173.0], [97.3, 135173.0], [97.4, 135173.0], [97.5, 135173.0], [97.6, 135173.0], [97.7, 135173.0], [97.8, 135173.0], [97.9, 135173.0], [98.0, 135174.0], [98.1, 135174.0], [98.2, 135174.0], [98.3, 135174.0], [98.4, 135174.0], [98.5, 135174.0], [98.6, 135174.0], [98.7, 135174.0], [98.8, 135174.0], [98.9, 135174.0], [99.0, 135176.0], [99.1, 135176.0], [99.2, 135176.0], [99.3, 135176.0], [99.4, 135176.0], [99.5, 135176.0], [99.6, 135176.0], [99.7, 135176.0], [99.8, 135176.0], [99.9, 135176.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 10.0, "minX": 134300.0, "maxY": 20.0, "series": [{"data": [[134700.0, 10.0], [134300.0, 10.0], [135100.0, 20.0], [134900.0, 10.0], [134800.0, 10.0], [135000.0, 10.0], [134600.0, 10.0], [134400.0, 10.0], [134500.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 135100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 56.75999999999999, "minX": 1.75876932E12, "maxY": 56.75999999999999, "series": [{"data": [[1.75876932E12, 56.75999999999999]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75876932E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 134314.0, "minX": 4.0, "maxY": 135172.0, "series": [{"data": [[4.0, 134596.0], [6.0, 134556.0], [8.0, 134716.0], [9.0, 134846.0], [10.0, 134495.0], [12.0, 134578.5], [13.0, 134496.0], [14.0, 134896.0], [15.0, 134314.0], [16.0, 134386.0], [18.0, 134766.0], [19.0, 134610.5], [22.0, 134506.0], [24.0, 134865.0], [25.0, 134680.5], [28.0, 134838.66666666666], [30.0, 134621.5], [33.0, 134937.0], [32.0, 134532.0], [35.0, 134457.0], [34.0, 134647.0], [37.0, 135016.0], [36.0, 135171.0], [39.0, 134566.5], [40.0, 135136.0], [43.0, 134687.0], [42.0, 134829.0], [45.0, 134996.0], [44.0, 135077.0], [46.0, 134697.0], [48.0, 135143.0], [50.0, 135014.0], [53.0, 135172.0], [52.0, 134811.5], [55.0, 135068.0], [54.0, 134444.0], [57.0, 134928.0], [56.0, 135058.0], [58.0, 135047.0], [61.0, 134918.0], [62.0, 135172.0], [67.0, 135008.0], [64.0, 134948.0], [71.0, 134796.5], [69.0, 134895.0], [75.0, 134828.0], [74.0, 134787.0], [73.0, 135008.5], [79.0, 134907.5], [77.0, 134832.5], [83.0, 134809.0], [81.0, 134794.0], [87.0, 135028.0], [86.0, 134981.5], [84.0, 134906.0], [89.0, 134783.5], [94.0, 135167.0], [96.0, 134879.0], [100.0, 134732.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[56.75999999999999, 134793.58000000002]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75876932E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75876932E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75876932E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75876932E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 134793.58000000002, "minX": 1.75876932E12, "maxY": 134793.58000000002, "series": [{"data": [[1.75876932E12, 134793.58000000002]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75876932E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75876932E12, "maxY": 4.9E-324, "series": [{"data": [[1.75876932E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75876932E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 134793.54999999993, "minX": 1.75876932E12, "maxY": 134793.54999999993, "series": [{"data": [[1.75876932E12, 134793.54999999993]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75876932E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 134802.0, "minX": 100.0, "maxY": 134802.0, "series": [{"data": [[100.0, 134802.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7587692E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7587692E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7587692E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75876932E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75876932E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75876932E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75876932E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75876932E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75876932E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75876932E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75876932E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75876932E12, "title": "Total Transactions Per Second"}},
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

