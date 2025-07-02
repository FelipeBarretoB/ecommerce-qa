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
        data: {"result": {"minY": 278.0, "minX": 0.0, "maxY": 1218.0, "series": [{"data": [[0.0, 278.0], [0.1, 278.0], [0.2, 278.0], [0.3, 278.0], [0.4, 278.0], [0.5, 278.0], [0.6, 278.0], [0.7, 278.0], [0.8, 278.0], [0.9, 278.0], [1.0, 279.0], [1.1, 279.0], [1.2, 279.0], [1.3, 279.0], [1.4, 279.0], [1.5, 279.0], [1.6, 279.0], [1.7, 279.0], [1.8, 279.0], [1.9, 279.0], [2.0, 280.0], [2.1, 280.0], [2.2, 280.0], [2.3, 280.0], [2.4, 280.0], [2.5, 280.0], [2.6, 280.0], [2.7, 280.0], [2.8, 280.0], [2.9, 280.0], [3.0, 291.0], [3.1, 291.0], [3.2, 291.0], [3.3, 291.0], [3.4, 291.0], [3.5, 291.0], [3.6, 291.0], [3.7, 291.0], [3.8, 291.0], [3.9, 291.0], [4.0, 317.0], [4.1, 317.0], [4.2, 317.0], [4.3, 317.0], [4.4, 317.0], [4.5, 317.0], [4.6, 317.0], [4.7, 317.0], [4.8, 317.0], [4.9, 317.0], [5.0, 333.0], [5.1, 333.0], [5.2, 333.0], [5.3, 333.0], [5.4, 333.0], [5.5, 333.0], [5.6, 333.0], [5.7, 333.0], [5.8, 333.0], [5.9, 333.0], [6.0, 351.0], [6.1, 351.0], [6.2, 351.0], [6.3, 351.0], [6.4, 351.0], [6.5, 351.0], [6.6, 351.0], [6.7, 351.0], [6.8, 351.0], [6.9, 351.0], [7.0, 371.0], [7.1, 371.0], [7.2, 371.0], [7.3, 371.0], [7.4, 371.0], [7.5, 371.0], [7.6, 371.0], [7.7, 371.0], [7.8, 371.0], [7.9, 371.0], [8.0, 394.0], [8.1, 394.0], [8.2, 394.0], [8.3, 394.0], [8.4, 394.0], [8.5, 394.0], [8.6, 394.0], [8.7, 394.0], [8.8, 394.0], [8.9, 394.0], [9.0, 395.0], [9.1, 395.0], [9.2, 395.0], [9.3, 395.0], [9.4, 395.0], [9.5, 395.0], [9.6, 395.0], [9.7, 395.0], [9.8, 395.0], [9.9, 395.0], [10.0, 417.0], [10.1, 417.0], [10.2, 417.0], [10.3, 417.0], [10.4, 417.0], [10.5, 417.0], [10.6, 417.0], [10.7, 417.0], [10.8, 417.0], [10.9, 417.0], [11.0, 438.0], [11.1, 438.0], [11.2, 438.0], [11.3, 438.0], [11.4, 438.0], [11.5, 438.0], [11.6, 438.0], [11.7, 438.0], [11.8, 438.0], [11.9, 438.0], [12.0, 439.0], [12.1, 439.0], [12.2, 439.0], [12.3, 439.0], [12.4, 439.0], [12.5, 439.0], [12.6, 439.0], [12.7, 439.0], [12.8, 439.0], [12.9, 439.0], [13.0, 441.0], [13.1, 441.0], [13.2, 441.0], [13.3, 441.0], [13.4, 441.0], [13.5, 441.0], [13.6, 441.0], [13.7, 441.0], [13.8, 441.0], [13.9, 441.0], [14.0, 450.0], [14.1, 450.0], [14.2, 450.0], [14.3, 450.0], [14.4, 450.0], [14.5, 450.0], [14.6, 450.0], [14.7, 450.0], [14.8, 450.0], [14.9, 450.0], [15.0, 454.0], [15.1, 454.0], [15.2, 454.0], [15.3, 454.0], [15.4, 454.0], [15.5, 454.0], [15.6, 454.0], [15.7, 454.0], [15.8, 454.0], [15.9, 454.0], [16.0, 489.0], [16.1, 489.0], [16.2, 489.0], [16.3, 489.0], [16.4, 489.0], [16.5, 489.0], [16.6, 489.0], [16.7, 489.0], [16.8, 489.0], [16.9, 489.0], [17.0, 492.0], [17.1, 492.0], [17.2, 492.0], [17.3, 492.0], [17.4, 492.0], [17.5, 492.0], [17.6, 492.0], [17.7, 492.0], [17.8, 492.0], [17.9, 492.0], [18.0, 505.0], [18.1, 505.0], [18.2, 505.0], [18.3, 505.0], [18.4, 505.0], [18.5, 505.0], [18.6, 505.0], [18.7, 505.0], [18.8, 505.0], [18.9, 505.0], [19.0, 518.0], [19.1, 518.0], [19.2, 518.0], [19.3, 518.0], [19.4, 518.0], [19.5, 518.0], [19.6, 518.0], [19.7, 518.0], [19.8, 518.0], [19.9, 518.0], [20.0, 522.0], [20.1, 522.0], [20.2, 522.0], [20.3, 522.0], [20.4, 522.0], [20.5, 522.0], [20.6, 522.0], [20.7, 522.0], [20.8, 522.0], [20.9, 522.0], [21.0, 528.0], [21.1, 528.0], [21.2, 528.0], [21.3, 528.0], [21.4, 528.0], [21.5, 528.0], [21.6, 528.0], [21.7, 528.0], [21.8, 528.0], [21.9, 528.0], [22.0, 547.0], [22.1, 547.0], [22.2, 547.0], [22.3, 547.0], [22.4, 547.0], [22.5, 547.0], [22.6, 547.0], [22.7, 547.0], [22.8, 547.0], [22.9, 547.0], [23.0, 562.0], [23.1, 562.0], [23.2, 562.0], [23.3, 562.0], [23.4, 562.0], [23.5, 562.0], [23.6, 562.0], [23.7, 562.0], [23.8, 562.0], [23.9, 562.0], [24.0, 563.0], [24.1, 563.0], [24.2, 563.0], [24.3, 563.0], [24.4, 563.0], [24.5, 563.0], [24.6, 563.0], [24.7, 563.0], [24.8, 563.0], [24.9, 563.0], [25.0, 572.0], [25.1, 572.0], [25.2, 572.0], [25.3, 572.0], [25.4, 572.0], [25.5, 572.0], [25.6, 572.0], [25.7, 572.0], [25.8, 572.0], [25.9, 572.0], [26.0, 584.0], [26.1, 584.0], [26.2, 584.0], [26.3, 584.0], [26.4, 584.0], [26.5, 584.0], [26.6, 584.0], [26.7, 584.0], [26.8, 584.0], [26.9, 584.0], [27.0, 585.0], [27.1, 585.0], [27.2, 585.0], [27.3, 585.0], [27.4, 585.0], [27.5, 585.0], [27.6, 585.0], [27.7, 585.0], [27.8, 585.0], [27.9, 585.0], [28.0, 609.0], [28.1, 609.0], [28.2, 609.0], [28.3, 609.0], [28.4, 609.0], [28.5, 609.0], [28.6, 609.0], [28.7, 609.0], [28.8, 609.0], [28.9, 609.0], [29.0, 614.0], [29.1, 614.0], [29.2, 614.0], [29.3, 614.0], [29.4, 614.0], [29.5, 614.0], [29.6, 614.0], [29.7, 614.0], [29.8, 614.0], [29.9, 614.0], [30.0, 630.0], [30.1, 630.0], [30.2, 630.0], [30.3, 630.0], [30.4, 630.0], [30.5, 630.0], [30.6, 630.0], [30.7, 630.0], [30.8, 630.0], [30.9, 630.0], [31.0, 640.0], [31.1, 640.0], [31.2, 640.0], [31.3, 640.0], [31.4, 640.0], [31.5, 640.0], [31.6, 640.0], [31.7, 640.0], [31.8, 640.0], [31.9, 640.0], [32.0, 644.0], [32.1, 644.0], [32.2, 644.0], [32.3, 644.0], [32.4, 644.0], [32.5, 644.0], [32.6, 644.0], [32.7, 644.0], [32.8, 644.0], [32.9, 644.0], [33.0, 656.0], [33.1, 656.0], [33.2, 656.0], [33.3, 656.0], [33.4, 656.0], [33.5, 656.0], [33.6, 656.0], [33.7, 656.0], [33.8, 656.0], [33.9, 656.0], [34.0, 658.0], [34.1, 658.0], [34.2, 658.0], [34.3, 658.0], [34.4, 658.0], [34.5, 658.0], [34.6, 658.0], [34.7, 658.0], [34.8, 658.0], [34.9, 658.0], [35.0, 682.0], [35.1, 682.0], [35.2, 682.0], [35.3, 682.0], [35.4, 682.0], [35.5, 682.0], [35.6, 682.0], [35.7, 682.0], [35.8, 682.0], [35.9, 682.0], [36.0, 693.0], [36.1, 693.0], [36.2, 693.0], [36.3, 693.0], [36.4, 693.0], [36.5, 693.0], [36.6, 693.0], [36.7, 693.0], [36.8, 693.0], [36.9, 693.0], [37.0, 700.0], [37.1, 700.0], [37.2, 700.0], [37.3, 700.0], [37.4, 700.0], [37.5, 700.0], [37.6, 700.0], [37.7, 700.0], [37.8, 700.0], [37.9, 700.0], [38.0, 713.0], [38.1, 713.0], [38.2, 713.0], [38.3, 713.0], [38.4, 713.0], [38.5, 713.0], [38.6, 713.0], [38.7, 713.0], [38.8, 713.0], [38.9, 713.0], [39.0, 717.0], [39.1, 717.0], [39.2, 717.0], [39.3, 717.0], [39.4, 717.0], [39.5, 717.0], [39.6, 717.0], [39.7, 717.0], [39.8, 717.0], [39.9, 717.0], [40.0, 723.0], [40.1, 723.0], [40.2, 723.0], [40.3, 723.0], [40.4, 723.0], [40.5, 723.0], [40.6, 723.0], [40.7, 723.0], [40.8, 723.0], [40.9, 723.0], [41.0, 726.0], [41.1, 726.0], [41.2, 726.0], [41.3, 726.0], [41.4, 726.0], [41.5, 726.0], [41.6, 726.0], [41.7, 726.0], [41.8, 726.0], [41.9, 726.0], [42.0, 727.0], [42.1, 727.0], [42.2, 727.0], [42.3, 727.0], [42.4, 727.0], [42.5, 727.0], [42.6, 727.0], [42.7, 727.0], [42.8, 727.0], [42.9, 727.0], [43.0, 757.0], [43.1, 757.0], [43.2, 757.0], [43.3, 757.0], [43.4, 757.0], [43.5, 757.0], [43.6, 757.0], [43.7, 757.0], [43.8, 757.0], [43.9, 757.0], [44.0, 770.0], [44.1, 770.0], [44.2, 770.0], [44.3, 770.0], [44.4, 770.0], [44.5, 770.0], [44.6, 770.0], [44.7, 770.0], [44.8, 770.0], [44.9, 770.0], [45.0, 770.0], [45.1, 770.0], [45.2, 770.0], [45.3, 770.0], [45.4, 770.0], [45.5, 770.0], [45.6, 770.0], [45.7, 770.0], [45.8, 770.0], [45.9, 770.0], [46.0, 771.0], [46.1, 771.0], [46.2, 771.0], [46.3, 771.0], [46.4, 771.0], [46.5, 771.0], [46.6, 771.0], [46.7, 771.0], [46.8, 771.0], [46.9, 771.0], [47.0, 779.0], [47.1, 779.0], [47.2, 779.0], [47.3, 779.0], [47.4, 779.0], [47.5, 779.0], [47.6, 779.0], [47.7, 779.0], [47.8, 779.0], [47.9, 779.0], [48.0, 792.0], [48.1, 792.0], [48.2, 792.0], [48.3, 792.0], [48.4, 792.0], [48.5, 792.0], [48.6, 792.0], [48.7, 792.0], [48.8, 792.0], [48.9, 792.0], [49.0, 801.0], [49.1, 801.0], [49.2, 801.0], [49.3, 801.0], [49.4, 801.0], [49.5, 801.0], [49.6, 801.0], [49.7, 801.0], [49.8, 801.0], [49.9, 801.0], [50.0, 822.0], [50.1, 822.0], [50.2, 822.0], [50.3, 822.0], [50.4, 822.0], [50.5, 822.0], [50.6, 822.0], [50.7, 822.0], [50.8, 822.0], [50.9, 822.0], [51.0, 831.0], [51.1, 831.0], [51.2, 831.0], [51.3, 831.0], [51.4, 831.0], [51.5, 831.0], [51.6, 831.0], [51.7, 831.0], [51.8, 831.0], [51.9, 831.0], [52.0, 841.0], [52.1, 841.0], [52.2, 841.0], [52.3, 841.0], [52.4, 841.0], [52.5, 841.0], [52.6, 841.0], [52.7, 841.0], [52.8, 841.0], [52.9, 841.0], [53.0, 841.0], [53.1, 841.0], [53.2, 841.0], [53.3, 841.0], [53.4, 841.0], [53.5, 841.0], [53.6, 841.0], [53.7, 841.0], [53.8, 841.0], [53.9, 841.0], [54.0, 856.0], [54.1, 856.0], [54.2, 856.0], [54.3, 856.0], [54.4, 856.0], [54.5, 856.0], [54.6, 856.0], [54.7, 856.0], [54.8, 856.0], [54.9, 856.0], [55.0, 863.0], [55.1, 863.0], [55.2, 863.0], [55.3, 863.0], [55.4, 863.0], [55.5, 863.0], [55.6, 863.0], [55.7, 863.0], [55.8, 863.0], [55.9, 863.0], [56.0, 884.0], [56.1, 884.0], [56.2, 884.0], [56.3, 884.0], [56.4, 884.0], [56.5, 884.0], [56.6, 884.0], [56.7, 884.0], [56.8, 884.0], [56.9, 884.0], [57.0, 884.0], [57.1, 884.0], [57.2, 884.0], [57.3, 884.0], [57.4, 884.0], [57.5, 884.0], [57.6, 884.0], [57.7, 884.0], [57.8, 884.0], [57.9, 884.0], [58.0, 894.0], [58.1, 894.0], [58.2, 894.0], [58.3, 894.0], [58.4, 894.0], [58.5, 894.0], [58.6, 894.0], [58.7, 894.0], [58.8, 894.0], [58.9, 894.0], [59.0, 900.0], [59.1, 900.0], [59.2, 900.0], [59.3, 900.0], [59.4, 900.0], [59.5, 900.0], [59.6, 900.0], [59.7, 900.0], [59.8, 900.0], [59.9, 900.0], [60.0, 901.0], [60.1, 901.0], [60.2, 901.0], [60.3, 901.0], [60.4, 901.0], [60.5, 901.0], [60.6, 901.0], [60.7, 901.0], [60.8, 901.0], [60.9, 901.0], [61.0, 918.0], [61.1, 918.0], [61.2, 918.0], [61.3, 918.0], [61.4, 918.0], [61.5, 918.0], [61.6, 918.0], [61.7, 918.0], [61.8, 918.0], [61.9, 918.0], [62.0, 924.0], [62.1, 924.0], [62.2, 924.0], [62.3, 924.0], [62.4, 924.0], [62.5, 924.0], [62.6, 924.0], [62.7, 924.0], [62.8, 924.0], [62.9, 924.0], [63.0, 948.0], [63.1, 948.0], [63.2, 948.0], [63.3, 948.0], [63.4, 948.0], [63.5, 948.0], [63.6, 948.0], [63.7, 948.0], [63.8, 948.0], [63.9, 948.0], [64.0, 953.0], [64.1, 953.0], [64.2, 953.0], [64.3, 953.0], [64.4, 953.0], [64.5, 953.0], [64.6, 953.0], [64.7, 953.0], [64.8, 953.0], [64.9, 953.0], [65.0, 969.0], [65.1, 969.0], [65.2, 969.0], [65.3, 969.0], [65.4, 969.0], [65.5, 969.0], [65.6, 969.0], [65.7, 969.0], [65.8, 969.0], [65.9, 969.0], [66.0, 983.0], [66.1, 983.0], [66.2, 983.0], [66.3, 983.0], [66.4, 983.0], [66.5, 983.0], [66.6, 983.0], [66.7, 983.0], [66.8, 983.0], [66.9, 983.0], [67.0, 991.0], [67.1, 991.0], [67.2, 991.0], [67.3, 991.0], [67.4, 991.0], [67.5, 991.0], [67.6, 991.0], [67.7, 991.0], [67.8, 991.0], [67.9, 991.0], [68.0, 1010.0], [68.1, 1010.0], [68.2, 1010.0], [68.3, 1010.0], [68.4, 1010.0], [68.5, 1010.0], [68.6, 1010.0], [68.7, 1010.0], [68.8, 1010.0], [68.9, 1010.0], [69.0, 1018.0], [69.1, 1018.0], [69.2, 1018.0], [69.3, 1018.0], [69.4, 1018.0], [69.5, 1018.0], [69.6, 1018.0], [69.7, 1018.0], [69.8, 1018.0], [69.9, 1018.0], [70.0, 1022.0], [70.1, 1022.0], [70.2, 1022.0], [70.3, 1022.0], [70.4, 1022.0], [70.5, 1022.0], [70.6, 1022.0], [70.7, 1022.0], [70.8, 1022.0], [70.9, 1022.0], [71.0, 1033.0], [71.1, 1033.0], [71.2, 1033.0], [71.3, 1033.0], [71.4, 1033.0], [71.5, 1033.0], [71.6, 1033.0], [71.7, 1033.0], [71.8, 1033.0], [71.9, 1033.0], [72.0, 1037.0], [72.1, 1037.0], [72.2, 1037.0], [72.3, 1037.0], [72.4, 1037.0], [72.5, 1037.0], [72.6, 1037.0], [72.7, 1037.0], [72.8, 1037.0], [72.9, 1037.0], [73.0, 1051.0], [73.1, 1051.0], [73.2, 1051.0], [73.3, 1051.0], [73.4, 1051.0], [73.5, 1051.0], [73.6, 1051.0], [73.7, 1051.0], [73.8, 1051.0], [73.9, 1051.0], [74.0, 1053.0], [74.1, 1053.0], [74.2, 1053.0], [74.3, 1053.0], [74.4, 1053.0], [74.5, 1053.0], [74.6, 1053.0], [74.7, 1053.0], [74.8, 1053.0], [74.9, 1053.0], [75.0, 1063.0], [75.1, 1063.0], [75.2, 1063.0], [75.3, 1063.0], [75.4, 1063.0], [75.5, 1063.0], [75.6, 1063.0], [75.7, 1063.0], [75.8, 1063.0], [75.9, 1063.0], [76.0, 1074.0], [76.1, 1074.0], [76.2, 1074.0], [76.3, 1074.0], [76.4, 1074.0], [76.5, 1074.0], [76.6, 1074.0], [76.7, 1074.0], [76.8, 1074.0], [76.9, 1074.0], [77.0, 1077.0], [77.1, 1077.0], [77.2, 1077.0], [77.3, 1077.0], [77.4, 1077.0], [77.5, 1077.0], [77.6, 1077.0], [77.7, 1077.0], [77.8, 1077.0], [77.9, 1077.0], [78.0, 1111.0], [78.1, 1111.0], [78.2, 1111.0], [78.3, 1111.0], [78.4, 1111.0], [78.5, 1111.0], [78.6, 1111.0], [78.7, 1111.0], [78.8, 1111.0], [78.9, 1111.0], [79.0, 1111.0], [79.1, 1111.0], [79.2, 1111.0], [79.3, 1111.0], [79.4, 1111.0], [79.5, 1111.0], [79.6, 1111.0], [79.7, 1111.0], [79.8, 1111.0], [79.9, 1111.0], [80.0, 1118.0], [80.1, 1118.0], [80.2, 1118.0], [80.3, 1118.0], [80.4, 1118.0], [80.5, 1118.0], [80.6, 1118.0], [80.7, 1118.0], [80.8, 1118.0], [80.9, 1118.0], [81.0, 1118.0], [81.1, 1118.0], [81.2, 1118.0], [81.3, 1118.0], [81.4, 1118.0], [81.5, 1118.0], [81.6, 1118.0], [81.7, 1118.0], [81.8, 1118.0], [81.9, 1118.0], [82.0, 1130.0], [82.1, 1130.0], [82.2, 1130.0], [82.3, 1130.0], [82.4, 1130.0], [82.5, 1130.0], [82.6, 1130.0], [82.7, 1130.0], [82.8, 1130.0], [82.9, 1130.0], [83.0, 1142.0], [83.1, 1142.0], [83.2, 1142.0], [83.3, 1142.0], [83.4, 1142.0], [83.5, 1142.0], [83.6, 1142.0], [83.7, 1142.0], [83.8, 1142.0], [83.9, 1142.0], [84.0, 1151.0], [84.1, 1151.0], [84.2, 1151.0], [84.3, 1151.0], [84.4, 1151.0], [84.5, 1151.0], [84.6, 1151.0], [84.7, 1151.0], [84.8, 1151.0], [84.9, 1151.0], [85.0, 1169.0], [85.1, 1169.0], [85.2, 1169.0], [85.3, 1169.0], [85.4, 1169.0], [85.5, 1169.0], [85.6, 1169.0], [85.7, 1169.0], [85.8, 1169.0], [85.9, 1169.0], [86.0, 1174.0], [86.1, 1174.0], [86.2, 1174.0], [86.3, 1174.0], [86.4, 1174.0], [86.5, 1174.0], [86.6, 1174.0], [86.7, 1174.0], [86.8, 1174.0], [86.9, 1174.0], [87.0, 1175.0], [87.1, 1175.0], [87.2, 1175.0], [87.3, 1175.0], [87.4, 1175.0], [87.5, 1175.0], [87.6, 1175.0], [87.7, 1175.0], [87.8, 1175.0], [87.9, 1175.0], [88.0, 1177.0], [88.1, 1177.0], [88.2, 1177.0], [88.3, 1177.0], [88.4, 1177.0], [88.5, 1177.0], [88.6, 1177.0], [88.7, 1177.0], [88.8, 1177.0], [88.9, 1177.0], [89.0, 1180.0], [89.1, 1180.0], [89.2, 1180.0], [89.3, 1180.0], [89.4, 1180.0], [89.5, 1180.0], [89.6, 1180.0], [89.7, 1180.0], [89.8, 1180.0], [89.9, 1180.0], [90.0, 1180.0], [90.1, 1180.0], [90.2, 1180.0], [90.3, 1180.0], [90.4, 1180.0], [90.5, 1180.0], [90.6, 1180.0], [90.7, 1180.0], [90.8, 1180.0], [90.9, 1180.0], [91.0, 1192.0], [91.1, 1192.0], [91.2, 1192.0], [91.3, 1192.0], [91.4, 1192.0], [91.5, 1192.0], [91.6, 1192.0], [91.7, 1192.0], [91.8, 1192.0], [91.9, 1192.0], [92.0, 1194.0], [92.1, 1194.0], [92.2, 1194.0], [92.3, 1194.0], [92.4, 1194.0], [92.5, 1194.0], [92.6, 1194.0], [92.7, 1194.0], [92.8, 1194.0], [92.9, 1194.0], [93.0, 1200.0], [93.1, 1200.0], [93.2, 1200.0], [93.3, 1200.0], [93.4, 1200.0], [93.5, 1200.0], [93.6, 1200.0], [93.7, 1200.0], [93.8, 1200.0], [93.9, 1200.0], [94.0, 1200.0], [94.1, 1200.0], [94.2, 1200.0], [94.3, 1200.0], [94.4, 1200.0], [94.5, 1200.0], [94.6, 1200.0], [94.7, 1200.0], [94.8, 1200.0], [94.9, 1200.0], [95.0, 1203.0], [95.1, 1203.0], [95.2, 1203.0], [95.3, 1203.0], [95.4, 1203.0], [95.5, 1203.0], [95.6, 1203.0], [95.7, 1203.0], [95.8, 1203.0], [95.9, 1203.0], [96.0, 1203.0], [96.1, 1203.0], [96.2, 1203.0], [96.3, 1203.0], [96.4, 1203.0], [96.5, 1203.0], [96.6, 1203.0], [96.7, 1203.0], [96.8, 1203.0], [96.9, 1203.0], [97.0, 1207.0], [97.1, 1207.0], [97.2, 1207.0], [97.3, 1207.0], [97.4, 1207.0], [97.5, 1207.0], [97.6, 1207.0], [97.7, 1207.0], [97.8, 1207.0], [97.9, 1207.0], [98.0, 1216.0], [98.1, 1216.0], [98.2, 1216.0], [98.3, 1216.0], [98.4, 1216.0], [98.5, 1216.0], [98.6, 1216.0], [98.7, 1216.0], [98.8, 1216.0], [98.9, 1216.0], [99.0, 1218.0], [99.1, 1218.0], [99.2, 1218.0], [99.3, 1218.0], [99.4, 1218.0], [99.5, 1218.0], [99.6, 1218.0], [99.7, 1218.0], [99.8, 1218.0], [99.9, 1218.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 200.0, "maxY": 15.0, "series": [{"data": [[1100.0, 15.0], [300.0, 6.0], [600.0, 9.0], [1200.0, 7.0], [700.0, 12.0], [200.0, 4.0], [800.0, 10.0], [400.0, 8.0], [900.0, 9.0], [1000.0, 10.0], [500.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 56.59000000000001, "minX": 1.75142622E12, "maxY": 56.59000000000001, "series": [{"data": [[1.75142622E12, 56.59000000000001]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75142622E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 279.0, "minX": 1.0, "maxY": 1218.0, "series": [{"data": [[3.0, 693.0], [5.0, 480.0], [6.0, 1218.0], [8.0, 444.0], [9.0, 1216.0], [10.0, 522.0], [11.0, 1022.0], [12.0, 1192.0], [13.0, 991.0], [15.0, 932.5], [19.0, 809.6666666666666], [21.0, 717.0], [24.0, 1077.0], [25.0, 1203.0], [27.0, 1203.0], [31.0, 525.5], [35.0, 922.0], [34.0, 693.0], [38.0, 896.5], [40.0, 685.25], [42.0, 541.3333333333334], [45.0, 757.0], [44.0, 1068.0], [47.0, 925.0], [46.0, 547.0], [51.0, 900.0], [50.0, 291.0], [52.0, 492.0], [55.0, 728.5], [54.0, 798.5], [57.0, 841.0], [56.0, 1041.5], [59.0, 395.0], [58.0, 969.0], [60.0, 822.0], [67.0, 726.0], [65.0, 505.0], [71.0, 713.0], [70.0, 737.0], [74.0, 986.0], [73.0, 1169.0], [77.0, 1006.0], [83.0, 1177.0], [81.0, 279.0], [80.0, 990.5], [86.0, 770.0], [84.0, 518.0], [90.0, 859.0], [95.0, 977.5], [93.0, 679.6666666666666], [100.0, 787.0555555555557], [1.0, 856.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[56.58000000000001, 803.7700000000002]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 248.33333333333334, "minX": 1.75142622E12, "maxY": 740.0, "series": [{"data": [[1.75142622E12, 740.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75142622E12, 248.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75142622E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 803.7700000000002, "minX": 1.75142622E12, "maxY": 803.7700000000002, "series": [{"data": [[1.75142622E12, 803.7700000000002]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75142622E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 796.2900000000001, "minX": 1.75142622E12, "maxY": 796.2900000000001, "series": [{"data": [[1.75142622E12, 796.2900000000001]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75142622E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 752.82, "minX": 1.75142622E12, "maxY": 752.82, "series": [{"data": [[1.75142622E12, 752.82]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75142622E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 811.5, "minX": 100.0, "maxY": 811.5, "series": [{"data": [[100.0, 811.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 811.5, "minX": 100.0, "maxY": 811.5, "series": [{"data": [[100.0, 811.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75142622E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75142622E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75142622E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75142622E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75142622E12, 1.6666666666666667]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75142622E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75142622E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75142622E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75142622E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75142622E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75142622E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75142622E12, "title": "Total Transactions Per Second"}},
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

