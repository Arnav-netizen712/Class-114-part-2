    function preload(){
        mustache = loadImage('https://i.postimg.cc/j509VySt/image.png')
    }   
    
    function setup(){
        canvas = createCanvas(300,300);
        canvas.center();                                                                                                                                                        
    }
    
    function setup(){
        canvas = createCanvas(300,300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300, 300);
        video.hide();     
        
        poseNet = ml5.poseNet(video, modelLoaded);
    }
    
    function draw(){
        image(video, 0, 0, 300, 300);
    }
    
    function take_snaphot(){
        save('Mustache_Filter.png');
    }

    function Change_Screen1(){
        window.location = "lip.html";
    }

    function modelLoaded(){
        console.log('PoseNet is initialized');
    }

    function gotPoses(results){
        if(results.lenght > 0)
        {
            console.log(results);
            console.log("nose x = " + results[0].pose.nose.x);
            console.log("nose y = " + results[0].pose.nose.y);
        }
    }