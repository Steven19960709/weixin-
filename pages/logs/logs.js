Page({
  data: {
    majorList:null
  },
  onLoad: function () {
    this.getmajorList();
  },
  // toSchool:function(event){
  //   console.log(event);
  //   var self = this;
  //   // var majorIndex = index;
  //   wx.navigateTo({
  //     url: '/pages/school/school'//?index=' + majorIndex,
  //   })
  // },
  toSchool: function (e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var majorList = this.data.majorList;
    var major = majorList[index];
    wx.navigateTo({
      url: '/pages/school/school?major='+ major,
    })
  },
  getmajorList: function () {
    var self = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5adc71f4de32ef341cc7ed48/wxsubject/subinformation#!method=get',//关于专业的数据
      method: 'GET',
      success: function (res) {
        console.log(res);
        var majorL = res.data.data;
        let arrList = [];
        for(let ma in majorL){
          arrList.push(majorL[ma]);
        }
        console.log(arrList);
        self.setData({
          majorList: arrList,
        })
      }
    })
  }
})

  
