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
        data: {"result": {"minY": 135193.0, "minX": 0.0, "maxY": 136081.0, "series": [{"data": [[0.0, 135193.0], [0.1, 135193.0], [0.2, 135193.0], [0.3, 135193.0], [0.4, 135193.0], [0.5, 135193.0], [0.6, 135193.0], [0.7, 135193.0], [0.8, 135193.0], [0.9, 135193.0], [1.0, 135205.0], [1.1, 135205.0], [1.2, 135205.0], [1.3, 135205.0], [1.4, 135205.0], [1.5, 135205.0], [1.6, 135205.0], [1.7, 135205.0], [1.8, 135205.0], [1.9, 135205.0], [2.0, 135223.0], [2.1, 135223.0], [2.2, 135223.0], [2.3, 135223.0], [2.4, 135223.0], [2.5, 135223.0], [2.6, 135223.0], [2.7, 135223.0], [2.8, 135223.0], [2.9, 135223.0], [3.0, 135226.0], [3.1, 135226.0], [3.2, 135226.0], [3.3, 135226.0], [3.4, 135226.0], [3.5, 135226.0], [3.6, 135226.0], [3.7, 135226.0], [3.8, 135226.0], [3.9, 135226.0], [4.0, 135236.0], [4.1, 135236.0], [4.2, 135236.0], [4.3, 135236.0], [4.4, 135236.0], [4.5, 135236.0], [4.6, 135236.0], [4.7, 135236.0], [4.8, 135236.0], [4.9, 135236.0], [5.0, 135245.0], [5.1, 135245.0], [5.2, 135245.0], [5.3, 135245.0], [5.4, 135245.0], [5.5, 135245.0], [5.6, 135245.0], [5.7, 135245.0], [5.8, 135245.0], [5.9, 135245.0], [6.0, 135253.0], [6.1, 135253.0], [6.2, 135253.0], [6.3, 135253.0], [6.4, 135253.0], [6.5, 135253.0], [6.6, 135253.0], [6.7, 135253.0], [6.8, 135253.0], [6.9, 135253.0], [7.0, 135268.0], [7.1, 135268.0], [7.2, 135268.0], [7.3, 135268.0], [7.4, 135268.0], [7.5, 135268.0], [7.6, 135268.0], [7.7, 135268.0], [7.8, 135268.0], [7.9, 135268.0], [8.0, 135274.0], [8.1, 135274.0], [8.2, 135274.0], [8.3, 135274.0], [8.4, 135274.0], [8.5, 135274.0], [8.6, 135274.0], [8.7, 135274.0], [8.8, 135274.0], [8.9, 135274.0], [9.0, 135282.0], [9.1, 135282.0], [9.2, 135282.0], [9.3, 135282.0], [9.4, 135282.0], [9.5, 135282.0], [9.6, 135282.0], [9.7, 135282.0], [9.8, 135282.0], [9.9, 135282.0], [10.0, 135299.0], [10.1, 135299.0], [10.2, 135299.0], [10.3, 135299.0], [10.4, 135299.0], [10.5, 135299.0], [10.6, 135299.0], [10.7, 135299.0], [10.8, 135299.0], [10.9, 135299.0], [11.0, 135308.0], [11.1, 135308.0], [11.2, 135308.0], [11.3, 135308.0], [11.4, 135308.0], [11.5, 135308.0], [11.6, 135308.0], [11.7, 135308.0], [11.8, 135308.0], [11.9, 135308.0], [12.0, 135308.0], [12.1, 135308.0], [12.2, 135308.0], [12.3, 135308.0], [12.4, 135308.0], [12.5, 135308.0], [12.6, 135308.0], [12.7, 135308.0], [12.8, 135308.0], [12.9, 135308.0], [13.0, 135316.0], [13.1, 135316.0], [13.2, 135316.0], [13.3, 135316.0], [13.4, 135316.0], [13.5, 135316.0], [13.6, 135316.0], [13.7, 135316.0], [13.8, 135316.0], [13.9, 135316.0], [14.0, 135337.0], [14.1, 135337.0], [14.2, 135337.0], [14.3, 135337.0], [14.4, 135337.0], [14.5, 135337.0], [14.6, 135337.0], [14.7, 135337.0], [14.8, 135337.0], [14.9, 135337.0], [15.0, 135346.0], [15.1, 135346.0], [15.2, 135346.0], [15.3, 135346.0], [15.4, 135346.0], [15.5, 135346.0], [15.6, 135346.0], [15.7, 135346.0], [15.8, 135346.0], [15.9, 135346.0], [16.0, 135354.0], [16.1, 135354.0], [16.2, 135354.0], [16.3, 135354.0], [16.4, 135354.0], [16.5, 135354.0], [16.6, 135354.0], [16.7, 135354.0], [16.8, 135354.0], [16.9, 135354.0], [17.0, 135365.0], [17.1, 135365.0], [17.2, 135365.0], [17.3, 135365.0], [17.4, 135365.0], [17.5, 135365.0], [17.6, 135365.0], [17.7, 135365.0], [17.8, 135365.0], [17.9, 135365.0], [18.0, 135376.0], [18.1, 135376.0], [18.2, 135376.0], [18.3, 135376.0], [18.4, 135376.0], [18.5, 135376.0], [18.6, 135376.0], [18.7, 135376.0], [18.8, 135376.0], [18.9, 135376.0], [19.0, 135391.0], [19.1, 135391.0], [19.2, 135391.0], [19.3, 135391.0], [19.4, 135391.0], [19.5, 135391.0], [19.6, 135391.0], [19.7, 135391.0], [19.8, 135391.0], [19.9, 135391.0], [20.0, 135395.0], [20.1, 135395.0], [20.2, 135395.0], [20.3, 135395.0], [20.4, 135395.0], [20.5, 135395.0], [20.6, 135395.0], [20.7, 135395.0], [20.8, 135395.0], [20.9, 135395.0], [21.0, 135402.0], [21.1, 135402.0], [21.2, 135402.0], [21.3, 135402.0], [21.4, 135402.0], [21.5, 135402.0], [21.6, 135402.0], [21.7, 135402.0], [21.8, 135402.0], [21.9, 135402.0], [22.0, 135411.0], [22.1, 135411.0], [22.2, 135411.0], [22.3, 135411.0], [22.4, 135411.0], [22.5, 135411.0], [22.6, 135411.0], [22.7, 135411.0], [22.8, 135411.0], [22.9, 135411.0], [23.0, 135421.0], [23.1, 135421.0], [23.2, 135421.0], [23.3, 135421.0], [23.4, 135421.0], [23.5, 135421.0], [23.6, 135421.0], [23.7, 135421.0], [23.8, 135421.0], [23.9, 135421.0], [24.0, 135433.0], [24.1, 135433.0], [24.2, 135433.0], [24.3, 135433.0], [24.4, 135433.0], [24.5, 135433.0], [24.6, 135433.0], [24.7, 135433.0], [24.8, 135433.0], [24.9, 135433.0], [25.0, 135443.0], [25.1, 135443.0], [25.2, 135443.0], [25.3, 135443.0], [25.4, 135443.0], [25.5, 135443.0], [25.6, 135443.0], [25.7, 135443.0], [25.8, 135443.0], [25.9, 135443.0], [26.0, 135454.0], [26.1, 135454.0], [26.2, 135454.0], [26.3, 135454.0], [26.4, 135454.0], [26.5, 135454.0], [26.6, 135454.0], [26.7, 135454.0], [26.8, 135454.0], [26.9, 135454.0], [27.0, 135460.0], [27.1, 135460.0], [27.2, 135460.0], [27.3, 135460.0], [27.4, 135460.0], [27.5, 135460.0], [27.6, 135460.0], [27.7, 135460.0], [27.8, 135460.0], [27.9, 135460.0], [28.0, 135474.0], [28.1, 135474.0], [28.2, 135474.0], [28.3, 135474.0], [28.4, 135474.0], [28.5, 135474.0], [28.6, 135474.0], [28.7, 135474.0], [28.8, 135474.0], [28.9, 135474.0], [29.0, 135486.0], [29.1, 135486.0], [29.2, 135486.0], [29.3, 135486.0], [29.4, 135486.0], [29.5, 135486.0], [29.6, 135486.0], [29.7, 135486.0], [29.8, 135486.0], [29.9, 135486.0], [30.0, 135489.0], [30.1, 135489.0], [30.2, 135489.0], [30.3, 135489.0], [30.4, 135489.0], [30.5, 135489.0], [30.6, 135489.0], [30.7, 135489.0], [30.8, 135489.0], [30.9, 135489.0], [31.0, 135509.0], [31.1, 135509.0], [31.2, 135509.0], [31.3, 135509.0], [31.4, 135509.0], [31.5, 135509.0], [31.6, 135509.0], [31.7, 135509.0], [31.8, 135509.0], [31.9, 135509.0], [32.0, 135520.0], [32.1, 135520.0], [32.2, 135520.0], [32.3, 135520.0], [32.4, 135520.0], [32.5, 135520.0], [32.6, 135520.0], [32.7, 135520.0], [32.8, 135520.0], [32.9, 135520.0], [33.0, 135520.0], [33.1, 135520.0], [33.2, 135520.0], [33.3, 135520.0], [33.4, 135520.0], [33.5, 135520.0], [33.6, 135520.0], [33.7, 135520.0], [33.8, 135520.0], [33.9, 135520.0], [34.0, 135531.0], [34.1, 135531.0], [34.2, 135531.0], [34.3, 135531.0], [34.4, 135531.0], [34.5, 135531.0], [34.6, 135531.0], [34.7, 135531.0], [34.8, 135531.0], [34.9, 135531.0], [35.0, 135539.0], [35.1, 135539.0], [35.2, 135539.0], [35.3, 135539.0], [35.4, 135539.0], [35.5, 135539.0], [35.6, 135539.0], [35.7, 135539.0], [35.8, 135539.0], [35.9, 135539.0], [36.0, 135554.0], [36.1, 135554.0], [36.2, 135554.0], [36.3, 135554.0], [36.4, 135554.0], [36.5, 135554.0], [36.6, 135554.0], [36.7, 135554.0], [36.8, 135554.0], [36.9, 135554.0], [37.0, 135560.0], [37.1, 135560.0], [37.2, 135560.0], [37.3, 135560.0], [37.4, 135560.0], [37.5, 135560.0], [37.6, 135560.0], [37.7, 135560.0], [37.8, 135560.0], [37.9, 135560.0], [38.0, 135571.0], [38.1, 135571.0], [38.2, 135571.0], [38.3, 135571.0], [38.4, 135571.0], [38.5, 135571.0], [38.6, 135571.0], [38.7, 135571.0], [38.8, 135571.0], [38.9, 135571.0], [39.0, 135579.0], [39.1, 135579.0], [39.2, 135579.0], [39.3, 135579.0], [39.4, 135579.0], [39.5, 135579.0], [39.6, 135579.0], [39.7, 135579.0], [39.8, 135579.0], [39.9, 135579.0], [40.0, 135588.0], [40.1, 135588.0], [40.2, 135588.0], [40.3, 135588.0], [40.4, 135588.0], [40.5, 135588.0], [40.6, 135588.0], [40.7, 135588.0], [40.8, 135588.0], [40.9, 135588.0], [41.0, 135603.0], [41.1, 135603.0], [41.2, 135603.0], [41.3, 135603.0], [41.4, 135603.0], [41.5, 135603.0], [41.6, 135603.0], [41.7, 135603.0], [41.8, 135603.0], [41.9, 135603.0], [42.0, 135607.0], [42.1, 135607.0], [42.2, 135607.0], [42.3, 135607.0], [42.4, 135607.0], [42.5, 135607.0], [42.6, 135607.0], [42.7, 135607.0], [42.8, 135607.0], [42.9, 135607.0], [43.0, 135618.0], [43.1, 135618.0], [43.2, 135618.0], [43.3, 135618.0], [43.4, 135618.0], [43.5, 135618.0], [43.6, 135618.0], [43.7, 135618.0], [43.8, 135618.0], [43.9, 135618.0], [44.0, 135628.0], [44.1, 135628.0], [44.2, 135628.0], [44.3, 135628.0], [44.4, 135628.0], [44.5, 135628.0], [44.6, 135628.0], [44.7, 135628.0], [44.8, 135628.0], [44.9, 135628.0], [45.0, 135637.0], [45.1, 135637.0], [45.2, 135637.0], [45.3, 135637.0], [45.4, 135637.0], [45.5, 135637.0], [45.6, 135637.0], [45.7, 135637.0], [45.8, 135637.0], [45.9, 135637.0], [46.0, 135659.0], [46.1, 135659.0], [46.2, 135659.0], [46.3, 135659.0], [46.4, 135659.0], [46.5, 135659.0], [46.6, 135659.0], [46.7, 135659.0], [46.8, 135659.0], [46.9, 135659.0], [47.0, 135664.0], [47.1, 135664.0], [47.2, 135664.0], [47.3, 135664.0], [47.4, 135664.0], [47.5, 135664.0], [47.6, 135664.0], [47.7, 135664.0], [47.8, 135664.0], [47.9, 135664.0], [48.0, 135682.0], [48.1, 135682.0], [48.2, 135682.0], [48.3, 135682.0], [48.4, 135682.0], [48.5, 135682.0], [48.6, 135682.0], [48.7, 135682.0], [48.8, 135682.0], [48.9, 135682.0], [49.0, 135692.0], [49.1, 135692.0], [49.2, 135692.0], [49.3, 135692.0], [49.4, 135692.0], [49.5, 135692.0], [49.6, 135692.0], [49.7, 135692.0], [49.8, 135692.0], [49.9, 135692.0], [50.0, 135696.0], [50.1, 135696.0], [50.2, 135696.0], [50.3, 135696.0], [50.4, 135696.0], [50.5, 135696.0], [50.6, 135696.0], [50.7, 135696.0], [50.8, 135696.0], [50.9, 135696.0], [51.0, 135701.0], [51.1, 135701.0], [51.2, 135701.0], [51.3, 135701.0], [51.4, 135701.0], [51.5, 135701.0], [51.6, 135701.0], [51.7, 135701.0], [51.8, 135701.0], [51.9, 135701.0], [52.0, 135721.0], [52.1, 135721.0], [52.2, 135721.0], [52.3, 135721.0], [52.4, 135721.0], [52.5, 135721.0], [52.6, 135721.0], [52.7, 135721.0], [52.8, 135721.0], [52.9, 135721.0], [53.0, 135730.0], [53.1, 135730.0], [53.2, 135730.0], [53.3, 135730.0], [53.4, 135730.0], [53.5, 135730.0], [53.6, 135730.0], [53.7, 135730.0], [53.8, 135730.0], [53.9, 135730.0], [54.0, 135741.0], [54.1, 135741.0], [54.2, 135741.0], [54.3, 135741.0], [54.4, 135741.0], [54.5, 135741.0], [54.6, 135741.0], [54.7, 135741.0], [54.8, 135741.0], [54.9, 135741.0], [55.0, 135755.0], [55.1, 135755.0], [55.2, 135755.0], [55.3, 135755.0], [55.4, 135755.0], [55.5, 135755.0], [55.6, 135755.0], [55.7, 135755.0], [55.8, 135755.0], [55.9, 135755.0], [56.0, 135766.0], [56.1, 135766.0], [56.2, 135766.0], [56.3, 135766.0], [56.4, 135766.0], [56.5, 135766.0], [56.6, 135766.0], [56.7, 135766.0], [56.8, 135766.0], [56.9, 135766.0], [57.0, 135775.0], [57.1, 135775.0], [57.2, 135775.0], [57.3, 135775.0], [57.4, 135775.0], [57.5, 135775.0], [57.6, 135775.0], [57.7, 135775.0], [57.8, 135775.0], [57.9, 135775.0], [58.0, 135783.0], [58.1, 135783.0], [58.2, 135783.0], [58.3, 135783.0], [58.4, 135783.0], [58.5, 135783.0], [58.6, 135783.0], [58.7, 135783.0], [58.8, 135783.0], [58.9, 135783.0], [59.0, 135794.0], [59.1, 135794.0], [59.2, 135794.0], [59.3, 135794.0], [59.4, 135794.0], [59.5, 135794.0], [59.6, 135794.0], [59.7, 135794.0], [59.8, 135794.0], [59.9, 135794.0], [60.0, 135801.0], [60.1, 135801.0], [60.2, 135801.0], [60.3, 135801.0], [60.4, 135801.0], [60.5, 135801.0], [60.6, 135801.0], [60.7, 135801.0], [60.8, 135801.0], [60.9, 135801.0], [61.0, 135811.0], [61.1, 135811.0], [61.2, 135811.0], [61.3, 135811.0], [61.4, 135811.0], [61.5, 135811.0], [61.6, 135811.0], [61.7, 135811.0], [61.8, 135811.0], [61.9, 135811.0], [62.0, 135820.0], [62.1, 135820.0], [62.2, 135820.0], [62.3, 135820.0], [62.4, 135820.0], [62.5, 135820.0], [62.6, 135820.0], [62.7, 135820.0], [62.8, 135820.0], [62.9, 135820.0], [63.0, 135827.0], [63.1, 135827.0], [63.2, 135827.0], [63.3, 135827.0], [63.4, 135827.0], [63.5, 135827.0], [63.6, 135827.0], [63.7, 135827.0], [63.8, 135827.0], [63.9, 135827.0], [64.0, 135831.0], [64.1, 135831.0], [64.2, 135831.0], [64.3, 135831.0], [64.4, 135831.0], [64.5, 135831.0], [64.6, 135831.0], [64.7, 135831.0], [64.8, 135831.0], [64.9, 135831.0], [65.0, 135848.0], [65.1, 135848.0], [65.2, 135848.0], [65.3, 135848.0], [65.4, 135848.0], [65.5, 135848.0], [65.6, 135848.0], [65.7, 135848.0], [65.8, 135848.0], [65.9, 135848.0], [66.0, 135856.0], [66.1, 135856.0], [66.2, 135856.0], [66.3, 135856.0], [66.4, 135856.0], [66.5, 135856.0], [66.6, 135856.0], [66.7, 135856.0], [66.8, 135856.0], [66.9, 135856.0], [67.0, 135859.0], [67.1, 135859.0], [67.2, 135859.0], [67.3, 135859.0], [67.4, 135859.0], [67.5, 135859.0], [67.6, 135859.0], [67.7, 135859.0], [67.8, 135859.0], [67.9, 135859.0], [68.0, 135879.0], [68.1, 135879.0], [68.2, 135879.0], [68.3, 135879.0], [68.4, 135879.0], [68.5, 135879.0], [68.6, 135879.0], [68.7, 135879.0], [68.8, 135879.0], [68.9, 135879.0], [69.0, 135894.0], [69.1, 135894.0], [69.2, 135894.0], [69.3, 135894.0], [69.4, 135894.0], [69.5, 135894.0], [69.6, 135894.0], [69.7, 135894.0], [69.8, 135894.0], [69.9, 135894.0], [70.0, 135896.0], [70.1, 135896.0], [70.2, 135896.0], [70.3, 135896.0], [70.4, 135896.0], [70.5, 135896.0], [70.6, 135896.0], [70.7, 135896.0], [70.8, 135896.0], [70.9, 135896.0], [71.0, 135904.0], [71.1, 135904.0], [71.2, 135904.0], [71.3, 135904.0], [71.4, 135904.0], [71.5, 135904.0], [71.6, 135904.0], [71.7, 135904.0], [71.8, 135904.0], [71.9, 135904.0], [72.0, 135909.0], [72.1, 135909.0], [72.2, 135909.0], [72.3, 135909.0], [72.4, 135909.0], [72.5, 135909.0], [72.6, 135909.0], [72.7, 135909.0], [72.8, 135909.0], [72.9, 135909.0], [73.0, 135915.0], [73.1, 135915.0], [73.2, 135915.0], [73.3, 135915.0], [73.4, 135915.0], [73.5, 135915.0], [73.6, 135915.0], [73.7, 135915.0], [73.8, 135915.0], [73.9, 135915.0], [74.0, 135926.0], [74.1, 135926.0], [74.2, 135926.0], [74.3, 135926.0], [74.4, 135926.0], [74.5, 135926.0], [74.6, 135926.0], [74.7, 135926.0], [74.8, 135926.0], [74.9, 135926.0], [75.0, 135937.0], [75.1, 135937.0], [75.2, 135937.0], [75.3, 135937.0], [75.4, 135937.0], [75.5, 135937.0], [75.6, 135937.0], [75.7, 135937.0], [75.8, 135937.0], [75.9, 135937.0], [76.0, 135948.0], [76.1, 135948.0], [76.2, 135948.0], [76.3, 135948.0], [76.4, 135948.0], [76.5, 135948.0], [76.6, 135948.0], [76.7, 135948.0], [76.8, 135948.0], [76.9, 135948.0], [77.0, 135962.0], [77.1, 135962.0], [77.2, 135962.0], [77.3, 135962.0], [77.4, 135962.0], [77.5, 135962.0], [77.6, 135962.0], [77.7, 135962.0], [77.8, 135962.0], [77.9, 135962.0], [78.0, 135977.0], [78.1, 135977.0], [78.2, 135977.0], [78.3, 135977.0], [78.4, 135977.0], [78.5, 135977.0], [78.6, 135977.0], [78.7, 135977.0], [78.8, 135977.0], [78.9, 135977.0], [79.0, 135981.0], [79.1, 135981.0], [79.2, 135981.0], [79.3, 135981.0], [79.4, 135981.0], [79.5, 135981.0], [79.6, 135981.0], [79.7, 135981.0], [79.8, 135981.0], [79.9, 135981.0], [80.0, 136003.0], [80.1, 136003.0], [80.2, 136003.0], [80.3, 136003.0], [80.4, 136003.0], [80.5, 136003.0], [80.6, 136003.0], [80.7, 136003.0], [80.8, 136003.0], [80.9, 136003.0], [81.0, 136007.0], [81.1, 136007.0], [81.2, 136007.0], [81.3, 136007.0], [81.4, 136007.0], [81.5, 136007.0], [81.6, 136007.0], [81.7, 136007.0], [81.8, 136007.0], [81.9, 136007.0], [82.0, 136012.0], [82.1, 136012.0], [82.2, 136012.0], [82.3, 136012.0], [82.4, 136012.0], [82.5, 136012.0], [82.6, 136012.0], [82.7, 136012.0], [82.8, 136012.0], [82.9, 136012.0], [83.0, 136019.0], [83.1, 136019.0], [83.2, 136019.0], [83.3, 136019.0], [83.4, 136019.0], [83.5, 136019.0], [83.6, 136019.0], [83.7, 136019.0], [83.8, 136019.0], [83.9, 136019.0], [84.0, 136035.0], [84.1, 136035.0], [84.2, 136035.0], [84.3, 136035.0], [84.4, 136035.0], [84.5, 136035.0], [84.6, 136035.0], [84.7, 136035.0], [84.8, 136035.0], [84.9, 136035.0], [85.0, 136038.0], [85.1, 136038.0], [85.2, 136038.0], [85.3, 136038.0], [85.4, 136038.0], [85.5, 136038.0], [85.6, 136038.0], [85.7, 136038.0], [85.8, 136038.0], [85.9, 136038.0], [86.0, 136055.0], [86.1, 136055.0], [86.2, 136055.0], [86.3, 136055.0], [86.4, 136055.0], [86.5, 136055.0], [86.6, 136055.0], [86.7, 136055.0], [86.8, 136055.0], [86.9, 136055.0], [87.0, 136060.0], [87.1, 136060.0], [87.2, 136060.0], [87.3, 136060.0], [87.4, 136060.0], [87.5, 136060.0], [87.6, 136060.0], [87.7, 136060.0], [87.8, 136060.0], [87.9, 136060.0], [88.0, 136061.0], [88.1, 136061.0], [88.2, 136061.0], [88.3, 136061.0], [88.4, 136061.0], [88.5, 136061.0], [88.6, 136061.0], [88.7, 136061.0], [88.8, 136061.0], [88.9, 136061.0], [89.0, 136061.0], [89.1, 136061.0], [89.2, 136061.0], [89.3, 136061.0], [89.4, 136061.0], [89.5, 136061.0], [89.6, 136061.0], [89.7, 136061.0], [89.8, 136061.0], [89.9, 136061.0], [90.0, 136062.0], [90.1, 136062.0], [90.2, 136062.0], [90.3, 136062.0], [90.4, 136062.0], [90.5, 136062.0], [90.6, 136062.0], [90.7, 136062.0], [90.8, 136062.0], [90.9, 136062.0], [91.0, 136062.0], [91.1, 136062.0], [91.2, 136062.0], [91.3, 136062.0], [91.4, 136062.0], [91.5, 136062.0], [91.6, 136062.0], [91.7, 136062.0], [91.8, 136062.0], [91.9, 136062.0], [92.0, 136064.0], [92.1, 136064.0], [92.2, 136064.0], [92.3, 136064.0], [92.4, 136064.0], [92.5, 136064.0], [92.6, 136064.0], [92.7, 136064.0], [92.8, 136064.0], [92.9, 136064.0], [93.0, 136067.0], [93.1, 136067.0], [93.2, 136067.0], [93.3, 136067.0], [93.4, 136067.0], [93.5, 136067.0], [93.6, 136067.0], [93.7, 136067.0], [93.8, 136067.0], [93.9, 136067.0], [94.0, 136075.0], [94.1, 136075.0], [94.2, 136075.0], [94.3, 136075.0], [94.4, 136075.0], [94.5, 136075.0], [94.6, 136075.0], [94.7, 136075.0], [94.8, 136075.0], [94.9, 136075.0], [95.0, 136076.0], [95.1, 136076.0], [95.2, 136076.0], [95.3, 136076.0], [95.4, 136076.0], [95.5, 136076.0], [95.6, 136076.0], [95.7, 136076.0], [95.8, 136076.0], [95.9, 136076.0], [96.0, 136076.0], [96.1, 136076.0], [96.2, 136076.0], [96.3, 136076.0], [96.4, 136076.0], [96.5, 136076.0], [96.6, 136076.0], [96.7, 136076.0], [96.8, 136076.0], [96.9, 136076.0], [97.0, 136077.0], [97.1, 136077.0], [97.2, 136077.0], [97.3, 136077.0], [97.4, 136077.0], [97.5, 136077.0], [97.6, 136077.0], [97.7, 136077.0], [97.8, 136077.0], [97.9, 136077.0], [98.0, 136077.0], [98.1, 136077.0], [98.2, 136077.0], [98.3, 136077.0], [98.4, 136077.0], [98.5, 136077.0], [98.6, 136077.0], [98.7, 136077.0], [98.8, 136077.0], [98.9, 136077.0], [99.0, 136081.0], [99.1, 136081.0], [99.2, 136081.0], [99.3, 136081.0], [99.4, 136081.0], [99.5, 136081.0], [99.6, 136081.0], [99.7, 136081.0], [99.8, 136081.0], [99.9, 136081.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 135100.0, "maxY": 20.0, "series": [{"data": [[136000.0, 20.0], [135800.0, 11.0], [135200.0, 10.0], [135600.0, 10.0], [135400.0, 10.0], [135500.0, 10.0], [135700.0, 9.0], [135300.0, 10.0], [135900.0, 9.0], [135100.0, 1.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 76.92999999999999, "minX": 1.75237806E12, "maxY": 76.92999999999999, "series": [{"data": [[1.75237806E12, 76.92999999999999]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75237806E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135193.0, "minX": 1.0, "maxY": 136081.0, "series": [{"data": [[2.0, 136003.0], [39.0, 135859.0], [41.0, 135801.0], [40.0, 135811.0], [46.0, 135981.0], [48.0, 135610.5], [3.0, 135316.0], [52.0, 135721.0], [55.0, 135990.66666666666], [59.0, 135472.0], [62.0, 135969.33333333334], [67.0, 135689.0], [74.0, 136060.0], [73.0, 135565.0], [79.0, 135346.0], [78.0, 136081.0], [82.0, 135245.0], [80.0, 135766.0], [5.0, 135915.0], [84.0, 135585.0], [89.0, 135824.5], [88.0, 135794.0], [93.0, 136077.0], [97.0, 135637.0], [100.0, 135645.66037735852], [10.0, 135421.0], [12.0, 135376.0], [13.0, 135402.0], [16.0, 135193.0], [1.0, 135783.0], [20.0, 135205.0], [22.0, 135848.0], [25.0, 135659.0], [27.0, 135896.0], [29.0, 135895.5], [31.0, 135977.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[76.92000000000003, 135682.45]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75237806E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75237806E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75237806E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75237806E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 135682.45, "minX": 1.75237806E12, "maxY": 135682.45, "series": [{"data": [[1.75237806E12, 135682.45]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75237806E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75237806E12, "maxY": 4.9E-324, "series": [{"data": [[1.75237806E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75237806E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 135682.41000000003, "minX": 1.75237806E12, "maxY": 135682.41000000003, "series": [{"data": [[1.75237806E12, 135682.41000000003]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75237806E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 135694.0, "minX": 100.0, "maxY": 135694.0, "series": [{"data": [[100.0, 135694.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75237794E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75237794E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75237794E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75237806E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75237806E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75237806E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75237806E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75237806E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75237806E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75237806E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75237806E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75237806E12, "title": "Total Transactions Per Second"}},
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

