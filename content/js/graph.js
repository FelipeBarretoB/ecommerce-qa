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
        data: {"result": {"minY": 132396.0, "minX": 0.0, "maxY": 136485.0, "series": [{"data": [[0.0, 132396.0], [0.1, 132396.0], [0.2, 132396.0], [0.3, 132396.0], [0.4, 132396.0], [0.5, 132396.0], [0.6, 132396.0], [0.7, 132396.0], [0.8, 132396.0], [0.9, 132396.0], [1.0, 132409.0], [1.1, 132409.0], [1.2, 132409.0], [1.3, 132409.0], [1.4, 132409.0], [1.5, 132409.0], [1.6, 132409.0], [1.7, 132409.0], [1.8, 132409.0], [1.9, 132409.0], [2.0, 132418.0], [2.1, 132418.0], [2.2, 132418.0], [2.3, 132418.0], [2.4, 132418.0], [2.5, 132418.0], [2.6, 132418.0], [2.7, 132418.0], [2.8, 132418.0], [2.9, 132418.0], [3.0, 132427.0], [3.1, 132427.0], [3.2, 132427.0], [3.3, 132427.0], [3.4, 132427.0], [3.5, 132427.0], [3.6, 132427.0], [3.7, 132427.0], [3.8, 132427.0], [3.9, 132427.0], [4.0, 132437.0], [4.1, 132437.0], [4.2, 132437.0], [4.3, 132437.0], [4.4, 132437.0], [4.5, 132437.0], [4.6, 132437.0], [4.7, 132437.0], [4.8, 132437.0], [4.9, 132437.0], [5.0, 132449.0], [5.1, 132449.0], [5.2, 132449.0], [5.3, 132449.0], [5.4, 132449.0], [5.5, 132449.0], [5.6, 132449.0], [5.7, 132449.0], [5.8, 132449.0], [5.9, 132449.0], [6.0, 132458.0], [6.1, 132458.0], [6.2, 132458.0], [6.3, 132458.0], [6.4, 132458.0], [6.5, 132458.0], [6.6, 132458.0], [6.7, 132458.0], [6.8, 132458.0], [6.9, 132458.0], [7.0, 132467.0], [7.1, 132467.0], [7.2, 132467.0], [7.3, 132467.0], [7.4, 132467.0], [7.5, 132467.0], [7.6, 132467.0], [7.7, 132467.0], [7.8, 132467.0], [7.9, 132467.0], [8.0, 132477.0], [8.1, 132477.0], [8.2, 132477.0], [8.3, 132477.0], [8.4, 132477.0], [8.5, 132477.0], [8.6, 132477.0], [8.7, 132477.0], [8.8, 132477.0], [8.9, 132477.0], [9.0, 132487.0], [9.1, 132487.0], [9.2, 132487.0], [9.3, 132487.0], [9.4, 132487.0], [9.5, 132487.0], [9.6, 132487.0], [9.7, 132487.0], [9.8, 132487.0], [9.9, 132487.0], [10.0, 132498.0], [10.1, 132498.0], [10.2, 132498.0], [10.3, 132498.0], [10.4, 132498.0], [10.5, 132498.0], [10.6, 132498.0], [10.7, 132498.0], [10.8, 132498.0], [10.9, 132498.0], [11.0, 132506.0], [11.1, 132506.0], [11.2, 132506.0], [11.3, 132506.0], [11.4, 132506.0], [11.5, 132506.0], [11.6, 132506.0], [11.7, 132506.0], [11.8, 132506.0], [11.9, 132506.0], [12.0, 132516.0], [12.1, 132516.0], [12.2, 132516.0], [12.3, 132516.0], [12.4, 132516.0], [12.5, 132516.0], [12.6, 132516.0], [12.7, 132516.0], [12.8, 132516.0], [12.9, 132516.0], [13.0, 132527.0], [13.1, 132527.0], [13.2, 132527.0], [13.3, 132527.0], [13.4, 132527.0], [13.5, 132527.0], [13.6, 132527.0], [13.7, 132527.0], [13.8, 132527.0], [13.9, 132527.0], [14.0, 132536.0], [14.1, 132536.0], [14.2, 132536.0], [14.3, 132536.0], [14.4, 132536.0], [14.5, 132536.0], [14.6, 132536.0], [14.7, 132536.0], [14.8, 132536.0], [14.9, 132536.0], [15.0, 132547.0], [15.1, 132547.0], [15.2, 132547.0], [15.3, 132547.0], [15.4, 132547.0], [15.5, 132547.0], [15.6, 132547.0], [15.7, 132547.0], [15.8, 132547.0], [15.9, 132547.0], [16.0, 132556.0], [16.1, 132556.0], [16.2, 132556.0], [16.3, 132556.0], [16.4, 132556.0], [16.5, 132556.0], [16.6, 132556.0], [16.7, 132556.0], [16.8, 132556.0], [16.9, 132556.0], [17.0, 132567.0], [17.1, 132567.0], [17.2, 132567.0], [17.3, 132567.0], [17.4, 132567.0], [17.5, 132567.0], [17.6, 132567.0], [17.7, 132567.0], [17.8, 132567.0], [17.9, 132567.0], [18.0, 132576.0], [18.1, 132576.0], [18.2, 132576.0], [18.3, 132576.0], [18.4, 132576.0], [18.5, 132576.0], [18.6, 132576.0], [18.7, 132576.0], [18.8, 132576.0], [18.9, 132576.0], [19.0, 132588.0], [19.1, 132588.0], [19.2, 132588.0], [19.3, 132588.0], [19.4, 132588.0], [19.5, 132588.0], [19.6, 132588.0], [19.7, 132588.0], [19.8, 132588.0], [19.9, 132588.0], [20.0, 132597.0], [20.1, 132597.0], [20.2, 132597.0], [20.3, 132597.0], [20.4, 132597.0], [20.5, 132597.0], [20.6, 132597.0], [20.7, 132597.0], [20.8, 132597.0], [20.9, 132597.0], [21.0, 132608.0], [21.1, 132608.0], [21.2, 132608.0], [21.3, 132608.0], [21.4, 132608.0], [21.5, 132608.0], [21.6, 132608.0], [21.7, 132608.0], [21.8, 132608.0], [21.9, 132608.0], [22.0, 132618.0], [22.1, 132618.0], [22.2, 132618.0], [22.3, 132618.0], [22.4, 132618.0], [22.5, 132618.0], [22.6, 132618.0], [22.7, 132618.0], [22.8, 132618.0], [22.9, 132618.0], [23.0, 132627.0], [23.1, 132627.0], [23.2, 132627.0], [23.3, 132627.0], [23.4, 132627.0], [23.5, 132627.0], [23.6, 132627.0], [23.7, 132627.0], [23.8, 132627.0], [23.9, 132627.0], [24.0, 132637.0], [24.1, 132637.0], [24.2, 132637.0], [24.3, 132637.0], [24.4, 132637.0], [24.5, 132637.0], [24.6, 132637.0], [24.7, 132637.0], [24.8, 132637.0], [24.9, 132637.0], [25.0, 132647.0], [25.1, 132647.0], [25.2, 132647.0], [25.3, 132647.0], [25.4, 132647.0], [25.5, 132647.0], [25.6, 132647.0], [25.7, 132647.0], [25.8, 132647.0], [25.9, 132647.0], [26.0, 132658.0], [26.1, 132658.0], [26.2, 132658.0], [26.3, 132658.0], [26.4, 132658.0], [26.5, 132658.0], [26.6, 132658.0], [26.7, 132658.0], [26.8, 132658.0], [26.9, 132658.0], [27.0, 132667.0], [27.1, 132667.0], [27.2, 132667.0], [27.3, 132667.0], [27.4, 132667.0], [27.5, 132667.0], [27.6, 132667.0], [27.7, 132667.0], [27.8, 132667.0], [27.9, 132667.0], [28.0, 132680.0], [28.1, 132680.0], [28.2, 132680.0], [28.3, 132680.0], [28.4, 132680.0], [28.5, 132680.0], [28.6, 132680.0], [28.7, 132680.0], [28.8, 132680.0], [28.9, 132680.0], [29.0, 132687.0], [29.1, 132687.0], [29.2, 132687.0], [29.3, 132687.0], [29.4, 132687.0], [29.5, 132687.0], [29.6, 132687.0], [29.7, 132687.0], [29.8, 132687.0], [29.9, 132687.0], [30.0, 132700.0], [30.1, 132700.0], [30.2, 132700.0], [30.3, 132700.0], [30.4, 132700.0], [30.5, 132700.0], [30.6, 132700.0], [30.7, 132700.0], [30.8, 132700.0], [30.9, 132700.0], [31.0, 132706.0], [31.1, 132706.0], [31.2, 132706.0], [31.3, 132706.0], [31.4, 132706.0], [31.5, 132706.0], [31.6, 132706.0], [31.7, 132706.0], [31.8, 132706.0], [31.9, 132706.0], [32.0, 132718.0], [32.1, 132718.0], [32.2, 132718.0], [32.3, 132718.0], [32.4, 132718.0], [32.5, 132718.0], [32.6, 132718.0], [32.7, 132718.0], [32.8, 132718.0], [32.9, 132718.0], [33.0, 132727.0], [33.1, 132727.0], [33.2, 132727.0], [33.3, 132727.0], [33.4, 132727.0], [33.5, 132727.0], [33.6, 132727.0], [33.7, 132727.0], [33.8, 132727.0], [33.9, 132727.0], [34.0, 132736.0], [34.1, 132736.0], [34.2, 132736.0], [34.3, 132736.0], [34.4, 132736.0], [34.5, 132736.0], [34.6, 132736.0], [34.7, 132736.0], [34.8, 132736.0], [34.9, 132736.0], [35.0, 132747.0], [35.1, 132747.0], [35.2, 132747.0], [35.3, 132747.0], [35.4, 132747.0], [35.5, 132747.0], [35.6, 132747.0], [35.7, 132747.0], [35.8, 132747.0], [35.9, 132747.0], [36.0, 132756.0], [36.1, 132756.0], [36.2, 132756.0], [36.3, 132756.0], [36.4, 132756.0], [36.5, 132756.0], [36.6, 132756.0], [36.7, 132756.0], [36.8, 132756.0], [36.9, 132756.0], [37.0, 132767.0], [37.1, 132767.0], [37.2, 132767.0], [37.3, 132767.0], [37.4, 132767.0], [37.5, 132767.0], [37.6, 132767.0], [37.7, 132767.0], [37.8, 132767.0], [37.9, 132767.0], [38.0, 132775.0], [38.1, 132775.0], [38.2, 132775.0], [38.3, 132775.0], [38.4, 132775.0], [38.5, 132775.0], [38.6, 132775.0], [38.7, 132775.0], [38.8, 132775.0], [38.9, 132775.0], [39.0, 132785.0], [39.1, 132785.0], [39.2, 132785.0], [39.3, 132785.0], [39.4, 132785.0], [39.5, 132785.0], [39.6, 132785.0], [39.7, 132785.0], [39.8, 132785.0], [39.9, 132785.0], [40.0, 132796.0], [40.1, 132796.0], [40.2, 132796.0], [40.3, 132796.0], [40.4, 132796.0], [40.5, 132796.0], [40.6, 132796.0], [40.7, 132796.0], [40.8, 132796.0], [40.9, 132796.0], [41.0, 132807.0], [41.1, 132807.0], [41.2, 132807.0], [41.3, 132807.0], [41.4, 132807.0], [41.5, 132807.0], [41.6, 132807.0], [41.7, 132807.0], [41.8, 132807.0], [41.9, 132807.0], [42.0, 132815.0], [42.1, 132815.0], [42.2, 132815.0], [42.3, 132815.0], [42.4, 132815.0], [42.5, 132815.0], [42.6, 132815.0], [42.7, 132815.0], [42.8, 132815.0], [42.9, 132815.0], [43.0, 132827.0], [43.1, 132827.0], [43.2, 132827.0], [43.3, 132827.0], [43.4, 132827.0], [43.5, 132827.0], [43.6, 132827.0], [43.7, 132827.0], [43.8, 132827.0], [43.9, 132827.0], [44.0, 132837.0], [44.1, 132837.0], [44.2, 132837.0], [44.3, 132837.0], [44.4, 132837.0], [44.5, 132837.0], [44.6, 132837.0], [44.7, 132837.0], [44.8, 132837.0], [44.9, 132837.0], [45.0, 132847.0], [45.1, 132847.0], [45.2, 132847.0], [45.3, 132847.0], [45.4, 132847.0], [45.5, 132847.0], [45.6, 132847.0], [45.7, 132847.0], [45.8, 132847.0], [45.9, 132847.0], [46.0, 132857.0], [46.1, 132857.0], [46.2, 132857.0], [46.3, 132857.0], [46.4, 132857.0], [46.5, 132857.0], [46.6, 132857.0], [46.7, 132857.0], [46.8, 132857.0], [46.9, 132857.0], [47.0, 132866.0], [47.1, 132866.0], [47.2, 132866.0], [47.3, 132866.0], [47.4, 132866.0], [47.5, 132866.0], [47.6, 132866.0], [47.7, 132866.0], [47.8, 132866.0], [47.9, 132866.0], [48.0, 132876.0], [48.1, 132876.0], [48.2, 132876.0], [48.3, 132876.0], [48.4, 132876.0], [48.5, 132876.0], [48.6, 132876.0], [48.7, 132876.0], [48.8, 132876.0], [48.9, 132876.0], [49.0, 132886.0], [49.1, 132886.0], [49.2, 132886.0], [49.3, 132886.0], [49.4, 132886.0], [49.5, 132886.0], [49.6, 132886.0], [49.7, 132886.0], [49.8, 132886.0], [49.9, 132886.0], [50.0, 132896.0], [50.1, 132896.0], [50.2, 132896.0], [50.3, 132896.0], [50.4, 132896.0], [50.5, 132896.0], [50.6, 132896.0], [50.7, 132896.0], [50.8, 132896.0], [50.9, 132896.0], [51.0, 132907.0], [51.1, 132907.0], [51.2, 132907.0], [51.3, 132907.0], [51.4, 132907.0], [51.5, 132907.0], [51.6, 132907.0], [51.7, 132907.0], [51.8, 132907.0], [51.9, 132907.0], [52.0, 132919.0], [52.1, 132919.0], [52.2, 132919.0], [52.3, 132919.0], [52.4, 132919.0], [52.5, 132919.0], [52.6, 132919.0], [52.7, 132919.0], [52.8, 132919.0], [52.9, 132919.0], [53.0, 132928.0], [53.1, 132928.0], [53.2, 132928.0], [53.3, 132928.0], [53.4, 132928.0], [53.5, 132928.0], [53.6, 132928.0], [53.7, 132928.0], [53.8, 132928.0], [53.9, 132928.0], [54.0, 132934.0], [54.1, 132934.0], [54.2, 132934.0], [54.3, 132934.0], [54.4, 132934.0], [54.5, 132934.0], [54.6, 132934.0], [54.7, 132934.0], [54.8, 132934.0], [54.9, 132934.0], [55.0, 132945.0], [55.1, 132945.0], [55.2, 132945.0], [55.3, 132945.0], [55.4, 132945.0], [55.5, 132945.0], [55.6, 132945.0], [55.7, 132945.0], [55.8, 132945.0], [55.9, 132945.0], [56.0, 132945.0], [56.1, 132945.0], [56.2, 132945.0], [56.3, 132945.0], [56.4, 132945.0], [56.5, 132945.0], [56.6, 132945.0], [56.7, 132945.0], [56.8, 132945.0], [56.9, 132945.0], [57.0, 132948.0], [57.1, 132948.0], [57.2, 132948.0], [57.3, 132948.0], [57.4, 132948.0], [57.5, 132948.0], [57.6, 132948.0], [57.7, 132948.0], [57.8, 132948.0], [57.9, 132948.0], [58.0, 132948.0], [58.1, 132948.0], [58.2, 132948.0], [58.3, 132948.0], [58.4, 132948.0], [58.5, 132948.0], [58.6, 132948.0], [58.7, 132948.0], [58.8, 132948.0], [58.9, 132948.0], [59.0, 132949.0], [59.1, 132949.0], [59.2, 132949.0], [59.3, 132949.0], [59.4, 132949.0], [59.5, 132949.0], [59.6, 132949.0], [59.7, 132949.0], [59.8, 132949.0], [59.9, 132949.0], [60.0, 132949.0], [60.1, 132949.0], [60.2, 132949.0], [60.3, 132949.0], [60.4, 132949.0], [60.5, 132949.0], [60.6, 132949.0], [60.7, 132949.0], [60.8, 132949.0], [60.9, 132949.0], [61.0, 132949.0], [61.1, 132949.0], [61.2, 132949.0], [61.3, 132949.0], [61.4, 132949.0], [61.5, 132949.0], [61.6, 132949.0], [61.7, 132949.0], [61.8, 132949.0], [61.9, 132949.0], [62.0, 132949.0], [62.1, 132949.0], [62.2, 132949.0], [62.3, 132949.0], [62.4, 132949.0], [62.5, 132949.0], [62.6, 132949.0], [62.7, 132949.0], [62.8, 132949.0], [62.9, 132949.0], [63.0, 132950.0], [63.1, 132950.0], [63.2, 132950.0], [63.3, 132950.0], [63.4, 132950.0], [63.5, 132950.0], [63.6, 132950.0], [63.7, 132950.0], [63.8, 132950.0], [63.9, 132950.0], [64.0, 132950.0], [64.1, 132950.0], [64.2, 132950.0], [64.3, 132950.0], [64.4, 132950.0], [64.5, 132950.0], [64.6, 132950.0], [64.7, 132950.0], [64.8, 132950.0], [64.9, 132950.0], [65.0, 132951.0], [65.1, 132951.0], [65.2, 132951.0], [65.3, 132951.0], [65.4, 132951.0], [65.5, 132951.0], [65.6, 132951.0], [65.7, 132951.0], [65.8, 132951.0], [65.9, 132951.0], [66.0, 132951.0], [66.1, 132951.0], [66.2, 132951.0], [66.3, 132951.0], [66.4, 132951.0], [66.5, 132951.0], [66.6, 132951.0], [66.7, 132951.0], [66.8, 132951.0], [66.9, 132951.0], [67.0, 132952.0], [67.1, 132952.0], [67.2, 132952.0], [67.3, 132952.0], [67.4, 132952.0], [67.5, 132952.0], [67.6, 132952.0], [67.7, 132952.0], [67.8, 132952.0], [67.9, 132952.0], [68.0, 136176.0], [68.1, 136176.0], [68.2, 136176.0], [68.3, 136176.0], [68.4, 136176.0], [68.5, 136176.0], [68.6, 136176.0], [68.7, 136176.0], [68.8, 136176.0], [68.9, 136176.0], [69.0, 136182.0], [69.1, 136182.0], [69.2, 136182.0], [69.3, 136182.0], [69.4, 136182.0], [69.5, 136182.0], [69.6, 136182.0], [69.7, 136182.0], [69.8, 136182.0], [69.9, 136182.0], [70.0, 136193.0], [70.1, 136193.0], [70.2, 136193.0], [70.3, 136193.0], [70.4, 136193.0], [70.5, 136193.0], [70.6, 136193.0], [70.7, 136193.0], [70.8, 136193.0], [70.9, 136193.0], [71.0, 136203.0], [71.1, 136203.0], [71.2, 136203.0], [71.3, 136203.0], [71.4, 136203.0], [71.5, 136203.0], [71.6, 136203.0], [71.7, 136203.0], [71.8, 136203.0], [71.9, 136203.0], [72.0, 136210.0], [72.1, 136210.0], [72.2, 136210.0], [72.3, 136210.0], [72.4, 136210.0], [72.5, 136210.0], [72.6, 136210.0], [72.7, 136210.0], [72.8, 136210.0], [72.9, 136210.0], [73.0, 136228.0], [73.1, 136228.0], [73.2, 136228.0], [73.3, 136228.0], [73.4, 136228.0], [73.5, 136228.0], [73.6, 136228.0], [73.7, 136228.0], [73.8, 136228.0], [73.9, 136228.0], [74.0, 136234.0], [74.1, 136234.0], [74.2, 136234.0], [74.3, 136234.0], [74.4, 136234.0], [74.5, 136234.0], [74.6, 136234.0], [74.7, 136234.0], [74.8, 136234.0], [74.9, 136234.0], [75.0, 136245.0], [75.1, 136245.0], [75.2, 136245.0], [75.3, 136245.0], [75.4, 136245.0], [75.5, 136245.0], [75.6, 136245.0], [75.7, 136245.0], [75.8, 136245.0], [75.9, 136245.0], [76.0, 136252.0], [76.1, 136252.0], [76.2, 136252.0], [76.3, 136252.0], [76.4, 136252.0], [76.5, 136252.0], [76.6, 136252.0], [76.7, 136252.0], [76.8, 136252.0], [76.9, 136252.0], [77.0, 136267.0], [77.1, 136267.0], [77.2, 136267.0], [77.3, 136267.0], [77.4, 136267.0], [77.5, 136267.0], [77.6, 136267.0], [77.7, 136267.0], [77.8, 136267.0], [77.9, 136267.0], [78.0, 136279.0], [78.1, 136279.0], [78.2, 136279.0], [78.3, 136279.0], [78.4, 136279.0], [78.5, 136279.0], [78.6, 136279.0], [78.7, 136279.0], [78.8, 136279.0], [78.9, 136279.0], [79.0, 136289.0], [79.1, 136289.0], [79.2, 136289.0], [79.3, 136289.0], [79.4, 136289.0], [79.5, 136289.0], [79.6, 136289.0], [79.7, 136289.0], [79.8, 136289.0], [79.9, 136289.0], [80.0, 136300.0], [80.1, 136300.0], [80.2, 136300.0], [80.3, 136300.0], [80.4, 136300.0], [80.5, 136300.0], [80.6, 136300.0], [80.7, 136300.0], [80.8, 136300.0], [80.9, 136300.0], [81.0, 136305.0], [81.1, 136305.0], [81.2, 136305.0], [81.3, 136305.0], [81.4, 136305.0], [81.5, 136305.0], [81.6, 136305.0], [81.7, 136305.0], [81.8, 136305.0], [81.9, 136305.0], [82.0, 136313.0], [82.1, 136313.0], [82.2, 136313.0], [82.3, 136313.0], [82.4, 136313.0], [82.5, 136313.0], [82.6, 136313.0], [82.7, 136313.0], [82.8, 136313.0], [82.9, 136313.0], [83.0, 136321.0], [83.1, 136321.0], [83.2, 136321.0], [83.3, 136321.0], [83.4, 136321.0], [83.5, 136321.0], [83.6, 136321.0], [83.7, 136321.0], [83.8, 136321.0], [83.9, 136321.0], [84.0, 136334.0], [84.1, 136334.0], [84.2, 136334.0], [84.3, 136334.0], [84.4, 136334.0], [84.5, 136334.0], [84.6, 136334.0], [84.7, 136334.0], [84.8, 136334.0], [84.9, 136334.0], [85.0, 136342.0], [85.1, 136342.0], [85.2, 136342.0], [85.3, 136342.0], [85.4, 136342.0], [85.5, 136342.0], [85.6, 136342.0], [85.7, 136342.0], [85.8, 136342.0], [85.9, 136342.0], [86.0, 136355.0], [86.1, 136355.0], [86.2, 136355.0], [86.3, 136355.0], [86.4, 136355.0], [86.5, 136355.0], [86.6, 136355.0], [86.7, 136355.0], [86.8, 136355.0], [86.9, 136355.0], [87.0, 136362.0], [87.1, 136362.0], [87.2, 136362.0], [87.3, 136362.0], [87.4, 136362.0], [87.5, 136362.0], [87.6, 136362.0], [87.7, 136362.0], [87.8, 136362.0], [87.9, 136362.0], [88.0, 136373.0], [88.1, 136373.0], [88.2, 136373.0], [88.3, 136373.0], [88.4, 136373.0], [88.5, 136373.0], [88.6, 136373.0], [88.7, 136373.0], [88.8, 136373.0], [88.9, 136373.0], [89.0, 136387.0], [89.1, 136387.0], [89.2, 136387.0], [89.3, 136387.0], [89.4, 136387.0], [89.5, 136387.0], [89.6, 136387.0], [89.7, 136387.0], [89.8, 136387.0], [89.9, 136387.0], [90.0, 136394.0], [90.1, 136394.0], [90.2, 136394.0], [90.3, 136394.0], [90.4, 136394.0], [90.5, 136394.0], [90.6, 136394.0], [90.7, 136394.0], [90.8, 136394.0], [90.9, 136394.0], [91.0, 136408.0], [91.1, 136408.0], [91.2, 136408.0], [91.3, 136408.0], [91.4, 136408.0], [91.5, 136408.0], [91.6, 136408.0], [91.7, 136408.0], [91.8, 136408.0], [91.9, 136408.0], [92.0, 136415.0], [92.1, 136415.0], [92.2, 136415.0], [92.3, 136415.0], [92.4, 136415.0], [92.5, 136415.0], [92.6, 136415.0], [92.7, 136415.0], [92.8, 136415.0], [92.9, 136415.0], [93.0, 136423.0], [93.1, 136423.0], [93.2, 136423.0], [93.3, 136423.0], [93.4, 136423.0], [93.5, 136423.0], [93.6, 136423.0], [93.7, 136423.0], [93.8, 136423.0], [93.9, 136423.0], [94.0, 136432.0], [94.1, 136432.0], [94.2, 136432.0], [94.3, 136432.0], [94.4, 136432.0], [94.5, 136432.0], [94.6, 136432.0], [94.7, 136432.0], [94.8, 136432.0], [94.9, 136432.0], [95.0, 136443.0], [95.1, 136443.0], [95.2, 136443.0], [95.3, 136443.0], [95.4, 136443.0], [95.5, 136443.0], [95.6, 136443.0], [95.7, 136443.0], [95.8, 136443.0], [95.9, 136443.0], [96.0, 136453.0], [96.1, 136453.0], [96.2, 136453.0], [96.3, 136453.0], [96.4, 136453.0], [96.5, 136453.0], [96.6, 136453.0], [96.7, 136453.0], [96.8, 136453.0], [96.9, 136453.0], [97.0, 136464.0], [97.1, 136464.0], [97.2, 136464.0], [97.3, 136464.0], [97.4, 136464.0], [97.5, 136464.0], [97.6, 136464.0], [97.7, 136464.0], [97.8, 136464.0], [97.9, 136464.0], [98.0, 136477.0], [98.1, 136477.0], [98.2, 136477.0], [98.3, 136477.0], [98.4, 136477.0], [98.5, 136477.0], [98.6, 136477.0], [98.7, 136477.0], [98.8, 136477.0], [98.9, 136477.0], [99.0, 136485.0], [99.1, 136485.0], [99.2, 136485.0], [99.3, 136485.0], [99.4, 136485.0], [99.5, 136485.0], [99.6, 136485.0], [99.7, 136485.0], [99.8, 136485.0], [99.9, 136485.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 132300.0, "maxY": 17.0, "series": [{"data": [[132400.0, 10.0], [132600.0, 9.0], [132800.0, 10.0], [136200.0, 9.0], [136400.0, 9.0], [132500.0, 10.0], [132900.0, 17.0], [132700.0, 11.0], [132300.0, 1.0], [136300.0, 11.0], [136100.0, 3.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 136400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 57.809999999999995, "minX": 1.75402056E12, "maxY": 57.809999999999995, "series": [{"data": [[1.75402056E12, 57.809999999999995]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75402056E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 132467.0, "minX": 2.0, "maxY": 136485.0, "series": [{"data": [[32.0, 136281.25], [2.0, 136355.0], [37.0, 132785.0], [41.0, 132661.5], [43.0, 132576.0], [42.0, 132876.0], [46.0, 132772.66666666666], [48.0, 132907.0], [51.0, 132506.0], [52.0, 132740.5], [55.0, 132756.0], [54.0, 132734.0], [58.0, 132553.33333333334], [63.0, 132846.0], [62.0, 132813.0], [67.0, 132687.0], [66.0, 132727.0], [65.0, 132949.5], [71.0, 132631.5], [69.0, 132693.5], [74.0, 132811.0], [79.0, 132658.0], [78.0, 132718.0], [77.0, 132841.0], [76.0, 132737.0], [83.0, 132536.0], [5.0, 136300.0], [93.0, 132618.0], [92.0, 132793.0], [97.0, 132467.0], [100.0, 132689.09090909094], [7.0, 136256.5], [8.0, 136387.0], [10.0, 136348.5], [11.0, 136228.0], [15.0, 136221.5], [17.0, 136379.0], [18.0, 136485.0], [19.0, 136334.0], [21.0, 136464.0], [22.0, 136254.0], [24.0, 136453.0], [25.0, 136293.5], [27.0, 136443.0], [28.0, 136277.5], [30.0, 136432.0], [31.0, 136366.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[57.809999999999995, 133875.6300000001]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.75402056E12, "maxY": 4708.333333333333, "series": [{"data": [[1.75402056E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.75402056E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75402056E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 133875.6300000001, "minX": 1.75402056E12, "maxY": 133875.6300000001, "series": [{"data": [[1.75402056E12, 133875.6300000001]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75402056E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.75402056E12, "maxY": 4.9E-324, "series": [{"data": [[1.75402056E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75402056E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 133875.56999999992, "minX": 1.75402056E12, "maxY": 133875.56999999992, "series": [{"data": [[1.75402056E12, 133875.56999999992]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75402056E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 132731.5, "minX": 32.0, "maxY": 136327.5, "series": [{"data": [[32.0, 136327.5], [68.0, 132731.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 68.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 32.0, "maxY": 4.9E-324, "series": [{"data": [[32.0, 0.0], [68.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 68.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75402044E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75402044E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75402044E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75402056E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75402056E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75402056E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75402056E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75402056E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75402056E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75402056E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.75402056E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75402056E12, "title": "Total Transactions Per Second"}},
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

