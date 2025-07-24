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
        data: {"result": {"minY": 132400.0, "minX": 0.0, "maxY": 136487.0, "series": [{"data": [[0.0, 132400.0], [0.1, 132400.0], [0.2, 132400.0], [0.3, 132400.0], [0.4, 132400.0], [0.5, 132400.0], [0.6, 132400.0], [0.7, 132400.0], [0.8, 132400.0], [0.9, 132400.0], [1.0, 132410.0], [1.1, 132410.0], [1.2, 132410.0], [1.3, 132410.0], [1.4, 132410.0], [1.5, 132410.0], [1.6, 132410.0], [1.7, 132410.0], [1.8, 132410.0], [1.9, 132410.0], [2.0, 132417.0], [2.1, 132417.0], [2.2, 132417.0], [2.3, 132417.0], [2.4, 132417.0], [2.5, 132417.0], [2.6, 132417.0], [2.7, 132417.0], [2.8, 132417.0], [2.9, 132417.0], [3.0, 132428.0], [3.1, 132428.0], [3.2, 132428.0], [3.3, 132428.0], [3.4, 132428.0], [3.5, 132428.0], [3.6, 132428.0], [3.7, 132428.0], [3.8, 132428.0], [3.9, 132428.0], [4.0, 132437.0], [4.1, 132437.0], [4.2, 132437.0], [4.3, 132437.0], [4.4, 132437.0], [4.5, 132437.0], [4.6, 132437.0], [4.7, 132437.0], [4.8, 132437.0], [4.9, 132437.0], [5.0, 132447.0], [5.1, 132447.0], [5.2, 132447.0], [5.3, 132447.0], [5.4, 132447.0], [5.5, 132447.0], [5.6, 132447.0], [5.7, 132447.0], [5.8, 132447.0], [5.9, 132447.0], [6.0, 132463.0], [6.1, 132463.0], [6.2, 132463.0], [6.3, 132463.0], [6.4, 132463.0], [6.5, 132463.0], [6.6, 132463.0], [6.7, 132463.0], [6.8, 132463.0], [6.9, 132463.0], [7.0, 132467.0], [7.1, 132467.0], [7.2, 132467.0], [7.3, 132467.0], [7.4, 132467.0], [7.5, 132467.0], [7.6, 132467.0], [7.7, 132467.0], [7.8, 132467.0], [7.9, 132467.0], [8.0, 132477.0], [8.1, 132477.0], [8.2, 132477.0], [8.3, 132477.0], [8.4, 132477.0], [8.5, 132477.0], [8.6, 132477.0], [8.7, 132477.0], [8.8, 132477.0], [8.9, 132477.0], [9.0, 132487.0], [9.1, 132487.0], [9.2, 132487.0], [9.3, 132487.0], [9.4, 132487.0], [9.5, 132487.0], [9.6, 132487.0], [9.7, 132487.0], [9.8, 132487.0], [9.9, 132487.0], [10.0, 132500.0], [10.1, 132500.0], [10.2, 132500.0], [10.3, 132500.0], [10.4, 132500.0], [10.5, 132500.0], [10.6, 132500.0], [10.7, 132500.0], [10.8, 132500.0], [10.9, 132500.0], [11.0, 132507.0], [11.1, 132507.0], [11.2, 132507.0], [11.3, 132507.0], [11.4, 132507.0], [11.5, 132507.0], [11.6, 132507.0], [11.7, 132507.0], [11.8, 132507.0], [11.9, 132507.0], [12.0, 132519.0], [12.1, 132519.0], [12.2, 132519.0], [12.3, 132519.0], [12.4, 132519.0], [12.5, 132519.0], [12.6, 132519.0], [12.7, 132519.0], [12.8, 132519.0], [12.9, 132519.0], [13.0, 132528.0], [13.1, 132528.0], [13.2, 132528.0], [13.3, 132528.0], [13.4, 132528.0], [13.5, 132528.0], [13.6, 132528.0], [13.7, 132528.0], [13.8, 132528.0], [13.9, 132528.0], [14.0, 132538.0], [14.1, 132538.0], [14.2, 132538.0], [14.3, 132538.0], [14.4, 132538.0], [14.5, 132538.0], [14.6, 132538.0], [14.7, 132538.0], [14.8, 132538.0], [14.9, 132538.0], [15.0, 132548.0], [15.1, 132548.0], [15.2, 132548.0], [15.3, 132548.0], [15.4, 132548.0], [15.5, 132548.0], [15.6, 132548.0], [15.7, 132548.0], [15.8, 132548.0], [15.9, 132548.0], [16.0, 132561.0], [16.1, 132561.0], [16.2, 132561.0], [16.3, 132561.0], [16.4, 132561.0], [16.5, 132561.0], [16.6, 132561.0], [16.7, 132561.0], [16.8, 132561.0], [16.9, 132561.0], [17.0, 132568.0], [17.1, 132568.0], [17.2, 132568.0], [17.3, 132568.0], [17.4, 132568.0], [17.5, 132568.0], [17.6, 132568.0], [17.7, 132568.0], [17.8, 132568.0], [17.9, 132568.0], [18.0, 132587.0], [18.1, 132587.0], [18.2, 132587.0], [18.3, 132587.0], [18.4, 132587.0], [18.5, 132587.0], [18.6, 132587.0], [18.7, 132587.0], [18.8, 132587.0], [18.9, 132587.0], [19.0, 132587.0], [19.1, 132587.0], [19.2, 132587.0], [19.3, 132587.0], [19.4, 132587.0], [19.5, 132587.0], [19.6, 132587.0], [19.7, 132587.0], [19.8, 132587.0], [19.9, 132587.0], [20.0, 132597.0], [20.1, 132597.0], [20.2, 132597.0], [20.3, 132597.0], [20.4, 132597.0], [20.5, 132597.0], [20.6, 132597.0], [20.7, 132597.0], [20.8, 132597.0], [20.9, 132597.0], [21.0, 132608.0], [21.1, 132608.0], [21.2, 132608.0], [21.3, 132608.0], [21.4, 132608.0], [21.5, 132608.0], [21.6, 132608.0], [21.7, 132608.0], [21.8, 132608.0], [21.9, 132608.0], [22.0, 132618.0], [22.1, 132618.0], [22.2, 132618.0], [22.3, 132618.0], [22.4, 132618.0], [22.5, 132618.0], [22.6, 132618.0], [22.7, 132618.0], [22.8, 132618.0], [22.9, 132618.0], [23.0, 132628.0], [23.1, 132628.0], [23.2, 132628.0], [23.3, 132628.0], [23.4, 132628.0], [23.5, 132628.0], [23.6, 132628.0], [23.7, 132628.0], [23.8, 132628.0], [23.9, 132628.0], [24.0, 132638.0], [24.1, 132638.0], [24.2, 132638.0], [24.3, 132638.0], [24.4, 132638.0], [24.5, 132638.0], [24.6, 132638.0], [24.7, 132638.0], [24.8, 132638.0], [24.9, 132638.0], [25.0, 132650.0], [25.1, 132650.0], [25.2, 132650.0], [25.3, 132650.0], [25.4, 132650.0], [25.5, 132650.0], [25.6, 132650.0], [25.7, 132650.0], [25.8, 132650.0], [25.9, 132650.0], [26.0, 132657.0], [26.1, 132657.0], [26.2, 132657.0], [26.3, 132657.0], [26.4, 132657.0], [26.5, 132657.0], [26.6, 132657.0], [26.7, 132657.0], [26.8, 132657.0], [26.9, 132657.0], [27.0, 132668.0], [27.1, 132668.0], [27.2, 132668.0], [27.3, 132668.0], [27.4, 132668.0], [27.5, 132668.0], [27.6, 132668.0], [27.7, 132668.0], [27.8, 132668.0], [27.9, 132668.0], [28.0, 132678.0], [28.1, 132678.0], [28.2, 132678.0], [28.3, 132678.0], [28.4, 132678.0], [28.5, 132678.0], [28.6, 132678.0], [28.7, 132678.0], [28.8, 132678.0], [28.9, 132678.0], [29.0, 132688.0], [29.1, 132688.0], [29.2, 132688.0], [29.3, 132688.0], [29.4, 132688.0], [29.5, 132688.0], [29.6, 132688.0], [29.7, 132688.0], [29.8, 132688.0], [29.9, 132688.0], [30.0, 132698.0], [30.1, 132698.0], [30.2, 132698.0], [30.3, 132698.0], [30.4, 132698.0], [30.5, 132698.0], [30.6, 132698.0], [30.7, 132698.0], [30.8, 132698.0], [30.9, 132698.0], [31.0, 132707.0], [31.1, 132707.0], [31.2, 132707.0], [31.3, 132707.0], [31.4, 132707.0], [31.5, 132707.0], [31.6, 132707.0], [31.7, 132707.0], [31.8, 132707.0], [31.9, 132707.0], [32.0, 132718.0], [32.1, 132718.0], [32.2, 132718.0], [32.3, 132718.0], [32.4, 132718.0], [32.5, 132718.0], [32.6, 132718.0], [32.7, 132718.0], [32.8, 132718.0], [32.9, 132718.0], [33.0, 132728.0], [33.1, 132728.0], [33.2, 132728.0], [33.3, 132728.0], [33.4, 132728.0], [33.5, 132728.0], [33.6, 132728.0], [33.7, 132728.0], [33.8, 132728.0], [33.9, 132728.0], [34.0, 132737.0], [34.1, 132737.0], [34.2, 132737.0], [34.3, 132737.0], [34.4, 132737.0], [34.5, 132737.0], [34.6, 132737.0], [34.7, 132737.0], [34.8, 132737.0], [34.9, 132737.0], [35.0, 132756.0], [35.1, 132756.0], [35.2, 132756.0], [35.3, 132756.0], [35.4, 132756.0], [35.5, 132756.0], [35.6, 132756.0], [35.7, 132756.0], [35.8, 132756.0], [35.9, 132756.0], [36.0, 132758.0], [36.1, 132758.0], [36.2, 132758.0], [36.3, 132758.0], [36.4, 132758.0], [36.5, 132758.0], [36.6, 132758.0], [36.7, 132758.0], [36.8, 132758.0], [36.9, 132758.0], [37.0, 132771.0], [37.1, 132771.0], [37.2, 132771.0], [37.3, 132771.0], [37.4, 132771.0], [37.5, 132771.0], [37.6, 132771.0], [37.7, 132771.0], [37.8, 132771.0], [37.9, 132771.0], [38.0, 132782.0], [38.1, 132782.0], [38.2, 132782.0], [38.3, 132782.0], [38.4, 132782.0], [38.5, 132782.0], [38.6, 132782.0], [38.7, 132782.0], [38.8, 132782.0], [38.9, 132782.0], [39.0, 132791.0], [39.1, 132791.0], [39.2, 132791.0], [39.3, 132791.0], [39.4, 132791.0], [39.5, 132791.0], [39.6, 132791.0], [39.7, 132791.0], [39.8, 132791.0], [39.9, 132791.0], [40.0, 132798.0], [40.1, 132798.0], [40.2, 132798.0], [40.3, 132798.0], [40.4, 132798.0], [40.5, 132798.0], [40.6, 132798.0], [40.7, 132798.0], [40.8, 132798.0], [40.9, 132798.0], [41.0, 132808.0], [41.1, 132808.0], [41.2, 132808.0], [41.3, 132808.0], [41.4, 132808.0], [41.5, 132808.0], [41.6, 132808.0], [41.7, 132808.0], [41.8, 132808.0], [41.9, 132808.0], [42.0, 132818.0], [42.1, 132818.0], [42.2, 132818.0], [42.3, 132818.0], [42.4, 132818.0], [42.5, 132818.0], [42.6, 132818.0], [42.7, 132818.0], [42.8, 132818.0], [42.9, 132818.0], [43.0, 132838.0], [43.1, 132838.0], [43.2, 132838.0], [43.3, 132838.0], [43.4, 132838.0], [43.5, 132838.0], [43.6, 132838.0], [43.7, 132838.0], [43.8, 132838.0], [43.9, 132838.0], [44.0, 132838.0], [44.1, 132838.0], [44.2, 132838.0], [44.3, 132838.0], [44.4, 132838.0], [44.5, 132838.0], [44.6, 132838.0], [44.7, 132838.0], [44.8, 132838.0], [44.9, 132838.0], [45.0, 132854.0], [45.1, 132854.0], [45.2, 132854.0], [45.3, 132854.0], [45.4, 132854.0], [45.5, 132854.0], [45.6, 132854.0], [45.7, 132854.0], [45.8, 132854.0], [45.9, 132854.0], [46.0, 132858.0], [46.1, 132858.0], [46.2, 132858.0], [46.3, 132858.0], [46.4, 132858.0], [46.5, 132858.0], [46.6, 132858.0], [46.7, 132858.0], [46.8, 132858.0], [46.9, 132858.0], [47.0, 132870.0], [47.1, 132870.0], [47.2, 132870.0], [47.3, 132870.0], [47.4, 132870.0], [47.5, 132870.0], [47.6, 132870.0], [47.7, 132870.0], [47.8, 132870.0], [47.9, 132870.0], [48.0, 132880.0], [48.1, 132880.0], [48.2, 132880.0], [48.3, 132880.0], [48.4, 132880.0], [48.5, 132880.0], [48.6, 132880.0], [48.7, 132880.0], [48.8, 132880.0], [48.9, 132880.0], [49.0, 132892.0], [49.1, 132892.0], [49.2, 132892.0], [49.3, 132892.0], [49.4, 132892.0], [49.5, 132892.0], [49.6, 132892.0], [49.7, 132892.0], [49.8, 132892.0], [49.9, 132892.0], [50.0, 132899.0], [50.1, 132899.0], [50.2, 132899.0], [50.3, 132899.0], [50.4, 132899.0], [50.5, 132899.0], [50.6, 132899.0], [50.7, 132899.0], [50.8, 132899.0], [50.9, 132899.0], [51.0, 132911.0], [51.1, 132911.0], [51.2, 132911.0], [51.3, 132911.0], [51.4, 132911.0], [51.5, 132911.0], [51.6, 132911.0], [51.7, 132911.0], [51.8, 132911.0], [51.9, 132911.0], [52.0, 132918.0], [52.1, 132918.0], [52.2, 132918.0], [52.3, 132918.0], [52.4, 132918.0], [52.5, 132918.0], [52.6, 132918.0], [52.7, 132918.0], [52.8, 132918.0], [52.9, 132918.0], [53.0, 132927.0], [53.1, 132927.0], [53.2, 132927.0], [53.3, 132927.0], [53.4, 132927.0], [53.5, 132927.0], [53.6, 132927.0], [53.7, 132927.0], [53.8, 132927.0], [53.9, 132927.0], [54.0, 132938.0], [54.1, 132938.0], [54.2, 132938.0], [54.3, 132938.0], [54.4, 132938.0], [54.5, 132938.0], [54.6, 132938.0], [54.7, 132938.0], [54.8, 132938.0], [54.9, 132938.0], [55.0, 132950.0], [55.1, 132950.0], [55.2, 132950.0], [55.3, 132950.0], [55.4, 132950.0], [55.5, 132950.0], [55.6, 132950.0], [55.7, 132950.0], [55.8, 132950.0], [55.9, 132950.0], [56.0, 132957.0], [56.1, 132957.0], [56.2, 132957.0], [56.3, 132957.0], [56.4, 132957.0], [56.5, 132957.0], [56.6, 132957.0], [56.7, 132957.0], [56.8, 132957.0], [56.9, 132957.0], [57.0, 132967.0], [57.1, 132967.0], [57.2, 132967.0], [57.3, 132967.0], [57.4, 132967.0], [57.5, 132967.0], [57.6, 132967.0], [57.7, 132967.0], [57.8, 132967.0], [57.9, 132967.0], [58.0, 132978.0], [58.1, 132978.0], [58.2, 132978.0], [58.3, 132978.0], [58.4, 132978.0], [58.5, 132978.0], [58.6, 132978.0], [58.7, 132978.0], [58.8, 132978.0], [58.9, 132978.0], [59.0, 132995.0], [59.1, 132995.0], [59.2, 132995.0], [59.3, 132995.0], [59.4, 132995.0], [59.5, 132995.0], [59.6, 132995.0], [59.7, 132995.0], [59.8, 132995.0], [59.9, 132995.0], [60.0, 133006.0], [60.1, 133006.0], [60.2, 133006.0], [60.3, 133006.0], [60.4, 133006.0], [60.5, 133006.0], [60.6, 133006.0], [60.7, 133006.0], [60.8, 133006.0], [60.9, 133006.0], [61.0, 133016.0], [61.1, 133016.0], [61.2, 133016.0], [61.3, 133016.0], [61.4, 133016.0], [61.5, 133016.0], [61.6, 133016.0], [61.7, 133016.0], [61.8, 133016.0], [61.9, 133016.0], [62.0, 133020.0], [62.1, 133020.0], [62.2, 133020.0], [62.3, 133020.0], [62.4, 133020.0], [62.5, 133020.0], [62.6, 133020.0], [62.7, 133020.0], [62.8, 133020.0], [62.9, 133020.0], [63.0, 133034.0], [63.1, 133034.0], [63.2, 133034.0], [63.3, 133034.0], [63.4, 133034.0], [63.5, 133034.0], [63.6, 133034.0], [63.7, 133034.0], [63.8, 133034.0], [63.9, 133034.0], [64.0, 133047.0], [64.1, 133047.0], [64.2, 133047.0], [64.3, 133047.0], [64.4, 133047.0], [64.5, 133047.0], [64.6, 133047.0], [64.7, 133047.0], [64.8, 133047.0], [64.9, 133047.0], [65.0, 133051.0], [65.1, 133051.0], [65.2, 133051.0], [65.3, 133051.0], [65.4, 133051.0], [65.5, 133051.0], [65.6, 133051.0], [65.7, 133051.0], [65.8, 133051.0], [65.9, 133051.0], [66.0, 133062.0], [66.1, 133062.0], [66.2, 133062.0], [66.3, 133062.0], [66.4, 133062.0], [66.5, 133062.0], [66.6, 133062.0], [66.7, 133062.0], [66.8, 133062.0], [66.9, 133062.0], [67.0, 133069.0], [67.1, 133069.0], [67.2, 133069.0], [67.3, 133069.0], [67.4, 133069.0], [67.5, 133069.0], [67.6, 133069.0], [67.7, 133069.0], [67.8, 133069.0], [67.9, 133069.0], [68.0, 133077.0], [68.1, 133077.0], [68.2, 133077.0], [68.3, 133077.0], [68.4, 133077.0], [68.5, 133077.0], [68.6, 133077.0], [68.7, 133077.0], [68.8, 133077.0], [68.9, 133077.0], [69.0, 133098.0], [69.1, 133098.0], [69.2, 133098.0], [69.3, 133098.0], [69.4, 133098.0], [69.5, 133098.0], [69.6, 133098.0], [69.7, 133098.0], [69.8, 133098.0], [69.9, 133098.0], [70.0, 133106.0], [70.1, 133106.0], [70.2, 133106.0], [70.3, 133106.0], [70.4, 133106.0], [70.5, 133106.0], [70.6, 133106.0], [70.7, 133106.0], [70.8, 133106.0], [70.9, 133106.0], [71.0, 133106.0], [71.1, 133106.0], [71.2, 133106.0], [71.3, 133106.0], [71.4, 133106.0], [71.5, 133106.0], [71.6, 133106.0], [71.7, 133106.0], [71.8, 133106.0], [71.9, 133106.0], [72.0, 133106.0], [72.1, 133106.0], [72.2, 133106.0], [72.3, 133106.0], [72.4, 133106.0], [72.5, 133106.0], [72.6, 133106.0], [72.7, 133106.0], [72.8, 133106.0], [72.9, 133106.0], [73.0, 133106.0], [73.1, 133106.0], [73.2, 133106.0], [73.3, 133106.0], [73.4, 133106.0], [73.5, 133106.0], [73.6, 133106.0], [73.7, 133106.0], [73.8, 133106.0], [73.9, 133106.0], [74.0, 133109.0], [74.1, 133109.0], [74.2, 133109.0], [74.3, 133109.0], [74.4, 133109.0], [74.5, 133109.0], [74.6, 133109.0], [74.7, 133109.0], [74.8, 133109.0], [74.9, 133109.0], [75.0, 133109.0], [75.1, 133109.0], [75.2, 133109.0], [75.3, 133109.0], [75.4, 133109.0], [75.5, 133109.0], [75.6, 133109.0], [75.7, 133109.0], [75.8, 133109.0], [75.9, 133109.0], [76.0, 133110.0], [76.1, 133110.0], [76.2, 133110.0], [76.3, 133110.0], [76.4, 133110.0], [76.5, 133110.0], [76.6, 133110.0], [76.7, 133110.0], [76.8, 133110.0], [76.9, 133110.0], [77.0, 133110.0], [77.1, 133110.0], [77.2, 133110.0], [77.3, 133110.0], [77.4, 133110.0], [77.5, 133110.0], [77.6, 133110.0], [77.7, 133110.0], [77.8, 133110.0], [77.9, 133110.0], [78.0, 133120.0], [78.1, 133120.0], [78.2, 133120.0], [78.3, 133120.0], [78.4, 133120.0], [78.5, 133120.0], [78.6, 133120.0], [78.7, 133120.0], [78.8, 133120.0], [78.9, 133120.0], [79.0, 133121.0], [79.1, 133121.0], [79.2, 133121.0], [79.3, 133121.0], [79.4, 133121.0], [79.5, 133121.0], [79.6, 133121.0], [79.7, 133121.0], [79.8, 133121.0], [79.9, 133121.0], [80.0, 133122.0], [80.1, 133122.0], [80.2, 133122.0], [80.3, 133122.0], [80.4, 133122.0], [80.5, 133122.0], [80.6, 133122.0], [80.7, 133122.0], [80.8, 133122.0], [80.9, 133122.0], [81.0, 133122.0], [81.1, 133122.0], [81.2, 133122.0], [81.3, 133122.0], [81.4, 133122.0], [81.5, 133122.0], [81.6, 133122.0], [81.7, 133122.0], [81.8, 133122.0], [81.9, 133122.0], [82.0, 133123.0], [82.1, 133123.0], [82.2, 133123.0], [82.3, 133123.0], [82.4, 133123.0], [82.5, 133123.0], [82.6, 133123.0], [82.7, 133123.0], [82.8, 133123.0], [82.9, 133123.0], [83.0, 133123.0], [83.1, 133123.0], [83.2, 133123.0], [83.3, 133123.0], [83.4, 133123.0], [83.5, 133123.0], [83.6, 133123.0], [83.7, 133123.0], [83.8, 133123.0], [83.9, 133123.0], [84.0, 136332.0], [84.1, 136332.0], [84.2, 136332.0], [84.3, 136332.0], [84.4, 136332.0], [84.5, 136332.0], [84.6, 136332.0], [84.7, 136332.0], [84.8, 136332.0], [84.9, 136332.0], [85.0, 136342.0], [85.1, 136342.0], [85.2, 136342.0], [85.3, 136342.0], [85.4, 136342.0], [85.5, 136342.0], [85.6, 136342.0], [85.7, 136342.0], [85.8, 136342.0], [85.9, 136342.0], [86.0, 136352.0], [86.1, 136352.0], [86.2, 136352.0], [86.3, 136352.0], [86.4, 136352.0], [86.5, 136352.0], [86.6, 136352.0], [86.7, 136352.0], [86.8, 136352.0], [86.9, 136352.0], [87.0, 136365.0], [87.1, 136365.0], [87.2, 136365.0], [87.3, 136365.0], [87.4, 136365.0], [87.5, 136365.0], [87.6, 136365.0], [87.7, 136365.0], [87.8, 136365.0], [87.9, 136365.0], [88.0, 136372.0], [88.1, 136372.0], [88.2, 136372.0], [88.3, 136372.0], [88.4, 136372.0], [88.5, 136372.0], [88.6, 136372.0], [88.7, 136372.0], [88.8, 136372.0], [88.9, 136372.0], [89.0, 136386.0], [89.1, 136386.0], [89.2, 136386.0], [89.3, 136386.0], [89.4, 136386.0], [89.5, 136386.0], [89.6, 136386.0], [89.7, 136386.0], [89.8, 136386.0], [89.9, 136386.0], [90.0, 136395.0], [90.1, 136395.0], [90.2, 136395.0], [90.3, 136395.0], [90.4, 136395.0], [90.5, 136395.0], [90.6, 136395.0], [90.7, 136395.0], [90.8, 136395.0], [90.9, 136395.0], [91.0, 136404.0], [91.1, 136404.0], [91.2, 136404.0], [91.3, 136404.0], [91.4, 136404.0], [91.5, 136404.0], [91.6, 136404.0], [91.7, 136404.0], [91.8, 136404.0], [91.9, 136404.0], [92.0, 136414.0], [92.1, 136414.0], [92.2, 136414.0], [92.3, 136414.0], [92.4, 136414.0], [92.5, 136414.0], [92.6, 136414.0], [92.7, 136414.0], [92.8, 136414.0], [92.9, 136414.0], [93.0, 136422.0], [93.1, 136422.0], [93.2, 136422.0], [93.3, 136422.0], [93.4, 136422.0], [93.5, 136422.0], [93.6, 136422.0], [93.7, 136422.0], [93.8, 136422.0], [93.9, 136422.0], [94.0, 136437.0], [94.1, 136437.0], [94.2, 136437.0], [94.3, 136437.0], [94.4, 136437.0], [94.5, 136437.0], [94.6, 136437.0], [94.7, 136437.0], [94.8, 136437.0], [94.9, 136437.0], [95.0, 136444.0], [95.1, 136444.0], [95.2, 136444.0], [95.3, 136444.0], [95.4, 136444.0], [95.5, 136444.0], [95.6, 136444.0], [95.7, 136444.0], [95.8, 136444.0], [95.9, 136444.0], [96.0, 136452.0], [96.1, 136452.0], [96.2, 136452.0], [96.3, 136452.0], [96.4, 136452.0], [96.5, 136452.0], [96.6, 136452.0], [96.7, 136452.0], [96.8, 136452.0], [96.9, 136452.0], [97.0, 136462.0], [97.1, 136462.0], [97.2, 136462.0], [97.3, 136462.0], [97.4, 136462.0], [97.5, 136462.0], [97.6, 136462.0], [97.7, 136462.0], [97.8, 136462.0], [97.9, 136462.0], [98.0, 136473.0], [98.1, 136473.0], [98.2, 136473.0], [98.3, 136473.0], [98.4, 136473.0], [98.5, 136473.0], [98.6, 136473.0], [98.7, 136473.0], [98.8, 136473.0], [98.9, 136473.0], [99.0, 136487.0], [99.1, 136487.0], [99.2, 136487.0], [99.3, 136487.0], [99.4, 136487.0], [99.5, 136487.0], [99.6, 136487.0], [99.7, 136487.0], [99.8, 136487.0], [99.9, 136487.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 132400.0, "maxY": 14.0, "series": [{"data": [[132400.0, 10.0], [132800.0, 10.0], [133000.0, 10.0], [132600.0, 10.0], [136400.0, 9.0], [132900.0, 9.0], [132700.0, 10.0], [132500.0, 11.0], [133100.0, 14.0], [136300.0, 7.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 79.0, "minX": 1.7533278E12, "maxY": 79.0, "series": [{"data": [[1.7533278E12, 79.0]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7533278E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132437.0, "minX": 2.0, "maxY": 136448.66666666666, "series": [{"data": [[2.0, 136437.0], [58.0, 133106.0], [61.0, 132568.0], [60.0, 132808.0], [63.0, 132668.0], [4.0, 136448.66666666666], [70.0, 132587.0], [69.0, 132947.5], [68.0, 132519.0], [73.0, 132657.0], [78.0, 132737.0], [81.0, 132597.0], [5.0, 136395.0], [86.0, 132718.0], [85.0, 132437.0], [91.0, 132817.62499999997], [90.0, 132840.82352941178], [88.0, 132678.0], [95.0, 132517.5], [94.0, 132854.0], [92.0, 133038.0], [98.0, 133098.0], [97.0, 132861.5], [100.0, 132814.13513513518], [7.0, 136365.0], [8.0, 136414.0], [12.0, 136332.0], [15.0, 136404.0], [16.0, 136406.57142857145]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[79.0, 133382.57999999993]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7533278E12, "maxY": 4708.333333333333, "series": [{"data": [[1.7533278E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7533278E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7533278E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133382.57999999993, "minX": 1.7533278E12, "maxY": 133382.57999999993, "series": [{"data": [[1.7533278E12, 133382.57999999993]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7533278E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7533278E12, "maxY": 4.9E-324, "series": [{"data": [[1.7533278E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7533278E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 133382.46000000002, "minX": 1.7533278E12, "maxY": 133382.46000000002, "series": [{"data": [[1.7533278E12, 133382.46000000002]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7533278E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 132813.0, "minX": 16.0, "maxY": 136409.0, "series": [{"data": [[16.0, 136409.0], [84.0, 132813.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 16.0, "maxY": 4.9E-324, "series": [{"data": [[16.0, 0.0], [84.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 84.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75332762E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75332762E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75332762E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7533278E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7533278E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7533278E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7533278E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7533278E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7533278E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7533278E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7533278E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7533278E12, "title": "Total Transactions Per Second"}},
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

