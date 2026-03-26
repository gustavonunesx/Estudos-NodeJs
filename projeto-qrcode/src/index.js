import prompt from 'prompt'
import mainPrompt from './prompts/prompt-main.js'

async function main() {
    prompt.get(mainPrompt, async(err, choice) => {
        if(choice.select == 1) console.log("escolheu QRCODE");
        if(choice.select == 2) console.log("escolheu PASSWORD");
    });     

    prompt.start();
}


main();