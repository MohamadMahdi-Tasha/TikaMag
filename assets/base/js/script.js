// Variables
const inputsInDiv = document.querySelectorAll('.dv-inputs-in-div');
const answerToCommentBtns = document.querySelectorAll('.dv-answer-to-comment-btn');

// Adding event Listener On Each Input In Div That  Listens To Focus And Adds Class Of  'dv-focused' To It And Removes It While Blured.
inputsInDiv.forEach(input => {
    input.addEventListener('focus', () => input.parentElement.parentElement.classList.add('dv-focused'))
    input.addEventListener('blur', () => input.parentElement.parentElement.classList.remove('dv-focused'))
})

// Adding Event Listener On Each Answer To Comment Button That Listens To Click And Shows Its Reply Element And Closes It.
answerToCommentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const replyElement = btn.parentElement.parentElement.lastElementChild;
        const isReplyElementShowing = replyElement.getAttribute('data-opened');
        const replyInput = replyElement.lastElementChild.firstElementChild;

        isReplyElementShowing === 'true' ? replyElement.setAttribute('data-opened', 'false') : replyElement.setAttribute('data-opened', 'true')
        replyInput.focus()
    })
})