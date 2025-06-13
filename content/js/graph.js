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
        data: {"result": {"minY": 2224.0, "minX": 0.0, "maxY": 5728.0, "series": [{"data": [[0.0, 2224.0], [0.1, 2224.0], [0.2, 2224.0], [0.3, 2224.0], [0.4, 2224.0], [0.5, 2224.0], [0.6, 2224.0], [0.7, 2224.0], [0.8, 2224.0], [0.9, 2224.0], [1.0, 2346.0], [1.1, 2346.0], [1.2, 2346.0], [1.3, 2346.0], [1.4, 2346.0], [1.5, 2346.0], [1.6, 2346.0], [1.7, 2346.0], [1.8, 2346.0], [1.9, 2346.0], [2.0, 2382.0], [2.1, 2382.0], [2.2, 2382.0], [2.3, 2382.0], [2.4, 2382.0], [2.5, 2382.0], [2.6, 2382.0], [2.7, 2382.0], [2.8, 2382.0], [2.9, 2382.0], [3.0, 2462.0], [3.1, 2462.0], [3.2, 2462.0], [3.3, 2462.0], [3.4, 2462.0], [3.5, 2462.0], [3.6, 2462.0], [3.7, 2462.0], [3.8, 2462.0], [3.9, 2462.0], [4.0, 2518.0], [4.1, 2518.0], [4.2, 2518.0], [4.3, 2518.0], [4.4, 2518.0], [4.5, 2518.0], [4.6, 2518.0], [4.7, 2518.0], [4.8, 2518.0], [4.9, 2518.0], [5.0, 2562.0], [5.1, 2562.0], [5.2, 2562.0], [5.3, 2562.0], [5.4, 2562.0], [5.5, 2562.0], [5.6, 2562.0], [5.7, 2562.0], [5.8, 2562.0], [5.9, 2562.0], [6.0, 2598.0], [6.1, 2598.0], [6.2, 2598.0], [6.3, 2598.0], [6.4, 2598.0], [6.5, 2598.0], [6.6, 2598.0], [6.7, 2598.0], [6.8, 2598.0], [6.9, 2598.0], [7.0, 2600.0], [7.1, 2600.0], [7.2, 2600.0], [7.3, 2600.0], [7.4, 2600.0], [7.5, 2600.0], [7.6, 2600.0], [7.7, 2600.0], [7.8, 2600.0], [7.9, 2600.0], [8.0, 2752.0], [8.1, 2752.0], [8.2, 2752.0], [8.3, 2752.0], [8.4, 2752.0], [8.5, 2752.0], [8.6, 2752.0], [8.7, 2752.0], [8.8, 2752.0], [8.9, 2752.0], [9.0, 2755.0], [9.1, 2755.0], [9.2, 2755.0], [9.3, 2755.0], [9.4, 2755.0], [9.5, 2755.0], [9.6, 2755.0], [9.7, 2755.0], [9.8, 2755.0], [9.9, 2755.0], [10.0, 2805.0], [10.1, 2805.0], [10.2, 2805.0], [10.3, 2805.0], [10.4, 2805.0], [10.5, 2805.0], [10.6, 2805.0], [10.7, 2805.0], [10.8, 2805.0], [10.9, 2805.0], [11.0, 2858.0], [11.1, 2858.0], [11.2, 2858.0], [11.3, 2858.0], [11.4, 2858.0], [11.5, 2858.0], [11.6, 2858.0], [11.7, 2858.0], [11.8, 2858.0], [11.9, 2858.0], [12.0, 2911.0], [12.1, 2911.0], [12.2, 2911.0], [12.3, 2911.0], [12.4, 2911.0], [12.5, 2911.0], [12.6, 2911.0], [12.7, 2911.0], [12.8, 2911.0], [12.9, 2911.0], [13.0, 2942.0], [13.1, 2942.0], [13.2, 2942.0], [13.3, 2942.0], [13.4, 2942.0], [13.5, 2942.0], [13.6, 2942.0], [13.7, 2942.0], [13.8, 2942.0], [13.9, 2942.0], [14.0, 2981.0], [14.1, 2981.0], [14.2, 2981.0], [14.3, 2981.0], [14.4, 2981.0], [14.5, 2981.0], [14.6, 2981.0], [14.7, 2981.0], [14.8, 2981.0], [14.9, 2981.0], [15.0, 2997.0], [15.1, 2997.0], [15.2, 2997.0], [15.3, 2997.0], [15.4, 2997.0], [15.5, 2997.0], [15.6, 2997.0], [15.7, 2997.0], [15.8, 2997.0], [15.9, 2997.0], [16.0, 3047.0], [16.1, 3047.0], [16.2, 3047.0], [16.3, 3047.0], [16.4, 3047.0], [16.5, 3047.0], [16.6, 3047.0], [16.7, 3047.0], [16.8, 3047.0], [16.9, 3047.0], [17.0, 3086.0], [17.1, 3086.0], [17.2, 3086.0], [17.3, 3086.0], [17.4, 3086.0], [17.5, 3086.0], [17.6, 3086.0], [17.7, 3086.0], [17.8, 3086.0], [17.9, 3086.0], [18.0, 3090.0], [18.1, 3090.0], [18.2, 3090.0], [18.3, 3090.0], [18.4, 3090.0], [18.5, 3090.0], [18.6, 3090.0], [18.7, 3090.0], [18.8, 3090.0], [18.9, 3090.0], [19.0, 3090.0], [19.1, 3090.0], [19.2, 3090.0], [19.3, 3090.0], [19.4, 3090.0], [19.5, 3090.0], [19.6, 3090.0], [19.7, 3090.0], [19.8, 3090.0], [19.9, 3090.0], [20.0, 3138.0], [20.1, 3138.0], [20.2, 3138.0], [20.3, 3138.0], [20.4, 3138.0], [20.5, 3138.0], [20.6, 3138.0], [20.7, 3138.0], [20.8, 3138.0], [20.9, 3138.0], [21.0, 3186.0], [21.1, 3186.0], [21.2, 3186.0], [21.3, 3186.0], [21.4, 3186.0], [21.5, 3186.0], [21.6, 3186.0], [21.7, 3186.0], [21.8, 3186.0], [21.9, 3186.0], [22.0, 3186.0], [22.1, 3186.0], [22.2, 3186.0], [22.3, 3186.0], [22.4, 3186.0], [22.5, 3186.0], [22.6, 3186.0], [22.7, 3186.0], [22.8, 3186.0], [22.9, 3186.0], [23.0, 3222.0], [23.1, 3222.0], [23.2, 3222.0], [23.3, 3222.0], [23.4, 3222.0], [23.5, 3222.0], [23.6, 3222.0], [23.7, 3222.0], [23.8, 3222.0], [23.9, 3222.0], [24.0, 3272.0], [24.1, 3272.0], [24.2, 3272.0], [24.3, 3272.0], [24.4, 3272.0], [24.5, 3272.0], [24.6, 3272.0], [24.7, 3272.0], [24.8, 3272.0], [24.9, 3272.0], [25.0, 3329.0], [25.1, 3329.0], [25.2, 3329.0], [25.3, 3329.0], [25.4, 3329.0], [25.5, 3329.0], [25.6, 3329.0], [25.7, 3329.0], [25.8, 3329.0], [25.9, 3329.0], [26.0, 3345.0], [26.1, 3345.0], [26.2, 3345.0], [26.3, 3345.0], [26.4, 3345.0], [26.5, 3345.0], [26.6, 3345.0], [26.7, 3345.0], [26.8, 3345.0], [26.9, 3345.0], [27.0, 3363.0], [27.1, 3363.0], [27.2, 3363.0], [27.3, 3363.0], [27.4, 3363.0], [27.5, 3363.0], [27.6, 3363.0], [27.7, 3363.0], [27.8, 3363.0], [27.9, 3363.0], [28.0, 3408.0], [28.1, 3408.0], [28.2, 3408.0], [28.3, 3408.0], [28.4, 3408.0], [28.5, 3408.0], [28.6, 3408.0], [28.7, 3408.0], [28.8, 3408.0], [28.9, 3408.0], [29.0, 3463.0], [29.1, 3463.0], [29.2, 3463.0], [29.3, 3463.0], [29.4, 3463.0], [29.5, 3463.0], [29.6, 3463.0], [29.7, 3463.0], [29.8, 3463.0], [29.9, 3463.0], [30.0, 3487.0], [30.1, 3487.0], [30.2, 3487.0], [30.3, 3487.0], [30.4, 3487.0], [30.5, 3487.0], [30.6, 3487.0], [30.7, 3487.0], [30.8, 3487.0], [30.9, 3487.0], [31.0, 3570.0], [31.1, 3570.0], [31.2, 3570.0], [31.3, 3570.0], [31.4, 3570.0], [31.5, 3570.0], [31.6, 3570.0], [31.7, 3570.0], [31.8, 3570.0], [31.9, 3570.0], [32.0, 3595.0], [32.1, 3595.0], [32.2, 3595.0], [32.3, 3595.0], [32.4, 3595.0], [32.5, 3595.0], [32.6, 3595.0], [32.7, 3595.0], [32.8, 3595.0], [32.9, 3595.0], [33.0, 3618.0], [33.1, 3618.0], [33.2, 3618.0], [33.3, 3618.0], [33.4, 3618.0], [33.5, 3618.0], [33.6, 3618.0], [33.7, 3618.0], [33.8, 3618.0], [33.9, 3618.0], [34.0, 3621.0], [34.1, 3621.0], [34.2, 3621.0], [34.3, 3621.0], [34.4, 3621.0], [34.5, 3621.0], [34.6, 3621.0], [34.7, 3621.0], [34.8, 3621.0], [34.9, 3621.0], [35.0, 3646.0], [35.1, 3646.0], [35.2, 3646.0], [35.3, 3646.0], [35.4, 3646.0], [35.5, 3646.0], [35.6, 3646.0], [35.7, 3646.0], [35.8, 3646.0], [35.9, 3646.0], [36.0, 3676.0], [36.1, 3676.0], [36.2, 3676.0], [36.3, 3676.0], [36.4, 3676.0], [36.5, 3676.0], [36.6, 3676.0], [36.7, 3676.0], [36.8, 3676.0], [36.9, 3676.0], [37.0, 3684.0], [37.1, 3684.0], [37.2, 3684.0], [37.3, 3684.0], [37.4, 3684.0], [37.5, 3684.0], [37.6, 3684.0], [37.7, 3684.0], [37.8, 3684.0], [37.9, 3684.0], [38.0, 3685.0], [38.1, 3685.0], [38.2, 3685.0], [38.3, 3685.0], [38.4, 3685.0], [38.5, 3685.0], [38.6, 3685.0], [38.7, 3685.0], [38.8, 3685.0], [38.9, 3685.0], [39.0, 3690.0], [39.1, 3690.0], [39.2, 3690.0], [39.3, 3690.0], [39.4, 3690.0], [39.5, 3690.0], [39.6, 3690.0], [39.7, 3690.0], [39.8, 3690.0], [39.9, 3690.0], [40.0, 3704.0], [40.1, 3704.0], [40.2, 3704.0], [40.3, 3704.0], [40.4, 3704.0], [40.5, 3704.0], [40.6, 3704.0], [40.7, 3704.0], [40.8, 3704.0], [40.9, 3704.0], [41.0, 3715.0], [41.1, 3715.0], [41.2, 3715.0], [41.3, 3715.0], [41.4, 3715.0], [41.5, 3715.0], [41.6, 3715.0], [41.7, 3715.0], [41.8, 3715.0], [41.9, 3715.0], [42.0, 3723.0], [42.1, 3723.0], [42.2, 3723.0], [42.3, 3723.0], [42.4, 3723.0], [42.5, 3723.0], [42.6, 3723.0], [42.7, 3723.0], [42.8, 3723.0], [42.9, 3723.0], [43.0, 3823.0], [43.1, 3823.0], [43.2, 3823.0], [43.3, 3823.0], [43.4, 3823.0], [43.5, 3823.0], [43.6, 3823.0], [43.7, 3823.0], [43.8, 3823.0], [43.9, 3823.0], [44.0, 3824.0], [44.1, 3824.0], [44.2, 3824.0], [44.3, 3824.0], [44.4, 3824.0], [44.5, 3824.0], [44.6, 3824.0], [44.7, 3824.0], [44.8, 3824.0], [44.9, 3824.0], [45.0, 3943.0], [45.1, 3943.0], [45.2, 3943.0], [45.3, 3943.0], [45.4, 3943.0], [45.5, 3943.0], [45.6, 3943.0], [45.7, 3943.0], [45.8, 3943.0], [45.9, 3943.0], [46.0, 3946.0], [46.1, 3946.0], [46.2, 3946.0], [46.3, 3946.0], [46.4, 3946.0], [46.5, 3946.0], [46.6, 3946.0], [46.7, 3946.0], [46.8, 3946.0], [46.9, 3946.0], [47.0, 3961.0], [47.1, 3961.0], [47.2, 3961.0], [47.3, 3961.0], [47.4, 3961.0], [47.5, 3961.0], [47.6, 3961.0], [47.7, 3961.0], [47.8, 3961.0], [47.9, 3961.0], [48.0, 3998.0], [48.1, 3998.0], [48.2, 3998.0], [48.3, 3998.0], [48.4, 3998.0], [48.5, 3998.0], [48.6, 3998.0], [48.7, 3998.0], [48.8, 3998.0], [48.9, 3998.0], [49.0, 4006.0], [49.1, 4006.0], [49.2, 4006.0], [49.3, 4006.0], [49.4, 4006.0], [49.5, 4006.0], [49.6, 4006.0], [49.7, 4006.0], [49.8, 4006.0], [49.9, 4006.0], [50.0, 4168.0], [50.1, 4168.0], [50.2, 4168.0], [50.3, 4168.0], [50.4, 4168.0], [50.5, 4168.0], [50.6, 4168.0], [50.7, 4168.0], [50.8, 4168.0], [50.9, 4168.0], [51.0, 4277.0], [51.1, 4277.0], [51.2, 4277.0], [51.3, 4277.0], [51.4, 4277.0], [51.5, 4277.0], [51.6, 4277.0], [51.7, 4277.0], [51.8, 4277.0], [51.9, 4277.0], [52.0, 4309.0], [52.1, 4309.0], [52.2, 4309.0], [52.3, 4309.0], [52.4, 4309.0], [52.5, 4309.0], [52.6, 4309.0], [52.7, 4309.0], [52.8, 4309.0], [52.9, 4309.0], [53.0, 4316.0], [53.1, 4316.0], [53.2, 4316.0], [53.3, 4316.0], [53.4, 4316.0], [53.5, 4316.0], [53.6, 4316.0], [53.7, 4316.0], [53.8, 4316.0], [53.9, 4316.0], [54.0, 4337.0], [54.1, 4337.0], [54.2, 4337.0], [54.3, 4337.0], [54.4, 4337.0], [54.5, 4337.0], [54.6, 4337.0], [54.7, 4337.0], [54.8, 4337.0], [54.9, 4337.0], [55.0, 4363.0], [55.1, 4363.0], [55.2, 4363.0], [55.3, 4363.0], [55.4, 4363.0], [55.5, 4363.0], [55.6, 4363.0], [55.7, 4363.0], [55.8, 4363.0], [55.9, 4363.0], [56.0, 4408.0], [56.1, 4408.0], [56.2, 4408.0], [56.3, 4408.0], [56.4, 4408.0], [56.5, 4408.0], [56.6, 4408.0], [56.7, 4408.0], [56.8, 4408.0], [56.9, 4408.0], [57.0, 4445.0], [57.1, 4445.0], [57.2, 4445.0], [57.3, 4445.0], [57.4, 4445.0], [57.5, 4445.0], [57.6, 4445.0], [57.7, 4445.0], [57.8, 4445.0], [57.9, 4445.0], [58.0, 4465.0], [58.1, 4465.0], [58.2, 4465.0], [58.3, 4465.0], [58.4, 4465.0], [58.5, 4465.0], [58.6, 4465.0], [58.7, 4465.0], [58.8, 4465.0], [58.9, 4465.0], [59.0, 4468.0], [59.1, 4468.0], [59.2, 4468.0], [59.3, 4468.0], [59.4, 4468.0], [59.5, 4468.0], [59.6, 4468.0], [59.7, 4468.0], [59.8, 4468.0], [59.9, 4468.0], [60.0, 4470.0], [60.1, 4470.0], [60.2, 4470.0], [60.3, 4470.0], [60.4, 4470.0], [60.5, 4470.0], [60.6, 4470.0], [60.7, 4470.0], [60.8, 4470.0], [60.9, 4470.0], [61.0, 4476.0], [61.1, 4476.0], [61.2, 4476.0], [61.3, 4476.0], [61.4, 4476.0], [61.5, 4476.0], [61.6, 4476.0], [61.7, 4476.0], [61.8, 4476.0], [61.9, 4476.0], [62.0, 4524.0], [62.1, 4524.0], [62.2, 4524.0], [62.3, 4524.0], [62.4, 4524.0], [62.5, 4524.0], [62.6, 4524.0], [62.7, 4524.0], [62.8, 4524.0], [62.9, 4524.0], [63.0, 4589.0], [63.1, 4589.0], [63.2, 4589.0], [63.3, 4589.0], [63.4, 4589.0], [63.5, 4589.0], [63.6, 4589.0], [63.7, 4589.0], [63.8, 4589.0], [63.9, 4589.0], [64.0, 4637.0], [64.1, 4637.0], [64.2, 4637.0], [64.3, 4637.0], [64.4, 4637.0], [64.5, 4637.0], [64.6, 4637.0], [64.7, 4637.0], [64.8, 4637.0], [64.9, 4637.0], [65.0, 4642.0], [65.1, 4642.0], [65.2, 4642.0], [65.3, 4642.0], [65.4, 4642.0], [65.5, 4642.0], [65.6, 4642.0], [65.7, 4642.0], [65.8, 4642.0], [65.9, 4642.0], [66.0, 4650.0], [66.1, 4650.0], [66.2, 4650.0], [66.3, 4650.0], [66.4, 4650.0], [66.5, 4650.0], [66.6, 4650.0], [66.7, 4650.0], [66.8, 4650.0], [66.9, 4650.0], [67.0, 4669.0], [67.1, 4669.0], [67.2, 4669.0], [67.3, 4669.0], [67.4, 4669.0], [67.5, 4669.0], [67.6, 4669.0], [67.7, 4669.0], [67.8, 4669.0], [67.9, 4669.0], [68.0, 4703.0], [68.1, 4703.0], [68.2, 4703.0], [68.3, 4703.0], [68.4, 4703.0], [68.5, 4703.0], [68.6, 4703.0], [68.7, 4703.0], [68.8, 4703.0], [68.9, 4703.0], [69.0, 4746.0], [69.1, 4746.0], [69.2, 4746.0], [69.3, 4746.0], [69.4, 4746.0], [69.5, 4746.0], [69.6, 4746.0], [69.7, 4746.0], [69.8, 4746.0], [69.9, 4746.0], [70.0, 4750.0], [70.1, 4750.0], [70.2, 4750.0], [70.3, 4750.0], [70.4, 4750.0], [70.5, 4750.0], [70.6, 4750.0], [70.7, 4750.0], [70.8, 4750.0], [70.9, 4750.0], [71.0, 4781.0], [71.1, 4781.0], [71.2, 4781.0], [71.3, 4781.0], [71.4, 4781.0], [71.5, 4781.0], [71.6, 4781.0], [71.7, 4781.0], [71.8, 4781.0], [71.9, 4781.0], [72.0, 4798.0], [72.1, 4798.0], [72.2, 4798.0], [72.3, 4798.0], [72.4, 4798.0], [72.5, 4798.0], [72.6, 4798.0], [72.7, 4798.0], [72.8, 4798.0], [72.9, 4798.0], [73.0, 4824.0], [73.1, 4824.0], [73.2, 4824.0], [73.3, 4824.0], [73.4, 4824.0], [73.5, 4824.0], [73.6, 4824.0], [73.7, 4824.0], [73.8, 4824.0], [73.9, 4824.0], [74.0, 4842.0], [74.1, 4842.0], [74.2, 4842.0], [74.3, 4842.0], [74.4, 4842.0], [74.5, 4842.0], [74.6, 4842.0], [74.7, 4842.0], [74.8, 4842.0], [74.9, 4842.0], [75.0, 4872.0], [75.1, 4872.0], [75.2, 4872.0], [75.3, 4872.0], [75.4, 4872.0], [75.5, 4872.0], [75.6, 4872.0], [75.7, 4872.0], [75.8, 4872.0], [75.9, 4872.0], [76.0, 4922.0], [76.1, 4922.0], [76.2, 4922.0], [76.3, 4922.0], [76.4, 4922.0], [76.5, 4922.0], [76.6, 4922.0], [76.7, 4922.0], [76.8, 4922.0], [76.9, 4922.0], [77.0, 4930.0], [77.1, 4930.0], [77.2, 4930.0], [77.3, 4930.0], [77.4, 4930.0], [77.5, 4930.0], [77.6, 4930.0], [77.7, 4930.0], [77.8, 4930.0], [77.9, 4930.0], [78.0, 4930.0], [78.1, 4930.0], [78.2, 4930.0], [78.3, 4930.0], [78.4, 4930.0], [78.5, 4930.0], [78.6, 4930.0], [78.7, 4930.0], [78.8, 4930.0], [78.9, 4930.0], [79.0, 4933.0], [79.1, 4933.0], [79.2, 4933.0], [79.3, 4933.0], [79.4, 4933.0], [79.5, 4933.0], [79.6, 4933.0], [79.7, 4933.0], [79.8, 4933.0], [79.9, 4933.0], [80.0, 4983.0], [80.1, 4983.0], [80.2, 4983.0], [80.3, 4983.0], [80.4, 4983.0], [80.5, 4983.0], [80.6, 4983.0], [80.7, 4983.0], [80.8, 4983.0], [80.9, 4983.0], [81.0, 4998.0], [81.1, 4998.0], [81.2, 4998.0], [81.3, 4998.0], [81.4, 4998.0], [81.5, 4998.0], [81.6, 4998.0], [81.7, 4998.0], [81.8, 4998.0], [81.9, 4998.0], [82.0, 5043.0], [82.1, 5043.0], [82.2, 5043.0], [82.3, 5043.0], [82.4, 5043.0], [82.5, 5043.0], [82.6, 5043.0], [82.7, 5043.0], [82.8, 5043.0], [82.9, 5043.0], [83.0, 5054.0], [83.1, 5054.0], [83.2, 5054.0], [83.3, 5054.0], [83.4, 5054.0], [83.5, 5054.0], [83.6, 5054.0], [83.7, 5054.0], [83.8, 5054.0], [83.9, 5054.0], [84.0, 5066.0], [84.1, 5066.0], [84.2, 5066.0], [84.3, 5066.0], [84.4, 5066.0], [84.5, 5066.0], [84.6, 5066.0], [84.7, 5066.0], [84.8, 5066.0], [84.9, 5066.0], [85.0, 5072.0], [85.1, 5072.0], [85.2, 5072.0], [85.3, 5072.0], [85.4, 5072.0], [85.5, 5072.0], [85.6, 5072.0], [85.7, 5072.0], [85.8, 5072.0], [85.9, 5072.0], [86.0, 5077.0], [86.1, 5077.0], [86.2, 5077.0], [86.3, 5077.0], [86.4, 5077.0], [86.5, 5077.0], [86.6, 5077.0], [86.7, 5077.0], [86.8, 5077.0], [86.9, 5077.0], [87.0, 5114.0], [87.1, 5114.0], [87.2, 5114.0], [87.3, 5114.0], [87.4, 5114.0], [87.5, 5114.0], [87.6, 5114.0], [87.7, 5114.0], [87.8, 5114.0], [87.9, 5114.0], [88.0, 5120.0], [88.1, 5120.0], [88.2, 5120.0], [88.3, 5120.0], [88.4, 5120.0], [88.5, 5120.0], [88.6, 5120.0], [88.7, 5120.0], [88.8, 5120.0], [88.9, 5120.0], [89.0, 5145.0], [89.1, 5145.0], [89.2, 5145.0], [89.3, 5145.0], [89.4, 5145.0], [89.5, 5145.0], [89.6, 5145.0], [89.7, 5145.0], [89.8, 5145.0], [89.9, 5145.0], [90.0, 5146.0], [90.1, 5146.0], [90.2, 5146.0], [90.3, 5146.0], [90.4, 5146.0], [90.5, 5146.0], [90.6, 5146.0], [90.7, 5146.0], [90.8, 5146.0], [90.9, 5146.0], [91.0, 5188.0], [91.1, 5188.0], [91.2, 5188.0], [91.3, 5188.0], [91.4, 5188.0], [91.5, 5188.0], [91.6, 5188.0], [91.7, 5188.0], [91.8, 5188.0], [91.9, 5188.0], [92.0, 5282.0], [92.1, 5282.0], [92.2, 5282.0], [92.3, 5282.0], [92.4, 5282.0], [92.5, 5282.0], [92.6, 5282.0], [92.7, 5282.0], [92.8, 5282.0], [92.9, 5282.0], [93.0, 5339.0], [93.1, 5339.0], [93.2, 5339.0], [93.3, 5339.0], [93.4, 5339.0], [93.5, 5339.0], [93.6, 5339.0], [93.7, 5339.0], [93.8, 5339.0], [93.9, 5339.0], [94.0, 5351.0], [94.1, 5351.0], [94.2, 5351.0], [94.3, 5351.0], [94.4, 5351.0], [94.5, 5351.0], [94.6, 5351.0], [94.7, 5351.0], [94.8, 5351.0], [94.9, 5351.0], [95.0, 5420.0], [95.1, 5420.0], [95.2, 5420.0], [95.3, 5420.0], [95.4, 5420.0], [95.5, 5420.0], [95.6, 5420.0], [95.7, 5420.0], [95.8, 5420.0], [95.9, 5420.0], [96.0, 5519.0], [96.1, 5519.0], [96.2, 5519.0], [96.3, 5519.0], [96.4, 5519.0], [96.5, 5519.0], [96.6, 5519.0], [96.7, 5519.0], [96.8, 5519.0], [96.9, 5519.0], [97.0, 5642.0], [97.1, 5642.0], [97.2, 5642.0], [97.3, 5642.0], [97.4, 5642.0], [97.5, 5642.0], [97.6, 5642.0], [97.7, 5642.0], [97.8, 5642.0], [97.9, 5642.0], [98.0, 5648.0], [98.1, 5648.0], [98.2, 5648.0], [98.3, 5648.0], [98.4, 5648.0], [98.5, 5648.0], [98.6, 5648.0], [98.7, 5648.0], [98.8, 5648.0], [98.9, 5648.0], [99.0, 5728.0], [99.1, 5728.0], [99.2, 5728.0], [99.3, 5728.0], [99.4, 5728.0], [99.5, 5728.0], [99.6, 5728.0], [99.7, 5728.0], [99.8, 5728.0], [99.9, 5728.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2200.0, "maxY": 7.0, "series": [{"data": [[2200.0, 1.0], [2300.0, 2.0], [2400.0, 1.0], [2500.0, 3.0], [2600.0, 1.0], [2700.0, 2.0], [2800.0, 2.0], [2900.0, 4.0], [3000.0, 4.0], [3100.0, 3.0], [3200.0, 2.0], [3300.0, 3.0], [3400.0, 3.0], [3500.0, 2.0], [3600.0, 7.0], [3700.0, 3.0], [3800.0, 2.0], [3900.0, 4.0], [4000.0, 1.0], [4200.0, 1.0], [4100.0, 1.0], [4300.0, 4.0], [4400.0, 6.0], [4600.0, 4.0], [4500.0, 2.0], [4700.0, 5.0], [4800.0, 3.0], [4900.0, 6.0], [5000.0, 5.0], [5100.0, 5.0], [5300.0, 2.0], [5200.0, 1.0], [5600.0, 2.0], [5500.0, 1.0], [5400.0, 1.0], [5700.0, 1.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.62000000000002, "minX": 1.7498442E12, "maxY": 50.62000000000002, "series": [{"data": [[1.7498442E12, 50.62000000000002]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7498442E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2224.0, "minX": 1.0, "maxY": 5728.0, "series": [{"data": [[2.0, 5642.0], [3.0, 5188.0], [4.0, 4872.0], [5.0, 5420.0], [6.0, 5519.0], [7.0, 5728.0], [8.0, 5282.0], [10.0, 5289.0], [11.0, 5114.0], [12.0, 5120.0], [13.0, 4746.0], [14.0, 5145.0], [16.0, 4912.5], [17.0, 4998.0], [18.0, 4703.0], [19.0, 5077.0], [20.0, 4642.0], [21.0, 5351.0], [22.0, 4524.0], [23.0, 4922.0], [24.0, 5072.0], [25.0, 4637.0], [26.0, 5054.0], [27.0, 4781.0], [28.0, 4930.0], [29.0, 5146.0], [30.0, 4316.0], [31.0, 4798.0], [33.0, 5066.0], [32.0, 4476.0], [35.0, 4669.0], [34.0, 5043.0], [37.0, 4878.5], [39.0, 4465.0], [38.0, 4408.0], [41.0, 4337.0], [40.0, 4750.0], [42.0, 4309.0], [45.0, 4158.0], [47.0, 4363.0], [46.0, 4589.0], [49.0, 4277.0], [48.0, 4168.0], [51.0, 4468.0], [50.0, 4650.0], [53.0, 3621.0], [52.0, 4445.0], [55.0, 3961.0], [54.0, 3595.0], [57.0, 3684.0], [56.0, 3570.0], [59.0, 3186.0], [58.0, 3086.0], [61.0, 3685.0], [60.0, 3946.0], [63.0, 3823.0], [62.0, 3943.0], [67.0, 3272.0], [66.0, 3715.0], [65.0, 3090.0], [64.0, 3186.0], [71.0, 3463.0], [70.0, 3723.0], [69.0, 3824.0], [68.0, 3690.0], [75.0, 3618.0], [74.0, 2981.0], [73.0, 3690.0], [78.0, 3047.0], [77.0, 3329.0], [76.0, 3345.0], [83.0, 2911.0], [82.0, 2858.0], [81.0, 3487.0], [80.0, 3392.0], [86.0, 3408.0], [85.0, 2805.0], [84.0, 3363.0], [91.0, 3090.0], [90.0, 2997.0], [89.0, 2894.0], [95.0, 2752.0], [94.0, 2382.0], [93.0, 2600.0], [92.0, 2462.0], [99.0, 2598.0], [98.0, 2224.0], [97.0, 2550.5], [100.0, 2562.0], [1.0, 5339.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[50.62000000000002, 4060.119999999999]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 248.33333333333334, "minX": 1.7498442E12, "maxY": 1505.0, "series": [{"data": [[1.7498442E12, 1505.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7498442E12, 248.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7498442E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4060.119999999999, "minX": 1.7498442E12, "maxY": 4060.119999999999, "series": [{"data": [[1.7498442E12, 4060.119999999999]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7498442E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4037.08, "minX": 1.7498442E12, "maxY": 4037.08, "series": [{"data": [[1.7498442E12, 4037.08]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7498442E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 740.27, "minX": 1.7498442E12, "maxY": 740.27, "series": [{"data": [[1.7498442E12, 740.27]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7498442E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2224.0, "minX": 1.7498442E12, "maxY": 5728.0, "series": [{"data": [[1.7498442E12, 5728.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7498442E12, 5145.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7498442E12, 5727.2]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7498442E12, 5416.549999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7498442E12, 2224.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7498442E12, 4087.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7498442E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2580.0, "minX": 8.0, "maxY": 5077.0, "series": [{"data": [[8.0, 2580.0], [38.0, 3354.0], [25.0, 5077.0], [29.0, 4470.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 38.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2572.0, "minX": 8.0, "maxY": 5076.0, "series": [{"data": [[8.0, 2572.0], [38.0, 3354.0], [25.0, 5076.0], [29.0, 4465.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 38.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7498442E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7498442E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7498442E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7498442E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7498442E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7498442E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7498442E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7498442E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7498442E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7498442E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7498442E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7498442E12, "title": "Total Transactions Per Second"}},
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

