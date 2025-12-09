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
        data: {"result": {"minY": 132647.0, "minX": 0.0, "maxY": 133535.0, "series": [{"data": [[0.0, 132647.0], [0.1, 132647.0], [0.2, 132647.0], [0.3, 132647.0], [0.4, 132647.0], [0.5, 132647.0], [0.6, 132647.0], [0.7, 132647.0], [0.8, 132647.0], [0.9, 132647.0], [1.0, 132658.0], [1.1, 132658.0], [1.2, 132658.0], [1.3, 132658.0], [1.4, 132658.0], [1.5, 132658.0], [1.6, 132658.0], [1.7, 132658.0], [1.8, 132658.0], [1.9, 132658.0], [2.0, 132666.0], [2.1, 132666.0], [2.2, 132666.0], [2.3, 132666.0], [2.4, 132666.0], [2.5, 132666.0], [2.6, 132666.0], [2.7, 132666.0], [2.8, 132666.0], [2.9, 132666.0], [3.0, 132680.0], [3.1, 132680.0], [3.2, 132680.0], [3.3, 132680.0], [3.4, 132680.0], [3.5, 132680.0], [3.6, 132680.0], [3.7, 132680.0], [3.8, 132680.0], [3.9, 132680.0], [4.0, 132690.0], [4.1, 132690.0], [4.2, 132690.0], [4.3, 132690.0], [4.4, 132690.0], [4.5, 132690.0], [4.6, 132690.0], [4.7, 132690.0], [4.8, 132690.0], [4.9, 132690.0], [5.0, 132700.0], [5.1, 132700.0], [5.2, 132700.0], [5.3, 132700.0], [5.4, 132700.0], [5.5, 132700.0], [5.6, 132700.0], [5.7, 132700.0], [5.8, 132700.0], [5.9, 132700.0], [6.0, 132707.0], [6.1, 132707.0], [6.2, 132707.0], [6.3, 132707.0], [6.4, 132707.0], [6.5, 132707.0], [6.6, 132707.0], [6.7, 132707.0], [6.8, 132707.0], [6.9, 132707.0], [7.0, 132717.0], [7.1, 132717.0], [7.2, 132717.0], [7.3, 132717.0], [7.4, 132717.0], [7.5, 132717.0], [7.6, 132717.0], [7.7, 132717.0], [7.8, 132717.0], [7.9, 132717.0], [8.0, 132728.0], [8.1, 132728.0], [8.2, 132728.0], [8.3, 132728.0], [8.4, 132728.0], [8.5, 132728.0], [8.6, 132728.0], [8.7, 132728.0], [8.8, 132728.0], [8.9, 132728.0], [9.0, 132738.0], [9.1, 132738.0], [9.2, 132738.0], [9.3, 132738.0], [9.4, 132738.0], [9.5, 132738.0], [9.6, 132738.0], [9.7, 132738.0], [9.8, 132738.0], [9.9, 132738.0], [10.0, 132749.0], [10.1, 132749.0], [10.2, 132749.0], [10.3, 132749.0], [10.4, 132749.0], [10.5, 132749.0], [10.6, 132749.0], [10.7, 132749.0], [10.8, 132749.0], [10.9, 132749.0], [11.0, 132759.0], [11.1, 132759.0], [11.2, 132759.0], [11.3, 132759.0], [11.4, 132759.0], [11.5, 132759.0], [11.6, 132759.0], [11.7, 132759.0], [11.8, 132759.0], [11.9, 132759.0], [12.0, 132766.0], [12.1, 132766.0], [12.2, 132766.0], [12.3, 132766.0], [12.4, 132766.0], [12.5, 132766.0], [12.6, 132766.0], [12.7, 132766.0], [12.8, 132766.0], [12.9, 132766.0], [13.0, 132777.0], [13.1, 132777.0], [13.2, 132777.0], [13.3, 132777.0], [13.4, 132777.0], [13.5, 132777.0], [13.6, 132777.0], [13.7, 132777.0], [13.8, 132777.0], [13.9, 132777.0], [14.0, 132787.0], [14.1, 132787.0], [14.2, 132787.0], [14.3, 132787.0], [14.4, 132787.0], [14.5, 132787.0], [14.6, 132787.0], [14.7, 132787.0], [14.8, 132787.0], [14.9, 132787.0], [15.0, 132796.0], [15.1, 132796.0], [15.2, 132796.0], [15.3, 132796.0], [15.4, 132796.0], [15.5, 132796.0], [15.6, 132796.0], [15.7, 132796.0], [15.8, 132796.0], [15.9, 132796.0], [16.0, 132807.0], [16.1, 132807.0], [16.2, 132807.0], [16.3, 132807.0], [16.4, 132807.0], [16.5, 132807.0], [16.6, 132807.0], [16.7, 132807.0], [16.8, 132807.0], [16.9, 132807.0], [17.0, 132817.0], [17.1, 132817.0], [17.2, 132817.0], [17.3, 132817.0], [17.4, 132817.0], [17.5, 132817.0], [17.6, 132817.0], [17.7, 132817.0], [17.8, 132817.0], [17.9, 132817.0], [18.0, 132829.0], [18.1, 132829.0], [18.2, 132829.0], [18.3, 132829.0], [18.4, 132829.0], [18.5, 132829.0], [18.6, 132829.0], [18.7, 132829.0], [18.8, 132829.0], [18.9, 132829.0], [19.0, 132836.0], [19.1, 132836.0], [19.2, 132836.0], [19.3, 132836.0], [19.4, 132836.0], [19.5, 132836.0], [19.6, 132836.0], [19.7, 132836.0], [19.8, 132836.0], [19.9, 132836.0], [20.0, 132848.0], [20.1, 132848.0], [20.2, 132848.0], [20.3, 132848.0], [20.4, 132848.0], [20.5, 132848.0], [20.6, 132848.0], [20.7, 132848.0], [20.8, 132848.0], [20.9, 132848.0], [21.0, 132857.0], [21.1, 132857.0], [21.2, 132857.0], [21.3, 132857.0], [21.4, 132857.0], [21.5, 132857.0], [21.6, 132857.0], [21.7, 132857.0], [21.8, 132857.0], [21.9, 132857.0], [22.0, 132866.0], [22.1, 132866.0], [22.2, 132866.0], [22.3, 132866.0], [22.4, 132866.0], [22.5, 132866.0], [22.6, 132866.0], [22.7, 132866.0], [22.8, 132866.0], [22.9, 132866.0], [23.0, 132877.0], [23.1, 132877.0], [23.2, 132877.0], [23.3, 132877.0], [23.4, 132877.0], [23.5, 132877.0], [23.6, 132877.0], [23.7, 132877.0], [23.8, 132877.0], [23.9, 132877.0], [24.0, 132890.0], [24.1, 132890.0], [24.2, 132890.0], [24.3, 132890.0], [24.4, 132890.0], [24.5, 132890.0], [24.6, 132890.0], [24.7, 132890.0], [24.8, 132890.0], [24.9, 132890.0], [25.0, 132906.0], [25.1, 132906.0], [25.2, 132906.0], [25.3, 132906.0], [25.4, 132906.0], [25.5, 132906.0], [25.6, 132906.0], [25.7, 132906.0], [25.8, 132906.0], [25.9, 132906.0], [26.0, 132912.0], [26.1, 132912.0], [26.2, 132912.0], [26.3, 132912.0], [26.4, 132912.0], [26.5, 132912.0], [26.6, 132912.0], [26.7, 132912.0], [26.8, 132912.0], [26.9, 132912.0], [27.0, 132917.0], [27.1, 132917.0], [27.2, 132917.0], [27.3, 132917.0], [27.4, 132917.0], [27.5, 132917.0], [27.6, 132917.0], [27.7, 132917.0], [27.8, 132917.0], [27.9, 132917.0], [28.0, 132927.0], [28.1, 132927.0], [28.2, 132927.0], [28.3, 132927.0], [28.4, 132927.0], [28.5, 132927.0], [28.6, 132927.0], [28.7, 132927.0], [28.8, 132927.0], [28.9, 132927.0], [29.0, 132938.0], [29.1, 132938.0], [29.2, 132938.0], [29.3, 132938.0], [29.4, 132938.0], [29.5, 132938.0], [29.6, 132938.0], [29.7, 132938.0], [29.8, 132938.0], [29.9, 132938.0], [30.0, 132948.0], [30.1, 132948.0], [30.2, 132948.0], [30.3, 132948.0], [30.4, 132948.0], [30.5, 132948.0], [30.6, 132948.0], [30.7, 132948.0], [30.8, 132948.0], [30.9, 132948.0], [31.0, 132957.0], [31.1, 132957.0], [31.2, 132957.0], [31.3, 132957.0], [31.4, 132957.0], [31.5, 132957.0], [31.6, 132957.0], [31.7, 132957.0], [31.8, 132957.0], [31.9, 132957.0], [32.0, 132966.0], [32.1, 132966.0], [32.2, 132966.0], [32.3, 132966.0], [32.4, 132966.0], [32.5, 132966.0], [32.6, 132966.0], [32.7, 132966.0], [32.8, 132966.0], [32.9, 132966.0], [33.0, 132977.0], [33.1, 132977.0], [33.2, 132977.0], [33.3, 132977.0], [33.4, 132977.0], [33.5, 132977.0], [33.6, 132977.0], [33.7, 132977.0], [33.8, 132977.0], [33.9, 132977.0], [34.0, 132987.0], [34.1, 132987.0], [34.2, 132987.0], [34.3, 132987.0], [34.4, 132987.0], [34.5, 132987.0], [34.6, 132987.0], [34.7, 132987.0], [34.8, 132987.0], [34.9, 132987.0], [35.0, 132998.0], [35.1, 132998.0], [35.2, 132998.0], [35.3, 132998.0], [35.4, 132998.0], [35.5, 132998.0], [35.6, 132998.0], [35.7, 132998.0], [35.8, 132998.0], [35.9, 132998.0], [36.0, 133012.0], [36.1, 133012.0], [36.2, 133012.0], [36.3, 133012.0], [36.4, 133012.0], [36.5, 133012.0], [36.6, 133012.0], [36.7, 133012.0], [36.8, 133012.0], [36.9, 133012.0], [37.0, 133017.0], [37.1, 133017.0], [37.2, 133017.0], [37.3, 133017.0], [37.4, 133017.0], [37.5, 133017.0], [37.6, 133017.0], [37.7, 133017.0], [37.8, 133017.0], [37.9, 133017.0], [38.0, 133030.0], [38.1, 133030.0], [38.2, 133030.0], [38.3, 133030.0], [38.4, 133030.0], [38.5, 133030.0], [38.6, 133030.0], [38.7, 133030.0], [38.8, 133030.0], [38.9, 133030.0], [39.0, 133037.0], [39.1, 133037.0], [39.2, 133037.0], [39.3, 133037.0], [39.4, 133037.0], [39.5, 133037.0], [39.6, 133037.0], [39.7, 133037.0], [39.8, 133037.0], [39.9, 133037.0], [40.0, 133058.0], [40.1, 133058.0], [40.2, 133058.0], [40.3, 133058.0], [40.4, 133058.0], [40.5, 133058.0], [40.6, 133058.0], [40.7, 133058.0], [40.8, 133058.0], [40.9, 133058.0], [41.0, 133059.0], [41.1, 133059.0], [41.2, 133059.0], [41.3, 133059.0], [41.4, 133059.0], [41.5, 133059.0], [41.6, 133059.0], [41.7, 133059.0], [41.8, 133059.0], [41.9, 133059.0], [42.0, 133068.0], [42.1, 133068.0], [42.2, 133068.0], [42.3, 133068.0], [42.4, 133068.0], [42.5, 133068.0], [42.6, 133068.0], [42.7, 133068.0], [42.8, 133068.0], [42.9, 133068.0], [43.0, 133077.0], [43.1, 133077.0], [43.2, 133077.0], [43.3, 133077.0], [43.4, 133077.0], [43.5, 133077.0], [43.6, 133077.0], [43.7, 133077.0], [43.8, 133077.0], [43.9, 133077.0], [44.0, 133089.0], [44.1, 133089.0], [44.2, 133089.0], [44.3, 133089.0], [44.4, 133089.0], [44.5, 133089.0], [44.6, 133089.0], [44.7, 133089.0], [44.8, 133089.0], [44.9, 133089.0], [45.0, 133098.0], [45.1, 133098.0], [45.2, 133098.0], [45.3, 133098.0], [45.4, 133098.0], [45.5, 133098.0], [45.6, 133098.0], [45.7, 133098.0], [45.8, 133098.0], [45.9, 133098.0], [46.0, 133109.0], [46.1, 133109.0], [46.2, 133109.0], [46.3, 133109.0], [46.4, 133109.0], [46.5, 133109.0], [46.6, 133109.0], [46.7, 133109.0], [46.8, 133109.0], [46.9, 133109.0], [47.0, 133115.0], [47.1, 133115.0], [47.2, 133115.0], [47.3, 133115.0], [47.4, 133115.0], [47.5, 133115.0], [47.6, 133115.0], [47.7, 133115.0], [47.8, 133115.0], [47.9, 133115.0], [48.0, 133126.0], [48.1, 133126.0], [48.2, 133126.0], [48.3, 133126.0], [48.4, 133126.0], [48.5, 133126.0], [48.6, 133126.0], [48.7, 133126.0], [48.8, 133126.0], [48.9, 133126.0], [49.0, 133139.0], [49.1, 133139.0], [49.2, 133139.0], [49.3, 133139.0], [49.4, 133139.0], [49.5, 133139.0], [49.6, 133139.0], [49.7, 133139.0], [49.8, 133139.0], [49.9, 133139.0], [50.0, 133147.0], [50.1, 133147.0], [50.2, 133147.0], [50.3, 133147.0], [50.4, 133147.0], [50.5, 133147.0], [50.6, 133147.0], [50.7, 133147.0], [50.8, 133147.0], [50.9, 133147.0], [51.0, 133157.0], [51.1, 133157.0], [51.2, 133157.0], [51.3, 133157.0], [51.4, 133157.0], [51.5, 133157.0], [51.6, 133157.0], [51.7, 133157.0], [51.8, 133157.0], [51.9, 133157.0], [52.0, 133167.0], [52.1, 133167.0], [52.2, 133167.0], [52.3, 133167.0], [52.4, 133167.0], [52.5, 133167.0], [52.6, 133167.0], [52.7, 133167.0], [52.8, 133167.0], [52.9, 133167.0], [53.0, 133178.0], [53.1, 133178.0], [53.2, 133178.0], [53.3, 133178.0], [53.4, 133178.0], [53.5, 133178.0], [53.6, 133178.0], [53.7, 133178.0], [53.8, 133178.0], [53.9, 133178.0], [54.0, 133187.0], [54.1, 133187.0], [54.2, 133187.0], [54.3, 133187.0], [54.4, 133187.0], [54.5, 133187.0], [54.6, 133187.0], [54.7, 133187.0], [54.8, 133187.0], [54.9, 133187.0], [55.0, 133198.0], [55.1, 133198.0], [55.2, 133198.0], [55.3, 133198.0], [55.4, 133198.0], [55.5, 133198.0], [55.6, 133198.0], [55.7, 133198.0], [55.8, 133198.0], [55.9, 133198.0], [56.0, 133208.0], [56.1, 133208.0], [56.2, 133208.0], [56.3, 133208.0], [56.4, 133208.0], [56.5, 133208.0], [56.6, 133208.0], [56.7, 133208.0], [56.8, 133208.0], [56.9, 133208.0], [57.0, 133217.0], [57.1, 133217.0], [57.2, 133217.0], [57.3, 133217.0], [57.4, 133217.0], [57.5, 133217.0], [57.6, 133217.0], [57.7, 133217.0], [57.8, 133217.0], [57.9, 133217.0], [58.0, 133227.0], [58.1, 133227.0], [58.2, 133227.0], [58.3, 133227.0], [58.4, 133227.0], [58.5, 133227.0], [58.6, 133227.0], [58.7, 133227.0], [58.8, 133227.0], [58.9, 133227.0], [59.0, 133238.0], [59.1, 133238.0], [59.2, 133238.0], [59.3, 133238.0], [59.4, 133238.0], [59.5, 133238.0], [59.6, 133238.0], [59.7, 133238.0], [59.8, 133238.0], [59.9, 133238.0], [60.0, 133247.0], [60.1, 133247.0], [60.2, 133247.0], [60.3, 133247.0], [60.4, 133247.0], [60.5, 133247.0], [60.6, 133247.0], [60.7, 133247.0], [60.8, 133247.0], [60.9, 133247.0], [61.0, 133258.0], [61.1, 133258.0], [61.2, 133258.0], [61.3, 133258.0], [61.4, 133258.0], [61.5, 133258.0], [61.6, 133258.0], [61.7, 133258.0], [61.8, 133258.0], [61.9, 133258.0], [62.0, 133267.0], [62.1, 133267.0], [62.2, 133267.0], [62.3, 133267.0], [62.4, 133267.0], [62.5, 133267.0], [62.6, 133267.0], [62.7, 133267.0], [62.8, 133267.0], [62.9, 133267.0], [63.0, 133280.0], [63.1, 133280.0], [63.2, 133280.0], [63.3, 133280.0], [63.4, 133280.0], [63.5, 133280.0], [63.6, 133280.0], [63.7, 133280.0], [63.8, 133280.0], [63.9, 133280.0], [64.0, 133286.0], [64.1, 133286.0], [64.2, 133286.0], [64.3, 133286.0], [64.4, 133286.0], [64.5, 133286.0], [64.6, 133286.0], [64.7, 133286.0], [64.8, 133286.0], [64.9, 133286.0], [65.0, 133296.0], [65.1, 133296.0], [65.2, 133296.0], [65.3, 133296.0], [65.4, 133296.0], [65.5, 133296.0], [65.6, 133296.0], [65.7, 133296.0], [65.8, 133296.0], [65.9, 133296.0], [66.0, 133307.0], [66.1, 133307.0], [66.2, 133307.0], [66.3, 133307.0], [66.4, 133307.0], [66.5, 133307.0], [66.6, 133307.0], [66.7, 133307.0], [66.8, 133307.0], [66.9, 133307.0], [67.0, 133319.0], [67.1, 133319.0], [67.2, 133319.0], [67.3, 133319.0], [67.4, 133319.0], [67.5, 133319.0], [67.6, 133319.0], [67.7, 133319.0], [67.8, 133319.0], [67.9, 133319.0], [68.0, 133327.0], [68.1, 133327.0], [68.2, 133327.0], [68.3, 133327.0], [68.4, 133327.0], [68.5, 133327.0], [68.6, 133327.0], [68.7, 133327.0], [68.8, 133327.0], [68.9, 133327.0], [69.0, 133338.0], [69.1, 133338.0], [69.2, 133338.0], [69.3, 133338.0], [69.4, 133338.0], [69.5, 133338.0], [69.6, 133338.0], [69.7, 133338.0], [69.8, 133338.0], [69.9, 133338.0], [70.0, 133357.0], [70.1, 133357.0], [70.2, 133357.0], [70.3, 133357.0], [70.4, 133357.0], [70.5, 133357.0], [70.6, 133357.0], [70.7, 133357.0], [70.8, 133357.0], [70.9, 133357.0], [71.0, 133360.0], [71.1, 133360.0], [71.2, 133360.0], [71.3, 133360.0], [71.4, 133360.0], [71.5, 133360.0], [71.6, 133360.0], [71.7, 133360.0], [71.8, 133360.0], [71.9, 133360.0], [72.0, 133366.0], [72.1, 133366.0], [72.2, 133366.0], [72.3, 133366.0], [72.4, 133366.0], [72.5, 133366.0], [72.6, 133366.0], [72.7, 133366.0], [72.8, 133366.0], [72.9, 133366.0], [73.0, 133376.0], [73.1, 133376.0], [73.2, 133376.0], [73.3, 133376.0], [73.4, 133376.0], [73.5, 133376.0], [73.6, 133376.0], [73.7, 133376.0], [73.8, 133376.0], [73.9, 133376.0], [74.0, 133386.0], [74.1, 133386.0], [74.2, 133386.0], [74.3, 133386.0], [74.4, 133386.0], [74.5, 133386.0], [74.6, 133386.0], [74.7, 133386.0], [74.8, 133386.0], [74.9, 133386.0], [75.0, 133397.0], [75.1, 133397.0], [75.2, 133397.0], [75.3, 133397.0], [75.4, 133397.0], [75.5, 133397.0], [75.6, 133397.0], [75.7, 133397.0], [75.8, 133397.0], [75.9, 133397.0], [76.0, 133406.0], [76.1, 133406.0], [76.2, 133406.0], [76.3, 133406.0], [76.4, 133406.0], [76.5, 133406.0], [76.6, 133406.0], [76.7, 133406.0], [76.8, 133406.0], [76.9, 133406.0], [77.0, 133416.0], [77.1, 133416.0], [77.2, 133416.0], [77.3, 133416.0], [77.4, 133416.0], [77.5, 133416.0], [77.6, 133416.0], [77.7, 133416.0], [77.8, 133416.0], [77.9, 133416.0], [78.0, 133440.0], [78.1, 133440.0], [78.2, 133440.0], [78.3, 133440.0], [78.4, 133440.0], [78.5, 133440.0], [78.6, 133440.0], [78.7, 133440.0], [78.8, 133440.0], [78.9, 133440.0], [79.0, 133440.0], [79.1, 133440.0], [79.2, 133440.0], [79.3, 133440.0], [79.4, 133440.0], [79.5, 133440.0], [79.6, 133440.0], [79.7, 133440.0], [79.8, 133440.0], [79.9, 133440.0], [80.0, 133446.0], [80.1, 133446.0], [80.2, 133446.0], [80.3, 133446.0], [80.4, 133446.0], [80.5, 133446.0], [80.6, 133446.0], [80.7, 133446.0], [80.8, 133446.0], [80.9, 133446.0], [81.0, 133457.0], [81.1, 133457.0], [81.2, 133457.0], [81.3, 133457.0], [81.4, 133457.0], [81.5, 133457.0], [81.6, 133457.0], [81.7, 133457.0], [81.8, 133457.0], [81.9, 133457.0], [82.0, 133469.0], [82.1, 133469.0], [82.2, 133469.0], [82.3, 133469.0], [82.4, 133469.0], [82.5, 133469.0], [82.6, 133469.0], [82.7, 133469.0], [82.8, 133469.0], [82.9, 133469.0], [83.0, 133476.0], [83.1, 133476.0], [83.2, 133476.0], [83.3, 133476.0], [83.4, 133476.0], [83.5, 133476.0], [83.6, 133476.0], [83.7, 133476.0], [83.8, 133476.0], [83.9, 133476.0], [84.0, 133487.0], [84.1, 133487.0], [84.2, 133487.0], [84.3, 133487.0], [84.4, 133487.0], [84.5, 133487.0], [84.6, 133487.0], [84.7, 133487.0], [84.8, 133487.0], [84.9, 133487.0], [85.0, 133498.0], [85.1, 133498.0], [85.2, 133498.0], [85.3, 133498.0], [85.4, 133498.0], [85.5, 133498.0], [85.6, 133498.0], [85.7, 133498.0], [85.8, 133498.0], [85.9, 133498.0], [86.0, 133507.0], [86.1, 133507.0], [86.2, 133507.0], [86.3, 133507.0], [86.4, 133507.0], [86.5, 133507.0], [86.6, 133507.0], [86.7, 133507.0], [86.8, 133507.0], [86.9, 133507.0], [87.0, 133515.0], [87.1, 133515.0], [87.2, 133515.0], [87.3, 133515.0], [87.4, 133515.0], [87.5, 133515.0], [87.6, 133515.0], [87.7, 133515.0], [87.8, 133515.0], [87.9, 133515.0], [88.0, 133527.0], [88.1, 133527.0], [88.2, 133527.0], [88.3, 133527.0], [88.4, 133527.0], [88.5, 133527.0], [88.6, 133527.0], [88.7, 133527.0], [88.8, 133527.0], [88.9, 133527.0], [89.0, 133530.0], [89.1, 133530.0], [89.2, 133530.0], [89.3, 133530.0], [89.4, 133530.0], [89.5, 133530.0], [89.6, 133530.0], [89.7, 133530.0], [89.8, 133530.0], [89.9, 133530.0], [90.0, 133531.0], [90.1, 133531.0], [90.2, 133531.0], [90.3, 133531.0], [90.4, 133531.0], [90.5, 133531.0], [90.6, 133531.0], [90.7, 133531.0], [90.8, 133531.0], [90.9, 133531.0], [91.0, 133532.0], [91.1, 133532.0], [91.2, 133532.0], [91.3, 133532.0], [91.4, 133532.0], [91.5, 133532.0], [91.6, 133532.0], [91.7, 133532.0], [91.8, 133532.0], [91.9, 133532.0], [92.0, 133532.0], [92.1, 133532.0], [92.2, 133532.0], [92.3, 133532.0], [92.4, 133532.0], [92.5, 133532.0], [92.6, 133532.0], [92.7, 133532.0], [92.8, 133532.0], [92.9, 133532.0], [93.0, 133532.0], [93.1, 133532.0], [93.2, 133532.0], [93.3, 133532.0], [93.4, 133532.0], [93.5, 133532.0], [93.6, 133532.0], [93.7, 133532.0], [93.8, 133532.0], [93.9, 133532.0], [94.0, 133532.0], [94.1, 133532.0], [94.2, 133532.0], [94.3, 133532.0], [94.4, 133532.0], [94.5, 133532.0], [94.6, 133532.0], [94.7, 133532.0], [94.8, 133532.0], [94.9, 133532.0], [95.0, 133533.0], [95.1, 133533.0], [95.2, 133533.0], [95.3, 133533.0], [95.4, 133533.0], [95.5, 133533.0], [95.6, 133533.0], [95.7, 133533.0], [95.8, 133533.0], [95.9, 133533.0], [96.0, 133534.0], [96.1, 133534.0], [96.2, 133534.0], [96.3, 133534.0], [96.4, 133534.0], [96.5, 133534.0], [96.6, 133534.0], [96.7, 133534.0], [96.8, 133534.0], [96.9, 133534.0], [97.0, 133534.0], [97.1, 133534.0], [97.2, 133534.0], [97.3, 133534.0], [97.4, 133534.0], [97.5, 133534.0], [97.6, 133534.0], [97.7, 133534.0], [97.8, 133534.0], [97.9, 133534.0], [98.0, 133534.0], [98.1, 133534.0], [98.2, 133534.0], [98.3, 133534.0], [98.4, 133534.0], [98.5, 133534.0], [98.6, 133534.0], [98.7, 133534.0], [98.8, 133534.0], [98.9, 133534.0], [99.0, 133535.0], [99.1, 133535.0], [99.2, 133535.0], [99.3, 133535.0], [99.4, 133535.0], [99.5, 133535.0], [99.6, 133535.0], [99.7, 133535.0], [99.8, 133535.0], [99.9, 133535.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 132600.0, "maxY": 14.0, "series": [{"data": [[133400.0, 10.0], [132600.0, 5.0], [133000.0, 10.0], [133200.0, 10.0], [132800.0, 9.0], [133300.0, 10.0], [133500.0, 14.0], [132700.0, 11.0], [133100.0, 10.0], [132900.0, 11.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 133500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 53.98000000000001, "minX": 1.76525034E12, "maxY": 53.98000000000001, "series": [{"data": [[1.76525034E12, 53.98000000000001]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76525034E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132658.0, "minX": 2.0, "maxY": 133534.0, "series": [{"data": [[2.0, 133532.0], [7.0, 132986.33333333334], [9.0, 133056.0], [11.0, 132946.33333333334], [15.0, 132874.0], [16.0, 132916.5], [18.0, 132867.0], [20.0, 133515.0], [21.0, 133261.5], [25.0, 133455.75], [26.0, 132866.0], [27.0, 133532.0], [29.0, 133126.0], [30.0, 133217.0], [31.0, 132817.5], [32.0, 133307.0], [35.0, 133057.0], [34.0, 133532.0], [37.0, 132728.0], [36.0, 133098.0], [39.0, 133382.5], [41.0, 133047.5], [43.0, 132917.0], [42.0, 133286.0], [45.0, 132658.0], [44.0, 132938.0], [47.0, 132942.0], [49.0, 132797.5], [53.0, 133252.0], [52.0, 133331.5], [55.0, 133187.0], [57.0, 133178.0], [59.0, 133238.0], [58.0, 132987.0], [61.0, 133247.0], [62.0, 133068.0], [67.0, 133274.0], [65.0, 133487.0], [64.0, 133077.0], [71.0, 133338.0], [70.0, 133258.0], [69.0, 132883.0], [74.0, 133247.33333333334], [72.0, 133058.0], [79.0, 133533.0], [78.0, 132998.0], [77.0, 133534.0], [76.0, 133533.0], [82.0, 133109.0], [84.0, 133327.0], [89.0, 133059.0], [94.0, 133136.0], [95.0, 133469.0], [99.0, 133197.5], [96.0, 133068.4], [100.0, 133112.30000000002]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[53.98000000000001, 133136.92999999993]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.76525034E12, "maxY": 4708.333333333333, "series": [{"data": [[1.76525034E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76525034E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76525034E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133136.92999999993, "minX": 1.76525034E12, "maxY": 133136.92999999993, "series": [{"data": [[1.76525034E12, 133136.92999999993]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76525034E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.76525034E12, "maxY": 4.9E-324, "series": [{"data": [[1.76525034E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76525034E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 133136.40999999995, "minX": 1.76525034E12, "maxY": 133136.40999999995, "series": [{"data": [[1.76525034E12, 133136.40999999995]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76525034E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 133143.0, "minX": 100.0, "maxY": 133143.0, "series": [{"data": [[100.0, 133143.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76525022E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76525022E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76525022E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76525034E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76525034E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76525034E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76525034E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76525034E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76525034E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76525034E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76525034E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76525034E12, "title": "Total Transactions Per Second"}},
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

