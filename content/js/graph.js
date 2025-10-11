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
        data: {"result": {"minY": 135075.0, "minX": 0.0, "maxY": 135953.0, "series": [{"data": [[0.0, 135075.0], [0.1, 135075.0], [0.2, 135075.0], [0.3, 135075.0], [0.4, 135075.0], [0.5, 135075.0], [0.6, 135075.0], [0.7, 135075.0], [0.8, 135075.0], [0.9, 135075.0], [1.0, 135085.0], [1.1, 135085.0], [1.2, 135085.0], [1.3, 135085.0], [1.4, 135085.0], [1.5, 135085.0], [1.6, 135085.0], [1.7, 135085.0], [1.8, 135085.0], [1.9, 135085.0], [2.0, 135102.0], [2.1, 135102.0], [2.2, 135102.0], [2.3, 135102.0], [2.4, 135102.0], [2.5, 135102.0], [2.6, 135102.0], [2.7, 135102.0], [2.8, 135102.0], [2.9, 135102.0], [3.0, 135108.0], [3.1, 135108.0], [3.2, 135108.0], [3.3, 135108.0], [3.4, 135108.0], [3.5, 135108.0], [3.6, 135108.0], [3.7, 135108.0], [3.8, 135108.0], [3.9, 135108.0], [4.0, 135110.0], [4.1, 135110.0], [4.2, 135110.0], [4.3, 135110.0], [4.4, 135110.0], [4.5, 135110.0], [4.6, 135110.0], [4.7, 135110.0], [4.8, 135110.0], [4.9, 135110.0], [5.0, 135129.0], [5.1, 135129.0], [5.2, 135129.0], [5.3, 135129.0], [5.4, 135129.0], [5.5, 135129.0], [5.6, 135129.0], [5.7, 135129.0], [5.8, 135129.0], [5.9, 135129.0], [6.0, 135140.0], [6.1, 135140.0], [6.2, 135140.0], [6.3, 135140.0], [6.4, 135140.0], [6.5, 135140.0], [6.6, 135140.0], [6.7, 135140.0], [6.8, 135140.0], [6.9, 135140.0], [7.0, 135147.0], [7.1, 135147.0], [7.2, 135147.0], [7.3, 135147.0], [7.4, 135147.0], [7.5, 135147.0], [7.6, 135147.0], [7.7, 135147.0], [7.8, 135147.0], [7.9, 135147.0], [8.0, 135158.0], [8.1, 135158.0], [8.2, 135158.0], [8.3, 135158.0], [8.4, 135158.0], [8.5, 135158.0], [8.6, 135158.0], [8.7, 135158.0], [8.8, 135158.0], [8.9, 135158.0], [9.0, 135169.0], [9.1, 135169.0], [9.2, 135169.0], [9.3, 135169.0], [9.4, 135169.0], [9.5, 135169.0], [9.6, 135169.0], [9.7, 135169.0], [9.8, 135169.0], [9.9, 135169.0], [10.0, 135177.0], [10.1, 135177.0], [10.2, 135177.0], [10.3, 135177.0], [10.4, 135177.0], [10.5, 135177.0], [10.6, 135177.0], [10.7, 135177.0], [10.8, 135177.0], [10.9, 135177.0], [11.0, 135178.0], [11.1, 135178.0], [11.2, 135178.0], [11.3, 135178.0], [11.4, 135178.0], [11.5, 135178.0], [11.6, 135178.0], [11.7, 135178.0], [11.8, 135178.0], [11.9, 135178.0], [12.0, 135204.0], [12.1, 135204.0], [12.2, 135204.0], [12.3, 135204.0], [12.4, 135204.0], [12.5, 135204.0], [12.6, 135204.0], [12.7, 135204.0], [12.8, 135204.0], [12.9, 135204.0], [13.0, 135205.0], [13.1, 135205.0], [13.2, 135205.0], [13.3, 135205.0], [13.4, 135205.0], [13.5, 135205.0], [13.6, 135205.0], [13.7, 135205.0], [13.8, 135205.0], [13.9, 135205.0], [14.0, 135213.0], [14.1, 135213.0], [14.2, 135213.0], [14.3, 135213.0], [14.4, 135213.0], [14.5, 135213.0], [14.6, 135213.0], [14.7, 135213.0], [14.8, 135213.0], [14.9, 135213.0], [15.0, 135213.0], [15.1, 135213.0], [15.2, 135213.0], [15.3, 135213.0], [15.4, 135213.0], [15.5, 135213.0], [15.6, 135213.0], [15.7, 135213.0], [15.8, 135213.0], [15.9, 135213.0], [16.0, 135216.0], [16.1, 135216.0], [16.2, 135216.0], [16.3, 135216.0], [16.4, 135216.0], [16.5, 135216.0], [16.6, 135216.0], [16.7, 135216.0], [16.8, 135216.0], [16.9, 135216.0], [17.0, 135235.0], [17.1, 135235.0], [17.2, 135235.0], [17.3, 135235.0], [17.4, 135235.0], [17.5, 135235.0], [17.6, 135235.0], [17.7, 135235.0], [17.8, 135235.0], [17.9, 135235.0], [18.0, 135240.0], [18.1, 135240.0], [18.2, 135240.0], [18.3, 135240.0], [18.4, 135240.0], [18.5, 135240.0], [18.6, 135240.0], [18.7, 135240.0], [18.8, 135240.0], [18.9, 135240.0], [19.0, 135254.0], [19.1, 135254.0], [19.2, 135254.0], [19.3, 135254.0], [19.4, 135254.0], [19.5, 135254.0], [19.6, 135254.0], [19.7, 135254.0], [19.8, 135254.0], [19.9, 135254.0], [20.0, 135272.0], [20.1, 135272.0], [20.2, 135272.0], [20.3, 135272.0], [20.4, 135272.0], [20.5, 135272.0], [20.6, 135272.0], [20.7, 135272.0], [20.8, 135272.0], [20.9, 135272.0], [21.0, 135276.0], [21.1, 135276.0], [21.2, 135276.0], [21.3, 135276.0], [21.4, 135276.0], [21.5, 135276.0], [21.6, 135276.0], [21.7, 135276.0], [21.8, 135276.0], [21.9, 135276.0], [22.0, 135278.0], [22.1, 135278.0], [22.2, 135278.0], [22.3, 135278.0], [22.4, 135278.0], [22.5, 135278.0], [22.6, 135278.0], [22.7, 135278.0], [22.8, 135278.0], [22.9, 135278.0], [23.0, 135285.0], [23.1, 135285.0], [23.2, 135285.0], [23.3, 135285.0], [23.4, 135285.0], [23.5, 135285.0], [23.6, 135285.0], [23.7, 135285.0], [23.8, 135285.0], [23.9, 135285.0], [24.0, 135286.0], [24.1, 135286.0], [24.2, 135286.0], [24.3, 135286.0], [24.4, 135286.0], [24.5, 135286.0], [24.6, 135286.0], [24.7, 135286.0], [24.8, 135286.0], [24.9, 135286.0], [25.0, 135291.0], [25.1, 135291.0], [25.2, 135291.0], [25.3, 135291.0], [25.4, 135291.0], [25.5, 135291.0], [25.6, 135291.0], [25.7, 135291.0], [25.8, 135291.0], [25.9, 135291.0], [26.0, 135315.0], [26.1, 135315.0], [26.2, 135315.0], [26.3, 135315.0], [26.4, 135315.0], [26.5, 135315.0], [26.6, 135315.0], [26.7, 135315.0], [26.8, 135315.0], [26.9, 135315.0], [27.0, 135332.0], [27.1, 135332.0], [27.2, 135332.0], [27.3, 135332.0], [27.4, 135332.0], [27.5, 135332.0], [27.6, 135332.0], [27.7, 135332.0], [27.8, 135332.0], [27.9, 135332.0], [28.0, 135349.0], [28.1, 135349.0], [28.2, 135349.0], [28.3, 135349.0], [28.4, 135349.0], [28.5, 135349.0], [28.6, 135349.0], [28.7, 135349.0], [28.8, 135349.0], [28.9, 135349.0], [29.0, 135358.0], [29.1, 135358.0], [29.2, 135358.0], [29.3, 135358.0], [29.4, 135358.0], [29.5, 135358.0], [29.6, 135358.0], [29.7, 135358.0], [29.8, 135358.0], [29.9, 135358.0], [30.0, 135367.0], [30.1, 135367.0], [30.2, 135367.0], [30.3, 135367.0], [30.4, 135367.0], [30.5, 135367.0], [30.6, 135367.0], [30.7, 135367.0], [30.8, 135367.0], [30.9, 135367.0], [31.0, 135382.0], [31.1, 135382.0], [31.2, 135382.0], [31.3, 135382.0], [31.4, 135382.0], [31.5, 135382.0], [31.6, 135382.0], [31.7, 135382.0], [31.8, 135382.0], [31.9, 135382.0], [32.0, 135390.0], [32.1, 135390.0], [32.2, 135390.0], [32.3, 135390.0], [32.4, 135390.0], [32.5, 135390.0], [32.6, 135390.0], [32.7, 135390.0], [32.8, 135390.0], [32.9, 135390.0], [33.0, 135406.0], [33.1, 135406.0], [33.2, 135406.0], [33.3, 135406.0], [33.4, 135406.0], [33.5, 135406.0], [33.6, 135406.0], [33.7, 135406.0], [33.8, 135406.0], [33.9, 135406.0], [34.0, 135414.0], [34.1, 135414.0], [34.2, 135414.0], [34.3, 135414.0], [34.4, 135414.0], [34.5, 135414.0], [34.6, 135414.0], [34.7, 135414.0], [34.8, 135414.0], [34.9, 135414.0], [35.0, 135415.0], [35.1, 135415.0], [35.2, 135415.0], [35.3, 135415.0], [35.4, 135415.0], [35.5, 135415.0], [35.6, 135415.0], [35.7, 135415.0], [35.8, 135415.0], [35.9, 135415.0], [36.0, 135424.0], [36.1, 135424.0], [36.2, 135424.0], [36.3, 135424.0], [36.4, 135424.0], [36.5, 135424.0], [36.6, 135424.0], [36.7, 135424.0], [36.8, 135424.0], [36.9, 135424.0], [37.0, 135424.0], [37.1, 135424.0], [37.2, 135424.0], [37.3, 135424.0], [37.4, 135424.0], [37.5, 135424.0], [37.6, 135424.0], [37.7, 135424.0], [37.8, 135424.0], [37.9, 135424.0], [38.0, 135449.0], [38.1, 135449.0], [38.2, 135449.0], [38.3, 135449.0], [38.4, 135449.0], [38.5, 135449.0], [38.6, 135449.0], [38.7, 135449.0], [38.8, 135449.0], [38.9, 135449.0], [39.0, 135474.0], [39.1, 135474.0], [39.2, 135474.0], [39.3, 135474.0], [39.4, 135474.0], [39.5, 135474.0], [39.6, 135474.0], [39.7, 135474.0], [39.8, 135474.0], [39.9, 135474.0], [40.0, 135480.0], [40.1, 135480.0], [40.2, 135480.0], [40.3, 135480.0], [40.4, 135480.0], [40.5, 135480.0], [40.6, 135480.0], [40.7, 135480.0], [40.8, 135480.0], [40.9, 135480.0], [41.0, 135485.0], [41.1, 135485.0], [41.2, 135485.0], [41.3, 135485.0], [41.4, 135485.0], [41.5, 135485.0], [41.6, 135485.0], [41.7, 135485.0], [41.8, 135485.0], [41.9, 135485.0], [42.0, 135487.0], [42.1, 135487.0], [42.2, 135487.0], [42.3, 135487.0], [42.4, 135487.0], [42.5, 135487.0], [42.6, 135487.0], [42.7, 135487.0], [42.8, 135487.0], [42.9, 135487.0], [43.0, 135496.0], [43.1, 135496.0], [43.2, 135496.0], [43.3, 135496.0], [43.4, 135496.0], [43.5, 135496.0], [43.6, 135496.0], [43.7, 135496.0], [43.8, 135496.0], [43.9, 135496.0], [44.0, 135502.0], [44.1, 135502.0], [44.2, 135502.0], [44.3, 135502.0], [44.4, 135502.0], [44.5, 135502.0], [44.6, 135502.0], [44.7, 135502.0], [44.8, 135502.0], [44.9, 135502.0], [45.0, 135503.0], [45.1, 135503.0], [45.2, 135503.0], [45.3, 135503.0], [45.4, 135503.0], [45.5, 135503.0], [45.6, 135503.0], [45.7, 135503.0], [45.8, 135503.0], [45.9, 135503.0], [46.0, 135504.0], [46.1, 135504.0], [46.2, 135504.0], [46.3, 135504.0], [46.4, 135504.0], [46.5, 135504.0], [46.6, 135504.0], [46.7, 135504.0], [46.8, 135504.0], [46.9, 135504.0], [47.0, 135512.0], [47.1, 135512.0], [47.2, 135512.0], [47.3, 135512.0], [47.4, 135512.0], [47.5, 135512.0], [47.6, 135512.0], [47.7, 135512.0], [47.8, 135512.0], [47.9, 135512.0], [48.0, 135542.0], [48.1, 135542.0], [48.2, 135542.0], [48.3, 135542.0], [48.4, 135542.0], [48.5, 135542.0], [48.6, 135542.0], [48.7, 135542.0], [48.8, 135542.0], [48.9, 135542.0], [49.0, 135560.0], [49.1, 135560.0], [49.2, 135560.0], [49.3, 135560.0], [49.4, 135560.0], [49.5, 135560.0], [49.6, 135560.0], [49.7, 135560.0], [49.8, 135560.0], [49.9, 135560.0], [50.0, 135565.0], [50.1, 135565.0], [50.2, 135565.0], [50.3, 135565.0], [50.4, 135565.0], [50.5, 135565.0], [50.6, 135565.0], [50.7, 135565.0], [50.8, 135565.0], [50.9, 135565.0], [51.0, 135568.0], [51.1, 135568.0], [51.2, 135568.0], [51.3, 135568.0], [51.4, 135568.0], [51.5, 135568.0], [51.6, 135568.0], [51.7, 135568.0], [51.8, 135568.0], [51.9, 135568.0], [52.0, 135578.0], [52.1, 135578.0], [52.2, 135578.0], [52.3, 135578.0], [52.4, 135578.0], [52.5, 135578.0], [52.6, 135578.0], [52.7, 135578.0], [52.8, 135578.0], [52.9, 135578.0], [53.0, 135590.0], [53.1, 135590.0], [53.2, 135590.0], [53.3, 135590.0], [53.4, 135590.0], [53.5, 135590.0], [53.6, 135590.0], [53.7, 135590.0], [53.8, 135590.0], [53.9, 135590.0], [54.0, 135595.0], [54.1, 135595.0], [54.2, 135595.0], [54.3, 135595.0], [54.4, 135595.0], [54.5, 135595.0], [54.6, 135595.0], [54.7, 135595.0], [54.8, 135595.0], [54.9, 135595.0], [55.0, 135605.0], [55.1, 135605.0], [55.2, 135605.0], [55.3, 135605.0], [55.4, 135605.0], [55.5, 135605.0], [55.6, 135605.0], [55.7, 135605.0], [55.8, 135605.0], [55.9, 135605.0], [56.0, 135613.0], [56.1, 135613.0], [56.2, 135613.0], [56.3, 135613.0], [56.4, 135613.0], [56.5, 135613.0], [56.6, 135613.0], [56.7, 135613.0], [56.8, 135613.0], [56.9, 135613.0], [57.0, 135625.0], [57.1, 135625.0], [57.2, 135625.0], [57.3, 135625.0], [57.4, 135625.0], [57.5, 135625.0], [57.6, 135625.0], [57.7, 135625.0], [57.8, 135625.0], [57.9, 135625.0], [58.0, 135632.0], [58.1, 135632.0], [58.2, 135632.0], [58.3, 135632.0], [58.4, 135632.0], [58.5, 135632.0], [58.6, 135632.0], [58.7, 135632.0], [58.8, 135632.0], [58.9, 135632.0], [59.0, 135638.0], [59.1, 135638.0], [59.2, 135638.0], [59.3, 135638.0], [59.4, 135638.0], [59.5, 135638.0], [59.6, 135638.0], [59.7, 135638.0], [59.8, 135638.0], [59.9, 135638.0], [60.0, 135645.0], [60.1, 135645.0], [60.2, 135645.0], [60.3, 135645.0], [60.4, 135645.0], [60.5, 135645.0], [60.6, 135645.0], [60.7, 135645.0], [60.8, 135645.0], [60.9, 135645.0], [61.0, 135656.0], [61.1, 135656.0], [61.2, 135656.0], [61.3, 135656.0], [61.4, 135656.0], [61.5, 135656.0], [61.6, 135656.0], [61.7, 135656.0], [61.8, 135656.0], [61.9, 135656.0], [62.0, 135696.0], [62.1, 135696.0], [62.2, 135696.0], [62.3, 135696.0], [62.4, 135696.0], [62.5, 135696.0], [62.6, 135696.0], [62.7, 135696.0], [62.8, 135696.0], [62.9, 135696.0], [63.0, 135704.0], [63.1, 135704.0], [63.2, 135704.0], [63.3, 135704.0], [63.4, 135704.0], [63.5, 135704.0], [63.6, 135704.0], [63.7, 135704.0], [63.8, 135704.0], [63.9, 135704.0], [64.0, 135705.0], [64.1, 135705.0], [64.2, 135705.0], [64.3, 135705.0], [64.4, 135705.0], [64.5, 135705.0], [64.6, 135705.0], [64.7, 135705.0], [64.8, 135705.0], [64.9, 135705.0], [65.0, 135707.0], [65.1, 135707.0], [65.2, 135707.0], [65.3, 135707.0], [65.4, 135707.0], [65.5, 135707.0], [65.6, 135707.0], [65.7, 135707.0], [65.8, 135707.0], [65.9, 135707.0], [66.0, 135711.0], [66.1, 135711.0], [66.2, 135711.0], [66.3, 135711.0], [66.4, 135711.0], [66.5, 135711.0], [66.6, 135711.0], [66.7, 135711.0], [66.8, 135711.0], [66.9, 135711.0], [67.0, 135715.0], [67.1, 135715.0], [67.2, 135715.0], [67.3, 135715.0], [67.4, 135715.0], [67.5, 135715.0], [67.6, 135715.0], [67.7, 135715.0], [67.8, 135715.0], [67.9, 135715.0], [68.0, 135740.0], [68.1, 135740.0], [68.2, 135740.0], [68.3, 135740.0], [68.4, 135740.0], [68.5, 135740.0], [68.6, 135740.0], [68.7, 135740.0], [68.8, 135740.0], [68.9, 135740.0], [69.0, 135759.0], [69.1, 135759.0], [69.2, 135759.0], [69.3, 135759.0], [69.4, 135759.0], [69.5, 135759.0], [69.6, 135759.0], [69.7, 135759.0], [69.8, 135759.0], [69.9, 135759.0], [70.0, 135767.0], [70.1, 135767.0], [70.2, 135767.0], [70.3, 135767.0], [70.4, 135767.0], [70.5, 135767.0], [70.6, 135767.0], [70.7, 135767.0], [70.8, 135767.0], [70.9, 135767.0], [71.0, 135785.0], [71.1, 135785.0], [71.2, 135785.0], [71.3, 135785.0], [71.4, 135785.0], [71.5, 135785.0], [71.6, 135785.0], [71.7, 135785.0], [71.8, 135785.0], [71.9, 135785.0], [72.0, 135787.0], [72.1, 135787.0], [72.2, 135787.0], [72.3, 135787.0], [72.4, 135787.0], [72.5, 135787.0], [72.6, 135787.0], [72.7, 135787.0], [72.8, 135787.0], [72.9, 135787.0], [73.0, 135792.0], [73.1, 135792.0], [73.2, 135792.0], [73.3, 135792.0], [73.4, 135792.0], [73.5, 135792.0], [73.6, 135792.0], [73.7, 135792.0], [73.8, 135792.0], [73.9, 135792.0], [74.0, 135802.0], [74.1, 135802.0], [74.2, 135802.0], [74.3, 135802.0], [74.4, 135802.0], [74.5, 135802.0], [74.6, 135802.0], [74.7, 135802.0], [74.8, 135802.0], [74.9, 135802.0], [75.0, 135826.0], [75.1, 135826.0], [75.2, 135826.0], [75.3, 135826.0], [75.4, 135826.0], [75.5, 135826.0], [75.6, 135826.0], [75.7, 135826.0], [75.8, 135826.0], [75.9, 135826.0], [76.0, 135835.0], [76.1, 135835.0], [76.2, 135835.0], [76.3, 135835.0], [76.4, 135835.0], [76.5, 135835.0], [76.6, 135835.0], [76.7, 135835.0], [76.8, 135835.0], [76.9, 135835.0], [77.0, 135843.0], [77.1, 135843.0], [77.2, 135843.0], [77.3, 135843.0], [77.4, 135843.0], [77.5, 135843.0], [77.6, 135843.0], [77.7, 135843.0], [77.8, 135843.0], [77.9, 135843.0], [78.0, 135850.0], [78.1, 135850.0], [78.2, 135850.0], [78.3, 135850.0], [78.4, 135850.0], [78.5, 135850.0], [78.6, 135850.0], [78.7, 135850.0], [78.8, 135850.0], [78.9, 135850.0], [79.0, 135853.0], [79.1, 135853.0], [79.2, 135853.0], [79.3, 135853.0], [79.4, 135853.0], [79.5, 135853.0], [79.6, 135853.0], [79.7, 135853.0], [79.8, 135853.0], [79.9, 135853.0], [80.0, 135874.0], [80.1, 135874.0], [80.2, 135874.0], [80.3, 135874.0], [80.4, 135874.0], [80.5, 135874.0], [80.6, 135874.0], [80.7, 135874.0], [80.8, 135874.0], [80.9, 135874.0], [81.0, 135876.0], [81.1, 135876.0], [81.2, 135876.0], [81.3, 135876.0], [81.4, 135876.0], [81.5, 135876.0], [81.6, 135876.0], [81.7, 135876.0], [81.8, 135876.0], [81.9, 135876.0], [82.0, 135882.0], [82.1, 135882.0], [82.2, 135882.0], [82.3, 135882.0], [82.4, 135882.0], [82.5, 135882.0], [82.6, 135882.0], [82.7, 135882.0], [82.8, 135882.0], [82.9, 135882.0], [83.0, 135895.0], [83.1, 135895.0], [83.2, 135895.0], [83.3, 135895.0], [83.4, 135895.0], [83.5, 135895.0], [83.6, 135895.0], [83.7, 135895.0], [83.8, 135895.0], [83.9, 135895.0], [84.0, 135896.0], [84.1, 135896.0], [84.2, 135896.0], [84.3, 135896.0], [84.4, 135896.0], [84.5, 135896.0], [84.6, 135896.0], [84.7, 135896.0], [84.8, 135896.0], [84.9, 135896.0], [85.0, 135899.0], [85.1, 135899.0], [85.2, 135899.0], [85.3, 135899.0], [85.4, 135899.0], [85.5, 135899.0], [85.6, 135899.0], [85.7, 135899.0], [85.8, 135899.0], [85.9, 135899.0], [86.0, 135913.0], [86.1, 135913.0], [86.2, 135913.0], [86.3, 135913.0], [86.4, 135913.0], [86.5, 135913.0], [86.6, 135913.0], [86.7, 135913.0], [86.8, 135913.0], [86.9, 135913.0], [87.0, 135917.0], [87.1, 135917.0], [87.2, 135917.0], [87.3, 135917.0], [87.4, 135917.0], [87.5, 135917.0], [87.6, 135917.0], [87.7, 135917.0], [87.8, 135917.0], [87.9, 135917.0], [88.0, 135917.0], [88.1, 135917.0], [88.2, 135917.0], [88.3, 135917.0], [88.4, 135917.0], [88.5, 135917.0], [88.6, 135917.0], [88.7, 135917.0], [88.8, 135917.0], [88.9, 135917.0], [89.0, 135919.0], [89.1, 135919.0], [89.2, 135919.0], [89.3, 135919.0], [89.4, 135919.0], [89.5, 135919.0], [89.6, 135919.0], [89.7, 135919.0], [89.8, 135919.0], [89.9, 135919.0], [90.0, 135919.0], [90.1, 135919.0], [90.2, 135919.0], [90.3, 135919.0], [90.4, 135919.0], [90.5, 135919.0], [90.6, 135919.0], [90.7, 135919.0], [90.8, 135919.0], [90.9, 135919.0], [91.0, 135923.0], [91.1, 135923.0], [91.2, 135923.0], [91.3, 135923.0], [91.4, 135923.0], [91.5, 135923.0], [91.6, 135923.0], [91.7, 135923.0], [91.8, 135923.0], [91.9, 135923.0], [92.0, 135925.0], [92.1, 135925.0], [92.2, 135925.0], [92.3, 135925.0], [92.4, 135925.0], [92.5, 135925.0], [92.6, 135925.0], [92.7, 135925.0], [92.8, 135925.0], [92.9, 135925.0], [93.0, 135932.0], [93.1, 135932.0], [93.2, 135932.0], [93.3, 135932.0], [93.4, 135932.0], [93.5, 135932.0], [93.6, 135932.0], [93.7, 135932.0], [93.8, 135932.0], [93.9, 135932.0], [94.0, 135935.0], [94.1, 135935.0], [94.2, 135935.0], [94.3, 135935.0], [94.4, 135935.0], [94.5, 135935.0], [94.6, 135935.0], [94.7, 135935.0], [94.8, 135935.0], [94.9, 135935.0], [95.0, 135938.0], [95.1, 135938.0], [95.2, 135938.0], [95.3, 135938.0], [95.4, 135938.0], [95.5, 135938.0], [95.6, 135938.0], [95.7, 135938.0], [95.8, 135938.0], [95.9, 135938.0], [96.0, 135943.0], [96.1, 135943.0], [96.2, 135943.0], [96.3, 135943.0], [96.4, 135943.0], [96.5, 135943.0], [96.6, 135943.0], [96.7, 135943.0], [96.8, 135943.0], [96.9, 135943.0], [97.0, 135946.0], [97.1, 135946.0], [97.2, 135946.0], [97.3, 135946.0], [97.4, 135946.0], [97.5, 135946.0], [97.6, 135946.0], [97.7, 135946.0], [97.8, 135946.0], [97.9, 135946.0], [98.0, 135949.0], [98.1, 135949.0], [98.2, 135949.0], [98.3, 135949.0], [98.4, 135949.0], [98.5, 135949.0], [98.6, 135949.0], [98.7, 135949.0], [98.8, 135949.0], [98.9, 135949.0], [99.0, 135953.0], [99.1, 135953.0], [99.2, 135953.0], [99.3, 135953.0], [99.4, 135953.0], [99.5, 135953.0], [99.6, 135953.0], [99.7, 135953.0], [99.8, 135953.0], [99.9, 135953.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 135000.0, "maxY": 14.0, "series": [{"data": [[135800.0, 12.0], [135600.0, 8.0], [135400.0, 11.0], [135200.0, 14.0], [135000.0, 2.0], [135500.0, 11.0], [135900.0, 14.0], [135300.0, 7.0], [135700.0, 11.0], [135100.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 135900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 53.95000000000001, "minX": 1.76015124E12, "maxY": 53.95000000000001, "series": [{"data": [[1.76015124E12, 53.95000000000001]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76015124E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135085.0, "minX": 2.0, "maxY": 135946.0, "series": [{"data": [[2.0, 135464.5], [3.0, 135169.0], [4.0, 135129.0], [5.0, 135278.0], [6.0, 135487.0], [8.0, 135162.5], [9.0, 135286.0], [10.0, 135496.0], [11.0, 135876.0], [13.0, 135085.0], [14.0, 135209.0], [15.0, 135503.0], [16.0, 135882.0], [18.0, 135242.0], [22.0, 135423.25], [24.0, 135787.0], [25.0, 135899.0], [27.0, 135727.0], [28.0, 135696.0], [29.0, 135414.0], [30.0, 135835.0], [33.0, 135946.0], [32.0, 135564.5], [35.0, 135332.0], [34.0, 135843.0], [37.0, 135850.0], [36.0, 135711.0], [39.0, 135943.0], [41.0, 135349.0], [40.0, 135350.0], [43.0, 135568.0], [45.0, 135468.0], [44.0, 135759.0], [49.0, 135472.0], [48.0, 135769.0], [52.0, 135595.0], [55.0, 135204.0], [54.0, 135599.33333333334], [56.0, 135704.0], [58.0, 135485.0], [61.0, 135792.0], [63.0, 135213.0], [62.0, 135935.0], [67.0, 135608.5], [66.0, 135719.0], [71.0, 135932.0], [69.0, 135645.0], [68.0, 135582.0], [75.0, 135108.0], [79.0, 135248.33333333334], [77.0, 135632.0], [82.0, 135263.0], [80.0, 135609.5], [84.0, 135625.0], [87.0, 135285.0], [91.0, 135448.66666666666], [95.0, 135923.0], [94.0, 135474.0], [93.0, 135919.0], [98.0, 135913.0], [96.0, 135715.0], [100.0, 135657.28571428574]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[53.95000000000001, 135551.54]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.76015124E12, "maxY": 4708.333333333333, "series": [{"data": [[1.76015124E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76015124E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76015124E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 135551.54, "minX": 1.76015124E12, "maxY": 135551.54, "series": [{"data": [[1.76015124E12, 135551.54]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76015124E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.76015124E12, "maxY": 4.9E-324, "series": [{"data": [[1.76015124E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76015124E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 135551.52000000002, "minX": 1.76015124E12, "maxY": 135551.52000000002, "series": [{"data": [[1.76015124E12, 135551.52000000002]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76015124E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 135562.5, "minX": 100.0, "maxY": 135562.5, "series": [{"data": [[100.0, 135562.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76015112E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76015112E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76015112E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76015124E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76015124E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76015124E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76015124E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76015124E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76015124E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76015124E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76015124E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76015124E12, "title": "Total Transactions Per Second"}},
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

