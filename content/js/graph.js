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
        data: {"result": {"minY": 132615.0, "minX": 0.0, "maxY": 133490.0, "series": [{"data": [[0.0, 132615.0], [0.1, 132615.0], [0.2, 132615.0], [0.3, 132615.0], [0.4, 132615.0], [0.5, 132615.0], [0.6, 132615.0], [0.7, 132615.0], [0.8, 132615.0], [0.9, 132615.0], [1.0, 132625.0], [1.1, 132625.0], [1.2, 132625.0], [1.3, 132625.0], [1.4, 132625.0], [1.5, 132625.0], [1.6, 132625.0], [1.7, 132625.0], [1.8, 132625.0], [1.9, 132625.0], [2.0, 132637.0], [2.1, 132637.0], [2.2, 132637.0], [2.3, 132637.0], [2.4, 132637.0], [2.5, 132637.0], [2.6, 132637.0], [2.7, 132637.0], [2.8, 132637.0], [2.9, 132637.0], [3.0, 132638.0], [3.1, 132638.0], [3.2, 132638.0], [3.3, 132638.0], [3.4, 132638.0], [3.5, 132638.0], [3.6, 132638.0], [3.7, 132638.0], [3.8, 132638.0], [3.9, 132638.0], [4.0, 132655.0], [4.1, 132655.0], [4.2, 132655.0], [4.3, 132655.0], [4.4, 132655.0], [4.5, 132655.0], [4.6, 132655.0], [4.7, 132655.0], [4.8, 132655.0], [4.9, 132655.0], [5.0, 132666.0], [5.1, 132666.0], [5.2, 132666.0], [5.3, 132666.0], [5.4, 132666.0], [5.5, 132666.0], [5.6, 132666.0], [5.7, 132666.0], [5.8, 132666.0], [5.9, 132666.0], [6.0, 132677.0], [6.1, 132677.0], [6.2, 132677.0], [6.3, 132677.0], [6.4, 132677.0], [6.5, 132677.0], [6.6, 132677.0], [6.7, 132677.0], [6.8, 132677.0], [6.9, 132677.0], [7.0, 132682.0], [7.1, 132682.0], [7.2, 132682.0], [7.3, 132682.0], [7.4, 132682.0], [7.5, 132682.0], [7.6, 132682.0], [7.7, 132682.0], [7.8, 132682.0], [7.9, 132682.0], [8.0, 132684.0], [8.1, 132684.0], [8.2, 132684.0], [8.3, 132684.0], [8.4, 132684.0], [8.5, 132684.0], [8.6, 132684.0], [8.7, 132684.0], [8.8, 132684.0], [8.9, 132684.0], [9.0, 132692.0], [9.1, 132692.0], [9.2, 132692.0], [9.3, 132692.0], [9.4, 132692.0], [9.5, 132692.0], [9.6, 132692.0], [9.7, 132692.0], [9.8, 132692.0], [9.9, 132692.0], [10.0, 132716.0], [10.1, 132716.0], [10.2, 132716.0], [10.3, 132716.0], [10.4, 132716.0], [10.5, 132716.0], [10.6, 132716.0], [10.7, 132716.0], [10.8, 132716.0], [10.9, 132716.0], [11.0, 132723.0], [11.1, 132723.0], [11.2, 132723.0], [11.3, 132723.0], [11.4, 132723.0], [11.5, 132723.0], [11.6, 132723.0], [11.7, 132723.0], [11.8, 132723.0], [11.9, 132723.0], [12.0, 132725.0], [12.1, 132725.0], [12.2, 132725.0], [12.3, 132725.0], [12.4, 132725.0], [12.5, 132725.0], [12.6, 132725.0], [12.7, 132725.0], [12.8, 132725.0], [12.9, 132725.0], [13.0, 132750.0], [13.1, 132750.0], [13.2, 132750.0], [13.3, 132750.0], [13.4, 132750.0], [13.5, 132750.0], [13.6, 132750.0], [13.7, 132750.0], [13.8, 132750.0], [13.9, 132750.0], [14.0, 132760.0], [14.1, 132760.0], [14.2, 132760.0], [14.3, 132760.0], [14.4, 132760.0], [14.5, 132760.0], [14.6, 132760.0], [14.7, 132760.0], [14.8, 132760.0], [14.9, 132760.0], [15.0, 132769.0], [15.1, 132769.0], [15.2, 132769.0], [15.3, 132769.0], [15.4, 132769.0], [15.5, 132769.0], [15.6, 132769.0], [15.7, 132769.0], [15.8, 132769.0], [15.9, 132769.0], [16.0, 132773.0], [16.1, 132773.0], [16.2, 132773.0], [16.3, 132773.0], [16.4, 132773.0], [16.5, 132773.0], [16.6, 132773.0], [16.7, 132773.0], [16.8, 132773.0], [16.9, 132773.0], [17.0, 132778.0], [17.1, 132778.0], [17.2, 132778.0], [17.3, 132778.0], [17.4, 132778.0], [17.5, 132778.0], [17.6, 132778.0], [17.7, 132778.0], [17.8, 132778.0], [17.9, 132778.0], [18.0, 132791.0], [18.1, 132791.0], [18.2, 132791.0], [18.3, 132791.0], [18.4, 132791.0], [18.5, 132791.0], [18.6, 132791.0], [18.7, 132791.0], [18.8, 132791.0], [18.9, 132791.0], [19.0, 132792.0], [19.1, 132792.0], [19.2, 132792.0], [19.3, 132792.0], [19.4, 132792.0], [19.5, 132792.0], [19.6, 132792.0], [19.7, 132792.0], [19.8, 132792.0], [19.9, 132792.0], [20.0, 132812.0], [20.1, 132812.0], [20.2, 132812.0], [20.3, 132812.0], [20.4, 132812.0], [20.5, 132812.0], [20.6, 132812.0], [20.7, 132812.0], [20.8, 132812.0], [20.9, 132812.0], [21.0, 132813.0], [21.1, 132813.0], [21.2, 132813.0], [21.3, 132813.0], [21.4, 132813.0], [21.5, 132813.0], [21.6, 132813.0], [21.7, 132813.0], [21.8, 132813.0], [21.9, 132813.0], [22.0, 132823.0], [22.1, 132823.0], [22.2, 132823.0], [22.3, 132823.0], [22.4, 132823.0], [22.5, 132823.0], [22.6, 132823.0], [22.7, 132823.0], [22.8, 132823.0], [22.9, 132823.0], [23.0, 132833.0], [23.1, 132833.0], [23.2, 132833.0], [23.3, 132833.0], [23.4, 132833.0], [23.5, 132833.0], [23.6, 132833.0], [23.7, 132833.0], [23.8, 132833.0], [23.9, 132833.0], [24.0, 132842.0], [24.1, 132842.0], [24.2, 132842.0], [24.3, 132842.0], [24.4, 132842.0], [24.5, 132842.0], [24.6, 132842.0], [24.7, 132842.0], [24.8, 132842.0], [24.9, 132842.0], [25.0, 132855.0], [25.1, 132855.0], [25.2, 132855.0], [25.3, 132855.0], [25.4, 132855.0], [25.5, 132855.0], [25.6, 132855.0], [25.7, 132855.0], [25.8, 132855.0], [25.9, 132855.0], [26.0, 132869.0], [26.1, 132869.0], [26.2, 132869.0], [26.3, 132869.0], [26.4, 132869.0], [26.5, 132869.0], [26.6, 132869.0], [26.7, 132869.0], [26.8, 132869.0], [26.9, 132869.0], [27.0, 132880.0], [27.1, 132880.0], [27.2, 132880.0], [27.3, 132880.0], [27.4, 132880.0], [27.5, 132880.0], [27.6, 132880.0], [27.7, 132880.0], [27.8, 132880.0], [27.9, 132880.0], [28.0, 132891.0], [28.1, 132891.0], [28.2, 132891.0], [28.3, 132891.0], [28.4, 132891.0], [28.5, 132891.0], [28.6, 132891.0], [28.7, 132891.0], [28.8, 132891.0], [28.9, 132891.0], [29.0, 132905.0], [29.1, 132905.0], [29.2, 132905.0], [29.3, 132905.0], [29.4, 132905.0], [29.5, 132905.0], [29.6, 132905.0], [29.7, 132905.0], [29.8, 132905.0], [29.9, 132905.0], [30.0, 132907.0], [30.1, 132907.0], [30.2, 132907.0], [30.3, 132907.0], [30.4, 132907.0], [30.5, 132907.0], [30.6, 132907.0], [30.7, 132907.0], [30.8, 132907.0], [30.9, 132907.0], [31.0, 132922.0], [31.1, 132922.0], [31.2, 132922.0], [31.3, 132922.0], [31.4, 132922.0], [31.5, 132922.0], [31.6, 132922.0], [31.7, 132922.0], [31.8, 132922.0], [31.9, 132922.0], [32.0, 132934.0], [32.1, 132934.0], [32.2, 132934.0], [32.3, 132934.0], [32.4, 132934.0], [32.5, 132934.0], [32.6, 132934.0], [32.7, 132934.0], [32.8, 132934.0], [32.9, 132934.0], [33.0, 132947.0], [33.1, 132947.0], [33.2, 132947.0], [33.3, 132947.0], [33.4, 132947.0], [33.5, 132947.0], [33.6, 132947.0], [33.7, 132947.0], [33.8, 132947.0], [33.9, 132947.0], [34.0, 132957.0], [34.1, 132957.0], [34.2, 132957.0], [34.3, 132957.0], [34.4, 132957.0], [34.5, 132957.0], [34.6, 132957.0], [34.7, 132957.0], [34.8, 132957.0], [34.9, 132957.0], [35.0, 132968.0], [35.1, 132968.0], [35.2, 132968.0], [35.3, 132968.0], [35.4, 132968.0], [35.5, 132968.0], [35.6, 132968.0], [35.7, 132968.0], [35.8, 132968.0], [35.9, 132968.0], [36.0, 132978.0], [36.1, 132978.0], [36.2, 132978.0], [36.3, 132978.0], [36.4, 132978.0], [36.5, 132978.0], [36.6, 132978.0], [36.7, 132978.0], [36.8, 132978.0], [36.9, 132978.0], [37.0, 132979.0], [37.1, 132979.0], [37.2, 132979.0], [37.3, 132979.0], [37.4, 132979.0], [37.5, 132979.0], [37.6, 132979.0], [37.7, 132979.0], [37.8, 132979.0], [37.9, 132979.0], [38.0, 132996.0], [38.1, 132996.0], [38.2, 132996.0], [38.3, 132996.0], [38.4, 132996.0], [38.5, 132996.0], [38.6, 132996.0], [38.7, 132996.0], [38.8, 132996.0], [38.9, 132996.0], [39.0, 132997.0], [39.1, 132997.0], [39.2, 132997.0], [39.3, 132997.0], [39.4, 132997.0], [39.5, 132997.0], [39.6, 132997.0], [39.7, 132997.0], [39.8, 132997.0], [39.9, 132997.0], [40.0, 133018.0], [40.1, 133018.0], [40.2, 133018.0], [40.3, 133018.0], [40.4, 133018.0], [40.5, 133018.0], [40.6, 133018.0], [40.7, 133018.0], [40.8, 133018.0], [40.9, 133018.0], [41.0, 133021.0], [41.1, 133021.0], [41.2, 133021.0], [41.3, 133021.0], [41.4, 133021.0], [41.5, 133021.0], [41.6, 133021.0], [41.7, 133021.0], [41.8, 133021.0], [41.9, 133021.0], [42.0, 133037.0], [42.1, 133037.0], [42.2, 133037.0], [42.3, 133037.0], [42.4, 133037.0], [42.5, 133037.0], [42.6, 133037.0], [42.7, 133037.0], [42.8, 133037.0], [42.9, 133037.0], [43.0, 133046.0], [43.1, 133046.0], [43.2, 133046.0], [43.3, 133046.0], [43.4, 133046.0], [43.5, 133046.0], [43.6, 133046.0], [43.7, 133046.0], [43.8, 133046.0], [43.9, 133046.0], [44.0, 133057.0], [44.1, 133057.0], [44.2, 133057.0], [44.3, 133057.0], [44.4, 133057.0], [44.5, 133057.0], [44.6, 133057.0], [44.7, 133057.0], [44.8, 133057.0], [44.9, 133057.0], [45.0, 133067.0], [45.1, 133067.0], [45.2, 133067.0], [45.3, 133067.0], [45.4, 133067.0], [45.5, 133067.0], [45.6, 133067.0], [45.7, 133067.0], [45.8, 133067.0], [45.9, 133067.0], [46.0, 133076.0], [46.1, 133076.0], [46.2, 133076.0], [46.3, 133076.0], [46.4, 133076.0], [46.5, 133076.0], [46.6, 133076.0], [46.7, 133076.0], [46.8, 133076.0], [46.9, 133076.0], [47.0, 133085.0], [47.1, 133085.0], [47.2, 133085.0], [47.3, 133085.0], [47.4, 133085.0], [47.5, 133085.0], [47.6, 133085.0], [47.7, 133085.0], [47.8, 133085.0], [47.9, 133085.0], [48.0, 133098.0], [48.1, 133098.0], [48.2, 133098.0], [48.3, 133098.0], [48.4, 133098.0], [48.5, 133098.0], [48.6, 133098.0], [48.7, 133098.0], [48.8, 133098.0], [48.9, 133098.0], [49.0, 133104.0], [49.1, 133104.0], [49.2, 133104.0], [49.3, 133104.0], [49.4, 133104.0], [49.5, 133104.0], [49.6, 133104.0], [49.7, 133104.0], [49.8, 133104.0], [49.9, 133104.0], [50.0, 133108.0], [50.1, 133108.0], [50.2, 133108.0], [50.3, 133108.0], [50.4, 133108.0], [50.5, 133108.0], [50.6, 133108.0], [50.7, 133108.0], [50.8, 133108.0], [50.9, 133108.0], [51.0, 133115.0], [51.1, 133115.0], [51.2, 133115.0], [51.3, 133115.0], [51.4, 133115.0], [51.5, 133115.0], [51.6, 133115.0], [51.7, 133115.0], [51.8, 133115.0], [51.9, 133115.0], [52.0, 133128.0], [52.1, 133128.0], [52.2, 133128.0], [52.3, 133128.0], [52.4, 133128.0], [52.5, 133128.0], [52.6, 133128.0], [52.7, 133128.0], [52.8, 133128.0], [52.9, 133128.0], [53.0, 133138.0], [53.1, 133138.0], [53.2, 133138.0], [53.3, 133138.0], [53.4, 133138.0], [53.5, 133138.0], [53.6, 133138.0], [53.7, 133138.0], [53.8, 133138.0], [53.9, 133138.0], [54.0, 133150.0], [54.1, 133150.0], [54.2, 133150.0], [54.3, 133150.0], [54.4, 133150.0], [54.5, 133150.0], [54.6, 133150.0], [54.7, 133150.0], [54.8, 133150.0], [54.9, 133150.0], [55.0, 133158.0], [55.1, 133158.0], [55.2, 133158.0], [55.3, 133158.0], [55.4, 133158.0], [55.5, 133158.0], [55.6, 133158.0], [55.7, 133158.0], [55.8, 133158.0], [55.9, 133158.0], [56.0, 133162.0], [56.1, 133162.0], [56.2, 133162.0], [56.3, 133162.0], [56.4, 133162.0], [56.5, 133162.0], [56.6, 133162.0], [56.7, 133162.0], [56.8, 133162.0], [56.9, 133162.0], [57.0, 133182.0], [57.1, 133182.0], [57.2, 133182.0], [57.3, 133182.0], [57.4, 133182.0], [57.5, 133182.0], [57.6, 133182.0], [57.7, 133182.0], [57.8, 133182.0], [57.9, 133182.0], [58.0, 133187.0], [58.1, 133187.0], [58.2, 133187.0], [58.3, 133187.0], [58.4, 133187.0], [58.5, 133187.0], [58.6, 133187.0], [58.7, 133187.0], [58.8, 133187.0], [58.9, 133187.0], [59.0, 133197.0], [59.1, 133197.0], [59.2, 133197.0], [59.3, 133197.0], [59.4, 133197.0], [59.5, 133197.0], [59.6, 133197.0], [59.7, 133197.0], [59.8, 133197.0], [59.9, 133197.0], [60.0, 133203.0], [60.1, 133203.0], [60.2, 133203.0], [60.3, 133203.0], [60.4, 133203.0], [60.5, 133203.0], [60.6, 133203.0], [60.7, 133203.0], [60.8, 133203.0], [60.9, 133203.0], [61.0, 133212.0], [61.1, 133212.0], [61.2, 133212.0], [61.3, 133212.0], [61.4, 133212.0], [61.5, 133212.0], [61.6, 133212.0], [61.7, 133212.0], [61.8, 133212.0], [61.9, 133212.0], [62.0, 133224.0], [62.1, 133224.0], [62.2, 133224.0], [62.3, 133224.0], [62.4, 133224.0], [62.5, 133224.0], [62.6, 133224.0], [62.7, 133224.0], [62.8, 133224.0], [62.9, 133224.0], [63.0, 133242.0], [63.1, 133242.0], [63.2, 133242.0], [63.3, 133242.0], [63.4, 133242.0], [63.5, 133242.0], [63.6, 133242.0], [63.7, 133242.0], [63.8, 133242.0], [63.9, 133242.0], [64.0, 133250.0], [64.1, 133250.0], [64.2, 133250.0], [64.3, 133250.0], [64.4, 133250.0], [64.5, 133250.0], [64.6, 133250.0], [64.7, 133250.0], [64.8, 133250.0], [64.9, 133250.0], [65.0, 133252.0], [65.1, 133252.0], [65.2, 133252.0], [65.3, 133252.0], [65.4, 133252.0], [65.5, 133252.0], [65.6, 133252.0], [65.7, 133252.0], [65.8, 133252.0], [65.9, 133252.0], [66.0, 133262.0], [66.1, 133262.0], [66.2, 133262.0], [66.3, 133262.0], [66.4, 133262.0], [66.5, 133262.0], [66.6, 133262.0], [66.7, 133262.0], [66.8, 133262.0], [66.9, 133262.0], [67.0, 133273.0], [67.1, 133273.0], [67.2, 133273.0], [67.3, 133273.0], [67.4, 133273.0], [67.5, 133273.0], [67.6, 133273.0], [67.7, 133273.0], [67.8, 133273.0], [67.9, 133273.0], [68.0, 133294.0], [68.1, 133294.0], [68.2, 133294.0], [68.3, 133294.0], [68.4, 133294.0], [68.5, 133294.0], [68.6, 133294.0], [68.7, 133294.0], [68.8, 133294.0], [68.9, 133294.0], [69.0, 133296.0], [69.1, 133296.0], [69.2, 133296.0], [69.3, 133296.0], [69.4, 133296.0], [69.5, 133296.0], [69.6, 133296.0], [69.7, 133296.0], [69.8, 133296.0], [69.9, 133296.0], [70.0, 133313.0], [70.1, 133313.0], [70.2, 133313.0], [70.3, 133313.0], [70.4, 133313.0], [70.5, 133313.0], [70.6, 133313.0], [70.7, 133313.0], [70.8, 133313.0], [70.9, 133313.0], [71.0, 133315.0], [71.1, 133315.0], [71.2, 133315.0], [71.3, 133315.0], [71.4, 133315.0], [71.5, 133315.0], [71.6, 133315.0], [71.7, 133315.0], [71.8, 133315.0], [71.9, 133315.0], [72.0, 133322.0], [72.1, 133322.0], [72.2, 133322.0], [72.3, 133322.0], [72.4, 133322.0], [72.5, 133322.0], [72.6, 133322.0], [72.7, 133322.0], [72.8, 133322.0], [72.9, 133322.0], [73.0, 133333.0], [73.1, 133333.0], [73.2, 133333.0], [73.3, 133333.0], [73.4, 133333.0], [73.5, 133333.0], [73.6, 133333.0], [73.7, 133333.0], [73.8, 133333.0], [73.9, 133333.0], [74.0, 133344.0], [74.1, 133344.0], [74.2, 133344.0], [74.3, 133344.0], [74.4, 133344.0], [74.5, 133344.0], [74.6, 133344.0], [74.7, 133344.0], [74.8, 133344.0], [74.9, 133344.0], [75.0, 133366.0], [75.1, 133366.0], [75.2, 133366.0], [75.3, 133366.0], [75.4, 133366.0], [75.5, 133366.0], [75.6, 133366.0], [75.7, 133366.0], [75.8, 133366.0], [75.9, 133366.0], [76.0, 133370.0], [76.1, 133370.0], [76.2, 133370.0], [76.3, 133370.0], [76.4, 133370.0], [76.5, 133370.0], [76.6, 133370.0], [76.7, 133370.0], [76.8, 133370.0], [76.9, 133370.0], [77.0, 133376.0], [77.1, 133376.0], [77.2, 133376.0], [77.3, 133376.0], [77.4, 133376.0], [77.5, 133376.0], [77.6, 133376.0], [77.7, 133376.0], [77.8, 133376.0], [77.9, 133376.0], [78.0, 133388.0], [78.1, 133388.0], [78.2, 133388.0], [78.3, 133388.0], [78.4, 133388.0], [78.5, 133388.0], [78.6, 133388.0], [78.7, 133388.0], [78.8, 133388.0], [78.9, 133388.0], [79.0, 133397.0], [79.1, 133397.0], [79.2, 133397.0], [79.3, 133397.0], [79.4, 133397.0], [79.5, 133397.0], [79.6, 133397.0], [79.7, 133397.0], [79.8, 133397.0], [79.9, 133397.0], [80.0, 133414.0], [80.1, 133414.0], [80.2, 133414.0], [80.3, 133414.0], [80.4, 133414.0], [80.5, 133414.0], [80.6, 133414.0], [80.7, 133414.0], [80.8, 133414.0], [80.9, 133414.0], [81.0, 133415.0], [81.1, 133415.0], [81.2, 133415.0], [81.3, 133415.0], [81.4, 133415.0], [81.5, 133415.0], [81.6, 133415.0], [81.7, 133415.0], [81.8, 133415.0], [81.9, 133415.0], [82.0, 133429.0], [82.1, 133429.0], [82.2, 133429.0], [82.3, 133429.0], [82.4, 133429.0], [82.5, 133429.0], [82.6, 133429.0], [82.7, 133429.0], [82.8, 133429.0], [82.9, 133429.0], [83.0, 133437.0], [83.1, 133437.0], [83.2, 133437.0], [83.3, 133437.0], [83.4, 133437.0], [83.5, 133437.0], [83.6, 133437.0], [83.7, 133437.0], [83.8, 133437.0], [83.9, 133437.0], [84.0, 133447.0], [84.1, 133447.0], [84.2, 133447.0], [84.3, 133447.0], [84.4, 133447.0], [84.5, 133447.0], [84.6, 133447.0], [84.7, 133447.0], [84.8, 133447.0], [84.9, 133447.0], [85.0, 133466.0], [85.1, 133466.0], [85.2, 133466.0], [85.3, 133466.0], [85.4, 133466.0], [85.5, 133466.0], [85.6, 133466.0], [85.7, 133466.0], [85.8, 133466.0], [85.9, 133466.0], [86.0, 133469.0], [86.1, 133469.0], [86.2, 133469.0], [86.3, 133469.0], [86.4, 133469.0], [86.5, 133469.0], [86.6, 133469.0], [86.7, 133469.0], [86.8, 133469.0], [86.9, 133469.0], [87.0, 133479.0], [87.1, 133479.0], [87.2, 133479.0], [87.3, 133479.0], [87.4, 133479.0], [87.5, 133479.0], [87.6, 133479.0], [87.7, 133479.0], [87.8, 133479.0], [87.9, 133479.0], [88.0, 133480.0], [88.1, 133480.0], [88.2, 133480.0], [88.3, 133480.0], [88.4, 133480.0], [88.5, 133480.0], [88.6, 133480.0], [88.7, 133480.0], [88.8, 133480.0], [88.9, 133480.0], [89.0, 133480.0], [89.1, 133480.0], [89.2, 133480.0], [89.3, 133480.0], [89.4, 133480.0], [89.5, 133480.0], [89.6, 133480.0], [89.7, 133480.0], [89.8, 133480.0], [89.9, 133480.0], [90.0, 133480.0], [90.1, 133480.0], [90.2, 133480.0], [90.3, 133480.0], [90.4, 133480.0], [90.5, 133480.0], [90.6, 133480.0], [90.7, 133480.0], [90.8, 133480.0], [90.9, 133480.0], [91.0, 133481.0], [91.1, 133481.0], [91.2, 133481.0], [91.3, 133481.0], [91.4, 133481.0], [91.5, 133481.0], [91.6, 133481.0], [91.7, 133481.0], [91.8, 133481.0], [91.9, 133481.0], [92.0, 133482.0], [92.1, 133482.0], [92.2, 133482.0], [92.3, 133482.0], [92.4, 133482.0], [92.5, 133482.0], [92.6, 133482.0], [92.7, 133482.0], [92.8, 133482.0], [92.9, 133482.0], [93.0, 133482.0], [93.1, 133482.0], [93.2, 133482.0], [93.3, 133482.0], [93.4, 133482.0], [93.5, 133482.0], [93.6, 133482.0], [93.7, 133482.0], [93.8, 133482.0], [93.9, 133482.0], [94.0, 133484.0], [94.1, 133484.0], [94.2, 133484.0], [94.3, 133484.0], [94.4, 133484.0], [94.5, 133484.0], [94.6, 133484.0], [94.7, 133484.0], [94.8, 133484.0], [94.9, 133484.0], [95.0, 133484.0], [95.1, 133484.0], [95.2, 133484.0], [95.3, 133484.0], [95.4, 133484.0], [95.5, 133484.0], [95.6, 133484.0], [95.7, 133484.0], [95.8, 133484.0], [95.9, 133484.0], [96.0, 133484.0], [96.1, 133484.0], [96.2, 133484.0], [96.3, 133484.0], [96.4, 133484.0], [96.5, 133484.0], [96.6, 133484.0], [96.7, 133484.0], [96.8, 133484.0], [96.9, 133484.0], [97.0, 133487.0], [97.1, 133487.0], [97.2, 133487.0], [97.3, 133487.0], [97.4, 133487.0], [97.5, 133487.0], [97.6, 133487.0], [97.7, 133487.0], [97.8, 133487.0], [97.9, 133487.0], [98.0, 133487.0], [98.1, 133487.0], [98.2, 133487.0], [98.3, 133487.0], [98.4, 133487.0], [98.5, 133487.0], [98.6, 133487.0], [98.7, 133487.0], [98.8, 133487.0], [98.9, 133487.0], [99.0, 133490.0], [99.1, 133490.0], [99.2, 133490.0], [99.3, 133490.0], [99.4, 133490.0], [99.5, 133490.0], [99.6, 133490.0], [99.7, 133490.0], [99.8, 133490.0], [99.9, 133490.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 9.0, "minX": 132600.0, "maxY": 20.0, "series": [{"data": [[133200.0, 10.0], [133400.0, 20.0], [133300.0, 10.0], [132900.0, 11.0], [132800.0, 9.0], [133100.0, 11.0], [132600.0, 10.0], [132700.0, 10.0], [133000.0, 9.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 133400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.75056276E12, "maxY": 100.0, "series": [{"data": [[1.75056276E12, 100.0]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75056276E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 133097.78999999998, "minX": 100.0, "maxY": 133097.78999999998, "series": [{"data": [[100.0, 133097.78999999998]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[100.0, 133097.78999999998]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75056276E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75056276E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75056276E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75056276E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133097.78999999998, "minX": 1.75056276E12, "maxY": 133097.78999999998, "series": [{"data": [[1.75056276E12, 133097.78999999998]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75056276E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75056276E12, "maxY": 4.9E-324, "series": [{"data": [[1.75056276E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75056276E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 133097.6199999999, "minX": 1.75056276E12, "maxY": 133097.6199999999, "series": [{"data": [[1.75056276E12, 133097.6199999999]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75056276E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 133106.0, "minX": 100.0, "maxY": 133106.0, "series": [{"data": [[100.0, 133106.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75056264E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75056264E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75056264E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75056276E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75056276E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75056276E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75056276E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75056276E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75056276E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75056276E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75056276E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75056276E12, "title": "Total Transactions Per Second"}},
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

