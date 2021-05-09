// pages/RecordSleep/RecordSleep.js
import request from "../../../network/request";
// import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    TIMES: null,
    numClick: 7,
    time: "00-00 22:53",
    time1: "00-00 22:53",
    time2: "00-00 22:53",
    time3: "00-00 22:53",
    counter: 0,
    counter1: 0,
    title: null,
    bool: false,
    bool1: false,
    bool2: false,
    bool3: false,
    bool4: false,
    bool5: false,
    bool6: false,
    bool7: false,
    timeDate: null,
    timeDate1: null,
    // timeDate2:null,
    // timeDate3: '2020年07月27日 星期一',
    show: false,
    resMsg: "",
    store: "Insert",
    collections: null,
    gaidate: null,
    bedTime: null,
    isRecodeBtn1: true,
    isRecodeBtn2: true,
    isRecodeBtn3: true,
    isRecodeBtn4: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var time = new Date()
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    month = month > 9 ? month : '0' + month;
    var day = time.getDate();
    var arry = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var newDate =
      this.setData({
        timeDate: year,
        timeDate1: year + "-" + month + "-" + day + " " + "00:00:00",
        // timeDate2: year + "-" + month + "-" + day,
        // timeDate3: time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + time.getDate() + "日   " + arry[time.getDay()]
      })
    console.log(options, this.data.timeDate, this.data.timeDate1, this.data.timeDate2);
    if (options.date) {
      this.setData({
        gaidate: options.date
      })
    }
    console.log(this.gaidate, '新增日期')
    if (options.UpData == "true") {
      this.data.store = "Update";
      var time = new Date();
      var token = wx.getStorageSync('token');
      var MemberCode = wx.getStorageSync('MemberCode');
      var data = {
        "memberCode": MemberCode,
        "dt": time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + (time.getDate())
        // "dt":"2020-7-7"
      }
      request("/masterhypnotist/homeinfo", 'POST', data, token).then(res => {
        console.log(res, '修改昨晚睡眠');
        var Bedtime = (res.data.data.Sleep.Bedtime).substr((res.data.data.Sleep.Bedtime).length - 8, 5)
        var SleepingTime = (res.data.data.Sleep.SleepingTime).substr((res.data.data.Sleep.SleepingTime).length - 8, 5)
        var WakeUpTime = (res.data.data.Sleep.WakeUpTime).substr((res.data.data.Sleep.WakeUpTime).length - 8, 5)
        var GetUpTime = (res.data.data.Sleep.GetUpTime).substr((res.data.data.Sleep.GetUpTime).length - 8, 5)
        console.log(Bedtime, SleepingTime, WakeUpTime, GetUpTime, '修改的数据')
        this.setData({
          collections: [Bedtime, SleepingTime, WakeUpTime, GetUpTime, res.data.data.Sleep.NumberOfWakes, res.data.data.Sleep.Duration, res.data.data.Sleep.SleepQuality, res.data.data.Sleep.IsLight, res.data.data.Sleep.IsNoise, res.data.data.Sleep.IsTemperature, res.data.data.Sleep.IsUncomfortable, res.data.data.Sleep.IsPressure, res.data.data.Sleep.IsBedRecognition, res.data.data.Sleep.IsFeast, res.data.data.Sleep.IsBedCompanion],
          numClick: 0,
          time: res.data.data.Sleep.Bedtime,
          time1: res.data.data.Sleep.SleepingTime,
          time2: res.data.data.Sleep.WakeUpTime,
          time3: res.data.data.Sleep.GetUpTime,
          counter: res.data.data.Sleep.NumberOfWakes,
          counter1: res.data.data.Sleep.Duration,
          title: res.data.data.Sleep.SleepQuality,
          bool: res.data.data.Sleep.IsLight,
          bool1: res.data.data.Sleep.IsNoise,
          bool2: res.data.data.Sleep.IsTemperature,
          bool3: res.data.data.Sleep.IsUncomfortable,
          bool4: res.data.data.Sleep.IsPressure,
          bool5: res.data.data.Sleep.IsBedRecognition,
          bool6: res.data.data.Sleep.IsFeast,
          bool7: res.data.data.Sleep.IsBedCompanion,
          bedTime: res.data.data.Sleep.Bedtime
        })
        console.log('修改时的数据', this.data)
        console.log(this.data.collections)
        console.log(Bedtime, "上床时间")
        console.log(SleepingTime, "入睡时间")
        console.log(WakeUpTime, "睡醒时间")
        console.log(GetUpTime, "起床时间")
        console.log(res.data.data.Sleep.NumberOfWakes, "夜醒次数")
        console.log(res.data.data.Sleep.Duration, "夜醒时长")
        console.log(res.data.data.Sleep.SleepQuality, "睡眠质量")
        console.log(res.data.data.Sleep.IsLight, "光亮")
        console.log(res.data.data.Sleep.IsNoise, "噪音")
        console.log(res.data.data.Sleep.IsTemperature, "温度")
        console.log(res.data.data.Sleep.IsUncomfortable, "不适")
        console.log(res.data.data.Sleep.IsPressure, "压力")
        console.log(res.data.data.Sleep.IsBedRecognition, "认床")
        console.log(res.data.data.Sleep.IsFeast, "饱餐")
        console.log(res.data.data.Sleep.IsBedCompanion, "床伴")
      })
    } else {
      this.data.store = "Insert"
    }
    console.log(this.data.store);
    console.log(this.data.gaidate);
    if (this.data.gaidate) {
      this.data.TIMES = new Date(this.data.gaidate);
    } else {
      this.data.TIMES = new Date();
    }
    console.log(this.data.TIMES)
    // var arry = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    // console.log(time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate());    
  },
  setTips(e) {
    console.log(e, "-----李辉----");
    var num;
    if (this.data.numClick > 3) {
      num = 4;
    } else {
      num = e.detail;
    }
    this.setData({
      numClick: num,
      isRecodeBtn1: true,
      isRecodeBtn2: true,
      isRecodeBtn3: true,
      isRecodeBtn4: true
    })
  },
  bindTimeChange(e) {
    console.log(e, "----------))))");
    this.setData({
      time: this.data.timeDate + ' ' + e.detail[0] + " " + e.detail[1] + e.detail[2] + ":00",
    })
    // console.log(this.data.timeDate +' '+ this.data.time,this.data.numClick);
    // console.log(this.data.timeDate +' '+this.data.time);
    // if(this.data.numClick <= 6){
    //   return;
    // }
    if (this.data.isRecodeBtn1) {
      let num = this.data.numClick;
      if (num == 0) {
        num = 4;
      }
      this.setData({
        numClick: num - 1
      })
      this.setData({
        isRecodeBtn1: false
      })
    } else {
      return;
    }


  },
  bindTimeChange1(e) {
    this.setData({
      time1: this.data.timeDate + ' ' + e.detail[0] + " " + e.detail[1] + e.detail[2] + ":00",
    })
    console.log(this.data.timeDate + ' ' + this.data.time1);
    //   if(this.data.numClick == 7){
    //     this.setData({
    //       numClick:6
    //     })
    //   }else if(this.data.numClick <= 5){
    //     return;
    //   }
    //  this.setData({
    //    numClick:this.data.numClick-1
    //  })
    if (this.data.isRecodeBtn2) {
      this.setData({
        numClick: this.data.numClick - 1
      })
      this.setData({
        isRecodeBtn2: false
      })
    } else {
      return;
    }
  },
  bindTimeChange2(e) {
    this.setData({
      time2: this.data.timeDate + ' ' + e.detail[0] + " " + e.detail[1] + e.detail[2] + ":00",
    })
    console.log(this.data.timeDate + ' ' + this.data.time2);
    //   if(this.data.numClick <= 4){
    //     return;
    //   }
    //  this.setData({
    //    numClick:this.data.numClick-1
    //  })
    if (this.data.isRecodeBtn3) {
      this.setData({
        numClick: this.data.numClick - 1
      })
      this.setData({
        isRecodeBtn3: false
      })
    } else {
      return;
    }
  },
  bindTimeChange3(e) {
    this.setData({
      time3: this.data.timeDate + ' ' + e.detail[0] + " " + e.detail[1] + e.detail[2] + ":00",
    })
    console.log(this.data.timeDate + ' ' + this.data.time3);
    //   if(this.data.numClick <= 3){
    //     return;
    //   }
    //  this.setData({
    //    numClick:this.data.numClick-1
    //  })
    if (this.data.isRecodeBtn4) {
      this.setData({
        numClick: this.data.numClick - 1
      })
      this.setData({
        isRecodeBtn4: false
      })
    } else {
      return;
    }
  },
  // 您昨晚醒过吗？
  bindPickerChange(e) {
    var times = e.detail;
    console.log(times)
    this.setData({
      counter: times[0],
      counter1: times[1],
    })
    console.log(this.data.counter);
    console.log(this.data.counter1);
    if (this.data.numClick <= 2) {
      return;
    }
    this.setData({
      numClick: this.data.numClick - 1
    })
  },
  //睡眠质量
  facehandler(e) {
    this.setData({
      title: e.detail,
    })
    console.log(this.data.title);
    if (this.data.numClick <= 1) {
      return;
    }
    this.setData({
      numClick: this.data.numClick - 1
    })
  },
  //睡眠影响因素
  choose(e) {
    this.data.bool = !e.detail;
    if (this.data.numClick <= 0) {
      return;
    }
    this.setData({
      numClick: this.data.numClick - 1
    })
    console.log(this.data.bool);
  },
  choose1(e) {
    this.data.bool1 = !e.detail;
    if (this.data.numClick <= 0) {
      return;
    }
    this.setData({
      numClick: this.data.numClick - 1
    })
    console.log(this.data.bool1);
  },
  choose2(e) {
    this.data.bool2 = !e.detail;
    if (this.data.numClick <= 0) {
      return;
    }
    this.setData({
      numClick: this.data.numClick - 1
    })
    console.log(this.data.bool2);
  },
  choose3(e) {
    this.data.bool3 = !e.detail;
    if (this.data.numClick <= 0) {
      return;
    }
    this.setData({
      numClick: this.data.numClick - 1
    })
    console.log(this.data.bool3);
  },
  choose4(e) {
    this.data.bool4 = !e.detail;
    if (this.data.numClick <= 0) {
      return;
    }
    this.setData({
      numClick: this.data.numClick - 1
    })
    console.log(this.data.bool4);
  },
  choose5(e) {
    this.data.bool5 = !e.detail;
    if (this.data.numClick <= 0) {
      return;
    }
    this.setData({
      numClick: this.data.numClick - 1
    })
    console.log(this.data.bool5);
  },
  choose6(e) {
    this.data.bool6 = !e.detail;
    if (this.data.numClick <= 0) {
      return;
    }
    this.setData({
      numClick: this.data.numClick - 1
    })
    console.log(this.data.bool6);
  },
  choose7(e) {
    this.data.bool7 = !e.detail;
    if (this.data.numClick <= 0) {
      return;
    }
    this.setData({
      numClick: this.data.numClick - 1
    })
    console.log(this.data.bool7);
  },
  // 数据提交
  btntijiao() {
    if (this.data.numClick > 0) {
      wx.showToast({
        title: '请填写完整',
        icon: 'none'
      })
      return;
    }
    var num = this.data.time.slice(6, 8) + this.data.time.slice(9, 11);
    var num1 = this.data.time1.slice(6, 8) + this.data.time1.slice(9, 11);
    var timeDays = this.data.time.slice(0, 2) + this.data.time.slice(3, 5);
    var timeDays1 = this.data.time1.slice(0, 2) + this.data.time1.slice(3, 5);
    var num2 = this.data.time2.slice(6, 8) + this.data.time2.slice(9, 11);
    var num3 = this.data.time3.slice(6, 8) + this.data.time3.slice(9, 11);
    console.log(num, num1, num2, num3, timeDays, timeDays1);
    // if(num > num1){
    //   return;
    // }else if(num2 > num3){
    //   return;
    // }else if(this.data.title == null){
    //   return;
    // }
    var token = wx.getStorageSync('token');
    var MemberCode = wx.getStorageSync('MemberCode');
    var Fid = wx.getStorageSync("SFId");

    var ActivityCode
    var createtime;
    if (this.data.gaidate) {
      createtime = this.data.gaidate
    } else {
      createtime = this.data.timeDate1
    }
    // if(this.data.gaidate){

    // }else{
    ActivityCode = wx.getStorageSync('ActivityCode')
    // }
    console.log(MemberCode, Fid, ActivityCode, 'code啊');
    console.log(createtime)
    var reqData = {
      "sleep": {
        "FId": Fid,
        "ActivityCode": ActivityCode,
        "MemberCode": MemberCode,
        "Bedtime": this.data.time,
        "SleepingTime": this.data.time1,
        "WakeUpTime": this.data.time2,
        "GetUpTime": this.data.time3,
        //您昨晚睡过吗?
        "NumberOfWakes": this.data.counter,
        "Duration": this.data.counter1,
        //睡眠质量
        "SleepQuality": this.data.title,
        //睡眠影响因素
        "IsLight": this.data.bool,
        "IsNoise": this.data.bool1,
        "IsTemperature": this.data.bool2,
        "IsUncomfortable": this.data.bool3,
        "IsPressure": this.data.bool4,
        "IsBedRecognition": this.data.bool5,
        "IsFeast": this.data.bool6,
        "IsBedCompanion": this.data.bool7,
        "CreateTime": createtime
        // "CreateTime":'2020-7-20'
      },
      "Action": this.data.store
    }
    console.log(reqData, '请求的参数输出---记录睡眠')
    wx.showToast({
      title: '记录睡眠中...',
      icon: 'loading'
    })
    return;
    request("/masterhypnotist/insertsleeprecord", "POST", reqData, token).then(res => {
      console.log(res, res.data.msg);
      this.setData({
        resMsg: res.data.msg
      })
      if (this.data.resMsg !== "记录睡眠成功") {
        wx.showToast({
          title: '请求失败,请重新请求',
          icon: 'none'
        })
        return;
      }

    })
  },
  showPopup() {
    console.log(this.data.time,this.data.time1,this.data.time2,this.data.time3)

    var num = this.data.time.slice(6, 8) + this.data.time.slice(9, 11);
    var num1 = this.data.time1.slice(6, 8) + this.data.time1.slice(9, 11);
    var num2 = this.data.time2.slice(6, 8) + this.data.time2.slice(9, 11);
    var num3 = this.data.time3.slice(6, 8) + this.data.time3.slice(9, 11);
    var timeDays = this.data.time.slice(0, 2) + this.data.time.slice(3, 5);
    var timeDays1 = this.data.time1.slice(0, 2) + this.data.time1.slice(3, 5);
    var timeDays2 = this.data.time2.slice(0, 2) + this.data.time2.slice(3, 5);
    var timeDays3 = this.data.time3.slice(0, 2) + this.data.time3.slice(3, 5);
    console.log(num, num1, num2, num3, timeDays, timeDays1, timeDays2, timeDays3);
    setTimeout(() => {
      if (this.data.resMsg !== "记录睡眠成功") {
        return;
      } else {
        this.setData({
          show: true
        });
      }
    }, 700);
    if (num == 2253 || num1 == 2253 || num2 == 2253 || num3 == 2253) {
      wx.showToast({
        title: '请将时间填写完整',
        icon: 'none'
      })
      return
    }
    // 上床和入睡判断
    // if(timeDays > timeDays1){
    //   wx.showToast({
    //     title: '入睡不能早于上床,请合理填写时间',
    //     icon: 'none'
    //   })
    //   return;
    // }else if(num > num1 && timeDays == timeDays1){
    //   wx.showToast({
    //     title: '入睡不能早于上床,请合理填写时间',
    //     icon: 'none'
    //   })
    //   return;
    // }
    // 入睡和睡醒判断
    // if(timeDays1 == timeDays2 && num1 > num2){
    //   wx.showToast({
    //     title: '睡醒不能早于入睡,请合理填写时间',
    //     icon: 'none'
    //   })
    //   return;
    // }
    // // 睡醒和起床判断
    // if(num2 > num3){
    //   wx.showToast({
    //     title: '睡醒不能早于起床,请合理填写时间',
    //     icon: 'none'
    //   })
    //   return;
    // }
    // if(this.data.title == null){
    //   wx.showToast({
    //     title: '请选择起床后感觉如何选项',
    //     icon: 'none'
    //   })
    //   return;
    // }
  },
  onClose() {
    this.setData({
      show: false
    });
    wx.navigateTo({
      url: '/sleep-additemPages/pages/dayTime/dayTime',
    })
    // wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  mydata(e) { //可获取日历点击事件
    let data = e.detail.data
    console.log(data)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

})