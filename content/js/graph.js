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
        data: {"result": {"minY": 134891.0, "minX": 0.0, "maxY": 135770.0, "series": [{"data": [[0.0, 134891.0], [0.1, 134891.0], [0.2, 134891.0], [0.3, 134891.0], [0.4, 134891.0], [0.5, 134891.0], [0.6, 134891.0], [0.7, 134891.0], [0.8, 134891.0], [0.9, 134891.0], [1.0, 134899.0], [1.1, 134899.0], [1.2, 134899.0], [1.3, 134899.0], [1.4, 134899.0], [1.5, 134899.0], [1.6, 134899.0], [1.7, 134899.0], [1.8, 134899.0], [1.9, 134899.0], [2.0, 134906.0], [2.1, 134906.0], [2.2, 134906.0], [2.3, 134906.0], [2.4, 134906.0], [2.5, 134906.0], [2.6, 134906.0], [2.7, 134906.0], [2.8, 134906.0], [2.9, 134906.0], [3.0, 134914.0], [3.1, 134914.0], [3.2, 134914.0], [3.3, 134914.0], [3.4, 134914.0], [3.5, 134914.0], [3.6, 134914.0], [3.7, 134914.0], [3.8, 134914.0], [3.9, 134914.0], [4.0, 134926.0], [4.1, 134926.0], [4.2, 134926.0], [4.3, 134926.0], [4.4, 134926.0], [4.5, 134926.0], [4.6, 134926.0], [4.7, 134926.0], [4.8, 134926.0], [4.9, 134926.0], [5.0, 134933.0], [5.1, 134933.0], [5.2, 134933.0], [5.3, 134933.0], [5.4, 134933.0], [5.5, 134933.0], [5.6, 134933.0], [5.7, 134933.0], [5.8, 134933.0], [5.9, 134933.0], [6.0, 134950.0], [6.1, 134950.0], [6.2, 134950.0], [6.3, 134950.0], [6.4, 134950.0], [6.5, 134950.0], [6.6, 134950.0], [6.7, 134950.0], [6.8, 134950.0], [6.9, 134950.0], [7.0, 134960.0], [7.1, 134960.0], [7.2, 134960.0], [7.3, 134960.0], [7.4, 134960.0], [7.5, 134960.0], [7.6, 134960.0], [7.7, 134960.0], [7.8, 134960.0], [7.9, 134960.0], [8.0, 134972.0], [8.1, 134972.0], [8.2, 134972.0], [8.3, 134972.0], [8.4, 134972.0], [8.5, 134972.0], [8.6, 134972.0], [8.7, 134972.0], [8.8, 134972.0], [8.9, 134972.0], [9.0, 134981.0], [9.1, 134981.0], [9.2, 134981.0], [9.3, 134981.0], [9.4, 134981.0], [9.5, 134981.0], [9.6, 134981.0], [9.7, 134981.0], [9.8, 134981.0], [9.9, 134981.0], [10.0, 134995.0], [10.1, 134995.0], [10.2, 134995.0], [10.3, 134995.0], [10.4, 134995.0], [10.5, 134995.0], [10.6, 134995.0], [10.7, 134995.0], [10.8, 134995.0], [10.9, 134995.0], [11.0, 134999.0], [11.1, 134999.0], [11.2, 134999.0], [11.3, 134999.0], [11.4, 134999.0], [11.5, 134999.0], [11.6, 134999.0], [11.7, 134999.0], [11.8, 134999.0], [11.9, 134999.0], [12.0, 135010.0], [12.1, 135010.0], [12.2, 135010.0], [12.3, 135010.0], [12.4, 135010.0], [12.5, 135010.0], [12.6, 135010.0], [12.7, 135010.0], [12.8, 135010.0], [12.9, 135010.0], [13.0, 135022.0], [13.1, 135022.0], [13.2, 135022.0], [13.3, 135022.0], [13.4, 135022.0], [13.5, 135022.0], [13.6, 135022.0], [13.7, 135022.0], [13.8, 135022.0], [13.9, 135022.0], [14.0, 135038.0], [14.1, 135038.0], [14.2, 135038.0], [14.3, 135038.0], [14.4, 135038.0], [14.5, 135038.0], [14.6, 135038.0], [14.7, 135038.0], [14.8, 135038.0], [14.9, 135038.0], [15.0, 135048.0], [15.1, 135048.0], [15.2, 135048.0], [15.3, 135048.0], [15.4, 135048.0], [15.5, 135048.0], [15.6, 135048.0], [15.7, 135048.0], [15.8, 135048.0], [15.9, 135048.0], [16.0, 135060.0], [16.1, 135060.0], [16.2, 135060.0], [16.3, 135060.0], [16.4, 135060.0], [16.5, 135060.0], [16.6, 135060.0], [16.7, 135060.0], [16.8, 135060.0], [16.9, 135060.0], [17.0, 135064.0], [17.1, 135064.0], [17.2, 135064.0], [17.3, 135064.0], [17.4, 135064.0], [17.5, 135064.0], [17.6, 135064.0], [17.7, 135064.0], [17.8, 135064.0], [17.9, 135064.0], [18.0, 135067.0], [18.1, 135067.0], [18.2, 135067.0], [18.3, 135067.0], [18.4, 135067.0], [18.5, 135067.0], [18.6, 135067.0], [18.7, 135067.0], [18.8, 135067.0], [18.9, 135067.0], [19.0, 135083.0], [19.1, 135083.0], [19.2, 135083.0], [19.3, 135083.0], [19.4, 135083.0], [19.5, 135083.0], [19.6, 135083.0], [19.7, 135083.0], [19.8, 135083.0], [19.9, 135083.0], [20.0, 135092.0], [20.1, 135092.0], [20.2, 135092.0], [20.3, 135092.0], [20.4, 135092.0], [20.5, 135092.0], [20.6, 135092.0], [20.7, 135092.0], [20.8, 135092.0], [20.9, 135092.0], [21.0, 135096.0], [21.1, 135096.0], [21.2, 135096.0], [21.3, 135096.0], [21.4, 135096.0], [21.5, 135096.0], [21.6, 135096.0], [21.7, 135096.0], [21.8, 135096.0], [21.9, 135096.0], [22.0, 135113.0], [22.1, 135113.0], [22.2, 135113.0], [22.3, 135113.0], [22.4, 135113.0], [22.5, 135113.0], [22.6, 135113.0], [22.7, 135113.0], [22.8, 135113.0], [22.9, 135113.0], [23.0, 135123.0], [23.1, 135123.0], [23.2, 135123.0], [23.3, 135123.0], [23.4, 135123.0], [23.5, 135123.0], [23.6, 135123.0], [23.7, 135123.0], [23.8, 135123.0], [23.9, 135123.0], [24.0, 135134.0], [24.1, 135134.0], [24.2, 135134.0], [24.3, 135134.0], [24.4, 135134.0], [24.5, 135134.0], [24.6, 135134.0], [24.7, 135134.0], [24.8, 135134.0], [24.9, 135134.0], [25.0, 135145.0], [25.1, 135145.0], [25.2, 135145.0], [25.3, 135145.0], [25.4, 135145.0], [25.5, 135145.0], [25.6, 135145.0], [25.7, 135145.0], [25.8, 135145.0], [25.9, 135145.0], [26.0, 135155.0], [26.1, 135155.0], [26.2, 135155.0], [26.3, 135155.0], [26.4, 135155.0], [26.5, 135155.0], [26.6, 135155.0], [26.7, 135155.0], [26.8, 135155.0], [26.9, 135155.0], [27.0, 135162.0], [27.1, 135162.0], [27.2, 135162.0], [27.3, 135162.0], [27.4, 135162.0], [27.5, 135162.0], [27.6, 135162.0], [27.7, 135162.0], [27.8, 135162.0], [27.9, 135162.0], [28.0, 135165.0], [28.1, 135165.0], [28.2, 135165.0], [28.3, 135165.0], [28.4, 135165.0], [28.5, 135165.0], [28.6, 135165.0], [28.7, 135165.0], [28.8, 135165.0], [28.9, 135165.0], [29.0, 135175.0], [29.1, 135175.0], [29.2, 135175.0], [29.3, 135175.0], [29.4, 135175.0], [29.5, 135175.0], [29.6, 135175.0], [29.7, 135175.0], [29.8, 135175.0], [29.9, 135175.0], [30.0, 135186.0], [30.1, 135186.0], [30.2, 135186.0], [30.3, 135186.0], [30.4, 135186.0], [30.5, 135186.0], [30.6, 135186.0], [30.7, 135186.0], [30.8, 135186.0], [30.9, 135186.0], [31.0, 135198.0], [31.1, 135198.0], [31.2, 135198.0], [31.3, 135198.0], [31.4, 135198.0], [31.5, 135198.0], [31.6, 135198.0], [31.7, 135198.0], [31.8, 135198.0], [31.9, 135198.0], [32.0, 135209.0], [32.1, 135209.0], [32.2, 135209.0], [32.3, 135209.0], [32.4, 135209.0], [32.5, 135209.0], [32.6, 135209.0], [32.7, 135209.0], [32.8, 135209.0], [32.9, 135209.0], [33.0, 135214.0], [33.1, 135214.0], [33.2, 135214.0], [33.3, 135214.0], [33.4, 135214.0], [33.5, 135214.0], [33.6, 135214.0], [33.7, 135214.0], [33.8, 135214.0], [33.9, 135214.0], [34.0, 135229.0], [34.1, 135229.0], [34.2, 135229.0], [34.3, 135229.0], [34.4, 135229.0], [34.5, 135229.0], [34.6, 135229.0], [34.7, 135229.0], [34.8, 135229.0], [34.9, 135229.0], [35.0, 135238.0], [35.1, 135238.0], [35.2, 135238.0], [35.3, 135238.0], [35.4, 135238.0], [35.5, 135238.0], [35.6, 135238.0], [35.7, 135238.0], [35.8, 135238.0], [35.9, 135238.0], [36.0, 135244.0], [36.1, 135244.0], [36.2, 135244.0], [36.3, 135244.0], [36.4, 135244.0], [36.5, 135244.0], [36.6, 135244.0], [36.7, 135244.0], [36.8, 135244.0], [36.9, 135244.0], [37.0, 135257.0], [37.1, 135257.0], [37.2, 135257.0], [37.3, 135257.0], [37.4, 135257.0], [37.5, 135257.0], [37.6, 135257.0], [37.7, 135257.0], [37.8, 135257.0], [37.9, 135257.0], [38.0, 135265.0], [38.1, 135265.0], [38.2, 135265.0], [38.3, 135265.0], [38.4, 135265.0], [38.5, 135265.0], [38.6, 135265.0], [38.7, 135265.0], [38.8, 135265.0], [38.9, 135265.0], [39.0, 135275.0], [39.1, 135275.0], [39.2, 135275.0], [39.3, 135275.0], [39.4, 135275.0], [39.5, 135275.0], [39.6, 135275.0], [39.7, 135275.0], [39.8, 135275.0], [39.9, 135275.0], [40.0, 135293.0], [40.1, 135293.0], [40.2, 135293.0], [40.3, 135293.0], [40.4, 135293.0], [40.5, 135293.0], [40.6, 135293.0], [40.7, 135293.0], [40.8, 135293.0], [40.9, 135293.0], [41.0, 135302.0], [41.1, 135302.0], [41.2, 135302.0], [41.3, 135302.0], [41.4, 135302.0], [41.5, 135302.0], [41.6, 135302.0], [41.7, 135302.0], [41.8, 135302.0], [41.9, 135302.0], [42.0, 135311.0], [42.1, 135311.0], [42.2, 135311.0], [42.3, 135311.0], [42.4, 135311.0], [42.5, 135311.0], [42.6, 135311.0], [42.7, 135311.0], [42.8, 135311.0], [42.9, 135311.0], [43.0, 135321.0], [43.1, 135321.0], [43.2, 135321.0], [43.3, 135321.0], [43.4, 135321.0], [43.5, 135321.0], [43.6, 135321.0], [43.7, 135321.0], [43.8, 135321.0], [43.9, 135321.0], [44.0, 135330.0], [44.1, 135330.0], [44.2, 135330.0], [44.3, 135330.0], [44.4, 135330.0], [44.5, 135330.0], [44.6, 135330.0], [44.7, 135330.0], [44.8, 135330.0], [44.9, 135330.0], [45.0, 135339.0], [45.1, 135339.0], [45.2, 135339.0], [45.3, 135339.0], [45.4, 135339.0], [45.5, 135339.0], [45.6, 135339.0], [45.7, 135339.0], [45.8, 135339.0], [45.9, 135339.0], [46.0, 135355.0], [46.1, 135355.0], [46.2, 135355.0], [46.3, 135355.0], [46.4, 135355.0], [46.5, 135355.0], [46.6, 135355.0], [46.7, 135355.0], [46.8, 135355.0], [46.9, 135355.0], [47.0, 135364.0], [47.1, 135364.0], [47.2, 135364.0], [47.3, 135364.0], [47.4, 135364.0], [47.5, 135364.0], [47.6, 135364.0], [47.7, 135364.0], [47.8, 135364.0], [47.9, 135364.0], [48.0, 135373.0], [48.1, 135373.0], [48.2, 135373.0], [48.3, 135373.0], [48.4, 135373.0], [48.5, 135373.0], [48.6, 135373.0], [48.7, 135373.0], [48.8, 135373.0], [48.9, 135373.0], [49.0, 135384.0], [49.1, 135384.0], [49.2, 135384.0], [49.3, 135384.0], [49.4, 135384.0], [49.5, 135384.0], [49.6, 135384.0], [49.7, 135384.0], [49.8, 135384.0], [49.9, 135384.0], [50.0, 135393.0], [50.1, 135393.0], [50.2, 135393.0], [50.3, 135393.0], [50.4, 135393.0], [50.5, 135393.0], [50.6, 135393.0], [50.7, 135393.0], [50.8, 135393.0], [50.9, 135393.0], [51.0, 135403.0], [51.1, 135403.0], [51.2, 135403.0], [51.3, 135403.0], [51.4, 135403.0], [51.5, 135403.0], [51.6, 135403.0], [51.7, 135403.0], [51.8, 135403.0], [51.9, 135403.0], [52.0, 135413.0], [52.1, 135413.0], [52.2, 135413.0], [52.3, 135413.0], [52.4, 135413.0], [52.5, 135413.0], [52.6, 135413.0], [52.7, 135413.0], [52.8, 135413.0], [52.9, 135413.0], [53.0, 135421.0], [53.1, 135421.0], [53.2, 135421.0], [53.3, 135421.0], [53.4, 135421.0], [53.5, 135421.0], [53.6, 135421.0], [53.7, 135421.0], [53.8, 135421.0], [53.9, 135421.0], [54.0, 135439.0], [54.1, 135439.0], [54.2, 135439.0], [54.3, 135439.0], [54.4, 135439.0], [54.5, 135439.0], [54.6, 135439.0], [54.7, 135439.0], [54.8, 135439.0], [54.9, 135439.0], [55.0, 135449.0], [55.1, 135449.0], [55.2, 135449.0], [55.3, 135449.0], [55.4, 135449.0], [55.5, 135449.0], [55.6, 135449.0], [55.7, 135449.0], [55.8, 135449.0], [55.9, 135449.0], [56.0, 135459.0], [56.1, 135459.0], [56.2, 135459.0], [56.3, 135459.0], [56.4, 135459.0], [56.5, 135459.0], [56.6, 135459.0], [56.7, 135459.0], [56.8, 135459.0], [56.9, 135459.0], [57.0, 135469.0], [57.1, 135469.0], [57.2, 135469.0], [57.3, 135469.0], [57.4, 135469.0], [57.5, 135469.0], [57.6, 135469.0], [57.7, 135469.0], [57.8, 135469.0], [57.9, 135469.0], [58.0, 135475.0], [58.1, 135475.0], [58.2, 135475.0], [58.3, 135475.0], [58.4, 135475.0], [58.5, 135475.0], [58.6, 135475.0], [58.7, 135475.0], [58.8, 135475.0], [58.9, 135475.0], [59.0, 135477.0], [59.1, 135477.0], [59.2, 135477.0], [59.3, 135477.0], [59.4, 135477.0], [59.5, 135477.0], [59.6, 135477.0], [59.7, 135477.0], [59.8, 135477.0], [59.9, 135477.0], [60.0, 135485.0], [60.1, 135485.0], [60.2, 135485.0], [60.3, 135485.0], [60.4, 135485.0], [60.5, 135485.0], [60.6, 135485.0], [60.7, 135485.0], [60.8, 135485.0], [60.9, 135485.0], [61.0, 135517.0], [61.1, 135517.0], [61.2, 135517.0], [61.3, 135517.0], [61.4, 135517.0], [61.5, 135517.0], [61.6, 135517.0], [61.7, 135517.0], [61.8, 135517.0], [61.9, 135517.0], [62.0, 135520.0], [62.1, 135520.0], [62.2, 135520.0], [62.3, 135520.0], [62.4, 135520.0], [62.5, 135520.0], [62.6, 135520.0], [62.7, 135520.0], [62.8, 135520.0], [62.9, 135520.0], [63.0, 135525.0], [63.1, 135525.0], [63.2, 135525.0], [63.3, 135525.0], [63.4, 135525.0], [63.5, 135525.0], [63.6, 135525.0], [63.7, 135525.0], [63.8, 135525.0], [63.9, 135525.0], [64.0, 135527.0], [64.1, 135527.0], [64.2, 135527.0], [64.3, 135527.0], [64.4, 135527.0], [64.5, 135527.0], [64.6, 135527.0], [64.7, 135527.0], [64.8, 135527.0], [64.9, 135527.0], [65.0, 135536.0], [65.1, 135536.0], [65.2, 135536.0], [65.3, 135536.0], [65.4, 135536.0], [65.5, 135536.0], [65.6, 135536.0], [65.7, 135536.0], [65.8, 135536.0], [65.9, 135536.0], [66.0, 135546.0], [66.1, 135546.0], [66.2, 135546.0], [66.3, 135546.0], [66.4, 135546.0], [66.5, 135546.0], [66.6, 135546.0], [66.7, 135546.0], [66.8, 135546.0], [66.9, 135546.0], [67.0, 135555.0], [67.1, 135555.0], [67.2, 135555.0], [67.3, 135555.0], [67.4, 135555.0], [67.5, 135555.0], [67.6, 135555.0], [67.7, 135555.0], [67.8, 135555.0], [67.9, 135555.0], [68.0, 135567.0], [68.1, 135567.0], [68.2, 135567.0], [68.3, 135567.0], [68.4, 135567.0], [68.5, 135567.0], [68.6, 135567.0], [68.7, 135567.0], [68.8, 135567.0], [68.9, 135567.0], [69.0, 135577.0], [69.1, 135577.0], [69.2, 135577.0], [69.3, 135577.0], [69.4, 135577.0], [69.5, 135577.0], [69.6, 135577.0], [69.7, 135577.0], [69.8, 135577.0], [69.9, 135577.0], [70.0, 135587.0], [70.1, 135587.0], [70.2, 135587.0], [70.3, 135587.0], [70.4, 135587.0], [70.5, 135587.0], [70.6, 135587.0], [70.7, 135587.0], [70.8, 135587.0], [70.9, 135587.0], [71.0, 135593.0], [71.1, 135593.0], [71.2, 135593.0], [71.3, 135593.0], [71.4, 135593.0], [71.5, 135593.0], [71.6, 135593.0], [71.7, 135593.0], [71.8, 135593.0], [71.9, 135593.0], [72.0, 135612.0], [72.1, 135612.0], [72.2, 135612.0], [72.3, 135612.0], [72.4, 135612.0], [72.5, 135612.0], [72.6, 135612.0], [72.7, 135612.0], [72.8, 135612.0], [72.9, 135612.0], [73.0, 135617.0], [73.1, 135617.0], [73.2, 135617.0], [73.3, 135617.0], [73.4, 135617.0], [73.5, 135617.0], [73.6, 135617.0], [73.7, 135617.0], [73.8, 135617.0], [73.9, 135617.0], [74.0, 135623.0], [74.1, 135623.0], [74.2, 135623.0], [74.3, 135623.0], [74.4, 135623.0], [74.5, 135623.0], [74.6, 135623.0], [74.7, 135623.0], [74.8, 135623.0], [74.9, 135623.0], [75.0, 135642.0], [75.1, 135642.0], [75.2, 135642.0], [75.3, 135642.0], [75.4, 135642.0], [75.5, 135642.0], [75.6, 135642.0], [75.7, 135642.0], [75.8, 135642.0], [75.9, 135642.0], [76.0, 135653.0], [76.1, 135653.0], [76.2, 135653.0], [76.3, 135653.0], [76.4, 135653.0], [76.5, 135653.0], [76.6, 135653.0], [76.7, 135653.0], [76.8, 135653.0], [76.9, 135653.0], [77.0, 135653.0], [77.1, 135653.0], [77.2, 135653.0], [77.3, 135653.0], [77.4, 135653.0], [77.5, 135653.0], [77.6, 135653.0], [77.7, 135653.0], [77.8, 135653.0], [77.9, 135653.0], [78.0, 135664.0], [78.1, 135664.0], [78.2, 135664.0], [78.3, 135664.0], [78.4, 135664.0], [78.5, 135664.0], [78.6, 135664.0], [78.7, 135664.0], [78.8, 135664.0], [78.9, 135664.0], [79.0, 135684.0], [79.1, 135684.0], [79.2, 135684.0], [79.3, 135684.0], [79.4, 135684.0], [79.5, 135684.0], [79.6, 135684.0], [79.7, 135684.0], [79.8, 135684.0], [79.9, 135684.0], [80.0, 135688.0], [80.1, 135688.0], [80.2, 135688.0], [80.3, 135688.0], [80.4, 135688.0], [80.5, 135688.0], [80.6, 135688.0], [80.7, 135688.0], [80.8, 135688.0], [80.9, 135688.0], [81.0, 135699.0], [81.1, 135699.0], [81.2, 135699.0], [81.3, 135699.0], [81.4, 135699.0], [81.5, 135699.0], [81.6, 135699.0], [81.7, 135699.0], [81.8, 135699.0], [81.9, 135699.0], [82.0, 135709.0], [82.1, 135709.0], [82.2, 135709.0], [82.3, 135709.0], [82.4, 135709.0], [82.5, 135709.0], [82.6, 135709.0], [82.7, 135709.0], [82.8, 135709.0], [82.9, 135709.0], [83.0, 135723.0], [83.1, 135723.0], [83.2, 135723.0], [83.3, 135723.0], [83.4, 135723.0], [83.5, 135723.0], [83.6, 135723.0], [83.7, 135723.0], [83.8, 135723.0], [83.9, 135723.0], [84.0, 135738.0], [84.1, 135738.0], [84.2, 135738.0], [84.3, 135738.0], [84.4, 135738.0], [84.5, 135738.0], [84.6, 135738.0], [84.7, 135738.0], [84.8, 135738.0], [84.9, 135738.0], [85.0, 135745.0], [85.1, 135745.0], [85.2, 135745.0], [85.3, 135745.0], [85.4, 135745.0], [85.5, 135745.0], [85.6, 135745.0], [85.7, 135745.0], [85.8, 135745.0], [85.9, 135745.0], [86.0, 135747.0], [86.1, 135747.0], [86.2, 135747.0], [86.3, 135747.0], [86.4, 135747.0], [86.5, 135747.0], [86.6, 135747.0], [86.7, 135747.0], [86.8, 135747.0], [86.9, 135747.0], [87.0, 135757.0], [87.1, 135757.0], [87.2, 135757.0], [87.3, 135757.0], [87.4, 135757.0], [87.5, 135757.0], [87.6, 135757.0], [87.7, 135757.0], [87.8, 135757.0], [87.9, 135757.0], [88.0, 135758.0], [88.1, 135758.0], [88.2, 135758.0], [88.3, 135758.0], [88.4, 135758.0], [88.5, 135758.0], [88.6, 135758.0], [88.7, 135758.0], [88.8, 135758.0], [88.9, 135758.0], [89.0, 135758.0], [89.1, 135758.0], [89.2, 135758.0], [89.3, 135758.0], [89.4, 135758.0], [89.5, 135758.0], [89.6, 135758.0], [89.7, 135758.0], [89.8, 135758.0], [89.9, 135758.0], [90.0, 135758.0], [90.1, 135758.0], [90.2, 135758.0], [90.3, 135758.0], [90.4, 135758.0], [90.5, 135758.0], [90.6, 135758.0], [90.7, 135758.0], [90.8, 135758.0], [90.9, 135758.0], [91.0, 135758.0], [91.1, 135758.0], [91.2, 135758.0], [91.3, 135758.0], [91.4, 135758.0], [91.5, 135758.0], [91.6, 135758.0], [91.7, 135758.0], [91.8, 135758.0], [91.9, 135758.0], [92.0, 135760.0], [92.1, 135760.0], [92.2, 135760.0], [92.3, 135760.0], [92.4, 135760.0], [92.5, 135760.0], [92.6, 135760.0], [92.7, 135760.0], [92.8, 135760.0], [92.9, 135760.0], [93.0, 135760.0], [93.1, 135760.0], [93.2, 135760.0], [93.3, 135760.0], [93.4, 135760.0], [93.5, 135760.0], [93.6, 135760.0], [93.7, 135760.0], [93.8, 135760.0], [93.9, 135760.0], [94.0, 135761.0], [94.1, 135761.0], [94.2, 135761.0], [94.3, 135761.0], [94.4, 135761.0], [94.5, 135761.0], [94.6, 135761.0], [94.7, 135761.0], [94.8, 135761.0], [94.9, 135761.0], [95.0, 135763.0], [95.1, 135763.0], [95.2, 135763.0], [95.3, 135763.0], [95.4, 135763.0], [95.5, 135763.0], [95.6, 135763.0], [95.7, 135763.0], [95.8, 135763.0], [95.9, 135763.0], [96.0, 135763.0], [96.1, 135763.0], [96.2, 135763.0], [96.3, 135763.0], [96.4, 135763.0], [96.5, 135763.0], [96.6, 135763.0], [96.7, 135763.0], [96.8, 135763.0], [96.9, 135763.0], [97.0, 135764.0], [97.1, 135764.0], [97.2, 135764.0], [97.3, 135764.0], [97.4, 135764.0], [97.5, 135764.0], [97.6, 135764.0], [97.7, 135764.0], [97.8, 135764.0], [97.9, 135764.0], [98.0, 135769.0], [98.1, 135769.0], [98.2, 135769.0], [98.3, 135769.0], [98.4, 135769.0], [98.5, 135769.0], [98.6, 135769.0], [98.7, 135769.0], [98.8, 135769.0], [98.9, 135769.0], [99.0, 135770.0], [99.1, 135770.0], [99.2, 135770.0], [99.3, 135770.0], [99.4, 135770.0], [99.5, 135770.0], [99.6, 135770.0], [99.7, 135770.0], [99.8, 135770.0], [99.9, 135770.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 134800.0, "maxY": 18.0, "series": [{"data": [[135400.0, 10.0], [135000.0, 10.0], [135600.0, 10.0], [135200.0, 9.0], [134800.0, 2.0], [135700.0, 18.0], [135500.0, 11.0], [134900.0, 10.0], [135100.0, 10.0], [135300.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 135700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 95.87999999999998, "minX": 1.75289538E12, "maxY": 95.87999999999998, "series": [{"data": [[1.75289538E12, 95.87999999999998]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75289538E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135044.5, "minX": 59.0, "maxY": 135758.0, "series": [{"data": [[59.0, 135738.0], [64.0, 135639.0], [69.0, 135265.0], [68.0, 135485.0], [75.0, 135275.0], [74.0, 135758.0], [83.0, 135758.0], [81.0, 135758.0], [80.0, 135723.0], [87.0, 135165.0], [84.0, 135044.5], [91.0, 135536.0], [89.0, 135160.66666666666], [88.0, 135186.0], [94.0, 135720.5], [92.0, 135229.0], [99.0, 135605.0], [100.0, 135357.74999999994]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[95.87999999999998, 135377.93999999994]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75289538E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75289538E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75289538E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75289538E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 135377.93999999994, "minX": 1.75289538E12, "maxY": 135377.93999999994, "series": [{"data": [[1.75289538E12, 135377.93999999994]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75289538E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75289538E12, "maxY": 4.9E-324, "series": [{"data": [[1.75289538E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75289538E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 135377.71, "minX": 1.75289538E12, "maxY": 135377.71, "series": [{"data": [[1.75289538E12, 135377.71]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75289538E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 135388.5, "minX": 100.0, "maxY": 135388.5, "series": [{"data": [[100.0, 135388.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75289526E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75289526E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75289526E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75289538E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75289538E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75289538E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75289538E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75289538E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75289538E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75289538E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75289538E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75289538E12, "title": "Total Transactions Per Second"}},
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

