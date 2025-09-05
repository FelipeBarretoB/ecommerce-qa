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
        data: {"result": {"minY": 132412.0, "minX": 0.0, "maxY": 136483.0, "series": [{"data": [[0.0, 132412.0], [0.1, 132412.0], [0.2, 132412.0], [0.3, 132412.0], [0.4, 132412.0], [0.5, 132412.0], [0.6, 132412.0], [0.7, 132412.0], [0.8, 132412.0], [0.9, 132412.0], [1.0, 132419.0], [1.1, 132419.0], [1.2, 132419.0], [1.3, 132419.0], [1.4, 132419.0], [1.5, 132419.0], [1.6, 132419.0], [1.7, 132419.0], [1.8, 132419.0], [1.9, 132419.0], [2.0, 132421.0], [2.1, 132421.0], [2.2, 132421.0], [2.3, 132421.0], [2.4, 132421.0], [2.5, 132421.0], [2.6, 132421.0], [2.7, 132421.0], [2.8, 132421.0], [2.9, 132421.0], [3.0, 132428.0], [3.1, 132428.0], [3.2, 132428.0], [3.3, 132428.0], [3.4, 132428.0], [3.5, 132428.0], [3.6, 132428.0], [3.7, 132428.0], [3.8, 132428.0], [3.9, 132428.0], [4.0, 132451.0], [4.1, 132451.0], [4.2, 132451.0], [4.3, 132451.0], [4.4, 132451.0], [4.5, 132451.0], [4.6, 132451.0], [4.7, 132451.0], [4.8, 132451.0], [4.9, 132451.0], [5.0, 132453.0], [5.1, 132453.0], [5.2, 132453.0], [5.3, 132453.0], [5.4, 132453.0], [5.5, 132453.0], [5.6, 132453.0], [5.7, 132453.0], [5.8, 132453.0], [5.9, 132453.0], [6.0, 132458.0], [6.1, 132458.0], [6.2, 132458.0], [6.3, 132458.0], [6.4, 132458.0], [6.5, 132458.0], [6.6, 132458.0], [6.7, 132458.0], [6.8, 132458.0], [6.9, 132458.0], [7.0, 132483.0], [7.1, 132483.0], [7.2, 132483.0], [7.3, 132483.0], [7.4, 132483.0], [7.5, 132483.0], [7.6, 132483.0], [7.7, 132483.0], [7.8, 132483.0], [7.9, 132483.0], [8.0, 132493.0], [8.1, 132493.0], [8.2, 132493.0], [8.3, 132493.0], [8.4, 132493.0], [8.5, 132493.0], [8.6, 132493.0], [8.7, 132493.0], [8.8, 132493.0], [8.9, 132493.0], [9.0, 132504.0], [9.1, 132504.0], [9.2, 132504.0], [9.3, 132504.0], [9.4, 132504.0], [9.5, 132504.0], [9.6, 132504.0], [9.7, 132504.0], [9.8, 132504.0], [9.9, 132504.0], [10.0, 132514.0], [10.1, 132514.0], [10.2, 132514.0], [10.3, 132514.0], [10.4, 132514.0], [10.5, 132514.0], [10.6, 132514.0], [10.7, 132514.0], [10.8, 132514.0], [10.9, 132514.0], [11.0, 132520.0], [11.1, 132520.0], [11.2, 132520.0], [11.3, 132520.0], [11.4, 132520.0], [11.5, 132520.0], [11.6, 132520.0], [11.7, 132520.0], [11.8, 132520.0], [11.9, 132520.0], [12.0, 132522.0], [12.1, 132522.0], [12.2, 132522.0], [12.3, 132522.0], [12.4, 132522.0], [12.5, 132522.0], [12.6, 132522.0], [12.7, 132522.0], [12.8, 132522.0], [12.9, 132522.0], [13.0, 132537.0], [13.1, 132537.0], [13.2, 132537.0], [13.3, 132537.0], [13.4, 132537.0], [13.5, 132537.0], [13.6, 132537.0], [13.7, 132537.0], [13.8, 132537.0], [13.9, 132537.0], [14.0, 132538.0], [14.1, 132538.0], [14.2, 132538.0], [14.3, 132538.0], [14.4, 132538.0], [14.5, 132538.0], [14.6, 132538.0], [14.7, 132538.0], [14.8, 132538.0], [14.9, 132538.0], [15.0, 132566.0], [15.1, 132566.0], [15.2, 132566.0], [15.3, 132566.0], [15.4, 132566.0], [15.5, 132566.0], [15.6, 132566.0], [15.7, 132566.0], [15.8, 132566.0], [15.9, 132566.0], [16.0, 132575.0], [16.1, 132575.0], [16.2, 132575.0], [16.3, 132575.0], [16.4, 132575.0], [16.5, 132575.0], [16.6, 132575.0], [16.7, 132575.0], [16.8, 132575.0], [16.9, 132575.0], [17.0, 132585.0], [17.1, 132585.0], [17.2, 132585.0], [17.3, 132585.0], [17.4, 132585.0], [17.5, 132585.0], [17.6, 132585.0], [17.7, 132585.0], [17.8, 132585.0], [17.9, 132585.0], [18.0, 132593.0], [18.1, 132593.0], [18.2, 132593.0], [18.3, 132593.0], [18.4, 132593.0], [18.5, 132593.0], [18.6, 132593.0], [18.7, 132593.0], [18.8, 132593.0], [18.9, 132593.0], [19.0, 132594.0], [19.1, 132594.0], [19.2, 132594.0], [19.3, 132594.0], [19.4, 132594.0], [19.5, 132594.0], [19.6, 132594.0], [19.7, 132594.0], [19.8, 132594.0], [19.9, 132594.0], [20.0, 132606.0], [20.1, 132606.0], [20.2, 132606.0], [20.3, 132606.0], [20.4, 132606.0], [20.5, 132606.0], [20.6, 132606.0], [20.7, 132606.0], [20.8, 132606.0], [20.9, 132606.0], [21.0, 132608.0], [21.1, 132608.0], [21.2, 132608.0], [21.3, 132608.0], [21.4, 132608.0], [21.5, 132608.0], [21.6, 132608.0], [21.7, 132608.0], [21.8, 132608.0], [21.9, 132608.0], [22.0, 132619.0], [22.1, 132619.0], [22.2, 132619.0], [22.3, 132619.0], [22.4, 132619.0], [22.5, 132619.0], [22.6, 132619.0], [22.7, 132619.0], [22.8, 132619.0], [22.9, 132619.0], [23.0, 132628.0], [23.1, 132628.0], [23.2, 132628.0], [23.3, 132628.0], [23.4, 132628.0], [23.5, 132628.0], [23.6, 132628.0], [23.7, 132628.0], [23.8, 132628.0], [23.9, 132628.0], [24.0, 132647.0], [24.1, 132647.0], [24.2, 132647.0], [24.3, 132647.0], [24.4, 132647.0], [24.5, 132647.0], [24.6, 132647.0], [24.7, 132647.0], [24.8, 132647.0], [24.9, 132647.0], [25.0, 132648.0], [25.1, 132648.0], [25.2, 132648.0], [25.3, 132648.0], [25.4, 132648.0], [25.5, 132648.0], [25.6, 132648.0], [25.7, 132648.0], [25.8, 132648.0], [25.9, 132648.0], [26.0, 132669.0], [26.1, 132669.0], [26.2, 132669.0], [26.3, 132669.0], [26.4, 132669.0], [26.5, 132669.0], [26.6, 132669.0], [26.7, 132669.0], [26.8, 132669.0], [26.9, 132669.0], [27.0, 132671.0], [27.1, 132671.0], [27.2, 132671.0], [27.3, 132671.0], [27.4, 132671.0], [27.5, 132671.0], [27.6, 132671.0], [27.7, 132671.0], [27.8, 132671.0], [27.9, 132671.0], [28.0, 132678.0], [28.1, 132678.0], [28.2, 132678.0], [28.3, 132678.0], [28.4, 132678.0], [28.5, 132678.0], [28.6, 132678.0], [28.7, 132678.0], [28.8, 132678.0], [28.9, 132678.0], [29.0, 132689.0], [29.1, 132689.0], [29.2, 132689.0], [29.3, 132689.0], [29.4, 132689.0], [29.5, 132689.0], [29.6, 132689.0], [29.7, 132689.0], [29.8, 132689.0], [29.9, 132689.0], [30.0, 132711.0], [30.1, 132711.0], [30.2, 132711.0], [30.3, 132711.0], [30.4, 132711.0], [30.5, 132711.0], [30.6, 132711.0], [30.7, 132711.0], [30.8, 132711.0], [30.9, 132711.0], [31.0, 132711.0], [31.1, 132711.0], [31.2, 132711.0], [31.3, 132711.0], [31.4, 132711.0], [31.5, 132711.0], [31.6, 132711.0], [31.7, 132711.0], [31.8, 132711.0], [31.9, 132711.0], [32.0, 132723.0], [32.1, 132723.0], [32.2, 132723.0], [32.3, 132723.0], [32.4, 132723.0], [32.5, 132723.0], [32.6, 132723.0], [32.7, 132723.0], [32.8, 132723.0], [32.9, 132723.0], [33.0, 132728.0], [33.1, 132728.0], [33.2, 132728.0], [33.3, 132728.0], [33.4, 132728.0], [33.5, 132728.0], [33.6, 132728.0], [33.7, 132728.0], [33.8, 132728.0], [33.9, 132728.0], [34.0, 132750.0], [34.1, 132750.0], [34.2, 132750.0], [34.3, 132750.0], [34.4, 132750.0], [34.5, 132750.0], [34.6, 132750.0], [34.7, 132750.0], [34.8, 132750.0], [34.9, 132750.0], [35.0, 132763.0], [35.1, 132763.0], [35.2, 132763.0], [35.3, 132763.0], [35.4, 132763.0], [35.5, 132763.0], [35.6, 132763.0], [35.7, 132763.0], [35.8, 132763.0], [35.9, 132763.0], [36.0, 132763.0], [36.1, 132763.0], [36.2, 132763.0], [36.3, 132763.0], [36.4, 132763.0], [36.5, 132763.0], [36.6, 132763.0], [36.7, 132763.0], [36.8, 132763.0], [36.9, 132763.0], [37.0, 132774.0], [37.1, 132774.0], [37.2, 132774.0], [37.3, 132774.0], [37.4, 132774.0], [37.5, 132774.0], [37.6, 132774.0], [37.7, 132774.0], [37.8, 132774.0], [37.9, 132774.0], [38.0, 132786.0], [38.1, 132786.0], [38.2, 132786.0], [38.3, 132786.0], [38.4, 132786.0], [38.5, 132786.0], [38.6, 132786.0], [38.7, 132786.0], [38.8, 132786.0], [38.9, 132786.0], [39.0, 132788.0], [39.1, 132788.0], [39.2, 132788.0], [39.3, 132788.0], [39.4, 132788.0], [39.5, 132788.0], [39.6, 132788.0], [39.7, 132788.0], [39.8, 132788.0], [39.9, 132788.0], [40.0, 132809.0], [40.1, 132809.0], [40.2, 132809.0], [40.3, 132809.0], [40.4, 132809.0], [40.5, 132809.0], [40.6, 132809.0], [40.7, 132809.0], [40.8, 132809.0], [40.9, 132809.0], [41.0, 132816.0], [41.1, 132816.0], [41.2, 132816.0], [41.3, 132816.0], [41.4, 132816.0], [41.5, 132816.0], [41.6, 132816.0], [41.7, 132816.0], [41.8, 132816.0], [41.9, 132816.0], [42.0, 132827.0], [42.1, 132827.0], [42.2, 132827.0], [42.3, 132827.0], [42.4, 132827.0], [42.5, 132827.0], [42.6, 132827.0], [42.7, 132827.0], [42.8, 132827.0], [42.9, 132827.0], [43.0, 132837.0], [43.1, 132837.0], [43.2, 132837.0], [43.3, 132837.0], [43.4, 132837.0], [43.5, 132837.0], [43.6, 132837.0], [43.7, 132837.0], [43.8, 132837.0], [43.9, 132837.0], [44.0, 132851.0], [44.1, 132851.0], [44.2, 132851.0], [44.3, 132851.0], [44.4, 132851.0], [44.5, 132851.0], [44.6, 132851.0], [44.7, 132851.0], [44.8, 132851.0], [44.9, 132851.0], [45.0, 132856.0], [45.1, 132856.0], [45.2, 132856.0], [45.3, 132856.0], [45.4, 132856.0], [45.5, 132856.0], [45.6, 132856.0], [45.7, 132856.0], [45.8, 132856.0], [45.9, 132856.0], [46.0, 132859.0], [46.1, 132859.0], [46.2, 132859.0], [46.3, 132859.0], [46.4, 132859.0], [46.5, 132859.0], [46.6, 132859.0], [46.7, 132859.0], [46.8, 132859.0], [46.9, 132859.0], [47.0, 132870.0], [47.1, 132870.0], [47.2, 132870.0], [47.3, 132870.0], [47.4, 132870.0], [47.5, 132870.0], [47.6, 132870.0], [47.7, 132870.0], [47.8, 132870.0], [47.9, 132870.0], [48.0, 132878.0], [48.1, 132878.0], [48.2, 132878.0], [48.3, 132878.0], [48.4, 132878.0], [48.5, 132878.0], [48.6, 132878.0], [48.7, 132878.0], [48.8, 132878.0], [48.9, 132878.0], [49.0, 132889.0], [49.1, 132889.0], [49.2, 132889.0], [49.3, 132889.0], [49.4, 132889.0], [49.5, 132889.0], [49.6, 132889.0], [49.7, 132889.0], [49.8, 132889.0], [49.9, 132889.0], [50.0, 132904.0], [50.1, 132904.0], [50.2, 132904.0], [50.3, 132904.0], [50.4, 132904.0], [50.5, 132904.0], [50.6, 132904.0], [50.7, 132904.0], [50.8, 132904.0], [50.9, 132904.0], [51.0, 132915.0], [51.1, 132915.0], [51.2, 132915.0], [51.3, 132915.0], [51.4, 132915.0], [51.5, 132915.0], [51.6, 132915.0], [51.7, 132915.0], [51.8, 132915.0], [51.9, 132915.0], [52.0, 132925.0], [52.1, 132925.0], [52.2, 132925.0], [52.3, 132925.0], [52.4, 132925.0], [52.5, 132925.0], [52.6, 132925.0], [52.7, 132925.0], [52.8, 132925.0], [52.9, 132925.0], [53.0, 132929.0], [53.1, 132929.0], [53.2, 132929.0], [53.3, 132929.0], [53.4, 132929.0], [53.5, 132929.0], [53.6, 132929.0], [53.7, 132929.0], [53.8, 132929.0], [53.9, 132929.0], [54.0, 132939.0], [54.1, 132939.0], [54.2, 132939.0], [54.3, 132939.0], [54.4, 132939.0], [54.5, 132939.0], [54.6, 132939.0], [54.7, 132939.0], [54.8, 132939.0], [54.9, 132939.0], [55.0, 132948.0], [55.1, 132948.0], [55.2, 132948.0], [55.3, 132948.0], [55.4, 132948.0], [55.5, 132948.0], [55.6, 132948.0], [55.7, 132948.0], [55.8, 132948.0], [55.9, 132948.0], [56.0, 132960.0], [56.1, 132960.0], [56.2, 132960.0], [56.3, 132960.0], [56.4, 132960.0], [56.5, 132960.0], [56.6, 132960.0], [56.7, 132960.0], [56.8, 132960.0], [56.9, 132960.0], [57.0, 132980.0], [57.1, 132980.0], [57.2, 132980.0], [57.3, 132980.0], [57.4, 132980.0], [57.5, 132980.0], [57.6, 132980.0], [57.7, 132980.0], [57.8, 132980.0], [57.9, 132980.0], [58.0, 132990.0], [58.1, 132990.0], [58.2, 132990.0], [58.3, 132990.0], [58.4, 132990.0], [58.5, 132990.0], [58.6, 132990.0], [58.7, 132990.0], [58.8, 132990.0], [58.9, 132990.0], [59.0, 133003.0], [59.1, 133003.0], [59.2, 133003.0], [59.3, 133003.0], [59.4, 133003.0], [59.5, 133003.0], [59.6, 133003.0], [59.7, 133003.0], [59.8, 133003.0], [59.9, 133003.0], [60.0, 133003.0], [60.1, 133003.0], [60.2, 133003.0], [60.3, 133003.0], [60.4, 133003.0], [60.5, 133003.0], [60.6, 133003.0], [60.7, 133003.0], [60.8, 133003.0], [60.9, 133003.0], [61.0, 133009.0], [61.1, 133009.0], [61.2, 133009.0], [61.3, 133009.0], [61.4, 133009.0], [61.5, 133009.0], [61.6, 133009.0], [61.7, 133009.0], [61.8, 133009.0], [61.9, 133009.0], [62.0, 133024.0], [62.1, 133024.0], [62.2, 133024.0], [62.3, 133024.0], [62.4, 133024.0], [62.5, 133024.0], [62.6, 133024.0], [62.7, 133024.0], [62.8, 133024.0], [62.9, 133024.0], [63.0, 133028.0], [63.1, 133028.0], [63.2, 133028.0], [63.3, 133028.0], [63.4, 133028.0], [63.5, 133028.0], [63.6, 133028.0], [63.7, 133028.0], [63.8, 133028.0], [63.9, 133028.0], [64.0, 133044.0], [64.1, 133044.0], [64.2, 133044.0], [64.3, 133044.0], [64.4, 133044.0], [64.5, 133044.0], [64.6, 133044.0], [64.7, 133044.0], [64.8, 133044.0], [64.9, 133044.0], [65.0, 133065.0], [65.1, 133065.0], [65.2, 133065.0], [65.3, 133065.0], [65.4, 133065.0], [65.5, 133065.0], [65.6, 133065.0], [65.7, 133065.0], [65.8, 133065.0], [65.9, 133065.0], [66.0, 133073.0], [66.1, 133073.0], [66.2, 133073.0], [66.3, 133073.0], [66.4, 133073.0], [66.5, 133073.0], [66.6, 133073.0], [66.7, 133073.0], [66.8, 133073.0], [66.9, 133073.0], [67.0, 133083.0], [67.1, 133083.0], [67.2, 133083.0], [67.3, 133083.0], [67.4, 133083.0], [67.5, 133083.0], [67.6, 133083.0], [67.7, 133083.0], [67.8, 133083.0], [67.9, 133083.0], [68.0, 133092.0], [68.1, 133092.0], [68.2, 133092.0], [68.3, 133092.0], [68.4, 133092.0], [68.5, 133092.0], [68.6, 133092.0], [68.7, 133092.0], [68.8, 133092.0], [68.9, 133092.0], [69.0, 133102.0], [69.1, 133102.0], [69.2, 133102.0], [69.3, 133102.0], [69.4, 133102.0], [69.5, 133102.0], [69.6, 133102.0], [69.7, 133102.0], [69.8, 133102.0], [69.9, 133102.0], [70.0, 133107.0], [70.1, 133107.0], [70.2, 133107.0], [70.3, 133107.0], [70.4, 133107.0], [70.5, 133107.0], [70.6, 133107.0], [70.7, 133107.0], [70.8, 133107.0], [70.9, 133107.0], [71.0, 133112.0], [71.1, 133112.0], [71.2, 133112.0], [71.3, 133112.0], [71.4, 133112.0], [71.5, 133112.0], [71.6, 133112.0], [71.7, 133112.0], [71.8, 133112.0], [71.9, 133112.0], [72.0, 133118.0], [72.1, 133118.0], [72.2, 133118.0], [72.3, 133118.0], [72.4, 133118.0], [72.5, 133118.0], [72.6, 133118.0], [72.7, 133118.0], [72.8, 133118.0], [72.9, 133118.0], [73.0, 133140.0], [73.1, 133140.0], [73.2, 133140.0], [73.3, 133140.0], [73.4, 133140.0], [73.5, 133140.0], [73.6, 133140.0], [73.7, 133140.0], [73.8, 133140.0], [73.9, 133140.0], [74.0, 133151.0], [74.1, 133151.0], [74.2, 133151.0], [74.3, 133151.0], [74.4, 133151.0], [74.5, 133151.0], [74.6, 133151.0], [74.7, 133151.0], [74.8, 133151.0], [74.9, 133151.0], [75.0, 133155.0], [75.1, 133155.0], [75.2, 133155.0], [75.3, 133155.0], [75.4, 133155.0], [75.5, 133155.0], [75.6, 133155.0], [75.7, 133155.0], [75.8, 133155.0], [75.9, 133155.0], [76.0, 133158.0], [76.1, 133158.0], [76.2, 133158.0], [76.3, 133158.0], [76.4, 133158.0], [76.5, 133158.0], [76.6, 133158.0], [76.7, 133158.0], [76.8, 133158.0], [76.9, 133158.0], [77.0, 133169.0], [77.1, 133169.0], [77.2, 133169.0], [77.3, 133169.0], [77.4, 133169.0], [77.5, 133169.0], [77.6, 133169.0], [77.7, 133169.0], [77.8, 133169.0], [77.9, 133169.0], [78.0, 133189.0], [78.1, 133189.0], [78.2, 133189.0], [78.3, 133189.0], [78.4, 133189.0], [78.5, 133189.0], [78.6, 133189.0], [78.7, 133189.0], [78.8, 133189.0], [78.9, 133189.0], [79.0, 133196.0], [79.1, 133196.0], [79.2, 133196.0], [79.3, 133196.0], [79.4, 133196.0], [79.5, 133196.0], [79.6, 133196.0], [79.7, 133196.0], [79.8, 133196.0], [79.9, 133196.0], [80.0, 133208.0], [80.1, 133208.0], [80.2, 133208.0], [80.3, 133208.0], [80.4, 133208.0], [80.5, 133208.0], [80.6, 133208.0], [80.7, 133208.0], [80.8, 133208.0], [80.9, 133208.0], [81.0, 133219.0], [81.1, 133219.0], [81.2, 133219.0], [81.3, 133219.0], [81.4, 133219.0], [81.5, 133219.0], [81.6, 133219.0], [81.7, 133219.0], [81.8, 133219.0], [81.9, 133219.0], [82.0, 133221.0], [82.1, 133221.0], [82.2, 133221.0], [82.3, 133221.0], [82.4, 133221.0], [82.5, 133221.0], [82.6, 133221.0], [82.7, 133221.0], [82.8, 133221.0], [82.9, 133221.0], [83.0, 133241.0], [83.1, 133241.0], [83.2, 133241.0], [83.3, 133241.0], [83.4, 133241.0], [83.5, 133241.0], [83.6, 133241.0], [83.7, 133241.0], [83.8, 133241.0], [83.9, 133241.0], [84.0, 133243.0], [84.1, 133243.0], [84.2, 133243.0], [84.3, 133243.0], [84.4, 133243.0], [84.5, 133243.0], [84.6, 133243.0], [84.7, 133243.0], [84.8, 133243.0], [84.9, 133243.0], [85.0, 133243.0], [85.1, 133243.0], [85.2, 133243.0], [85.3, 133243.0], [85.4, 133243.0], [85.5, 133243.0], [85.6, 133243.0], [85.7, 133243.0], [85.8, 133243.0], [85.9, 133243.0], [86.0, 133243.0], [86.1, 133243.0], [86.2, 133243.0], [86.3, 133243.0], [86.4, 133243.0], [86.5, 133243.0], [86.6, 133243.0], [86.7, 133243.0], [86.8, 133243.0], [86.9, 133243.0], [87.0, 133244.0], [87.1, 133244.0], [87.2, 133244.0], [87.3, 133244.0], [87.4, 133244.0], [87.5, 133244.0], [87.6, 133244.0], [87.7, 133244.0], [87.8, 133244.0], [87.9, 133244.0], [88.0, 133244.0], [88.1, 133244.0], [88.2, 133244.0], [88.3, 133244.0], [88.4, 133244.0], [88.5, 133244.0], [88.6, 133244.0], [88.7, 133244.0], [88.8, 133244.0], [88.9, 133244.0], [89.0, 133244.0], [89.1, 133244.0], [89.2, 133244.0], [89.3, 133244.0], [89.4, 133244.0], [89.5, 133244.0], [89.6, 133244.0], [89.7, 133244.0], [89.8, 133244.0], [89.9, 133244.0], [90.0, 133248.0], [90.1, 133248.0], [90.2, 133248.0], [90.3, 133248.0], [90.4, 133248.0], [90.5, 133248.0], [90.6, 133248.0], [90.7, 133248.0], [90.8, 133248.0], [90.9, 133248.0], [91.0, 133249.0], [91.1, 133249.0], [91.2, 133249.0], [91.3, 133249.0], [91.4, 133249.0], [91.5, 133249.0], [91.6, 133249.0], [91.7, 133249.0], [91.8, 133249.0], [91.9, 133249.0], [92.0, 133250.0], [92.1, 133250.0], [92.2, 133250.0], [92.3, 133250.0], [92.4, 133250.0], [92.5, 133250.0], [92.6, 133250.0], [92.7, 133250.0], [92.8, 133250.0], [92.9, 133250.0], [93.0, 133251.0], [93.1, 133251.0], [93.2, 133251.0], [93.3, 133251.0], [93.4, 133251.0], [93.5, 133251.0], [93.6, 133251.0], [93.7, 133251.0], [93.8, 133251.0], [93.9, 133251.0], [94.0, 133258.0], [94.1, 133258.0], [94.2, 133258.0], [94.3, 133258.0], [94.4, 133258.0], [94.5, 133258.0], [94.6, 133258.0], [94.7, 133258.0], [94.8, 133258.0], [94.9, 133258.0], [95.0, 133261.0], [95.1, 133261.0], [95.2, 133261.0], [95.3, 133261.0], [95.4, 133261.0], [95.5, 133261.0], [95.6, 133261.0], [95.7, 133261.0], [95.8, 133261.0], [95.9, 133261.0], [96.0, 136453.0], [96.1, 136453.0], [96.2, 136453.0], [96.3, 136453.0], [96.4, 136453.0], [96.5, 136453.0], [96.6, 136453.0], [96.7, 136453.0], [96.8, 136453.0], [96.9, 136453.0], [97.0, 136464.0], [97.1, 136464.0], [97.2, 136464.0], [97.3, 136464.0], [97.4, 136464.0], [97.5, 136464.0], [97.6, 136464.0], [97.7, 136464.0], [97.8, 136464.0], [97.9, 136464.0], [98.0, 136474.0], [98.1, 136474.0], [98.2, 136474.0], [98.3, 136474.0], [98.4, 136474.0], [98.5, 136474.0], [98.6, 136474.0], [98.7, 136474.0], [98.8, 136474.0], [98.9, 136474.0], [99.0, 136483.0], [99.1, 136483.0], [99.2, 136483.0], [99.3, 136483.0], [99.4, 136483.0], [99.5, 136483.0], [99.6, 136483.0], [99.7, 136483.0], [99.8, 136483.0], [99.9, 136483.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 132400.0, "maxY": 16.0, "series": [{"data": [[132600.0, 10.0], [133200.0, 16.0], [132800.0, 10.0], [133000.0, 10.0], [132400.0, 9.0], [136400.0, 4.0], [133100.0, 11.0], [132900.0, 9.0], [132700.0, 10.0], [132500.0, 11.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 56.829999999999984, "minX": 1.75704114E12, "maxY": 56.829999999999984, "series": [{"data": [[1.75704114E12, 56.829999999999984]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75704114E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132412.0, "minX": 4.0, "maxY": 136468.5, "series": [{"data": [[32.0, 132914.5], [34.0, 132663.0], [37.0, 132973.66666666666], [40.0, 133243.0], [42.0, 132812.33333333334], [45.0, 132739.66666666666], [46.0, 133196.0], [49.0, 132973.0], [51.0, 132648.5], [54.0, 133061.0], [57.0, 132728.0], [58.0, 133132.0], [61.0, 132824.0], [4.0, 136468.5], [69.0, 132412.0], [68.0, 133112.0], [75.0, 132736.5], [72.0, 133243.0], [73.0, 132608.0], [74.0, 132980.0], [76.0, 132635.0], [82.0, 132647.0], [81.0, 132827.0], [80.0, 133208.0], [87.0, 133082.5], [86.0, 132696.0], [84.0, 132997.33333333334], [91.0, 132909.0], [90.0, 132749.0], [95.0, 132870.0], [94.0, 132850.5], [93.0, 132723.0], [99.0, 132711.0], [97.0, 133003.0], [100.0, 132981.66666666666], [7.0, 132724.0], [8.0, 132847.5], [10.0, 132980.0], [13.0, 132728.0], [17.0, 132451.0], [18.0, 133241.0], [19.0, 132864.66666666666], [22.0, 132973.33333333334], [24.0, 132932.5], [25.0, 132504.0], [27.0, 132483.0], [28.0, 132742.66666666666], [31.0, 133065.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[56.829999999999984, 133017.69999999987]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75704114E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75704114E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75704114E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75704114E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133017.69999999987, "minX": 1.75704114E12, "maxY": 133017.69999999987, "series": [{"data": [[1.75704114E12, 133017.69999999987]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75704114E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75704114E12, "maxY": 4.9E-324, "series": [{"data": [[1.75704114E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75704114E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 133017.64, "minX": 1.75704114E12, "maxY": 133017.64, "series": [{"data": [[1.75704114E12, 133017.64]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75704114E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 132874.0, "minX": 4.0, "maxY": 136469.0, "series": [{"data": [[4.0, 136469.0], [96.0, 132874.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 4.0, "maxY": 4.9E-324, "series": [{"data": [[4.0, 0.0], [96.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 96.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75704102E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75704102E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75704102E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75704114E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75704114E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75704114E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75704114E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75704114E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75704114E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75704114E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75704114E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75704114E12, "title": "Total Transactions Per Second"}},
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

