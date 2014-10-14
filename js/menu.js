var menuState = {

	create: function() { 
        
        var splash = game.add.image(0, 0, 'splashScreen');

		// How to start the game
		var startLabel = game.add.text(game.world.centerX, game.world.height-80, 'press SPACEBAR key to start', { font: '25px Arial', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);	
		game.add.tween(startLabel).to({angle: -2}, 500).to({angle:2}, 500).loop().start(); 

		// Add a mute button
		this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);
		this.muteButton.input.useHandCursor = true;
		if (game.sound.mute) {
			this.muteButton.frame = 1;
		}

		// Start the game when the up arrow key is pressed
		var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.addOnce(this.start, this);
	},

	toggleSound: function() {
		game.sound.mute = ! game.sound.mute;
		this.muteButton.frame = game.sound.mute ? 1 : 0;	
	},

	start: function() {
		game.state.start('play');	
	}
};