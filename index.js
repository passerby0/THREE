// import THREE from 'three'
window.onload = function () {
    console.log("this Root verion:", THREE.REVISION)
    //声明变量
    const IW = 1000,IH=2000;
    var Root = {
        W: window.innerWidth,
        H: window.innerHeight,
        Root: document.getElementById('root'),
    }
    var renderer = new THREE.WebGLRenderer({ antialias: true })
    //建议设置大小，否则会出现锯齿
    renderer.setSize(window.innerWidth, window.innerHeight);
    Root.Root.appendChild(renderer.domElement)
    //创建场景
    var scene = new THREE.Scene();
    var group1 = new THREE.Group();
    scene.add(group1);
    //设置场景背景色
    scene.background = new THREE.Color(0x111111);
    //添加灯光
    var amblight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(amblight);
    var light = new THREE.DirectionalLight('#FFF', 1);
    light.position.set(0, 2000, 0);
    scene.add(light);

    //添加辅助网格
    var gridHelper = new THREE.GridHelper(3000,40, 0x00251e, 0x00251e );
    gridHelper.position.y = -5;
    gridHelper.position.x = -700;
    group1.add( gridHelper );
    var camera = new THREE.PerspectiveCamera(100, Root.W / Root.H, 0.1, 200000);
    camera.position.set(-3000, 3500,-3000);
    camera.lookAt(scene.position);
    //整个场景旋转的组
    scene.add(camera);
    //添加房子
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./modeles/fangzi.mtl', function (materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('./modeles/fangzi.obj', function (object) {
            //位置坐标x左正右负，y上正下负，z前负后正
            object.position.set(-500,0,0);
            //object.scale为将模型成比例的放缩
            object.scale.x=50;
            object.scale.y=50;
            object.scale.z=50;
            object.name="fangzi"
            group1.add(object);
        });
    });
    //添加灰色路段
    var planesG=new THREE.Group();
    var geometry=new THREE.PlaneGeometry(300,1550);
    var material=new THREE.MeshBasicMaterial({color: 0x333333, side: THREE.DoubleSide});
    var plane=new THREE.Mesh(geometry,material);
    plane.rotateX(0.5*Math.PI)
    var plane11=plane.clone();
    plane11.position.set(750,0,-200);
    planesG.add(plane11);
    var plane22=plane.clone();
    plane22.position.set(-1750,0,-200);
    planesG.add(plane22);
    plane.position.set(125,0,700);
    planesG.add(plane)
    plane.rotateZ(0.5*Math.PI)
    var plane0  = plane.clone();
    plane0.position.set(-1125,0,700);
    planesG.add(plane0)
    group1.add( planesG );

   // 添加门
    var mtlLoader=new THREE.MTLLoader();
    mtlLoader.load('./modeles/men.mtl',function(materials){
        materials.preload();
        var objLoader=new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('./modeles/men.obj',function(object){
            object.position.set(-1750,0,-950);
            object.scale.x=30;
            object.scale.y=45;
            object.scale.z=50;
            object.name="men1";
            var object1=object.clone();
            object1.position.set(750,0,-950);
            group1.add(object1);
            group1.add(object);
        })
    })
  
    //添加压缩机
    var mtlLoader=new THREE.MTLLoader();
    mtlLoader.load('./modeles/yasuoji.mtl',function(materials){
        materials.preload();
        var objLoader=new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('./modeles/yasuoji.obj',function(object){
            object.position.set(-500,0,1200);
            object.scale.x=10;
            object.scale.y=10;
            object.scale.z=10;
            object.rotateY(Math.PI)
            group1.add(object);
        })
    })

    //添加井
    var mtlLoader=new THREE.MTLLoader();
    mtlLoader.load('./modeles/jin.mtl',function(materials){
        materials.preload();
        var objLoader=new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('./modeles/jin.obj',function(object){
            object.position.set(500,0,1200);
            object.scale.x=100;
            object.scale.y=100;
            object.scale.z=100;
            var object1=object.clone();
            object1.position.set(850,0,1200);
            group1.add(object1);
            group1.add(object);
        })
    })
     //添加油罐车
    var mtlLoader=new THREE.MTLLoader();
    mtlLoader.load('./modeles/youguanche.mtl',function(materials){
        materials.preload();
        var objLoader=new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('./modeles/youguanche.obj',function(object){
            object.position.set(-1500,0,1100);
            object.scale.x=1.5;
            object.scale.y=1.5;
            object.scale.z=0.5;
            object.rotateY(0.5*Math.PI)
            group1.add(object);
        })
    })
     //添加售气机
     var mtlLoader=new THREE.MTLLoader();
     mtlLoader.load('./modeles/qizhuang.mtl',function(materials){
         materials.preload();
         var objLoader=new THREE.OBJLoader();
         objLoader.setMaterials(materials);
         objLoader.load('./modeles/qizhuang.obj',function(object){
             object.position.set(-800,80,-950);
             object.scale.x=100;
             object.scale.y=100;
             object.scale.z=100;
             object.rotateY(Math.PI)
             var object1=object.clone();
             object1.position.set(250,80,-950);
             var object2=object.clone();
             object2.position.set(-300,80,-950);
             var object3=object.clone();
             object3.position.set(-1300,80,-950);
             group1.add(object2);
             group1.add(object3);
             group1.add(object1);
             group1.add(object);
         })
     })    
     var tipObjects = [];
     tipObjects.push(new THREE.Object3D())
     tipObjects.push(new THREE.Object3D())
     tipObjects.push(new THREE.Object3D())
     tipObjects.push(new THREE.Object3D())
     tipObjects.push(new THREE.Object3D())
     tipObjects.push(new THREE.Object3D())
     tipObjects.push(new THREE.Object3D())
     //添加页面
    var nodes=[]
    for(var i=0;i<7;i++){
        var element = document.createElement( 'div' );
        element.className = 'tag';
        element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
        var tag3= document.createElement( 'div' );
        tag3.className = 'tag3';    
        var tag4 = document.createElement( 'div' );
        tag4.className = 'tag4';
        var tag1 = document.createElement( 'div' );
        tag1.className = 'tag1';
        var tag2 = document.createElement( 'div' );
        tag2.className = 'tag2';
        if(i==0){
        tag3.textContent = "门禁状态：";
        element.appendChild(tag3 );
        tag4.textContent = "上次开门时间:";
        element.appendChild( tag4 );
        tag1.textContent = "上次开门人员：";
        element.appendChild(tag1 );
       }else if(i==1){
        tag3.textContent = "进气压力：40.64Mpa";
        element.appendChild( tag3 );
        tag4.textContent = "出气压力:65.23Mpa";
        element.appendChild( tag4 );
        tag1.textContent = "泄露警报1：中等";
        element.appendChild(tag1 );
        tag2.textContent = "气体浓度：6%";
        element.appendChild(tag2 );
       }else if(i==2){
        tag3.textContent = "高压井(Mpa):0.00";
        element.appendChild( tag3 );
        tag4.textContent = "中压井(Mpa):0.00";
        element.appendChild( tag4 );
        tag1.textContent = "有无泄露：无";
        element.appendChild(tag1 );
       }
       else{      
       tag3.textContent = "泄露警报: 中等";
        element.appendChild( tag3 );
        tag4.textContent = "气体浓度:0%";
        element.appendChild( tag4 );
       }
       Root.Root.appendChild(element)
       nodes.push(element);
    }
     //添加提示
     tipObjects[0].position.set(-1100,50,550)
     tipObjects[1].position.set(-1050,50,1550)
     tipObjects[2].position.set(850,50,1550)
     tipObjects[3].position.set(700,50,-1350)
     tipObjects[4].position.set(100,50,-1350)
     tipObjects[5].position.set(-500,50,-1350)
     tipObjects[6].position.set(-1000,50,-1350)
     tipObjects.forEach(function(d){
         group1.add(d)
     })

    //添加一个控制器
    var orbitControl = new THREE.OrbitControls(camera);
    function animate() {
        renderer.setSize(window.innerWidth, window.innerHeight);
       // group1.rotation.y+=0.002;
        updateNode()
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
    function updateNode(){
        var vector
        var x=0,y=0
        nodes.forEach(function(d,i){
            vector = tipObjects[i].getWorldPosition().project(camera)
            x=Math.round(vector.x * Root.W/2 + Root.W/2 -80)
            y=Math.round(-vector.y * Root.H/2 + Root.H/2 -40 )
            d.style.top=y+'px';
            d.style.left=x+'px';
        })
    }
}