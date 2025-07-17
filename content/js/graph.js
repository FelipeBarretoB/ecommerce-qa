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
        data: {"result": {"minY": 133146.0, "minX": 0.0, "maxY": 134049.0, "series": [{"data": [[0.0, 133146.0], [0.1, 133146.0], [0.2, 133146.0], [0.3, 133146.0], [0.4, 133146.0], [0.5, 133146.0], [0.6, 133146.0], [0.7, 133146.0], [0.8, 133146.0], [0.9, 133146.0], [1.0, 133166.0], [1.1, 133166.0], [1.2, 133166.0], [1.3, 133166.0], [1.4, 133166.0], [1.5, 133166.0], [1.6, 133166.0], [1.7, 133166.0], [1.8, 133166.0], [1.9, 133166.0], [2.0, 133182.0], [2.1, 133182.0], [2.2, 133182.0], [2.3, 133182.0], [2.4, 133182.0], [2.5, 133182.0], [2.6, 133182.0], [2.7, 133182.0], [2.8, 133182.0], [2.9, 133182.0], [3.0, 133188.0], [3.1, 133188.0], [3.2, 133188.0], [3.3, 133188.0], [3.4, 133188.0], [3.5, 133188.0], [3.6, 133188.0], [3.7, 133188.0], [3.8, 133188.0], [3.9, 133188.0], [4.0, 133190.0], [4.1, 133190.0], [4.2, 133190.0], [4.3, 133190.0], [4.4, 133190.0], [4.5, 133190.0], [4.6, 133190.0], [4.7, 133190.0], [4.8, 133190.0], [4.9, 133190.0], [5.0, 133207.0], [5.1, 133207.0], [5.2, 133207.0], [5.3, 133207.0], [5.4, 133207.0], [5.5, 133207.0], [5.6, 133207.0], [5.7, 133207.0], [5.8, 133207.0], [5.9, 133207.0], [6.0, 133209.0], [6.1, 133209.0], [6.2, 133209.0], [6.3, 133209.0], [6.4, 133209.0], [6.5, 133209.0], [6.6, 133209.0], [6.7, 133209.0], [6.8, 133209.0], [6.9, 133209.0], [7.0, 133218.0], [7.1, 133218.0], [7.2, 133218.0], [7.3, 133218.0], [7.4, 133218.0], [7.5, 133218.0], [7.6, 133218.0], [7.7, 133218.0], [7.8, 133218.0], [7.9, 133218.0], [8.0, 133228.0], [8.1, 133228.0], [8.2, 133228.0], [8.3, 133228.0], [8.4, 133228.0], [8.5, 133228.0], [8.6, 133228.0], [8.7, 133228.0], [8.8, 133228.0], [8.9, 133228.0], [9.0, 133239.0], [9.1, 133239.0], [9.2, 133239.0], [9.3, 133239.0], [9.4, 133239.0], [9.5, 133239.0], [9.6, 133239.0], [9.7, 133239.0], [9.8, 133239.0], [9.9, 133239.0], [10.0, 133248.0], [10.1, 133248.0], [10.2, 133248.0], [10.3, 133248.0], [10.4, 133248.0], [10.5, 133248.0], [10.6, 133248.0], [10.7, 133248.0], [10.8, 133248.0], [10.9, 133248.0], [11.0, 133257.0], [11.1, 133257.0], [11.2, 133257.0], [11.3, 133257.0], [11.4, 133257.0], [11.5, 133257.0], [11.6, 133257.0], [11.7, 133257.0], [11.8, 133257.0], [11.9, 133257.0], [12.0, 133273.0], [12.1, 133273.0], [12.2, 133273.0], [12.3, 133273.0], [12.4, 133273.0], [12.5, 133273.0], [12.6, 133273.0], [12.7, 133273.0], [12.8, 133273.0], [12.9, 133273.0], [13.0, 133288.0], [13.1, 133288.0], [13.2, 133288.0], [13.3, 133288.0], [13.4, 133288.0], [13.5, 133288.0], [13.6, 133288.0], [13.7, 133288.0], [13.8, 133288.0], [13.9, 133288.0], [14.0, 133292.0], [14.1, 133292.0], [14.2, 133292.0], [14.3, 133292.0], [14.4, 133292.0], [14.5, 133292.0], [14.6, 133292.0], [14.7, 133292.0], [14.8, 133292.0], [14.9, 133292.0], [15.0, 133314.0], [15.1, 133314.0], [15.2, 133314.0], [15.3, 133314.0], [15.4, 133314.0], [15.5, 133314.0], [15.6, 133314.0], [15.7, 133314.0], [15.8, 133314.0], [15.9, 133314.0], [16.0, 133316.0], [16.1, 133316.0], [16.2, 133316.0], [16.3, 133316.0], [16.4, 133316.0], [16.5, 133316.0], [16.6, 133316.0], [16.7, 133316.0], [16.8, 133316.0], [16.9, 133316.0], [17.0, 133320.0], [17.1, 133320.0], [17.2, 133320.0], [17.3, 133320.0], [17.4, 133320.0], [17.5, 133320.0], [17.6, 133320.0], [17.7, 133320.0], [17.8, 133320.0], [17.9, 133320.0], [18.0, 133328.0], [18.1, 133328.0], [18.2, 133328.0], [18.3, 133328.0], [18.4, 133328.0], [18.5, 133328.0], [18.6, 133328.0], [18.7, 133328.0], [18.8, 133328.0], [18.9, 133328.0], [19.0, 133338.0], [19.1, 133338.0], [19.2, 133338.0], [19.3, 133338.0], [19.4, 133338.0], [19.5, 133338.0], [19.6, 133338.0], [19.7, 133338.0], [19.8, 133338.0], [19.9, 133338.0], [20.0, 133347.0], [20.1, 133347.0], [20.2, 133347.0], [20.3, 133347.0], [20.4, 133347.0], [20.5, 133347.0], [20.6, 133347.0], [20.7, 133347.0], [20.8, 133347.0], [20.9, 133347.0], [21.0, 133371.0], [21.1, 133371.0], [21.2, 133371.0], [21.3, 133371.0], [21.4, 133371.0], [21.5, 133371.0], [21.6, 133371.0], [21.7, 133371.0], [21.8, 133371.0], [21.9, 133371.0], [22.0, 133385.0], [22.1, 133385.0], [22.2, 133385.0], [22.3, 133385.0], [22.4, 133385.0], [22.5, 133385.0], [22.6, 133385.0], [22.7, 133385.0], [22.8, 133385.0], [22.9, 133385.0], [23.0, 133388.0], [23.1, 133388.0], [23.2, 133388.0], [23.3, 133388.0], [23.4, 133388.0], [23.5, 133388.0], [23.6, 133388.0], [23.7, 133388.0], [23.8, 133388.0], [23.9, 133388.0], [24.0, 133403.0], [24.1, 133403.0], [24.2, 133403.0], [24.3, 133403.0], [24.4, 133403.0], [24.5, 133403.0], [24.6, 133403.0], [24.7, 133403.0], [24.8, 133403.0], [24.9, 133403.0], [25.0, 133409.0], [25.1, 133409.0], [25.2, 133409.0], [25.3, 133409.0], [25.4, 133409.0], [25.5, 133409.0], [25.6, 133409.0], [25.7, 133409.0], [25.8, 133409.0], [25.9, 133409.0], [26.0, 133415.0], [26.1, 133415.0], [26.2, 133415.0], [26.3, 133415.0], [26.4, 133415.0], [26.5, 133415.0], [26.6, 133415.0], [26.7, 133415.0], [26.8, 133415.0], [26.9, 133415.0], [27.0, 133423.0], [27.1, 133423.0], [27.2, 133423.0], [27.3, 133423.0], [27.4, 133423.0], [27.5, 133423.0], [27.6, 133423.0], [27.7, 133423.0], [27.8, 133423.0], [27.9, 133423.0], [28.0, 133461.0], [28.1, 133461.0], [28.2, 133461.0], [28.3, 133461.0], [28.4, 133461.0], [28.5, 133461.0], [28.6, 133461.0], [28.7, 133461.0], [28.8, 133461.0], [28.9, 133461.0], [29.0, 133469.0], [29.1, 133469.0], [29.2, 133469.0], [29.3, 133469.0], [29.4, 133469.0], [29.5, 133469.0], [29.6, 133469.0], [29.7, 133469.0], [29.8, 133469.0], [29.9, 133469.0], [30.0, 133479.0], [30.1, 133479.0], [30.2, 133479.0], [30.3, 133479.0], [30.4, 133479.0], [30.5, 133479.0], [30.6, 133479.0], [30.7, 133479.0], [30.8, 133479.0], [30.9, 133479.0], [31.0, 133485.0], [31.1, 133485.0], [31.2, 133485.0], [31.3, 133485.0], [31.4, 133485.0], [31.5, 133485.0], [31.6, 133485.0], [31.7, 133485.0], [31.8, 133485.0], [31.9, 133485.0], [32.0, 133494.0], [32.1, 133494.0], [32.2, 133494.0], [32.3, 133494.0], [32.4, 133494.0], [32.5, 133494.0], [32.6, 133494.0], [32.7, 133494.0], [32.8, 133494.0], [32.9, 133494.0], [33.0, 133497.0], [33.1, 133497.0], [33.2, 133497.0], [33.3, 133497.0], [33.4, 133497.0], [33.5, 133497.0], [33.6, 133497.0], [33.7, 133497.0], [33.8, 133497.0], [33.9, 133497.0], [34.0, 133500.0], [34.1, 133500.0], [34.2, 133500.0], [34.3, 133500.0], [34.4, 133500.0], [34.5, 133500.0], [34.6, 133500.0], [34.7, 133500.0], [34.8, 133500.0], [34.9, 133500.0], [35.0, 133514.0], [35.1, 133514.0], [35.2, 133514.0], [35.3, 133514.0], [35.4, 133514.0], [35.5, 133514.0], [35.6, 133514.0], [35.7, 133514.0], [35.8, 133514.0], [35.9, 133514.0], [36.0, 133534.0], [36.1, 133534.0], [36.2, 133534.0], [36.3, 133534.0], [36.4, 133534.0], [36.5, 133534.0], [36.6, 133534.0], [36.7, 133534.0], [36.8, 133534.0], [36.9, 133534.0], [37.0, 133539.0], [37.1, 133539.0], [37.2, 133539.0], [37.3, 133539.0], [37.4, 133539.0], [37.5, 133539.0], [37.6, 133539.0], [37.7, 133539.0], [37.8, 133539.0], [37.9, 133539.0], [38.0, 133540.0], [38.1, 133540.0], [38.2, 133540.0], [38.3, 133540.0], [38.4, 133540.0], [38.5, 133540.0], [38.6, 133540.0], [38.7, 133540.0], [38.8, 133540.0], [38.9, 133540.0], [39.0, 133542.0], [39.1, 133542.0], [39.2, 133542.0], [39.3, 133542.0], [39.4, 133542.0], [39.5, 133542.0], [39.6, 133542.0], [39.7, 133542.0], [39.8, 133542.0], [39.9, 133542.0], [40.0, 133558.0], [40.1, 133558.0], [40.2, 133558.0], [40.3, 133558.0], [40.4, 133558.0], [40.5, 133558.0], [40.6, 133558.0], [40.7, 133558.0], [40.8, 133558.0], [40.9, 133558.0], [41.0, 133577.0], [41.1, 133577.0], [41.2, 133577.0], [41.3, 133577.0], [41.4, 133577.0], [41.5, 133577.0], [41.6, 133577.0], [41.7, 133577.0], [41.8, 133577.0], [41.9, 133577.0], [42.0, 133581.0], [42.1, 133581.0], [42.2, 133581.0], [42.3, 133581.0], [42.4, 133581.0], [42.5, 133581.0], [42.6, 133581.0], [42.7, 133581.0], [42.8, 133581.0], [42.9, 133581.0], [43.0, 133614.0], [43.1, 133614.0], [43.2, 133614.0], [43.3, 133614.0], [43.4, 133614.0], [43.5, 133614.0], [43.6, 133614.0], [43.7, 133614.0], [43.8, 133614.0], [43.9, 133614.0], [44.0, 133619.0], [44.1, 133619.0], [44.2, 133619.0], [44.3, 133619.0], [44.4, 133619.0], [44.5, 133619.0], [44.6, 133619.0], [44.7, 133619.0], [44.8, 133619.0], [44.9, 133619.0], [45.0, 133623.0], [45.1, 133623.0], [45.2, 133623.0], [45.3, 133623.0], [45.4, 133623.0], [45.5, 133623.0], [45.6, 133623.0], [45.7, 133623.0], [45.8, 133623.0], [45.9, 133623.0], [46.0, 133630.0], [46.1, 133630.0], [46.2, 133630.0], [46.3, 133630.0], [46.4, 133630.0], [46.5, 133630.0], [46.6, 133630.0], [46.7, 133630.0], [46.8, 133630.0], [46.9, 133630.0], [47.0, 133637.0], [47.1, 133637.0], [47.2, 133637.0], [47.3, 133637.0], [47.4, 133637.0], [47.5, 133637.0], [47.6, 133637.0], [47.7, 133637.0], [47.8, 133637.0], [47.9, 133637.0], [48.0, 133649.0], [48.1, 133649.0], [48.2, 133649.0], [48.3, 133649.0], [48.4, 133649.0], [48.5, 133649.0], [48.6, 133649.0], [48.7, 133649.0], [48.8, 133649.0], [48.9, 133649.0], [49.0, 133654.0], [49.1, 133654.0], [49.2, 133654.0], [49.3, 133654.0], [49.4, 133654.0], [49.5, 133654.0], [49.6, 133654.0], [49.7, 133654.0], [49.8, 133654.0], [49.9, 133654.0], [50.0, 133662.0], [50.1, 133662.0], [50.2, 133662.0], [50.3, 133662.0], [50.4, 133662.0], [50.5, 133662.0], [50.6, 133662.0], [50.7, 133662.0], [50.8, 133662.0], [50.9, 133662.0], [51.0, 133690.0], [51.1, 133690.0], [51.2, 133690.0], [51.3, 133690.0], [51.4, 133690.0], [51.5, 133690.0], [51.6, 133690.0], [51.7, 133690.0], [51.8, 133690.0], [51.9, 133690.0], [52.0, 133691.0], [52.1, 133691.0], [52.2, 133691.0], [52.3, 133691.0], [52.4, 133691.0], [52.5, 133691.0], [52.6, 133691.0], [52.7, 133691.0], [52.8, 133691.0], [52.9, 133691.0], [53.0, 133701.0], [53.1, 133701.0], [53.2, 133701.0], [53.3, 133701.0], [53.4, 133701.0], [53.5, 133701.0], [53.6, 133701.0], [53.7, 133701.0], [53.8, 133701.0], [53.9, 133701.0], [54.0, 133706.0], [54.1, 133706.0], [54.2, 133706.0], [54.3, 133706.0], [54.4, 133706.0], [54.5, 133706.0], [54.6, 133706.0], [54.7, 133706.0], [54.8, 133706.0], [54.9, 133706.0], [55.0, 133727.0], [55.1, 133727.0], [55.2, 133727.0], [55.3, 133727.0], [55.4, 133727.0], [55.5, 133727.0], [55.6, 133727.0], [55.7, 133727.0], [55.8, 133727.0], [55.9, 133727.0], [56.0, 133734.0], [56.1, 133734.0], [56.2, 133734.0], [56.3, 133734.0], [56.4, 133734.0], [56.5, 133734.0], [56.6, 133734.0], [56.7, 133734.0], [56.8, 133734.0], [56.9, 133734.0], [57.0, 133736.0], [57.1, 133736.0], [57.2, 133736.0], [57.3, 133736.0], [57.4, 133736.0], [57.5, 133736.0], [57.6, 133736.0], [57.7, 133736.0], [57.8, 133736.0], [57.9, 133736.0], [58.0, 133741.0], [58.1, 133741.0], [58.2, 133741.0], [58.3, 133741.0], [58.4, 133741.0], [58.5, 133741.0], [58.6, 133741.0], [58.7, 133741.0], [58.8, 133741.0], [58.9, 133741.0], [59.0, 133748.0], [59.1, 133748.0], [59.2, 133748.0], [59.3, 133748.0], [59.4, 133748.0], [59.5, 133748.0], [59.6, 133748.0], [59.7, 133748.0], [59.8, 133748.0], [59.9, 133748.0], [60.0, 133749.0], [60.1, 133749.0], [60.2, 133749.0], [60.3, 133749.0], [60.4, 133749.0], [60.5, 133749.0], [60.6, 133749.0], [60.7, 133749.0], [60.8, 133749.0], [60.9, 133749.0], [61.0, 133794.0], [61.1, 133794.0], [61.2, 133794.0], [61.3, 133794.0], [61.4, 133794.0], [61.5, 133794.0], [61.6, 133794.0], [61.7, 133794.0], [61.8, 133794.0], [61.9, 133794.0], [62.0, 133800.0], [62.1, 133800.0], [62.2, 133800.0], [62.3, 133800.0], [62.4, 133800.0], [62.5, 133800.0], [62.6, 133800.0], [62.7, 133800.0], [62.8, 133800.0], [62.9, 133800.0], [63.0, 133808.0], [63.1, 133808.0], [63.2, 133808.0], [63.3, 133808.0], [63.4, 133808.0], [63.5, 133808.0], [63.6, 133808.0], [63.7, 133808.0], [63.8, 133808.0], [63.9, 133808.0], [64.0, 133811.0], [64.1, 133811.0], [64.2, 133811.0], [64.3, 133811.0], [64.4, 133811.0], [64.5, 133811.0], [64.6, 133811.0], [64.7, 133811.0], [64.8, 133811.0], [64.9, 133811.0], [65.0, 133818.0], [65.1, 133818.0], [65.2, 133818.0], [65.3, 133818.0], [65.4, 133818.0], [65.5, 133818.0], [65.6, 133818.0], [65.7, 133818.0], [65.8, 133818.0], [65.9, 133818.0], [66.0, 133819.0], [66.1, 133819.0], [66.2, 133819.0], [66.3, 133819.0], [66.4, 133819.0], [66.5, 133819.0], [66.6, 133819.0], [66.7, 133819.0], [66.8, 133819.0], [66.9, 133819.0], [67.0, 133829.0], [67.1, 133829.0], [67.2, 133829.0], [67.3, 133829.0], [67.4, 133829.0], [67.5, 133829.0], [67.6, 133829.0], [67.7, 133829.0], [67.8, 133829.0], [67.9, 133829.0], [68.0, 133832.0], [68.1, 133832.0], [68.2, 133832.0], [68.3, 133832.0], [68.4, 133832.0], [68.5, 133832.0], [68.6, 133832.0], [68.7, 133832.0], [68.8, 133832.0], [68.9, 133832.0], [69.0, 133847.0], [69.1, 133847.0], [69.2, 133847.0], [69.3, 133847.0], [69.4, 133847.0], [69.5, 133847.0], [69.6, 133847.0], [69.7, 133847.0], [69.8, 133847.0], [69.9, 133847.0], [70.0, 133856.0], [70.1, 133856.0], [70.2, 133856.0], [70.3, 133856.0], [70.4, 133856.0], [70.5, 133856.0], [70.6, 133856.0], [70.7, 133856.0], [70.8, 133856.0], [70.9, 133856.0], [71.0, 133874.0], [71.1, 133874.0], [71.2, 133874.0], [71.3, 133874.0], [71.4, 133874.0], [71.5, 133874.0], [71.6, 133874.0], [71.7, 133874.0], [71.8, 133874.0], [71.9, 133874.0], [72.0, 133878.0], [72.1, 133878.0], [72.2, 133878.0], [72.3, 133878.0], [72.4, 133878.0], [72.5, 133878.0], [72.6, 133878.0], [72.7, 133878.0], [72.8, 133878.0], [72.9, 133878.0], [73.0, 133885.0], [73.1, 133885.0], [73.2, 133885.0], [73.3, 133885.0], [73.4, 133885.0], [73.5, 133885.0], [73.6, 133885.0], [73.7, 133885.0], [73.8, 133885.0], [73.9, 133885.0], [74.0, 133896.0], [74.1, 133896.0], [74.2, 133896.0], [74.3, 133896.0], [74.4, 133896.0], [74.5, 133896.0], [74.6, 133896.0], [74.7, 133896.0], [74.8, 133896.0], [74.9, 133896.0], [75.0, 133898.0], [75.1, 133898.0], [75.2, 133898.0], [75.3, 133898.0], [75.4, 133898.0], [75.5, 133898.0], [75.6, 133898.0], [75.7, 133898.0], [75.8, 133898.0], [75.9, 133898.0], [76.0, 133913.0], [76.1, 133913.0], [76.2, 133913.0], [76.3, 133913.0], [76.4, 133913.0], [76.5, 133913.0], [76.6, 133913.0], [76.7, 133913.0], [76.8, 133913.0], [76.9, 133913.0], [77.0, 133937.0], [77.1, 133937.0], [77.2, 133937.0], [77.3, 133937.0], [77.4, 133937.0], [77.5, 133937.0], [77.6, 133937.0], [77.7, 133937.0], [77.8, 133937.0], [77.9, 133937.0], [78.0, 133948.0], [78.1, 133948.0], [78.2, 133948.0], [78.3, 133948.0], [78.4, 133948.0], [78.5, 133948.0], [78.6, 133948.0], [78.7, 133948.0], [78.8, 133948.0], [78.9, 133948.0], [79.0, 133960.0], [79.1, 133960.0], [79.2, 133960.0], [79.3, 133960.0], [79.4, 133960.0], [79.5, 133960.0], [79.6, 133960.0], [79.7, 133960.0], [79.8, 133960.0], [79.9, 133960.0], [80.0, 133972.0], [80.1, 133972.0], [80.2, 133972.0], [80.3, 133972.0], [80.4, 133972.0], [80.5, 133972.0], [80.6, 133972.0], [80.7, 133972.0], [80.8, 133972.0], [80.9, 133972.0], [81.0, 133987.0], [81.1, 133987.0], [81.2, 133987.0], [81.3, 133987.0], [81.4, 133987.0], [81.5, 133987.0], [81.6, 133987.0], [81.7, 133987.0], [81.8, 133987.0], [81.9, 133987.0], [82.0, 133993.0], [82.1, 133993.0], [82.2, 133993.0], [82.3, 133993.0], [82.4, 133993.0], [82.5, 133993.0], [82.6, 133993.0], [82.7, 133993.0], [82.8, 133993.0], [82.9, 133993.0], [83.0, 133997.0], [83.1, 133997.0], [83.2, 133997.0], [83.3, 133997.0], [83.4, 133997.0], [83.5, 133997.0], [83.6, 133997.0], [83.7, 133997.0], [83.8, 133997.0], [83.9, 133997.0], [84.0, 133999.0], [84.1, 133999.0], [84.2, 133999.0], [84.3, 133999.0], [84.4, 133999.0], [84.5, 133999.0], [84.6, 133999.0], [84.7, 133999.0], [84.8, 133999.0], [84.9, 133999.0], [85.0, 134000.0], [85.1, 134000.0], [85.2, 134000.0], [85.3, 134000.0], [85.4, 134000.0], [85.5, 134000.0], [85.6, 134000.0], [85.7, 134000.0], [85.8, 134000.0], [85.9, 134000.0], [86.0, 134014.0], [86.1, 134014.0], [86.2, 134014.0], [86.3, 134014.0], [86.4, 134014.0], [86.5, 134014.0], [86.6, 134014.0], [86.7, 134014.0], [86.8, 134014.0], [86.9, 134014.0], [87.0, 134018.0], [87.1, 134018.0], [87.2, 134018.0], [87.3, 134018.0], [87.4, 134018.0], [87.5, 134018.0], [87.6, 134018.0], [87.7, 134018.0], [87.8, 134018.0], [87.9, 134018.0], [88.0, 134019.0], [88.1, 134019.0], [88.2, 134019.0], [88.3, 134019.0], [88.4, 134019.0], [88.5, 134019.0], [88.6, 134019.0], [88.7, 134019.0], [88.8, 134019.0], [88.9, 134019.0], [89.0, 134020.0], [89.1, 134020.0], [89.2, 134020.0], [89.3, 134020.0], [89.4, 134020.0], [89.5, 134020.0], [89.6, 134020.0], [89.7, 134020.0], [89.8, 134020.0], [89.9, 134020.0], [90.0, 134020.0], [90.1, 134020.0], [90.2, 134020.0], [90.3, 134020.0], [90.4, 134020.0], [90.5, 134020.0], [90.6, 134020.0], [90.7, 134020.0], [90.8, 134020.0], [90.9, 134020.0], [91.0, 134023.0], [91.1, 134023.0], [91.2, 134023.0], [91.3, 134023.0], [91.4, 134023.0], [91.5, 134023.0], [91.6, 134023.0], [91.7, 134023.0], [91.8, 134023.0], [91.9, 134023.0], [92.0, 134027.0], [92.1, 134027.0], [92.2, 134027.0], [92.3, 134027.0], [92.4, 134027.0], [92.5, 134027.0], [92.6, 134027.0], [92.7, 134027.0], [92.8, 134027.0], [92.9, 134027.0], [93.0, 134030.0], [93.1, 134030.0], [93.2, 134030.0], [93.3, 134030.0], [93.4, 134030.0], [93.5, 134030.0], [93.6, 134030.0], [93.7, 134030.0], [93.8, 134030.0], [93.9, 134030.0], [94.0, 134034.0], [94.1, 134034.0], [94.2, 134034.0], [94.3, 134034.0], [94.4, 134034.0], [94.5, 134034.0], [94.6, 134034.0], [94.7, 134034.0], [94.8, 134034.0], [94.9, 134034.0], [95.0, 134040.0], [95.1, 134040.0], [95.2, 134040.0], [95.3, 134040.0], [95.4, 134040.0], [95.5, 134040.0], [95.6, 134040.0], [95.7, 134040.0], [95.8, 134040.0], [95.9, 134040.0], [96.0, 134043.0], [96.1, 134043.0], [96.2, 134043.0], [96.3, 134043.0], [96.4, 134043.0], [96.5, 134043.0], [96.6, 134043.0], [96.7, 134043.0], [96.8, 134043.0], [96.9, 134043.0], [97.0, 134044.0], [97.1, 134044.0], [97.2, 134044.0], [97.3, 134044.0], [97.4, 134044.0], [97.5, 134044.0], [97.6, 134044.0], [97.7, 134044.0], [97.8, 134044.0], [97.9, 134044.0], [98.0, 134049.0], [98.1, 134049.0], [98.2, 134049.0], [98.3, 134049.0], [98.4, 134049.0], [98.5, 134049.0], [98.6, 134049.0], [98.7, 134049.0], [98.8, 134049.0], [98.9, 134049.0], [99.0, 134049.0], [99.1, 134049.0], [99.2, 134049.0], [99.3, 134049.0], [99.4, 134049.0], [99.5, 134049.0], [99.6, 134049.0], [99.7, 134049.0], [99.8, 134049.0], [99.9, 134049.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 133100.0, "maxY": 15.0, "series": [{"data": [[133800.0, 14.0], [133200.0, 10.0], [133400.0, 10.0], [134000.0, 15.0], [133600.0, 10.0], [133300.0, 9.0], [133100.0, 5.0], [133700.0, 9.0], [133900.0, 9.0], [133500.0, 9.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 134000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 53.81, "minX": 1.75272288E12, "maxY": 53.81, "series": [{"data": [[1.75272288E12, 53.81]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75272288E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 133146.0, "minX": 1.0, "maxY": 134049.0, "series": [{"data": [[3.0, 133287.5], [4.0, 133257.0], [5.0, 133856.0], [6.0, 133146.0], [7.0, 133885.0], [9.0, 134019.5], [10.0, 133997.0], [12.0, 133693.0], [13.0, 133209.0], [14.0, 133937.0], [16.0, 133808.0], [17.0, 133288.0], [18.0, 134020.0], [19.0, 133633.0], [22.0, 133874.0], [23.0, 133614.0], [25.0, 133794.0], [26.0, 133657.0], [27.0, 133993.0], [29.0, 133800.0], [30.0, 133701.0], [31.0, 133795.0], [33.0, 133811.0], [35.0, 133461.0], [37.0, 133469.0], [36.0, 133786.0], [38.0, 133829.0], [41.0, 134049.0], [40.0, 133713.5], [43.0, 133888.0], [45.0, 133485.0], [44.0, 133896.0], [47.0, 133741.0], [46.0, 133734.0], [49.0, 133494.0], [48.0, 134044.0], [51.0, 133500.0], [50.0, 133972.0], [53.0, 134000.0], [52.0, 134043.0], [55.0, 133844.5], [62.0, 133568.0], [67.0, 133413.0], [66.0, 133629.0], [64.0, 133583.75], [70.0, 133422.0], [68.0, 133403.0], [75.0, 133581.0], [72.0, 133456.5], [82.0, 133186.5], [81.0, 133762.0], [80.0, 133617.4], [87.0, 134014.0], [84.0, 133316.0], [91.0, 133239.0], [90.0, 133913.0], [89.0, 133385.0], [94.0, 133273.0], [99.0, 133832.0], [96.0, 133423.0], [100.0, 133575.25], [1.0, 133987.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[53.81, 133649.5]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75272288E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75272288E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75272288E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75272288E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133649.5, "minX": 1.75272288E12, "maxY": 133649.5, "series": [{"data": [[1.75272288E12, 133649.5]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75272288E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75272288E12, "maxY": 4.9E-324, "series": [{"data": [[1.75272288E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75272288E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 133633.93, "minX": 1.75272288E12, "maxY": 133633.93, "series": [{"data": [[1.75272288E12, 133633.93]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75272288E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 133658.0, "minX": 100.0, "maxY": 133658.0, "series": [{"data": [[100.0, 133658.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75272276E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75272276E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75272276E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75272288E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75272288E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75272288E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75272288E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75272288E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75272288E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75272288E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75272288E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75272288E12, "title": "Total Transactions Per Second"}},
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

