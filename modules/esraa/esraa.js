Module.register("esraa", {
	getScripts: function () {
		return [
			"moment.js" // this file is available in the vendor folder, so it doesn't need to be available in the module folder.
		];
	},
	notificationReceived: function (notification, payload, sender) {
		// console.log(notification);
		switch (notification) {
			case "ESRAA_PLAY":
				this.playMusic(payload);
				break;
			case "CALENDAR_EVENTS":
				this.notifyEvent(payload);
			default:
				break;
		}
	},

	notifyEvent: function (events) {
		events.forEach((e) => {
			let event_name = e.title;
			let polly_will_say = "You now have " + event_name;
			let start = new Date(parseInt(e.startDate)).toString();
			if (moment().format("Y-MM-DD hh:mm") == moment(start).format("Y-MM-DD hh:mm")) {
				console.log("Happining now");
				this.sendNotification("SPEECH_DISPATCHER_SAY", polly_will_say);
			}
		});
	},

	playMusic: function (data) {
		this.sendNotification("SPEECH_DISPATCHER_SAY", "Okay, Now playing " + data);
		this.sendNotification("SPOTIFY_TRANSFER", "Bedroom Speaker");
		this.sendNotification("SPOTIFY_SEARCH", { type: "artist,playlist", query: data.toLowerCase().replace(" ", "+"), random: false });
	}
});

/*
			if (this.config.notifi)
				setInterval(function () {
					self.broadcastEvents();
				}, self.config.notifyInterval);
*/
