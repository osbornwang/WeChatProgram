// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    count:0,
    tip:'',
    filmType: ["动作片", "冒险片", "喜剧片", "剧情片", "幻想片", "恐怖片", "推理片", "爱情片", "惊悚片", "动画片", "传记片", "纪录片", "音乐片", "短片"],
    searchResult:[]
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  onReachBottom: function (scrollTop) {
    this.search();
  },
  onPullDownRefresh: function () {
    this.setData({
      searchResult: [],
      count: 0,
      inputValue: ''
    });
  },
  btnTap:function(){
    this.setData({
      searchResult: [],
      count: 0
    });
    this.search();
  },
  search:function(){
    var that = this;
    var key = this.data.inputValue;
    if (key.trim().length == 0){
      return;
    }
    var searchKey;
    if (key.indexOf(this.data.filmType) >-1){
      searchKey = 'tag='+key;
    }else{
      searchKey = 'q=' + key;
    }
    var url = "https://api.douban.com/v2/movie/search?" + searchKey;
    var count = that.data.count;
    wx.request({
      url: url,
      data: {
        start:count
      },
      header: {
        'Content-Type': 'json'
      },
      success: function (res) {
        console.log(res);
        if (res.data.subjects.length == 0 && that.data.searchResult.length==0){
          that.setData({
            tip:'暂无数据,换个条件搜搜'
          })
        } else if (res.data.subjects.length == 0 && that.data.searchResult.length > 0) {
          that.setData({
            tip: '没有更多啦'
          })
        }else{
          that.setData({
            tip: '你要搜索：'
          })

          var searchResult = that.data.searchResult.concat(res.data.subjects);
          count += res.data.count;
          that.setData({
            searchResult: searchResult,
            count:count
          })
        }
      }
    }) 
  }
})