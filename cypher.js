let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newalpha = "";

const shift = (n) => {
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset];
	}
}

const encode = (message) => {
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }
    return result;
}

const decode = (message) => {
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = newalpha.indexOf(message[i]);
        result += alphabet[index];
    }
    return result;
}