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
        data: {"result": {"minY": 133559.0, "minX": 0.0, "maxY": 134431.0, "series": [{"data": [[0.0, 133559.0], [0.1, 133559.0], [0.2, 133559.0], [0.3, 133559.0], [0.4, 133559.0], [0.5, 133559.0], [0.6, 133559.0], [0.7, 133559.0], [0.8, 133559.0], [0.9, 133559.0], [1.0, 133570.0], [1.1, 133570.0], [1.2, 133570.0], [1.3, 133570.0], [1.4, 133570.0], [1.5, 133570.0], [1.6, 133570.0], [1.7, 133570.0], [1.8, 133570.0], [1.9, 133570.0], [2.0, 133575.0], [2.1, 133575.0], [2.2, 133575.0], [2.3, 133575.0], [2.4, 133575.0], [2.5, 133575.0], [2.6, 133575.0], [2.7, 133575.0], [2.8, 133575.0], [2.9, 133575.0], [3.0, 133580.0], [3.1, 133580.0], [3.2, 133580.0], [3.3, 133580.0], [3.4, 133580.0], [3.5, 133580.0], [3.6, 133580.0], [3.7, 133580.0], [3.8, 133580.0], [3.9, 133580.0], [4.0, 133582.0], [4.1, 133582.0], [4.2, 133582.0], [4.3, 133582.0], [4.4, 133582.0], [4.5, 133582.0], [4.6, 133582.0], [4.7, 133582.0], [4.8, 133582.0], [4.9, 133582.0], [5.0, 133592.0], [5.1, 133592.0], [5.2, 133592.0], [5.3, 133592.0], [5.4, 133592.0], [5.5, 133592.0], [5.6, 133592.0], [5.7, 133592.0], [5.8, 133592.0], [5.9, 133592.0], [6.0, 133604.0], [6.1, 133604.0], [6.2, 133604.0], [6.3, 133604.0], [6.4, 133604.0], [6.5, 133604.0], [6.6, 133604.0], [6.7, 133604.0], [6.8, 133604.0], [6.9, 133604.0], [7.0, 133621.0], [7.1, 133621.0], [7.2, 133621.0], [7.3, 133621.0], [7.4, 133621.0], [7.5, 133621.0], [7.6, 133621.0], [7.7, 133621.0], [7.8, 133621.0], [7.9, 133621.0], [8.0, 133640.0], [8.1, 133640.0], [8.2, 133640.0], [8.3, 133640.0], [8.4, 133640.0], [8.5, 133640.0], [8.6, 133640.0], [8.7, 133640.0], [8.8, 133640.0], [8.9, 133640.0], [9.0, 133644.0], [9.1, 133644.0], [9.2, 133644.0], [9.3, 133644.0], [9.4, 133644.0], [9.5, 133644.0], [9.6, 133644.0], [9.7, 133644.0], [9.8, 133644.0], [9.9, 133644.0], [10.0, 133650.0], [10.1, 133650.0], [10.2, 133650.0], [10.3, 133650.0], [10.4, 133650.0], [10.5, 133650.0], [10.6, 133650.0], [10.7, 133650.0], [10.8, 133650.0], [10.9, 133650.0], [11.0, 133671.0], [11.1, 133671.0], [11.2, 133671.0], [11.3, 133671.0], [11.4, 133671.0], [11.5, 133671.0], [11.6, 133671.0], [11.7, 133671.0], [11.8, 133671.0], [11.9, 133671.0], [12.0, 133675.0], [12.1, 133675.0], [12.2, 133675.0], [12.3, 133675.0], [12.4, 133675.0], [12.5, 133675.0], [12.6, 133675.0], [12.7, 133675.0], [12.8, 133675.0], [12.9, 133675.0], [13.0, 133682.0], [13.1, 133682.0], [13.2, 133682.0], [13.3, 133682.0], [13.4, 133682.0], [13.5, 133682.0], [13.6, 133682.0], [13.7, 133682.0], [13.8, 133682.0], [13.9, 133682.0], [14.0, 133685.0], [14.1, 133685.0], [14.2, 133685.0], [14.3, 133685.0], [14.4, 133685.0], [14.5, 133685.0], [14.6, 133685.0], [14.7, 133685.0], [14.8, 133685.0], [14.9, 133685.0], [15.0, 133692.0], [15.1, 133692.0], [15.2, 133692.0], [15.3, 133692.0], [15.4, 133692.0], [15.5, 133692.0], [15.6, 133692.0], [15.7, 133692.0], [15.8, 133692.0], [15.9, 133692.0], [16.0, 133714.0], [16.1, 133714.0], [16.2, 133714.0], [16.3, 133714.0], [16.4, 133714.0], [16.5, 133714.0], [16.6, 133714.0], [16.7, 133714.0], [16.8, 133714.0], [16.9, 133714.0], [17.0, 133727.0], [17.1, 133727.0], [17.2, 133727.0], [17.3, 133727.0], [17.4, 133727.0], [17.5, 133727.0], [17.6, 133727.0], [17.7, 133727.0], [17.8, 133727.0], [17.9, 133727.0], [18.0, 133728.0], [18.1, 133728.0], [18.2, 133728.0], [18.3, 133728.0], [18.4, 133728.0], [18.5, 133728.0], [18.6, 133728.0], [18.7, 133728.0], [18.8, 133728.0], [18.9, 133728.0], [19.0, 133741.0], [19.1, 133741.0], [19.2, 133741.0], [19.3, 133741.0], [19.4, 133741.0], [19.5, 133741.0], [19.6, 133741.0], [19.7, 133741.0], [19.8, 133741.0], [19.9, 133741.0], [20.0, 133744.0], [20.1, 133744.0], [20.2, 133744.0], [20.3, 133744.0], [20.4, 133744.0], [20.5, 133744.0], [20.6, 133744.0], [20.7, 133744.0], [20.8, 133744.0], [20.9, 133744.0], [21.0, 133766.0], [21.1, 133766.0], [21.2, 133766.0], [21.3, 133766.0], [21.4, 133766.0], [21.5, 133766.0], [21.6, 133766.0], [21.7, 133766.0], [21.8, 133766.0], [21.9, 133766.0], [22.0, 133770.0], [22.1, 133770.0], [22.2, 133770.0], [22.3, 133770.0], [22.4, 133770.0], [22.5, 133770.0], [22.6, 133770.0], [22.7, 133770.0], [22.8, 133770.0], [22.9, 133770.0], [23.0, 133782.0], [23.1, 133782.0], [23.2, 133782.0], [23.3, 133782.0], [23.4, 133782.0], [23.5, 133782.0], [23.6, 133782.0], [23.7, 133782.0], [23.8, 133782.0], [23.9, 133782.0], [24.0, 133786.0], [24.1, 133786.0], [24.2, 133786.0], [24.3, 133786.0], [24.4, 133786.0], [24.5, 133786.0], [24.6, 133786.0], [24.7, 133786.0], [24.8, 133786.0], [24.9, 133786.0], [25.0, 133792.0], [25.1, 133792.0], [25.2, 133792.0], [25.3, 133792.0], [25.4, 133792.0], [25.5, 133792.0], [25.6, 133792.0], [25.7, 133792.0], [25.8, 133792.0], [25.9, 133792.0], [26.0, 133816.0], [26.1, 133816.0], [26.2, 133816.0], [26.3, 133816.0], [26.4, 133816.0], [26.5, 133816.0], [26.6, 133816.0], [26.7, 133816.0], [26.8, 133816.0], [26.9, 133816.0], [27.0, 133825.0], [27.1, 133825.0], [27.2, 133825.0], [27.3, 133825.0], [27.4, 133825.0], [27.5, 133825.0], [27.6, 133825.0], [27.7, 133825.0], [27.8, 133825.0], [27.9, 133825.0], [28.0, 133835.0], [28.1, 133835.0], [28.2, 133835.0], [28.3, 133835.0], [28.4, 133835.0], [28.5, 133835.0], [28.6, 133835.0], [28.7, 133835.0], [28.8, 133835.0], [28.9, 133835.0], [29.0, 133844.0], [29.1, 133844.0], [29.2, 133844.0], [29.3, 133844.0], [29.4, 133844.0], [29.5, 133844.0], [29.6, 133844.0], [29.7, 133844.0], [29.8, 133844.0], [29.9, 133844.0], [30.0, 133856.0], [30.1, 133856.0], [30.2, 133856.0], [30.3, 133856.0], [30.4, 133856.0], [30.5, 133856.0], [30.6, 133856.0], [30.7, 133856.0], [30.8, 133856.0], [30.9, 133856.0], [31.0, 133857.0], [31.1, 133857.0], [31.2, 133857.0], [31.3, 133857.0], [31.4, 133857.0], [31.5, 133857.0], [31.6, 133857.0], [31.7, 133857.0], [31.8, 133857.0], [31.9, 133857.0], [32.0, 133867.0], [32.1, 133867.0], [32.2, 133867.0], [32.3, 133867.0], [32.4, 133867.0], [32.5, 133867.0], [32.6, 133867.0], [32.7, 133867.0], [32.8, 133867.0], [32.9, 133867.0], [33.0, 133875.0], [33.1, 133875.0], [33.2, 133875.0], [33.3, 133875.0], [33.4, 133875.0], [33.5, 133875.0], [33.6, 133875.0], [33.7, 133875.0], [33.8, 133875.0], [33.9, 133875.0], [34.0, 133883.0], [34.1, 133883.0], [34.2, 133883.0], [34.3, 133883.0], [34.4, 133883.0], [34.5, 133883.0], [34.6, 133883.0], [34.7, 133883.0], [34.8, 133883.0], [34.9, 133883.0], [35.0, 133894.0], [35.1, 133894.0], [35.2, 133894.0], [35.3, 133894.0], [35.4, 133894.0], [35.5, 133894.0], [35.6, 133894.0], [35.7, 133894.0], [35.8, 133894.0], [35.9, 133894.0], [36.0, 133901.0], [36.1, 133901.0], [36.2, 133901.0], [36.3, 133901.0], [36.4, 133901.0], [36.5, 133901.0], [36.6, 133901.0], [36.7, 133901.0], [36.8, 133901.0], [36.9, 133901.0], [37.0, 133924.0], [37.1, 133924.0], [37.2, 133924.0], [37.3, 133924.0], [37.4, 133924.0], [37.5, 133924.0], [37.6, 133924.0], [37.7, 133924.0], [37.8, 133924.0], [37.9, 133924.0], [38.0, 133929.0], [38.1, 133929.0], [38.2, 133929.0], [38.3, 133929.0], [38.4, 133929.0], [38.5, 133929.0], [38.6, 133929.0], [38.7, 133929.0], [38.8, 133929.0], [38.9, 133929.0], [39.0, 133950.0], [39.1, 133950.0], [39.2, 133950.0], [39.3, 133950.0], [39.4, 133950.0], [39.5, 133950.0], [39.6, 133950.0], [39.7, 133950.0], [39.8, 133950.0], [39.9, 133950.0], [40.0, 133960.0], [40.1, 133960.0], [40.2, 133960.0], [40.3, 133960.0], [40.4, 133960.0], [40.5, 133960.0], [40.6, 133960.0], [40.7, 133960.0], [40.8, 133960.0], [40.9, 133960.0], [41.0, 133974.0], [41.1, 133974.0], [41.2, 133974.0], [41.3, 133974.0], [41.4, 133974.0], [41.5, 133974.0], [41.6, 133974.0], [41.7, 133974.0], [41.8, 133974.0], [41.9, 133974.0], [42.0, 133978.0], [42.1, 133978.0], [42.2, 133978.0], [42.3, 133978.0], [42.4, 133978.0], [42.5, 133978.0], [42.6, 133978.0], [42.7, 133978.0], [42.8, 133978.0], [42.9, 133978.0], [43.0, 133988.0], [43.1, 133988.0], [43.2, 133988.0], [43.3, 133988.0], [43.4, 133988.0], [43.5, 133988.0], [43.6, 133988.0], [43.7, 133988.0], [43.8, 133988.0], [43.9, 133988.0], [44.0, 133997.0], [44.1, 133997.0], [44.2, 133997.0], [44.3, 133997.0], [44.4, 133997.0], [44.5, 133997.0], [44.6, 133997.0], [44.7, 133997.0], [44.8, 133997.0], [44.9, 133997.0], [45.0, 134002.0], [45.1, 134002.0], [45.2, 134002.0], [45.3, 134002.0], [45.4, 134002.0], [45.5, 134002.0], [45.6, 134002.0], [45.7, 134002.0], [45.8, 134002.0], [45.9, 134002.0], [46.0, 134008.0], [46.1, 134008.0], [46.2, 134008.0], [46.3, 134008.0], [46.4, 134008.0], [46.5, 134008.0], [46.6, 134008.0], [46.7, 134008.0], [46.8, 134008.0], [46.9, 134008.0], [47.0, 134032.0], [47.1, 134032.0], [47.2, 134032.0], [47.3, 134032.0], [47.4, 134032.0], [47.5, 134032.0], [47.6, 134032.0], [47.7, 134032.0], [47.8, 134032.0], [47.9, 134032.0], [48.0, 134033.0], [48.1, 134033.0], [48.2, 134033.0], [48.3, 134033.0], [48.4, 134033.0], [48.5, 134033.0], [48.6, 134033.0], [48.7, 134033.0], [48.8, 134033.0], [48.9, 134033.0], [49.0, 134047.0], [49.1, 134047.0], [49.2, 134047.0], [49.3, 134047.0], [49.4, 134047.0], [49.5, 134047.0], [49.6, 134047.0], [49.7, 134047.0], [49.8, 134047.0], [49.9, 134047.0], [50.0, 134061.0], [50.1, 134061.0], [50.2, 134061.0], [50.3, 134061.0], [50.4, 134061.0], [50.5, 134061.0], [50.6, 134061.0], [50.7, 134061.0], [50.8, 134061.0], [50.9, 134061.0], [51.0, 134069.0], [51.1, 134069.0], [51.2, 134069.0], [51.3, 134069.0], [51.4, 134069.0], [51.5, 134069.0], [51.6, 134069.0], [51.7, 134069.0], [51.8, 134069.0], [51.9, 134069.0], [52.0, 134072.0], [52.1, 134072.0], [52.2, 134072.0], [52.3, 134072.0], [52.4, 134072.0], [52.5, 134072.0], [52.6, 134072.0], [52.7, 134072.0], [52.8, 134072.0], [52.9, 134072.0], [53.0, 134079.0], [53.1, 134079.0], [53.2, 134079.0], [53.3, 134079.0], [53.4, 134079.0], [53.5, 134079.0], [53.6, 134079.0], [53.7, 134079.0], [53.8, 134079.0], [53.9, 134079.0], [54.0, 134090.0], [54.1, 134090.0], [54.2, 134090.0], [54.3, 134090.0], [54.4, 134090.0], [54.5, 134090.0], [54.6, 134090.0], [54.7, 134090.0], [54.8, 134090.0], [54.9, 134090.0], [55.0, 134101.0], [55.1, 134101.0], [55.2, 134101.0], [55.3, 134101.0], [55.4, 134101.0], [55.5, 134101.0], [55.6, 134101.0], [55.7, 134101.0], [55.8, 134101.0], [55.9, 134101.0], [56.0, 134116.0], [56.1, 134116.0], [56.2, 134116.0], [56.3, 134116.0], [56.4, 134116.0], [56.5, 134116.0], [56.6, 134116.0], [56.7, 134116.0], [56.8, 134116.0], [56.9, 134116.0], [57.0, 134126.0], [57.1, 134126.0], [57.2, 134126.0], [57.3, 134126.0], [57.4, 134126.0], [57.5, 134126.0], [57.6, 134126.0], [57.7, 134126.0], [57.8, 134126.0], [57.9, 134126.0], [58.0, 134134.0], [58.1, 134134.0], [58.2, 134134.0], [58.3, 134134.0], [58.4, 134134.0], [58.5, 134134.0], [58.6, 134134.0], [58.7, 134134.0], [58.8, 134134.0], [58.9, 134134.0], [59.0, 134145.0], [59.1, 134145.0], [59.2, 134145.0], [59.3, 134145.0], [59.4, 134145.0], [59.5, 134145.0], [59.6, 134145.0], [59.7, 134145.0], [59.8, 134145.0], [59.9, 134145.0], [60.0, 134145.0], [60.1, 134145.0], [60.2, 134145.0], [60.3, 134145.0], [60.4, 134145.0], [60.5, 134145.0], [60.6, 134145.0], [60.7, 134145.0], [60.8, 134145.0], [60.9, 134145.0], [61.0, 134165.0], [61.1, 134165.0], [61.2, 134165.0], [61.3, 134165.0], [61.4, 134165.0], [61.5, 134165.0], [61.6, 134165.0], [61.7, 134165.0], [61.8, 134165.0], [61.9, 134165.0], [62.0, 134167.0], [62.1, 134167.0], [62.2, 134167.0], [62.3, 134167.0], [62.4, 134167.0], [62.5, 134167.0], [62.6, 134167.0], [62.7, 134167.0], [62.8, 134167.0], [62.9, 134167.0], [63.0, 134186.0], [63.1, 134186.0], [63.2, 134186.0], [63.3, 134186.0], [63.4, 134186.0], [63.5, 134186.0], [63.6, 134186.0], [63.7, 134186.0], [63.8, 134186.0], [63.9, 134186.0], [64.0, 134188.0], [64.1, 134188.0], [64.2, 134188.0], [64.3, 134188.0], [64.4, 134188.0], [64.5, 134188.0], [64.6, 134188.0], [64.7, 134188.0], [64.8, 134188.0], [64.9, 134188.0], [65.0, 134195.0], [65.1, 134195.0], [65.2, 134195.0], [65.3, 134195.0], [65.4, 134195.0], [65.5, 134195.0], [65.6, 134195.0], [65.7, 134195.0], [65.8, 134195.0], [65.9, 134195.0], [66.0, 134200.0], [66.1, 134200.0], [66.2, 134200.0], [66.3, 134200.0], [66.4, 134200.0], [66.5, 134200.0], [66.6, 134200.0], [66.7, 134200.0], [66.8, 134200.0], [66.9, 134200.0], [67.0, 134218.0], [67.1, 134218.0], [67.2, 134218.0], [67.3, 134218.0], [67.4, 134218.0], [67.5, 134218.0], [67.6, 134218.0], [67.7, 134218.0], [67.8, 134218.0], [67.9, 134218.0], [68.0, 134232.0], [68.1, 134232.0], [68.2, 134232.0], [68.3, 134232.0], [68.4, 134232.0], [68.5, 134232.0], [68.6, 134232.0], [68.7, 134232.0], [68.8, 134232.0], [68.9, 134232.0], [69.0, 134233.0], [69.1, 134233.0], [69.2, 134233.0], [69.3, 134233.0], [69.4, 134233.0], [69.5, 134233.0], [69.6, 134233.0], [69.7, 134233.0], [69.8, 134233.0], [69.9, 134233.0], [70.0, 134242.0], [70.1, 134242.0], [70.2, 134242.0], [70.3, 134242.0], [70.4, 134242.0], [70.5, 134242.0], [70.6, 134242.0], [70.7, 134242.0], [70.8, 134242.0], [70.9, 134242.0], [71.0, 134262.0], [71.1, 134262.0], [71.2, 134262.0], [71.3, 134262.0], [71.4, 134262.0], [71.5, 134262.0], [71.6, 134262.0], [71.7, 134262.0], [71.8, 134262.0], [71.9, 134262.0], [72.0, 134266.0], [72.1, 134266.0], [72.2, 134266.0], [72.3, 134266.0], [72.4, 134266.0], [72.5, 134266.0], [72.6, 134266.0], [72.7, 134266.0], [72.8, 134266.0], [72.9, 134266.0], [73.0, 134270.0], [73.1, 134270.0], [73.2, 134270.0], [73.3, 134270.0], [73.4, 134270.0], [73.5, 134270.0], [73.6, 134270.0], [73.7, 134270.0], [73.8, 134270.0], [73.9, 134270.0], [74.0, 134282.0], [74.1, 134282.0], [74.2, 134282.0], [74.3, 134282.0], [74.4, 134282.0], [74.5, 134282.0], [74.6, 134282.0], [74.7, 134282.0], [74.8, 134282.0], [74.9, 134282.0], [75.0, 134293.0], [75.1, 134293.0], [75.2, 134293.0], [75.3, 134293.0], [75.4, 134293.0], [75.5, 134293.0], [75.6, 134293.0], [75.7, 134293.0], [75.8, 134293.0], [75.9, 134293.0], [76.0, 134313.0], [76.1, 134313.0], [76.2, 134313.0], [76.3, 134313.0], [76.4, 134313.0], [76.5, 134313.0], [76.6, 134313.0], [76.7, 134313.0], [76.8, 134313.0], [76.9, 134313.0], [77.0, 134314.0], [77.1, 134314.0], [77.2, 134314.0], [77.3, 134314.0], [77.4, 134314.0], [77.5, 134314.0], [77.6, 134314.0], [77.7, 134314.0], [77.8, 134314.0], [77.9, 134314.0], [78.0, 134328.0], [78.1, 134328.0], [78.2, 134328.0], [78.3, 134328.0], [78.4, 134328.0], [78.5, 134328.0], [78.6, 134328.0], [78.7, 134328.0], [78.8, 134328.0], [78.9, 134328.0], [79.0, 134338.0], [79.1, 134338.0], [79.2, 134338.0], [79.3, 134338.0], [79.4, 134338.0], [79.5, 134338.0], [79.6, 134338.0], [79.7, 134338.0], [79.8, 134338.0], [79.9, 134338.0], [80.0, 134357.0], [80.1, 134357.0], [80.2, 134357.0], [80.3, 134357.0], [80.4, 134357.0], [80.5, 134357.0], [80.6, 134357.0], [80.7, 134357.0], [80.8, 134357.0], [80.9, 134357.0], [81.0, 134359.0], [81.1, 134359.0], [81.2, 134359.0], [81.3, 134359.0], [81.4, 134359.0], [81.5, 134359.0], [81.6, 134359.0], [81.7, 134359.0], [81.8, 134359.0], [81.9, 134359.0], [82.0, 134371.0], [82.1, 134371.0], [82.2, 134371.0], [82.3, 134371.0], [82.4, 134371.0], [82.5, 134371.0], [82.6, 134371.0], [82.7, 134371.0], [82.8, 134371.0], [82.9, 134371.0], [83.0, 134379.0], [83.1, 134379.0], [83.2, 134379.0], [83.3, 134379.0], [83.4, 134379.0], [83.5, 134379.0], [83.6, 134379.0], [83.7, 134379.0], [83.8, 134379.0], [83.9, 134379.0], [84.0, 134395.0], [84.1, 134395.0], [84.2, 134395.0], [84.3, 134395.0], [84.4, 134395.0], [84.5, 134395.0], [84.6, 134395.0], [84.7, 134395.0], [84.8, 134395.0], [84.9, 134395.0], [85.0, 134406.0], [85.1, 134406.0], [85.2, 134406.0], [85.3, 134406.0], [85.4, 134406.0], [85.5, 134406.0], [85.6, 134406.0], [85.7, 134406.0], [85.8, 134406.0], [85.9, 134406.0], [86.0, 134407.0], [86.1, 134407.0], [86.2, 134407.0], [86.3, 134407.0], [86.4, 134407.0], [86.5, 134407.0], [86.6, 134407.0], [86.7, 134407.0], [86.8, 134407.0], [86.9, 134407.0], [87.0, 134411.0], [87.1, 134411.0], [87.2, 134411.0], [87.3, 134411.0], [87.4, 134411.0], [87.5, 134411.0], [87.6, 134411.0], [87.7, 134411.0], [87.8, 134411.0], [87.9, 134411.0], [88.0, 134415.0], [88.1, 134415.0], [88.2, 134415.0], [88.3, 134415.0], [88.4, 134415.0], [88.5, 134415.0], [88.6, 134415.0], [88.7, 134415.0], [88.8, 134415.0], [88.9, 134415.0], [89.0, 134416.0], [89.1, 134416.0], [89.2, 134416.0], [89.3, 134416.0], [89.4, 134416.0], [89.5, 134416.0], [89.6, 134416.0], [89.7, 134416.0], [89.8, 134416.0], [89.9, 134416.0], [90.0, 134420.0], [90.1, 134420.0], [90.2, 134420.0], [90.3, 134420.0], [90.4, 134420.0], [90.5, 134420.0], [90.6, 134420.0], [90.7, 134420.0], [90.8, 134420.0], [90.9, 134420.0], [91.0, 134422.0], [91.1, 134422.0], [91.2, 134422.0], [91.3, 134422.0], [91.4, 134422.0], [91.5, 134422.0], [91.6, 134422.0], [91.7, 134422.0], [91.8, 134422.0], [91.9, 134422.0], [92.0, 134422.0], [92.1, 134422.0], [92.2, 134422.0], [92.3, 134422.0], [92.4, 134422.0], [92.5, 134422.0], [92.6, 134422.0], [92.7, 134422.0], [92.8, 134422.0], [92.9, 134422.0], [93.0, 134425.0], [93.1, 134425.0], [93.2, 134425.0], [93.3, 134425.0], [93.4, 134425.0], [93.5, 134425.0], [93.6, 134425.0], [93.7, 134425.0], [93.8, 134425.0], [93.9, 134425.0], [94.0, 134427.0], [94.1, 134427.0], [94.2, 134427.0], [94.3, 134427.0], [94.4, 134427.0], [94.5, 134427.0], [94.6, 134427.0], [94.7, 134427.0], [94.8, 134427.0], [94.9, 134427.0], [95.0, 134427.0], [95.1, 134427.0], [95.2, 134427.0], [95.3, 134427.0], [95.4, 134427.0], [95.5, 134427.0], [95.6, 134427.0], [95.7, 134427.0], [95.8, 134427.0], [95.9, 134427.0], [96.0, 134428.0], [96.1, 134428.0], [96.2, 134428.0], [96.3, 134428.0], [96.4, 134428.0], [96.5, 134428.0], [96.6, 134428.0], [96.7, 134428.0], [96.8, 134428.0], [96.9, 134428.0], [97.0, 134430.0], [97.1, 134430.0], [97.2, 134430.0], [97.3, 134430.0], [97.4, 134430.0], [97.5, 134430.0], [97.6, 134430.0], [97.7, 134430.0], [97.8, 134430.0], [97.9, 134430.0], [98.0, 134430.0], [98.1, 134430.0], [98.2, 134430.0], [98.3, 134430.0], [98.4, 134430.0], [98.5, 134430.0], [98.6, 134430.0], [98.7, 134430.0], [98.8, 134430.0], [98.9, 134430.0], [99.0, 134431.0], [99.1, 134431.0], [99.2, 134431.0], [99.3, 134431.0], [99.4, 134431.0], [99.5, 134431.0], [99.6, 134431.0], [99.7, 134431.0], [99.8, 134431.0], [99.9, 134431.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 133500.0, "maxY": 15.0, "series": [{"data": [[134200.0, 10.0], [133800.0, 10.0], [133600.0, 10.0], [134400.0, 15.0], [134000.0, 10.0], [133500.0, 6.0], [134100.0, 11.0], [134300.0, 9.0], [133700.0, 10.0], [133900.0, 9.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 134400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 65.46, "minX": 1.7575596E12, "maxY": 65.46, "series": [{"data": [[1.7575596E12, 65.46]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7575596E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 133559.0, "minX": 1.0, "maxY": 134431.0, "series": [{"data": [[37.0, 134299.33333333334], [40.0, 134415.0], [47.0, 134232.0], [50.0, 134029.0], [53.0, 134431.0], [55.0, 134144.5], [54.0, 134135.0], [57.0, 133974.0], [59.0, 134130.33333333334], [60.0, 133997.0], [63.0, 133570.0], [62.0, 133744.0], [67.0, 133894.0], [66.0, 133969.11111111112], [4.0, 134314.0], [70.0, 133765.0], [73.0, 134098.5], [76.0, 134168.75], [83.0, 133804.66666666666], [81.0, 134011.8666666667], [86.0, 134080.0], [91.0, 134218.0], [90.0, 134252.0], [88.0, 134090.33333333334], [94.0, 133867.0], [93.0, 134263.0], [98.0, 134420.0], [97.0, 134001.0], [96.0, 134416.0], [6.0, 133938.5], [100.0, 133902.9], [9.0, 134050.0], [11.0, 134395.0], [12.0, 133835.0], [16.0, 134297.5], [1.0, 133559.0], [18.0, 133844.0], [21.0, 133650.0], [22.0, 133856.0], [27.0, 134031.33333333334], [30.0, 134056.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[65.46, 134038.55000000005]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7575596E12, "maxY": 4708.333333333333, "series": [{"data": [[1.7575596E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7575596E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7575596E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 134038.55000000005, "minX": 1.7575596E12, "maxY": 134038.55000000005, "series": [{"data": [[1.7575596E12, 134038.55000000005]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7575596E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7575596E12, "maxY": 4.9E-324, "series": [{"data": [[1.7575596E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7575596E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 134038.51, "minX": 1.7575596E12, "maxY": 134038.51, "series": [{"data": [[1.7575596E12, 134038.51]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7575596E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 134054.0, "minX": 100.0, "maxY": 134054.0, "series": [{"data": [[100.0, 134054.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75755948E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75755948E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75755948E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7575596E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7575596E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7575596E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7575596E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7575596E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7575596E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7575596E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7575596E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7575596E12, "title": "Total Transactions Per Second"}},
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

