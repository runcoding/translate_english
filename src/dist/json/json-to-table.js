var json2table = function (json, classes) {
    var cols = Object.keys(json[0]);

    var headerRow = '';
    var bodyRows = '';

    classes = classes || '';

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var mobile = isMobile();
    cols.map(function(col,i) {
        headerRow += '<th '+ (mobile && i == 2 ? 'style="display:none"' : '')+'>' + capitalizeFirstLetter(col) + '</th>';
    });
    var showTdIds = null;
    if(randomNum != null){
        var arr = randomArr(json.length);
        showTdIds = randomNumBoth(arr,randomNum > json.length ? json.length : randomNum );
    }

    json.map(function(row,i) {
        if(!isShow(i,showTdIds)){
           return;
        }

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
                var rowVal = isAlpha ? '<a class="alpha" href="http://dict.cn/'+ rowInfo +'" target="_blank" style="text-decoration:none;">' + rowInfo + '</a>':rowInfo;
               bodyRows += '<td onmouseover="alphaPlay(\''+ rowInfo +'\',false)" onclick="alphaPlay(\''+ rowInfo +'\',true)">' + rowVal + '</td>';
            }else {
                bodyRows += '<th '+ (mobile && index == 2 ? 'style="display:none"' : '')+'  style="text-align:left">' + rowInfo + '</td>';
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
var randomNum = null;

var isShow = function (i,showTdIds,) {
    if(showTdIds == null){
        return true;
    }
    return showTdIds.indexOf(i) >-1;
}

var json2tableByAlpha = function (json,random) {
    isAlpha = true;
    randomNum = random;
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


//循环创建一个数组的函数
function randomArr(maxcount){
    var arr = [];
    for(var i=0;i<maxcount;i++){
        arr.push(i)
    }
    return arr;
}


//取出随机数, maxNum为 取出随机数的个数
function randomNumBoth(arr,maxNum){
    var numArr = [];
    //numArr.push(0);
    //最大的循环次数
    var arrLength = arr.length;
    for(var i = 0;i<arrLength;i++){
        //获取arr的长度
        var Rand = arr.length
        //取出随机数
        var number = Math.floor(Math.random()*arr.length); //生成随机数num
        //往新建的数组里面传入数值
        numArr.push(arr[number]);
        //传入一个删除一个，避免重复
        arr.splice(number,1);
        if(arr.length <= arrLength-maxNum){
            return numArr;
        }
    }
}

var isMobile = function () {
    var ua = navigator.userAgent;

    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

    isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

    isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    return isIphone || isAndroid;
}