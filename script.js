"use strict";

//show summary function

const showSummary1 = () => {
    const text = document.getElementById("text1");
    const btn = document.getElementById("summary-btn");
    if(text.style.display === "none"){
        text.style.display = "block";
        btn.classList.add("active");
    }
    else{
        text.style.display = "none";
        btn.classList.remove("active")
    }
}

const showSummary2 = () => {
    const text = document.getElementById("text2");
    const btn = document.getElementById("summary-btn");
    if(text.style.display === "none"){
        text.style.display = "block";
        btn.classList.add("active");
    }
    else{
        text.style.display = "none";
        btn.classList.remove("active")
    }
}

const showSummary3 = () => {
    const text = document.getElementById("text3");
    const btn = document.getElementById("summary-btn");
    if(text.style.display === "none"){
        text.style.display = "block";
        btn.classList.add("active");
    }
    else{
        text.style.display = "none";
        btn.classList.remove("active")
    }
}

const showSummary4 = () => {
    const text = document.getElementById("text4");
    const btn = document.getElementById("summary-btn");
    if(text.style.display === "none"){
        text.style.display = "block";
        btn.classList.add("active");
    }
    else{
        text.style.display = "none";
        btn.classList.remove("active")
    }
}

const showSummary5 = () => {
    const text = document.getElementById("text5");
    const btn = document.getElementById("summary-btn");
    if(text.style.display === "none"){
        text.style.display = "block";
        btn.classList.add("active");
    }
    else{
        text.style.display = "none";
        btn.classList.remove("active")
    }
}

const showSummary6 = () => {
    const text = document.getElementById("text6");
    const btn = document.getElementById("summary-btn");
    if(text.style.display === "none"){
        text.style.display = "block";
        btn.classList.add("active");
    }
    else{
        text.style.display = "none";
        btn.classList.remove("active")
    }
}

// next video function

const video2 = () => {
    window.location.href = "Course2.html";
}

const video3 = () => {
    window.location.href = "Course3.html";
}

const video4 = () => {
    window.location.href = "Course4.html";
}

const video5 = () => {
    window.location.href = "Course5.html";
}

const video6 = () => {
    window.location.href = "Course6.html";
}

// finish course

function finish() {
    const body = document.body;
    body.style = "margin: 0; padding: 0;"
    body.innerHTML = `
        <div style="
            min-width: 100vw;
            font-size: 2.5rem;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            font-family: Poppins, sans-serif;
            text-align: center;
        ">
            <h1>🎉 Course Completed!</h1>
            <p style="max-width: 600px; font-size: 1.5rem;">
                You have successfully completed the Climate Change course.
                Thank you for learning with Sprout Labs.
            </p>

            <button
                id="back-btn"
                onclick="window.location.href='course.html'"
                style="
                    margin-top: 30px;
                    padding: 12px 24px;
                    font-size: 1.1rem;
                    border: none;
                    border-radius: 30px;
                    cursor: pointer;
                    background: white;
                    color: #667eea;
                ">
                Go Back to Courses
            </button>
        </div>
    `;
}
