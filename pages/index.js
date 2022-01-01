import {useRef} from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch();
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
        <label htmlFor="email">Your email address</label>
        <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
        <label htmlFor="feedback">Your feedback</label>
        <textarea type="feedback" rows="5" ref={feedbackInputRef} />
        </div>
        <button>Send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
