import { showHome } from "./home.js";
import { createElements } from "./untils.js";

const homeAnchorElement = document.querySelector("a");
homeAnchorElement.addEventListener("click", showHome);


function fetchPost() {
    const postId = localStorage.getItem("postId");
    loadPost(postId);
}

fetchPost();

async function loadPost(postId) {
    try {
        const res = await fetch(
            `http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`
        );

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message);
        }
        const post = await res.json();
        const themeContentDivElement = document.querySelector(".theme-content");
        themeContentDivElement.replaceChildren();






        const themeTitleDivElement = createElements("div", "", themeContentDivElement, {
            class: "theme-title",
        })
        const themeNameWrapperDivElement = createElements("div", "", themeTitleDivElement, {
            class: "theme-name-wrapper",
        })
        const themeNameDivElement = createElements("div", "", themeNameWrapperDivElement, {
            class: "theme-name",
        })
        createElements("h2", post.title, themeNameDivElement, {})

        const commentDivElement = createElements("div", "", themeContentDivElement, {
            class: "comment",
        })
        const headerDivElement = createElements("div", "", commentDivElement, {
            class: "header",
        })
        createElements("img", "", headerDivElement, {
            src: "./static/profile.png",
            alt: "avatar",
        });
        const paragraphElement = createElements("p", "", headerDivElement, {});
        paragraphElement.innerHTML = `<span>${post.username}</span> posted on <time>${post.createdDate}</time>`;
        createElements("p", post.content, headerDivElement, {
            class: "post-content",
        });





        const comments = await loadComments(postId);

        for (const comment of Object.values(comments)) {
            const userCommentDivElement = createElements("div", "", commentDivElement, {
                class: "user-comment"
            });
            const topicNameWrapper = createElements('div', '', userCommentDivElement, {
                class: "topic-name-wrapper"
            });
            const topicNameDivElement = createElements('div', '', topicNameWrapper, {
                class: "topic-name"
            });
            const paragraphElement = createElements('p', '', topicNameDivElement, {})
            paragraphElement.innerHTML = `<strong>${comment.username}</strong> commented on <time>${comment.createDate}</time>`
            const postContentDivElement = createElements('div', '', topicNameDivElement, {
                class: 'post-content'
            });

            createElements('p', comment.content, postContentDivElement, {})
        }






        const answerCommentDivElement = createElements('div', '', themeContentDivElement, {
            class: 'answer-comment'
        });
        const answerParagraphElement = createElements('p', '', answerCommentDivElement, {})
        answerParagraphElement.innerHTML = `<span>CurrentUser</span> comment:`
        const divElementAnswer = createElements('div', '', answerCommentDivElement, {
            class: 'answer',
        });
        const formAnswerElement = createElements('form', '', divElementAnswer, {});
        //  createElements('textArea', formAnswerElement, {
        //      name: 'postText',
        //      id: 'comment',
        //      col: '30',
        //      row: '10'
        //  });

        formAnswerElement.innerHTML = `<textArea name="postText" id="comment" cols="30" rows="10"></textArea>`

        const formDivElement = createElements("div", "", formAnswerElement, {})
        const labelElement = createElements("label", "", formDivElement, {
            for: "username"
        });
        labelElement.innerHTML = `Username <span class='red'>*</span>`
        createElements("input", "", formDivElement, {
            type: "text",
            name: "username",
            id: "username",
        });
        createElements("button", "Post", formAnswerElement, {
            id: 'postButton'
        });
        let formElement = document.querySelector("form");
        formElement.setAttribute("dataset.id", postId);



        


        const postButtonElement = document.getElementById("postButton");  // it was:  getElementById('button')
        console.log(postButtonElement);

        postButtonElement.addEventListener("click", async (event,) => {
            event.preventDefault();
            let postId = formElement.getAttribute("dataset.id");

            let content = document.querySelector('textarea').value.trim();
            let username = document.querySelector('input').value.trim();
            //let username = formData.get("username").trim();
            // let content = formData.get("postText").trim();          
            console.log(username, content);
            let createDate = new Date();
            try {
                if (!username) {
                    throw new Error('Username is required!');
                } else if (!content) {
                    throw new Error('Content is required!')
                }
                const res = await fetch('http://localhost:3030/jsonstore/collections/myborad/comments',
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username, content, createDate, postId })
                    })
                if (!res.ok) {
                    throw new Error('ERROR');
                }
                fetchPost()
                formDivElement.reset();
            } catch (err) {
                alert(err.message)
            }
        });

    } catch (error) {
        alert(error.message)
    }
}






async function loadComments(postId) {
    try {
        const res = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message);
        }
        const comments = await res.json();
        return Object.values(comments).filter(comment => comment.postId === postId);
    } catch (error) {
        alert(error.message);
    }
}

//const postButtonElement = document.querySelector('button');
// after I add  ...id: 'postButton'.... on line 121 I alter querySelector to getElementById
