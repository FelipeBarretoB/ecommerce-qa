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
        data: {"result": {"minY": 135949.0, "minX": 0.0, "maxY": 136827.0, "series": [{"data": [[0.0, 135949.0], [0.1, 135949.0], [0.2, 135949.0], [0.3, 135949.0], [0.4, 135949.0], [0.5, 135949.0], [0.6, 135949.0], [0.7, 135949.0], [0.8, 135949.0], [0.9, 135949.0], [1.0, 135961.0], [1.1, 135961.0], [1.2, 135961.0], [1.3, 135961.0], [1.4, 135961.0], [1.5, 135961.0], [1.6, 135961.0], [1.7, 135961.0], [1.8, 135961.0], [1.9, 135961.0], [2.0, 135965.0], [2.1, 135965.0], [2.2, 135965.0], [2.3, 135965.0], [2.4, 135965.0], [2.5, 135965.0], [2.6, 135965.0], [2.7, 135965.0], [2.8, 135965.0], [2.9, 135965.0], [3.0, 135970.0], [3.1, 135970.0], [3.2, 135970.0], [3.3, 135970.0], [3.4, 135970.0], [3.5, 135970.0], [3.6, 135970.0], [3.7, 135970.0], [3.8, 135970.0], [3.9, 135970.0], [4.0, 135977.0], [4.1, 135977.0], [4.2, 135977.0], [4.3, 135977.0], [4.4, 135977.0], [4.5, 135977.0], [4.6, 135977.0], [4.7, 135977.0], [4.8, 135977.0], [4.9, 135977.0], [5.0, 135982.0], [5.1, 135982.0], [5.2, 135982.0], [5.3, 135982.0], [5.4, 135982.0], [5.5, 135982.0], [5.6, 135982.0], [5.7, 135982.0], [5.8, 135982.0], [5.9, 135982.0], [6.0, 135995.0], [6.1, 135995.0], [6.2, 135995.0], [6.3, 135995.0], [6.4, 135995.0], [6.5, 135995.0], [6.6, 135995.0], [6.7, 135995.0], [6.8, 135995.0], [6.9, 135995.0], [7.0, 136004.0], [7.1, 136004.0], [7.2, 136004.0], [7.3, 136004.0], [7.4, 136004.0], [7.5, 136004.0], [7.6, 136004.0], [7.7, 136004.0], [7.8, 136004.0], [7.9, 136004.0], [8.0, 136015.0], [8.1, 136015.0], [8.2, 136015.0], [8.3, 136015.0], [8.4, 136015.0], [8.5, 136015.0], [8.6, 136015.0], [8.7, 136015.0], [8.8, 136015.0], [8.9, 136015.0], [9.0, 136025.0], [9.1, 136025.0], [9.2, 136025.0], [9.3, 136025.0], [9.4, 136025.0], [9.5, 136025.0], [9.6, 136025.0], [9.7, 136025.0], [9.8, 136025.0], [9.9, 136025.0], [10.0, 136045.0], [10.1, 136045.0], [10.2, 136045.0], [10.3, 136045.0], [10.4, 136045.0], [10.5, 136045.0], [10.6, 136045.0], [10.7, 136045.0], [10.8, 136045.0], [10.9, 136045.0], [11.0, 136058.0], [11.1, 136058.0], [11.2, 136058.0], [11.3, 136058.0], [11.4, 136058.0], [11.5, 136058.0], [11.6, 136058.0], [11.7, 136058.0], [11.8, 136058.0], [11.9, 136058.0], [12.0, 136066.0], [12.1, 136066.0], [12.2, 136066.0], [12.3, 136066.0], [12.4, 136066.0], [12.5, 136066.0], [12.6, 136066.0], [12.7, 136066.0], [12.8, 136066.0], [12.9, 136066.0], [13.0, 136067.0], [13.1, 136067.0], [13.2, 136067.0], [13.3, 136067.0], [13.4, 136067.0], [13.5, 136067.0], [13.6, 136067.0], [13.7, 136067.0], [13.8, 136067.0], [13.9, 136067.0], [14.0, 136075.0], [14.1, 136075.0], [14.2, 136075.0], [14.3, 136075.0], [14.4, 136075.0], [14.5, 136075.0], [14.6, 136075.0], [14.7, 136075.0], [14.8, 136075.0], [14.9, 136075.0], [15.0, 136095.0], [15.1, 136095.0], [15.2, 136095.0], [15.3, 136095.0], [15.4, 136095.0], [15.5, 136095.0], [15.6, 136095.0], [15.7, 136095.0], [15.8, 136095.0], [15.9, 136095.0], [16.0, 136096.0], [16.1, 136096.0], [16.2, 136096.0], [16.3, 136096.0], [16.4, 136096.0], [16.5, 136096.0], [16.6, 136096.0], [16.7, 136096.0], [16.8, 136096.0], [16.9, 136096.0], [17.0, 136108.0], [17.1, 136108.0], [17.2, 136108.0], [17.3, 136108.0], [17.4, 136108.0], [17.5, 136108.0], [17.6, 136108.0], [17.7, 136108.0], [17.8, 136108.0], [17.9, 136108.0], [18.0, 136135.0], [18.1, 136135.0], [18.2, 136135.0], [18.3, 136135.0], [18.4, 136135.0], [18.5, 136135.0], [18.6, 136135.0], [18.7, 136135.0], [18.8, 136135.0], [18.9, 136135.0], [19.0, 136143.0], [19.1, 136143.0], [19.2, 136143.0], [19.3, 136143.0], [19.4, 136143.0], [19.5, 136143.0], [19.6, 136143.0], [19.7, 136143.0], [19.8, 136143.0], [19.9, 136143.0], [20.0, 136146.0], [20.1, 136146.0], [20.2, 136146.0], [20.3, 136146.0], [20.4, 136146.0], [20.5, 136146.0], [20.6, 136146.0], [20.7, 136146.0], [20.8, 136146.0], [20.9, 136146.0], [21.0, 136151.0], [21.1, 136151.0], [21.2, 136151.0], [21.3, 136151.0], [21.4, 136151.0], [21.5, 136151.0], [21.6, 136151.0], [21.7, 136151.0], [21.8, 136151.0], [21.9, 136151.0], [22.0, 136156.0], [22.1, 136156.0], [22.2, 136156.0], [22.3, 136156.0], [22.4, 136156.0], [22.5, 136156.0], [22.6, 136156.0], [22.7, 136156.0], [22.8, 136156.0], [22.9, 136156.0], [23.0, 136183.0], [23.1, 136183.0], [23.2, 136183.0], [23.3, 136183.0], [23.4, 136183.0], [23.5, 136183.0], [23.6, 136183.0], [23.7, 136183.0], [23.8, 136183.0], [23.9, 136183.0], [24.0, 136184.0], [24.1, 136184.0], [24.2, 136184.0], [24.3, 136184.0], [24.4, 136184.0], [24.5, 136184.0], [24.6, 136184.0], [24.7, 136184.0], [24.8, 136184.0], [24.9, 136184.0], [25.0, 136194.0], [25.1, 136194.0], [25.2, 136194.0], [25.3, 136194.0], [25.4, 136194.0], [25.5, 136194.0], [25.6, 136194.0], [25.7, 136194.0], [25.8, 136194.0], [25.9, 136194.0], [26.0, 136200.0], [26.1, 136200.0], [26.2, 136200.0], [26.3, 136200.0], [26.4, 136200.0], [26.5, 136200.0], [26.6, 136200.0], [26.7, 136200.0], [26.8, 136200.0], [26.9, 136200.0], [27.0, 136224.0], [27.1, 136224.0], [27.2, 136224.0], [27.3, 136224.0], [27.4, 136224.0], [27.5, 136224.0], [27.6, 136224.0], [27.7, 136224.0], [27.8, 136224.0], [27.9, 136224.0], [28.0, 136231.0], [28.1, 136231.0], [28.2, 136231.0], [28.3, 136231.0], [28.4, 136231.0], [28.5, 136231.0], [28.6, 136231.0], [28.7, 136231.0], [28.8, 136231.0], [28.9, 136231.0], [29.0, 136236.0], [29.1, 136236.0], [29.2, 136236.0], [29.3, 136236.0], [29.4, 136236.0], [29.5, 136236.0], [29.6, 136236.0], [29.7, 136236.0], [29.8, 136236.0], [29.9, 136236.0], [30.0, 136243.0], [30.1, 136243.0], [30.2, 136243.0], [30.3, 136243.0], [30.4, 136243.0], [30.5, 136243.0], [30.6, 136243.0], [30.7, 136243.0], [30.8, 136243.0], [30.9, 136243.0], [31.0, 136259.0], [31.1, 136259.0], [31.2, 136259.0], [31.3, 136259.0], [31.4, 136259.0], [31.5, 136259.0], [31.6, 136259.0], [31.7, 136259.0], [31.8, 136259.0], [31.9, 136259.0], [32.0, 136260.0], [32.1, 136260.0], [32.2, 136260.0], [32.3, 136260.0], [32.4, 136260.0], [32.5, 136260.0], [32.6, 136260.0], [32.7, 136260.0], [32.8, 136260.0], [32.9, 136260.0], [33.0, 136270.0], [33.1, 136270.0], [33.2, 136270.0], [33.3, 136270.0], [33.4, 136270.0], [33.5, 136270.0], [33.6, 136270.0], [33.7, 136270.0], [33.8, 136270.0], [33.9, 136270.0], [34.0, 136290.0], [34.1, 136290.0], [34.2, 136290.0], [34.3, 136290.0], [34.4, 136290.0], [34.5, 136290.0], [34.6, 136290.0], [34.7, 136290.0], [34.8, 136290.0], [34.9, 136290.0], [35.0, 136299.0], [35.1, 136299.0], [35.2, 136299.0], [35.3, 136299.0], [35.4, 136299.0], [35.5, 136299.0], [35.6, 136299.0], [35.7, 136299.0], [35.8, 136299.0], [35.9, 136299.0], [36.0, 136308.0], [36.1, 136308.0], [36.2, 136308.0], [36.3, 136308.0], [36.4, 136308.0], [36.5, 136308.0], [36.6, 136308.0], [36.7, 136308.0], [36.8, 136308.0], [36.9, 136308.0], [37.0, 136313.0], [37.1, 136313.0], [37.2, 136313.0], [37.3, 136313.0], [37.4, 136313.0], [37.5, 136313.0], [37.6, 136313.0], [37.7, 136313.0], [37.8, 136313.0], [37.9, 136313.0], [38.0, 136323.0], [38.1, 136323.0], [38.2, 136323.0], [38.3, 136323.0], [38.4, 136323.0], [38.5, 136323.0], [38.6, 136323.0], [38.7, 136323.0], [38.8, 136323.0], [38.9, 136323.0], [39.0, 136333.0], [39.1, 136333.0], [39.2, 136333.0], [39.3, 136333.0], [39.4, 136333.0], [39.5, 136333.0], [39.6, 136333.0], [39.7, 136333.0], [39.8, 136333.0], [39.9, 136333.0], [40.0, 136335.0], [40.1, 136335.0], [40.2, 136335.0], [40.3, 136335.0], [40.4, 136335.0], [40.5, 136335.0], [40.6, 136335.0], [40.7, 136335.0], [40.8, 136335.0], [40.9, 136335.0], [41.0, 136346.0], [41.1, 136346.0], [41.2, 136346.0], [41.3, 136346.0], [41.4, 136346.0], [41.5, 136346.0], [41.6, 136346.0], [41.7, 136346.0], [41.8, 136346.0], [41.9, 136346.0], [42.0, 136356.0], [42.1, 136356.0], [42.2, 136356.0], [42.3, 136356.0], [42.4, 136356.0], [42.5, 136356.0], [42.6, 136356.0], [42.7, 136356.0], [42.8, 136356.0], [42.9, 136356.0], [43.0, 136371.0], [43.1, 136371.0], [43.2, 136371.0], [43.3, 136371.0], [43.4, 136371.0], [43.5, 136371.0], [43.6, 136371.0], [43.7, 136371.0], [43.8, 136371.0], [43.9, 136371.0], [44.0, 136373.0], [44.1, 136373.0], [44.2, 136373.0], [44.3, 136373.0], [44.4, 136373.0], [44.5, 136373.0], [44.6, 136373.0], [44.7, 136373.0], [44.8, 136373.0], [44.9, 136373.0], [45.0, 136394.0], [45.1, 136394.0], [45.2, 136394.0], [45.3, 136394.0], [45.4, 136394.0], [45.5, 136394.0], [45.6, 136394.0], [45.7, 136394.0], [45.8, 136394.0], [45.9, 136394.0], [46.0, 136405.0], [46.1, 136405.0], [46.2, 136405.0], [46.3, 136405.0], [46.4, 136405.0], [46.5, 136405.0], [46.6, 136405.0], [46.7, 136405.0], [46.8, 136405.0], [46.9, 136405.0], [47.0, 136414.0], [47.1, 136414.0], [47.2, 136414.0], [47.3, 136414.0], [47.4, 136414.0], [47.5, 136414.0], [47.6, 136414.0], [47.7, 136414.0], [47.8, 136414.0], [47.9, 136414.0], [48.0, 136415.0], [48.1, 136415.0], [48.2, 136415.0], [48.3, 136415.0], [48.4, 136415.0], [48.5, 136415.0], [48.6, 136415.0], [48.7, 136415.0], [48.8, 136415.0], [48.9, 136415.0], [49.0, 136439.0], [49.1, 136439.0], [49.2, 136439.0], [49.3, 136439.0], [49.4, 136439.0], [49.5, 136439.0], [49.6, 136439.0], [49.7, 136439.0], [49.8, 136439.0], [49.9, 136439.0], [50.0, 136444.0], [50.1, 136444.0], [50.2, 136444.0], [50.3, 136444.0], [50.4, 136444.0], [50.5, 136444.0], [50.6, 136444.0], [50.7, 136444.0], [50.8, 136444.0], [50.9, 136444.0], [51.0, 136449.0], [51.1, 136449.0], [51.2, 136449.0], [51.3, 136449.0], [51.4, 136449.0], [51.5, 136449.0], [51.6, 136449.0], [51.7, 136449.0], [51.8, 136449.0], [51.9, 136449.0], [52.0, 136466.0], [52.1, 136466.0], [52.2, 136466.0], [52.3, 136466.0], [52.4, 136466.0], [52.5, 136466.0], [52.6, 136466.0], [52.7, 136466.0], [52.8, 136466.0], [52.9, 136466.0], [53.0, 136473.0], [53.1, 136473.0], [53.2, 136473.0], [53.3, 136473.0], [53.4, 136473.0], [53.5, 136473.0], [53.6, 136473.0], [53.7, 136473.0], [53.8, 136473.0], [53.9, 136473.0], [54.0, 136494.0], [54.1, 136494.0], [54.2, 136494.0], [54.3, 136494.0], [54.4, 136494.0], [54.5, 136494.0], [54.6, 136494.0], [54.7, 136494.0], [54.8, 136494.0], [54.9, 136494.0], [55.0, 136496.0], [55.1, 136496.0], [55.2, 136496.0], [55.3, 136496.0], [55.4, 136496.0], [55.5, 136496.0], [55.6, 136496.0], [55.7, 136496.0], [55.8, 136496.0], [55.9, 136496.0], [56.0, 136503.0], [56.1, 136503.0], [56.2, 136503.0], [56.3, 136503.0], [56.4, 136503.0], [56.5, 136503.0], [56.6, 136503.0], [56.7, 136503.0], [56.8, 136503.0], [56.9, 136503.0], [57.0, 136515.0], [57.1, 136515.0], [57.2, 136515.0], [57.3, 136515.0], [57.4, 136515.0], [57.5, 136515.0], [57.6, 136515.0], [57.7, 136515.0], [57.8, 136515.0], [57.9, 136515.0], [58.0, 136533.0], [58.1, 136533.0], [58.2, 136533.0], [58.3, 136533.0], [58.4, 136533.0], [58.5, 136533.0], [58.6, 136533.0], [58.7, 136533.0], [58.8, 136533.0], [58.9, 136533.0], [59.0, 136534.0], [59.1, 136534.0], [59.2, 136534.0], [59.3, 136534.0], [59.4, 136534.0], [59.5, 136534.0], [59.6, 136534.0], [59.7, 136534.0], [59.8, 136534.0], [59.9, 136534.0], [60.0, 136536.0], [60.1, 136536.0], [60.2, 136536.0], [60.3, 136536.0], [60.4, 136536.0], [60.5, 136536.0], [60.6, 136536.0], [60.7, 136536.0], [60.8, 136536.0], [60.9, 136536.0], [61.0, 136552.0], [61.1, 136552.0], [61.2, 136552.0], [61.3, 136552.0], [61.4, 136552.0], [61.5, 136552.0], [61.6, 136552.0], [61.7, 136552.0], [61.8, 136552.0], [61.9, 136552.0], [62.0, 136564.0], [62.1, 136564.0], [62.2, 136564.0], [62.3, 136564.0], [62.4, 136564.0], [62.5, 136564.0], [62.6, 136564.0], [62.7, 136564.0], [62.8, 136564.0], [62.9, 136564.0], [63.0, 136565.0], [63.1, 136565.0], [63.2, 136565.0], [63.3, 136565.0], [63.4, 136565.0], [63.5, 136565.0], [63.6, 136565.0], [63.7, 136565.0], [63.8, 136565.0], [63.9, 136565.0], [64.0, 136574.0], [64.1, 136574.0], [64.2, 136574.0], [64.3, 136574.0], [64.4, 136574.0], [64.5, 136574.0], [64.6, 136574.0], [64.7, 136574.0], [64.8, 136574.0], [64.9, 136574.0], [65.0, 136585.0], [65.1, 136585.0], [65.2, 136585.0], [65.3, 136585.0], [65.4, 136585.0], [65.5, 136585.0], [65.6, 136585.0], [65.7, 136585.0], [65.8, 136585.0], [65.9, 136585.0], [66.0, 136615.0], [66.1, 136615.0], [66.2, 136615.0], [66.3, 136615.0], [66.4, 136615.0], [66.5, 136615.0], [66.6, 136615.0], [66.7, 136615.0], [66.8, 136615.0], [66.9, 136615.0], [67.0, 136616.0], [67.1, 136616.0], [67.2, 136616.0], [67.3, 136616.0], [67.4, 136616.0], [67.5, 136616.0], [67.6, 136616.0], [67.7, 136616.0], [67.8, 136616.0], [67.9, 136616.0], [68.0, 136622.0], [68.1, 136622.0], [68.2, 136622.0], [68.3, 136622.0], [68.4, 136622.0], [68.5, 136622.0], [68.6, 136622.0], [68.7, 136622.0], [68.8, 136622.0], [68.9, 136622.0], [69.0, 136635.0], [69.1, 136635.0], [69.2, 136635.0], [69.3, 136635.0], [69.4, 136635.0], [69.5, 136635.0], [69.6, 136635.0], [69.7, 136635.0], [69.8, 136635.0], [69.9, 136635.0], [70.0, 136639.0], [70.1, 136639.0], [70.2, 136639.0], [70.3, 136639.0], [70.4, 136639.0], [70.5, 136639.0], [70.6, 136639.0], [70.7, 136639.0], [70.8, 136639.0], [70.9, 136639.0], [71.0, 136644.0], [71.1, 136644.0], [71.2, 136644.0], [71.3, 136644.0], [71.4, 136644.0], [71.5, 136644.0], [71.6, 136644.0], [71.7, 136644.0], [71.8, 136644.0], [71.9, 136644.0], [72.0, 136663.0], [72.1, 136663.0], [72.2, 136663.0], [72.3, 136663.0], [72.4, 136663.0], [72.5, 136663.0], [72.6, 136663.0], [72.7, 136663.0], [72.8, 136663.0], [72.9, 136663.0], [73.0, 136663.0], [73.1, 136663.0], [73.2, 136663.0], [73.3, 136663.0], [73.4, 136663.0], [73.5, 136663.0], [73.6, 136663.0], [73.7, 136663.0], [73.8, 136663.0], [73.9, 136663.0], [74.0, 136691.0], [74.1, 136691.0], [74.2, 136691.0], [74.3, 136691.0], [74.4, 136691.0], [74.5, 136691.0], [74.6, 136691.0], [74.7, 136691.0], [74.8, 136691.0], [74.9, 136691.0], [75.0, 136693.0], [75.1, 136693.0], [75.2, 136693.0], [75.3, 136693.0], [75.4, 136693.0], [75.5, 136693.0], [75.6, 136693.0], [75.7, 136693.0], [75.8, 136693.0], [75.9, 136693.0], [76.0, 136695.0], [76.1, 136695.0], [76.2, 136695.0], [76.3, 136695.0], [76.4, 136695.0], [76.5, 136695.0], [76.6, 136695.0], [76.7, 136695.0], [76.8, 136695.0], [76.9, 136695.0], [77.0, 136706.0], [77.1, 136706.0], [77.2, 136706.0], [77.3, 136706.0], [77.4, 136706.0], [77.5, 136706.0], [77.6, 136706.0], [77.7, 136706.0], [77.8, 136706.0], [77.9, 136706.0], [78.0, 136723.0], [78.1, 136723.0], [78.2, 136723.0], [78.3, 136723.0], [78.4, 136723.0], [78.5, 136723.0], [78.6, 136723.0], [78.7, 136723.0], [78.8, 136723.0], [78.9, 136723.0], [79.0, 136732.0], [79.1, 136732.0], [79.2, 136732.0], [79.3, 136732.0], [79.4, 136732.0], [79.5, 136732.0], [79.6, 136732.0], [79.7, 136732.0], [79.8, 136732.0], [79.9, 136732.0], [80.0, 136734.0], [80.1, 136734.0], [80.2, 136734.0], [80.3, 136734.0], [80.4, 136734.0], [80.5, 136734.0], [80.6, 136734.0], [80.7, 136734.0], [80.8, 136734.0], [80.9, 136734.0], [81.0, 136745.0], [81.1, 136745.0], [81.2, 136745.0], [81.3, 136745.0], [81.4, 136745.0], [81.5, 136745.0], [81.6, 136745.0], [81.7, 136745.0], [81.8, 136745.0], [81.9, 136745.0], [82.0, 136774.0], [82.1, 136774.0], [82.2, 136774.0], [82.3, 136774.0], [82.4, 136774.0], [82.5, 136774.0], [82.6, 136774.0], [82.7, 136774.0], [82.8, 136774.0], [82.9, 136774.0], [83.0, 136778.0], [83.1, 136778.0], [83.2, 136778.0], [83.3, 136778.0], [83.4, 136778.0], [83.5, 136778.0], [83.6, 136778.0], [83.7, 136778.0], [83.8, 136778.0], [83.9, 136778.0], [84.0, 136782.0], [84.1, 136782.0], [84.2, 136782.0], [84.3, 136782.0], [84.4, 136782.0], [84.5, 136782.0], [84.6, 136782.0], [84.7, 136782.0], [84.8, 136782.0], [84.9, 136782.0], [85.0, 136787.0], [85.1, 136787.0], [85.2, 136787.0], [85.3, 136787.0], [85.4, 136787.0], [85.5, 136787.0], [85.6, 136787.0], [85.7, 136787.0], [85.8, 136787.0], [85.9, 136787.0], [86.0, 136805.0], [86.1, 136805.0], [86.2, 136805.0], [86.3, 136805.0], [86.4, 136805.0], [86.5, 136805.0], [86.6, 136805.0], [86.7, 136805.0], [86.8, 136805.0], [86.9, 136805.0], [87.0, 136806.0], [87.1, 136806.0], [87.2, 136806.0], [87.3, 136806.0], [87.4, 136806.0], [87.5, 136806.0], [87.6, 136806.0], [87.7, 136806.0], [87.8, 136806.0], [87.9, 136806.0], [88.0, 136810.0], [88.1, 136810.0], [88.2, 136810.0], [88.3, 136810.0], [88.4, 136810.0], [88.5, 136810.0], [88.6, 136810.0], [88.7, 136810.0], [88.8, 136810.0], [88.9, 136810.0], [89.0, 136810.0], [89.1, 136810.0], [89.2, 136810.0], [89.3, 136810.0], [89.4, 136810.0], [89.5, 136810.0], [89.6, 136810.0], [89.7, 136810.0], [89.8, 136810.0], [89.9, 136810.0], [90.0, 136811.0], [90.1, 136811.0], [90.2, 136811.0], [90.3, 136811.0], [90.4, 136811.0], [90.5, 136811.0], [90.6, 136811.0], [90.7, 136811.0], [90.8, 136811.0], [90.9, 136811.0], [91.0, 136812.0], [91.1, 136812.0], [91.2, 136812.0], [91.3, 136812.0], [91.4, 136812.0], [91.5, 136812.0], [91.6, 136812.0], [91.7, 136812.0], [91.8, 136812.0], [91.9, 136812.0], [92.0, 136815.0], [92.1, 136815.0], [92.2, 136815.0], [92.3, 136815.0], [92.4, 136815.0], [92.5, 136815.0], [92.6, 136815.0], [92.7, 136815.0], [92.8, 136815.0], [92.9, 136815.0], [93.0, 136815.0], [93.1, 136815.0], [93.2, 136815.0], [93.3, 136815.0], [93.4, 136815.0], [93.5, 136815.0], [93.6, 136815.0], [93.7, 136815.0], [93.8, 136815.0], [93.9, 136815.0], [94.0, 136816.0], [94.1, 136816.0], [94.2, 136816.0], [94.3, 136816.0], [94.4, 136816.0], [94.5, 136816.0], [94.6, 136816.0], [94.7, 136816.0], [94.8, 136816.0], [94.9, 136816.0], [95.0, 136818.0], [95.1, 136818.0], [95.2, 136818.0], [95.3, 136818.0], [95.4, 136818.0], [95.5, 136818.0], [95.6, 136818.0], [95.7, 136818.0], [95.8, 136818.0], [95.9, 136818.0], [96.0, 136819.0], [96.1, 136819.0], [96.2, 136819.0], [96.3, 136819.0], [96.4, 136819.0], [96.5, 136819.0], [96.6, 136819.0], [96.7, 136819.0], [96.8, 136819.0], [96.9, 136819.0], [97.0, 136822.0], [97.1, 136822.0], [97.2, 136822.0], [97.3, 136822.0], [97.4, 136822.0], [97.5, 136822.0], [97.6, 136822.0], [97.7, 136822.0], [97.8, 136822.0], [97.9, 136822.0], [98.0, 136825.0], [98.1, 136825.0], [98.2, 136825.0], [98.3, 136825.0], [98.4, 136825.0], [98.5, 136825.0], [98.6, 136825.0], [98.7, 136825.0], [98.8, 136825.0], [98.9, 136825.0], [99.0, 136827.0], [99.1, 136827.0], [99.2, 136827.0], [99.3, 136827.0], [99.4, 136827.0], [99.5, 136827.0], [99.6, 136827.0], [99.7, 136827.0], [99.8, 136827.0], [99.9, 136827.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 135900.0, "maxY": 14.0, "series": [{"data": [[136200.0, 10.0], [136000.0, 10.0], [136800.0, 14.0], [136600.0, 11.0], [136400.0, 10.0], [136100.0, 9.0], [136500.0, 10.0], [136300.0, 10.0], [136700.0, 9.0], [135900.0, 7.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 91.19000000000004, "minX": 1.74983382E12, "maxY": 91.19000000000004, "series": [{"data": [[1.74983382E12, 91.19000000000004]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74983382E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 136025.0, "minX": 71.0, "maxY": 136778.0, "series": [{"data": [[71.0, 136276.0], [83.0, 136194.0], [81.0, 136025.0], [86.0, 136415.0], [91.0, 136439.79032258064], [90.0, 136541.27272727274], [94.0, 136075.0], [93.0, 136615.0], [99.0, 136259.0], [97.0, 136778.0], [100.0, 136350.5]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[90.99000000000002, 136430.13]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.74983382E12, "maxY": 4708.333333333333, "series": [{"data": [[1.74983382E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74983382E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74983382E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 136430.13, "minX": 1.74983382E12, "maxY": 136430.13, "series": [{"data": [[1.74983382E12, 136430.13]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74983382E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.74983382E12, "maxY": 4.9E-324, "series": [{"data": [[1.74983382E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74983382E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 136429.87000000005, "minX": 1.74983382E12, "maxY": 136429.87000000005, "series": [{"data": [[1.74983382E12, 136429.87000000005]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74983382E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 136441.5, "minX": 100.0, "maxY": 136441.5, "series": [{"data": [[100.0, 136441.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7498337E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7498337E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7498337E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.74983382E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.74983382E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74983382E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.74983382E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.74983382E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74983382E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.74983382E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.74983382E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74983382E12, "title": "Total Transactions Per Second"}},
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

