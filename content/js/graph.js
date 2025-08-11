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
        data: {"result": {"minY": 132722.0, "minX": 0.0, "maxY": 133619.0, "series": [{"data": [[0.0, 132722.0], [0.1, 132722.0], [0.2, 132722.0], [0.3, 132722.0], [0.4, 132722.0], [0.5, 132722.0], [0.6, 132722.0], [0.7, 132722.0], [0.8, 132722.0], [0.9, 132722.0], [1.0, 132731.0], [1.1, 132731.0], [1.2, 132731.0], [1.3, 132731.0], [1.4, 132731.0], [1.5, 132731.0], [1.6, 132731.0], [1.7, 132731.0], [1.8, 132731.0], [1.9, 132731.0], [2.0, 132753.0], [2.1, 132753.0], [2.2, 132753.0], [2.3, 132753.0], [2.4, 132753.0], [2.5, 132753.0], [2.6, 132753.0], [2.7, 132753.0], [2.8, 132753.0], [2.9, 132753.0], [3.0, 132771.0], [3.1, 132771.0], [3.2, 132771.0], [3.3, 132771.0], [3.4, 132771.0], [3.5, 132771.0], [3.6, 132771.0], [3.7, 132771.0], [3.8, 132771.0], [3.9, 132771.0], [4.0, 132772.0], [4.1, 132772.0], [4.2, 132772.0], [4.3, 132772.0], [4.4, 132772.0], [4.5, 132772.0], [4.6, 132772.0], [4.7, 132772.0], [4.8, 132772.0], [4.9, 132772.0], [5.0, 132774.0], [5.1, 132774.0], [5.2, 132774.0], [5.3, 132774.0], [5.4, 132774.0], [5.5, 132774.0], [5.6, 132774.0], [5.7, 132774.0], [5.8, 132774.0], [5.9, 132774.0], [6.0, 132782.0], [6.1, 132782.0], [6.2, 132782.0], [6.3, 132782.0], [6.4, 132782.0], [6.5, 132782.0], [6.6, 132782.0], [6.7, 132782.0], [6.8, 132782.0], [6.9, 132782.0], [7.0, 132795.0], [7.1, 132795.0], [7.2, 132795.0], [7.3, 132795.0], [7.4, 132795.0], [7.5, 132795.0], [7.6, 132795.0], [7.7, 132795.0], [7.8, 132795.0], [7.9, 132795.0], [8.0, 132805.0], [8.1, 132805.0], [8.2, 132805.0], [8.3, 132805.0], [8.4, 132805.0], [8.5, 132805.0], [8.6, 132805.0], [8.7, 132805.0], [8.8, 132805.0], [8.9, 132805.0], [9.0, 132833.0], [9.1, 132833.0], [9.2, 132833.0], [9.3, 132833.0], [9.4, 132833.0], [9.5, 132833.0], [9.6, 132833.0], [9.7, 132833.0], [9.8, 132833.0], [9.9, 132833.0], [10.0, 132842.0], [10.1, 132842.0], [10.2, 132842.0], [10.3, 132842.0], [10.4, 132842.0], [10.5, 132842.0], [10.6, 132842.0], [10.7, 132842.0], [10.8, 132842.0], [10.9, 132842.0], [11.0, 132843.0], [11.1, 132843.0], [11.2, 132843.0], [11.3, 132843.0], [11.4, 132843.0], [11.5, 132843.0], [11.6, 132843.0], [11.7, 132843.0], [11.8, 132843.0], [11.9, 132843.0], [12.0, 132847.0], [12.1, 132847.0], [12.2, 132847.0], [12.3, 132847.0], [12.4, 132847.0], [12.5, 132847.0], [12.6, 132847.0], [12.7, 132847.0], [12.8, 132847.0], [12.9, 132847.0], [13.0, 132856.0], [13.1, 132856.0], [13.2, 132856.0], [13.3, 132856.0], [13.4, 132856.0], [13.5, 132856.0], [13.6, 132856.0], [13.7, 132856.0], [13.8, 132856.0], [13.9, 132856.0], [14.0, 132863.0], [14.1, 132863.0], [14.2, 132863.0], [14.3, 132863.0], [14.4, 132863.0], [14.5, 132863.0], [14.6, 132863.0], [14.7, 132863.0], [14.8, 132863.0], [14.9, 132863.0], [15.0, 132874.0], [15.1, 132874.0], [15.2, 132874.0], [15.3, 132874.0], [15.4, 132874.0], [15.5, 132874.0], [15.6, 132874.0], [15.7, 132874.0], [15.8, 132874.0], [15.9, 132874.0], [16.0, 132882.0], [16.1, 132882.0], [16.2, 132882.0], [16.3, 132882.0], [16.4, 132882.0], [16.5, 132882.0], [16.6, 132882.0], [16.7, 132882.0], [16.8, 132882.0], [16.9, 132882.0], [17.0, 132896.0], [17.1, 132896.0], [17.2, 132896.0], [17.3, 132896.0], [17.4, 132896.0], [17.5, 132896.0], [17.6, 132896.0], [17.7, 132896.0], [17.8, 132896.0], [17.9, 132896.0], [18.0, 132903.0], [18.1, 132903.0], [18.2, 132903.0], [18.3, 132903.0], [18.4, 132903.0], [18.5, 132903.0], [18.6, 132903.0], [18.7, 132903.0], [18.8, 132903.0], [18.9, 132903.0], [19.0, 132915.0], [19.1, 132915.0], [19.2, 132915.0], [19.3, 132915.0], [19.4, 132915.0], [19.5, 132915.0], [19.6, 132915.0], [19.7, 132915.0], [19.8, 132915.0], [19.9, 132915.0], [20.0, 132925.0], [20.1, 132925.0], [20.2, 132925.0], [20.3, 132925.0], [20.4, 132925.0], [20.5, 132925.0], [20.6, 132925.0], [20.7, 132925.0], [20.8, 132925.0], [20.9, 132925.0], [21.0, 132934.0], [21.1, 132934.0], [21.2, 132934.0], [21.3, 132934.0], [21.4, 132934.0], [21.5, 132934.0], [21.6, 132934.0], [21.7, 132934.0], [21.8, 132934.0], [21.9, 132934.0], [22.0, 132950.0], [22.1, 132950.0], [22.2, 132950.0], [22.3, 132950.0], [22.4, 132950.0], [22.5, 132950.0], [22.6, 132950.0], [22.7, 132950.0], [22.8, 132950.0], [22.9, 132950.0], [23.0, 132956.0], [23.1, 132956.0], [23.2, 132956.0], [23.3, 132956.0], [23.4, 132956.0], [23.5, 132956.0], [23.6, 132956.0], [23.7, 132956.0], [23.8, 132956.0], [23.9, 132956.0], [24.0, 132967.0], [24.1, 132967.0], [24.2, 132967.0], [24.3, 132967.0], [24.4, 132967.0], [24.5, 132967.0], [24.6, 132967.0], [24.7, 132967.0], [24.8, 132967.0], [24.9, 132967.0], [25.0, 132974.0], [25.1, 132974.0], [25.2, 132974.0], [25.3, 132974.0], [25.4, 132974.0], [25.5, 132974.0], [25.6, 132974.0], [25.7, 132974.0], [25.8, 132974.0], [25.9, 132974.0], [26.0, 132983.0], [26.1, 132983.0], [26.2, 132983.0], [26.3, 132983.0], [26.4, 132983.0], [26.5, 132983.0], [26.6, 132983.0], [26.7, 132983.0], [26.8, 132983.0], [26.9, 132983.0], [27.0, 132993.0], [27.1, 132993.0], [27.2, 132993.0], [27.3, 132993.0], [27.4, 132993.0], [27.5, 132993.0], [27.6, 132993.0], [27.7, 132993.0], [27.8, 132993.0], [27.9, 132993.0], [28.0, 133004.0], [28.1, 133004.0], [28.2, 133004.0], [28.3, 133004.0], [28.4, 133004.0], [28.5, 133004.0], [28.6, 133004.0], [28.7, 133004.0], [28.8, 133004.0], [28.9, 133004.0], [29.0, 133014.0], [29.1, 133014.0], [29.2, 133014.0], [29.3, 133014.0], [29.4, 133014.0], [29.5, 133014.0], [29.6, 133014.0], [29.7, 133014.0], [29.8, 133014.0], [29.9, 133014.0], [30.0, 133024.0], [30.1, 133024.0], [30.2, 133024.0], [30.3, 133024.0], [30.4, 133024.0], [30.5, 133024.0], [30.6, 133024.0], [30.7, 133024.0], [30.8, 133024.0], [30.9, 133024.0], [31.0, 133035.0], [31.1, 133035.0], [31.2, 133035.0], [31.3, 133035.0], [31.4, 133035.0], [31.5, 133035.0], [31.6, 133035.0], [31.7, 133035.0], [31.8, 133035.0], [31.9, 133035.0], [32.0, 133046.0], [32.1, 133046.0], [32.2, 133046.0], [32.3, 133046.0], [32.4, 133046.0], [32.5, 133046.0], [32.6, 133046.0], [32.7, 133046.0], [32.8, 133046.0], [32.9, 133046.0], [33.0, 133054.0], [33.1, 133054.0], [33.2, 133054.0], [33.3, 133054.0], [33.4, 133054.0], [33.5, 133054.0], [33.6, 133054.0], [33.7, 133054.0], [33.8, 133054.0], [33.9, 133054.0], [34.0, 133063.0], [34.1, 133063.0], [34.2, 133063.0], [34.3, 133063.0], [34.4, 133063.0], [34.5, 133063.0], [34.6, 133063.0], [34.7, 133063.0], [34.8, 133063.0], [34.9, 133063.0], [35.0, 133073.0], [35.1, 133073.0], [35.2, 133073.0], [35.3, 133073.0], [35.4, 133073.0], [35.5, 133073.0], [35.6, 133073.0], [35.7, 133073.0], [35.8, 133073.0], [35.9, 133073.0], [36.0, 133083.0], [36.1, 133083.0], [36.2, 133083.0], [36.3, 133083.0], [36.4, 133083.0], [36.5, 133083.0], [36.6, 133083.0], [36.7, 133083.0], [36.8, 133083.0], [36.9, 133083.0], [37.0, 133092.0], [37.1, 133092.0], [37.2, 133092.0], [37.3, 133092.0], [37.4, 133092.0], [37.5, 133092.0], [37.6, 133092.0], [37.7, 133092.0], [37.8, 133092.0], [37.9, 133092.0], [38.0, 133110.0], [38.1, 133110.0], [38.2, 133110.0], [38.3, 133110.0], [38.4, 133110.0], [38.5, 133110.0], [38.6, 133110.0], [38.7, 133110.0], [38.8, 133110.0], [38.9, 133110.0], [39.0, 133117.0], [39.1, 133117.0], [39.2, 133117.0], [39.3, 133117.0], [39.4, 133117.0], [39.5, 133117.0], [39.6, 133117.0], [39.7, 133117.0], [39.8, 133117.0], [39.9, 133117.0], [40.0, 133128.0], [40.1, 133128.0], [40.2, 133128.0], [40.3, 133128.0], [40.4, 133128.0], [40.5, 133128.0], [40.6, 133128.0], [40.7, 133128.0], [40.8, 133128.0], [40.9, 133128.0], [41.0, 133132.0], [41.1, 133132.0], [41.2, 133132.0], [41.3, 133132.0], [41.4, 133132.0], [41.5, 133132.0], [41.6, 133132.0], [41.7, 133132.0], [41.8, 133132.0], [41.9, 133132.0], [42.0, 133143.0], [42.1, 133143.0], [42.2, 133143.0], [42.3, 133143.0], [42.4, 133143.0], [42.5, 133143.0], [42.6, 133143.0], [42.7, 133143.0], [42.8, 133143.0], [42.9, 133143.0], [43.0, 133153.0], [43.1, 133153.0], [43.2, 133153.0], [43.3, 133153.0], [43.4, 133153.0], [43.5, 133153.0], [43.6, 133153.0], [43.7, 133153.0], [43.8, 133153.0], [43.9, 133153.0], [44.0, 133176.0], [44.1, 133176.0], [44.2, 133176.0], [44.3, 133176.0], [44.4, 133176.0], [44.5, 133176.0], [44.6, 133176.0], [44.7, 133176.0], [44.8, 133176.0], [44.9, 133176.0], [45.0, 133181.0], [45.1, 133181.0], [45.2, 133181.0], [45.3, 133181.0], [45.4, 133181.0], [45.5, 133181.0], [45.6, 133181.0], [45.7, 133181.0], [45.8, 133181.0], [45.9, 133181.0], [46.0, 133195.0], [46.1, 133195.0], [46.2, 133195.0], [46.3, 133195.0], [46.4, 133195.0], [46.5, 133195.0], [46.6, 133195.0], [46.7, 133195.0], [46.8, 133195.0], [46.9, 133195.0], [47.0, 133199.0], [47.1, 133199.0], [47.2, 133199.0], [47.3, 133199.0], [47.4, 133199.0], [47.5, 133199.0], [47.6, 133199.0], [47.7, 133199.0], [47.8, 133199.0], [47.9, 133199.0], [48.0, 133216.0], [48.1, 133216.0], [48.2, 133216.0], [48.3, 133216.0], [48.4, 133216.0], [48.5, 133216.0], [48.6, 133216.0], [48.7, 133216.0], [48.8, 133216.0], [48.9, 133216.0], [49.0, 133225.0], [49.1, 133225.0], [49.2, 133225.0], [49.3, 133225.0], [49.4, 133225.0], [49.5, 133225.0], [49.6, 133225.0], [49.7, 133225.0], [49.8, 133225.0], [49.9, 133225.0], [50.0, 133231.0], [50.1, 133231.0], [50.2, 133231.0], [50.3, 133231.0], [50.4, 133231.0], [50.5, 133231.0], [50.6, 133231.0], [50.7, 133231.0], [50.8, 133231.0], [50.9, 133231.0], [51.0, 133250.0], [51.1, 133250.0], [51.2, 133250.0], [51.3, 133250.0], [51.4, 133250.0], [51.5, 133250.0], [51.6, 133250.0], [51.7, 133250.0], [51.8, 133250.0], [51.9, 133250.0], [52.0, 133261.0], [52.1, 133261.0], [52.2, 133261.0], [52.3, 133261.0], [52.4, 133261.0], [52.5, 133261.0], [52.6, 133261.0], [52.7, 133261.0], [52.8, 133261.0], [52.9, 133261.0], [53.0, 133269.0], [53.1, 133269.0], [53.2, 133269.0], [53.3, 133269.0], [53.4, 133269.0], [53.5, 133269.0], [53.6, 133269.0], [53.7, 133269.0], [53.8, 133269.0], [53.9, 133269.0], [54.0, 133277.0], [54.1, 133277.0], [54.2, 133277.0], [54.3, 133277.0], [54.4, 133277.0], [54.5, 133277.0], [54.6, 133277.0], [54.7, 133277.0], [54.8, 133277.0], [54.9, 133277.0], [55.0, 133286.0], [55.1, 133286.0], [55.2, 133286.0], [55.3, 133286.0], [55.4, 133286.0], [55.5, 133286.0], [55.6, 133286.0], [55.7, 133286.0], [55.8, 133286.0], [55.9, 133286.0], [56.0, 133290.0], [56.1, 133290.0], [56.2, 133290.0], [56.3, 133290.0], [56.4, 133290.0], [56.5, 133290.0], [56.6, 133290.0], [56.7, 133290.0], [56.8, 133290.0], [56.9, 133290.0], [57.0, 133306.0], [57.1, 133306.0], [57.2, 133306.0], [57.3, 133306.0], [57.4, 133306.0], [57.5, 133306.0], [57.6, 133306.0], [57.7, 133306.0], [57.8, 133306.0], [57.9, 133306.0], [58.0, 133311.0], [58.1, 133311.0], [58.2, 133311.0], [58.3, 133311.0], [58.4, 133311.0], [58.5, 133311.0], [58.6, 133311.0], [58.7, 133311.0], [58.8, 133311.0], [58.9, 133311.0], [59.0, 133312.0], [59.1, 133312.0], [59.2, 133312.0], [59.3, 133312.0], [59.4, 133312.0], [59.5, 133312.0], [59.6, 133312.0], [59.7, 133312.0], [59.8, 133312.0], [59.9, 133312.0], [60.0, 133331.0], [60.1, 133331.0], [60.2, 133331.0], [60.3, 133331.0], [60.4, 133331.0], [60.5, 133331.0], [60.6, 133331.0], [60.7, 133331.0], [60.8, 133331.0], [60.9, 133331.0], [61.0, 133343.0], [61.1, 133343.0], [61.2, 133343.0], [61.3, 133343.0], [61.4, 133343.0], [61.5, 133343.0], [61.6, 133343.0], [61.7, 133343.0], [61.8, 133343.0], [61.9, 133343.0], [62.0, 133352.0], [62.1, 133352.0], [62.2, 133352.0], [62.3, 133352.0], [62.4, 133352.0], [62.5, 133352.0], [62.6, 133352.0], [62.7, 133352.0], [62.8, 133352.0], [62.9, 133352.0], [63.0, 133353.0], [63.1, 133353.0], [63.2, 133353.0], [63.3, 133353.0], [63.4, 133353.0], [63.5, 133353.0], [63.6, 133353.0], [63.7, 133353.0], [63.8, 133353.0], [63.9, 133353.0], [64.0, 133374.0], [64.1, 133374.0], [64.2, 133374.0], [64.3, 133374.0], [64.4, 133374.0], [64.5, 133374.0], [64.6, 133374.0], [64.7, 133374.0], [64.8, 133374.0], [64.9, 133374.0], [65.0, 133380.0], [65.1, 133380.0], [65.2, 133380.0], [65.3, 133380.0], [65.4, 133380.0], [65.5, 133380.0], [65.6, 133380.0], [65.7, 133380.0], [65.8, 133380.0], [65.9, 133380.0], [66.0, 133395.0], [66.1, 133395.0], [66.2, 133395.0], [66.3, 133395.0], [66.4, 133395.0], [66.5, 133395.0], [66.6, 133395.0], [66.7, 133395.0], [66.8, 133395.0], [66.9, 133395.0], [67.0, 133398.0], [67.1, 133398.0], [67.2, 133398.0], [67.3, 133398.0], [67.4, 133398.0], [67.5, 133398.0], [67.6, 133398.0], [67.7, 133398.0], [67.8, 133398.0], [67.9, 133398.0], [68.0, 133403.0], [68.1, 133403.0], [68.2, 133403.0], [68.3, 133403.0], [68.4, 133403.0], [68.5, 133403.0], [68.6, 133403.0], [68.7, 133403.0], [68.8, 133403.0], [68.9, 133403.0], [69.0, 133412.0], [69.1, 133412.0], [69.2, 133412.0], [69.3, 133412.0], [69.4, 133412.0], [69.5, 133412.0], [69.6, 133412.0], [69.7, 133412.0], [69.8, 133412.0], [69.9, 133412.0], [70.0, 133423.0], [70.1, 133423.0], [70.2, 133423.0], [70.3, 133423.0], [70.4, 133423.0], [70.5, 133423.0], [70.6, 133423.0], [70.7, 133423.0], [70.8, 133423.0], [70.9, 133423.0], [71.0, 133433.0], [71.1, 133433.0], [71.2, 133433.0], [71.3, 133433.0], [71.4, 133433.0], [71.5, 133433.0], [71.6, 133433.0], [71.7, 133433.0], [71.8, 133433.0], [71.9, 133433.0], [72.0, 133443.0], [72.1, 133443.0], [72.2, 133443.0], [72.3, 133443.0], [72.4, 133443.0], [72.5, 133443.0], [72.6, 133443.0], [72.7, 133443.0], [72.8, 133443.0], [72.9, 133443.0], [73.0, 133454.0], [73.1, 133454.0], [73.2, 133454.0], [73.3, 133454.0], [73.4, 133454.0], [73.5, 133454.0], [73.6, 133454.0], [73.7, 133454.0], [73.8, 133454.0], [73.9, 133454.0], [74.0, 133466.0], [74.1, 133466.0], [74.2, 133466.0], [74.3, 133466.0], [74.4, 133466.0], [74.5, 133466.0], [74.6, 133466.0], [74.7, 133466.0], [74.8, 133466.0], [74.9, 133466.0], [75.0, 133473.0], [75.1, 133473.0], [75.2, 133473.0], [75.3, 133473.0], [75.4, 133473.0], [75.5, 133473.0], [75.6, 133473.0], [75.7, 133473.0], [75.8, 133473.0], [75.9, 133473.0], [76.0, 133483.0], [76.1, 133483.0], [76.2, 133483.0], [76.3, 133483.0], [76.4, 133483.0], [76.5, 133483.0], [76.6, 133483.0], [76.7, 133483.0], [76.8, 133483.0], [76.9, 133483.0], [77.0, 133494.0], [77.1, 133494.0], [77.2, 133494.0], [77.3, 133494.0], [77.4, 133494.0], [77.5, 133494.0], [77.6, 133494.0], [77.7, 133494.0], [77.8, 133494.0], [77.9, 133494.0], [78.0, 133503.0], [78.1, 133503.0], [78.2, 133503.0], [78.3, 133503.0], [78.4, 133503.0], [78.5, 133503.0], [78.6, 133503.0], [78.7, 133503.0], [78.8, 133503.0], [78.9, 133503.0], [79.0, 133519.0], [79.1, 133519.0], [79.2, 133519.0], [79.3, 133519.0], [79.4, 133519.0], [79.5, 133519.0], [79.6, 133519.0], [79.7, 133519.0], [79.8, 133519.0], [79.9, 133519.0], [80.0, 133525.0], [80.1, 133525.0], [80.2, 133525.0], [80.3, 133525.0], [80.4, 133525.0], [80.5, 133525.0], [80.6, 133525.0], [80.7, 133525.0], [80.8, 133525.0], [80.9, 133525.0], [81.0, 133533.0], [81.1, 133533.0], [81.2, 133533.0], [81.3, 133533.0], [81.4, 133533.0], [81.5, 133533.0], [81.6, 133533.0], [81.7, 133533.0], [81.8, 133533.0], [81.9, 133533.0], [82.0, 133544.0], [82.1, 133544.0], [82.2, 133544.0], [82.3, 133544.0], [82.4, 133544.0], [82.5, 133544.0], [82.6, 133544.0], [82.7, 133544.0], [82.8, 133544.0], [82.9, 133544.0], [83.0, 133563.0], [83.1, 133563.0], [83.2, 133563.0], [83.3, 133563.0], [83.4, 133563.0], [83.5, 133563.0], [83.6, 133563.0], [83.7, 133563.0], [83.8, 133563.0], [83.9, 133563.0], [84.0, 133572.0], [84.1, 133572.0], [84.2, 133572.0], [84.3, 133572.0], [84.4, 133572.0], [84.5, 133572.0], [84.6, 133572.0], [84.7, 133572.0], [84.8, 133572.0], [84.9, 133572.0], [85.0, 133572.0], [85.1, 133572.0], [85.2, 133572.0], [85.3, 133572.0], [85.4, 133572.0], [85.5, 133572.0], [85.6, 133572.0], [85.7, 133572.0], [85.8, 133572.0], [85.9, 133572.0], [86.0, 133583.0], [86.1, 133583.0], [86.2, 133583.0], [86.3, 133583.0], [86.4, 133583.0], [86.5, 133583.0], [86.6, 133583.0], [86.7, 133583.0], [86.8, 133583.0], [86.9, 133583.0], [87.0, 133593.0], [87.1, 133593.0], [87.2, 133593.0], [87.3, 133593.0], [87.4, 133593.0], [87.5, 133593.0], [87.6, 133593.0], [87.7, 133593.0], [87.8, 133593.0], [87.9, 133593.0], [88.0, 133597.0], [88.1, 133597.0], [88.2, 133597.0], [88.3, 133597.0], [88.4, 133597.0], [88.5, 133597.0], [88.6, 133597.0], [88.7, 133597.0], [88.8, 133597.0], [88.9, 133597.0], [89.0, 133600.0], [89.1, 133600.0], [89.2, 133600.0], [89.3, 133600.0], [89.4, 133600.0], [89.5, 133600.0], [89.6, 133600.0], [89.7, 133600.0], [89.8, 133600.0], [89.9, 133600.0], [90.0, 133601.0], [90.1, 133601.0], [90.2, 133601.0], [90.3, 133601.0], [90.4, 133601.0], [90.5, 133601.0], [90.6, 133601.0], [90.7, 133601.0], [90.8, 133601.0], [90.9, 133601.0], [91.0, 133601.0], [91.1, 133601.0], [91.2, 133601.0], [91.3, 133601.0], [91.4, 133601.0], [91.5, 133601.0], [91.6, 133601.0], [91.7, 133601.0], [91.8, 133601.0], [91.9, 133601.0], [92.0, 133602.0], [92.1, 133602.0], [92.2, 133602.0], [92.3, 133602.0], [92.4, 133602.0], [92.5, 133602.0], [92.6, 133602.0], [92.7, 133602.0], [92.8, 133602.0], [92.9, 133602.0], [93.0, 133602.0], [93.1, 133602.0], [93.2, 133602.0], [93.3, 133602.0], [93.4, 133602.0], [93.5, 133602.0], [93.6, 133602.0], [93.7, 133602.0], [93.8, 133602.0], [93.9, 133602.0], [94.0, 133602.0], [94.1, 133602.0], [94.2, 133602.0], [94.3, 133602.0], [94.4, 133602.0], [94.5, 133602.0], [94.6, 133602.0], [94.7, 133602.0], [94.8, 133602.0], [94.9, 133602.0], [95.0, 133604.0], [95.1, 133604.0], [95.2, 133604.0], [95.3, 133604.0], [95.4, 133604.0], [95.5, 133604.0], [95.6, 133604.0], [95.7, 133604.0], [95.8, 133604.0], [95.9, 133604.0], [96.0, 133604.0], [96.1, 133604.0], [96.2, 133604.0], [96.3, 133604.0], [96.4, 133604.0], [96.5, 133604.0], [96.6, 133604.0], [96.7, 133604.0], [96.8, 133604.0], [96.9, 133604.0], [97.0, 133613.0], [97.1, 133613.0], [97.2, 133613.0], [97.3, 133613.0], [97.4, 133613.0], [97.5, 133613.0], [97.6, 133613.0], [97.7, 133613.0], [97.8, 133613.0], [97.9, 133613.0], [98.0, 133618.0], [98.1, 133618.0], [98.2, 133618.0], [98.3, 133618.0], [98.4, 133618.0], [98.5, 133618.0], [98.6, 133618.0], [98.7, 133618.0], [98.8, 133618.0], [98.9, 133618.0], [99.0, 133619.0], [99.1, 133619.0], [99.2, 133619.0], [99.3, 133619.0], [99.4, 133619.0], [99.5, 133619.0], [99.6, 133619.0], [99.7, 133619.0], [99.8, 133619.0], [99.9, 133619.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 8.0, "minX": 132700.0, "maxY": 11.0, "series": [{"data": [[133600.0, 11.0], [133400.0, 10.0], [132800.0, 10.0], [133200.0, 9.0], [133000.0, 10.0], [133300.0, 11.0], [132700.0, 8.0], [132900.0, 10.0], [133100.0, 10.0], [133500.0, 11.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 133600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 54.11999999999999, "minX": 1.75488384E12, "maxY": 54.11999999999999, "series": [{"data": [[1.75488384E12, 54.11999999999999]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75488384E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132782.0, "minX": 5.0, "maxY": 133613.0, "series": [{"data": [[5.0, 133483.0], [6.0, 133092.6], [8.0, 133597.0], [10.0, 133115.66666666666], [13.0, 133208.0], [14.0, 133353.0], [15.0, 133563.0], [16.0, 133083.0], [19.0, 133207.5], [20.0, 132863.0], [22.0, 133063.0], [24.0, 133602.0], [25.0, 132978.5], [26.0, 132903.0], [28.0, 133503.0], [29.0, 132993.0], [31.0, 133552.0], [33.0, 133494.0], [32.0, 133004.0], [35.0, 132843.0], [34.0, 133423.0], [37.0, 133223.5], [36.0, 133544.0], [39.0, 132782.0], [41.0, 133482.0], [43.0, 133024.0], [42.0, 132874.0], [45.0, 132805.0], [46.0, 133602.0], [48.0, 133318.0], [50.0, 133054.66666666666], [53.0, 133602.0], [52.0, 133284.5], [54.0, 133583.0], [56.0, 133225.0], [67.0, 132833.0], [66.0, 133572.0], [64.0, 133352.0], [71.0, 133011.5], [69.0, 133213.66666666666], [74.0, 133380.0], [72.0, 133439.5], [79.0, 133277.0], [78.0, 133398.0], [77.0, 133613.0], [76.0, 133105.0], [82.0, 133286.0], [81.0, 133306.0], [80.0, 133216.0], [84.0, 132989.0], [91.0, 132856.0], [90.0, 133030.5], [88.0, 133241.25], [99.0, 133561.5], [97.0, 133030.0], [100.0, 133138.63636363638]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[54.11999999999999, 133215.7699999999]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75488384E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75488384E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75488384E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75488384E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133215.7699999999, "minX": 1.75488384E12, "maxY": 133215.7699999999, "series": [{"data": [[1.75488384E12, 133215.7699999999]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75488384E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75488384E12, "maxY": 4.9E-324, "series": [{"data": [[1.75488384E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75488384E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 133211.24999999994, "minX": 1.75488384E12, "maxY": 133211.24999999994, "series": [{"data": [[1.75488384E12, 133211.24999999994]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75488384E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 133228.0, "minX": 100.0, "maxY": 133228.0, "series": [{"data": [[100.0, 133228.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75488372E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75488372E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75488372E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75488384E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75488384E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75488384E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75488384E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75488384E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75488384E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75488384E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75488384E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75488384E12, "title": "Total Transactions Per Second"}},
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

