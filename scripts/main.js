
// grabbing the container where everything will go
const app = document.querySelector("#app");

// defining delay function for holding the process
const delay = ms => new Promise(res => setTimeout(res, ms));
   
// getting input value by 'enter' key press and so on    
app.addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        getInputValue();
        removeInput();
        new_line();
    }
});

// if cursor lose focus from input field a mouse click will
// help to refocus on the input field
app.addEventListener("click", function(event) {
    const input = document.querySelector("input");
    input.focus();
})

// starting point
async function open_terminal() {
    createText("<span style='color: #02B8FA; font-size:20px;'>" + "May peace be upon you" + "</span>");
    await delay(500);
    createText("Starting the server...");
    await delay(1000);
    createText("You can run several commands:");

    createCode("about", "Who am i and what do i do.");
    createCode("ls", "See all commands.");
    createCode("clear", "Clean the terminal.");
    createCode("exit", "exit from the page");

    await delay(500);
    new_line();
}

// printing new line '''# [user] @ [~/eniac00]'''
function new_line() {
    const p = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    p.setAttribute("class", "path")
    p.textContent = "# [user]";
    span1.textContent = " @ ";
    span2.textContent = "[~/eniac00]";
    p.appendChild(span1);
    p.appendChild(span2);
    app.appendChild(p);
    const div = document.createElement("div");
    div.setAttribute("class", "type")
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-angle-right icone")
    const input = document.createElement("input");
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();
}

// removing last input after pressing enter
function removeInput() {
    const div = document.querySelector(".type");
    app.removeChild(div);
}

// get the typed value and processing
async function getInputValue(){
    const value = document.querySelector("input").value.trim().toLowerCase();

    if(value === "ls") {

        trueValue(value);

        createCode("about", "Who am i and what do i do.");
        createCode("projects", "My github page with my projects. Follow me there ;)");
        createCode("social", "All my social networks.");
        createCode("clear", "Clean the terminal.");
        createCode("exit", "exit from the page");

    } else if(value === "projects") {

        trueValue(value);

        createText("<a href='https://abrar2akib.github.io/barood_du' target='_blank'><i class='fa fa-globe'></i> A knowledge sharing platform for DU</a>")
        createText("<a href='https://preprereg.herokuapp.com' target='_blank'><i class='fa fa-globe'></i> Pre-registration utility for BracU</a>")
        createText("<a href='https://github.com/altair00/XL-PPTX' target='_blank'><i class='fab fa-github white'></i> Bulk find and replace in ms-powerpoint using ms-excel </a>")
        createText("<a href='https://eniac00.github.io/btv' target='_blank'><i class='fa fa-globe'></i> Binary tree visualizer from an array</a>")
        createText("<a href='https://github.com/altair00/encryptor' target='_blank'><i class='fab fa-github white'></i> Pigpen cipher's python tkinter version</a>")

    } else if(value === "about") {

        trueValue(value);

        createText("A stranger just passing through this world.");
        createText("Who is eager to learn more about new technologies and deeply interested in computer system and security. A GNU/Linux enthusiast and open source admirer. Moreover, a guy who is greatly influenced by minimalist philosophy. Loves the 'C' programming language and knows `Morse Code` by heart.");
        createText("<span style='font-size: 14px;'>- -.-- .--. . / .-- .. ... -.. --- --</span>")

  } else if(value === "social") {

        trueValue(value);

        createText("<a href='https://github.com/eniac00' target='_blank'><i class='fab fa-github white'></i> github.com/eniac00</a>")
        createText("<a href='https://www.linkedin.com/in/abir-ahammed-bhuiyan' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/abir-ahammed-bhuiyan</a>")
        createText("<a href='https://www.facebook.com/alexsmithir/' target='_blank'><i class='fab fa-facebook white'></i> facebook.com/abir-ahammed-bhuiyan</a>")
        createText("<a href='https://www.youtube.com/channel/UCXft-2Onob7yMH0R5cfae1g' target='_blank'><i class='fab fa-youtube white'></i> youtube/zukhruf</a>")

  } else if(value === "clear") {

        document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
        document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));

  } else if(value === "wisdom") {

        createText("Success definition from The Almighty Allah himself");
        createText("&quotEvery soul has to taste death. It is on the Day of Judgement that you shall be paid your rewards in full. So, whoever has been kept away from the Fire and admitted to Paradise has really succeeded. The worldly life is nothing but an illusionary enjoyment.&quot - Quran 3:185");

  } else if(value === "exit") {

        createText("C ya");
        await delay(2000);
        window.history.back();
        window.close();

  } else {

        falseValue(value);
        createText(`command not found: ${value}`)

  }
}

// if the input value matches with the given commands then this will execute
function trueValue(value) {
        const div = document.createElement("section");
        div.setAttribute("class", "type2")
        const i = document.createElement("i");
        i.setAttribute("class", "fas fa-angle-right icone")
        const mensagem = document.createElement("h2");
        mensagem.setAttribute("class", "sucess")
        mensagem.textContent = `${value}`;
        div.appendChild(i);
        div.appendChild(mensagem);
        app.appendChild(div);
}

// if the input value does not matches with the given commands then this will execute
function falseValue(value) {
        const div = document.createElement("section");
        div.setAttribute("class", "type2")
        const i = document.createElement("i");
        i.setAttribute("class", "fas fa-angle-right icone error")
        const mensagem = document.createElement("h2");
        mensagem.setAttribute("class", "error")
        mensagem.textContent = `${value}`;
        div.appendChild(i);
        div.appendChild(mensagem);
        app.appendChild(div);
}

// creates text inside a paragraph tag
function createText(text) {
        const p = document.createElement("p");
        p.innerHTML = text;
        app.appendChild(p);
}

// creates code value in the initial stage
function createCode(code, text) {
        const p = document.createElement("p");
        p.setAttribute("class", "code");
        p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
        app.appendChild(p);
}

open_terminal();


