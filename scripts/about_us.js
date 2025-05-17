const text = `vPhone is a forward-thinking smartphone company committed to redefining the mobile experience. Founded on innovation, simplicity, and elegance, we craft devices that blend cutting-edge technology with user-first design. Every product we create reflects our dedication to performance, reliability, and bold aesthetics — all without compromise.
Our flagship series, STRAUSS, represents the core of our vision: smart devices that are fast, intuitive, and built for the future.`;

const target = document.getElementById('about-text');
let index = 0;

function typeEffect() {
    if (index < text.length) {
        target.innerHTML += text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
        index++;
        setTimeout(typeEffect, 40); // speed of typing
    }
}

typeEffect(); 