angular.module('config', []).value('config', {
	'debug': true,
	'limit': 10,
	'peerIdLength': 6,
	'fileIdLength': 4,
	'chunkSize': 15000,
	'chunksPerBlock': 64,
    'emailServer':"http://localhost:8080",
	'peerConfig': {
        host: '127.0.0.1',
		path: '/signaling',
		port: 9100,
		key: 'mfiles',
		config: {
			iceServers: [
				{url:"stun:23.21.150.121"},
				{url:"stun:stun.l.google.com:19302"},
				{url:"stun:stun1.l.google.com:19302"},
				{url:"stun:provserver.televolution.net"},
				{url:"stun:sip1.lakedestiny.cordiaip.com"},
				{url:"stun:stun1.voiceeclipse.net"},
				{url:"stun:stun01.sipphone.com"},
				{url:"stun:stun.callwithus.com"},
				{url:"stun:stun.counterpath.net"},
				{url:"stun:stun.endigovoip.com"},
				{url:"stun:stun.ekiga.net"},
				{url:"stun:stun.ideasip.com"},
				{url:"stun:stun.internetcalls.com"},
				{url:"stun:stun.ipns.com"},
				{url:"stun:stun.noc.ams-ix.net"},
				{url:"stun:stun.phonepower.com"},
				{url:"stun:stun.phoneserve.com"},
				{url:"stun:stun.rnktel.com"},
				{url:"stun:stun.softjoys.com"},
				{url:"stun:stunserver.org"},
				{url:"stun:stun.sipgate.net"},
				{url:"stun:stun.sipgate.net:10000"},
				{url:"stun:stun.stunprotocol.org"},
				{url:"stun:stun.voip.aebc.com"},
				{url:"stun:stun.voipbuster.com"},
				{url:"stun:stun.voxalot.com"},
				{url:"stun:stun.voxgratia.org"},
				{url:"stun:stun.xten.com"},
				{url:"stun:numb.viagenie.ca"},
				{url:"stun:stun.ipshka.com"}
				//...
			]
		}
	}
});
