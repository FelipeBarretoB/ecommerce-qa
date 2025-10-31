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
        data: {"result": {"minY": 132400.0, "minX": 0.0, "maxY": 136484.0, "series": [{"data": [[0.0, 132400.0], [0.1, 132400.0], [0.2, 132400.0], [0.3, 132400.0], [0.4, 132400.0], [0.5, 132400.0], [0.6, 132400.0], [0.7, 132400.0], [0.8, 132400.0], [0.9, 132400.0], [1.0, 132413.0], [1.1, 132413.0], [1.2, 132413.0], [1.3, 132413.0], [1.4, 132413.0], [1.5, 132413.0], [1.6, 132413.0], [1.7, 132413.0], [1.8, 132413.0], [1.9, 132413.0], [2.0, 132421.0], [2.1, 132421.0], [2.2, 132421.0], [2.3, 132421.0], [2.4, 132421.0], [2.5, 132421.0], [2.6, 132421.0], [2.7, 132421.0], [2.8, 132421.0], [2.9, 132421.0], [3.0, 132430.0], [3.1, 132430.0], [3.2, 132430.0], [3.3, 132430.0], [3.4, 132430.0], [3.5, 132430.0], [3.6, 132430.0], [3.7, 132430.0], [3.8, 132430.0], [3.9, 132430.0], [4.0, 132440.0], [4.1, 132440.0], [4.2, 132440.0], [4.3, 132440.0], [4.4, 132440.0], [4.5, 132440.0], [4.6, 132440.0], [4.7, 132440.0], [4.8, 132440.0], [4.9, 132440.0], [5.0, 132450.0], [5.1, 132450.0], [5.2, 132450.0], [5.3, 132450.0], [5.4, 132450.0], [5.5, 132450.0], [5.6, 132450.0], [5.7, 132450.0], [5.8, 132450.0], [5.9, 132450.0], [6.0, 132464.0], [6.1, 132464.0], [6.2, 132464.0], [6.3, 132464.0], [6.4, 132464.0], [6.5, 132464.0], [6.6, 132464.0], [6.7, 132464.0], [6.8, 132464.0], [6.9, 132464.0], [7.0, 132475.0], [7.1, 132475.0], [7.2, 132475.0], [7.3, 132475.0], [7.4, 132475.0], [7.5, 132475.0], [7.6, 132475.0], [7.7, 132475.0], [7.8, 132475.0], [7.9, 132475.0], [8.0, 132484.0], [8.1, 132484.0], [8.2, 132484.0], [8.3, 132484.0], [8.4, 132484.0], [8.5, 132484.0], [8.6, 132484.0], [8.7, 132484.0], [8.8, 132484.0], [8.9, 132484.0], [9.0, 132494.0], [9.1, 132494.0], [9.2, 132494.0], [9.3, 132494.0], [9.4, 132494.0], [9.5, 132494.0], [9.6, 132494.0], [9.7, 132494.0], [9.8, 132494.0], [9.9, 132494.0], [10.0, 132500.0], [10.1, 132500.0], [10.2, 132500.0], [10.3, 132500.0], [10.4, 132500.0], [10.5, 132500.0], [10.6, 132500.0], [10.7, 132500.0], [10.8, 132500.0], [10.9, 132500.0], [11.0, 132519.0], [11.1, 132519.0], [11.2, 132519.0], [11.3, 132519.0], [11.4, 132519.0], [11.5, 132519.0], [11.6, 132519.0], [11.7, 132519.0], [11.8, 132519.0], [11.9, 132519.0], [12.0, 132522.0], [12.1, 132522.0], [12.2, 132522.0], [12.3, 132522.0], [12.4, 132522.0], [12.5, 132522.0], [12.6, 132522.0], [12.7, 132522.0], [12.8, 132522.0], [12.9, 132522.0], [13.0, 132530.0], [13.1, 132530.0], [13.2, 132530.0], [13.3, 132530.0], [13.4, 132530.0], [13.5, 132530.0], [13.6, 132530.0], [13.7, 132530.0], [13.8, 132530.0], [13.9, 132530.0], [14.0, 132546.0], [14.1, 132546.0], [14.2, 132546.0], [14.3, 132546.0], [14.4, 132546.0], [14.5, 132546.0], [14.6, 132546.0], [14.7, 132546.0], [14.8, 132546.0], [14.9, 132546.0], [15.0, 132556.0], [15.1, 132556.0], [15.2, 132556.0], [15.3, 132556.0], [15.4, 132556.0], [15.5, 132556.0], [15.6, 132556.0], [15.7, 132556.0], [15.8, 132556.0], [15.9, 132556.0], [16.0, 132564.0], [16.1, 132564.0], [16.2, 132564.0], [16.3, 132564.0], [16.4, 132564.0], [16.5, 132564.0], [16.6, 132564.0], [16.7, 132564.0], [16.8, 132564.0], [16.9, 132564.0], [17.0, 132575.0], [17.1, 132575.0], [17.2, 132575.0], [17.3, 132575.0], [17.4, 132575.0], [17.5, 132575.0], [17.6, 132575.0], [17.7, 132575.0], [17.8, 132575.0], [17.9, 132575.0], [18.0, 132585.0], [18.1, 132585.0], [18.2, 132585.0], [18.3, 132585.0], [18.4, 132585.0], [18.5, 132585.0], [18.6, 132585.0], [18.7, 132585.0], [18.8, 132585.0], [18.9, 132585.0], [19.0, 132591.0], [19.1, 132591.0], [19.2, 132591.0], [19.3, 132591.0], [19.4, 132591.0], [19.5, 132591.0], [19.6, 132591.0], [19.7, 132591.0], [19.8, 132591.0], [19.9, 132591.0], [20.0, 132610.0], [20.1, 132610.0], [20.2, 132610.0], [20.3, 132610.0], [20.4, 132610.0], [20.5, 132610.0], [20.6, 132610.0], [20.7, 132610.0], [20.8, 132610.0], [20.9, 132610.0], [21.0, 132611.0], [21.1, 132611.0], [21.2, 132611.0], [21.3, 132611.0], [21.4, 132611.0], [21.5, 132611.0], [21.6, 132611.0], [21.7, 132611.0], [21.8, 132611.0], [21.9, 132611.0], [22.0, 132625.0], [22.1, 132625.0], [22.2, 132625.0], [22.3, 132625.0], [22.4, 132625.0], [22.5, 132625.0], [22.6, 132625.0], [22.7, 132625.0], [22.8, 132625.0], [22.9, 132625.0], [23.0, 132629.0], [23.1, 132629.0], [23.2, 132629.0], [23.3, 132629.0], [23.4, 132629.0], [23.5, 132629.0], [23.6, 132629.0], [23.7, 132629.0], [23.8, 132629.0], [23.9, 132629.0], [24.0, 132641.0], [24.1, 132641.0], [24.2, 132641.0], [24.3, 132641.0], [24.4, 132641.0], [24.5, 132641.0], [24.6, 132641.0], [24.7, 132641.0], [24.8, 132641.0], [24.9, 132641.0], [25.0, 132651.0], [25.1, 132651.0], [25.2, 132651.0], [25.3, 132651.0], [25.4, 132651.0], [25.5, 132651.0], [25.6, 132651.0], [25.7, 132651.0], [25.8, 132651.0], [25.9, 132651.0], [26.0, 132665.0], [26.1, 132665.0], [26.2, 132665.0], [26.3, 132665.0], [26.4, 132665.0], [26.5, 132665.0], [26.6, 132665.0], [26.7, 132665.0], [26.8, 132665.0], [26.9, 132665.0], [27.0, 132670.0], [27.1, 132670.0], [27.2, 132670.0], [27.3, 132670.0], [27.4, 132670.0], [27.5, 132670.0], [27.6, 132670.0], [27.7, 132670.0], [27.8, 132670.0], [27.9, 132670.0], [28.0, 132680.0], [28.1, 132680.0], [28.2, 132680.0], [28.3, 132680.0], [28.4, 132680.0], [28.5, 132680.0], [28.6, 132680.0], [28.7, 132680.0], [28.8, 132680.0], [28.9, 132680.0], [29.0, 132690.0], [29.1, 132690.0], [29.2, 132690.0], [29.3, 132690.0], [29.4, 132690.0], [29.5, 132690.0], [29.6, 132690.0], [29.7, 132690.0], [29.8, 132690.0], [29.9, 132690.0], [30.0, 132705.0], [30.1, 132705.0], [30.2, 132705.0], [30.3, 132705.0], [30.4, 132705.0], [30.5, 132705.0], [30.6, 132705.0], [30.7, 132705.0], [30.8, 132705.0], [30.9, 132705.0], [31.0, 132712.0], [31.1, 132712.0], [31.2, 132712.0], [31.3, 132712.0], [31.4, 132712.0], [31.5, 132712.0], [31.6, 132712.0], [31.7, 132712.0], [31.8, 132712.0], [31.9, 132712.0], [32.0, 132728.0], [32.1, 132728.0], [32.2, 132728.0], [32.3, 132728.0], [32.4, 132728.0], [32.5, 132728.0], [32.6, 132728.0], [32.7, 132728.0], [32.8, 132728.0], [32.9, 132728.0], [33.0, 132730.0], [33.1, 132730.0], [33.2, 132730.0], [33.3, 132730.0], [33.4, 132730.0], [33.5, 132730.0], [33.6, 132730.0], [33.7, 132730.0], [33.8, 132730.0], [33.9, 132730.0], [34.0, 132740.0], [34.1, 132740.0], [34.2, 132740.0], [34.3, 132740.0], [34.4, 132740.0], [34.5, 132740.0], [34.6, 132740.0], [34.7, 132740.0], [34.8, 132740.0], [34.9, 132740.0], [35.0, 132758.0], [35.1, 132758.0], [35.2, 132758.0], [35.3, 132758.0], [35.4, 132758.0], [35.5, 132758.0], [35.6, 132758.0], [35.7, 132758.0], [35.8, 132758.0], [35.9, 132758.0], [36.0, 132766.0], [36.1, 132766.0], [36.2, 132766.0], [36.3, 132766.0], [36.4, 132766.0], [36.5, 132766.0], [36.6, 132766.0], [36.7, 132766.0], [36.8, 132766.0], [36.9, 132766.0], [37.0, 132776.0], [37.1, 132776.0], [37.2, 132776.0], [37.3, 132776.0], [37.4, 132776.0], [37.5, 132776.0], [37.6, 132776.0], [37.7, 132776.0], [37.8, 132776.0], [37.9, 132776.0], [38.0, 132786.0], [38.1, 132786.0], [38.2, 132786.0], [38.3, 132786.0], [38.4, 132786.0], [38.5, 132786.0], [38.6, 132786.0], [38.7, 132786.0], [38.8, 132786.0], [38.9, 132786.0], [39.0, 132791.0], [39.1, 132791.0], [39.2, 132791.0], [39.3, 132791.0], [39.4, 132791.0], [39.5, 132791.0], [39.6, 132791.0], [39.7, 132791.0], [39.8, 132791.0], [39.9, 132791.0], [40.0, 132808.0], [40.1, 132808.0], [40.2, 132808.0], [40.3, 132808.0], [40.4, 132808.0], [40.5, 132808.0], [40.6, 132808.0], [40.7, 132808.0], [40.8, 132808.0], [40.9, 132808.0], [41.0, 132817.0], [41.1, 132817.0], [41.2, 132817.0], [41.3, 132817.0], [41.4, 132817.0], [41.5, 132817.0], [41.6, 132817.0], [41.7, 132817.0], [41.8, 132817.0], [41.9, 132817.0], [42.0, 132828.0], [42.1, 132828.0], [42.2, 132828.0], [42.3, 132828.0], [42.4, 132828.0], [42.5, 132828.0], [42.6, 132828.0], [42.7, 132828.0], [42.8, 132828.0], [42.9, 132828.0], [43.0, 132835.0], [43.1, 132835.0], [43.2, 132835.0], [43.3, 132835.0], [43.4, 132835.0], [43.5, 132835.0], [43.6, 132835.0], [43.7, 132835.0], [43.8, 132835.0], [43.9, 132835.0], [44.0, 132846.0], [44.1, 132846.0], [44.2, 132846.0], [44.3, 132846.0], [44.4, 132846.0], [44.5, 132846.0], [44.6, 132846.0], [44.7, 132846.0], [44.8, 132846.0], [44.9, 132846.0], [45.0, 132850.0], [45.1, 132850.0], [45.2, 132850.0], [45.3, 132850.0], [45.4, 132850.0], [45.5, 132850.0], [45.6, 132850.0], [45.7, 132850.0], [45.8, 132850.0], [45.9, 132850.0], [46.0, 132860.0], [46.1, 132860.0], [46.2, 132860.0], [46.3, 132860.0], [46.4, 132860.0], [46.5, 132860.0], [46.6, 132860.0], [46.7, 132860.0], [46.8, 132860.0], [46.9, 132860.0], [47.0, 132869.0], [47.1, 132869.0], [47.2, 132869.0], [47.3, 132869.0], [47.4, 132869.0], [47.5, 132869.0], [47.6, 132869.0], [47.7, 132869.0], [47.8, 132869.0], [47.9, 132869.0], [48.0, 132879.0], [48.1, 132879.0], [48.2, 132879.0], [48.3, 132879.0], [48.4, 132879.0], [48.5, 132879.0], [48.6, 132879.0], [48.7, 132879.0], [48.8, 132879.0], [48.9, 132879.0], [49.0, 132889.0], [49.1, 132889.0], [49.2, 132889.0], [49.3, 132889.0], [49.4, 132889.0], [49.5, 132889.0], [49.6, 132889.0], [49.7, 132889.0], [49.8, 132889.0], [49.9, 132889.0], [50.0, 132900.0], [50.1, 132900.0], [50.2, 132900.0], [50.3, 132900.0], [50.4, 132900.0], [50.5, 132900.0], [50.6, 132900.0], [50.7, 132900.0], [50.8, 132900.0], [50.9, 132900.0], [51.0, 132910.0], [51.1, 132910.0], [51.2, 132910.0], [51.3, 132910.0], [51.4, 132910.0], [51.5, 132910.0], [51.6, 132910.0], [51.7, 132910.0], [51.8, 132910.0], [51.9, 132910.0], [52.0, 132920.0], [52.1, 132920.0], [52.2, 132920.0], [52.3, 132920.0], [52.4, 132920.0], [52.5, 132920.0], [52.6, 132920.0], [52.7, 132920.0], [52.8, 132920.0], [52.9, 132920.0], [53.0, 132930.0], [53.1, 132930.0], [53.2, 132930.0], [53.3, 132930.0], [53.4, 132930.0], [53.5, 132930.0], [53.6, 132930.0], [53.7, 132930.0], [53.8, 132930.0], [53.9, 132930.0], [54.0, 132942.0], [54.1, 132942.0], [54.2, 132942.0], [54.3, 132942.0], [54.4, 132942.0], [54.5, 132942.0], [54.6, 132942.0], [54.7, 132942.0], [54.8, 132942.0], [54.9, 132942.0], [55.0, 132951.0], [55.1, 132951.0], [55.2, 132951.0], [55.3, 132951.0], [55.4, 132951.0], [55.5, 132951.0], [55.6, 132951.0], [55.7, 132951.0], [55.8, 132951.0], [55.9, 132951.0], [56.0, 132961.0], [56.1, 132961.0], [56.2, 132961.0], [56.3, 132961.0], [56.4, 132961.0], [56.5, 132961.0], [56.6, 132961.0], [56.7, 132961.0], [56.8, 132961.0], [56.9, 132961.0], [57.0, 132973.0], [57.1, 132973.0], [57.2, 132973.0], [57.3, 132973.0], [57.4, 132973.0], [57.5, 132973.0], [57.6, 132973.0], [57.7, 132973.0], [57.8, 132973.0], [57.9, 132973.0], [58.0, 132983.0], [58.1, 132983.0], [58.2, 132983.0], [58.3, 132983.0], [58.4, 132983.0], [58.5, 132983.0], [58.6, 132983.0], [58.7, 132983.0], [58.8, 132983.0], [58.9, 132983.0], [59.0, 132993.0], [59.1, 132993.0], [59.2, 132993.0], [59.3, 132993.0], [59.4, 132993.0], [59.5, 132993.0], [59.6, 132993.0], [59.7, 132993.0], [59.8, 132993.0], [59.9, 132993.0], [60.0, 133002.0], [60.1, 133002.0], [60.2, 133002.0], [60.3, 133002.0], [60.4, 133002.0], [60.5, 133002.0], [60.6, 133002.0], [60.7, 133002.0], [60.8, 133002.0], [60.9, 133002.0], [61.0, 133021.0], [61.1, 133021.0], [61.2, 133021.0], [61.3, 133021.0], [61.4, 133021.0], [61.5, 133021.0], [61.6, 133021.0], [61.7, 133021.0], [61.8, 133021.0], [61.9, 133021.0], [62.0, 133029.0], [62.1, 133029.0], [62.2, 133029.0], [62.3, 133029.0], [62.4, 133029.0], [62.5, 133029.0], [62.6, 133029.0], [62.7, 133029.0], [62.8, 133029.0], [62.9, 133029.0], [63.0, 133042.0], [63.1, 133042.0], [63.2, 133042.0], [63.3, 133042.0], [63.4, 133042.0], [63.5, 133042.0], [63.6, 133042.0], [63.7, 133042.0], [63.8, 133042.0], [63.9, 133042.0], [64.0, 133054.0], [64.1, 133054.0], [64.2, 133054.0], [64.3, 133054.0], [64.4, 133054.0], [64.5, 133054.0], [64.6, 133054.0], [64.7, 133054.0], [64.8, 133054.0], [64.9, 133054.0], [65.0, 133064.0], [65.1, 133064.0], [65.2, 133064.0], [65.3, 133064.0], [65.4, 133064.0], [65.5, 133064.0], [65.6, 133064.0], [65.7, 133064.0], [65.8, 133064.0], [65.9, 133064.0], [66.0, 133073.0], [66.1, 133073.0], [66.2, 133073.0], [66.3, 133073.0], [66.4, 133073.0], [66.5, 133073.0], [66.6, 133073.0], [66.7, 133073.0], [66.8, 133073.0], [66.9, 133073.0], [67.0, 133077.0], [67.1, 133077.0], [67.2, 133077.0], [67.3, 133077.0], [67.4, 133077.0], [67.5, 133077.0], [67.6, 133077.0], [67.7, 133077.0], [67.8, 133077.0], [67.9, 133077.0], [68.0, 133085.0], [68.1, 133085.0], [68.2, 133085.0], [68.3, 133085.0], [68.4, 133085.0], [68.5, 133085.0], [68.6, 133085.0], [68.7, 133085.0], [68.8, 133085.0], [68.9, 133085.0], [69.0, 133093.0], [69.1, 133093.0], [69.2, 133093.0], [69.3, 133093.0], [69.4, 133093.0], [69.5, 133093.0], [69.6, 133093.0], [69.7, 133093.0], [69.8, 133093.0], [69.9, 133093.0], [70.0, 133104.0], [70.1, 133104.0], [70.2, 133104.0], [70.3, 133104.0], [70.4, 133104.0], [70.5, 133104.0], [70.6, 133104.0], [70.7, 133104.0], [70.8, 133104.0], [70.9, 133104.0], [71.0, 133108.0], [71.1, 133108.0], [71.2, 133108.0], [71.3, 133108.0], [71.4, 133108.0], [71.5, 133108.0], [71.6, 133108.0], [71.7, 133108.0], [71.8, 133108.0], [71.9, 133108.0], [72.0, 133120.0], [72.1, 133120.0], [72.2, 133120.0], [72.3, 133120.0], [72.4, 133120.0], [72.5, 133120.0], [72.6, 133120.0], [72.7, 133120.0], [72.8, 133120.0], [72.9, 133120.0], [73.0, 133133.0], [73.1, 133133.0], [73.2, 133133.0], [73.3, 133133.0], [73.4, 133133.0], [73.5, 133133.0], [73.6, 133133.0], [73.7, 133133.0], [73.8, 133133.0], [73.9, 133133.0], [74.0, 133144.0], [74.1, 133144.0], [74.2, 133144.0], [74.3, 133144.0], [74.4, 133144.0], [74.5, 133144.0], [74.6, 133144.0], [74.7, 133144.0], [74.8, 133144.0], [74.9, 133144.0], [75.0, 133156.0], [75.1, 133156.0], [75.2, 133156.0], [75.3, 133156.0], [75.4, 133156.0], [75.5, 133156.0], [75.6, 133156.0], [75.7, 133156.0], [75.8, 133156.0], [75.9, 133156.0], [76.0, 133168.0], [76.1, 133168.0], [76.2, 133168.0], [76.3, 133168.0], [76.4, 133168.0], [76.5, 133168.0], [76.6, 133168.0], [76.7, 133168.0], [76.8, 133168.0], [76.9, 133168.0], [77.0, 133172.0], [77.1, 133172.0], [77.2, 133172.0], [77.3, 133172.0], [77.4, 133172.0], [77.5, 133172.0], [77.6, 133172.0], [77.7, 133172.0], [77.8, 133172.0], [77.9, 133172.0], [78.0, 133185.0], [78.1, 133185.0], [78.2, 133185.0], [78.3, 133185.0], [78.4, 133185.0], [78.5, 133185.0], [78.6, 133185.0], [78.7, 133185.0], [78.8, 133185.0], [78.9, 133185.0], [79.0, 133199.0], [79.1, 133199.0], [79.2, 133199.0], [79.3, 133199.0], [79.4, 133199.0], [79.5, 133199.0], [79.6, 133199.0], [79.7, 133199.0], [79.8, 133199.0], [79.9, 133199.0], [80.0, 133199.0], [80.1, 133199.0], [80.2, 133199.0], [80.3, 133199.0], [80.4, 133199.0], [80.5, 133199.0], [80.6, 133199.0], [80.7, 133199.0], [80.8, 133199.0], [80.9, 133199.0], [81.0, 133214.0], [81.1, 133214.0], [81.2, 133214.0], [81.3, 133214.0], [81.4, 133214.0], [81.5, 133214.0], [81.6, 133214.0], [81.7, 133214.0], [81.8, 133214.0], [81.9, 133214.0], [82.0, 133223.0], [82.1, 133223.0], [82.2, 133223.0], [82.3, 133223.0], [82.4, 133223.0], [82.5, 133223.0], [82.6, 133223.0], [82.7, 133223.0], [82.8, 133223.0], [82.9, 133223.0], [83.0, 133235.0], [83.1, 133235.0], [83.2, 133235.0], [83.3, 133235.0], [83.4, 133235.0], [83.5, 133235.0], [83.6, 133235.0], [83.7, 133235.0], [83.8, 133235.0], [83.9, 133235.0], [84.0, 133244.0], [84.1, 133244.0], [84.2, 133244.0], [84.3, 133244.0], [84.4, 133244.0], [84.5, 133244.0], [84.6, 133244.0], [84.7, 133244.0], [84.8, 133244.0], [84.9, 133244.0], [85.0, 133256.0], [85.1, 133256.0], [85.2, 133256.0], [85.3, 133256.0], [85.4, 133256.0], [85.5, 133256.0], [85.6, 133256.0], [85.7, 133256.0], [85.8, 133256.0], [85.9, 133256.0], [86.0, 133256.0], [86.1, 133256.0], [86.2, 133256.0], [86.3, 133256.0], [86.4, 133256.0], [86.5, 133256.0], [86.6, 133256.0], [86.7, 133256.0], [86.8, 133256.0], [86.9, 133256.0], [87.0, 133261.0], [87.1, 133261.0], [87.2, 133261.0], [87.3, 133261.0], [87.4, 133261.0], [87.5, 133261.0], [87.6, 133261.0], [87.7, 133261.0], [87.8, 133261.0], [87.9, 133261.0], [88.0, 133262.0], [88.1, 133262.0], [88.2, 133262.0], [88.3, 133262.0], [88.4, 133262.0], [88.5, 133262.0], [88.6, 133262.0], [88.7, 133262.0], [88.8, 133262.0], [88.9, 133262.0], [89.0, 133262.0], [89.1, 133262.0], [89.2, 133262.0], [89.3, 133262.0], [89.4, 133262.0], [89.5, 133262.0], [89.6, 133262.0], [89.7, 133262.0], [89.8, 133262.0], [89.9, 133262.0], [90.0, 133263.0], [90.1, 133263.0], [90.2, 133263.0], [90.3, 133263.0], [90.4, 133263.0], [90.5, 133263.0], [90.6, 133263.0], [90.7, 133263.0], [90.8, 133263.0], [90.9, 133263.0], [91.0, 133263.0], [91.1, 133263.0], [91.2, 133263.0], [91.3, 133263.0], [91.4, 133263.0], [91.5, 133263.0], [91.6, 133263.0], [91.7, 133263.0], [91.8, 133263.0], [91.9, 133263.0], [92.0, 133263.0], [92.1, 133263.0], [92.2, 133263.0], [92.3, 133263.0], [92.4, 133263.0], [92.5, 133263.0], [92.6, 133263.0], [92.7, 133263.0], [92.8, 133263.0], [92.9, 133263.0], [93.0, 133264.0], [93.1, 133264.0], [93.2, 133264.0], [93.3, 133264.0], [93.4, 133264.0], [93.5, 133264.0], [93.6, 133264.0], [93.7, 133264.0], [93.8, 133264.0], [93.9, 133264.0], [94.0, 133264.0], [94.1, 133264.0], [94.2, 133264.0], [94.3, 133264.0], [94.4, 133264.0], [94.5, 133264.0], [94.6, 133264.0], [94.7, 133264.0], [94.8, 133264.0], [94.9, 133264.0], [95.0, 133264.0], [95.1, 133264.0], [95.2, 133264.0], [95.3, 133264.0], [95.4, 133264.0], [95.5, 133264.0], [95.6, 133264.0], [95.7, 133264.0], [95.8, 133264.0], [95.9, 133264.0], [96.0, 133265.0], [96.1, 133265.0], [96.2, 133265.0], [96.3, 133265.0], [96.4, 133265.0], [96.5, 133265.0], [96.6, 133265.0], [96.7, 133265.0], [96.8, 133265.0], [96.9, 133265.0], [97.0, 133266.0], [97.1, 133266.0], [97.2, 133266.0], [97.3, 133266.0], [97.4, 133266.0], [97.5, 133266.0], [97.6, 133266.0], [97.7, 133266.0], [97.8, 133266.0], [97.9, 133266.0], [98.0, 136475.0], [98.1, 136475.0], [98.2, 136475.0], [98.3, 136475.0], [98.4, 136475.0], [98.5, 136475.0], [98.6, 136475.0], [98.7, 136475.0], [98.8, 136475.0], [98.9, 136475.0], [99.0, 136484.0], [99.1, 136484.0], [99.2, 136484.0], [99.3, 136484.0], [99.4, 136484.0], [99.5, 136484.0], [99.6, 136484.0], [99.7, 136484.0], [99.8, 136484.0], [99.9, 136484.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 132400.0, "maxY": 17.0, "series": [{"data": [[133200.0, 17.0], [132600.0, 10.0], [132800.0, 10.0], [133000.0, 10.0], [132400.0, 10.0], [136400.0, 2.0], [132500.0, 10.0], [133100.0, 11.0], [132700.0, 10.0], [132900.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 64.43999999999998, "minX": 1.76188026E12, "maxY": 64.43999999999998, "series": [{"data": [[1.76188026E12, 64.43999999999998]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76188026E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132400.0, "minX": 2.0, "maxY": 136479.5, "series": [{"data": [[32.0, 132676.66666666666], [2.0, 136479.5], [35.0, 132823.66666666666], [38.0, 132631.66666666666], [41.0, 132816.66666666666], [44.0, 133261.0], [48.0, 132475.0], [50.0, 133073.0], [53.0, 132464.0], [56.0, 133172.0], [58.0, 133093.0], [62.0, 132585.0], [67.0, 133133.0], [65.0, 132835.0], [4.0, 133003.5], [69.0, 133064.0], [77.0, 132918.0], [83.0, 132899.0], [81.0, 132641.0], [80.0, 132952.0], [86.0, 132740.0], [85.0, 132564.0], [84.0, 132610.0], [90.0, 132730.0], [89.0, 132791.0], [88.0, 132728.0], [95.0, 132740.0], [94.0, 133244.0], [98.0, 132775.5], [100.0, 133012.15151515155], [7.0, 133199.0], [8.0, 132701.33333333334], [10.0, 132400.0], [15.0, 132951.5], [18.0, 132682.0], [20.0, 132624.0], [24.0, 132753.5], [27.0, 133030.66666666666], [29.0, 133120.0], [30.0, 132680.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[64.43999999999998, 132953.79000000007]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.76188026E12, "maxY": 4708.333333333333, "series": [{"data": [[1.76188026E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76188026E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76188026E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 132953.79000000007, "minX": 1.76188026E12, "maxY": 132953.79000000007, "series": [{"data": [[1.76188026E12, 132953.79000000007]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76188026E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.76188026E12, "maxY": 4.9E-324, "series": [{"data": [[1.76188026E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76188026E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 132953.77000000005, "minX": 1.76188026E12, "maxY": 132953.77000000005, "series": [{"data": [[1.76188026E12, 132953.77000000005]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76188026E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 132884.0, "minX": 2.0, "maxY": 136479.5, "series": [{"data": [[2.0, 136479.5], [98.0, 132884.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 2.0, "maxY": 4.9E-324, "series": [{"data": [[2.0, 0.0], [98.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 98.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76188014E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76188014E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76188014E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76188026E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76188026E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76188026E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76188026E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76188026E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76188026E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76188026E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76188026E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76188026E12, "title": "Total Transactions Per Second"}},
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

