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
        data: {"result": {"minY": 132395.0, "minX": 0.0, "maxY": 136492.0, "series": [{"data": [[0.0, 132395.0], [0.1, 132395.0], [0.2, 132395.0], [0.3, 132395.0], [0.4, 132395.0], [0.5, 132395.0], [0.6, 132395.0], [0.7, 132395.0], [0.8, 132395.0], [0.9, 132395.0], [1.0, 132410.0], [1.1, 132410.0], [1.2, 132410.0], [1.3, 132410.0], [1.4, 132410.0], [1.5, 132410.0], [1.6, 132410.0], [1.7, 132410.0], [1.8, 132410.0], [1.9, 132410.0], [2.0, 132414.0], [2.1, 132414.0], [2.2, 132414.0], [2.3, 132414.0], [2.4, 132414.0], [2.5, 132414.0], [2.6, 132414.0], [2.7, 132414.0], [2.8, 132414.0], [2.9, 132414.0], [3.0, 132425.0], [3.1, 132425.0], [3.2, 132425.0], [3.3, 132425.0], [3.4, 132425.0], [3.5, 132425.0], [3.6, 132425.0], [3.7, 132425.0], [3.8, 132425.0], [3.9, 132425.0], [4.0, 132433.0], [4.1, 132433.0], [4.2, 132433.0], [4.3, 132433.0], [4.4, 132433.0], [4.5, 132433.0], [4.6, 132433.0], [4.7, 132433.0], [4.8, 132433.0], [4.9, 132433.0], [5.0, 132450.0], [5.1, 132450.0], [5.2, 132450.0], [5.3, 132450.0], [5.4, 132450.0], [5.5, 132450.0], [5.6, 132450.0], [5.7, 132450.0], [5.8, 132450.0], [5.9, 132450.0], [6.0, 132455.0], [6.1, 132455.0], [6.2, 132455.0], [6.3, 132455.0], [6.4, 132455.0], [6.5, 132455.0], [6.6, 132455.0], [6.7, 132455.0], [6.8, 132455.0], [6.9, 132455.0], [7.0, 132463.0], [7.1, 132463.0], [7.2, 132463.0], [7.3, 132463.0], [7.4, 132463.0], [7.5, 132463.0], [7.6, 132463.0], [7.7, 132463.0], [7.8, 132463.0], [7.9, 132463.0], [8.0, 132474.0], [8.1, 132474.0], [8.2, 132474.0], [8.3, 132474.0], [8.4, 132474.0], [8.5, 132474.0], [8.6, 132474.0], [8.7, 132474.0], [8.8, 132474.0], [8.9, 132474.0], [9.0, 132485.0], [9.1, 132485.0], [9.2, 132485.0], [9.3, 132485.0], [9.4, 132485.0], [9.5, 132485.0], [9.6, 132485.0], [9.7, 132485.0], [9.8, 132485.0], [9.9, 132485.0], [10.0, 132499.0], [10.1, 132499.0], [10.2, 132499.0], [10.3, 132499.0], [10.4, 132499.0], [10.5, 132499.0], [10.6, 132499.0], [10.7, 132499.0], [10.8, 132499.0], [10.9, 132499.0], [11.0, 132510.0], [11.1, 132510.0], [11.2, 132510.0], [11.3, 132510.0], [11.4, 132510.0], [11.5, 132510.0], [11.6, 132510.0], [11.7, 132510.0], [11.8, 132510.0], [11.9, 132510.0], [12.0, 132520.0], [12.1, 132520.0], [12.2, 132520.0], [12.3, 132520.0], [12.4, 132520.0], [12.5, 132520.0], [12.6, 132520.0], [12.7, 132520.0], [12.8, 132520.0], [12.9, 132520.0], [13.0, 132530.0], [13.1, 132530.0], [13.2, 132530.0], [13.3, 132530.0], [13.4, 132530.0], [13.5, 132530.0], [13.6, 132530.0], [13.7, 132530.0], [13.8, 132530.0], [13.9, 132530.0], [14.0, 132542.0], [14.1, 132542.0], [14.2, 132542.0], [14.3, 132542.0], [14.4, 132542.0], [14.5, 132542.0], [14.6, 132542.0], [14.7, 132542.0], [14.8, 132542.0], [14.9, 132542.0], [15.0, 132554.0], [15.1, 132554.0], [15.2, 132554.0], [15.3, 132554.0], [15.4, 132554.0], [15.5, 132554.0], [15.6, 132554.0], [15.7, 132554.0], [15.8, 132554.0], [15.9, 132554.0], [16.0, 132562.0], [16.1, 132562.0], [16.2, 132562.0], [16.3, 132562.0], [16.4, 132562.0], [16.5, 132562.0], [16.6, 132562.0], [16.7, 132562.0], [16.8, 132562.0], [16.9, 132562.0], [17.0, 132565.0], [17.1, 132565.0], [17.2, 132565.0], [17.3, 132565.0], [17.4, 132565.0], [17.5, 132565.0], [17.6, 132565.0], [17.7, 132565.0], [17.8, 132565.0], [17.9, 132565.0], [18.0, 132583.0], [18.1, 132583.0], [18.2, 132583.0], [18.3, 132583.0], [18.4, 132583.0], [18.5, 132583.0], [18.6, 132583.0], [18.7, 132583.0], [18.8, 132583.0], [18.9, 132583.0], [19.0, 132583.0], [19.1, 132583.0], [19.2, 132583.0], [19.3, 132583.0], [19.4, 132583.0], [19.5, 132583.0], [19.6, 132583.0], [19.7, 132583.0], [19.8, 132583.0], [19.9, 132583.0], [20.0, 132595.0], [20.1, 132595.0], [20.2, 132595.0], [20.3, 132595.0], [20.4, 132595.0], [20.5, 132595.0], [20.6, 132595.0], [20.7, 132595.0], [20.8, 132595.0], [20.9, 132595.0], [21.0, 132605.0], [21.1, 132605.0], [21.2, 132605.0], [21.3, 132605.0], [21.4, 132605.0], [21.5, 132605.0], [21.6, 132605.0], [21.7, 132605.0], [21.8, 132605.0], [21.9, 132605.0], [22.0, 132615.0], [22.1, 132615.0], [22.2, 132615.0], [22.3, 132615.0], [22.4, 132615.0], [22.5, 132615.0], [22.6, 132615.0], [22.7, 132615.0], [22.8, 132615.0], [22.9, 132615.0], [23.0, 132628.0], [23.1, 132628.0], [23.2, 132628.0], [23.3, 132628.0], [23.4, 132628.0], [23.5, 132628.0], [23.6, 132628.0], [23.7, 132628.0], [23.8, 132628.0], [23.9, 132628.0], [24.0, 132636.0], [24.1, 132636.0], [24.2, 132636.0], [24.3, 132636.0], [24.4, 132636.0], [24.5, 132636.0], [24.6, 132636.0], [24.7, 132636.0], [24.8, 132636.0], [24.9, 132636.0], [25.0, 132648.0], [25.1, 132648.0], [25.2, 132648.0], [25.3, 132648.0], [25.4, 132648.0], [25.5, 132648.0], [25.6, 132648.0], [25.7, 132648.0], [25.8, 132648.0], [25.9, 132648.0], [26.0, 132663.0], [26.1, 132663.0], [26.2, 132663.0], [26.3, 132663.0], [26.4, 132663.0], [26.5, 132663.0], [26.6, 132663.0], [26.7, 132663.0], [26.8, 132663.0], [26.9, 132663.0], [27.0, 132672.0], [27.1, 132672.0], [27.2, 132672.0], [27.3, 132672.0], [27.4, 132672.0], [27.5, 132672.0], [27.6, 132672.0], [27.7, 132672.0], [27.8, 132672.0], [27.9, 132672.0], [28.0, 132674.0], [28.1, 132674.0], [28.2, 132674.0], [28.3, 132674.0], [28.4, 132674.0], [28.5, 132674.0], [28.6, 132674.0], [28.7, 132674.0], [28.8, 132674.0], [28.9, 132674.0], [29.0, 132683.0], [29.1, 132683.0], [29.2, 132683.0], [29.3, 132683.0], [29.4, 132683.0], [29.5, 132683.0], [29.6, 132683.0], [29.7, 132683.0], [29.8, 132683.0], [29.9, 132683.0], [30.0, 132699.0], [30.1, 132699.0], [30.2, 132699.0], [30.3, 132699.0], [30.4, 132699.0], [30.5, 132699.0], [30.6, 132699.0], [30.7, 132699.0], [30.8, 132699.0], [30.9, 132699.0], [31.0, 132704.0], [31.1, 132704.0], [31.2, 132704.0], [31.3, 132704.0], [31.4, 132704.0], [31.5, 132704.0], [31.6, 132704.0], [31.7, 132704.0], [31.8, 132704.0], [31.9, 132704.0], [32.0, 132723.0], [32.1, 132723.0], [32.2, 132723.0], [32.3, 132723.0], [32.4, 132723.0], [32.5, 132723.0], [32.6, 132723.0], [32.7, 132723.0], [32.8, 132723.0], [32.9, 132723.0], [33.0, 132725.0], [33.1, 132725.0], [33.2, 132725.0], [33.3, 132725.0], [33.4, 132725.0], [33.5, 132725.0], [33.6, 132725.0], [33.7, 132725.0], [33.8, 132725.0], [33.9, 132725.0], [34.0, 132734.0], [34.1, 132734.0], [34.2, 132734.0], [34.3, 132734.0], [34.4, 132734.0], [34.5, 132734.0], [34.6, 132734.0], [34.7, 132734.0], [34.8, 132734.0], [34.9, 132734.0], [35.0, 132744.0], [35.1, 132744.0], [35.2, 132744.0], [35.3, 132744.0], [35.4, 132744.0], [35.5, 132744.0], [35.6, 132744.0], [35.7, 132744.0], [35.8, 132744.0], [35.9, 132744.0], [36.0, 132765.0], [36.1, 132765.0], [36.2, 132765.0], [36.3, 132765.0], [36.4, 132765.0], [36.5, 132765.0], [36.6, 132765.0], [36.7, 132765.0], [36.8, 132765.0], [36.9, 132765.0], [37.0, 132765.0], [37.1, 132765.0], [37.2, 132765.0], [37.3, 132765.0], [37.4, 132765.0], [37.5, 132765.0], [37.6, 132765.0], [37.7, 132765.0], [37.8, 132765.0], [37.9, 132765.0], [38.0, 132778.0], [38.1, 132778.0], [38.2, 132778.0], [38.3, 132778.0], [38.4, 132778.0], [38.5, 132778.0], [38.6, 132778.0], [38.7, 132778.0], [38.8, 132778.0], [38.9, 132778.0], [39.0, 132784.0], [39.1, 132784.0], [39.2, 132784.0], [39.3, 132784.0], [39.4, 132784.0], [39.5, 132784.0], [39.6, 132784.0], [39.7, 132784.0], [39.8, 132784.0], [39.9, 132784.0], [40.0, 132795.0], [40.1, 132795.0], [40.2, 132795.0], [40.3, 132795.0], [40.4, 132795.0], [40.5, 132795.0], [40.6, 132795.0], [40.7, 132795.0], [40.8, 132795.0], [40.9, 132795.0], [41.0, 132803.0], [41.1, 132803.0], [41.2, 132803.0], [41.3, 132803.0], [41.4, 132803.0], [41.5, 132803.0], [41.6, 132803.0], [41.7, 132803.0], [41.8, 132803.0], [41.9, 132803.0], [42.0, 132814.0], [42.1, 132814.0], [42.2, 132814.0], [42.3, 132814.0], [42.4, 132814.0], [42.5, 132814.0], [42.6, 132814.0], [42.7, 132814.0], [42.8, 132814.0], [42.9, 132814.0], [43.0, 132824.0], [43.1, 132824.0], [43.2, 132824.0], [43.3, 132824.0], [43.4, 132824.0], [43.5, 132824.0], [43.6, 132824.0], [43.7, 132824.0], [43.8, 132824.0], [43.9, 132824.0], [44.0, 132834.0], [44.1, 132834.0], [44.2, 132834.0], [44.3, 132834.0], [44.4, 132834.0], [44.5, 132834.0], [44.6, 132834.0], [44.7, 132834.0], [44.8, 132834.0], [44.9, 132834.0], [45.0, 132844.0], [45.1, 132844.0], [45.2, 132844.0], [45.3, 132844.0], [45.4, 132844.0], [45.5, 132844.0], [45.6, 132844.0], [45.7, 132844.0], [45.8, 132844.0], [45.9, 132844.0], [46.0, 132845.0], [46.1, 132845.0], [46.2, 132845.0], [46.3, 132845.0], [46.4, 132845.0], [46.5, 132845.0], [46.6, 132845.0], [46.7, 132845.0], [46.8, 132845.0], [46.9, 132845.0], [47.0, 132845.0], [47.1, 132845.0], [47.2, 132845.0], [47.3, 132845.0], [47.4, 132845.0], [47.5, 132845.0], [47.6, 132845.0], [47.7, 132845.0], [47.8, 132845.0], [47.9, 132845.0], [48.0, 132845.0], [48.1, 132845.0], [48.2, 132845.0], [48.3, 132845.0], [48.4, 132845.0], [48.5, 132845.0], [48.6, 132845.0], [48.7, 132845.0], [48.8, 132845.0], [48.9, 132845.0], [49.0, 132845.0], [49.1, 132845.0], [49.2, 132845.0], [49.3, 132845.0], [49.4, 132845.0], [49.5, 132845.0], [49.6, 132845.0], [49.7, 132845.0], [49.8, 132845.0], [49.9, 132845.0], [50.0, 132845.0], [50.1, 132845.0], [50.2, 132845.0], [50.3, 132845.0], [50.4, 132845.0], [50.5, 132845.0], [50.6, 132845.0], [50.7, 132845.0], [50.8, 132845.0], [50.9, 132845.0], [51.0, 132846.0], [51.1, 132846.0], [51.2, 132846.0], [51.3, 132846.0], [51.4, 132846.0], [51.5, 132846.0], [51.6, 132846.0], [51.7, 132846.0], [51.8, 132846.0], [51.9, 132846.0], [52.0, 132848.0], [52.1, 132848.0], [52.2, 132848.0], [52.3, 132848.0], [52.4, 132848.0], [52.5, 132848.0], [52.6, 132848.0], [52.7, 132848.0], [52.8, 132848.0], [52.9, 132848.0], [53.0, 132849.0], [53.1, 132849.0], [53.2, 132849.0], [53.3, 132849.0], [53.4, 132849.0], [53.5, 132849.0], [53.6, 132849.0], [53.7, 132849.0], [53.8, 132849.0], [53.9, 132849.0], [54.0, 132850.0], [54.1, 132850.0], [54.2, 132850.0], [54.3, 132850.0], [54.4, 132850.0], [54.5, 132850.0], [54.6, 132850.0], [54.7, 132850.0], [54.8, 132850.0], [54.9, 132850.0], [55.0, 132853.0], [55.1, 132853.0], [55.2, 132853.0], [55.3, 132853.0], [55.4, 132853.0], [55.5, 132853.0], [55.6, 132853.0], [55.7, 132853.0], [55.8, 132853.0], [55.9, 132853.0], [56.0, 132855.0], [56.1, 132855.0], [56.2, 132855.0], [56.3, 132855.0], [56.4, 132855.0], [56.5, 132855.0], [56.6, 132855.0], [56.7, 132855.0], [56.8, 132855.0], [56.9, 132855.0], [57.0, 132856.0], [57.1, 132856.0], [57.2, 132856.0], [57.3, 132856.0], [57.4, 132856.0], [57.5, 132856.0], [57.6, 132856.0], [57.7, 132856.0], [57.8, 132856.0], [57.9, 132856.0], [58.0, 136075.0], [58.1, 136075.0], [58.2, 136075.0], [58.3, 136075.0], [58.4, 136075.0], [58.5, 136075.0], [58.6, 136075.0], [58.7, 136075.0], [58.8, 136075.0], [58.9, 136075.0], [59.0, 136084.0], [59.1, 136084.0], [59.2, 136084.0], [59.3, 136084.0], [59.4, 136084.0], [59.5, 136084.0], [59.6, 136084.0], [59.7, 136084.0], [59.8, 136084.0], [59.9, 136084.0], [60.0, 136098.0], [60.1, 136098.0], [60.2, 136098.0], [60.3, 136098.0], [60.4, 136098.0], [60.5, 136098.0], [60.6, 136098.0], [60.7, 136098.0], [60.8, 136098.0], [60.9, 136098.0], [61.0, 136105.0], [61.1, 136105.0], [61.2, 136105.0], [61.3, 136105.0], [61.4, 136105.0], [61.5, 136105.0], [61.6, 136105.0], [61.7, 136105.0], [61.8, 136105.0], [61.9, 136105.0], [62.0, 136116.0], [62.1, 136116.0], [62.2, 136116.0], [62.3, 136116.0], [62.4, 136116.0], [62.5, 136116.0], [62.6, 136116.0], [62.7, 136116.0], [62.8, 136116.0], [62.9, 136116.0], [63.0, 136126.0], [63.1, 136126.0], [63.2, 136126.0], [63.3, 136126.0], [63.4, 136126.0], [63.5, 136126.0], [63.6, 136126.0], [63.7, 136126.0], [63.8, 136126.0], [63.9, 136126.0], [64.0, 136137.0], [64.1, 136137.0], [64.2, 136137.0], [64.3, 136137.0], [64.4, 136137.0], [64.5, 136137.0], [64.6, 136137.0], [64.7, 136137.0], [64.8, 136137.0], [64.9, 136137.0], [65.0, 136153.0], [65.1, 136153.0], [65.2, 136153.0], [65.3, 136153.0], [65.4, 136153.0], [65.5, 136153.0], [65.6, 136153.0], [65.7, 136153.0], [65.8, 136153.0], [65.9, 136153.0], [66.0, 136157.0], [66.1, 136157.0], [66.2, 136157.0], [66.3, 136157.0], [66.4, 136157.0], [66.5, 136157.0], [66.6, 136157.0], [66.7, 136157.0], [66.8, 136157.0], [66.9, 136157.0], [67.0, 136166.0], [67.1, 136166.0], [67.2, 136166.0], [67.3, 136166.0], [67.4, 136166.0], [67.5, 136166.0], [67.6, 136166.0], [67.7, 136166.0], [67.8, 136166.0], [67.9, 136166.0], [68.0, 136182.0], [68.1, 136182.0], [68.2, 136182.0], [68.3, 136182.0], [68.4, 136182.0], [68.5, 136182.0], [68.6, 136182.0], [68.7, 136182.0], [68.8, 136182.0], [68.9, 136182.0], [69.0, 136187.0], [69.1, 136187.0], [69.2, 136187.0], [69.3, 136187.0], [69.4, 136187.0], [69.5, 136187.0], [69.6, 136187.0], [69.7, 136187.0], [69.8, 136187.0], [69.9, 136187.0], [70.0, 136195.0], [70.1, 136195.0], [70.2, 136195.0], [70.3, 136195.0], [70.4, 136195.0], [70.5, 136195.0], [70.6, 136195.0], [70.7, 136195.0], [70.8, 136195.0], [70.9, 136195.0], [71.0, 136204.0], [71.1, 136204.0], [71.2, 136204.0], [71.3, 136204.0], [71.4, 136204.0], [71.5, 136204.0], [71.6, 136204.0], [71.7, 136204.0], [71.8, 136204.0], [71.9, 136204.0], [72.0, 136222.0], [72.1, 136222.0], [72.2, 136222.0], [72.3, 136222.0], [72.4, 136222.0], [72.5, 136222.0], [72.6, 136222.0], [72.7, 136222.0], [72.8, 136222.0], [72.9, 136222.0], [73.0, 136223.0], [73.1, 136223.0], [73.2, 136223.0], [73.3, 136223.0], [73.4, 136223.0], [73.5, 136223.0], [73.6, 136223.0], [73.7, 136223.0], [73.8, 136223.0], [73.9, 136223.0], [74.0, 136242.0], [74.1, 136242.0], [74.2, 136242.0], [74.3, 136242.0], [74.4, 136242.0], [74.5, 136242.0], [74.6, 136242.0], [74.7, 136242.0], [74.8, 136242.0], [74.9, 136242.0], [75.0, 136243.0], [75.1, 136243.0], [75.2, 136243.0], [75.3, 136243.0], [75.4, 136243.0], [75.5, 136243.0], [75.6, 136243.0], [75.7, 136243.0], [75.8, 136243.0], [75.9, 136243.0], [76.0, 136252.0], [76.1, 136252.0], [76.2, 136252.0], [76.3, 136252.0], [76.4, 136252.0], [76.5, 136252.0], [76.6, 136252.0], [76.7, 136252.0], [76.8, 136252.0], [76.9, 136252.0], [77.0, 136262.0], [77.1, 136262.0], [77.2, 136262.0], [77.3, 136262.0], [77.4, 136262.0], [77.5, 136262.0], [77.6, 136262.0], [77.7, 136262.0], [77.8, 136262.0], [77.9, 136262.0], [78.0, 136272.0], [78.1, 136272.0], [78.2, 136272.0], [78.3, 136272.0], [78.4, 136272.0], [78.5, 136272.0], [78.6, 136272.0], [78.7, 136272.0], [78.8, 136272.0], [78.9, 136272.0], [79.0, 136283.0], [79.1, 136283.0], [79.2, 136283.0], [79.3, 136283.0], [79.4, 136283.0], [79.5, 136283.0], [79.6, 136283.0], [79.7, 136283.0], [79.8, 136283.0], [79.9, 136283.0], [80.0, 136301.0], [80.1, 136301.0], [80.2, 136301.0], [80.3, 136301.0], [80.4, 136301.0], [80.5, 136301.0], [80.6, 136301.0], [80.7, 136301.0], [80.8, 136301.0], [80.9, 136301.0], [81.0, 136305.0], [81.1, 136305.0], [81.2, 136305.0], [81.3, 136305.0], [81.4, 136305.0], [81.5, 136305.0], [81.6, 136305.0], [81.7, 136305.0], [81.8, 136305.0], [81.9, 136305.0], [82.0, 136310.0], [82.1, 136310.0], [82.2, 136310.0], [82.3, 136310.0], [82.4, 136310.0], [82.5, 136310.0], [82.6, 136310.0], [82.7, 136310.0], [82.8, 136310.0], [82.9, 136310.0], [83.0, 136321.0], [83.1, 136321.0], [83.2, 136321.0], [83.3, 136321.0], [83.4, 136321.0], [83.5, 136321.0], [83.6, 136321.0], [83.7, 136321.0], [83.8, 136321.0], [83.9, 136321.0], [84.0, 136330.0], [84.1, 136330.0], [84.2, 136330.0], [84.3, 136330.0], [84.4, 136330.0], [84.5, 136330.0], [84.6, 136330.0], [84.7, 136330.0], [84.8, 136330.0], [84.9, 136330.0], [85.0, 136340.0], [85.1, 136340.0], [85.2, 136340.0], [85.3, 136340.0], [85.4, 136340.0], [85.5, 136340.0], [85.6, 136340.0], [85.7, 136340.0], [85.8, 136340.0], [85.9, 136340.0], [86.0, 136352.0], [86.1, 136352.0], [86.2, 136352.0], [86.3, 136352.0], [86.4, 136352.0], [86.5, 136352.0], [86.6, 136352.0], [86.7, 136352.0], [86.8, 136352.0], [86.9, 136352.0], [87.0, 136363.0], [87.1, 136363.0], [87.2, 136363.0], [87.3, 136363.0], [87.4, 136363.0], [87.5, 136363.0], [87.6, 136363.0], [87.7, 136363.0], [87.8, 136363.0], [87.9, 136363.0], [88.0, 136370.0], [88.1, 136370.0], [88.2, 136370.0], [88.3, 136370.0], [88.4, 136370.0], [88.5, 136370.0], [88.6, 136370.0], [88.7, 136370.0], [88.8, 136370.0], [88.9, 136370.0], [89.0, 136382.0], [89.1, 136382.0], [89.2, 136382.0], [89.3, 136382.0], [89.4, 136382.0], [89.5, 136382.0], [89.6, 136382.0], [89.7, 136382.0], [89.8, 136382.0], [89.9, 136382.0], [90.0, 136394.0], [90.1, 136394.0], [90.2, 136394.0], [90.3, 136394.0], [90.4, 136394.0], [90.5, 136394.0], [90.6, 136394.0], [90.7, 136394.0], [90.8, 136394.0], [90.9, 136394.0], [91.0, 136402.0], [91.1, 136402.0], [91.2, 136402.0], [91.3, 136402.0], [91.4, 136402.0], [91.5, 136402.0], [91.6, 136402.0], [91.7, 136402.0], [91.8, 136402.0], [91.9, 136402.0], [92.0, 136414.0], [92.1, 136414.0], [92.2, 136414.0], [92.3, 136414.0], [92.4, 136414.0], [92.5, 136414.0], [92.6, 136414.0], [92.7, 136414.0], [92.8, 136414.0], [92.9, 136414.0], [93.0, 136427.0], [93.1, 136427.0], [93.2, 136427.0], [93.3, 136427.0], [93.4, 136427.0], [93.5, 136427.0], [93.6, 136427.0], [93.7, 136427.0], [93.8, 136427.0], [93.9, 136427.0], [94.0, 136440.0], [94.1, 136440.0], [94.2, 136440.0], [94.3, 136440.0], [94.4, 136440.0], [94.5, 136440.0], [94.6, 136440.0], [94.7, 136440.0], [94.8, 136440.0], [94.9, 136440.0], [95.0, 136441.0], [95.1, 136441.0], [95.2, 136441.0], [95.3, 136441.0], [95.4, 136441.0], [95.5, 136441.0], [95.6, 136441.0], [95.7, 136441.0], [95.8, 136441.0], [95.9, 136441.0], [96.0, 136452.0], [96.1, 136452.0], [96.2, 136452.0], [96.3, 136452.0], [96.4, 136452.0], [96.5, 136452.0], [96.6, 136452.0], [96.7, 136452.0], [96.8, 136452.0], [96.9, 136452.0], [97.0, 136462.0], [97.1, 136462.0], [97.2, 136462.0], [97.3, 136462.0], [97.4, 136462.0], [97.5, 136462.0], [97.6, 136462.0], [97.7, 136462.0], [97.8, 136462.0], [97.9, 136462.0], [98.0, 136481.0], [98.1, 136481.0], [98.2, 136481.0], [98.3, 136481.0], [98.4, 136481.0], [98.5, 136481.0], [98.6, 136481.0], [98.7, 136481.0], [98.8, 136481.0], [98.9, 136481.0], [99.0, 136492.0], [99.1, 136492.0], [99.2, 136492.0], [99.3, 136492.0], [99.4, 136492.0], [99.5, 136492.0], [99.6, 136492.0], [99.7, 136492.0], [99.8, 136492.0], [99.9, 136492.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 132300.0, "maxY": 17.0, "series": [{"data": [[132800.0, 17.0], [132600.0, 10.0], [132400.0, 10.0], [136400.0, 9.0], [136200.0, 9.0], [136000.0, 3.0], [132700.0, 10.0], [132500.0, 10.0], [132300.0, 1.0], [136300.0, 11.0], [136100.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 62.98, "minX": 1.7560056E12, "maxY": 62.98, "series": [{"data": [[1.7560056E12, 62.98]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7560056E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132414.0, "minX": 1.0, "maxY": 136462.0, "series": [{"data": [[33.0, 136402.0], [35.0, 136462.0], [34.0, 136262.5], [37.0, 136452.0], [36.0, 136352.0], [39.0, 136330.5], [41.0, 136320.0], [42.0, 136405.0], [51.0, 132834.0], [53.0, 132433.0], [57.0, 132844.0], [58.0, 132845.0], [62.0, 132463.0], [67.0, 132814.0], [66.0, 132485.0], [4.0, 136170.5], [74.0, 132425.0], [72.0, 132845.0], [81.0, 132846.0], [80.0, 132638.5], [5.0, 136441.0], [85.0, 132414.0], [90.0, 132549.5], [89.0, 132644.5], [94.0, 132784.0], [92.0, 132583.0], [98.0, 132845.0], [97.0, 132744.0], [96.0, 132455.0], [6.0, 136223.0], [100.0, 132679.55555555556], [8.0, 136385.0], [9.0, 136301.0], [11.0, 136414.0], [15.0, 136306.0], [16.0, 136187.0], [1.0, 136153.0], [17.0, 136137.0], [18.0, 136427.0], [21.0, 136136.5], [22.0, 136305.0], [23.0, 136146.0], [24.0, 136195.0], [26.0, 136090.0], [27.0, 136084.0], [29.0, 136293.0], [30.0, 136262.0], [31.0, 136292.5]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[62.97000000000003, 134185.50999999998]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7560056E12, "maxY": 4708.333333333333, "series": [{"data": [[1.7560056E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7560056E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7560056E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 134185.50999999998, "minX": 1.7560056E12, "maxY": 134185.50999999998, "series": [{"data": [[1.7560056E12, 134185.50999999998]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7560056E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7560056E12, "maxY": 4.9E-324, "series": [{"data": [[1.7560056E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7560056E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 134185.37999999995, "minX": 1.7560056E12, "maxY": 134185.37999999995, "series": [{"data": [[1.7560056E12, 134185.37999999995]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7560056E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 132678.5, "minX": 42.0, "maxY": 136277.5, "series": [{"data": [[42.0, 136277.5], [58.0, 132678.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 42.0, "maxY": 4.9E-324, "series": [{"data": [[42.0, 0.0], [58.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 58.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75600542E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75600542E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75600542E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7560056E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7560056E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7560056E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7560056E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7560056E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7560056E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7560056E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7560056E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7560056E12, "title": "Total Transactions Per Second"}},
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

