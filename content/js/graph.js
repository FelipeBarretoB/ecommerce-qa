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
        data: {"result": {"minY": 134647.0, "minX": 0.0, "maxY": 135524.0, "series": [{"data": [[0.0, 134647.0], [0.1, 134647.0], [0.2, 134647.0], [0.3, 134647.0], [0.4, 134647.0], [0.5, 134647.0], [0.6, 134647.0], [0.7, 134647.0], [0.8, 134647.0], [0.9, 134647.0], [1.0, 134659.0], [1.1, 134659.0], [1.2, 134659.0], [1.3, 134659.0], [1.4, 134659.0], [1.5, 134659.0], [1.6, 134659.0], [1.7, 134659.0], [1.8, 134659.0], [1.9, 134659.0], [2.0, 134679.0], [2.1, 134679.0], [2.2, 134679.0], [2.3, 134679.0], [2.4, 134679.0], [2.5, 134679.0], [2.6, 134679.0], [2.7, 134679.0], [2.8, 134679.0], [2.9, 134679.0], [3.0, 134680.0], [3.1, 134680.0], [3.2, 134680.0], [3.3, 134680.0], [3.4, 134680.0], [3.5, 134680.0], [3.6, 134680.0], [3.7, 134680.0], [3.8, 134680.0], [3.9, 134680.0], [4.0, 134691.0], [4.1, 134691.0], [4.2, 134691.0], [4.3, 134691.0], [4.4, 134691.0], [4.5, 134691.0], [4.6, 134691.0], [4.7, 134691.0], [4.8, 134691.0], [4.9, 134691.0], [5.0, 134697.0], [5.1, 134697.0], [5.2, 134697.0], [5.3, 134697.0], [5.4, 134697.0], [5.5, 134697.0], [5.6, 134697.0], [5.7, 134697.0], [5.8, 134697.0], [5.9, 134697.0], [6.0, 134707.0], [6.1, 134707.0], [6.2, 134707.0], [6.3, 134707.0], [6.4, 134707.0], [6.5, 134707.0], [6.6, 134707.0], [6.7, 134707.0], [6.8, 134707.0], [6.9, 134707.0], [7.0, 134720.0], [7.1, 134720.0], [7.2, 134720.0], [7.3, 134720.0], [7.4, 134720.0], [7.5, 134720.0], [7.6, 134720.0], [7.7, 134720.0], [7.8, 134720.0], [7.9, 134720.0], [8.0, 134726.0], [8.1, 134726.0], [8.2, 134726.0], [8.3, 134726.0], [8.4, 134726.0], [8.5, 134726.0], [8.6, 134726.0], [8.7, 134726.0], [8.8, 134726.0], [8.9, 134726.0], [9.0, 134737.0], [9.1, 134737.0], [9.2, 134737.0], [9.3, 134737.0], [9.4, 134737.0], [9.5, 134737.0], [9.6, 134737.0], [9.7, 134737.0], [9.8, 134737.0], [9.9, 134737.0], [10.0, 134747.0], [10.1, 134747.0], [10.2, 134747.0], [10.3, 134747.0], [10.4, 134747.0], [10.5, 134747.0], [10.6, 134747.0], [10.7, 134747.0], [10.8, 134747.0], [10.9, 134747.0], [11.0, 134757.0], [11.1, 134757.0], [11.2, 134757.0], [11.3, 134757.0], [11.4, 134757.0], [11.5, 134757.0], [11.6, 134757.0], [11.7, 134757.0], [11.8, 134757.0], [11.9, 134757.0], [12.0, 134768.0], [12.1, 134768.0], [12.2, 134768.0], [12.3, 134768.0], [12.4, 134768.0], [12.5, 134768.0], [12.6, 134768.0], [12.7, 134768.0], [12.8, 134768.0], [12.9, 134768.0], [13.0, 134779.0], [13.1, 134779.0], [13.2, 134779.0], [13.3, 134779.0], [13.4, 134779.0], [13.5, 134779.0], [13.6, 134779.0], [13.7, 134779.0], [13.8, 134779.0], [13.9, 134779.0], [14.0, 134787.0], [14.1, 134787.0], [14.2, 134787.0], [14.3, 134787.0], [14.4, 134787.0], [14.5, 134787.0], [14.6, 134787.0], [14.7, 134787.0], [14.8, 134787.0], [14.9, 134787.0], [15.0, 134796.0], [15.1, 134796.0], [15.2, 134796.0], [15.3, 134796.0], [15.4, 134796.0], [15.5, 134796.0], [15.6, 134796.0], [15.7, 134796.0], [15.8, 134796.0], [15.9, 134796.0], [16.0, 134810.0], [16.1, 134810.0], [16.2, 134810.0], [16.3, 134810.0], [16.4, 134810.0], [16.5, 134810.0], [16.6, 134810.0], [16.7, 134810.0], [16.8, 134810.0], [16.9, 134810.0], [17.0, 134819.0], [17.1, 134819.0], [17.2, 134819.0], [17.3, 134819.0], [17.4, 134819.0], [17.5, 134819.0], [17.6, 134819.0], [17.7, 134819.0], [17.8, 134819.0], [17.9, 134819.0], [18.0, 134826.0], [18.1, 134826.0], [18.2, 134826.0], [18.3, 134826.0], [18.4, 134826.0], [18.5, 134826.0], [18.6, 134826.0], [18.7, 134826.0], [18.8, 134826.0], [18.9, 134826.0], [19.0, 134839.0], [19.1, 134839.0], [19.2, 134839.0], [19.3, 134839.0], [19.4, 134839.0], [19.5, 134839.0], [19.6, 134839.0], [19.7, 134839.0], [19.8, 134839.0], [19.9, 134839.0], [20.0, 134849.0], [20.1, 134849.0], [20.2, 134849.0], [20.3, 134849.0], [20.4, 134849.0], [20.5, 134849.0], [20.6, 134849.0], [20.7, 134849.0], [20.8, 134849.0], [20.9, 134849.0], [21.0, 134857.0], [21.1, 134857.0], [21.2, 134857.0], [21.3, 134857.0], [21.4, 134857.0], [21.5, 134857.0], [21.6, 134857.0], [21.7, 134857.0], [21.8, 134857.0], [21.9, 134857.0], [22.0, 134869.0], [22.1, 134869.0], [22.2, 134869.0], [22.3, 134869.0], [22.4, 134869.0], [22.5, 134869.0], [22.6, 134869.0], [22.7, 134869.0], [22.8, 134869.0], [22.9, 134869.0], [23.0, 134880.0], [23.1, 134880.0], [23.2, 134880.0], [23.3, 134880.0], [23.4, 134880.0], [23.5, 134880.0], [23.6, 134880.0], [23.7, 134880.0], [23.8, 134880.0], [23.9, 134880.0], [24.0, 134886.0], [24.1, 134886.0], [24.2, 134886.0], [24.3, 134886.0], [24.4, 134886.0], [24.5, 134886.0], [24.6, 134886.0], [24.7, 134886.0], [24.8, 134886.0], [24.9, 134886.0], [25.0, 134900.0], [25.1, 134900.0], [25.2, 134900.0], [25.3, 134900.0], [25.4, 134900.0], [25.5, 134900.0], [25.6, 134900.0], [25.7, 134900.0], [25.8, 134900.0], [25.9, 134900.0], [26.0, 134909.0], [26.1, 134909.0], [26.2, 134909.0], [26.3, 134909.0], [26.4, 134909.0], [26.5, 134909.0], [26.6, 134909.0], [26.7, 134909.0], [26.8, 134909.0], [26.9, 134909.0], [27.0, 134918.0], [27.1, 134918.0], [27.2, 134918.0], [27.3, 134918.0], [27.4, 134918.0], [27.5, 134918.0], [27.6, 134918.0], [27.7, 134918.0], [27.8, 134918.0], [27.9, 134918.0], [28.0, 134928.0], [28.1, 134928.0], [28.2, 134928.0], [28.3, 134928.0], [28.4, 134928.0], [28.5, 134928.0], [28.6, 134928.0], [28.7, 134928.0], [28.8, 134928.0], [28.9, 134928.0], [29.0, 134938.0], [29.1, 134938.0], [29.2, 134938.0], [29.3, 134938.0], [29.4, 134938.0], [29.5, 134938.0], [29.6, 134938.0], [29.7, 134938.0], [29.8, 134938.0], [29.9, 134938.0], [30.0, 134949.0], [30.1, 134949.0], [30.2, 134949.0], [30.3, 134949.0], [30.4, 134949.0], [30.5, 134949.0], [30.6, 134949.0], [30.7, 134949.0], [30.8, 134949.0], [30.9, 134949.0], [31.0, 134958.0], [31.1, 134958.0], [31.2, 134958.0], [31.3, 134958.0], [31.4, 134958.0], [31.5, 134958.0], [31.6, 134958.0], [31.7, 134958.0], [31.8, 134958.0], [31.9, 134958.0], [32.0, 134968.0], [32.1, 134968.0], [32.2, 134968.0], [32.3, 134968.0], [32.4, 134968.0], [32.5, 134968.0], [32.6, 134968.0], [32.7, 134968.0], [32.8, 134968.0], [32.9, 134968.0], [33.0, 134978.0], [33.1, 134978.0], [33.2, 134978.0], [33.3, 134978.0], [33.4, 134978.0], [33.5, 134978.0], [33.6, 134978.0], [33.7, 134978.0], [33.8, 134978.0], [33.9, 134978.0], [34.0, 134990.0], [34.1, 134990.0], [34.2, 134990.0], [34.3, 134990.0], [34.4, 134990.0], [34.5, 134990.0], [34.6, 134990.0], [34.7, 134990.0], [34.8, 134990.0], [34.9, 134990.0], [35.0, 134998.0], [35.1, 134998.0], [35.2, 134998.0], [35.3, 134998.0], [35.4, 134998.0], [35.5, 134998.0], [35.6, 134998.0], [35.7, 134998.0], [35.8, 134998.0], [35.9, 134998.0], [36.0, 135009.0], [36.1, 135009.0], [36.2, 135009.0], [36.3, 135009.0], [36.4, 135009.0], [36.5, 135009.0], [36.6, 135009.0], [36.7, 135009.0], [36.8, 135009.0], [36.9, 135009.0], [37.0, 135018.0], [37.1, 135018.0], [37.2, 135018.0], [37.3, 135018.0], [37.4, 135018.0], [37.5, 135018.0], [37.6, 135018.0], [37.7, 135018.0], [37.8, 135018.0], [37.9, 135018.0], [38.0, 135030.0], [38.1, 135030.0], [38.2, 135030.0], [38.3, 135030.0], [38.4, 135030.0], [38.5, 135030.0], [38.6, 135030.0], [38.7, 135030.0], [38.8, 135030.0], [38.9, 135030.0], [39.0, 135037.0], [39.1, 135037.0], [39.2, 135037.0], [39.3, 135037.0], [39.4, 135037.0], [39.5, 135037.0], [39.6, 135037.0], [39.7, 135037.0], [39.8, 135037.0], [39.9, 135037.0], [40.0, 135048.0], [40.1, 135048.0], [40.2, 135048.0], [40.3, 135048.0], [40.4, 135048.0], [40.5, 135048.0], [40.6, 135048.0], [40.7, 135048.0], [40.8, 135048.0], [40.9, 135048.0], [41.0, 135059.0], [41.1, 135059.0], [41.2, 135059.0], [41.3, 135059.0], [41.4, 135059.0], [41.5, 135059.0], [41.6, 135059.0], [41.7, 135059.0], [41.8, 135059.0], [41.9, 135059.0], [42.0, 135068.0], [42.1, 135068.0], [42.2, 135068.0], [42.3, 135068.0], [42.4, 135068.0], [42.5, 135068.0], [42.6, 135068.0], [42.7, 135068.0], [42.8, 135068.0], [42.9, 135068.0], [43.0, 135078.0], [43.1, 135078.0], [43.2, 135078.0], [43.3, 135078.0], [43.4, 135078.0], [43.5, 135078.0], [43.6, 135078.0], [43.7, 135078.0], [43.8, 135078.0], [43.9, 135078.0], [44.0, 135091.0], [44.1, 135091.0], [44.2, 135091.0], [44.3, 135091.0], [44.4, 135091.0], [44.5, 135091.0], [44.6, 135091.0], [44.7, 135091.0], [44.8, 135091.0], [44.9, 135091.0], [45.0, 135098.0], [45.1, 135098.0], [45.2, 135098.0], [45.3, 135098.0], [45.4, 135098.0], [45.5, 135098.0], [45.6, 135098.0], [45.7, 135098.0], [45.8, 135098.0], [45.9, 135098.0], [46.0, 135108.0], [46.1, 135108.0], [46.2, 135108.0], [46.3, 135108.0], [46.4, 135108.0], [46.5, 135108.0], [46.6, 135108.0], [46.7, 135108.0], [46.8, 135108.0], [46.9, 135108.0], [47.0, 135119.0], [47.1, 135119.0], [47.2, 135119.0], [47.3, 135119.0], [47.4, 135119.0], [47.5, 135119.0], [47.6, 135119.0], [47.7, 135119.0], [47.8, 135119.0], [47.9, 135119.0], [48.0, 135129.0], [48.1, 135129.0], [48.2, 135129.0], [48.3, 135129.0], [48.4, 135129.0], [48.5, 135129.0], [48.6, 135129.0], [48.7, 135129.0], [48.8, 135129.0], [48.9, 135129.0], [49.0, 135138.0], [49.1, 135138.0], [49.2, 135138.0], [49.3, 135138.0], [49.4, 135138.0], [49.5, 135138.0], [49.6, 135138.0], [49.7, 135138.0], [49.8, 135138.0], [49.9, 135138.0], [50.0, 135148.0], [50.1, 135148.0], [50.2, 135148.0], [50.3, 135148.0], [50.4, 135148.0], [50.5, 135148.0], [50.6, 135148.0], [50.7, 135148.0], [50.8, 135148.0], [50.9, 135148.0], [51.0, 135159.0], [51.1, 135159.0], [51.2, 135159.0], [51.3, 135159.0], [51.4, 135159.0], [51.5, 135159.0], [51.6, 135159.0], [51.7, 135159.0], [51.8, 135159.0], [51.9, 135159.0], [52.0, 135167.0], [52.1, 135167.0], [52.2, 135167.0], [52.3, 135167.0], [52.4, 135167.0], [52.5, 135167.0], [52.6, 135167.0], [52.7, 135167.0], [52.8, 135167.0], [52.9, 135167.0], [53.0, 135177.0], [53.1, 135177.0], [53.2, 135177.0], [53.3, 135177.0], [53.4, 135177.0], [53.5, 135177.0], [53.6, 135177.0], [53.7, 135177.0], [53.8, 135177.0], [53.9, 135177.0], [54.0, 135189.0], [54.1, 135189.0], [54.2, 135189.0], [54.3, 135189.0], [54.4, 135189.0], [54.5, 135189.0], [54.6, 135189.0], [54.7, 135189.0], [54.8, 135189.0], [54.9, 135189.0], [55.0, 135197.0], [55.1, 135197.0], [55.2, 135197.0], [55.3, 135197.0], [55.4, 135197.0], [55.5, 135197.0], [55.6, 135197.0], [55.7, 135197.0], [55.8, 135197.0], [55.9, 135197.0], [56.0, 135207.0], [56.1, 135207.0], [56.2, 135207.0], [56.3, 135207.0], [56.4, 135207.0], [56.5, 135207.0], [56.6, 135207.0], [56.7, 135207.0], [56.8, 135207.0], [56.9, 135207.0], [57.0, 135218.0], [57.1, 135218.0], [57.2, 135218.0], [57.3, 135218.0], [57.4, 135218.0], [57.5, 135218.0], [57.6, 135218.0], [57.7, 135218.0], [57.8, 135218.0], [57.9, 135218.0], [58.0, 135231.0], [58.1, 135231.0], [58.2, 135231.0], [58.3, 135231.0], [58.4, 135231.0], [58.5, 135231.0], [58.6, 135231.0], [58.7, 135231.0], [58.8, 135231.0], [58.9, 135231.0], [59.0, 135237.0], [59.1, 135237.0], [59.2, 135237.0], [59.3, 135237.0], [59.4, 135237.0], [59.5, 135237.0], [59.6, 135237.0], [59.7, 135237.0], [59.8, 135237.0], [59.9, 135237.0], [60.0, 135248.0], [60.1, 135248.0], [60.2, 135248.0], [60.3, 135248.0], [60.4, 135248.0], [60.5, 135248.0], [60.6, 135248.0], [60.7, 135248.0], [60.8, 135248.0], [60.9, 135248.0], [61.0, 135258.0], [61.1, 135258.0], [61.2, 135258.0], [61.3, 135258.0], [61.4, 135258.0], [61.5, 135258.0], [61.6, 135258.0], [61.7, 135258.0], [61.8, 135258.0], [61.9, 135258.0], [62.0, 135268.0], [62.1, 135268.0], [62.2, 135268.0], [62.3, 135268.0], [62.4, 135268.0], [62.5, 135268.0], [62.6, 135268.0], [62.7, 135268.0], [62.8, 135268.0], [62.9, 135268.0], [63.0, 135277.0], [63.1, 135277.0], [63.2, 135277.0], [63.3, 135277.0], [63.4, 135277.0], [63.5, 135277.0], [63.6, 135277.0], [63.7, 135277.0], [63.8, 135277.0], [63.9, 135277.0], [64.0, 135287.0], [64.1, 135287.0], [64.2, 135287.0], [64.3, 135287.0], [64.4, 135287.0], [64.5, 135287.0], [64.6, 135287.0], [64.7, 135287.0], [64.8, 135287.0], [64.9, 135287.0], [65.0, 135297.0], [65.1, 135297.0], [65.2, 135297.0], [65.3, 135297.0], [65.4, 135297.0], [65.5, 135297.0], [65.6, 135297.0], [65.7, 135297.0], [65.8, 135297.0], [65.9, 135297.0], [66.0, 135309.0], [66.1, 135309.0], [66.2, 135309.0], [66.3, 135309.0], [66.4, 135309.0], [66.5, 135309.0], [66.6, 135309.0], [66.7, 135309.0], [66.8, 135309.0], [66.9, 135309.0], [67.0, 135317.0], [67.1, 135317.0], [67.2, 135317.0], [67.3, 135317.0], [67.4, 135317.0], [67.5, 135317.0], [67.6, 135317.0], [67.7, 135317.0], [67.8, 135317.0], [67.9, 135317.0], [68.0, 135328.0], [68.1, 135328.0], [68.2, 135328.0], [68.3, 135328.0], [68.4, 135328.0], [68.5, 135328.0], [68.6, 135328.0], [68.7, 135328.0], [68.8, 135328.0], [68.9, 135328.0], [69.0, 135338.0], [69.1, 135338.0], [69.2, 135338.0], [69.3, 135338.0], [69.4, 135338.0], [69.5, 135338.0], [69.6, 135338.0], [69.7, 135338.0], [69.8, 135338.0], [69.9, 135338.0], [70.0, 135346.0], [70.1, 135346.0], [70.2, 135346.0], [70.3, 135346.0], [70.4, 135346.0], [70.5, 135346.0], [70.6, 135346.0], [70.7, 135346.0], [70.8, 135346.0], [70.9, 135346.0], [71.0, 135357.0], [71.1, 135357.0], [71.2, 135357.0], [71.3, 135357.0], [71.4, 135357.0], [71.5, 135357.0], [71.6, 135357.0], [71.7, 135357.0], [71.8, 135357.0], [71.9, 135357.0], [72.0, 135365.0], [72.1, 135365.0], [72.2, 135365.0], [72.3, 135365.0], [72.4, 135365.0], [72.5, 135365.0], [72.6, 135365.0], [72.7, 135365.0], [72.8, 135365.0], [72.9, 135365.0], [73.0, 135375.0], [73.1, 135375.0], [73.2, 135375.0], [73.3, 135375.0], [73.4, 135375.0], [73.5, 135375.0], [73.6, 135375.0], [73.7, 135375.0], [73.8, 135375.0], [73.9, 135375.0], [74.0, 135386.0], [74.1, 135386.0], [74.2, 135386.0], [74.3, 135386.0], [74.4, 135386.0], [74.5, 135386.0], [74.6, 135386.0], [74.7, 135386.0], [74.8, 135386.0], [74.9, 135386.0], [75.0, 135396.0], [75.1, 135396.0], [75.2, 135396.0], [75.3, 135396.0], [75.4, 135396.0], [75.5, 135396.0], [75.6, 135396.0], [75.7, 135396.0], [75.8, 135396.0], [75.9, 135396.0], [76.0, 135407.0], [76.1, 135407.0], [76.2, 135407.0], [76.3, 135407.0], [76.4, 135407.0], [76.5, 135407.0], [76.6, 135407.0], [76.7, 135407.0], [76.8, 135407.0], [76.9, 135407.0], [77.0, 135421.0], [77.1, 135421.0], [77.2, 135421.0], [77.3, 135421.0], [77.4, 135421.0], [77.5, 135421.0], [77.6, 135421.0], [77.7, 135421.0], [77.8, 135421.0], [77.9, 135421.0], [78.0, 135428.0], [78.1, 135428.0], [78.2, 135428.0], [78.3, 135428.0], [78.4, 135428.0], [78.5, 135428.0], [78.6, 135428.0], [78.7, 135428.0], [78.8, 135428.0], [78.9, 135428.0], [79.0, 135436.0], [79.1, 135436.0], [79.2, 135436.0], [79.3, 135436.0], [79.4, 135436.0], [79.5, 135436.0], [79.6, 135436.0], [79.7, 135436.0], [79.8, 135436.0], [79.9, 135436.0], [80.0, 135447.0], [80.1, 135447.0], [80.2, 135447.0], [80.3, 135447.0], [80.4, 135447.0], [80.5, 135447.0], [80.6, 135447.0], [80.7, 135447.0], [80.8, 135447.0], [80.9, 135447.0], [81.0, 135457.0], [81.1, 135457.0], [81.2, 135457.0], [81.3, 135457.0], [81.4, 135457.0], [81.5, 135457.0], [81.6, 135457.0], [81.7, 135457.0], [81.8, 135457.0], [81.9, 135457.0], [82.0, 135468.0], [82.1, 135468.0], [82.2, 135468.0], [82.3, 135468.0], [82.4, 135468.0], [82.5, 135468.0], [82.6, 135468.0], [82.7, 135468.0], [82.8, 135468.0], [82.9, 135468.0], [83.0, 135477.0], [83.1, 135477.0], [83.2, 135477.0], [83.3, 135477.0], [83.4, 135477.0], [83.5, 135477.0], [83.6, 135477.0], [83.7, 135477.0], [83.8, 135477.0], [83.9, 135477.0], [84.0, 135486.0], [84.1, 135486.0], [84.2, 135486.0], [84.3, 135486.0], [84.4, 135486.0], [84.5, 135486.0], [84.6, 135486.0], [84.7, 135486.0], [84.8, 135486.0], [84.9, 135486.0], [85.0, 135499.0], [85.1, 135499.0], [85.2, 135499.0], [85.3, 135499.0], [85.4, 135499.0], [85.5, 135499.0], [85.6, 135499.0], [85.7, 135499.0], [85.8, 135499.0], [85.9, 135499.0], [86.0, 135506.0], [86.1, 135506.0], [86.2, 135506.0], [86.3, 135506.0], [86.4, 135506.0], [86.5, 135506.0], [86.6, 135506.0], [86.7, 135506.0], [86.8, 135506.0], [86.9, 135506.0], [87.0, 135518.0], [87.1, 135518.0], [87.2, 135518.0], [87.3, 135518.0], [87.4, 135518.0], [87.5, 135518.0], [87.6, 135518.0], [87.7, 135518.0], [87.8, 135518.0], [87.9, 135518.0], [88.0, 135518.0], [88.1, 135518.0], [88.2, 135518.0], [88.3, 135518.0], [88.4, 135518.0], [88.5, 135518.0], [88.6, 135518.0], [88.7, 135518.0], [88.8, 135518.0], [88.9, 135518.0], [89.0, 135519.0], [89.1, 135519.0], [89.2, 135519.0], [89.3, 135519.0], [89.4, 135519.0], [89.5, 135519.0], [89.6, 135519.0], [89.7, 135519.0], [89.8, 135519.0], [89.9, 135519.0], [90.0, 135519.0], [90.1, 135519.0], [90.2, 135519.0], [90.3, 135519.0], [90.4, 135519.0], [90.5, 135519.0], [90.6, 135519.0], [90.7, 135519.0], [90.8, 135519.0], [90.9, 135519.0], [91.0, 135520.0], [91.1, 135520.0], [91.2, 135520.0], [91.3, 135520.0], [91.4, 135520.0], [91.5, 135520.0], [91.6, 135520.0], [91.7, 135520.0], [91.8, 135520.0], [91.9, 135520.0], [92.0, 135521.0], [92.1, 135521.0], [92.2, 135521.0], [92.3, 135521.0], [92.4, 135521.0], [92.5, 135521.0], [92.6, 135521.0], [92.7, 135521.0], [92.8, 135521.0], [92.9, 135521.0], [93.0, 135521.0], [93.1, 135521.0], [93.2, 135521.0], [93.3, 135521.0], [93.4, 135521.0], [93.5, 135521.0], [93.6, 135521.0], [93.7, 135521.0], [93.8, 135521.0], [93.9, 135521.0], [94.0, 135521.0], [94.1, 135521.0], [94.2, 135521.0], [94.3, 135521.0], [94.4, 135521.0], [94.5, 135521.0], [94.6, 135521.0], [94.7, 135521.0], [94.8, 135521.0], [94.9, 135521.0], [95.0, 135522.0], [95.1, 135522.0], [95.2, 135522.0], [95.3, 135522.0], [95.4, 135522.0], [95.5, 135522.0], [95.6, 135522.0], [95.7, 135522.0], [95.8, 135522.0], [95.9, 135522.0], [96.0, 135522.0], [96.1, 135522.0], [96.2, 135522.0], [96.3, 135522.0], [96.4, 135522.0], [96.5, 135522.0], [96.6, 135522.0], [96.7, 135522.0], [96.8, 135522.0], [96.9, 135522.0], [97.0, 135523.0], [97.1, 135523.0], [97.2, 135523.0], [97.3, 135523.0], [97.4, 135523.0], [97.5, 135523.0], [97.6, 135523.0], [97.7, 135523.0], [97.8, 135523.0], [97.9, 135523.0], [98.0, 135523.0], [98.1, 135523.0], [98.2, 135523.0], [98.3, 135523.0], [98.4, 135523.0], [98.5, 135523.0], [98.6, 135523.0], [98.7, 135523.0], [98.8, 135523.0], [98.9, 135523.0], [99.0, 135524.0], [99.1, 135524.0], [99.2, 135524.0], [99.3, 135524.0], [99.4, 135524.0], [99.5, 135524.0], [99.6, 135524.0], [99.7, 135524.0], [99.8, 135524.0], [99.9, 135524.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 134600.0, "maxY": 14.0, "series": [{"data": [[135000.0, 10.0], [135200.0, 10.0], [134600.0, 6.0], [135400.0, 10.0], [134800.0, 9.0], [135500.0, 14.0], [135100.0, 10.0], [134700.0, 10.0], [134900.0, 11.0], [135300.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 135500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.75937388E12, "maxY": 100.0, "series": [{"data": [[1.75937388E12, 100.0]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75937388E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 135135.60999999996, "minX": 100.0, "maxY": 135135.60999999996, "series": [{"data": [[100.0, 135135.60999999996]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[100.0, 135135.60999999996]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75937388E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75937388E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75937388E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75937388E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 135135.60999999996, "minX": 1.75937388E12, "maxY": 135135.60999999996, "series": [{"data": [[1.75937388E12, 135135.60999999996]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75937388E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75937388E12, "maxY": 4.9E-324, "series": [{"data": [[1.75937388E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75937388E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 135135.48000000004, "minX": 1.75937388E12, "maxY": 135135.48000000004, "series": [{"data": [[1.75937388E12, 135135.48000000004]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75937388E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 135143.0, "minX": 100.0, "maxY": 135143.0, "series": [{"data": [[100.0, 135143.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7593737E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7593737E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7593737E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75937388E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75937388E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75937388E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75937388E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75937388E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75937388E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75937388E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75937388E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75937388E12, "title": "Total Transactions Per Second"}},
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

