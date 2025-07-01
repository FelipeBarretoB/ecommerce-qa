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
        data: {"result": {"minY": 362.0, "minX": 0.0, "maxY": 1289.0, "series": [{"data": [[0.0, 362.0], [0.1, 362.0], [0.2, 362.0], [0.3, 362.0], [0.4, 362.0], [0.5, 362.0], [0.6, 362.0], [0.7, 362.0], [0.8, 362.0], [0.9, 362.0], [1.0, 384.0], [1.1, 384.0], [1.2, 384.0], [1.3, 384.0], [1.4, 384.0], [1.5, 384.0], [1.6, 384.0], [1.7, 384.0], [1.8, 384.0], [1.9, 384.0], [2.0, 390.0], [2.1, 390.0], [2.2, 390.0], [2.3, 390.0], [2.4, 390.0], [2.5, 390.0], [2.6, 390.0], [2.7, 390.0], [2.8, 390.0], [2.9, 390.0], [3.0, 393.0], [3.1, 393.0], [3.2, 393.0], [3.3, 393.0], [3.4, 393.0], [3.5, 393.0], [3.6, 393.0], [3.7, 393.0], [3.8, 393.0], [3.9, 393.0], [4.0, 404.0], [4.1, 404.0], [4.2, 404.0], [4.3, 404.0], [4.4, 404.0], [4.5, 404.0], [4.6, 404.0], [4.7, 404.0], [4.8, 404.0], [4.9, 404.0], [5.0, 406.0], [5.1, 406.0], [5.2, 406.0], [5.3, 406.0], [5.4, 406.0], [5.5, 406.0], [5.6, 406.0], [5.7, 406.0], [5.8, 406.0], [5.9, 406.0], [6.0, 408.0], [6.1, 408.0], [6.2, 408.0], [6.3, 408.0], [6.4, 408.0], [6.5, 408.0], [6.6, 408.0], [6.7, 408.0], [6.8, 408.0], [6.9, 408.0], [7.0, 413.0], [7.1, 413.0], [7.2, 413.0], [7.3, 413.0], [7.4, 413.0], [7.5, 413.0], [7.6, 413.0], [7.7, 413.0], [7.8, 413.0], [7.9, 413.0], [8.0, 421.0], [8.1, 421.0], [8.2, 421.0], [8.3, 421.0], [8.4, 421.0], [8.5, 421.0], [8.6, 421.0], [8.7, 421.0], [8.8, 421.0], [8.9, 421.0], [9.0, 423.0], [9.1, 423.0], [9.2, 423.0], [9.3, 423.0], [9.4, 423.0], [9.5, 423.0], [9.6, 423.0], [9.7, 423.0], [9.8, 423.0], [9.9, 423.0], [10.0, 436.0], [10.1, 436.0], [10.2, 436.0], [10.3, 436.0], [10.4, 436.0], [10.5, 436.0], [10.6, 436.0], [10.7, 436.0], [10.8, 436.0], [10.9, 436.0], [11.0, 454.0], [11.1, 454.0], [11.2, 454.0], [11.3, 454.0], [11.4, 454.0], [11.5, 454.0], [11.6, 454.0], [11.7, 454.0], [11.8, 454.0], [11.9, 454.0], [12.0, 457.0], [12.1, 457.0], [12.2, 457.0], [12.3, 457.0], [12.4, 457.0], [12.5, 457.0], [12.6, 457.0], [12.7, 457.0], [12.8, 457.0], [12.9, 457.0], [13.0, 479.0], [13.1, 479.0], [13.2, 479.0], [13.3, 479.0], [13.4, 479.0], [13.5, 479.0], [13.6, 479.0], [13.7, 479.0], [13.8, 479.0], [13.9, 479.0], [14.0, 481.0], [14.1, 481.0], [14.2, 481.0], [14.3, 481.0], [14.4, 481.0], [14.5, 481.0], [14.6, 481.0], [14.7, 481.0], [14.8, 481.0], [14.9, 481.0], [15.0, 485.0], [15.1, 485.0], [15.2, 485.0], [15.3, 485.0], [15.4, 485.0], [15.5, 485.0], [15.6, 485.0], [15.7, 485.0], [15.8, 485.0], [15.9, 485.0], [16.0, 493.0], [16.1, 493.0], [16.2, 493.0], [16.3, 493.0], [16.4, 493.0], [16.5, 493.0], [16.6, 493.0], [16.7, 493.0], [16.8, 493.0], [16.9, 493.0], [17.0, 502.0], [17.1, 502.0], [17.2, 502.0], [17.3, 502.0], [17.4, 502.0], [17.5, 502.0], [17.6, 502.0], [17.7, 502.0], [17.8, 502.0], [17.9, 502.0], [18.0, 530.0], [18.1, 530.0], [18.2, 530.0], [18.3, 530.0], [18.4, 530.0], [18.5, 530.0], [18.6, 530.0], [18.7, 530.0], [18.8, 530.0], [18.9, 530.0], [19.0, 541.0], [19.1, 541.0], [19.2, 541.0], [19.3, 541.0], [19.4, 541.0], [19.5, 541.0], [19.6, 541.0], [19.7, 541.0], [19.8, 541.0], [19.9, 541.0], [20.0, 561.0], [20.1, 561.0], [20.2, 561.0], [20.3, 561.0], [20.4, 561.0], [20.5, 561.0], [20.6, 561.0], [20.7, 561.0], [20.8, 561.0], [20.9, 561.0], [21.0, 566.0], [21.1, 566.0], [21.2, 566.0], [21.3, 566.0], [21.4, 566.0], [21.5, 566.0], [21.6, 566.0], [21.7, 566.0], [21.8, 566.0], [21.9, 566.0], [22.0, 571.0], [22.1, 571.0], [22.2, 571.0], [22.3, 571.0], [22.4, 571.0], [22.5, 571.0], [22.6, 571.0], [22.7, 571.0], [22.8, 571.0], [22.9, 571.0], [23.0, 592.0], [23.1, 592.0], [23.2, 592.0], [23.3, 592.0], [23.4, 592.0], [23.5, 592.0], [23.6, 592.0], [23.7, 592.0], [23.8, 592.0], [23.9, 592.0], [24.0, 599.0], [24.1, 599.0], [24.2, 599.0], [24.3, 599.0], [24.4, 599.0], [24.5, 599.0], [24.6, 599.0], [24.7, 599.0], [24.8, 599.0], [24.9, 599.0], [25.0, 600.0], [25.1, 600.0], [25.2, 600.0], [25.3, 600.0], [25.4, 600.0], [25.5, 600.0], [25.6, 600.0], [25.7, 600.0], [25.8, 600.0], [25.9, 600.0], [26.0, 604.0], [26.1, 604.0], [26.2, 604.0], [26.3, 604.0], [26.4, 604.0], [26.5, 604.0], [26.6, 604.0], [26.7, 604.0], [26.8, 604.0], [26.9, 604.0], [27.0, 605.0], [27.1, 605.0], [27.2, 605.0], [27.3, 605.0], [27.4, 605.0], [27.5, 605.0], [27.6, 605.0], [27.7, 605.0], [27.8, 605.0], [27.9, 605.0], [28.0, 607.0], [28.1, 607.0], [28.2, 607.0], [28.3, 607.0], [28.4, 607.0], [28.5, 607.0], [28.6, 607.0], [28.7, 607.0], [28.8, 607.0], [28.9, 607.0], [29.0, 625.0], [29.1, 625.0], [29.2, 625.0], [29.3, 625.0], [29.4, 625.0], [29.5, 625.0], [29.6, 625.0], [29.7, 625.0], [29.8, 625.0], [29.9, 625.0], [30.0, 643.0], [30.1, 643.0], [30.2, 643.0], [30.3, 643.0], [30.4, 643.0], [30.5, 643.0], [30.6, 643.0], [30.7, 643.0], [30.8, 643.0], [30.9, 643.0], [31.0, 671.0], [31.1, 671.0], [31.2, 671.0], [31.3, 671.0], [31.4, 671.0], [31.5, 671.0], [31.6, 671.0], [31.7, 671.0], [31.8, 671.0], [31.9, 671.0], [32.0, 676.0], [32.1, 676.0], [32.2, 676.0], [32.3, 676.0], [32.4, 676.0], [32.5, 676.0], [32.6, 676.0], [32.7, 676.0], [32.8, 676.0], [32.9, 676.0], [33.0, 676.0], [33.1, 676.0], [33.2, 676.0], [33.3, 676.0], [33.4, 676.0], [33.5, 676.0], [33.6, 676.0], [33.7, 676.0], [33.8, 676.0], [33.9, 676.0], [34.0, 695.0], [34.1, 695.0], [34.2, 695.0], [34.3, 695.0], [34.4, 695.0], [34.5, 695.0], [34.6, 695.0], [34.7, 695.0], [34.8, 695.0], [34.9, 695.0], [35.0, 705.0], [35.1, 705.0], [35.2, 705.0], [35.3, 705.0], [35.4, 705.0], [35.5, 705.0], [35.6, 705.0], [35.7, 705.0], [35.8, 705.0], [35.9, 705.0], [36.0, 744.0], [36.1, 744.0], [36.2, 744.0], [36.3, 744.0], [36.4, 744.0], [36.5, 744.0], [36.6, 744.0], [36.7, 744.0], [36.8, 744.0], [36.9, 744.0], [37.0, 747.0], [37.1, 747.0], [37.2, 747.0], [37.3, 747.0], [37.4, 747.0], [37.5, 747.0], [37.6, 747.0], [37.7, 747.0], [37.8, 747.0], [37.9, 747.0], [38.0, 748.0], [38.1, 748.0], [38.2, 748.0], [38.3, 748.0], [38.4, 748.0], [38.5, 748.0], [38.6, 748.0], [38.7, 748.0], [38.8, 748.0], [38.9, 748.0], [39.0, 749.0], [39.1, 749.0], [39.2, 749.0], [39.3, 749.0], [39.4, 749.0], [39.5, 749.0], [39.6, 749.0], [39.7, 749.0], [39.8, 749.0], [39.9, 749.0], [40.0, 756.0], [40.1, 756.0], [40.2, 756.0], [40.3, 756.0], [40.4, 756.0], [40.5, 756.0], [40.6, 756.0], [40.7, 756.0], [40.8, 756.0], [40.9, 756.0], [41.0, 760.0], [41.1, 760.0], [41.2, 760.0], [41.3, 760.0], [41.4, 760.0], [41.5, 760.0], [41.6, 760.0], [41.7, 760.0], [41.8, 760.0], [41.9, 760.0], [42.0, 766.0], [42.1, 766.0], [42.2, 766.0], [42.3, 766.0], [42.4, 766.0], [42.5, 766.0], [42.6, 766.0], [42.7, 766.0], [42.8, 766.0], [42.9, 766.0], [43.0, 781.0], [43.1, 781.0], [43.2, 781.0], [43.3, 781.0], [43.4, 781.0], [43.5, 781.0], [43.6, 781.0], [43.7, 781.0], [43.8, 781.0], [43.9, 781.0], [44.0, 784.0], [44.1, 784.0], [44.2, 784.0], [44.3, 784.0], [44.4, 784.0], [44.5, 784.0], [44.6, 784.0], [44.7, 784.0], [44.8, 784.0], [44.9, 784.0], [45.0, 794.0], [45.1, 794.0], [45.2, 794.0], [45.3, 794.0], [45.4, 794.0], [45.5, 794.0], [45.6, 794.0], [45.7, 794.0], [45.8, 794.0], [45.9, 794.0], [46.0, 795.0], [46.1, 795.0], [46.2, 795.0], [46.3, 795.0], [46.4, 795.0], [46.5, 795.0], [46.6, 795.0], [46.7, 795.0], [46.8, 795.0], [46.9, 795.0], [47.0, 801.0], [47.1, 801.0], [47.2, 801.0], [47.3, 801.0], [47.4, 801.0], [47.5, 801.0], [47.6, 801.0], [47.7, 801.0], [47.8, 801.0], [47.9, 801.0], [48.0, 811.0], [48.1, 811.0], [48.2, 811.0], [48.3, 811.0], [48.4, 811.0], [48.5, 811.0], [48.6, 811.0], [48.7, 811.0], [48.8, 811.0], [48.9, 811.0], [49.0, 817.0], [49.1, 817.0], [49.2, 817.0], [49.3, 817.0], [49.4, 817.0], [49.5, 817.0], [49.6, 817.0], [49.7, 817.0], [49.8, 817.0], [49.9, 817.0], [50.0, 829.0], [50.1, 829.0], [50.2, 829.0], [50.3, 829.0], [50.4, 829.0], [50.5, 829.0], [50.6, 829.0], [50.7, 829.0], [50.8, 829.0], [50.9, 829.0], [51.0, 836.0], [51.1, 836.0], [51.2, 836.0], [51.3, 836.0], [51.4, 836.0], [51.5, 836.0], [51.6, 836.0], [51.7, 836.0], [51.8, 836.0], [51.9, 836.0], [52.0, 849.0], [52.1, 849.0], [52.2, 849.0], [52.3, 849.0], [52.4, 849.0], [52.5, 849.0], [52.6, 849.0], [52.7, 849.0], [52.8, 849.0], [52.9, 849.0], [53.0, 851.0], [53.1, 851.0], [53.2, 851.0], [53.3, 851.0], [53.4, 851.0], [53.5, 851.0], [53.6, 851.0], [53.7, 851.0], [53.8, 851.0], [53.9, 851.0], [54.0, 857.0], [54.1, 857.0], [54.2, 857.0], [54.3, 857.0], [54.4, 857.0], [54.5, 857.0], [54.6, 857.0], [54.7, 857.0], [54.8, 857.0], [54.9, 857.0], [55.0, 930.0], [55.1, 930.0], [55.2, 930.0], [55.3, 930.0], [55.4, 930.0], [55.5, 930.0], [55.6, 930.0], [55.7, 930.0], [55.8, 930.0], [55.9, 930.0], [56.0, 942.0], [56.1, 942.0], [56.2, 942.0], [56.3, 942.0], [56.4, 942.0], [56.5, 942.0], [56.6, 942.0], [56.7, 942.0], [56.8, 942.0], [56.9, 942.0], [57.0, 943.0], [57.1, 943.0], [57.2, 943.0], [57.3, 943.0], [57.4, 943.0], [57.5, 943.0], [57.6, 943.0], [57.7, 943.0], [57.8, 943.0], [57.9, 943.0], [58.0, 943.0], [58.1, 943.0], [58.2, 943.0], [58.3, 943.0], [58.4, 943.0], [58.5, 943.0], [58.6, 943.0], [58.7, 943.0], [58.8, 943.0], [58.9, 943.0], [59.0, 945.0], [59.1, 945.0], [59.2, 945.0], [59.3, 945.0], [59.4, 945.0], [59.5, 945.0], [59.6, 945.0], [59.7, 945.0], [59.8, 945.0], [59.9, 945.0], [60.0, 948.0], [60.1, 948.0], [60.2, 948.0], [60.3, 948.0], [60.4, 948.0], [60.5, 948.0], [60.6, 948.0], [60.7, 948.0], [60.8, 948.0], [60.9, 948.0], [61.0, 960.0], [61.1, 960.0], [61.2, 960.0], [61.3, 960.0], [61.4, 960.0], [61.5, 960.0], [61.6, 960.0], [61.7, 960.0], [61.8, 960.0], [61.9, 960.0], [62.0, 961.0], [62.1, 961.0], [62.2, 961.0], [62.3, 961.0], [62.4, 961.0], [62.5, 961.0], [62.6, 961.0], [62.7, 961.0], [62.8, 961.0], [62.9, 961.0], [63.0, 988.0], [63.1, 988.0], [63.2, 988.0], [63.3, 988.0], [63.4, 988.0], [63.5, 988.0], [63.6, 988.0], [63.7, 988.0], [63.8, 988.0], [63.9, 988.0], [64.0, 1004.0], [64.1, 1004.0], [64.2, 1004.0], [64.3, 1004.0], [64.4, 1004.0], [64.5, 1004.0], [64.6, 1004.0], [64.7, 1004.0], [64.8, 1004.0], [64.9, 1004.0], [65.0, 1019.0], [65.1, 1019.0], [65.2, 1019.0], [65.3, 1019.0], [65.4, 1019.0], [65.5, 1019.0], [65.6, 1019.0], [65.7, 1019.0], [65.8, 1019.0], [65.9, 1019.0], [66.0, 1020.0], [66.1, 1020.0], [66.2, 1020.0], [66.3, 1020.0], [66.4, 1020.0], [66.5, 1020.0], [66.6, 1020.0], [66.7, 1020.0], [66.8, 1020.0], [66.9, 1020.0], [67.0, 1022.0], [67.1, 1022.0], [67.2, 1022.0], [67.3, 1022.0], [67.4, 1022.0], [67.5, 1022.0], [67.6, 1022.0], [67.7, 1022.0], [67.8, 1022.0], [67.9, 1022.0], [68.0, 1041.0], [68.1, 1041.0], [68.2, 1041.0], [68.3, 1041.0], [68.4, 1041.0], [68.5, 1041.0], [68.6, 1041.0], [68.7, 1041.0], [68.8, 1041.0], [68.9, 1041.0], [69.0, 1065.0], [69.1, 1065.0], [69.2, 1065.0], [69.3, 1065.0], [69.4, 1065.0], [69.5, 1065.0], [69.6, 1065.0], [69.7, 1065.0], [69.8, 1065.0], [69.9, 1065.0], [70.0, 1065.0], [70.1, 1065.0], [70.2, 1065.0], [70.3, 1065.0], [70.4, 1065.0], [70.5, 1065.0], [70.6, 1065.0], [70.7, 1065.0], [70.8, 1065.0], [70.9, 1065.0], [71.0, 1067.0], [71.1, 1067.0], [71.2, 1067.0], [71.3, 1067.0], [71.4, 1067.0], [71.5, 1067.0], [71.6, 1067.0], [71.7, 1067.0], [71.8, 1067.0], [71.9, 1067.0], [72.0, 1083.0], [72.1, 1083.0], [72.2, 1083.0], [72.3, 1083.0], [72.4, 1083.0], [72.5, 1083.0], [72.6, 1083.0], [72.7, 1083.0], [72.8, 1083.0], [72.9, 1083.0], [73.0, 1089.0], [73.1, 1089.0], [73.2, 1089.0], [73.3, 1089.0], [73.4, 1089.0], [73.5, 1089.0], [73.6, 1089.0], [73.7, 1089.0], [73.8, 1089.0], [73.9, 1089.0], [74.0, 1092.0], [74.1, 1092.0], [74.2, 1092.0], [74.3, 1092.0], [74.4, 1092.0], [74.5, 1092.0], [74.6, 1092.0], [74.7, 1092.0], [74.8, 1092.0], [74.9, 1092.0], [75.0, 1097.0], [75.1, 1097.0], [75.2, 1097.0], [75.3, 1097.0], [75.4, 1097.0], [75.5, 1097.0], [75.6, 1097.0], [75.7, 1097.0], [75.8, 1097.0], [75.9, 1097.0], [76.0, 1118.0], [76.1, 1118.0], [76.2, 1118.0], [76.3, 1118.0], [76.4, 1118.0], [76.5, 1118.0], [76.6, 1118.0], [76.7, 1118.0], [76.8, 1118.0], [76.9, 1118.0], [77.0, 1133.0], [77.1, 1133.0], [77.2, 1133.0], [77.3, 1133.0], [77.4, 1133.0], [77.5, 1133.0], [77.6, 1133.0], [77.7, 1133.0], [77.8, 1133.0], [77.9, 1133.0], [78.0, 1153.0], [78.1, 1153.0], [78.2, 1153.0], [78.3, 1153.0], [78.4, 1153.0], [78.5, 1153.0], [78.6, 1153.0], [78.7, 1153.0], [78.8, 1153.0], [78.9, 1153.0], [79.0, 1155.0], [79.1, 1155.0], [79.2, 1155.0], [79.3, 1155.0], [79.4, 1155.0], [79.5, 1155.0], [79.6, 1155.0], [79.7, 1155.0], [79.8, 1155.0], [79.9, 1155.0], [80.0, 1156.0], [80.1, 1156.0], [80.2, 1156.0], [80.3, 1156.0], [80.4, 1156.0], [80.5, 1156.0], [80.6, 1156.0], [80.7, 1156.0], [80.8, 1156.0], [80.9, 1156.0], [81.0, 1163.0], [81.1, 1163.0], [81.2, 1163.0], [81.3, 1163.0], [81.4, 1163.0], [81.5, 1163.0], [81.6, 1163.0], [81.7, 1163.0], [81.8, 1163.0], [81.9, 1163.0], [82.0, 1165.0], [82.1, 1165.0], [82.2, 1165.0], [82.3, 1165.0], [82.4, 1165.0], [82.5, 1165.0], [82.6, 1165.0], [82.7, 1165.0], [82.8, 1165.0], [82.9, 1165.0], [83.0, 1177.0], [83.1, 1177.0], [83.2, 1177.0], [83.3, 1177.0], [83.4, 1177.0], [83.5, 1177.0], [83.6, 1177.0], [83.7, 1177.0], [83.8, 1177.0], [83.9, 1177.0], [84.0, 1177.0], [84.1, 1177.0], [84.2, 1177.0], [84.3, 1177.0], [84.4, 1177.0], [84.5, 1177.0], [84.6, 1177.0], [84.7, 1177.0], [84.8, 1177.0], [84.9, 1177.0], [85.0, 1178.0], [85.1, 1178.0], [85.2, 1178.0], [85.3, 1178.0], [85.4, 1178.0], [85.5, 1178.0], [85.6, 1178.0], [85.7, 1178.0], [85.8, 1178.0], [85.9, 1178.0], [86.0, 1185.0], [86.1, 1185.0], [86.2, 1185.0], [86.3, 1185.0], [86.4, 1185.0], [86.5, 1185.0], [86.6, 1185.0], [86.7, 1185.0], [86.8, 1185.0], [86.9, 1185.0], [87.0, 1188.0], [87.1, 1188.0], [87.2, 1188.0], [87.3, 1188.0], [87.4, 1188.0], [87.5, 1188.0], [87.6, 1188.0], [87.7, 1188.0], [87.8, 1188.0], [87.9, 1188.0], [88.0, 1189.0], [88.1, 1189.0], [88.2, 1189.0], [88.3, 1189.0], [88.4, 1189.0], [88.5, 1189.0], [88.6, 1189.0], [88.7, 1189.0], [88.8, 1189.0], [88.9, 1189.0], [89.0, 1190.0], [89.1, 1190.0], [89.2, 1190.0], [89.3, 1190.0], [89.4, 1190.0], [89.5, 1190.0], [89.6, 1190.0], [89.7, 1190.0], [89.8, 1190.0], [89.9, 1190.0], [90.0, 1192.0], [90.1, 1192.0], [90.2, 1192.0], [90.3, 1192.0], [90.4, 1192.0], [90.5, 1192.0], [90.6, 1192.0], [90.7, 1192.0], [90.8, 1192.0], [90.9, 1192.0], [91.0, 1198.0], [91.1, 1198.0], [91.2, 1198.0], [91.3, 1198.0], [91.4, 1198.0], [91.5, 1198.0], [91.6, 1198.0], [91.7, 1198.0], [91.8, 1198.0], [91.9, 1198.0], [92.0, 1198.0], [92.1, 1198.0], [92.2, 1198.0], [92.3, 1198.0], [92.4, 1198.0], [92.5, 1198.0], [92.6, 1198.0], [92.7, 1198.0], [92.8, 1198.0], [92.9, 1198.0], [93.0, 1204.0], [93.1, 1204.0], [93.2, 1204.0], [93.3, 1204.0], [93.4, 1204.0], [93.5, 1204.0], [93.6, 1204.0], [93.7, 1204.0], [93.8, 1204.0], [93.9, 1204.0], [94.0, 1204.0], [94.1, 1204.0], [94.2, 1204.0], [94.3, 1204.0], [94.4, 1204.0], [94.5, 1204.0], [94.6, 1204.0], [94.7, 1204.0], [94.8, 1204.0], [94.9, 1204.0], [95.0, 1215.0], [95.1, 1215.0], [95.2, 1215.0], [95.3, 1215.0], [95.4, 1215.0], [95.5, 1215.0], [95.6, 1215.0], [95.7, 1215.0], [95.8, 1215.0], [95.9, 1215.0], [96.0, 1231.0], [96.1, 1231.0], [96.2, 1231.0], [96.3, 1231.0], [96.4, 1231.0], [96.5, 1231.0], [96.6, 1231.0], [96.7, 1231.0], [96.8, 1231.0], [96.9, 1231.0], [97.0, 1244.0], [97.1, 1244.0], [97.2, 1244.0], [97.3, 1244.0], [97.4, 1244.0], [97.5, 1244.0], [97.6, 1244.0], [97.7, 1244.0], [97.8, 1244.0], [97.9, 1244.0], [98.0, 1271.0], [98.1, 1271.0], [98.2, 1271.0], [98.3, 1271.0], [98.4, 1271.0], [98.5, 1271.0], [98.6, 1271.0], [98.7, 1271.0], [98.8, 1271.0], [98.9, 1271.0], [99.0, 1289.0], [99.1, 1289.0], [99.2, 1289.0], [99.3, 1289.0], [99.4, 1289.0], [99.5, 1289.0], [99.6, 1289.0], [99.7, 1289.0], [99.8, 1289.0], [99.9, 1289.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 300.0, "maxY": 17.0, "series": [{"data": [[1100.0, 17.0], [600.0, 10.0], [300.0, 4.0], [1200.0, 7.0], [700.0, 12.0], [400.0, 13.0], [800.0, 8.0], [900.0, 9.0], [1000.0, 12.0], [500.0, 8.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 68.35999999999999, "minX": 1.75134108E12, "maxY": 68.35999999999999, "series": [{"data": [[1.75134108E12, 68.35999999999999]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75134108E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 404.0, "minX": 2.0, "maxY": 1289.0, "series": [{"data": [[2.0, 1289.0], [39.0, 605.0], [38.0, 766.0], [40.0, 1004.0], [42.0, 776.0], [45.0, 676.0], [44.0, 404.0], [47.0, 1185.0], [48.0, 996.0], [3.0, 850.0], [51.0, 817.0], [50.0, 1093.5], [53.0, 748.0], [59.0, 1089.0], [58.0, 749.0], [63.0, 829.0], [62.0, 1188.0], [66.0, 485.0], [65.0, 851.0], [64.0, 571.0], [4.0, 481.0], [68.0, 1192.0], [74.0, 541.0], [72.0, 493.0], [79.0, 1155.0], [82.0, 784.0], [80.0, 1065.0], [5.0, 566.0], [86.0, 778.0], [90.0, 991.0], [94.0, 457.0], [98.0, 828.5], [100.0, 843.767441860465], [8.0, 802.6666666666666], [9.0, 408.0], [10.0, 413.0], [12.0, 934.0], [13.0, 1271.0], [14.0, 948.0], [15.0, 705.0], [16.0, 406.0], [17.0, 760.0], [20.0, 767.5], [22.0, 1041.0], [25.0, 960.0], [29.0, 1118.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[68.35999999999999, 837.2999999999997]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 248.33333333333334, "minX": 1.75134108E12, "maxY": 740.0, "series": [{"data": [[1.75134108E12, 740.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75134108E12, 248.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75134108E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 837.2999999999997, "minX": 1.75134108E12, "maxY": 837.2999999999997, "series": [{"data": [[1.75134108E12, 837.2999999999997]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75134108E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 829.4500000000002, "minX": 1.75134108E12, "maxY": 829.4500000000002, "series": [{"data": [[1.75134108E12, 829.4500000000002]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75134108E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 791.4399999999997, "minX": 1.75134108E12, "maxY": 791.4399999999997, "series": [{"data": [[1.75134108E12, 791.4399999999997]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75134108E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 823.0, "minX": 100.0, "maxY": 823.0, "series": [{"data": [[100.0, 823.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 799.5, "minX": 100.0, "maxY": 799.5, "series": [{"data": [[100.0, 799.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75134108E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75134108E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75134108E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75134108E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75134108E12, 1.6666666666666667]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75134108E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75134108E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75134108E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75134108E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75134108E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75134108E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75134108E12, "title": "Total Transactions Per Second"}},
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

