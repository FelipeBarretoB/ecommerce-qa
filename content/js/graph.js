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
        data: {"result": {"minY": 134739.0, "minX": 0.0, "maxY": 135600.0, "series": [{"data": [[0.0, 134739.0], [0.1, 134739.0], [0.2, 134739.0], [0.3, 134739.0], [0.4, 134739.0], [0.5, 134739.0], [0.6, 134739.0], [0.7, 134739.0], [0.8, 134739.0], [0.9, 134739.0], [1.0, 134749.0], [1.1, 134749.0], [1.2, 134749.0], [1.3, 134749.0], [1.4, 134749.0], [1.5, 134749.0], [1.6, 134749.0], [1.7, 134749.0], [1.8, 134749.0], [1.9, 134749.0], [2.0, 134756.0], [2.1, 134756.0], [2.2, 134756.0], [2.3, 134756.0], [2.4, 134756.0], [2.5, 134756.0], [2.6, 134756.0], [2.7, 134756.0], [2.8, 134756.0], [2.9, 134756.0], [3.0, 134765.0], [3.1, 134765.0], [3.2, 134765.0], [3.3, 134765.0], [3.4, 134765.0], [3.5, 134765.0], [3.6, 134765.0], [3.7, 134765.0], [3.8, 134765.0], [3.9, 134765.0], [4.0, 134779.0], [4.1, 134779.0], [4.2, 134779.0], [4.3, 134779.0], [4.4, 134779.0], [4.5, 134779.0], [4.6, 134779.0], [4.7, 134779.0], [4.8, 134779.0], [4.9, 134779.0], [5.0, 134789.0], [5.1, 134789.0], [5.2, 134789.0], [5.3, 134789.0], [5.4, 134789.0], [5.5, 134789.0], [5.6, 134789.0], [5.7, 134789.0], [5.8, 134789.0], [5.9, 134789.0], [6.0, 134797.0], [6.1, 134797.0], [6.2, 134797.0], [6.3, 134797.0], [6.4, 134797.0], [6.5, 134797.0], [6.6, 134797.0], [6.7, 134797.0], [6.8, 134797.0], [6.9, 134797.0], [7.0, 134811.0], [7.1, 134811.0], [7.2, 134811.0], [7.3, 134811.0], [7.4, 134811.0], [7.5, 134811.0], [7.6, 134811.0], [7.7, 134811.0], [7.8, 134811.0], [7.9, 134811.0], [8.0, 134819.0], [8.1, 134819.0], [8.2, 134819.0], [8.3, 134819.0], [8.4, 134819.0], [8.5, 134819.0], [8.6, 134819.0], [8.7, 134819.0], [8.8, 134819.0], [8.9, 134819.0], [9.0, 134829.0], [9.1, 134829.0], [9.2, 134829.0], [9.3, 134829.0], [9.4, 134829.0], [9.5, 134829.0], [9.6, 134829.0], [9.7, 134829.0], [9.8, 134829.0], [9.9, 134829.0], [10.0, 134837.0], [10.1, 134837.0], [10.2, 134837.0], [10.3, 134837.0], [10.4, 134837.0], [10.5, 134837.0], [10.6, 134837.0], [10.7, 134837.0], [10.8, 134837.0], [10.9, 134837.0], [11.0, 134848.0], [11.1, 134848.0], [11.2, 134848.0], [11.3, 134848.0], [11.4, 134848.0], [11.5, 134848.0], [11.6, 134848.0], [11.7, 134848.0], [11.8, 134848.0], [11.9, 134848.0], [12.0, 134858.0], [12.1, 134858.0], [12.2, 134858.0], [12.3, 134858.0], [12.4, 134858.0], [12.5, 134858.0], [12.6, 134858.0], [12.7, 134858.0], [12.8, 134858.0], [12.9, 134858.0], [13.0, 134868.0], [13.1, 134868.0], [13.2, 134868.0], [13.3, 134868.0], [13.4, 134868.0], [13.5, 134868.0], [13.6, 134868.0], [13.7, 134868.0], [13.8, 134868.0], [13.9, 134868.0], [14.0, 134877.0], [14.1, 134877.0], [14.2, 134877.0], [14.3, 134877.0], [14.4, 134877.0], [14.5, 134877.0], [14.6, 134877.0], [14.7, 134877.0], [14.8, 134877.0], [14.9, 134877.0], [15.0, 134888.0], [15.1, 134888.0], [15.2, 134888.0], [15.3, 134888.0], [15.4, 134888.0], [15.5, 134888.0], [15.6, 134888.0], [15.7, 134888.0], [15.8, 134888.0], [15.9, 134888.0], [16.0, 134897.0], [16.1, 134897.0], [16.2, 134897.0], [16.3, 134897.0], [16.4, 134897.0], [16.5, 134897.0], [16.6, 134897.0], [16.7, 134897.0], [16.8, 134897.0], [16.9, 134897.0], [17.0, 134908.0], [17.1, 134908.0], [17.2, 134908.0], [17.3, 134908.0], [17.4, 134908.0], [17.5, 134908.0], [17.6, 134908.0], [17.7, 134908.0], [17.8, 134908.0], [17.9, 134908.0], [18.0, 134920.0], [18.1, 134920.0], [18.2, 134920.0], [18.3, 134920.0], [18.4, 134920.0], [18.5, 134920.0], [18.6, 134920.0], [18.7, 134920.0], [18.8, 134920.0], [18.9, 134920.0], [19.0, 134927.0], [19.1, 134927.0], [19.2, 134927.0], [19.3, 134927.0], [19.4, 134927.0], [19.5, 134927.0], [19.6, 134927.0], [19.7, 134927.0], [19.8, 134927.0], [19.9, 134927.0], [20.0, 134939.0], [20.1, 134939.0], [20.2, 134939.0], [20.3, 134939.0], [20.4, 134939.0], [20.5, 134939.0], [20.6, 134939.0], [20.7, 134939.0], [20.8, 134939.0], [20.9, 134939.0], [21.0, 134948.0], [21.1, 134948.0], [21.2, 134948.0], [21.3, 134948.0], [21.4, 134948.0], [21.5, 134948.0], [21.6, 134948.0], [21.7, 134948.0], [21.8, 134948.0], [21.9, 134948.0], [22.0, 134958.0], [22.1, 134958.0], [22.2, 134958.0], [22.3, 134958.0], [22.4, 134958.0], [22.5, 134958.0], [22.6, 134958.0], [22.7, 134958.0], [22.8, 134958.0], [22.9, 134958.0], [23.0, 134969.0], [23.1, 134969.0], [23.2, 134969.0], [23.3, 134969.0], [23.4, 134969.0], [23.5, 134969.0], [23.6, 134969.0], [23.7, 134969.0], [23.8, 134969.0], [23.9, 134969.0], [24.0, 134979.0], [24.1, 134979.0], [24.2, 134979.0], [24.3, 134979.0], [24.4, 134979.0], [24.5, 134979.0], [24.6, 134979.0], [24.7, 134979.0], [24.8, 134979.0], [24.9, 134979.0], [25.0, 134988.0], [25.1, 134988.0], [25.2, 134988.0], [25.3, 134988.0], [25.4, 134988.0], [25.5, 134988.0], [25.6, 134988.0], [25.7, 134988.0], [25.8, 134988.0], [25.9, 134988.0], [26.0, 134999.0], [26.1, 134999.0], [26.2, 134999.0], [26.3, 134999.0], [26.4, 134999.0], [26.5, 134999.0], [26.6, 134999.0], [26.7, 134999.0], [26.8, 134999.0], [26.9, 134999.0], [27.0, 135008.0], [27.1, 135008.0], [27.2, 135008.0], [27.3, 135008.0], [27.4, 135008.0], [27.5, 135008.0], [27.6, 135008.0], [27.7, 135008.0], [27.8, 135008.0], [27.9, 135008.0], [28.0, 135019.0], [28.1, 135019.0], [28.2, 135019.0], [28.3, 135019.0], [28.4, 135019.0], [28.5, 135019.0], [28.6, 135019.0], [28.7, 135019.0], [28.8, 135019.0], [28.9, 135019.0], [29.0, 135029.0], [29.1, 135029.0], [29.2, 135029.0], [29.3, 135029.0], [29.4, 135029.0], [29.5, 135029.0], [29.6, 135029.0], [29.7, 135029.0], [29.8, 135029.0], [29.9, 135029.0], [30.0, 135039.0], [30.1, 135039.0], [30.2, 135039.0], [30.3, 135039.0], [30.4, 135039.0], [30.5, 135039.0], [30.6, 135039.0], [30.7, 135039.0], [30.8, 135039.0], [30.9, 135039.0], [31.0, 135047.0], [31.1, 135047.0], [31.2, 135047.0], [31.3, 135047.0], [31.4, 135047.0], [31.5, 135047.0], [31.6, 135047.0], [31.7, 135047.0], [31.8, 135047.0], [31.9, 135047.0], [32.0, 135059.0], [32.1, 135059.0], [32.2, 135059.0], [32.3, 135059.0], [32.4, 135059.0], [32.5, 135059.0], [32.6, 135059.0], [32.7, 135059.0], [32.8, 135059.0], [32.9, 135059.0], [33.0, 135068.0], [33.1, 135068.0], [33.2, 135068.0], [33.3, 135068.0], [33.4, 135068.0], [33.5, 135068.0], [33.6, 135068.0], [33.7, 135068.0], [33.8, 135068.0], [33.9, 135068.0], [34.0, 135079.0], [34.1, 135079.0], [34.2, 135079.0], [34.3, 135079.0], [34.4, 135079.0], [34.5, 135079.0], [34.6, 135079.0], [34.7, 135079.0], [34.8, 135079.0], [34.9, 135079.0], [35.0, 135088.0], [35.1, 135088.0], [35.2, 135088.0], [35.3, 135088.0], [35.4, 135088.0], [35.5, 135088.0], [35.6, 135088.0], [35.7, 135088.0], [35.8, 135088.0], [35.9, 135088.0], [36.0, 135098.0], [36.1, 135098.0], [36.2, 135098.0], [36.3, 135098.0], [36.4, 135098.0], [36.5, 135098.0], [36.6, 135098.0], [36.7, 135098.0], [36.8, 135098.0], [36.9, 135098.0], [37.0, 135108.0], [37.1, 135108.0], [37.2, 135108.0], [37.3, 135108.0], [37.4, 135108.0], [37.5, 135108.0], [37.6, 135108.0], [37.7, 135108.0], [37.8, 135108.0], [37.9, 135108.0], [38.0, 135118.0], [38.1, 135118.0], [38.2, 135118.0], [38.3, 135118.0], [38.4, 135118.0], [38.5, 135118.0], [38.6, 135118.0], [38.7, 135118.0], [38.8, 135118.0], [38.9, 135118.0], [39.0, 135127.0], [39.1, 135127.0], [39.2, 135127.0], [39.3, 135127.0], [39.4, 135127.0], [39.5, 135127.0], [39.6, 135127.0], [39.7, 135127.0], [39.8, 135127.0], [39.9, 135127.0], [40.0, 135139.0], [40.1, 135139.0], [40.2, 135139.0], [40.3, 135139.0], [40.4, 135139.0], [40.5, 135139.0], [40.6, 135139.0], [40.7, 135139.0], [40.8, 135139.0], [40.9, 135139.0], [41.0, 135148.0], [41.1, 135148.0], [41.2, 135148.0], [41.3, 135148.0], [41.4, 135148.0], [41.5, 135148.0], [41.6, 135148.0], [41.7, 135148.0], [41.8, 135148.0], [41.9, 135148.0], [42.0, 135158.0], [42.1, 135158.0], [42.2, 135158.0], [42.3, 135158.0], [42.4, 135158.0], [42.5, 135158.0], [42.6, 135158.0], [42.7, 135158.0], [42.8, 135158.0], [42.9, 135158.0], [43.0, 135168.0], [43.1, 135168.0], [43.2, 135168.0], [43.3, 135168.0], [43.4, 135168.0], [43.5, 135168.0], [43.6, 135168.0], [43.7, 135168.0], [43.8, 135168.0], [43.9, 135168.0], [44.0, 135179.0], [44.1, 135179.0], [44.2, 135179.0], [44.3, 135179.0], [44.4, 135179.0], [44.5, 135179.0], [44.6, 135179.0], [44.7, 135179.0], [44.8, 135179.0], [44.9, 135179.0], [45.0, 135188.0], [45.1, 135188.0], [45.2, 135188.0], [45.3, 135188.0], [45.4, 135188.0], [45.5, 135188.0], [45.6, 135188.0], [45.7, 135188.0], [45.8, 135188.0], [45.9, 135188.0], [46.0, 135199.0], [46.1, 135199.0], [46.2, 135199.0], [46.3, 135199.0], [46.4, 135199.0], [46.5, 135199.0], [46.6, 135199.0], [46.7, 135199.0], [46.8, 135199.0], [46.9, 135199.0], [47.0, 135209.0], [47.1, 135209.0], [47.2, 135209.0], [47.3, 135209.0], [47.4, 135209.0], [47.5, 135209.0], [47.6, 135209.0], [47.7, 135209.0], [47.8, 135209.0], [47.9, 135209.0], [48.0, 135218.0], [48.1, 135218.0], [48.2, 135218.0], [48.3, 135218.0], [48.4, 135218.0], [48.5, 135218.0], [48.6, 135218.0], [48.7, 135218.0], [48.8, 135218.0], [48.9, 135218.0], [49.0, 135228.0], [49.1, 135228.0], [49.2, 135228.0], [49.3, 135228.0], [49.4, 135228.0], [49.5, 135228.0], [49.6, 135228.0], [49.7, 135228.0], [49.8, 135228.0], [49.9, 135228.0], [50.0, 135239.0], [50.1, 135239.0], [50.2, 135239.0], [50.3, 135239.0], [50.4, 135239.0], [50.5, 135239.0], [50.6, 135239.0], [50.7, 135239.0], [50.8, 135239.0], [50.9, 135239.0], [51.0, 135247.0], [51.1, 135247.0], [51.2, 135247.0], [51.3, 135247.0], [51.4, 135247.0], [51.5, 135247.0], [51.6, 135247.0], [51.7, 135247.0], [51.8, 135247.0], [51.9, 135247.0], [52.0, 135257.0], [52.1, 135257.0], [52.2, 135257.0], [52.3, 135257.0], [52.4, 135257.0], [52.5, 135257.0], [52.6, 135257.0], [52.7, 135257.0], [52.8, 135257.0], [52.9, 135257.0], [53.0, 135268.0], [53.1, 135268.0], [53.2, 135268.0], [53.3, 135268.0], [53.4, 135268.0], [53.5, 135268.0], [53.6, 135268.0], [53.7, 135268.0], [53.8, 135268.0], [53.9, 135268.0], [54.0, 135275.0], [54.1, 135275.0], [54.2, 135275.0], [54.3, 135275.0], [54.4, 135275.0], [54.5, 135275.0], [54.6, 135275.0], [54.7, 135275.0], [54.8, 135275.0], [54.9, 135275.0], [55.0, 135286.0], [55.1, 135286.0], [55.2, 135286.0], [55.3, 135286.0], [55.4, 135286.0], [55.5, 135286.0], [55.6, 135286.0], [55.7, 135286.0], [55.8, 135286.0], [55.9, 135286.0], [56.0, 135297.0], [56.1, 135297.0], [56.2, 135297.0], [56.3, 135297.0], [56.4, 135297.0], [56.5, 135297.0], [56.6, 135297.0], [56.7, 135297.0], [56.8, 135297.0], [56.9, 135297.0], [57.0, 135309.0], [57.1, 135309.0], [57.2, 135309.0], [57.3, 135309.0], [57.4, 135309.0], [57.5, 135309.0], [57.6, 135309.0], [57.7, 135309.0], [57.8, 135309.0], [57.9, 135309.0], [58.0, 135316.0], [58.1, 135316.0], [58.2, 135316.0], [58.3, 135316.0], [58.4, 135316.0], [58.5, 135316.0], [58.6, 135316.0], [58.7, 135316.0], [58.8, 135316.0], [58.9, 135316.0], [59.0, 135327.0], [59.1, 135327.0], [59.2, 135327.0], [59.3, 135327.0], [59.4, 135327.0], [59.5, 135327.0], [59.6, 135327.0], [59.7, 135327.0], [59.8, 135327.0], [59.9, 135327.0], [60.0, 135337.0], [60.1, 135337.0], [60.2, 135337.0], [60.3, 135337.0], [60.4, 135337.0], [60.5, 135337.0], [60.6, 135337.0], [60.7, 135337.0], [60.8, 135337.0], [60.9, 135337.0], [61.0, 135345.0], [61.1, 135345.0], [61.2, 135345.0], [61.3, 135345.0], [61.4, 135345.0], [61.5, 135345.0], [61.6, 135345.0], [61.7, 135345.0], [61.8, 135345.0], [61.9, 135345.0], [62.0, 135359.0], [62.1, 135359.0], [62.2, 135359.0], [62.3, 135359.0], [62.4, 135359.0], [62.5, 135359.0], [62.6, 135359.0], [62.7, 135359.0], [62.8, 135359.0], [62.9, 135359.0], [63.0, 135366.0], [63.1, 135366.0], [63.2, 135366.0], [63.3, 135366.0], [63.4, 135366.0], [63.5, 135366.0], [63.6, 135366.0], [63.7, 135366.0], [63.8, 135366.0], [63.9, 135366.0], [64.0, 135379.0], [64.1, 135379.0], [64.2, 135379.0], [64.3, 135379.0], [64.4, 135379.0], [64.5, 135379.0], [64.6, 135379.0], [64.7, 135379.0], [64.8, 135379.0], [64.9, 135379.0], [65.0, 135387.0], [65.1, 135387.0], [65.2, 135387.0], [65.3, 135387.0], [65.4, 135387.0], [65.5, 135387.0], [65.6, 135387.0], [65.7, 135387.0], [65.8, 135387.0], [65.9, 135387.0], [66.0, 135397.0], [66.1, 135397.0], [66.2, 135397.0], [66.3, 135397.0], [66.4, 135397.0], [66.5, 135397.0], [66.6, 135397.0], [66.7, 135397.0], [66.8, 135397.0], [66.9, 135397.0], [67.0, 135406.0], [67.1, 135406.0], [67.2, 135406.0], [67.3, 135406.0], [67.4, 135406.0], [67.5, 135406.0], [67.6, 135406.0], [67.7, 135406.0], [67.8, 135406.0], [67.9, 135406.0], [68.0, 135418.0], [68.1, 135418.0], [68.2, 135418.0], [68.3, 135418.0], [68.4, 135418.0], [68.5, 135418.0], [68.6, 135418.0], [68.7, 135418.0], [68.8, 135418.0], [68.9, 135418.0], [69.0, 135427.0], [69.1, 135427.0], [69.2, 135427.0], [69.3, 135427.0], [69.4, 135427.0], [69.5, 135427.0], [69.6, 135427.0], [69.7, 135427.0], [69.8, 135427.0], [69.9, 135427.0], [70.0, 135437.0], [70.1, 135437.0], [70.2, 135437.0], [70.3, 135437.0], [70.4, 135437.0], [70.5, 135437.0], [70.6, 135437.0], [70.7, 135437.0], [70.8, 135437.0], [70.9, 135437.0], [71.0, 135447.0], [71.1, 135447.0], [71.2, 135447.0], [71.3, 135447.0], [71.4, 135447.0], [71.5, 135447.0], [71.6, 135447.0], [71.7, 135447.0], [71.8, 135447.0], [71.9, 135447.0], [72.0, 135456.0], [72.1, 135456.0], [72.2, 135456.0], [72.3, 135456.0], [72.4, 135456.0], [72.5, 135456.0], [72.6, 135456.0], [72.7, 135456.0], [72.8, 135456.0], [72.9, 135456.0], [73.0, 135466.0], [73.1, 135466.0], [73.2, 135466.0], [73.3, 135466.0], [73.4, 135466.0], [73.5, 135466.0], [73.6, 135466.0], [73.7, 135466.0], [73.8, 135466.0], [73.9, 135466.0], [74.0, 135474.0], [74.1, 135474.0], [74.2, 135474.0], [74.3, 135474.0], [74.4, 135474.0], [74.5, 135474.0], [74.6, 135474.0], [74.7, 135474.0], [74.8, 135474.0], [74.9, 135474.0], [75.0, 135482.0], [75.1, 135482.0], [75.2, 135482.0], [75.3, 135482.0], [75.4, 135482.0], [75.5, 135482.0], [75.6, 135482.0], [75.7, 135482.0], [75.8, 135482.0], [75.9, 135482.0], [76.0, 135494.0], [76.1, 135494.0], [76.2, 135494.0], [76.3, 135494.0], [76.4, 135494.0], [76.5, 135494.0], [76.6, 135494.0], [76.7, 135494.0], [76.8, 135494.0], [76.9, 135494.0], [77.0, 135502.0], [77.1, 135502.0], [77.2, 135502.0], [77.3, 135502.0], [77.4, 135502.0], [77.5, 135502.0], [77.6, 135502.0], [77.7, 135502.0], [77.8, 135502.0], [77.9, 135502.0], [78.0, 135511.0], [78.1, 135511.0], [78.2, 135511.0], [78.3, 135511.0], [78.4, 135511.0], [78.5, 135511.0], [78.6, 135511.0], [78.7, 135511.0], [78.8, 135511.0], [78.9, 135511.0], [79.0, 135523.0], [79.1, 135523.0], [79.2, 135523.0], [79.3, 135523.0], [79.4, 135523.0], [79.5, 135523.0], [79.6, 135523.0], [79.7, 135523.0], [79.8, 135523.0], [79.9, 135523.0], [80.0, 135539.0], [80.1, 135539.0], [80.2, 135539.0], [80.3, 135539.0], [80.4, 135539.0], [80.5, 135539.0], [80.6, 135539.0], [80.7, 135539.0], [80.8, 135539.0], [80.9, 135539.0], [81.0, 135547.0], [81.1, 135547.0], [81.2, 135547.0], [81.3, 135547.0], [81.4, 135547.0], [81.5, 135547.0], [81.6, 135547.0], [81.7, 135547.0], [81.8, 135547.0], [81.9, 135547.0], [82.0, 135558.0], [82.1, 135558.0], [82.2, 135558.0], [82.3, 135558.0], [82.4, 135558.0], [82.5, 135558.0], [82.6, 135558.0], [82.7, 135558.0], [82.8, 135558.0], [82.9, 135558.0], [83.0, 135568.0], [83.1, 135568.0], [83.2, 135568.0], [83.3, 135568.0], [83.4, 135568.0], [83.5, 135568.0], [83.6, 135568.0], [83.7, 135568.0], [83.8, 135568.0], [83.9, 135568.0], [84.0, 135577.0], [84.1, 135577.0], [84.2, 135577.0], [84.3, 135577.0], [84.4, 135577.0], [84.5, 135577.0], [84.6, 135577.0], [84.7, 135577.0], [84.8, 135577.0], [84.9, 135577.0], [85.0, 135587.0], [85.1, 135587.0], [85.2, 135587.0], [85.3, 135587.0], [85.4, 135587.0], [85.5, 135587.0], [85.6, 135587.0], [85.7, 135587.0], [85.8, 135587.0], [85.9, 135587.0], [86.0, 135597.0], [86.1, 135597.0], [86.2, 135597.0], [86.3, 135597.0], [86.4, 135597.0], [86.5, 135597.0], [86.6, 135597.0], [86.7, 135597.0], [86.8, 135597.0], [86.9, 135597.0], [87.0, 135597.0], [87.1, 135597.0], [87.2, 135597.0], [87.3, 135597.0], [87.4, 135597.0], [87.5, 135597.0], [87.6, 135597.0], [87.7, 135597.0], [87.8, 135597.0], [87.9, 135597.0], [88.0, 135598.0], [88.1, 135598.0], [88.2, 135598.0], [88.3, 135598.0], [88.4, 135598.0], [88.5, 135598.0], [88.6, 135598.0], [88.7, 135598.0], [88.8, 135598.0], [88.9, 135598.0], [89.0, 135598.0], [89.1, 135598.0], [89.2, 135598.0], [89.3, 135598.0], [89.4, 135598.0], [89.5, 135598.0], [89.6, 135598.0], [89.7, 135598.0], [89.8, 135598.0], [89.9, 135598.0], [90.0, 135598.0], [90.1, 135598.0], [90.2, 135598.0], [90.3, 135598.0], [90.4, 135598.0], [90.5, 135598.0], [90.6, 135598.0], [90.7, 135598.0], [90.8, 135598.0], [90.9, 135598.0], [91.0, 135598.0], [91.1, 135598.0], [91.2, 135598.0], [91.3, 135598.0], [91.4, 135598.0], [91.5, 135598.0], [91.6, 135598.0], [91.7, 135598.0], [91.8, 135598.0], [91.9, 135598.0], [92.0, 135598.0], [92.1, 135598.0], [92.2, 135598.0], [92.3, 135598.0], [92.4, 135598.0], [92.5, 135598.0], [92.6, 135598.0], [92.7, 135598.0], [92.8, 135598.0], [92.9, 135598.0], [93.0, 135598.0], [93.1, 135598.0], [93.2, 135598.0], [93.3, 135598.0], [93.4, 135598.0], [93.5, 135598.0], [93.6, 135598.0], [93.7, 135598.0], [93.8, 135598.0], [93.9, 135598.0], [94.0, 135598.0], [94.1, 135598.0], [94.2, 135598.0], [94.3, 135598.0], [94.4, 135598.0], [94.5, 135598.0], [94.6, 135598.0], [94.7, 135598.0], [94.8, 135598.0], [94.9, 135598.0], [95.0, 135599.0], [95.1, 135599.0], [95.2, 135599.0], [95.3, 135599.0], [95.4, 135599.0], [95.5, 135599.0], [95.6, 135599.0], [95.7, 135599.0], [95.8, 135599.0], [95.9, 135599.0], [96.0, 135599.0], [96.1, 135599.0], [96.2, 135599.0], [96.3, 135599.0], [96.4, 135599.0], [96.5, 135599.0], [96.6, 135599.0], [96.7, 135599.0], [96.8, 135599.0], [96.9, 135599.0], [97.0, 135599.0], [97.1, 135599.0], [97.2, 135599.0], [97.3, 135599.0], [97.4, 135599.0], [97.5, 135599.0], [97.6, 135599.0], [97.7, 135599.0], [97.8, 135599.0], [97.9, 135599.0], [98.0, 135600.0], [98.1, 135600.0], [98.2, 135600.0], [98.3, 135600.0], [98.4, 135600.0], [98.5, 135600.0], [98.6, 135600.0], [98.7, 135600.0], [98.8, 135600.0], [98.9, 135600.0], [99.0, 135600.0], [99.1, 135600.0], [99.2, 135600.0], [99.3, 135600.0], [99.4, 135600.0], [99.5, 135600.0], [99.6, 135600.0], [99.7, 135600.0], [99.8, 135600.0], [99.9, 135600.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 134700.0, "maxY": 21.0, "series": [{"data": [[135400.0, 10.0], [135600.0, 2.0], [135000.0, 10.0], [135200.0, 10.0], [134800.0, 10.0], [135300.0, 10.0], [134700.0, 7.0], [135500.0, 21.0], [134900.0, 10.0], [135100.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 135600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 53.48999999999998, "minX": 1.7637807E12, "maxY": 53.48999999999998, "series": [{"data": [[1.7637807E12, 53.48999999999998]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7637807E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 134765.0, "minX": 2.0, "maxY": 135599.0, "series": [{"data": [[2.0, 134865.5], [4.0, 134877.0], [5.0, 135316.0], [6.0, 135598.0], [7.0, 134888.0], [9.0, 135327.0], [10.0, 135599.0], [11.0, 135598.0], [13.0, 135257.0], [14.0, 135432.0], [17.0, 135466.0], [19.0, 135359.25], [20.0, 134897.0], [21.0, 135511.0], [22.0, 135456.0], [24.0, 135482.0], [25.0, 135366.0], [27.0, 135247.0], [28.0, 135597.0], [29.0, 135264.33333333334], [31.0, 135340.5], [35.0, 134837.0], [34.0, 135163.66666666666], [36.0, 135502.0], [38.0, 135247.5], [41.0, 135168.0], [40.0, 135587.0], [47.0, 135568.0], [46.0, 135218.0], [51.0, 135239.0], [52.0, 134999.0], [55.0, 135247.66666666666], [56.0, 135577.0], [58.0, 135387.0], [61.0, 134973.0], [60.0, 135516.0], [64.0, 135134.66666666666], [71.0, 135118.0], [70.0, 135539.0], [68.0, 135105.25], [74.0, 134829.0], [73.0, 134819.0], [72.0, 134997.5], [79.0, 135598.0], [78.0, 134765.0], [76.0, 135034.0], [83.0, 135268.0], [82.0, 135019.0], [80.0, 134958.0], [87.0, 134969.0], [84.0, 135209.0], [91.0, 135199.0], [89.0, 134988.0], [94.0, 135139.0], [99.0, 134939.0], [97.0, 135019.0], [100.0, 135231.66666666666]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[53.449999999999974, 135223.49000000005]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7637807E12, "maxY": 4708.333333333333, "series": [{"data": [[1.7637807E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7637807E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7637807E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 135223.49000000005, "minX": 1.7637807E12, "maxY": 135223.49000000005, "series": [{"data": [[1.7637807E12, 135223.49000000005]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7637807E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7637807E12, "maxY": 4.9E-324, "series": [{"data": [[1.7637807E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7637807E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 135223.34000000008, "minX": 1.7637807E12, "maxY": 135223.34000000008, "series": [{"data": [[1.7637807E12, 135223.34000000008]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7637807E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 135233.5, "minX": 100.0, "maxY": 135233.5, "series": [{"data": [[100.0, 135233.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76378058E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76378058E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76378058E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7637807E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7637807E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7637807E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7637807E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7637807E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7637807E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7637807E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7637807E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7637807E12, "title": "Total Transactions Per Second"}},
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

