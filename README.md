# Naruto Quiz Game

**Naruto Quiz Game** is centered around the Naruto Animation written and produced by Masashi Kishimoto. This website was developed for educational purposes as part of the Code Institute Diploma in Full-Stack Software Development. The project is designed for anyone looking to test their knowledge about Naruto's adventurous journey to become Hokage.

[live Preview of Naruto Quiz Game](https://sanitab17.github.io/Naruto-Quiz-Game/)

![Responsive Displays](docs/responsive-mockup.JPG)

## Table of Contents

- [Naruto Quiz Game](#naruto-quiz-game)
  - [Table of Contents](#table-of-contents)
- [UI](#ui)
  - [User](#user)
  - [User Goals](#user-goals)
  - [User Stories](#user-stories)
    - [Site owners Goals](#site-owners-goals)
    - [Requirements](#requirements)
    - [Expectations](#expectations)
  - [Design Choices](#design-choices)
    - [Fonts](#fonts)
    - [Icons](#icons)
    - [Colors](#colors)
    - [Structure](#structure)
- [Wireframes](#wireframes)
  - [Pages and Features](#pages-and-features)
    - [Features to be Implemented](#features-to-be-implemented)
- [Technology used](#technology-used)
- [Testing and Validation](#testing-and-validation)
  - [Functional Testing](#functional-testing)
  - [User Story Testing](#user-story-testing)
  - [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)

# UI

## User

## User Goals

- Visually appealing.
- Test their knowledge.
- Entertain.

## User Stories

- As a user, I want to be able to play quiz using multiple devices.
- As a user, I want to be entertained.
- As a user, I want to test my knowledge.
- As a user, I want to be able to see my quiz score and review the correct answers after completing the quiz.

### Site owners Goals

- Entertain Users:
  - Provide users with a positive and engaging experience through entertaining quiz content.
- Test Their Knowledge:
  - Design quiz that effectively assess and challenge users' knowledge.
- Provide Clear Instructions:
  - Clearly instruct participants on how to play quiz.
- Randomize Question Order:
  - Randomize the order of questions to prevent users from memorizing the sequence and to add an element of surprise.

### Requirements

- Easy to navigate on various screen sizes and search engines.
- Visually appealing and user-friendly design.
- Quiz game should respond to user interactions quickly.

### Expectations

- I expect all buttons to work.
- I expect to easily control the audio.
- I expect all questions and answers to be displayed correctly with indicating colors for the selected option.
- I expect to see the quiz score.
- I expect the screen size not to affect the quality of the website.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Design Choices

### Fonts

For user-friendly and aesthetically pleasing website design, I have seamlessly integrated [Google Fonts](https://fonts.google.com/), [Noto Serif](https://fonts.google.com/noto/specimen/Noto+Serif).

### Icons

 For the favicon, I used open soure image from [Pixabay](https://pixabay.com/) and then converted it using [favicon.io](https://favicon.io/favicon-converter/).

### Colors

Colors were carefully selected from the main image to achieve a harmonious and user-friendly design using [Image Color Picker](https://imagecolorpicker.com/).

Use of various colors will explain below.

![Colour Scheme](docs/quiz-colors.JPG)

- #23272e: This color will be used for the text color.
- #ffab63, #ff7c14: These colors will be used to create a linear gradient for the body background, harmoniously matching with the image.
- rgba(50, 50, 93, 0.25), rgba(0, 0, 0, 0.3), rgba(10, 37, 64, 0.35): These three colors will be used for the box shadow.
- #fffff7: This color will be used for the background color of h1 and containers.
- #3b2b35: This color will be used for the border color of the buttons.
- #fff0cf: This color will be used for the background color of the buttons and the next button.
- #ffe3b2: This color will be used for the border color of the buttons.
- #14ff7c: This color will be used to indicate the correct answer.
- #ff0014: This color will be used to indicate the incorrect answer.
- #231f21: This color will be used for the border hover effect for buttons.
- #661400: This color will be used as the hover effect color for the next buttons.

### Structure

My website development will follow a mobile-first strategy, with an initial focus on smaller screens. I utilized [Google Chrome DevTools](https://developer.chrome.com/docs/devtools) to initiate styling for the Samsung Galaxy Fold, which has a width of 280px. I subsequently added breakpoints for screens with widths of 576px, 768px, and 992px.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Wireframes

For structuring the website layout and design, I have chosen [Figma](https://www.figma.com/).

- Desktop
  
![Desktop Wireframes](docs/wireframes-desktop.JPG)

- Mobile

![Mobile Wireframes](docs/wireframes-mobile.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Pages and Features

The website consists of a primary page, index.html, which serves as the central hub for the entire gaming experience. Additionally, a responsive 404 page is in place to enhance user experience in case of navigation errors.

- Favicon
  
![Favicon](docs/image.png)

- Header:

  - Presents a captivating Hero image that complements the title of the quiz, creating an engaging visual introduction.

![Desktop view](docs/header.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

- Main section:

  - Welcomes users with an inviting message, setting a friendly tone to encourage participation in the quiz.
  - Rules button is implemented to provide guidance on how to play the quiz.

![Desktop view](docs/main.JPG)

![Desktop view](docs/main-rules-display.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

- Play Theme Song section

  - Enables users to play the theme song during the quiz game. Play and pause buttons give users the choice to listen or not.

![Desktop view](docs/play-theme-song.JPG)

![Desktop view](docs/play-theme-song-pause.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

- Question Section

  - Displays quiz questions and four answer options. Users choose an answer, and a Next button appears. Correct answers are in green, incorrect in red. At the end, the user's score is shown with a button to play again.

![Desktop view](docs/question-section.JPG)

![Desktop view](docs/desktop-quzi-correct-incorrect.JPG)

![Score Desktop view](docs/desktop-score-display.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

- 404 Page:

  - A 404 page will be implemented and displayed if a user navigates to a broken link. A clickable link to the home page will be provided to ensure visitors can easily navigate back.

![Desktop](docs/custom-page.JPG)

Mobile view

![Mobile view](docs/mobile-view.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

### Features to be Implemented

- Add more songs to play button image, to increase user expierence.
- Add difficulty levels.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Technology used

- **[HTML](https://www.youtube.com/watch?v=3OTSsq9Y0P4&t=5s)** - The structure of the Website was developed using HTML as the main language.
- **[CSS](https://www.youtube.com/watch?v=nV9oaUglBTE)** - The Website was styled using custom CSS in an external file.
- **[Javascript](https://www.youtube.com/watch?v=wm4F0Zqxu5A)** - Font Awesome Icons were implemented using JavaScript.
- **[VSCode](https://en.wikipedia.org/wiki/Visual_Studio_Code)** - The website was developed using Visual Studio Code IDE.
- **[Google DevTools](https://developer.chrome.com/docs/devtools/accessibility/reference)** - Used for checking responsiveness.
- **[GitHub](https://en.wikipedia.org/wiki/GitHub)** - Source code is hosted on GitHub and delpoyed using Git Pages.
- **[Git](https://en.wikipedia.org/wiki/Git)** - Used to commit and push code during the development of the Quiz Game.
- **[Google Fonts](https://fonts.google.com/)** - Google Fonts were used to style the text on the webpage.
- **[Favicon.io](https://favicon.io/favicon-converter/)** - Was used to convert and create favicon files.
- **[Figma](https://www.figma.com/)** - Was used to create both mobile and desktop wireframes.
- **[Microsoft Paint](https://www.microsoft.com/en-us/windows/paint#paintcocreator)** - It was used to create play and pause images.
- **[Voicy](https://www.voicy.network/search/naruto-sound-effects)** - Audio was sourced from voicy.
- **[Image Color Picker](https://imagecolorpicker.com/)** - Was used to detect colours in images.
- **[Convertio](https://convertio.co/)** - Was used to conver images to webp and png format.
- **[Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php)** - Was used to check responsiveness on different devices.
- **[ChatGPT](https://en.wikipedia.org/wiki/ChatGPT)** - Was used to create content and check for grammar.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Testing and Validation

- HTML validation using [W3C Markup Validation](https://validator.w3.org/) results:
  - [index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsanitab17.github.io%2FNaruto-Quiz-Game%2F)
  - 404.html
  ![Custom Page Validation](docs/custom-page-html-test-result.JPG)
- CSS validation using [W3C Jigsaw Validator](https://jigsaw.w3.org/css-validator/) results:
  - [CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsanitab17.github.io%2FNaruto-Quiz-Game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Java Script validation using [JSHint.](https://jshint.com/) results:
  ![Java Script](docs/js-test.JPG)
- Color Contrast Accessibility Validator using [A11Y](https://color.a11y.com/) resullts:
  - ![A11Y](docs/color-contrast-test.JPG)
- Accessibility testing using [Wave](https://wave.webaim.org/) results: The test revealed one alert due to the presence of audio element.
  - [Wave Results](https://wave.webaim.org/report#/https://sanitab17.github.io/Naruto-Quiz-Game/)
  
- Lighthouse test results:
  
  - ![Desktop](/docs/lighthouse-desktop.JPG)

   -![Mobile](docs/lighthouse-mobile.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Functional Testing

|Test scenario|Steps|Observation| Pass |
|-------------|------------------|-----------|-------|
|Rules button|Click on the Rules button.| The Rules button should reveal and hide the rules section.|Pass|
|Play button|Click on the Play buttonn.|On clicking the Play button, it should start playing audio.|Pass|
|Pause Button| Click on the Pause Button.|On clicking the Pause button, it should stop playing audio.|pass|
|Start Quiz button| Click on the Start Quiz button.| On clicking it, the question area should be displayed.|Pass|
|Answer Option buttons|Click on the answer option buttons.|On clicking, they should display green for the correct answer and red for an incorrect answer.|Pass|
|Next button|1. Click on the answer option buttons. <br>2. Click on the next button|1. The Next button should be displayed only when an answer option button is clicked.<br> 2. On clicking, it should lead to the next question. When the last question is answered, it should lead to the score section.|Pass|
|Play Again Button|Click on the play again button.|When clicked, it should reload the window and display the main section.| Pass|
|Questions|Play the quiz multiple times.| Questions should be randomly shuffled and displayed in sets of 10 per quiz.| Pass|
|Correct Answers| Play the quiz multiple times.|The correct answer should be shuffled and displayed in different buttons.|Pass|

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## User Story Testing

|  User Story| Expected Result | Pass|
|-----------|-----------------|--------|
|As a user, I want to be able to play quiz using multiple devices.|The website should open seamlessly on various devices with different screen sizes and across multiple browsers, including Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.|Pass|
|As a user, I want to be entertained.|Music audio should be implemented to keep the user entertained while playing the quiz.|Pass|
|As a user, I want to test my knowledge.| Implement more than 10 questions, display them randomly, and show the correct answer in different buttons. This allows users to test their knowledge rather than memorize answers.|Pass|
|As a user, I want to be able to see my quiz score after completing the quiz.|At the end of the quiz, the user's score should be displayed.|Pass|

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Bugs

No bugs were identified in the final project. However, there is one accessibility alert related to the presence of audio elements that needs to be addressed and fixed.

![Accessibility Alert](docs/accessibility-alert.JPG)

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Deployment

**Deployment to Github Pages**

- The site was deployed to GitHub pages. The steps to deploy are:

  1. Select the repository from the repository list.
  2. Go to the 'Settings' tab.
  3. In the sidebar menu, navigate to 'Pages.'
  4. In the None dropdown and choose Main.
  5. Click 'Save.'
  6. The link to access the deployed page will be displayed at the top of the page.

You can access the deployed [Naruto Quiz Game](https://sanitab17.github.io/Naruto-Quiz-Game/).

**Clone the Repository**

- Navigate to the GitHub Repository you want to clone to use locally:

  1. Click on the code drop down button
  2. Click on HTTPS
  3. Copy the repository link to the clipboard
  4. Open your IDE of choice
  5. Type git clone copied-git-url into the IDE terminal

The project will now be cloned on your local machine for use.

\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Credits

 For Images
  - [Wall Alphacoders](https://wall.alphacoders.com/)

For Gif
  - [Icegif](https://www.icegif.com/search/naruto/)

For box shadow effect
- [Get Css Scan](https://getcssscan.com/css-box-shadow-examples)

Audio
  - [Voicy](https://www.voicy.network/search/naruto-sound-effects)

For toggle button
- [w3schools](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show)

For answers array and understandig how quiz works
- [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)
- [Web Genie](https://www.youtube.com/watch?v=hgHuPWM6xAg)
- [Great Stack](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=187s)

For array shuffle:
- [Stack overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)

For checking grammar and content
- [ChatGPT](https://en.wikipedia.org/wiki/ChatGPT)