var playState = {
   
	create: function() {

        var sfondo = game.add.image(0, 0, 'sfondo');  
        
        //Inserisco il joker
        this.setJoker();
        //Setto la velocità di movimento iniziale
        speed = 150;
        
        //Inserisco gli input del gioco
        this.setImput();
        

	},

	update: function() { 
         joker.body.velocity.x = 0;
        
         if (aButton.isDown)
         {
            this.goLeft(speed);
         }
         if (dButton.isDown)
         {           
            this.goRight(speed);
         }
        

	},
    
    setJoker: function(){
        joker = game.add.sprite(game.world.centerX, 420, 'joker');
        joker.anchor.x = 0.5;
        joker.anchor.y = 1;
        joker.animations.add('walk');
        joker.animations.play('walk', 6, true);
        game.physics.enable(joker, Phaser.Physics.ARCADE);
        joker.body.bounce.x = 0.2;
        joker.body.collideWorldBounds = true;
    },
    
    setImput: function(){
        cursors = game.input.keyboard.createCursorKeys();
        aButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
        dButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
    },
    
    goLeft: function(speed){
       joker.body.velocity.x = -speed;
    },
    
    goRight: function(speed){
       joker.body.velocity.x = speed;
    },

};

function spawnDame(a){
    game.add.sprite(100, 200, 'dame');
};