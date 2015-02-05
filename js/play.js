var dame1;
var dame2;
var dame3;
var dame4;
var timeDame = 2;

var bulletsPool;

var playState = {
   
	create: function() {

        var sfondo = game.add.image(0, 0, 'sfondo');  
        
        //  Set the world (global) gravity
        game.physics.arcade.gravity.y = 100;
        
        //Inserisco il joker
        this.setJoker();
        //Setto la velocità di movimento iniziale
        speed = 150;
        
        //Inserisco gli input del gioco
        this.setInput();
        
        //Creo il pool di proiettili
        bulletsPool = game.add.group();
        //bulletsPool.createMultiple(10, 'bullet');
        bulletsPool.enableBody = true;
        bulletsPool.physicsBodyType = Phaser.Physics.ARCADE;
        
        //game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.createDame(1), this);
        game.time.events.loop(Phaser.Timer.SECOND * 0.5, this.createDame, this);
        

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
        joker.body.allowGravity = false;
        joker.body.bounce.x = 0.2;
        joker.body.collideWorldBounds = true;
    },
    
    setInput: function(){
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
    
    createBullet: function(numSprite, posX, posY){
        var currentBullet = bulletsPool.create(posX, posY, 'bullet');
        currentBullet.lifespan = 2000; // kill after 2000ms
        currentBullet.frame = numSprite;
        currentBullet.scale.x = 0.5;
        currentBullet.scale.y = 0.5;
        //currentBullet.body.velocity.y = speed;
    },
    
    createDame: function(){
        num = game.rnd.integerInRange(1, 4);
        switch(num){
            case 1:
                if(dame1!=null){
                    if(dame1.exists){
                        dame1.kill();
                    }else{
                        dame1 = game.add.sprite(194, 261, 'dame');
                        dame1.anchor.setTo(0.5, 1);
                        this.createBullet(0, 194, 261 - 35);
                    }                 
                } else{
                    dame1 = game.add.sprite(194, 261, 'dame');
                    dame1.anchor.setTo(0.5, 1);
                    this.createBullet(0, 194, 261 - 35);
                }                
                break;
            case 2:
                if(dame2!=null){
                    if(dame2.exists){
                        dame2.kill();
                    }else{
                        dame2 = game.add.sprite(291, 261, 'dame'); 
                        dame2.anchor.setTo(0.5, 1);
                        this.createBullet(0, 291, 261 - 35);
                    }                 
                } else{
                    dame2 = game.add.sprite(291, 261, 'dame'); 
                    dame2.anchor.setTo(0.5, 1);
                    this.createBullet(0, 291, 261 - 35);
                }    
                
                break;
            case 3:
                if(dame3!=null){
                    if(dame3.exists){
                        dame3.kill();
                    }else{
                        dame3 = game.add.sprite(475, 261, 'dame');
                        dame3.anchor.setTo(0.5, 1);
                        dame3.scale.x = -1;
                        this.createBullet(0, 435, 261 - 35);
                    }                 
                } else{
                    dame3 = game.add.sprite(475, 261, 'dame');
                    dame3.anchor.setTo(0.5, 1);
                    dame3.scale.x = -1;
                    this.createBullet(0, 435, 261 - 35);
                }    
                break;
            case 4:
                if(dame4!=null){
                    if(dame4.exists){
                        dame4.kill();
                    }else{
                       dame4 = game.add.sprite(574, 261, 'dame');
                        dame4.anchor.setTo(0.5, 1);
                        dame4.scale.x = -1;
                        this.createBullet(0, 534, 261 - 35);
                    }                 
                } else{
                    dame4 = game.add.sprite(574, 261, 'dame');
                    dame4.anchor.setTo(0.5, 1);
                    dame4.scale.x = -1;
                    this.createBullet(0, 534, 261 - 35);
                }    
                break;
            case 5:
                dame1 = game.add.sprite(194, 261, 'dame')
                dame1.anchor.setTo(0.5, 1); 
                
                dame2 = game.add.sprite(291, 261, 'dame')
                dame2.anchor.setTo(0.5, 1);
                
                dame3 = game.add.sprite(475, 261, 'dame')
                dame3.anchor.setTo(0.5, 1);
                dame3.scale.x = -1;
                
                dame4 = game.add.sprite(574, 261, 'dame')
                dame4.anchor.setTo(0.5, 1);
                dame4.scale.x = -1;
                break;
        }
    },

};

