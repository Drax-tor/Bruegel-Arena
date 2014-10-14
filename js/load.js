var loadState = {

	preload: function () {	
        
        var splash = game.add.image(0, 0, 'splashScreen');
        
		// Add a loading label 
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		// Add a progress bar
		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		game.load.setPreloadSprite(progressBar);

		// Load all assets
		game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);		
        game.load.image('sfondo', 'assets/sfondo.jpg');
        game.load.image('dame', 'assets/dame.png');
        game.load.spritesheet('joker', 'assets/joker.png', 75, 137, 4);

	},

	create: function() { 
		game.state.start('menu');
	}
};