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
        data: {"result": {"minY": 132401.0, "minX": 0.0, "maxY": 136486.0, "series": [{"data": [[0.0, 132401.0], [0.1, 132401.0], [0.2, 132401.0], [0.3, 132401.0], [0.4, 132401.0], [0.5, 132401.0], [0.6, 132401.0], [0.7, 132401.0], [0.8, 132401.0], [0.9, 132401.0], [1.0, 132411.0], [1.1, 132411.0], [1.2, 132411.0], [1.3, 132411.0], [1.4, 132411.0], [1.5, 132411.0], [1.6, 132411.0], [1.7, 132411.0], [1.8, 132411.0], [1.9, 132411.0], [2.0, 132422.0], [2.1, 132422.0], [2.2, 132422.0], [2.3, 132422.0], [2.4, 132422.0], [2.5, 132422.0], [2.6, 132422.0], [2.7, 132422.0], [2.8, 132422.0], [2.9, 132422.0], [3.0, 132431.0], [3.1, 132431.0], [3.2, 132431.0], [3.3, 132431.0], [3.4, 132431.0], [3.5, 132431.0], [3.6, 132431.0], [3.7, 132431.0], [3.8, 132431.0], [3.9, 132431.0], [4.0, 132442.0], [4.1, 132442.0], [4.2, 132442.0], [4.3, 132442.0], [4.4, 132442.0], [4.5, 132442.0], [4.6, 132442.0], [4.7, 132442.0], [4.8, 132442.0], [4.9, 132442.0], [5.0, 132456.0], [5.1, 132456.0], [5.2, 132456.0], [5.3, 132456.0], [5.4, 132456.0], [5.5, 132456.0], [5.6, 132456.0], [5.7, 132456.0], [5.8, 132456.0], [5.9, 132456.0], [6.0, 132462.0], [6.1, 132462.0], [6.2, 132462.0], [6.3, 132462.0], [6.4, 132462.0], [6.5, 132462.0], [6.6, 132462.0], [6.7, 132462.0], [6.8, 132462.0], [6.9, 132462.0], [7.0, 132474.0], [7.1, 132474.0], [7.2, 132474.0], [7.3, 132474.0], [7.4, 132474.0], [7.5, 132474.0], [7.6, 132474.0], [7.7, 132474.0], [7.8, 132474.0], [7.9, 132474.0], [8.0, 132489.0], [8.1, 132489.0], [8.2, 132489.0], [8.3, 132489.0], [8.4, 132489.0], [8.5, 132489.0], [8.6, 132489.0], [8.7, 132489.0], [8.8, 132489.0], [8.9, 132489.0], [9.0, 132491.0], [9.1, 132491.0], [9.2, 132491.0], [9.3, 132491.0], [9.4, 132491.0], [9.5, 132491.0], [9.6, 132491.0], [9.7, 132491.0], [9.8, 132491.0], [9.9, 132491.0], [10.0, 132512.0], [10.1, 132512.0], [10.2, 132512.0], [10.3, 132512.0], [10.4, 132512.0], [10.5, 132512.0], [10.6, 132512.0], [10.7, 132512.0], [10.8, 132512.0], [10.9, 132512.0], [11.0, 132521.0], [11.1, 132521.0], [11.2, 132521.0], [11.3, 132521.0], [11.4, 132521.0], [11.5, 132521.0], [11.6, 132521.0], [11.7, 132521.0], [11.8, 132521.0], [11.9, 132521.0], [12.0, 132524.0], [12.1, 132524.0], [12.2, 132524.0], [12.3, 132524.0], [12.4, 132524.0], [12.5, 132524.0], [12.6, 132524.0], [12.7, 132524.0], [12.8, 132524.0], [12.9, 132524.0], [13.0, 132531.0], [13.1, 132531.0], [13.2, 132531.0], [13.3, 132531.0], [13.4, 132531.0], [13.5, 132531.0], [13.6, 132531.0], [13.7, 132531.0], [13.8, 132531.0], [13.9, 132531.0], [14.0, 132542.0], [14.1, 132542.0], [14.2, 132542.0], [14.3, 132542.0], [14.4, 132542.0], [14.5, 132542.0], [14.6, 132542.0], [14.7, 132542.0], [14.8, 132542.0], [14.9, 132542.0], [15.0, 132551.0], [15.1, 132551.0], [15.2, 132551.0], [15.3, 132551.0], [15.4, 132551.0], [15.5, 132551.0], [15.6, 132551.0], [15.7, 132551.0], [15.8, 132551.0], [15.9, 132551.0], [16.0, 132563.0], [16.1, 132563.0], [16.2, 132563.0], [16.3, 132563.0], [16.4, 132563.0], [16.5, 132563.0], [16.6, 132563.0], [16.7, 132563.0], [16.8, 132563.0], [16.9, 132563.0], [17.0, 132571.0], [17.1, 132571.0], [17.2, 132571.0], [17.3, 132571.0], [17.4, 132571.0], [17.5, 132571.0], [17.6, 132571.0], [17.7, 132571.0], [17.8, 132571.0], [17.9, 132571.0], [18.0, 132581.0], [18.1, 132581.0], [18.2, 132581.0], [18.3, 132581.0], [18.4, 132581.0], [18.5, 132581.0], [18.6, 132581.0], [18.7, 132581.0], [18.8, 132581.0], [18.9, 132581.0], [19.0, 132591.0], [19.1, 132591.0], [19.2, 132591.0], [19.3, 132591.0], [19.4, 132591.0], [19.5, 132591.0], [19.6, 132591.0], [19.7, 132591.0], [19.8, 132591.0], [19.9, 132591.0], [20.0, 132601.0], [20.1, 132601.0], [20.2, 132601.0], [20.3, 132601.0], [20.4, 132601.0], [20.5, 132601.0], [20.6, 132601.0], [20.7, 132601.0], [20.8, 132601.0], [20.9, 132601.0], [21.0, 132618.0], [21.1, 132618.0], [21.2, 132618.0], [21.3, 132618.0], [21.4, 132618.0], [21.5, 132618.0], [21.6, 132618.0], [21.7, 132618.0], [21.8, 132618.0], [21.9, 132618.0], [22.0, 132621.0], [22.1, 132621.0], [22.2, 132621.0], [22.3, 132621.0], [22.4, 132621.0], [22.5, 132621.0], [22.6, 132621.0], [22.7, 132621.0], [22.8, 132621.0], [22.9, 132621.0], [23.0, 132630.0], [23.1, 132630.0], [23.2, 132630.0], [23.3, 132630.0], [23.4, 132630.0], [23.5, 132630.0], [23.6, 132630.0], [23.7, 132630.0], [23.8, 132630.0], [23.9, 132630.0], [24.0, 132642.0], [24.1, 132642.0], [24.2, 132642.0], [24.3, 132642.0], [24.4, 132642.0], [24.5, 132642.0], [24.6, 132642.0], [24.7, 132642.0], [24.8, 132642.0], [24.9, 132642.0], [25.0, 132643.0], [25.1, 132643.0], [25.2, 132643.0], [25.3, 132643.0], [25.4, 132643.0], [25.5, 132643.0], [25.6, 132643.0], [25.7, 132643.0], [25.8, 132643.0], [25.9, 132643.0], [26.0, 132643.0], [26.1, 132643.0], [26.2, 132643.0], [26.3, 132643.0], [26.4, 132643.0], [26.5, 132643.0], [26.6, 132643.0], [26.7, 132643.0], [26.8, 132643.0], [26.9, 132643.0], [27.0, 132643.0], [27.1, 132643.0], [27.2, 132643.0], [27.3, 132643.0], [27.4, 132643.0], [27.5, 132643.0], [27.6, 132643.0], [27.7, 132643.0], [27.8, 132643.0], [27.9, 132643.0], [28.0, 132643.0], [28.1, 132643.0], [28.2, 132643.0], [28.3, 132643.0], [28.4, 132643.0], [28.5, 132643.0], [28.6, 132643.0], [28.7, 132643.0], [28.8, 132643.0], [28.9, 132643.0], [29.0, 132644.0], [29.1, 132644.0], [29.2, 132644.0], [29.3, 132644.0], [29.4, 132644.0], [29.5, 132644.0], [29.6, 132644.0], [29.7, 132644.0], [29.8, 132644.0], [29.9, 132644.0], [30.0, 132644.0], [30.1, 132644.0], [30.2, 132644.0], [30.3, 132644.0], [30.4, 132644.0], [30.5, 132644.0], [30.6, 132644.0], [30.7, 132644.0], [30.8, 132644.0], [30.9, 132644.0], [31.0, 132644.0], [31.1, 132644.0], [31.2, 132644.0], [31.3, 132644.0], [31.4, 132644.0], [31.5, 132644.0], [31.6, 132644.0], [31.7, 132644.0], [31.8, 132644.0], [31.9, 132644.0], [32.0, 132644.0], [32.1, 132644.0], [32.2, 132644.0], [32.3, 132644.0], [32.4, 132644.0], [32.5, 132644.0], [32.6, 132644.0], [32.7, 132644.0], [32.8, 132644.0], [32.9, 132644.0], [33.0, 132645.0], [33.1, 132645.0], [33.2, 132645.0], [33.3, 132645.0], [33.4, 132645.0], [33.5, 132645.0], [33.6, 132645.0], [33.7, 132645.0], [33.8, 132645.0], [33.9, 132645.0], [34.0, 132647.0], [34.1, 132647.0], [34.2, 132647.0], [34.3, 132647.0], [34.4, 132647.0], [34.5, 132647.0], [34.6, 132647.0], [34.7, 132647.0], [34.8, 132647.0], [34.9, 132647.0], [35.0, 132651.0], [35.1, 132651.0], [35.2, 132651.0], [35.3, 132651.0], [35.4, 132651.0], [35.5, 132651.0], [35.6, 132651.0], [35.7, 132651.0], [35.8, 132651.0], [35.9, 132651.0], [36.0, 132655.0], [36.1, 132655.0], [36.2, 132655.0], [36.3, 132655.0], [36.4, 132655.0], [36.5, 132655.0], [36.6, 132655.0], [36.7, 132655.0], [36.8, 132655.0], [36.9, 132655.0], [37.0, 132655.0], [37.1, 132655.0], [37.2, 132655.0], [37.3, 132655.0], [37.4, 132655.0], [37.5, 132655.0], [37.6, 132655.0], [37.7, 132655.0], [37.8, 132655.0], [37.9, 132655.0], [38.0, 135882.0], [38.1, 135882.0], [38.2, 135882.0], [38.3, 135882.0], [38.4, 135882.0], [38.5, 135882.0], [38.6, 135882.0], [38.7, 135882.0], [38.8, 135882.0], [38.9, 135882.0], [39.0, 135888.0], [39.1, 135888.0], [39.2, 135888.0], [39.3, 135888.0], [39.4, 135888.0], [39.5, 135888.0], [39.6, 135888.0], [39.7, 135888.0], [39.8, 135888.0], [39.9, 135888.0], [40.0, 135899.0], [40.1, 135899.0], [40.2, 135899.0], [40.3, 135899.0], [40.4, 135899.0], [40.5, 135899.0], [40.6, 135899.0], [40.7, 135899.0], [40.8, 135899.0], [40.9, 135899.0], [41.0, 135908.0], [41.1, 135908.0], [41.2, 135908.0], [41.3, 135908.0], [41.4, 135908.0], [41.5, 135908.0], [41.6, 135908.0], [41.7, 135908.0], [41.8, 135908.0], [41.9, 135908.0], [42.0, 135916.0], [42.1, 135916.0], [42.2, 135916.0], [42.3, 135916.0], [42.4, 135916.0], [42.5, 135916.0], [42.6, 135916.0], [42.7, 135916.0], [42.8, 135916.0], [42.9, 135916.0], [43.0, 135930.0], [43.1, 135930.0], [43.2, 135930.0], [43.3, 135930.0], [43.4, 135930.0], [43.5, 135930.0], [43.6, 135930.0], [43.7, 135930.0], [43.8, 135930.0], [43.9, 135930.0], [44.0, 135941.0], [44.1, 135941.0], [44.2, 135941.0], [44.3, 135941.0], [44.4, 135941.0], [44.5, 135941.0], [44.6, 135941.0], [44.7, 135941.0], [44.8, 135941.0], [44.9, 135941.0], [45.0, 135952.0], [45.1, 135952.0], [45.2, 135952.0], [45.3, 135952.0], [45.4, 135952.0], [45.5, 135952.0], [45.6, 135952.0], [45.7, 135952.0], [45.8, 135952.0], [45.9, 135952.0], [46.0, 135956.0], [46.1, 135956.0], [46.2, 135956.0], [46.3, 135956.0], [46.4, 135956.0], [46.5, 135956.0], [46.6, 135956.0], [46.7, 135956.0], [46.8, 135956.0], [46.9, 135956.0], [47.0, 135972.0], [47.1, 135972.0], [47.2, 135972.0], [47.3, 135972.0], [47.4, 135972.0], [47.5, 135972.0], [47.6, 135972.0], [47.7, 135972.0], [47.8, 135972.0], [47.9, 135972.0], [48.0, 135977.0], [48.1, 135977.0], [48.2, 135977.0], [48.3, 135977.0], [48.4, 135977.0], [48.5, 135977.0], [48.6, 135977.0], [48.7, 135977.0], [48.8, 135977.0], [48.9, 135977.0], [49.0, 135991.0], [49.1, 135991.0], [49.2, 135991.0], [49.3, 135991.0], [49.4, 135991.0], [49.5, 135991.0], [49.6, 135991.0], [49.7, 135991.0], [49.8, 135991.0], [49.9, 135991.0], [50.0, 136001.0], [50.1, 136001.0], [50.2, 136001.0], [50.3, 136001.0], [50.4, 136001.0], [50.5, 136001.0], [50.6, 136001.0], [50.7, 136001.0], [50.8, 136001.0], [50.9, 136001.0], [51.0, 136011.0], [51.1, 136011.0], [51.2, 136011.0], [51.3, 136011.0], [51.4, 136011.0], [51.5, 136011.0], [51.6, 136011.0], [51.7, 136011.0], [51.8, 136011.0], [51.9, 136011.0], [52.0, 136023.0], [52.1, 136023.0], [52.2, 136023.0], [52.3, 136023.0], [52.4, 136023.0], [52.5, 136023.0], [52.6, 136023.0], [52.7, 136023.0], [52.8, 136023.0], [52.9, 136023.0], [53.0, 136033.0], [53.1, 136033.0], [53.2, 136033.0], [53.3, 136033.0], [53.4, 136033.0], [53.5, 136033.0], [53.6, 136033.0], [53.7, 136033.0], [53.8, 136033.0], [53.9, 136033.0], [54.0, 136041.0], [54.1, 136041.0], [54.2, 136041.0], [54.3, 136041.0], [54.4, 136041.0], [54.5, 136041.0], [54.6, 136041.0], [54.7, 136041.0], [54.8, 136041.0], [54.9, 136041.0], [55.0, 136052.0], [55.1, 136052.0], [55.2, 136052.0], [55.3, 136052.0], [55.4, 136052.0], [55.5, 136052.0], [55.6, 136052.0], [55.7, 136052.0], [55.8, 136052.0], [55.9, 136052.0], [56.0, 136061.0], [56.1, 136061.0], [56.2, 136061.0], [56.3, 136061.0], [56.4, 136061.0], [56.5, 136061.0], [56.6, 136061.0], [56.7, 136061.0], [56.8, 136061.0], [56.9, 136061.0], [57.0, 136071.0], [57.1, 136071.0], [57.2, 136071.0], [57.3, 136071.0], [57.4, 136071.0], [57.5, 136071.0], [57.6, 136071.0], [57.7, 136071.0], [57.8, 136071.0], [57.9, 136071.0], [58.0, 136083.0], [58.1, 136083.0], [58.2, 136083.0], [58.3, 136083.0], [58.4, 136083.0], [58.5, 136083.0], [58.6, 136083.0], [58.7, 136083.0], [58.8, 136083.0], [58.9, 136083.0], [59.0, 136092.0], [59.1, 136092.0], [59.2, 136092.0], [59.3, 136092.0], [59.4, 136092.0], [59.5, 136092.0], [59.6, 136092.0], [59.7, 136092.0], [59.8, 136092.0], [59.9, 136092.0], [60.0, 136101.0], [60.1, 136101.0], [60.2, 136101.0], [60.3, 136101.0], [60.4, 136101.0], [60.5, 136101.0], [60.6, 136101.0], [60.7, 136101.0], [60.8, 136101.0], [60.9, 136101.0], [61.0, 136112.0], [61.1, 136112.0], [61.2, 136112.0], [61.3, 136112.0], [61.4, 136112.0], [61.5, 136112.0], [61.6, 136112.0], [61.7, 136112.0], [61.8, 136112.0], [61.9, 136112.0], [62.0, 136123.0], [62.1, 136123.0], [62.2, 136123.0], [62.3, 136123.0], [62.4, 136123.0], [62.5, 136123.0], [62.6, 136123.0], [62.7, 136123.0], [62.8, 136123.0], [62.9, 136123.0], [63.0, 136132.0], [63.1, 136132.0], [63.2, 136132.0], [63.3, 136132.0], [63.4, 136132.0], [63.5, 136132.0], [63.6, 136132.0], [63.7, 136132.0], [63.8, 136132.0], [63.9, 136132.0], [64.0, 136142.0], [64.1, 136142.0], [64.2, 136142.0], [64.3, 136142.0], [64.4, 136142.0], [64.5, 136142.0], [64.6, 136142.0], [64.7, 136142.0], [64.8, 136142.0], [64.9, 136142.0], [65.0, 136153.0], [65.1, 136153.0], [65.2, 136153.0], [65.3, 136153.0], [65.4, 136153.0], [65.5, 136153.0], [65.6, 136153.0], [65.7, 136153.0], [65.8, 136153.0], [65.9, 136153.0], [66.0, 136161.0], [66.1, 136161.0], [66.2, 136161.0], [66.3, 136161.0], [66.4, 136161.0], [66.5, 136161.0], [66.6, 136161.0], [66.7, 136161.0], [66.8, 136161.0], [66.9, 136161.0], [67.0, 136171.0], [67.1, 136171.0], [67.2, 136171.0], [67.3, 136171.0], [67.4, 136171.0], [67.5, 136171.0], [67.6, 136171.0], [67.7, 136171.0], [67.8, 136171.0], [67.9, 136171.0], [68.0, 136184.0], [68.1, 136184.0], [68.2, 136184.0], [68.3, 136184.0], [68.4, 136184.0], [68.5, 136184.0], [68.6, 136184.0], [68.7, 136184.0], [68.8, 136184.0], [68.9, 136184.0], [69.0, 136191.0], [69.1, 136191.0], [69.2, 136191.0], [69.3, 136191.0], [69.4, 136191.0], [69.5, 136191.0], [69.6, 136191.0], [69.7, 136191.0], [69.8, 136191.0], [69.9, 136191.0], [70.0, 136202.0], [70.1, 136202.0], [70.2, 136202.0], [70.3, 136202.0], [70.4, 136202.0], [70.5, 136202.0], [70.6, 136202.0], [70.7, 136202.0], [70.8, 136202.0], [70.9, 136202.0], [71.0, 136212.0], [71.1, 136212.0], [71.2, 136212.0], [71.3, 136212.0], [71.4, 136212.0], [71.5, 136212.0], [71.6, 136212.0], [71.7, 136212.0], [71.8, 136212.0], [71.9, 136212.0], [72.0, 136224.0], [72.1, 136224.0], [72.2, 136224.0], [72.3, 136224.0], [72.4, 136224.0], [72.5, 136224.0], [72.6, 136224.0], [72.7, 136224.0], [72.8, 136224.0], [72.9, 136224.0], [73.0, 136233.0], [73.1, 136233.0], [73.2, 136233.0], [73.3, 136233.0], [73.4, 136233.0], [73.5, 136233.0], [73.6, 136233.0], [73.7, 136233.0], [73.8, 136233.0], [73.9, 136233.0], [74.0, 136240.0], [74.1, 136240.0], [74.2, 136240.0], [74.3, 136240.0], [74.4, 136240.0], [74.5, 136240.0], [74.6, 136240.0], [74.7, 136240.0], [74.8, 136240.0], [74.9, 136240.0], [75.0, 136257.0], [75.1, 136257.0], [75.2, 136257.0], [75.3, 136257.0], [75.4, 136257.0], [75.5, 136257.0], [75.6, 136257.0], [75.7, 136257.0], [75.8, 136257.0], [75.9, 136257.0], [76.0, 136266.0], [76.1, 136266.0], [76.2, 136266.0], [76.3, 136266.0], [76.4, 136266.0], [76.5, 136266.0], [76.6, 136266.0], [76.7, 136266.0], [76.8, 136266.0], [76.9, 136266.0], [77.0, 136276.0], [77.1, 136276.0], [77.2, 136276.0], [77.3, 136276.0], [77.4, 136276.0], [77.5, 136276.0], [77.6, 136276.0], [77.7, 136276.0], [77.8, 136276.0], [77.9, 136276.0], [78.0, 136285.0], [78.1, 136285.0], [78.2, 136285.0], [78.3, 136285.0], [78.4, 136285.0], [78.5, 136285.0], [78.6, 136285.0], [78.7, 136285.0], [78.8, 136285.0], [78.9, 136285.0], [79.0, 136293.0], [79.1, 136293.0], [79.2, 136293.0], [79.3, 136293.0], [79.4, 136293.0], [79.5, 136293.0], [79.6, 136293.0], [79.7, 136293.0], [79.8, 136293.0], [79.9, 136293.0], [80.0, 136303.0], [80.1, 136303.0], [80.2, 136303.0], [80.3, 136303.0], [80.4, 136303.0], [80.5, 136303.0], [80.6, 136303.0], [80.7, 136303.0], [80.8, 136303.0], [80.9, 136303.0], [81.0, 136311.0], [81.1, 136311.0], [81.2, 136311.0], [81.3, 136311.0], [81.4, 136311.0], [81.5, 136311.0], [81.6, 136311.0], [81.7, 136311.0], [81.8, 136311.0], [81.9, 136311.0], [82.0, 136327.0], [82.1, 136327.0], [82.2, 136327.0], [82.3, 136327.0], [82.4, 136327.0], [82.5, 136327.0], [82.6, 136327.0], [82.7, 136327.0], [82.8, 136327.0], [82.9, 136327.0], [83.0, 136336.0], [83.1, 136336.0], [83.2, 136336.0], [83.3, 136336.0], [83.4, 136336.0], [83.5, 136336.0], [83.6, 136336.0], [83.7, 136336.0], [83.8, 136336.0], [83.9, 136336.0], [84.0, 136345.0], [84.1, 136345.0], [84.2, 136345.0], [84.3, 136345.0], [84.4, 136345.0], [84.5, 136345.0], [84.6, 136345.0], [84.7, 136345.0], [84.8, 136345.0], [84.9, 136345.0], [85.0, 136355.0], [85.1, 136355.0], [85.2, 136355.0], [85.3, 136355.0], [85.4, 136355.0], [85.5, 136355.0], [85.6, 136355.0], [85.7, 136355.0], [85.8, 136355.0], [85.9, 136355.0], [86.0, 136362.0], [86.1, 136362.0], [86.2, 136362.0], [86.3, 136362.0], [86.4, 136362.0], [86.5, 136362.0], [86.6, 136362.0], [86.7, 136362.0], [86.8, 136362.0], [86.9, 136362.0], [87.0, 136368.0], [87.1, 136368.0], [87.2, 136368.0], [87.3, 136368.0], [87.4, 136368.0], [87.5, 136368.0], [87.6, 136368.0], [87.7, 136368.0], [87.8, 136368.0], [87.9, 136368.0], [88.0, 136376.0], [88.1, 136376.0], [88.2, 136376.0], [88.3, 136376.0], [88.4, 136376.0], [88.5, 136376.0], [88.6, 136376.0], [88.7, 136376.0], [88.8, 136376.0], [88.9, 136376.0], [89.0, 136387.0], [89.1, 136387.0], [89.2, 136387.0], [89.3, 136387.0], [89.4, 136387.0], [89.5, 136387.0], [89.6, 136387.0], [89.7, 136387.0], [89.8, 136387.0], [89.9, 136387.0], [90.0, 136398.0], [90.1, 136398.0], [90.2, 136398.0], [90.3, 136398.0], [90.4, 136398.0], [90.5, 136398.0], [90.6, 136398.0], [90.7, 136398.0], [90.8, 136398.0], [90.9, 136398.0], [91.0, 136408.0], [91.1, 136408.0], [91.2, 136408.0], [91.3, 136408.0], [91.4, 136408.0], [91.5, 136408.0], [91.6, 136408.0], [91.7, 136408.0], [91.8, 136408.0], [91.9, 136408.0], [92.0, 136419.0], [92.1, 136419.0], [92.2, 136419.0], [92.3, 136419.0], [92.4, 136419.0], [92.5, 136419.0], [92.6, 136419.0], [92.7, 136419.0], [92.8, 136419.0], [92.9, 136419.0], [93.0, 136431.0], [93.1, 136431.0], [93.2, 136431.0], [93.3, 136431.0], [93.4, 136431.0], [93.5, 136431.0], [93.6, 136431.0], [93.7, 136431.0], [93.8, 136431.0], [93.9, 136431.0], [94.0, 136437.0], [94.1, 136437.0], [94.2, 136437.0], [94.3, 136437.0], [94.4, 136437.0], [94.5, 136437.0], [94.6, 136437.0], [94.7, 136437.0], [94.8, 136437.0], [94.9, 136437.0], [95.0, 136449.0], [95.1, 136449.0], [95.2, 136449.0], [95.3, 136449.0], [95.4, 136449.0], [95.5, 136449.0], [95.6, 136449.0], [95.7, 136449.0], [95.8, 136449.0], [95.9, 136449.0], [96.0, 136459.0], [96.1, 136459.0], [96.2, 136459.0], [96.3, 136459.0], [96.4, 136459.0], [96.5, 136459.0], [96.6, 136459.0], [96.7, 136459.0], [96.8, 136459.0], [96.9, 136459.0], [97.0, 136466.0], [97.1, 136466.0], [97.2, 136466.0], [97.3, 136466.0], [97.4, 136466.0], [97.5, 136466.0], [97.6, 136466.0], [97.7, 136466.0], [97.8, 136466.0], [97.9, 136466.0], [98.0, 136476.0], [98.1, 136476.0], [98.2, 136476.0], [98.3, 136476.0], [98.4, 136476.0], [98.5, 136476.0], [98.6, 136476.0], [98.7, 136476.0], [98.8, 136476.0], [98.9, 136476.0], [99.0, 136486.0], [99.1, 136486.0], [99.2, 136486.0], [99.3, 136486.0], [99.4, 136486.0], [99.5, 136486.0], [99.6, 136486.0], [99.7, 136486.0], [99.8, 136486.0], [99.9, 136486.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 132400.0, "maxY": 18.0, "series": [{"data": [[132600.0, 18.0], [132400.0, 10.0], [136400.0, 9.0], [135800.0, 3.0], [136200.0, 10.0], [136000.0, 10.0], [132500.0, 10.0], [135900.0, 9.0], [136300.0, 11.0], [136100.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 54.34, "minX": 1.75851048E12, "maxY": 54.34, "series": [{"data": [[1.75851048E12, 54.34]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75851048E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132442.0, "minX": 2.0, "maxY": 136434.0, "series": [{"data": [[2.0, 136041.0], [4.0, 136046.0], [7.0, 136052.0], [9.0, 136061.0], [10.0, 136033.0], [12.0, 135911.5], [14.0, 136041.0], [17.0, 136161.0], [18.0, 136086.0], [19.0, 136022.0], [20.0, 136088.0], [21.0, 136132.0], [22.0, 136123.0], [23.0, 136164.25], [25.0, 136316.5], [26.0, 135972.0], [27.0, 136327.0], [29.0, 136257.0], [30.0, 136336.0], [31.0, 136266.0], [33.0, 136355.0], [32.0, 136310.5], [34.0, 136285.0], [37.0, 136184.0], [36.0, 136303.0], [39.0, 135930.0], [43.0, 136223.0], [46.0, 136147.33333333334], [51.0, 136163.4], [52.0, 136398.0], [55.0, 136387.0], [54.0, 136434.0], [56.0, 136408.0], [59.0, 136376.0], [58.0, 136128.0], [61.0, 136221.5], [62.0, 136338.75], [71.0, 132630.0], [70.0, 132643.5], [68.0, 132541.0], [75.0, 132512.0], [74.0, 132552.5], [79.0, 132442.0], [78.0, 132613.0], [76.0, 132648.5], [83.0, 132566.5], [81.0, 132634.5], [87.0, 132527.5], [84.0, 132521.0], [88.0, 132645.0], [93.0, 132601.0], [98.0, 132510.0], [100.0, 132549.53846153844]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[54.34, 134810.1599999999]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75851048E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75851048E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75851048E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75851048E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 134810.1599999999, "minX": 1.75851048E12, "maxY": 134810.1599999999, "series": [{"data": [[1.75851048E12, 134810.1599999999]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75851048E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75851048E12, "maxY": 4.9E-324, "series": [{"data": [[1.75851048E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75851048E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 134810.1499999999, "minX": 1.75851048E12, "maxY": 134810.1499999999, "series": [{"data": [[1.75851048E12, 134810.1499999999]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75851048E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 132586.0, "minX": 38.0, "maxY": 136187.5, "series": [{"data": [[38.0, 132586.0], [62.0, 136187.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 38.0, "maxY": 4.9E-324, "series": [{"data": [[38.0, 0.0], [62.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 62.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7585103E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7585103E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7585103E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75851048E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75851048E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75851048E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75851048E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75851048E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75851048E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75851048E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75851048E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75851048E12, "title": "Total Transactions Per Second"}},
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

