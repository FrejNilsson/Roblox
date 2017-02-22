msg = new Array();
msg[0] = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
msg[1] = "<h1>JEPPY</h1>";
msg[2] = "<h2>x0pht owner</h2>";
msg[3] =
    "<h2><a href='http://steamcommunity.com/id/lipgloss/'>My Steam Account</a></h3>";
msg[4] = "<br>";
msg[5] = "<h3>XOPHT WILL HIT THE ROBLOX MARKET IN 2017</h3>";
msg[6] = "<br><br>";
msg[7] = "<h3>For business inquiries contact me.</h3>";

text1 = "";
text2 = "";
count = 0;
count2 = 0;

text = msg[0].split("");

/*Function of Doom*/
function writetext() {
    text1 = text1 + text[count];
    text2 += text[count];
    document.all["nothing"].innerHTML = text1;

    if (count < text.length - 1) {
        count++;
        setTimeout('writetext()', 15);
    } else {
        count = 0;
        if (count2 != 10) {
            count2++;
            text = eval('msg[' + count2 + '].split("")');
            setTimeout('writetext()', 25);
        }
    }
}
