window.$config = {
	"env" : "dev",
	"dev" : {
	    "apiUrlBase" : "api.xxxxx.xxx",
	    "tokenUri" : "/getToken",
	    "loginUri" : "/login",
	    "apiSource" : "knack",
	    "apiKey" : "54cb8c72cc96a7d321e49c0d",
	    "apiSecret" : "2ed65fd0-a887-11e4-bbdf-4f6599f39b4c"
	},
	"qa" : {
	    "apiUrlBase" : "api.xxxxx.xxx",
	    "tokenUri" : "/getToken",
	    "loginUri" : "/login",
	    "apiSource" : "knack",	
	    "apiKey" : "54b1997f5ee2ac8926aa6d0f",
	    "apiSecret" : "4fc85e60-99d6-11e4-8aec-91be5c9802f4"    
	},
	"prod" : {
	    "apiUrlBase" : "api.xxxxx.xxx",
	    "tokenUri" : "/getToken",
	    "loginUri" : "/login",
	    "apiSource" : "knack",
	    "apiKey" : "54b1997f5ee2ac8926aa6d0f",
	    "apiSecret" : "4fc85e60-99d6-11e4-8aec-91be5c9802f4"	    
	}
}

console.log($config);