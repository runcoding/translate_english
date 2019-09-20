var json2table = function (json, classes) {
    var cols = Object.keys(json[0]);

    var headerRow = '';
    var bodyRows = '';

    classes = classes || '';

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    cols.map(function(col) {
        headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
    });

    json.map(function(row) {
        bodyRows += '<tr>';

        cols.map(function(colName,index) {
            var rowInfo ;
            var rowVal =  row[colName];
            /**值是数组*/
            if( rowVal instanceof Array){
                rowInfo = "<ul>";
                rowVal.forEach(function(innerVal,index,array){
                    var innerRowInfo;
                    if (innerVal instanceof Object){ 
                       for(innerKey in innerVal){  
                            innerRowInfo = "<label>"+innerKey+"</label>: <span>"+innerVal[innerKey]+"</span>";
                        }      
                    } 
                    rowInfo += "<li>"+(innerRowInfo || innerVal)+"</li>";
                });
                rowInfo += "</ul>";
            } 
            rowInfo = rowInfo   || row[colName];
            if(index == 0){
                var rowVal = isAlpha ? '<a href="http://dict.cn/'+ rowInfo +'" target="_blank">' + rowInfo + '</a>':rowInfo;
               bodyRows += '<td onmouseover="alphaPlay(\''+ rowInfo +'\',false)" onclick="alphaPlay(\''+ rowInfo +'\',true)">' + rowVal + '</td>';
            }else {
                bodyRows += '<td>' + rowInfo + '</td>';
            }
        })

        bodyRows += '</tr>';
    });

    return '<table class="' + classes + '">' +
                '<thead>' +'<tr>' + marked(headerRow) + '</tr>' + '</thead>' +
                '<tbody>' + marked(bodyRows)+ '</tbody>' +
            '</table>';
}

var isAlpha = false;

var json2tableByAlpha = function (json) {
    isAlpha = true;
    return json2table(json,'');
}

var alphaPlay =function (e,isFemale) {
    if(!isAlpha){
        return;
    }
    var baseUrl = '';
    if(window.location.host.indexOf("localhost") == -1){
        //读取远程
        baseUrl = 'https://raw.githubusercontent.com/runcoding/static/master/wiki';
    }
    var src = baseUrl+'/alpha/translate/'+ e+'.mp3';
    if(isFemale){
        src = baseUrl+'/alpha/female/'+ e+'.mp3'
    }
    var sound = new Howl({
        src: [src],
        volume: 0.5,
        onend: function() {
            //console.log('Finished!');
        }
    });
    sound.play();
}

