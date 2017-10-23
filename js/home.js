$(function () {
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
    });

    // 显示地区选择
    var _getParam = function(obj, param) {
        return obj[param] || '';
    };
    var cityPicker3 = new mui.PopPicker({
        layer: 3
    });
    cityPicker3.setData(cityData3);
      
        
    cityPicker3.pickers[0].setSelectedValue("440000",1000);
    var showCityPickerButton = document.getElementById('showCityPicker');
    var cityResult3 = document.getElementById('cityResult3');
    // cityPicker3.pickers[0].setSelectedIndex(0);
       
    showCityPickerButton.addEventListener('tap', function(event) {
        cityPicker3.pickers[0].setSelectedValue("440000",1000);
        // cityPicker3.pickers[1].setSelectedIndex(0,1000);  
        cityPicker3.show(function(items) {
            // cityResult3.innerText = "你选择的城市是:" + _getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
            showCityPickerButton.innerHTML = _getParam(items[2], 'text')+'<span class="iconfont">&#xe6a6;</span>';
            //返回 false 可以阻止选择框的关闭
            //return false;
        });
    }, false);
    var picker = new mui.PopPicker({
        layer: 2
    });
    // picker.pickers[0].setSelectedIndex(1);
    // picker.pickers[1].setSelectedIndex(1);
    // picker.show(function(SelectedItem) {
    //     console.log(SelectedItem);
    // })
})