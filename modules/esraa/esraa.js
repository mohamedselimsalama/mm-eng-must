Module.register("esraa",{
    notificationReceived: function(notification, payload, sender) {
		console.log("Payload Sent from the voice command is"+payload);
		switch (notification) {
            case "ESRAA_PLAY":
                this.sendSocketNotification("PLAY", payload)
                break
            case "ESRAA_PAUSE":
                this.sendSocketNotification("PAUSE")
                break
            case "ESRAA_NEXT":
                this.sendSocketNotification("NEXT")
                break
            case "ESRAA_PREVIOUS":
                this.sendSocketNotification("PREVIOUS")
                break
            case "ESRAA_VOLUME":
                this.sendSocketNotification("VOLUME", payload)
                break
			case "ESRAA_VOL_UP":
				this.sendNotification("SPOTIFY_VOLUME_UP")
				break;
            default:
                break;
        }
		}
});
