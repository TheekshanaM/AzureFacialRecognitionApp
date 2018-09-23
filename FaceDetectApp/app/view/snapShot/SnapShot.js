Ext.define('FaceDetectApp.view.snapShot.SnapShot', {
    extend: 'Ext.form.Panel', 
    controller: 'snapShot',
    //title: 'Take SnapShot',
    height: 400,
    width: '100%',
    layout: 'hbox',
    items:[
            {
                width:'50%',
                title:"Preview",
                height:400,
                id:'preview',
                html:'<video  id="video" width="350" height="250" autoplay ></video>',
                //html:'<video  id="video" width="350" height="250" autoplay><source src="/resources/videoplayback.mp4" type="video/mp4"></video>',
                //html:'<iframe width="420" id="video" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>',
                tbar:[{
                        text:"Start Video",
                        listeners: {
                            click:'OpenCam'
                        }
                    },
                    {
                        text:"Snapshot",
                        listeners: {
                            click:'TakeSnapShot'
                        }
                    },
                    {
                        text:"Off Camera",
                        listeners:{
                            click:'OffCam'  
                        }
                    }
                ]
            },
            {
                width:'50%',
                title:"Snapshot",
                height:400,
                html:'<canvas id="canvas" width="350" height="250"></canvas>'
            },
            // {
            //     width:'25%',
            //     title:"Input",
            //     height:400,
            //     html:'<img src="" id="img"/>'
            //     //html:'<input type="hidden" id="img" name="img" width="320" height="240">'
            // }
    ]
});