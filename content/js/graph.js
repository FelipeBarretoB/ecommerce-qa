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
        data: {"result": {"minY": 10913.0, "minX": 0.0, "maxY": 13353.0, "series": [{"data": [[0.0, 10913.0], [0.1, 10913.0], [0.2, 10913.0], [0.3, 10913.0], [0.4, 10913.0], [0.5, 10913.0], [0.6, 10913.0], [0.7, 10913.0], [0.8, 10913.0], [0.9, 10913.0], [1.0, 10976.0], [1.1, 10976.0], [1.2, 10976.0], [1.3, 10976.0], [1.4, 10976.0], [1.5, 10976.0], [1.6, 10976.0], [1.7, 10976.0], [1.8, 10976.0], [1.9, 10976.0], [2.0, 10989.0], [2.1, 10989.0], [2.2, 10989.0], [2.3, 10989.0], [2.4, 10989.0], [2.5, 10989.0], [2.6, 10989.0], [2.7, 10989.0], [2.8, 10989.0], [2.9, 10989.0], [3.0, 11160.0], [3.1, 11160.0], [3.2, 11160.0], [3.3, 11160.0], [3.4, 11160.0], [3.5, 11160.0], [3.6, 11160.0], [3.7, 11160.0], [3.8, 11160.0], [3.9, 11160.0], [4.0, 11197.0], [4.1, 11197.0], [4.2, 11197.0], [4.3, 11197.0], [4.4, 11197.0], [4.5, 11197.0], [4.6, 11197.0], [4.7, 11197.0], [4.8, 11197.0], [4.9, 11197.0], [5.0, 11276.0], [5.1, 11276.0], [5.2, 11276.0], [5.3, 11276.0], [5.4, 11276.0], [5.5, 11276.0], [5.6, 11276.0], [5.7, 11276.0], [5.8, 11276.0], [5.9, 11276.0], [6.0, 11281.0], [6.1, 11281.0], [6.2, 11281.0], [6.3, 11281.0], [6.4, 11281.0], [6.5, 11281.0], [6.6, 11281.0], [6.7, 11281.0], [6.8, 11281.0], [6.9, 11281.0], [7.0, 11305.0], [7.1, 11305.0], [7.2, 11305.0], [7.3, 11305.0], [7.4, 11305.0], [7.5, 11305.0], [7.6, 11305.0], [7.7, 11305.0], [7.8, 11305.0], [7.9, 11305.0], [8.0, 11323.0], [8.1, 11323.0], [8.2, 11323.0], [8.3, 11323.0], [8.4, 11323.0], [8.5, 11323.0], [8.6, 11323.0], [8.7, 11323.0], [8.8, 11323.0], [8.9, 11323.0], [9.0, 11341.0], [9.1, 11341.0], [9.2, 11341.0], [9.3, 11341.0], [9.4, 11341.0], [9.5, 11341.0], [9.6, 11341.0], [9.7, 11341.0], [9.8, 11341.0], [9.9, 11341.0], [10.0, 11417.0], [10.1, 11417.0], [10.2, 11417.0], [10.3, 11417.0], [10.4, 11417.0], [10.5, 11417.0], [10.6, 11417.0], [10.7, 11417.0], [10.8, 11417.0], [10.9, 11417.0], [11.0, 11434.0], [11.1, 11434.0], [11.2, 11434.0], [11.3, 11434.0], [11.4, 11434.0], [11.5, 11434.0], [11.6, 11434.0], [11.7, 11434.0], [11.8, 11434.0], [11.9, 11434.0], [12.0, 11533.0], [12.1, 11533.0], [12.2, 11533.0], [12.3, 11533.0], [12.4, 11533.0], [12.5, 11533.0], [12.6, 11533.0], [12.7, 11533.0], [12.8, 11533.0], [12.9, 11533.0], [13.0, 11558.0], [13.1, 11558.0], [13.2, 11558.0], [13.3, 11558.0], [13.4, 11558.0], [13.5, 11558.0], [13.6, 11558.0], [13.7, 11558.0], [13.8, 11558.0], [13.9, 11558.0], [14.0, 11579.0], [14.1, 11579.0], [14.2, 11579.0], [14.3, 11579.0], [14.4, 11579.0], [14.5, 11579.0], [14.6, 11579.0], [14.7, 11579.0], [14.8, 11579.0], [14.9, 11579.0], [15.0, 11611.0], [15.1, 11611.0], [15.2, 11611.0], [15.3, 11611.0], [15.4, 11611.0], [15.5, 11611.0], [15.6, 11611.0], [15.7, 11611.0], [15.8, 11611.0], [15.9, 11611.0], [16.0, 11615.0], [16.1, 11615.0], [16.2, 11615.0], [16.3, 11615.0], [16.4, 11615.0], [16.5, 11615.0], [16.6, 11615.0], [16.7, 11615.0], [16.8, 11615.0], [16.9, 11615.0], [17.0, 11645.0], [17.1, 11645.0], [17.2, 11645.0], [17.3, 11645.0], [17.4, 11645.0], [17.5, 11645.0], [17.6, 11645.0], [17.7, 11645.0], [17.8, 11645.0], [17.9, 11645.0], [18.0, 11700.0], [18.1, 11700.0], [18.2, 11700.0], [18.3, 11700.0], [18.4, 11700.0], [18.5, 11700.0], [18.6, 11700.0], [18.7, 11700.0], [18.8, 11700.0], [18.9, 11700.0], [19.0, 11705.0], [19.1, 11705.0], [19.2, 11705.0], [19.3, 11705.0], [19.4, 11705.0], [19.5, 11705.0], [19.6, 11705.0], [19.7, 11705.0], [19.8, 11705.0], [19.9, 11705.0], [20.0, 11752.0], [20.1, 11752.0], [20.2, 11752.0], [20.3, 11752.0], [20.4, 11752.0], [20.5, 11752.0], [20.6, 11752.0], [20.7, 11752.0], [20.8, 11752.0], [20.9, 11752.0], [21.0, 11755.0], [21.1, 11755.0], [21.2, 11755.0], [21.3, 11755.0], [21.4, 11755.0], [21.5, 11755.0], [21.6, 11755.0], [21.7, 11755.0], [21.8, 11755.0], [21.9, 11755.0], [22.0, 11762.0], [22.1, 11762.0], [22.2, 11762.0], [22.3, 11762.0], [22.4, 11762.0], [22.5, 11762.0], [22.6, 11762.0], [22.7, 11762.0], [22.8, 11762.0], [22.9, 11762.0], [23.0, 11775.0], [23.1, 11775.0], [23.2, 11775.0], [23.3, 11775.0], [23.4, 11775.0], [23.5, 11775.0], [23.6, 11775.0], [23.7, 11775.0], [23.8, 11775.0], [23.9, 11775.0], [24.0, 11777.0], [24.1, 11777.0], [24.2, 11777.0], [24.3, 11777.0], [24.4, 11777.0], [24.5, 11777.0], [24.6, 11777.0], [24.7, 11777.0], [24.8, 11777.0], [24.9, 11777.0], [25.0, 11798.0], [25.1, 11798.0], [25.2, 11798.0], [25.3, 11798.0], [25.4, 11798.0], [25.5, 11798.0], [25.6, 11798.0], [25.7, 11798.0], [25.8, 11798.0], [25.9, 11798.0], [26.0, 11837.0], [26.1, 11837.0], [26.2, 11837.0], [26.3, 11837.0], [26.4, 11837.0], [26.5, 11837.0], [26.6, 11837.0], [26.7, 11837.0], [26.8, 11837.0], [26.9, 11837.0], [27.0, 11855.0], [27.1, 11855.0], [27.2, 11855.0], [27.3, 11855.0], [27.4, 11855.0], [27.5, 11855.0], [27.6, 11855.0], [27.7, 11855.0], [27.8, 11855.0], [27.9, 11855.0], [28.0, 11873.0], [28.1, 11873.0], [28.2, 11873.0], [28.3, 11873.0], [28.4, 11873.0], [28.5, 11873.0], [28.6, 11873.0], [28.7, 11873.0], [28.8, 11873.0], [28.9, 11873.0], [29.0, 11873.0], [29.1, 11873.0], [29.2, 11873.0], [29.3, 11873.0], [29.4, 11873.0], [29.5, 11873.0], [29.6, 11873.0], [29.7, 11873.0], [29.8, 11873.0], [29.9, 11873.0], [30.0, 11906.0], [30.1, 11906.0], [30.2, 11906.0], [30.3, 11906.0], [30.4, 11906.0], [30.5, 11906.0], [30.6, 11906.0], [30.7, 11906.0], [30.8, 11906.0], [30.9, 11906.0], [31.0, 11916.0], [31.1, 11916.0], [31.2, 11916.0], [31.3, 11916.0], [31.4, 11916.0], [31.5, 11916.0], [31.6, 11916.0], [31.7, 11916.0], [31.8, 11916.0], [31.9, 11916.0], [32.0, 11918.0], [32.1, 11918.0], [32.2, 11918.0], [32.3, 11918.0], [32.4, 11918.0], [32.5, 11918.0], [32.6, 11918.0], [32.7, 11918.0], [32.8, 11918.0], [32.9, 11918.0], [33.0, 11997.0], [33.1, 11997.0], [33.2, 11997.0], [33.3, 11997.0], [33.4, 11997.0], [33.5, 11997.0], [33.6, 11997.0], [33.7, 11997.0], [33.8, 11997.0], [33.9, 11997.0], [34.0, 12015.0], [34.1, 12015.0], [34.2, 12015.0], [34.3, 12015.0], [34.4, 12015.0], [34.5, 12015.0], [34.6, 12015.0], [34.7, 12015.0], [34.8, 12015.0], [34.9, 12015.0], [35.0, 12032.0], [35.1, 12032.0], [35.2, 12032.0], [35.3, 12032.0], [35.4, 12032.0], [35.5, 12032.0], [35.6, 12032.0], [35.7, 12032.0], [35.8, 12032.0], [35.9, 12032.0], [36.0, 12038.0], [36.1, 12038.0], [36.2, 12038.0], [36.3, 12038.0], [36.4, 12038.0], [36.5, 12038.0], [36.6, 12038.0], [36.7, 12038.0], [36.8, 12038.0], [36.9, 12038.0], [37.0, 12039.0], [37.1, 12039.0], [37.2, 12039.0], [37.3, 12039.0], [37.4, 12039.0], [37.5, 12039.0], [37.6, 12039.0], [37.7, 12039.0], [37.8, 12039.0], [37.9, 12039.0], [38.0, 12044.0], [38.1, 12044.0], [38.2, 12044.0], [38.3, 12044.0], [38.4, 12044.0], [38.5, 12044.0], [38.6, 12044.0], [38.7, 12044.0], [38.8, 12044.0], [38.9, 12044.0], [39.0, 12051.0], [39.1, 12051.0], [39.2, 12051.0], [39.3, 12051.0], [39.4, 12051.0], [39.5, 12051.0], [39.6, 12051.0], [39.7, 12051.0], [39.8, 12051.0], [39.9, 12051.0], [40.0, 12060.0], [40.1, 12060.0], [40.2, 12060.0], [40.3, 12060.0], [40.4, 12060.0], [40.5, 12060.0], [40.6, 12060.0], [40.7, 12060.0], [40.8, 12060.0], [40.9, 12060.0], [41.0, 12115.0], [41.1, 12115.0], [41.2, 12115.0], [41.3, 12115.0], [41.4, 12115.0], [41.5, 12115.0], [41.6, 12115.0], [41.7, 12115.0], [41.8, 12115.0], [41.9, 12115.0], [42.0, 12119.0], [42.1, 12119.0], [42.2, 12119.0], [42.3, 12119.0], [42.4, 12119.0], [42.5, 12119.0], [42.6, 12119.0], [42.7, 12119.0], [42.8, 12119.0], [42.9, 12119.0], [43.0, 12121.0], [43.1, 12121.0], [43.2, 12121.0], [43.3, 12121.0], [43.4, 12121.0], [43.5, 12121.0], [43.6, 12121.0], [43.7, 12121.0], [43.8, 12121.0], [43.9, 12121.0], [44.0, 12127.0], [44.1, 12127.0], [44.2, 12127.0], [44.3, 12127.0], [44.4, 12127.0], [44.5, 12127.0], [44.6, 12127.0], [44.7, 12127.0], [44.8, 12127.0], [44.9, 12127.0], [45.0, 12134.0], [45.1, 12134.0], [45.2, 12134.0], [45.3, 12134.0], [45.4, 12134.0], [45.5, 12134.0], [45.6, 12134.0], [45.7, 12134.0], [45.8, 12134.0], [45.9, 12134.0], [46.0, 12135.0], [46.1, 12135.0], [46.2, 12135.0], [46.3, 12135.0], [46.4, 12135.0], [46.5, 12135.0], [46.6, 12135.0], [46.7, 12135.0], [46.8, 12135.0], [46.9, 12135.0], [47.0, 12140.0], [47.1, 12140.0], [47.2, 12140.0], [47.3, 12140.0], [47.4, 12140.0], [47.5, 12140.0], [47.6, 12140.0], [47.7, 12140.0], [47.8, 12140.0], [47.9, 12140.0], [48.0, 12160.0], [48.1, 12160.0], [48.2, 12160.0], [48.3, 12160.0], [48.4, 12160.0], [48.5, 12160.0], [48.6, 12160.0], [48.7, 12160.0], [48.8, 12160.0], [48.9, 12160.0], [49.0, 12167.0], [49.1, 12167.0], [49.2, 12167.0], [49.3, 12167.0], [49.4, 12167.0], [49.5, 12167.0], [49.6, 12167.0], [49.7, 12167.0], [49.8, 12167.0], [49.9, 12167.0], [50.0, 12173.0], [50.1, 12173.0], [50.2, 12173.0], [50.3, 12173.0], [50.4, 12173.0], [50.5, 12173.0], [50.6, 12173.0], [50.7, 12173.0], [50.8, 12173.0], [50.9, 12173.0], [51.0, 12175.0], [51.1, 12175.0], [51.2, 12175.0], [51.3, 12175.0], [51.4, 12175.0], [51.5, 12175.0], [51.6, 12175.0], [51.7, 12175.0], [51.8, 12175.0], [51.9, 12175.0], [52.0, 12178.0], [52.1, 12178.0], [52.2, 12178.0], [52.3, 12178.0], [52.4, 12178.0], [52.5, 12178.0], [52.6, 12178.0], [52.7, 12178.0], [52.8, 12178.0], [52.9, 12178.0], [53.0, 12179.0], [53.1, 12179.0], [53.2, 12179.0], [53.3, 12179.0], [53.4, 12179.0], [53.5, 12179.0], [53.6, 12179.0], [53.7, 12179.0], [53.8, 12179.0], [53.9, 12179.0], [54.0, 12208.0], [54.1, 12208.0], [54.2, 12208.0], [54.3, 12208.0], [54.4, 12208.0], [54.5, 12208.0], [54.6, 12208.0], [54.7, 12208.0], [54.8, 12208.0], [54.9, 12208.0], [55.0, 12212.0], [55.1, 12212.0], [55.2, 12212.0], [55.3, 12212.0], [55.4, 12212.0], [55.5, 12212.0], [55.6, 12212.0], [55.7, 12212.0], [55.8, 12212.0], [55.9, 12212.0], [56.0, 12214.0], [56.1, 12214.0], [56.2, 12214.0], [56.3, 12214.0], [56.4, 12214.0], [56.5, 12214.0], [56.6, 12214.0], [56.7, 12214.0], [56.8, 12214.0], [56.9, 12214.0], [57.0, 12237.0], [57.1, 12237.0], [57.2, 12237.0], [57.3, 12237.0], [57.4, 12237.0], [57.5, 12237.0], [57.6, 12237.0], [57.7, 12237.0], [57.8, 12237.0], [57.9, 12237.0], [58.0, 12276.0], [58.1, 12276.0], [58.2, 12276.0], [58.3, 12276.0], [58.4, 12276.0], [58.5, 12276.0], [58.6, 12276.0], [58.7, 12276.0], [58.8, 12276.0], [58.9, 12276.0], [59.0, 12339.0], [59.1, 12339.0], [59.2, 12339.0], [59.3, 12339.0], [59.4, 12339.0], [59.5, 12339.0], [59.6, 12339.0], [59.7, 12339.0], [59.8, 12339.0], [59.9, 12339.0], [60.0, 12362.0], [60.1, 12362.0], [60.2, 12362.0], [60.3, 12362.0], [60.4, 12362.0], [60.5, 12362.0], [60.6, 12362.0], [60.7, 12362.0], [60.8, 12362.0], [60.9, 12362.0], [61.0, 12372.0], [61.1, 12372.0], [61.2, 12372.0], [61.3, 12372.0], [61.4, 12372.0], [61.5, 12372.0], [61.6, 12372.0], [61.7, 12372.0], [61.8, 12372.0], [61.9, 12372.0], [62.0, 12387.0], [62.1, 12387.0], [62.2, 12387.0], [62.3, 12387.0], [62.4, 12387.0], [62.5, 12387.0], [62.6, 12387.0], [62.7, 12387.0], [62.8, 12387.0], [62.9, 12387.0], [63.0, 12405.0], [63.1, 12405.0], [63.2, 12405.0], [63.3, 12405.0], [63.4, 12405.0], [63.5, 12405.0], [63.6, 12405.0], [63.7, 12405.0], [63.8, 12405.0], [63.9, 12405.0], [64.0, 12428.0], [64.1, 12428.0], [64.2, 12428.0], [64.3, 12428.0], [64.4, 12428.0], [64.5, 12428.0], [64.6, 12428.0], [64.7, 12428.0], [64.8, 12428.0], [64.9, 12428.0], [65.0, 12445.0], [65.1, 12445.0], [65.2, 12445.0], [65.3, 12445.0], [65.4, 12445.0], [65.5, 12445.0], [65.6, 12445.0], [65.7, 12445.0], [65.8, 12445.0], [65.9, 12445.0], [66.0, 12472.0], [66.1, 12472.0], [66.2, 12472.0], [66.3, 12472.0], [66.4, 12472.0], [66.5, 12472.0], [66.6, 12472.0], [66.7, 12472.0], [66.8, 12472.0], [66.9, 12472.0], [67.0, 12477.0], [67.1, 12477.0], [67.2, 12477.0], [67.3, 12477.0], [67.4, 12477.0], [67.5, 12477.0], [67.6, 12477.0], [67.7, 12477.0], [67.8, 12477.0], [67.9, 12477.0], [68.0, 12492.0], [68.1, 12492.0], [68.2, 12492.0], [68.3, 12492.0], [68.4, 12492.0], [68.5, 12492.0], [68.6, 12492.0], [68.7, 12492.0], [68.8, 12492.0], [68.9, 12492.0], [69.0, 12522.0], [69.1, 12522.0], [69.2, 12522.0], [69.3, 12522.0], [69.4, 12522.0], [69.5, 12522.0], [69.6, 12522.0], [69.7, 12522.0], [69.8, 12522.0], [69.9, 12522.0], [70.0, 12531.0], [70.1, 12531.0], [70.2, 12531.0], [70.3, 12531.0], [70.4, 12531.0], [70.5, 12531.0], [70.6, 12531.0], [70.7, 12531.0], [70.8, 12531.0], [70.9, 12531.0], [71.0, 12567.0], [71.1, 12567.0], [71.2, 12567.0], [71.3, 12567.0], [71.4, 12567.0], [71.5, 12567.0], [71.6, 12567.0], [71.7, 12567.0], [71.8, 12567.0], [71.9, 12567.0], [72.0, 12578.0], [72.1, 12578.0], [72.2, 12578.0], [72.3, 12578.0], [72.4, 12578.0], [72.5, 12578.0], [72.6, 12578.0], [72.7, 12578.0], [72.8, 12578.0], [72.9, 12578.0], [73.0, 12592.0], [73.1, 12592.0], [73.2, 12592.0], [73.3, 12592.0], [73.4, 12592.0], [73.5, 12592.0], [73.6, 12592.0], [73.7, 12592.0], [73.8, 12592.0], [73.9, 12592.0], [74.0, 12623.0], [74.1, 12623.0], [74.2, 12623.0], [74.3, 12623.0], [74.4, 12623.0], [74.5, 12623.0], [74.6, 12623.0], [74.7, 12623.0], [74.8, 12623.0], [74.9, 12623.0], [75.0, 12626.0], [75.1, 12626.0], [75.2, 12626.0], [75.3, 12626.0], [75.4, 12626.0], [75.5, 12626.0], [75.6, 12626.0], [75.7, 12626.0], [75.8, 12626.0], [75.9, 12626.0], [76.0, 12636.0], [76.1, 12636.0], [76.2, 12636.0], [76.3, 12636.0], [76.4, 12636.0], [76.5, 12636.0], [76.6, 12636.0], [76.7, 12636.0], [76.8, 12636.0], [76.9, 12636.0], [77.0, 12657.0], [77.1, 12657.0], [77.2, 12657.0], [77.3, 12657.0], [77.4, 12657.0], [77.5, 12657.0], [77.6, 12657.0], [77.7, 12657.0], [77.8, 12657.0], [77.9, 12657.0], [78.0, 12682.0], [78.1, 12682.0], [78.2, 12682.0], [78.3, 12682.0], [78.4, 12682.0], [78.5, 12682.0], [78.6, 12682.0], [78.7, 12682.0], [78.8, 12682.0], [78.9, 12682.0], [79.0, 12698.0], [79.1, 12698.0], [79.2, 12698.0], [79.3, 12698.0], [79.4, 12698.0], [79.5, 12698.0], [79.6, 12698.0], [79.7, 12698.0], [79.8, 12698.0], [79.9, 12698.0], [80.0, 12723.0], [80.1, 12723.0], [80.2, 12723.0], [80.3, 12723.0], [80.4, 12723.0], [80.5, 12723.0], [80.6, 12723.0], [80.7, 12723.0], [80.8, 12723.0], [80.9, 12723.0], [81.0, 12745.0], [81.1, 12745.0], [81.2, 12745.0], [81.3, 12745.0], [81.4, 12745.0], [81.5, 12745.0], [81.6, 12745.0], [81.7, 12745.0], [81.8, 12745.0], [81.9, 12745.0], [82.0, 12781.0], [82.1, 12781.0], [82.2, 12781.0], [82.3, 12781.0], [82.4, 12781.0], [82.5, 12781.0], [82.6, 12781.0], [82.7, 12781.0], [82.8, 12781.0], [82.9, 12781.0], [83.0, 12834.0], [83.1, 12834.0], [83.2, 12834.0], [83.3, 12834.0], [83.4, 12834.0], [83.5, 12834.0], [83.6, 12834.0], [83.7, 12834.0], [83.8, 12834.0], [83.9, 12834.0], [84.0, 12860.0], [84.1, 12860.0], [84.2, 12860.0], [84.3, 12860.0], [84.4, 12860.0], [84.5, 12860.0], [84.6, 12860.0], [84.7, 12860.0], [84.8, 12860.0], [84.9, 12860.0], [85.0, 12869.0], [85.1, 12869.0], [85.2, 12869.0], [85.3, 12869.0], [85.4, 12869.0], [85.5, 12869.0], [85.6, 12869.0], [85.7, 12869.0], [85.8, 12869.0], [85.9, 12869.0], [86.0, 12894.0], [86.1, 12894.0], [86.2, 12894.0], [86.3, 12894.0], [86.4, 12894.0], [86.5, 12894.0], [86.6, 12894.0], [86.7, 12894.0], [86.8, 12894.0], [86.9, 12894.0], [87.0, 12894.0], [87.1, 12894.0], [87.2, 12894.0], [87.3, 12894.0], [87.4, 12894.0], [87.5, 12894.0], [87.6, 12894.0], [87.7, 12894.0], [87.8, 12894.0], [87.9, 12894.0], [88.0, 12913.0], [88.1, 12913.0], [88.2, 12913.0], [88.3, 12913.0], [88.4, 12913.0], [88.5, 12913.0], [88.6, 12913.0], [88.7, 12913.0], [88.8, 12913.0], [88.9, 12913.0], [89.0, 12949.0], [89.1, 12949.0], [89.2, 12949.0], [89.3, 12949.0], [89.4, 12949.0], [89.5, 12949.0], [89.6, 12949.0], [89.7, 12949.0], [89.8, 12949.0], [89.9, 12949.0], [90.0, 12996.0], [90.1, 12996.0], [90.2, 12996.0], [90.3, 12996.0], [90.4, 12996.0], [90.5, 12996.0], [90.6, 12996.0], [90.7, 12996.0], [90.8, 12996.0], [90.9, 12996.0], [91.0, 13028.0], [91.1, 13028.0], [91.2, 13028.0], [91.3, 13028.0], [91.4, 13028.0], [91.5, 13028.0], [91.6, 13028.0], [91.7, 13028.0], [91.8, 13028.0], [91.9, 13028.0], [92.0, 13036.0], [92.1, 13036.0], [92.2, 13036.0], [92.3, 13036.0], [92.4, 13036.0], [92.5, 13036.0], [92.6, 13036.0], [92.7, 13036.0], [92.8, 13036.0], [92.9, 13036.0], [93.0, 13058.0], [93.1, 13058.0], [93.2, 13058.0], [93.3, 13058.0], [93.4, 13058.0], [93.5, 13058.0], [93.6, 13058.0], [93.7, 13058.0], [93.8, 13058.0], [93.9, 13058.0], [94.0, 13065.0], [94.1, 13065.0], [94.2, 13065.0], [94.3, 13065.0], [94.4, 13065.0], [94.5, 13065.0], [94.6, 13065.0], [94.7, 13065.0], [94.8, 13065.0], [94.9, 13065.0], [95.0, 13109.0], [95.1, 13109.0], [95.2, 13109.0], [95.3, 13109.0], [95.4, 13109.0], [95.5, 13109.0], [95.6, 13109.0], [95.7, 13109.0], [95.8, 13109.0], [95.9, 13109.0], [96.0, 13239.0], [96.1, 13239.0], [96.2, 13239.0], [96.3, 13239.0], [96.4, 13239.0], [96.5, 13239.0], [96.6, 13239.0], [96.7, 13239.0], [96.8, 13239.0], [96.9, 13239.0], [97.0, 13289.0], [97.1, 13289.0], [97.2, 13289.0], [97.3, 13289.0], [97.4, 13289.0], [97.5, 13289.0], [97.6, 13289.0], [97.7, 13289.0], [97.8, 13289.0], [97.9, 13289.0], [98.0, 13339.0], [98.1, 13339.0], [98.2, 13339.0], [98.3, 13339.0], [98.4, 13339.0], [98.5, 13339.0], [98.6, 13339.0], [98.7, 13339.0], [98.8, 13339.0], [98.9, 13339.0], [99.0, 13353.0], [99.1, 13353.0], [99.2, 13353.0], [99.3, 13353.0], [99.4, 13353.0], [99.5, 13353.0], [99.6, 13353.0], [99.7, 13353.0], [99.8, 13353.0], [99.9, 13353.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 10900.0, "maxY": 13.0, "series": [{"data": [[10900.0, 3.0], [11200.0, 2.0], [11100.0, 2.0], [11400.0, 2.0], [11700.0, 8.0], [11300.0, 3.0], [11600.0, 3.0], [11500.0, 3.0], [11900.0, 4.0], [12000.0, 7.0], [11800.0, 4.0], [12100.0, 13.0], [12200.0, 5.0], [12400.0, 6.0], [12300.0, 4.0], [12500.0, 5.0], [12700.0, 3.0], [12600.0, 6.0], [12800.0, 5.0], [12900.0, 3.0], [13000.0, 4.0], [13100.0, 1.0], [13200.0, 2.0], [13300.0, 2.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 50.669999999999966, "minX": 1.750044E12, "maxY": 50.669999999999966, "series": [{"data": [[1.750044E12, 50.669999999999966]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.750044E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 11078.0, "minX": 1.0, "maxY": 13339.0, "series": [{"data": [[3.0, 13321.0], [4.0, 13058.0], [5.0, 12657.0], [7.0, 12682.0], [8.0, 12760.0], [9.0, 13339.0], [10.0, 12723.0], [11.0, 12592.0], [12.0, 13239.0], [13.0, 12578.0], [14.0, 12362.0], [15.0, 12522.0], [16.0, 12636.0], [17.0, 12623.0], [18.0, 13109.0], [19.0, 12996.0], [20.0, 12531.0], [21.0, 12698.0], [22.0, 13065.0], [23.0, 12894.0], [24.0, 12869.0], [25.0, 12208.0], [26.0, 12834.0], [28.0, 12286.0], [29.0, 13036.0], [30.0, 12477.0], [31.0, 12781.0], [33.0, 12545.5], [35.0, 12949.0], [34.0, 12119.0], [37.0, 12237.0], [36.0, 12860.0], [39.0, 12121.0], [38.0, 12212.0], [41.0, 12044.0], [40.0, 12492.0], [43.0, 12175.0], [45.0, 12060.0], [44.0, 12452.5], [47.0, 11837.0], [46.0, 12372.0], [49.0, 12173.0], [48.0, 12567.0], [51.0, 12276.0], [50.0, 12428.0], [53.0, 11855.0], [52.0, 12214.0], [55.0, 12140.0], [54.0, 12135.0], [57.0, 12472.0], [56.0, 12339.0], [59.0, 11705.0], [58.0, 12387.0], [61.0, 11997.0], [60.0, 12445.0], [63.0, 11856.0], [67.0, 11775.0], [66.0, 12134.0], [65.0, 11700.0], [64.0, 12039.0], [71.0, 11873.0], [70.0, 11906.0], [69.0, 11841.5], [75.0, 12115.0], [74.0, 11305.0], [73.0, 12051.0], [72.0, 12127.0], [79.0, 11762.0], [78.0, 12015.0], [77.0, 11798.0], [76.0, 11873.0], [83.0, 11615.0], [82.0, 12032.0], [81.0, 11160.0], [80.0, 11558.0], [87.0, 11579.0], [86.0, 11916.0], [85.0, 11777.0], [84.0, 11918.0], [91.0, 11281.0], [90.0, 11341.0], [89.0, 11197.0], [88.0, 11417.0], [95.0, 11299.5], [93.0, 11683.0], [96.0, 11752.0], [100.0, 11078.0], [1.0, 13028.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[50.669999999999966, 12195.660000000005]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 248.33333333333334, "minX": 1.750044E12, "maxY": 1505.0, "series": [{"data": [[1.750044E12, 1505.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.750044E12, 248.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.750044E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 12195.660000000005, "minX": 1.750044E12, "maxY": 12195.660000000005, "series": [{"data": [[1.750044E12, 12195.660000000005]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.750044E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 12183.230000000003, "minX": 1.750044E12, "maxY": 12183.230000000003, "series": [{"data": [[1.750044E12, 12183.230000000003]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.750044E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 545.4800000000002, "minX": 1.750044E12, "maxY": 545.4800000000002, "series": [{"data": [[1.750044E12, 545.4800000000002]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.750044E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 10913.0, "minX": 1.750044E12, "maxY": 13353.0, "series": [{"data": [[1.750044E12, 13353.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.750044E12, 12991.300000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.750044E12, 13352.86]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.750044E12, 13106.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.750044E12, 10913.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.750044E12, 12170.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.750044E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 10982.5, "minX": 4.0, "maxY": 12682.0, "series": [{"data": [[4.0, 10982.5], [41.0, 12682.0], [55.0, 11916.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 10963.5, "minX": 4.0, "maxY": 12674.0, "series": [{"data": [[4.0, 10963.5], [41.0, 12674.0], [55.0, 11897.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 55.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.750044E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.750044E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.750044E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.750044E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.750044E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.750044E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.750044E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.750044E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.750044E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.750044E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.750044E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.750044E12, "title": "Total Transactions Per Second"}},
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

