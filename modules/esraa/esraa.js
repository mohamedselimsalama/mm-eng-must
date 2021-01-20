Module.register("esraa",{
    notificationReceived: function(notification, payload, sender) {
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
            default:
                break;
        }
		}
});