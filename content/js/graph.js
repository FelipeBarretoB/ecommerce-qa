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
        data: {"result": {"minY": 134492.0, "minX": 0.0, "maxY": 135361.0, "series": [{"data": [[0.0, 134492.0], [0.1, 134492.0], [0.2, 134492.0], [0.3, 134492.0], [0.4, 134492.0], [0.5, 134492.0], [0.6, 134492.0], [0.7, 134492.0], [0.8, 134492.0], [0.9, 134492.0], [1.0, 134506.0], [1.1, 134506.0], [1.2, 134506.0], [1.3, 134506.0], [1.4, 134506.0], [1.5, 134506.0], [1.6, 134506.0], [1.7, 134506.0], [1.8, 134506.0], [1.9, 134506.0], [2.0, 134514.0], [2.1, 134514.0], [2.2, 134514.0], [2.3, 134514.0], [2.4, 134514.0], [2.5, 134514.0], [2.6, 134514.0], [2.7, 134514.0], [2.8, 134514.0], [2.9, 134514.0], [3.0, 134525.0], [3.1, 134525.0], [3.2, 134525.0], [3.3, 134525.0], [3.4, 134525.0], [3.5, 134525.0], [3.6, 134525.0], [3.7, 134525.0], [3.8, 134525.0], [3.9, 134525.0], [4.0, 134535.0], [4.1, 134535.0], [4.2, 134535.0], [4.3, 134535.0], [4.4, 134535.0], [4.5, 134535.0], [4.6, 134535.0], [4.7, 134535.0], [4.8, 134535.0], [4.9, 134535.0], [5.0, 134545.0], [5.1, 134545.0], [5.2, 134545.0], [5.3, 134545.0], [5.4, 134545.0], [5.5, 134545.0], [5.6, 134545.0], [5.7, 134545.0], [5.8, 134545.0], [5.9, 134545.0], [6.0, 134554.0], [6.1, 134554.0], [6.2, 134554.0], [6.3, 134554.0], [6.4, 134554.0], [6.5, 134554.0], [6.6, 134554.0], [6.7, 134554.0], [6.8, 134554.0], [6.9, 134554.0], [7.0, 134564.0], [7.1, 134564.0], [7.2, 134564.0], [7.3, 134564.0], [7.4, 134564.0], [7.5, 134564.0], [7.6, 134564.0], [7.7, 134564.0], [7.8, 134564.0], [7.9, 134564.0], [8.0, 134576.0], [8.1, 134576.0], [8.2, 134576.0], [8.3, 134576.0], [8.4, 134576.0], [8.5, 134576.0], [8.6, 134576.0], [8.7, 134576.0], [8.8, 134576.0], [8.9, 134576.0], [9.0, 134585.0], [9.1, 134585.0], [9.2, 134585.0], [9.3, 134585.0], [9.4, 134585.0], [9.5, 134585.0], [9.6, 134585.0], [9.7, 134585.0], [9.8, 134585.0], [9.9, 134585.0], [10.0, 134595.0], [10.1, 134595.0], [10.2, 134595.0], [10.3, 134595.0], [10.4, 134595.0], [10.5, 134595.0], [10.6, 134595.0], [10.7, 134595.0], [10.8, 134595.0], [10.9, 134595.0], [11.0, 134606.0], [11.1, 134606.0], [11.2, 134606.0], [11.3, 134606.0], [11.4, 134606.0], [11.5, 134606.0], [11.6, 134606.0], [11.7, 134606.0], [11.8, 134606.0], [11.9, 134606.0], [12.0, 134615.0], [12.1, 134615.0], [12.2, 134615.0], [12.3, 134615.0], [12.4, 134615.0], [12.5, 134615.0], [12.6, 134615.0], [12.7, 134615.0], [12.8, 134615.0], [12.9, 134615.0], [13.0, 134626.0], [13.1, 134626.0], [13.2, 134626.0], [13.3, 134626.0], [13.4, 134626.0], [13.5, 134626.0], [13.6, 134626.0], [13.7, 134626.0], [13.8, 134626.0], [13.9, 134626.0], [14.0, 134635.0], [14.1, 134635.0], [14.2, 134635.0], [14.3, 134635.0], [14.4, 134635.0], [14.5, 134635.0], [14.6, 134635.0], [14.7, 134635.0], [14.8, 134635.0], [14.9, 134635.0], [15.0, 134645.0], [15.1, 134645.0], [15.2, 134645.0], [15.3, 134645.0], [15.4, 134645.0], [15.5, 134645.0], [15.6, 134645.0], [15.7, 134645.0], [15.8, 134645.0], [15.9, 134645.0], [16.0, 134654.0], [16.1, 134654.0], [16.2, 134654.0], [16.3, 134654.0], [16.4, 134654.0], [16.5, 134654.0], [16.6, 134654.0], [16.7, 134654.0], [16.8, 134654.0], [16.9, 134654.0], [17.0, 134664.0], [17.1, 134664.0], [17.2, 134664.0], [17.3, 134664.0], [17.4, 134664.0], [17.5, 134664.0], [17.6, 134664.0], [17.7, 134664.0], [17.8, 134664.0], [17.9, 134664.0], [18.0, 134675.0], [18.1, 134675.0], [18.2, 134675.0], [18.3, 134675.0], [18.4, 134675.0], [18.5, 134675.0], [18.6, 134675.0], [18.7, 134675.0], [18.8, 134675.0], [18.9, 134675.0], [19.0, 134684.0], [19.1, 134684.0], [19.2, 134684.0], [19.3, 134684.0], [19.4, 134684.0], [19.5, 134684.0], [19.6, 134684.0], [19.7, 134684.0], [19.8, 134684.0], [19.9, 134684.0], [20.0, 134695.0], [20.1, 134695.0], [20.2, 134695.0], [20.3, 134695.0], [20.4, 134695.0], [20.5, 134695.0], [20.6, 134695.0], [20.7, 134695.0], [20.8, 134695.0], [20.9, 134695.0], [21.0, 134705.0], [21.1, 134705.0], [21.2, 134705.0], [21.3, 134705.0], [21.4, 134705.0], [21.5, 134705.0], [21.6, 134705.0], [21.7, 134705.0], [21.8, 134705.0], [21.9, 134705.0], [22.0, 134715.0], [22.1, 134715.0], [22.2, 134715.0], [22.3, 134715.0], [22.4, 134715.0], [22.5, 134715.0], [22.6, 134715.0], [22.7, 134715.0], [22.8, 134715.0], [22.9, 134715.0], [23.0, 134725.0], [23.1, 134725.0], [23.2, 134725.0], [23.3, 134725.0], [23.4, 134725.0], [23.5, 134725.0], [23.6, 134725.0], [23.7, 134725.0], [23.8, 134725.0], [23.9, 134725.0], [24.0, 134735.0], [24.1, 134735.0], [24.2, 134735.0], [24.3, 134735.0], [24.4, 134735.0], [24.5, 134735.0], [24.6, 134735.0], [24.7, 134735.0], [24.8, 134735.0], [24.9, 134735.0], [25.0, 134745.0], [25.1, 134745.0], [25.2, 134745.0], [25.3, 134745.0], [25.4, 134745.0], [25.5, 134745.0], [25.6, 134745.0], [25.7, 134745.0], [25.8, 134745.0], [25.9, 134745.0], [26.0, 134755.0], [26.1, 134755.0], [26.2, 134755.0], [26.3, 134755.0], [26.4, 134755.0], [26.5, 134755.0], [26.6, 134755.0], [26.7, 134755.0], [26.8, 134755.0], [26.9, 134755.0], [27.0, 134763.0], [27.1, 134763.0], [27.2, 134763.0], [27.3, 134763.0], [27.4, 134763.0], [27.5, 134763.0], [27.6, 134763.0], [27.7, 134763.0], [27.8, 134763.0], [27.9, 134763.0], [28.0, 134775.0], [28.1, 134775.0], [28.2, 134775.0], [28.3, 134775.0], [28.4, 134775.0], [28.5, 134775.0], [28.6, 134775.0], [28.7, 134775.0], [28.8, 134775.0], [28.9, 134775.0], [29.0, 134785.0], [29.1, 134785.0], [29.2, 134785.0], [29.3, 134785.0], [29.4, 134785.0], [29.5, 134785.0], [29.6, 134785.0], [29.7, 134785.0], [29.8, 134785.0], [29.9, 134785.0], [30.0, 134796.0], [30.1, 134796.0], [30.2, 134796.0], [30.3, 134796.0], [30.4, 134796.0], [30.5, 134796.0], [30.6, 134796.0], [30.7, 134796.0], [30.8, 134796.0], [30.9, 134796.0], [31.0, 134805.0], [31.1, 134805.0], [31.2, 134805.0], [31.3, 134805.0], [31.4, 134805.0], [31.5, 134805.0], [31.6, 134805.0], [31.7, 134805.0], [31.8, 134805.0], [31.9, 134805.0], [32.0, 134815.0], [32.1, 134815.0], [32.2, 134815.0], [32.3, 134815.0], [32.4, 134815.0], [32.5, 134815.0], [32.6, 134815.0], [32.7, 134815.0], [32.8, 134815.0], [32.9, 134815.0], [33.0, 134825.0], [33.1, 134825.0], [33.2, 134825.0], [33.3, 134825.0], [33.4, 134825.0], [33.5, 134825.0], [33.6, 134825.0], [33.7, 134825.0], [33.8, 134825.0], [33.9, 134825.0], [34.0, 134834.0], [34.1, 134834.0], [34.2, 134834.0], [34.3, 134834.0], [34.4, 134834.0], [34.5, 134834.0], [34.6, 134834.0], [34.7, 134834.0], [34.8, 134834.0], [34.9, 134834.0], [35.0, 134844.0], [35.1, 134844.0], [35.2, 134844.0], [35.3, 134844.0], [35.4, 134844.0], [35.5, 134844.0], [35.6, 134844.0], [35.7, 134844.0], [35.8, 134844.0], [35.9, 134844.0], [36.0, 134855.0], [36.1, 134855.0], [36.2, 134855.0], [36.3, 134855.0], [36.4, 134855.0], [36.5, 134855.0], [36.6, 134855.0], [36.7, 134855.0], [36.8, 134855.0], [36.9, 134855.0], [37.0, 134865.0], [37.1, 134865.0], [37.2, 134865.0], [37.3, 134865.0], [37.4, 134865.0], [37.5, 134865.0], [37.6, 134865.0], [37.7, 134865.0], [37.8, 134865.0], [37.9, 134865.0], [38.0, 134874.0], [38.1, 134874.0], [38.2, 134874.0], [38.3, 134874.0], [38.4, 134874.0], [38.5, 134874.0], [38.6, 134874.0], [38.7, 134874.0], [38.8, 134874.0], [38.9, 134874.0], [39.0, 134885.0], [39.1, 134885.0], [39.2, 134885.0], [39.3, 134885.0], [39.4, 134885.0], [39.5, 134885.0], [39.6, 134885.0], [39.7, 134885.0], [39.8, 134885.0], [39.9, 134885.0], [40.0, 134895.0], [40.1, 134895.0], [40.2, 134895.0], [40.3, 134895.0], [40.4, 134895.0], [40.5, 134895.0], [40.6, 134895.0], [40.7, 134895.0], [40.8, 134895.0], [40.9, 134895.0], [41.0, 134906.0], [41.1, 134906.0], [41.2, 134906.0], [41.3, 134906.0], [41.4, 134906.0], [41.5, 134906.0], [41.6, 134906.0], [41.7, 134906.0], [41.8, 134906.0], [41.9, 134906.0], [42.0, 134916.0], [42.1, 134916.0], [42.2, 134916.0], [42.3, 134916.0], [42.4, 134916.0], [42.5, 134916.0], [42.6, 134916.0], [42.7, 134916.0], [42.8, 134916.0], [42.9, 134916.0], [43.0, 134926.0], [43.1, 134926.0], [43.2, 134926.0], [43.3, 134926.0], [43.4, 134926.0], [43.5, 134926.0], [43.6, 134926.0], [43.7, 134926.0], [43.8, 134926.0], [43.9, 134926.0], [44.0, 134936.0], [44.1, 134936.0], [44.2, 134936.0], [44.3, 134936.0], [44.4, 134936.0], [44.5, 134936.0], [44.6, 134936.0], [44.7, 134936.0], [44.8, 134936.0], [44.9, 134936.0], [45.0, 134944.0], [45.1, 134944.0], [45.2, 134944.0], [45.3, 134944.0], [45.4, 134944.0], [45.5, 134944.0], [45.6, 134944.0], [45.7, 134944.0], [45.8, 134944.0], [45.9, 134944.0], [46.0, 134955.0], [46.1, 134955.0], [46.2, 134955.0], [46.3, 134955.0], [46.4, 134955.0], [46.5, 134955.0], [46.6, 134955.0], [46.7, 134955.0], [46.8, 134955.0], [46.9, 134955.0], [47.0, 134963.0], [47.1, 134963.0], [47.2, 134963.0], [47.3, 134963.0], [47.4, 134963.0], [47.5, 134963.0], [47.6, 134963.0], [47.7, 134963.0], [47.8, 134963.0], [47.9, 134963.0], [48.0, 134976.0], [48.1, 134976.0], [48.2, 134976.0], [48.3, 134976.0], [48.4, 134976.0], [48.5, 134976.0], [48.6, 134976.0], [48.7, 134976.0], [48.8, 134976.0], [48.9, 134976.0], [49.0, 134986.0], [49.1, 134986.0], [49.2, 134986.0], [49.3, 134986.0], [49.4, 134986.0], [49.5, 134986.0], [49.6, 134986.0], [49.7, 134986.0], [49.8, 134986.0], [49.9, 134986.0], [50.0, 134996.0], [50.1, 134996.0], [50.2, 134996.0], [50.3, 134996.0], [50.4, 134996.0], [50.5, 134996.0], [50.6, 134996.0], [50.7, 134996.0], [50.8, 134996.0], [50.9, 134996.0], [51.0, 135006.0], [51.1, 135006.0], [51.2, 135006.0], [51.3, 135006.0], [51.4, 135006.0], [51.5, 135006.0], [51.6, 135006.0], [51.7, 135006.0], [51.8, 135006.0], [51.9, 135006.0], [52.0, 135014.0], [52.1, 135014.0], [52.2, 135014.0], [52.3, 135014.0], [52.4, 135014.0], [52.5, 135014.0], [52.6, 135014.0], [52.7, 135014.0], [52.8, 135014.0], [52.9, 135014.0], [53.0, 135024.0], [53.1, 135024.0], [53.2, 135024.0], [53.3, 135024.0], [53.4, 135024.0], [53.5, 135024.0], [53.6, 135024.0], [53.7, 135024.0], [53.8, 135024.0], [53.9, 135024.0], [54.0, 135035.0], [54.1, 135035.0], [54.2, 135035.0], [54.3, 135035.0], [54.4, 135035.0], [54.5, 135035.0], [54.6, 135035.0], [54.7, 135035.0], [54.8, 135035.0], [54.9, 135035.0], [55.0, 135046.0], [55.1, 135046.0], [55.2, 135046.0], [55.3, 135046.0], [55.4, 135046.0], [55.5, 135046.0], [55.6, 135046.0], [55.7, 135046.0], [55.8, 135046.0], [55.9, 135046.0], [56.0, 135054.0], [56.1, 135054.0], [56.2, 135054.0], [56.3, 135054.0], [56.4, 135054.0], [56.5, 135054.0], [56.6, 135054.0], [56.7, 135054.0], [56.8, 135054.0], [56.9, 135054.0], [57.0, 135064.0], [57.1, 135064.0], [57.2, 135064.0], [57.3, 135064.0], [57.4, 135064.0], [57.5, 135064.0], [57.6, 135064.0], [57.7, 135064.0], [57.8, 135064.0], [57.9, 135064.0], [58.0, 135073.0], [58.1, 135073.0], [58.2, 135073.0], [58.3, 135073.0], [58.4, 135073.0], [58.5, 135073.0], [58.6, 135073.0], [58.7, 135073.0], [58.8, 135073.0], [58.9, 135073.0], [59.0, 135083.0], [59.1, 135083.0], [59.2, 135083.0], [59.3, 135083.0], [59.4, 135083.0], [59.5, 135083.0], [59.6, 135083.0], [59.7, 135083.0], [59.8, 135083.0], [59.9, 135083.0], [60.0, 135094.0], [60.1, 135094.0], [60.2, 135094.0], [60.3, 135094.0], [60.4, 135094.0], [60.5, 135094.0], [60.6, 135094.0], [60.7, 135094.0], [60.8, 135094.0], [60.9, 135094.0], [61.0, 135106.0], [61.1, 135106.0], [61.2, 135106.0], [61.3, 135106.0], [61.4, 135106.0], [61.5, 135106.0], [61.6, 135106.0], [61.7, 135106.0], [61.8, 135106.0], [61.9, 135106.0], [62.0, 135116.0], [62.1, 135116.0], [62.2, 135116.0], [62.3, 135116.0], [62.4, 135116.0], [62.5, 135116.0], [62.6, 135116.0], [62.7, 135116.0], [62.8, 135116.0], [62.9, 135116.0], [63.0, 135124.0], [63.1, 135124.0], [63.2, 135124.0], [63.3, 135124.0], [63.4, 135124.0], [63.5, 135124.0], [63.6, 135124.0], [63.7, 135124.0], [63.8, 135124.0], [63.9, 135124.0], [64.0, 135133.0], [64.1, 135133.0], [64.2, 135133.0], [64.3, 135133.0], [64.4, 135133.0], [64.5, 135133.0], [64.6, 135133.0], [64.7, 135133.0], [64.8, 135133.0], [64.9, 135133.0], [65.0, 135143.0], [65.1, 135143.0], [65.2, 135143.0], [65.3, 135143.0], [65.4, 135143.0], [65.5, 135143.0], [65.6, 135143.0], [65.7, 135143.0], [65.8, 135143.0], [65.9, 135143.0], [66.0, 135153.0], [66.1, 135153.0], [66.2, 135153.0], [66.3, 135153.0], [66.4, 135153.0], [66.5, 135153.0], [66.6, 135153.0], [66.7, 135153.0], [66.8, 135153.0], [66.9, 135153.0], [67.0, 135165.0], [67.1, 135165.0], [67.2, 135165.0], [67.3, 135165.0], [67.4, 135165.0], [67.5, 135165.0], [67.6, 135165.0], [67.7, 135165.0], [67.8, 135165.0], [67.9, 135165.0], [68.0, 135173.0], [68.1, 135173.0], [68.2, 135173.0], [68.3, 135173.0], [68.4, 135173.0], [68.5, 135173.0], [68.6, 135173.0], [68.7, 135173.0], [68.8, 135173.0], [68.9, 135173.0], [69.0, 135183.0], [69.1, 135183.0], [69.2, 135183.0], [69.3, 135183.0], [69.4, 135183.0], [69.5, 135183.0], [69.6, 135183.0], [69.7, 135183.0], [69.8, 135183.0], [69.9, 135183.0], [70.0, 135194.0], [70.1, 135194.0], [70.2, 135194.0], [70.3, 135194.0], [70.4, 135194.0], [70.5, 135194.0], [70.6, 135194.0], [70.7, 135194.0], [70.8, 135194.0], [70.9, 135194.0], [71.0, 135204.0], [71.1, 135204.0], [71.2, 135204.0], [71.3, 135204.0], [71.4, 135204.0], [71.5, 135204.0], [71.6, 135204.0], [71.7, 135204.0], [71.8, 135204.0], [71.9, 135204.0], [72.0, 135216.0], [72.1, 135216.0], [72.2, 135216.0], [72.3, 135216.0], [72.4, 135216.0], [72.5, 135216.0], [72.6, 135216.0], [72.7, 135216.0], [72.8, 135216.0], [72.9, 135216.0], [73.0, 135225.0], [73.1, 135225.0], [73.2, 135225.0], [73.3, 135225.0], [73.4, 135225.0], [73.5, 135225.0], [73.6, 135225.0], [73.7, 135225.0], [73.8, 135225.0], [73.9, 135225.0], [74.0, 135233.0], [74.1, 135233.0], [74.2, 135233.0], [74.3, 135233.0], [74.4, 135233.0], [74.5, 135233.0], [74.6, 135233.0], [74.7, 135233.0], [74.8, 135233.0], [74.9, 135233.0], [75.0, 135243.0], [75.1, 135243.0], [75.2, 135243.0], [75.3, 135243.0], [75.4, 135243.0], [75.5, 135243.0], [75.6, 135243.0], [75.7, 135243.0], [75.8, 135243.0], [75.9, 135243.0], [76.0, 135253.0], [76.1, 135253.0], [76.2, 135253.0], [76.3, 135253.0], [76.4, 135253.0], [76.5, 135253.0], [76.6, 135253.0], [76.7, 135253.0], [76.8, 135253.0], [76.9, 135253.0], [77.0, 135266.0], [77.1, 135266.0], [77.2, 135266.0], [77.3, 135266.0], [77.4, 135266.0], [77.5, 135266.0], [77.6, 135266.0], [77.7, 135266.0], [77.8, 135266.0], [77.9, 135266.0], [78.0, 135275.0], [78.1, 135275.0], [78.2, 135275.0], [78.3, 135275.0], [78.4, 135275.0], [78.5, 135275.0], [78.6, 135275.0], [78.7, 135275.0], [78.8, 135275.0], [78.9, 135275.0], [79.0, 135283.0], [79.1, 135283.0], [79.2, 135283.0], [79.3, 135283.0], [79.4, 135283.0], [79.5, 135283.0], [79.6, 135283.0], [79.7, 135283.0], [79.8, 135283.0], [79.9, 135283.0], [80.0, 135295.0], [80.1, 135295.0], [80.2, 135295.0], [80.3, 135295.0], [80.4, 135295.0], [80.5, 135295.0], [80.6, 135295.0], [80.7, 135295.0], [80.8, 135295.0], [80.9, 135295.0], [81.0, 135305.0], [81.1, 135305.0], [81.2, 135305.0], [81.3, 135305.0], [81.4, 135305.0], [81.5, 135305.0], [81.6, 135305.0], [81.7, 135305.0], [81.8, 135305.0], [81.9, 135305.0], [82.0, 135315.0], [82.1, 135315.0], [82.2, 135315.0], [82.3, 135315.0], [82.4, 135315.0], [82.5, 135315.0], [82.6, 135315.0], [82.7, 135315.0], [82.8, 135315.0], [82.9, 135315.0], [83.0, 135323.0], [83.1, 135323.0], [83.2, 135323.0], [83.3, 135323.0], [83.4, 135323.0], [83.5, 135323.0], [83.6, 135323.0], [83.7, 135323.0], [83.8, 135323.0], [83.9, 135323.0], [84.0, 135335.0], [84.1, 135335.0], [84.2, 135335.0], [84.3, 135335.0], [84.4, 135335.0], [84.5, 135335.0], [84.6, 135335.0], [84.7, 135335.0], [84.8, 135335.0], [84.9, 135335.0], [85.0, 135344.0], [85.1, 135344.0], [85.2, 135344.0], [85.3, 135344.0], [85.4, 135344.0], [85.5, 135344.0], [85.6, 135344.0], [85.7, 135344.0], [85.8, 135344.0], [85.9, 135344.0], [86.0, 135353.0], [86.1, 135353.0], [86.2, 135353.0], [86.3, 135353.0], [86.4, 135353.0], [86.5, 135353.0], [86.6, 135353.0], [86.7, 135353.0], [86.8, 135353.0], [86.9, 135353.0], [87.0, 135357.0], [87.1, 135357.0], [87.2, 135357.0], [87.3, 135357.0], [87.4, 135357.0], [87.5, 135357.0], [87.6, 135357.0], [87.7, 135357.0], [87.8, 135357.0], [87.9, 135357.0], [88.0, 135357.0], [88.1, 135357.0], [88.2, 135357.0], [88.3, 135357.0], [88.4, 135357.0], [88.5, 135357.0], [88.6, 135357.0], [88.7, 135357.0], [88.8, 135357.0], [88.9, 135357.0], [89.0, 135358.0], [89.1, 135358.0], [89.2, 135358.0], [89.3, 135358.0], [89.4, 135358.0], [89.5, 135358.0], [89.6, 135358.0], [89.7, 135358.0], [89.8, 135358.0], [89.9, 135358.0], [90.0, 135358.0], [90.1, 135358.0], [90.2, 135358.0], [90.3, 135358.0], [90.4, 135358.0], [90.5, 135358.0], [90.6, 135358.0], [90.7, 135358.0], [90.8, 135358.0], [90.9, 135358.0], [91.0, 135358.0], [91.1, 135358.0], [91.2, 135358.0], [91.3, 135358.0], [91.4, 135358.0], [91.5, 135358.0], [91.6, 135358.0], [91.7, 135358.0], [91.8, 135358.0], [91.9, 135358.0], [92.0, 135359.0], [92.1, 135359.0], [92.2, 135359.0], [92.3, 135359.0], [92.4, 135359.0], [92.5, 135359.0], [92.6, 135359.0], [92.7, 135359.0], [92.8, 135359.0], [92.9, 135359.0], [93.0, 135359.0], [93.1, 135359.0], [93.2, 135359.0], [93.3, 135359.0], [93.4, 135359.0], [93.5, 135359.0], [93.6, 135359.0], [93.7, 135359.0], [93.8, 135359.0], [93.9, 135359.0], [94.0, 135359.0], [94.1, 135359.0], [94.2, 135359.0], [94.3, 135359.0], [94.4, 135359.0], [94.5, 135359.0], [94.6, 135359.0], [94.7, 135359.0], [94.8, 135359.0], [94.9, 135359.0], [95.0, 135359.0], [95.1, 135359.0], [95.2, 135359.0], [95.3, 135359.0], [95.4, 135359.0], [95.5, 135359.0], [95.6, 135359.0], [95.7, 135359.0], [95.8, 135359.0], [95.9, 135359.0], [96.0, 135360.0], [96.1, 135360.0], [96.2, 135360.0], [96.3, 135360.0], [96.4, 135360.0], [96.5, 135360.0], [96.6, 135360.0], [96.7, 135360.0], [96.8, 135360.0], [96.9, 135360.0], [97.0, 135360.0], [97.1, 135360.0], [97.2, 135360.0], [97.3, 135360.0], [97.4, 135360.0], [97.5, 135360.0], [97.6, 135360.0], [97.7, 135360.0], [97.8, 135360.0], [97.9, 135360.0], [98.0, 135361.0], [98.1, 135361.0], [98.2, 135361.0], [98.3, 135361.0], [98.4, 135361.0], [98.5, 135361.0], [98.6, 135361.0], [98.7, 135361.0], [98.8, 135361.0], [98.9, 135361.0], [99.0, 135361.0], [99.1, 135361.0], [99.2, 135361.0], [99.3, 135361.0], [99.4, 135361.0], [99.5, 135361.0], [99.6, 135361.0], [99.7, 135361.0], [99.8, 135361.0], [99.9, 135361.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 134400.0, "maxY": 19.0, "series": [{"data": [[135000.0, 10.0], [135200.0, 10.0], [134600.0, 10.0], [134800.0, 10.0], [134400.0, 1.0], [135300.0, 19.0], [135100.0, 10.0], [134900.0, 10.0], [134500.0, 10.0], [134700.0, 10.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 135300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 57.98000000000002, "minX": 1.7583369E12, "maxY": 57.98000000000002, "series": [{"data": [[1.7583369E12, 57.98000000000002]], "isOverall": false, "label": "Grupo de Hilos", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7583369E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 134514.0, "minX": 2.0, "maxY": 135360.0, "series": [{"data": [[2.0, 134963.0], [4.0, 135305.0], [13.0, 135243.0], [14.0, 135357.0], [15.0, 135019.0], [16.0, 135238.5], [18.0, 135340.5], [19.0, 135083.0], [20.0, 135101.0], [21.0, 135143.0], [22.0, 135073.0], [24.0, 135358.0], [25.0, 134974.5], [27.0, 134769.0], [29.0, 135153.0], [30.0, 135183.0], [31.0, 134874.0], [35.0, 134908.5], [34.0, 135148.5], [37.0, 134744.0], [39.0, 134633.5], [41.0, 134809.5], [43.0, 134645.0], [42.0, 134675.0], [45.0, 134885.0], [44.0, 134735.0], [47.0, 134796.0], [46.0, 134635.0], [49.0, 134745.0], [48.0, 134944.0], [51.0, 134815.0], [50.0, 134514.0], [53.0, 134954.5], [55.0, 134675.0], [57.0, 135359.0], [56.0, 134576.0], [58.0, 134715.0], [61.0, 134585.0], [60.0, 134545.0], [63.0, 134960.0], [67.0, 134869.33333333334], [64.0, 134709.5], [71.0, 134655.0], [70.0, 134535.0], [69.0, 135344.0], [75.0, 135359.0], [74.0, 134715.5], [72.0, 134955.0], [78.0, 135266.0], [77.0, 135297.0], [83.0, 134861.0], [81.0, 134936.0], [80.0, 134861.0], [86.0, 134916.0], [85.0, 135143.5], [91.0, 135069.5], [89.0, 135353.0], [88.0, 135360.0], [92.0, 134996.0], [98.0, 134986.0], [96.0, 135359.0], [100.0, 135155.7142857143]], "isOverall": false, "label": "Petición HTTP", "isController": false}, {"data": [[57.98000000000002, 134981.0700000001]], "isOverall": false, "label": "Petición HTTP-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7583369E12, "maxY": 4708.333333333333, "series": [{"data": [[1.7583369E12, 4708.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7583369E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7583369E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 134981.0700000001, "minX": 1.7583369E12, "maxY": 134981.0700000001, "series": [{"data": [[1.7583369E12, 134981.0700000001]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7583369E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7583369E12, "maxY": 4.9E-324, "series": [{"data": [[1.7583369E12, 0.0]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7583369E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 134981.05, "minX": 1.7583369E12, "maxY": 134981.05, "series": [{"data": [[1.7583369E12, 134981.05]], "isOverall": false, "label": "Petición HTTP", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7583369E12, "title": "Connect Time Over Time"}},
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
    data: {"result": {"minY": 134991.0, "minX": 100.0, "maxY": 134991.0, "series": [{"data": [[100.0, 134991.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 100.0, "title": "Response Time Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.75833672E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.75833672E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75833672E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7583369E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7583369E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7583369E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7583369E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.7583369E12, 1.6666666666666667]], "isOverall": false, "label": "Petición HTTP-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7583369E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.7583369E12, "maxY": 1.6666666666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7583369E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7583369E12, "title": "Total Transactions Per Second"}},
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

