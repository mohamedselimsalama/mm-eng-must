/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "clock",
			position: "top_left",
			config:{
			displayType:"analog",
			analogFace:"face-008",
		}
		},
		{
			module: "calendar",
			header: "Egypt Holidays",
			position: "top_left",
			config: {
				fetchInterval:10000, // in ms 
				calendars: [
					{
						symbol: "calendar-check",
						// https://www.calendarlabs.com/ical-calendar/ics/44/Egypt_Holidays.ics
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/44/Egypt_Holidays.ics"				
					},
					{
						symbol: "calendar-check",
						// Enter your private cal url 
						url: "https://calendar.google.com/calendar/ical/esraa.abdelhakiim%40gmail.com/private-ba7a1a6116b6d3abef41cd22baebaa0d/basic.ics"					
					}		
				]
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "cairo",
				locationID: "360630", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "54b85fab6af9dd58af1f45a1f31b54ef"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "cairo",
				locationID: "360630", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "54b85fab6af9dd58af1f45a1f31b54ef"
			}
		},

		{
			module: "MMM-Spotify",
			position: "top_left",
			config: {
			  debug: true,
			  showDeviceButton:false,
			  style: "mini", // "default", "mini" available.
			  control: "hidden", // "default" or "hidden"
			  moduleWidth: 300, // width of the module in px
			  miniBarConfig: {
				album: false, // display Album name in miniBar style
				scroll: false, // scroll title / artist / album in miniBar style
				logo: false, // display Spotify logo in miniBar style
			  }
			}
		  },
		  {
			module: "newsfeed",
			position: "top_left",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
