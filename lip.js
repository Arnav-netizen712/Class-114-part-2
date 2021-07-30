function preload(){
    lipstick = loadImage('https://i.postimg.cc/gkktKPgn/pngtree-mouth-red-lips-lipstick-love-png-image-381749.jpg')
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
        save('Lipstick_filter.png');
    }

    function Change_Screen2(){
        window.location = "Mus.html";
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