var playState = {

	create: function() {
       //test();
         var sfondo = game.add.image(0, 0, 'sfondo');
        sfondo.scale.x=0.4;
        sfondo.scale.y=0.4;
        
        
        
        man = game.add.sprite(game.world.centerX, 400, 'man');
        man.scale.x=0.5;
        man.scale.y=0.5;
        man.anchor.x = 0.5;
        man.anchor.y = 0;
        
        //	Enable p2 physics
	    game.physics.startSystem(Phaser.Physics.P2JS);
        //  Make things a bit more bouncey
        game.physics.p2.defaultRestitution = 0.8;
        //  Enable if for physics. This creates a default rectangular body.
	    game.physics.p2.enable(man);
        //  Modify a few body properties
        man.body.setZeroDamping();
        man.body.fixedRotation = true;

        
        cursors = game.input.keyboard.createCursorKeys();
        aButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
        dButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
        wButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
        sButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
        
        area = new Phaser.Polygon(130,350 , 0,432 , 768,432 , 638,350);

	},

	update: function() {
        man.body.setZeroVelocity();
        
         if (aButton.isDown)
         {
             if(area.contains(man.x, man.y)){
                man.body.moveLeft(100);
                man.scale.x = -0.5;    
             }else{
                 man.body.moveRight(5);
             }
         }
         if (dButton.isDown)
         {
             if(area.contains(man.x, man.y)){
                man.body.moveRight(100);
                man.scale.x = 0.5;    
             }else{
                 man.body.moveLeft(5);
             }
         }
         if (wButton.isDown)
         {
             if(area.contains(man.x, man.y)){
                man.body.moveUp(100);    
             }else{
                 man.body.moveDown(5);
             }
         }
         if (sButton.isDown)
         {
            if(area.contains(man.x, man.y)){
                man.body.moveDown(100);    
             }else{
                 man.body.moveUp(5);
             }
         }
        
        //alert('culo');
        
        

	},

};