# Livealert  
A utility to turn usb ports on and off upon recieving a twitch sub/bits/dono.  
NOTE: Only works on Raspberry Pi 4

0. Install `node.js` and `npm`. (Raspbian for Raspberry Pi 4 comes with these).

1. Open a terminal and clone this repository (`git clone https://github.com/ColeW-Picaro/Livealert.git`). This will create a directory called `Livealert`.

2. cd into it (`cd Livealert`) and run `npm install`.

3. Modify the `{STREAMLABS_API}` in `main.js` with your own Streamlabs API token (found in dashboard settings). Make sure you get rid of the curly braces `{}` too.

4. Save the changes in `main.js`. Run `sudo nohup node main.js &` and enjoy.

## Buy us some beer!
Credits to mvp for their `uhubctl` tool: https://github.com/mvp/uhubctl  
This program is used on GrauGott's twitch stream: https://www.twitch.tv/graugott  
Buy me a beer/coffee/beverage if you like it: https://ko-fi.com/colewsos  
My Twitch: https://www.twitch.tv/colew_picaro

## Contributing  
Open a PR!
