var playState = {

	create: function() {
       //test();
         var sfondo = game.add.image(0, 0, 'sfondo');
        sfondo.scale.x=0.4;
        sfondo.scale.y=0.4;
        
        
        
        joker = game.add.sprite(game.world.centerX, 420, 'joker');
        joker.anchor.x = 0.5;
        joker.anchor.y = 1;
        
        //	Enable Arcade physics
	    game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.enable(joker, Phaser.Physics.ARCADE);
        joker.body.bounce.y = 0.2;
        joker.body.collideWorldBounds = true;
        

        
        cursors = game.input.keyboard.createCursorKeys();
        aButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
        dButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
        wButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
        sButton = game.input.keyboard.addKey(Phaser.Keyboard.S);

	},

	update: function() {
        
        joker.body.velocity.x = 0;
        
         if (aButton.isDown)
         {
            joker.body.velocity.x = -150;
         }
         if (dButton.isDown)
         {
            joker.body.velocity.x = 150;
         }
         
        
        
        

	},

};