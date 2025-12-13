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
        data: {"result": {"minY": 132553.0, "minX": 0.0, "maxY": 133455.0, "series": [{"data": [[0.0, 132553.0], [0.1, 132553.0], [0.2, 132553.0], [0.3, 132553.0], [0.4, 132553.0], [0.5, 132553.0], [0.6, 132553.0], [0.7, 132553.0], [0.8, 132553.0], [0.9, 132553.0], [1.0, 132562.0], [1.1, 132562.0], [1.2, 132562.0], [1.3, 132562.0], [1.4, 132562.0], [1.5, 132562.0], [1.6, 132562.0], [1.7, 132562.0], [1.8, 132562.0], [1.9, 132562.0], [2.0, 132581.0], [2.1, 132581.0], [2.2, 132581.0], [2.3, 132581.0], [2.4, 132581.0], [2.5, 132581.0], [2.6, 132581.0], [2.7, 132581.0], [2.8, 132581.0], [2.9, 132581.0], [3.0, 132587.0], [3.1, 132587.0], [3.2, 132587.0], [3.3, 132587.0], [3.4, 132587.0], [3.5, 132587.0], [3.6, 132587.0], [3.7, 132587.0], [3.8, 132587.0], [3.9, 132587.0], [4.0, 132607.0], [4.1, 132607.0], [4.2, 132607.0], [4.3, 132607.0], [4.4, 132607.0], [4.5, 132607.0], [4.6, 132607.0], [4.7, 132607.0], [4.8, 132607.0], [4.9, 132607.0], [5.0, 132610.0], [5.1, 132610.0], [5.2, 132610.0], [5.3, 132610.0], [5.4, 132610.0], [5.5, 132610.0], [5.6, 132610.0], [5.7, 132610.0], [5.8, 132610.0], [5.9, 132610.0], [6.0, 132616.0], [6.1, 132616.0], [6.2, 132616.0], [6.3, 132616.0], [6.4, 132616.0], [6.5, 132616.0], [6.6, 132616.0], [6.7, 132616.0], [6.8, 132616.0], [6.9, 132616.0], [7.0, 132637.0], [7.1, 132637.0], [7.2, 132637.0], [7.3, 132637.0], [7.4, 132637.0], [7.5, 132637.0], [7.6, 132637.0], [7.7, 132637.0], [7.8, 132637.0], [7.9, 132637.0], [8.0, 132644.0], [8.1, 132644.0], [8.2, 132644.0], [8.3, 132644.0], [8.4, 132644.0], [8.5, 132644.0], [8.6, 132644.0], [8.7, 132644.0], [8.8, 132644.0], [8.9, 132644.0], [9.0, 132646.0], [9.1, 132646.0], [9.2, 132646.0], [9.3, 132646.0], [9.4, 132646.0], [9.5, 132646.0], [9.6, 132646.0], [9.7, 132646.0], [9.8, 132646.0], [9.9, 132646.0], [10.0, 132655.0], [10.1, 132655.0], [10.2, 132655.0], [10.3, 132655.0], [10.4, 132655.0], [10.5, 132655.0], [10.6, 132655.0], [10.7, 132655.0], [10.8, 132655.0], [10.9, 132655.0], [11.0, 132676.0], [11.1, 132676.0], [11.2, 132676.0], [11.3, 132676.0], [11.4, 132676.0], [11.5, 132676.0], [11.6, 132676.0], [11.7, 132676.0], [11.8, 132676.0], [11.9, 132676.0], [12.0, 132685.0], [12.1, 132685.0], [12.2, 132685.0], [12.3, 132685.0], [12.4, 132685.0], [12.5, 132685.0], [12.6, 132685.0], [12.7, 132685.0], [12.8, 132685.0], [12.9, 132685.0], [13.0, 132688.0], [13.1, 132688.0], [13.2, 132688.0], [13.3, 132688.0], [13.4, 132688.0], [13.5, 132688.0], [13.6, 132688.0], [13.7, 132688.0], [13.8, 132688.0], [13.9, 132688.0], [14.0, 132696.0], [14.1, 132696.0], [14.2, 132696.0], [14.3, 132696.0], [14.4, 132696.0], [14.5, 132696.0], [14.6, 132696.0], [14.7, 132696.0], [14.8, 132696.0], [14.9, 132696.0], [15.0, 132706.0], [15.1, 132706.0], [15.2, 132706.0], [15.3, 132706.0], [15.4, 132706.0], [15.5, 132706.0], [15.6, 132706.0], [15.7, 132706.0], [15.8, 132706.0], [15.9, 132706.0], [16.0, 132714.0], [16.1, 132714.0], [16.2, 132714.0], [16.3, 132714.0], [16.4, 132714.0], [16.5, 132714.0], [16.6, 132714.0], [16.7, 132714.0], [16.8, 132714.0], [16.9, 132714.0], [17.0, 132737.0], [17.1, 132737.0], [17.2, 132737.0], [17.3, 132737.0], [17.4, 132737.0], [17.5, 132737.0], [17.6, 132737.0], [17.7, 132737.0], [17.8, 132737.0], [17.9, 132737.0], [18.0, 132746.0], [18.1, 132746.0], [18.2, 132746.0], [18.3, 132746.0], [18.4, 132746.0], [18.5, 132746.0], [18.6, 132746.0], [18.7, 132746.0], [18.8, 132746.0], [18.9, 132746.0], [19.0, 132751.0], [19.1, 132751.0], [19.2, 132751.0], [19.3, 132751.0], [19.4, 132751.0], [19.5, 132751.0], [19.6, 132751.0], [19.7, 132751.0], [19.8, 132751.0], [19.9, 132751.0], [20.0, 132753.0], [20.1, 132753.0], [20.2, 132753.0], [20.3, 132753.0], [20.4, 132753.0], [20.5, 132753.0], [20.6, 132753.0], [20.7, 132753.0], [20.8, 132753.0], [20.9, 132753.0], [21.0, 132767.0], [21.1, 132767.0], [21.2, 132767.0], [21.3, 132767.0], [21.4, 132767.0], [21.5, 132767.0], [21.6, 132767.0], [21.7, 132767.0], [21.8, 132767.0], [21.9, 132767.0], [22.0, 132776.0], [22.1, 132776.0], [22.2, 132776.0], [22.3, 132776.0], [22.4, 132776.0], [22.5, 132776.0], [22.6, 132776.0], [22.7, 132776.0], [22.8, 132776.0], [22.9, 132776.0], [23.0, 132794.0], [23.1, 132794.0], [23.2, 132794.0], [23.3, 132794.0], [23.4, 132794.0], [23.5, 132794.0], [23.6, 132794.0], [23.7, 132794.0], [23.8, 132794.0], [23.9, 132794.0], [24.0, 132795.0], [24.1, 132795.0], [24.2, 132795.0], [24.3, 132795.0], [24.4, 132795.0], [24.5, 132795.0], [24.6, 132795.0], [24.7, 132795.0], [24.8, 132795.0], [24.9, 132795.0], [25.0, 132808.0], [25.1, 132808.0], [25.2, 132808.0], [25.3, 132808.0], [25.4, 132808.0], [25.5, 132808.0], [25.6, 132808.0], [25.7, 132808.0], [25.8, 132808.0], [25.9, 132808.0], [26.0, 132815.0], [26.1, 132815.0], [26.2, 132815.0], [26.3, 132815.0], [26.4, 132815.0], [26.5, 132815.0], [26.6, 132815.0], [26.7, 132815.0], [26.8, 132815.0], [26.9, 132815.0], [27.0, 132827.0], [27.1, 132827.0], [27.2, 132827.0], [27.3, 132827.0], [27.4, 132827.0], [27.5, 132827.0], [27.6, 132827.0], [27.7, 132827.0], [27.8, 132827.0], [27.9, 132827.0], [28.0, 132835.0], [28.1, 132835.0], [28.2, 132835.0], [28.3, 132835.0], [28.4, 132835.0], [28.5, 132835.0], [28.6, 132835.0], [28.7, 132835.0], [28.8, 132835.0], [28.9, 132835.0], [29.0, 132844.0], [29.1, 132844.0], [29.2, 132844.0], [29.3, 132844.0], [29.4, 132844.0], [29.5, 132844.0], [29.6, 132844.0], [29.7, 132844.0], [29.8, 132844.0], [29.9, 132844.0], [30.0, 132860.0], [30.1, 132860.0], [30.2, 132860.0], [30.3, 132860.0], [30.4, 132860.0], [30.5, 132860.0], [30.6, 132860.0], [30.7, 132860.0], [30.8, 132860.0], [30.9, 132860.0], [31.0, 132865.0], [31.1, 132865.0], [31.2, 132865.0], [31.3, 132865.0], [31.4, 132865.0], [31.5, 132865.0], [31.6, 132865.0], [31.7, 132865.0], [31.8, 132865.0], [31.9, 132865.0], [32.0, 132872.0], [32.1, 132872.0], [32.2, 132872.0], [32.3, 132872.0], [32.4, 132872.0], [32.5, 132872.0], [32.6, 132872.0], [32.7, 132872.0], [32.8, 132872.0], [32.9, 132872.0], [33.0, 132887.0], [33.1, 132887.0], [33.2, 132887.0], [33.3, 132887.0], [33.4, 132887.0], [33.5, 132887.0], [33.6, 132887.0], [33.7, 132887.0], [33.8, 132887.0], [33.9, 132887.0], [34.0, 132896.0], [34.1, 132896.0], [34.2, 132896.0], [34.3, 132896.0], [34.4, 132896.0], [34.5, 132896.0], [34.6, 132896.0], [34.7, 132896.0], [34.8, 132896.0], [34.9, 132896.0], [35.0, 132915.0], [35.1, 132915.0], [35.2, 132915.0], [35.3, 132915.0], [35.4, 132915.0], [35.5, 132915.0], [35.6, 132915.0], [35.7, 132915.0], [35.8, 132915.0], [35.9, 132915.0], [36.0, 132922.0], [36.1, 132922.0], [36.2, 132922.0], [36.3, 132922.0], [36.4, 132922.0], [36.5, 132922.0], [36.6, 132922.0], [36.7, 132922.0], [36.8, 132922.0], [36.9, 132922.0], [37.0, 132937.0], [37.1, 132937.0], [37.2, 132937.0], [37.3, 132937.0], [37.4, 132937.0], [37.5, 132937.0], [37.6, 132937.0], [37.7, 132937.0], [37.8, 132937.0], [37.9, 132937.0], [38.0, 132949.0], [38.1, 132949.0], [38.2, 132949.0], [38.3, 132949.0], [38.4, 132949.0], [38.5, 132949.0], [38.6, 132949.0], [38.7, 132949.0], [38.8, 132949.0], [38.9, 132949.0], [39.0, 132956.0], [39.1, 132956.0], [39.2, 132956.0], [39.3, 132956.0], [39.4, 132956.0], [39.5, 132956.0], [39.6, 132956.0], [39.7, 132956.0], [39.8, 132956.0], [39.9, 132956.0], [40.0, 132967.0], [40.1, 132967.0], [40.2, 132967.0], [40.3, 132967.0], [40.4, 132967.0], [40.5, 132967.0], [40.6, 132967.0], [40.7, 132967.0], [40.8, 132967.0], [40.9, 132967.0], [41.0, 132974.0], [41.1, 132974.0], [41.2, 132974.0], [41.3, 132974.0], [41.4, 132974.0], [41.5, 132974.0], [41.6, 132974.0], [41.7, 132974.0], [41.8, 132974.0], [41.9, 132974.0], [42.0, 132977.0], [42.1, 132977.0], [42.2, 132977.0], [42.3, 132977.0], [42.4, 132977.0], [42.5, 132977.0], [42.6, 132977.0], [42.7, 132977.0], [42.8, 132977.0], [42.9, 132977.0], [43.0, 132985.0], [43.1, 132985.0], [43.2, 132985.0], [43.3, 132985.0], [43.4, 132985.0], [43.5, 132985.0], [43.6, 132985.0], [43.7, 132985.0], [43.8, 132985.0], [43.9, 132985.0], [44.0, 133009.0], [44.1, 133009.0], [44.2, 133009.0], [44.3, 133009.0], [44.4, 133009.0], [44.5, 133009.0], [44.6, 133009.0], [44.7, 133009.0], [44.8, 133009.0], [44.9, 133009.0], [45.0, 133010.0], [45.1, 133010.0], [45.2, 133010.0], [45.3, 133010.0], [45.4, 133010.0], [45.5, 133010.0], [45.6, 133010.0], [45.7, 133010.0], [45.8, 133010.0], [45.9, 133010.0], [46.0, 133013.0], [46.1, 133013.0], [46.2, 133013.0], [46.3, 133013.0], [46.4, 133013.0], [46.5, 133013.0], [46.6, 133013.0], [46.7, 133013.0], [46.8, 133013.0], [46.9, 133013.0], [47.0, 133023.0], [47.1, 133023.0], [47.2, 133023.0], [47.3, 133023.0], [47.4, 133023.0], [47.5, 133023.0], [47.6, 133023.0], [47.7, 133023.0], [47.8, 133023.0], [47.9, 133023.0], [48.0, 133032.0], [48.1, 133032.0], [48.2, 133032.0], [48.3, 133032.0], [48.4, 133032.0], [48.5, 133032.0], [48.6, 133032.0], [48.7, 133032.0], [48.8, 133032.0], [48.9, 133032.0], [49.0, 133050.0], [49.1, 133050.0], [49.2, 133050.0], [49.3, 133050.0], [49.4, 133050.0], [49.5, 133050.0], [49.6, 133050.0], [49.7, 133050.0], [49.8, 133050.0], [49.9, 133050.0], [50.0, 133053.0], [50.1, 133053.0], [50.2, 133053.0], [50.3, 133053.0], [50.4, 133053.0], [50.5, 133053.0], [50.6, 133053.0], [50.7, 133053.0], [50.8, 133053.0], [50.9, 133053.0], [51.0, 133063.0], [51.1, 133063.0], [51.2, 133063.0], [51.3, 133063.0], [51.4, 133063.0], [51.5, 133063.0], [51.6, 133063.0], [51.7, 133063.0], [51.8, 133063.0], [51.9, 133063.0], [52.0, 133072.0], [52.1, 133072.0], [52.2, 133072.0], [52.3, 133072.0], [52.4, 133072.0], [52.5, 133072.0], [52.6, 133072.0], [52.7, 133072.0], [52.8, 133072.0], [52.9, 133072.0], [53.0, 133094.0], [53.1, 133094.0], [53.2, 133094.0], [53.3, 133094.0], [53.4, 133094.0], [53.5, 133094.0], [53.6, 133094.0], [53.7, 133094.0], [53.8, 133094.0], [53.9, 133094.0], [54.0, 133094.0], [54.1, 133094.0], [54.2, 133094.0], [54.3, 133094.0], [54.4, 133094.0], [54.5, 133094.0], [54.6, 133094.0], [54.7, 133094.0], [54.8, 133094.0], [54.9, 133094.0], [55.0, 133103.0], [55.1, 133103.0], [55.2, 133103.0], [55.3, 133103.0], [55.4, 133103.0], [55.5, 133103.0], [55.6, 133103.0], [55.7, 133103.0], [55.8, 133103.0], [55.9, 133103.0], [56.0, 133113.0], [56.1, 133113.0], [56.2, 133113.0], [56.3, 133113.0], [56.4, 133113.0], [56.5, 133113.0], [56.6, 133113.0], [56.7, 133113.0], [56.8, 133113.0], [56.9, 133113.0], [57.0, 133123.0], [57.1, 133123.0], [57.2, 133123.0], [57.3, 133123.0], [57.4, 133123.0], [57.5, 133123.0], [57.6, 133123.0], [57.7, 133123.0], [57.8, 133123.0], [57.9, 133123.0], [58.0, 133132.0], [58.1, 133132.0], [58.2, 133132.0], [58.3, 133132.0], [58.4, 133132.0], [58.5, 133132.0], [58.6, 133132.0], [58.7, 133132.0], [58.8, 133132.0], [58.9, 133132.0], [59.0, 133154.0], [59.1, 133154.0], [59.2, 133154.0], [59.3, 133154.0], [59.4, 133154.0], [59.5, 133154.0], [59.6, 133154.0], [59.7, 133154.0], [59.8, 133154.0], [59.9, 133154.0], [60.0, 133162.0], [60.1, 133162.0], [60.2, 133162.0], [60.3, 133162.0], [60.4, 133162.0], [60.5, 133162.0], [60.6, 133162.0], [60.7, 133162.0], [60.8, 133162.0], [60.9, 133162.0], [61.0, 133175.0], [61.1, 133175.0], [61.2, 133175.0], [61.3, 133175.0], [61.4, 133175.0], [61.5, 133175.0], [61.6, 133175.0], [61.7, 133175.0], [61.8, 133175.0], [61.9, 133175.0], [62.0, 133185.0], [62.1, 133185.0], [62.2, 133185.0], [62.3, 133185.0], [62.4, 133185.0], [62.5, 133185.0], [62.6, 133185.0], [62.7, 133185.0], [62.8, 133185.0], [62.9, 133185.0], [63.0, 133195.0], [63.1, 133195.0], [63.2, 133195.0], [63.3, 133195.0], [63.4, 133195.0], [63.5, 133195.0], [63.6, 133195.0], [63.7, 133195.0], [63.8, 133195.0], [63.9, 133195.0], [64.0, 133203.0], [64.1, 133203.0], [64.2, 133203.0], [64.3, 133203.0], [64.4, 133203.0], [64.5, 133203.0], [64.6, 133203.0], [64.7, 133203.0], [64.8, 133203.0], [64.9, 133203.0], [65.0, 133215.0], [65.1, 133215.0], [65.2, 133215.0], [65.3, 133215.0], [65.4, 133215.0], [65.5, 133215.0], [65.6, 133215.0], [65.7, 133215.0], [65.8, 133215.0], [65.9, 133215.0], [66.0, 133222.0], [66.1, 133222.0], [66.2, 133222.0], [66.3, 133222.0], [66.4, 133222.0], [66.5, 133222.0], [66.6, 133222.0], [66.7, 133222.0], [66.8, 133222.0], [66.9, 133222.0], [67.0, 133232.0], [67.1, 133232.0], [67.2, 133232.0], [67.3, 133232.0], [67.4, 133232.0], [67.5, 133232.0], [67.6, 133232.0], [67.7, 133232.0], [67.8, 133232.0], [67.9, 133232.0], [68.0, 133240.0], [68.1, 133240.0], [68.2, 133240.0], [68.3, 133240.0], [68.4, 133240.0], [68.5, 133240.0], [68.6, 133240.0], [68.7, 133240.0], [68.8, 133240.0], [68.9, 133240.0], [69.0, 133245.0], [69.1, 133245.0], [69.2, 133245.0], [69.3, 133245.0], [69.4, 133245.0], [69.5, 133245.0], [69.6, 133245.0], [69.7, 133245.0], [69.8, 133245.0], [69.9, 133245.0], [70.0, 133253.0], [70.1, 133253.0], [70.2, 133253.0], [70.3, 133253.0], [70.4, 133253.0], [70.5, 133253.0], [70.6, 133253.0], [70.7, 133253.0], [70.8, 133253.0], [70.9, 133253.0], [71.0, 133262.0], [71.1, 133262.0], [71.2, 133262.0], [71.3, 133262.0], [71.4, 133262.0], [71.5, 133262.0], [71.6, 133262.0], [71.7, 133262.0], [71.8, 133262.0], [71.9, 133262.0], [72.0, 133272.0], [72.1, 133272.0], [72.2, 133272.0], [72.3, 133272.0], [72.4, 133272.0], [72.5, 133272.0], [72.6, 133272.0], [72.7, 133272.0], [72.8, 133272.0], [72.9, 133272.0], [73.0, 133282.0], [73.1, 133282.0], [73.2, 133282.0], [73.3, 133282.0], [73.4, 133282.0], [73.5, 133282.0], [73.6, 133282.0], [73.7, 133282.0], [73.8, 133282.0], [73.9, 133282.0], [74.0, 133302.0], [74.1, 133302.0], [74.2, 133302.0], [74.3, 133302.0], [74.4, 133302.0], [74.5, 133302.0], [74.6, 133302.0], [74.7, 133302.0], [74.8, 133302.0], [74.9, 133302.0], [75.0, 133314.0], [75.1, 133314.0], [75.2, 133314.0], [75.3, 133314.0], [75.4, 133314.0], [75.5, 133314.0], [75.6, 133314.0], [75.7, 133314.0], [75.8, 133314.0], [75.9, 133314.0], [76.0, 133316.0], [76.1, 133316.0], [76.2, 133316.0], [76.3, 133316.0], [76.4, 133316.0], [76.5, 133316.0], [76.6, 133316.0], [76.7, 133316.0], [76.8, 133316.0], [76.9, 133316.0], [77.0, 133329.0], [77.1, 133329.0], [77.2, 133329.0], [77.3, 133329.0], [77.4, 133329.0], [77.5, 133329.0], [77.6, 133329.0], [77.7, 133329.0], [77.8, 133329.0], [77.9, 133329.0], [78.0, 133343.0], [78.1, 133343.0], [78.2, 133343.0], [78.3, 133343.0], [78.4, 133343.0], [78.5, 133343.0], [78.6, 133343.0], [78.7, 133343.0], [78.8, 133343.0], [78.9, 133343.0], [79.0, 133352.0], [79.1, 133352.0], [79.2, 133352.0], [79.3, 133352.0], [79.4, 133352.0], [79.5, 133352.0], [79.6, 133352.0], [79.7, 133352.0], [79.8, 133352.0], [79.9, 133352.0], [80.0, 133359.0], [80.1, 133359.0], [80.2, 133359.0], [80.3, 133359.0], [80.4, 133359.0], [80.5, 133359.0], [80.6, 133359.0], [80.7, 133359.0], [80.8, 133359.0], [80.9, 133359.0], [81.0, 133361.0], [81.1, 133361.0], [81.2, 133361.0], [81.3, 133361.0], [81.4, 133361.0], [81.5, 133361.0], [81.6, 133361.0], [81.7, 133361.0], [81.8, 133361.0], [81.9, 133361.0], [82.0, 133375.0], [82.1, 133375.0], [82.2, 133375.0], [82.3, 133375.0], [82.4, 133375.0], [82.5, 133375.0], [82.6, 133375.0], [82.7, 133375.0], [82.8, 133375.0], [82.9, 133375.0], [83.0, 133386.0], [83.1, 133386.0], [83.2, 133386.0], [83.3, 133386.0], [83.4, 133386.0], [83.5, 133386.0], [83.6, 133386.0], [83.7, 133386.0], [83.8, 133386.0], [83.9, 133386.0], [84.0, 133403.0], [84.1, 133403.0], [84.2, 133403.0], [84.3, 133403.0], [84.4, 133403.0], [84.5, 133403.0], [84.6, 133403.0], [84.7, 133403.0], [84.8, 133403.0], [84.9, 133403.0], [85.0, 133413.0], [85.1, 133413.0], [85.2, 133413.0], [85.3, 133413.0], [85.4, 133413.0], [85.5, 133413.0], [85.6, 133413.0], [85.7, 133413.0], [85.8, 133413.0], [85.9, 133413.0], [86.0, 133416.0], [86.1, 133416.0], [86.2, 133416.0], [86.3, 133416.0], [86.4, 133416.0], [86.5, 133416.0], [86.6, 133416.0], [86.7, 133416.0], [86.8, 133416.0], [86.9, 133416.0], [87.0, 133425.0], [87.1, 133425.0], [87.2, 133425.0], [87.3, 133425.0], [87.4, 133425.0], [87.5, 133425.0], [87.6, 133425.0], [87.7, 133425.0], [87.8, 133425.0], [87.9, 133425.0], [88.0, 133426.0], [88.1, 133426.0], [88.2, 133426.0], [88.3, 133426.0], [88.4, 133426.0], [88.5, 133426.0], [88.6, 133426.0], [88.7, 133426.0], [88.8, 133426.0], [88.9, 133426.0], [89.0, 133426.0], [89.1, 133426.0], [89.2, 133426.0], [89.3, 133426.0], [89.4, 133426.0], [89.5, 133426.0], [89.6, 133426.0], [89.7, 133426.0], [89.8, 133426.0], [89.9, 133426.0], [90.0, 133427.0], [90.1, 133427.0], [90.2, 133427.0], [90.3, 133427.0], [90.4, 133427.0], [90.5, 133427.0], [90.6, 133427.0], [90.7, 133427.0], [90.8, 133427.0], [90.9, 133427.0], [91.0, 133427.0], [91.1, 133427.0], [91.2, 133427.0], [91.3, 133427.0], [91.4, 133427.0], [91.5, 133427.0], [91.6, 133427.0], [91.7, 133427.0], [91.8, 133427.0], [91.9, 133427.0], [92.0, 133432.0], [92.1, 133432.0], [92.2, 133432.0], [92.3, 133432.0], [92.4, 133432.0], [92.5, 133432.0], [92.6, 133432.0], [92.7, 133432.0], [92.8, 133432.0], [92.9, 133432.0], [93.0, 133433.0], [93.1, 133433.0], [93.2, 133433.0], [93.3, 133433.0], [93.4, 133433.0], [93.5, 133433.0], [93.6, 133433.0], [93.7, 133433.0], [93.8, 133433.0], [93.9, 133433.0], [94.0, 133433.0], [94.1, 133433.0], [94.2, 133433.0], [94.3, 133433.0], [94.4, 133433.0], [94.5, 133433.0], [94.6, 133433.0], [94.7, 133433.0], [94.8, 133433.0], [94.9, 133433.0], [95.0, 133433.0], [95.1, 133433.0], [95.2, 133433.0], [95.3, 133433.0], [95.4, 133433.0], [95.5, 133433.0], [95.6, 133433.0], [95.7, 133433.0], [95.8, 133433.0], [95.9, 133433.0], [96.0, 133436.0], [96.1, 133436.0], [96.2, 133436.0], [96.3, 133436.0], [96.4, 133436.0], [96.5, 133436.0], [96.6, 133436.0], [96.7, 133436.0], [96.8, 133436.0], [96.9, 133436.0], [97.0, 133437.0], [97.1, 133437.0], [97.2, 133437.0], [97.3, 133437.0], [97.4, 133437.0], [97.5, 133437.0], [97.6, 133437.0], [97.7, 133437.0], [97.8, 133437.0], [97.9, 133437.0], [98.0, 133438.0], [98.1, 133438.0], [98.2, 133438.0], [98.3, 133438.0], [98.4, 133438.0], [98.5, 133438.0], [98.6, 133438.0], [98.7, 133438.0], [98.8, 133438.0], [98.9, 133438.0], [99.0, 133455.0], [99.1, 133455.0], [99.2, 133455.0], [99.3, 133455.0], [99.4, 133455.0], [99.5, 133455.0], [99.6, 133455.0], [99.7, 133455.0], [99.8, 133455.0], [99.9, 133455.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 132500.0, "maxY": 16.0, "series": [{"data": [[132800.0, 10.0], [132600.0, 11.0], [133400.0, 16.0], [133200.0, 10.0], [133000.0, 11.0], [133300.0, 10.0], [132700.0, 10.0], [132500.0, 4.0], [133100.0, 9.0], [132900.0, 9.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 133400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 65.97999999999999, "minX": 1.76559582E12, "maxY": 65.97999999999999, "series": [{"data": [[1.76559582E12, 65.97999999999999]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76559582E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132610.33333333334, "minX": 3.0, "maxY": 133433.0, "series": [{"data": [[33.0, 133213.0], [36.0, 132646.0], [39.0, 133302.33333333334], [41.0, 132946.5], [40.0, 132610.33333333334], [3.0, 132860.33333333334], [50.0, 133055.0], [53.0, 133206.5], [55.0, 132737.0], [59.0, 132949.0], [64.0, 133010.0], [68.0, 133240.0], [75.0, 133282.0], [73.0, 133219.5], [78.0, 133053.0], [83.0, 133272.0], [86.0, 132835.0], [85.0, 133103.0], [91.0, 132961.5], [6.0, 133032.0], [100.0, 133010.93333333332], [7.0, 132688.0], [8.0, 133425.0], [10.0, 133224.5], [13.0, 133008.0], [17.0, 133433.0], [18.0, 132974.0], [19.0, 133152.5], [21.0, 133059.0], [23.0, 133154.0], [24.0, 133148.5], [27.0, 133343.66666666666], [31.0, 133105.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[65.97999999999999, 133046.50999999995]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.76559582E12, "maxY": 4708.333333333333, "series": [{"data": [[1.76559582E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76559582E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76559582E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133046.50999999995, "minX": 1.76559582E12, "maxY": 133046.50999999995, "series": [{"data": [[1.76559582E12, 133046.50999999995]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76559582E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.76559582E12, "maxY": 4.9E-324, "series": [{"data": [[1.76559582E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76559582E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 133046.11000000004, "minX": 1.76559582E12, "maxY": 133046.11000000004, "series": [{"data": [[1.76559582E12, 133046.11000000004]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76559582E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 133051.5, "minX": 100.0, "maxY": 133051.5, "series": [{"data": [[100.0, 133051.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76559564E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76559564E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76559564E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76559582E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76559582E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76559582E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76559582E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.76559582E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76559582E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.76559582E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.76559582E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76559582E12, "title": "Total Transactions Per Second"}},
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

