google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Dance-pop sentiment score');
    data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
    data.addColumn('number', 'West-coast sentiment score');
    data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });

    data.addRows(
        [
            ['1969', 5.592453627544408, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1969</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.59 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 10 songs\n</div>\n    ', null, null],
            ['1970', 5.3771492810539865, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1970</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.38 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 10 songs\n</div>\n    ', null, null],
            ['1971', 5.611820789788684, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1971</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.61 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 24 songs\n</div>\n    ', null, null],
            ['1972', 5.627952004153087, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1972</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.63 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 58 songs\n</div>\n    ', null, null],
            ['1973', 5.658948622800083, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1973</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.66 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 47 songs\n</div>\n    ', null, null],
            ['1974', 5.6065734287714415, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1974</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.61 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 46 songs\n</div>\n    ', null, null],
            ['1975', 5.614143208624076, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1975</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.61 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 42 songs\n</div>\n    ', null, null],
            ['1976', 5.59851477413216, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1976</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.6 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 27 songs\n</div>\n    ', null, null],
            ['1977', 5.54518235372963, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1977</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.55 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 13 songs\n</div>\n    ', null, null],
            ['1978', 5.60588554119133, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1978</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.61 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 33 songs\n</div>\n    ', null, null],
            ['1979', 5.506814463897318, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1979</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.51 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 36 songs\n</div>\n    ', null, null],
            ['1980', 5.5367454305224655, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1980</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.54 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 33 songs\n</div>\n    ', null, null],
            ['1981', 5.547690875048658, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1981</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.55 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 28 songs\n</div>\n    ', null, null],
            ['1982', 5.686778587471301, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1982</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.69 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 45 songs\n</div>\n    ', 4.491875, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1982</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 4.49 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 1 songs\n</div>\n    '],
            ['1983', 5.550690874876214, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1983</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.55 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 57 songs\n</div>\n    ', null, null],
            ['1984', 5.613234964936068, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1984</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.61 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 102 songs\n</div>\n    ', 6.033466608451924, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1984</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 6.03 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 10 songs\n</div>\n    '],
            ['1985', 5.7149688283830695, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1985</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.71 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 88 songs\n</div>\n    ', 5.473049450549451, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1985</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.47 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 2 songs\n</div>\n    '],
            ['1986', 5.623795806798262, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1986</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.62 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 117 songs\n</div>\n    ', 5.60937787437854, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1986</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.61 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 21 songs\n</div>\n    '],
            ['1987', 5.589940683865431, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1987</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.59 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 198 songs\n</div>\n    ', 5.367583647877625, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1987</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.37 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 21 songs\n</div>\n    '],
            ['1988', 5.671092903317456, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1988</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.67 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 138 songs\n</div>\n    ', 5.330935150302404, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1988</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.33 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 53 songs\n</div>\n    '],
            ['1989', 5.653577078593295, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1989</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.65 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 194 songs\n</div>\n    ', 5.3328122990650755, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1989</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.33 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 38 songs\n</div>\n    '],
            ['1990', 5.581475217804936, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1990</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.58 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 238 songs\n</div>\n    ', 5.385785741831187, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1990</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.39 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 113 songs\n</div>\n    '],
            ['1991', 5.6521971782334495, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1991</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.65 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 183 songs\n</div>\n    ', 5.288013968298691, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1991</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.29 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 184 songs\n</div>\n    '],
            ['1992', 5.595396733371423, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1992</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.6 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 174 songs\n</div>\n    ', 5.245313470245596, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1992</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.25 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 228 songs\n</div>\n    '],
            ['1993', 5.660012776793401, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1993</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.66 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 200 songs\n</div>\n    ', 5.185867943023402, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1993</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.19 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 331 songs\n</div>\n    '],
            ['1994', 5.721419137408436, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1994</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.72 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 203 songs\n</div>\n    ', 5.2163975976674255, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1994</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.22 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 292 songs\n</div>\n    '],
            ['1995', 5.564764796825023, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1995</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.56 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 265 songs\n</div>\n    ', 5.229306595756717, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1995</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.23 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 458 songs\n</div>\n    '],
            ['1996', 5.683635389541663, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1996</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.68 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 214 songs\n</div>\n    ', 5.260211185404159, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1996</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.26 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 392 songs\n</div>\n    '],
            ['1997', 5.550088502376169, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1997</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.55 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 265 songs\n</div>\n    ', 5.22982409387452, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1997</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.23 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 388 songs\n</div>\n    '],
            ['1998', 5.547933069404409, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1998</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.55 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 307 songs\n</div>\n    ', 5.287179249058405, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1998</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.29 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 377 songs\n</div>\n    '],
            ['1999', 5.600602228459533, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1999</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.6 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 344 songs\n</div>\n    ', 5.313659749298065, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 1999</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.31 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 260 songs\n</div>\n    '],
            ['2000', 5.585774799324546, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2000</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.59 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 392 songs\n</div>\n    ', 5.319397403386805, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2000</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.32 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 445 songs\n</div>\n    '],
            ['2001', 5.598594036851924, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2001</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.6 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 483 songs\n</div>\n    ', 5.2739087119921395, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2001</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.27 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 348 songs\n</div>\n    '],
            ['2002', 5.579437354273182, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2002</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.58 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 405 songs\n</div>\n    ', 5.311810151273618, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2002</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.31 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 391 songs\n</div>\n    '],
            ['2003', 5.607410259181209, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2003</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.61 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 348 songs\n</div>\n    ', 5.330641888783031, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2003</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.33 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 308 songs\n</div>\n    '],
            ['2004', 5.588532803599518, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2004</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.59 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 304 songs\n</div>\n    ', 5.323292894846947, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2004</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.32 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 382 songs\n</div>\n    '],
            ['2005', 5.546095185256408, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2005</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.55 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 378 songs\n</div>\n    ', 5.349144091935283, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2005</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.35 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 424 songs\n</div>\n    '],
            ['2006', 5.537838757524535, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2006</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.54 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 428 songs\n</div>\n    ', 5.3315379435692645, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2006</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.33 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 535 songs\n</div>\n    '],
            ['2007', 5.5010681758598485, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2007</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.5 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 670 songs\n</div>\n    ', 5.292828742981206, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2007</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.29 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 351 songs\n</div>\n    '],
            ['2008', 5.540058260860651, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2008</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.54 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 659 songs\n</div>\n    ', 5.360777533691383, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2008</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.36 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 434 songs\n</div>\n    '],
            ['2009', 5.527918072416186, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2009</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.53 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 691 songs\n</div>\n    ', 5.361387374302318, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2009</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.36 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 533 songs\n</div>\n    '],
            ['2010', 5.545350653991042, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2010</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.55 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 897 songs\n</div>\n    ', 5.343165795854719, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2010</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.34 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 797 songs\n</div>\n    '],
            ['2011', 5.599201292437901, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2011</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.6 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 735 songs\n</div>\n    ', 5.337590358766641, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2011</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.34 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 1055 songs\n</div>\n    '],
            ['2012', 5.563048672885796, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2012</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.56 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 711 songs\n</div>\n    ', 5.307886899433352, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2012</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.31 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 1228 songs\n</div>\n    '],
            ['2013', 5.549039168289519, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2013</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.55 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 881 songs\n</div>\n    ', 5.295261121154348, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2013</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.3 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 1128 songs\n</div>\n    '],
            ['2014', 5.518849239892461, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2014</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.52 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 784 songs\n</div>\n    ', 5.311082387170895, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2014</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.31 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 1126 songs\n</div>\n    '],
            ['2015', 5.539523774296581, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2015</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.54 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 770 songs\n</div>\n    ', 5.325077822111204, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2015</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.33 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 1100 songs\n</div>\n    '],
            ['2016', 5.521953347930522, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2016</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.52 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 767 songs\n</div>\n    ', 5.31534271553856, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2016</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.32 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 1029 songs\n</div>\n    '],
            ['2017', 5.528528305830076, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2017</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.53 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 942 songs\n</div>\n    ', 5.350130966459563, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2017</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.35 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 976 songs\n</div>\n    '],
            ['2018', 5.56680295220335, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2018</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.57 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 820 songs\n</div>\n    ', 5.337541303989063, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2018</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.34 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 1064 songs\n</div>\n    '],
            ['2019', 5.551287851636455, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2019</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.55 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 933 songs\n</div>\n    ', 5.3532360741590885, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2019</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.35 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 1042 songs\n</div>\n    '],
            ['2020', 5.568908317191406, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2020</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.57 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 894 songs\n</div>\n    ', 5.433302078652838, '\n<div class="p-2">\n  <h3><i class="fas fa-music"></i> 2020</h3>\n  <i class="far fa-file-alt"></i> Sentiment: 5.43 <br>\n  <i class="fas fa-microphone-alt"></i> Based on 764 songs\n</div>\n    ']
        ]
    );

    var options = {
        title: 'Sentiment score Dance-pop vs West-coast',
        series: {
            0: { color: '#951ba8' },
            1: { color: '#086e14' },
        },
        tooltip: { isHtml: true },
        titlePosition: 'none',
        axes: {
            x: {
                0: { side: 'bottom' }
            }
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('song_sentiment_chart_div'));

    chart.draw(data, options);

    function resizeChart() {
        chart.draw(data, options);
    }
    if (document.addEventListener) {
    	console.log("1");
        window.addEventListener('resize', resizeChart);
    } else if (document.attachEvent) {
    	console.log("2");
        window.attachEvent('onresize', resizeChart);
    } else {
    	console.log("3");
        window.resize = resizeChart;
    }


}
