Ext.define('FaceDetectApp.controller.SnapShotController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.snapShot',

    cam:'',
    OpenCam:function(){
        navigator.getUserMedia  = navigator.getUserMedia ||
                                 navigator.webkitGetUserMedia ||
                                 navigator.mozGetUserMedia ||
                                 navigator.msGetUserMedia;
        var video = document.getElementById("video");
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
      
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ audio: false, video: { width: 1280, height: 720 } },
                function(stream) {
                    cam=stream;
                    var video = document.querySelector('video');
                    video.srcObject = stream;
                    video.onloadedmetadata = function(e) {
                        video.play();
                    };
                },
                function(err) {
                    console.log("The following error occurred: " + err.name);
                }
            );
        } else {
            console.log("getUserMedia not supported");
        }

    },

    TakeSnapShot:function(){
                           
        var video = document.getElementById("video");
        var canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        context.drawImage(video, 20, 20, 350, 197);
        canvas.toDataURL('image/jpeg');
        
        
        // var image = document.getElementById("canvas").toDataURL("image/jpeg");
        // image = image.replace('data:image/jpeg;base64,', '');
        // // var image = document.getElementById("canvas").toDataURL("image/png");
        // // image = image.replace('data:image/png;base64,', '');
        // // document.getElementById("img").src="image";

        // var model = {TempImage:image ,personGroupID:'My'};
        // Ext.Ajax.request({
        //     url: "http://localhost:3548/api/FaceDetect/PersonVerifyRequest/",
        //     headers: {
                
        //         'Content-Type':'application/json',
        //         'Access-Control-Allow-Origin':'*',
        //         'Access-Control-Allow-Methods':'POST,GET',
        //         'Access-Control-Allow-Headers': 'Content-Type, Accept'
               
        //     },
        //     method: 'POST',
        //     //contentType: 'application/json; charset=utf-8',
        //     //data: JSON.stringify(model),
        //     jsonData: {
        //         TempImage:image ,personGroupID:'My'
        //     },
        //     dataType: "json", 
        //     success: function(data, textStatus) {
        //         //alert(xhr.status);
        //         console.log(data);
        //         console.log(textStatus);
                
        //     },
        //     error: function (data, textStatus) {
        //             alert("Create Fail....!!!");
                    
        //         }
        // });

        // // //var model = {TempImage:image , personGroupID:'My',User_Name:'1'};
        // // var model = {TempImage:image ,personGroupID:'My'};
        // // var store = Ext.create('Ext.data.Store', {
        // //     autoLoad: true,
        // //     //model: "NavigationView.model.Employee",
        // //     proxy: {
        // //         type: 'rest',
        // //         url: 'http://localhost:3548/api/FaceDetect/',
        // //         reader: {
        // //             type: 'json',
        // //             //rootProperty: 'users'
        // //         },
        // //         api: {
        // //             create  : 'http://localhost:3548/api/FaceDetect/PersonVerifyRequest/',
                    
        // //         }
        // //     }
        // // });

        
        // // store.add(model);
        // // store.sync();
     

    },

    OffCam:function(){
        var track = cam.getTracks()[0];  // if only one media track
        track.stop();
    }
});