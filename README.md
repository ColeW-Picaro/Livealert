# Livealert  
A utility to turn usb ports on and off upon recieving a twitch sub/bits/dono.  
NOTE: Only works on Raspberry Pi 4

0. Install `node.js` and `npm`. (Raspbian for Raspberry Pi 4 comes with these).

1. Open a terminal and clone this repository (`git clone https://github.com/ColeW-Picaro/Livealert.git`). 

2. cd into it (`cd Livealert`) and run `npm install`.

3. Modify the `{STREAMLABS_API}` in `main.js` with your own Streamlabs API token (found in dashboard settings). Make sure you get rid of the curly braces `{}` too.

4. Save the changes in `main.js`. Run `sudo nohup node main.js &` and enjoy.
