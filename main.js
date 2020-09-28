const io = require('socket.io-client');
const { connect } = require('socket.io-client');
const execSync = require('child_process').execSync;

//const streamlabs = io(`https://sockets.streamlabs.com?token=${process.env.STREAMLABS_SOCKET_API}`, {transports: ['websocket']});
const streamlabs = io(`https://sockets.streamlabs.com?token={STREAMLABS_API}`, {transports: ['websocket']});
streamlabs.on('connect', () => {
  console.log('connected to server');
});

streamlabs.on('event', async (eventData) => {
	if (eventData.type == 'subscription' || eventData.type == 'bits' || eventData.type == 'donation') {
		for (var i = 0; i < 3; ++i) {
    			console.log(eventData);
			output = execSync('sudo ./uhubctl -l 2 -a 0', { encoding: 'utf-8'});
			console.log(output);
			await new Promise(resolve => setTimeout(resolve, 1000));
			output = execSync('sudo ./uhubctl -l 2 -a on', { encoding: 'utf-8'});
			console.log(output);
		}
  	}
});
