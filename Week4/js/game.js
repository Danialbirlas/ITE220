(function(){
	var game = {
		randonNumber: 11, // we'll random this number later
		init: function(){
			this.bindEvent();
		},
		bindEvent: function(){
			//get all element and event to it
			var button1 = document.getElementById("one");
			var self = this;
			button1.addEventListener("click", this.clickNumberButton);
			document.getElementById("two").addEventListener("click", this.clickNumberButton);
			document.getElementById("three").addEventListener("click", this.clickNumberButton);
			document.getElementById("four").addEventListener("click", this.clickNumberButton);
			document.getElementById("five").addEventListener("click", this.clickNumberButton);
			document.getElementById("six").addEventListener("click", this.clickNumberButton);
			document.getElementById("seven").addEventListener("click", this.clickNumberButton);
			document.getElementById("eight").addEventListener("click", this.clickNumberButton);
			document.getElementById("nine").addEventListener("click", this.clickNumberButton);
			document.getElementById("zero").addEventListener("click", this.clickNumberButton);

			var guessBtn = document.getElementById("guess");
			guessBtn.addEventListener("click", function(){
			self.guess(self);
			});
		},
		clickNumberButton: function(e){
			//alert("button one is clicked");
			var userNumber = document.getElementById("userNumber");
			userNumber.value += e.target.textContent;
		},
		guess: function(self){
			//alert(self.randomNumber);
			var userNumber = document.getElementById("userNumber");
			if(userNumber.value == self.randonNumber){
				alert("yes");
			}else{
				alert("no");
			};
		},
	};
	game.init();
})();