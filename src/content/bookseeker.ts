export const BOOK_SEEKER_FULL_TEXT = {
  introTitle: "Book seeker",
  introBody: "According to research done by the National literacy, reading for enjoyment is at an all time low where 1 in 3 young people enjoy reading in their free time. This is also true for older generations compared to previous where reading for enjoyment is declining. To address this lack of reading enjoyment I designed an application that generates personalised book recommendations. \n\nThe book seeker app aims to allow users to find book recommendations that are personalised to their taste at the time. The app caters to all genres, fiction, non-fiction and other elements that would be expanded upon.",
  
  challengeTitle: "Challenge",
  challengeResearch: "The problem of lack of enjoyment in reading came about when in discussion with a friend. With further research I was able to understand this lack of enjoyment was also nationwide in the UK. The National literacy had submitted its 2025 report done into reading, this research has been done annually since 2005. The people that this report was conducted on were children and young people up to the age of 18. Some of the findings from the report are displayed below:",
  challengeBody: "The purpose of the book recommendation app is to address this lack of enjoyment in reading. According to the research, one of way of combatting this lack of enjoyment is finding literature associated to the users interests. The personalised book recommendations app would allow users to find book recommendations tailored to the previous reads.\n\nThe users this would most appeal to would be young adults (18-30) to help with lack of enjoyment in reading. This would then hopefully translate into reading more as the age progresses. The design intent for this would be to interactive and inviting to appeal to young people.\n\nTo summarise the above:",
  challengePoints:[
    "There's a lack of enjoyment in reading correlating to the decline of reading generally",
    "Design an app to address the above by recommending a book which is personalised by the users inputs",
    "Key demographic of this app would be be young people between the ages of 18-30 yrs old",
    ],

  researchTitle: "Research",
  surveyTitle: "User surveys",
  surveyBody: "For this part of the research user surveys were conducted, the primary users of the design would be young adults aged between 18-30. A small sample size of 10 people which consist of friends and family members aged between 18-30 had answereed the survey, the results are as followed:",
  surveyStats: [
    "68% give up reading a new book on average after 50 pages",
    "30% actually found reading enjoyable",
    "14% admitted that they would willingly read a new book if it were recommended by someone close to them or media recommendation pages",
    "86% preferred books related to their interests or previous books that they have read."
  ],
  userQuote: "I just find it hard to relate to what I’m reading therefore I tend to just give up before really getting into the book. It’s really hard when you read one good book to find another book just like that.",
  surveySummary:"Ideally the sample size would be scaled up as the results right now do not show a better representation to how the nation may feel towards reading. However, due to limitations this survey had to be scaled down in order to gain credible data.",

  analysisTitle: "Competitive analysis",
  analysisBody1: "When it came to analysing like for like applications/websites that could address this matter it wasn’t an easy feat to find this. Majority of the book recommendations use a generic algorithm to recommend ‘books you may be interested in’ this can be found in marketers such as Google, Amazon and book retailer such as Waterstones, WHSmith and Goodreads. This usually recommends books that majority of users who bought the same book tend to go for next. The fault with this is that the book recommendation doesn’t feel personalised, with the book retailers sites there isn’t advanced options just basic inputs which can return results that are necessarily that much of an interest.",
  analysisBody2: "Upon doing more advanced research such as looking into Reddit to find websites or other retailers that could give better recommendations, Penguin was mentioned. It was hard navigating the book recommendation webpage, once met with what would look like the book recommendation page a compulsory quiz had to be filled out which consisted of four options, this then returned a book result dependent on the answers. This in turn still felt like a basic book recommendation it didn’t feel very personalised, it still felt a generalised book recommendation. The same answers to the quiz were inputted 3 times this returned the same result, causing to further believe that the recommendation felt very generalised.",
  analysisBody3: "An app that I was recommended to look into was Fable. This app works more like a social media app where users can bond and share thoughts as well as track each others reading catalogue. This app although first of its kind, it doesn't have a feature where book recommendations are given based off previous reads and other specifics. Simple features with the app, current users still have trouble finding books one user stated: ",
  userQuote3: "I've typed out entire book titles before, and the book does not come up.",

  insightsTitle: "Insights",
  insightsItems: [
    "Users were disengaged by books immediately if it didn’t relate to successful previous reads or their interests",
    "Finding book recommendation sites/applications that could recommend books isn’t very easy to find",
    "Most of which deliver sub par book results that have generalised tailored results",
    "If books were just as engaging as previous books then users are more likely to integrate reading more into their lives"
  ],
  
  ideationTitle: "Ideation",
  ideationBody: "From considering the outputs attained from the research as well as the summarised insights. The features concluded to make this personalised book recommendations website:",
  ideationFeatures: [
    "User gets to choose between fiction or non-fiction",
    "User inputs up to 3 previous read books to get basic recommendation",
    "User inputs up to 3 previous read books and the ability to give advanced settings to get a more personalised recommendation"
  ],
  
  iteration1Title: "First iteration",
  iteration1Body: "For the first design concept instead of having options, it had a very basic UI where the user only had to input previous books read. The problem with this design is that the user can input a mixture of non-fiction and  fiction which could confuse the backend and not give a book recommendation that would be well liked. Furthermore the design at the moment doesn't enable the user to tailor their inputs any further causing the output to not entirely feel personalised.",
  
  finalIterationTitle: "Final iteration",
  finalIterationBody: "For the first iteration the design didn’t consider the typical edge cases such as literature categorisation, therefore, could result in the user inputting books and receiving an output not to their expectation. The below the edge cases are explored further and a design is created to show what be expected if the user were to input such cases. Below is the flow diagram for fiction cases:",
  finalnonfictionBody: "Below is the flow diagram non-fiction cases:",
  finaldesignpromptsBody: "Below are the edge cases explored further within the design and how the response would look to the user. ",
  finaldesignQuote: "I think it works well functionally! It’d be nicer if there was some description of the recommended book so I wouldn’t have to Google it and maybe if instead of one suggestion it could show like 3? So I have a bit of choice ",
  
  flowDiagramIntro: "Below is a flow design of how the app would operate when the user interacts with the design:",
  flowDescription: "The flow diagram shows the possible edge cases that could occur such as the user not agreeing with the frame that they’re currently on, therefore, switching to the next one or going to the previous frame. This also allows the user to input up to three books so it’s not necessary for the user to input all three books.",
  
  proposedAppTitle: "Proposed App",
  proposedAppBody: "With both the research and ideation, the user would get an easy UI to navigate. The UI would incorporate a basic and advanced option for the user to choose from, with both options it allow the user to input up to three previous books read to find like books. The user will have the option to choose whether they’re looking for fiction on non-fiction. Below is an example of the prototype:",
  
  // Add this inside your BOOK_SEEKER_FULL_TEXT object
  visualIdentity: {
    title: "Design Language",
    description: "The concept behind the design language for this website is for it to be inviting, animated and bold. The purpose is for this to be very self explanatory and easy for the user to navigate.",
    colors: [
      { hex: "#FAB949", label: "Vibrant yellow-orange" },
      { hex: "#FFD283", label: "Pale gold" },
      { hex: "#FFA406", label: "Vivid orange" },
      { hex: "#F6DCAE", label: "Light peach" },
      { hex: "#FFECBE", label: "Champagne" },
      { hex: "#FFFFFF", label: "White" },
      { hex: "#000000", label: "Black" }
    ],
    typography: [
      { font: "Inika regular", usage: "Title / upper sub-paragraph" },
      { font: "Roboto regular", usage: "App typography / lower sub-paragraph" }
    ]
  },

  nextStepsTitle: "Next steps",
  nextStepsBody: "This is still in a working progress, so for the next steps I want:",
  nextStepsItems: [
    "I want to make the design more interactive in the sense of having more complicated drop-downs instead of being reliant on the arrows to navigate",
    "Also be able to design the full front-end design development wise also, be able to A/B test this new design against the old in order to fully understand the ease of experience between the two",
    "I want to enable a social feature to the book recommendation app, which allows users to interact with one another ",
  ],

  impactmeasureTitle: "Impact and Measure",
  impactmeasureBody: "For this step, I'll be stating ways how I would measure the success output of the design once the working progress is able to be estabilished:",
  impactmeasureItems: [
    "Track traffic of the App, be able to decipher what particular features of the app users interact with the most",
    "Use App store reviews for user feedback as well as detail how it currently is doing",
    "75% of the reviews should be positive in order to consider this as a success",
    "Using my backend experience understand how the model for personalisation can be further improved by doing model retraining and do further A/B testing, this would ultimately improve the algorithm. This could be further measured by holding working groups to understand model performance.",
  ],

  nextprojectTitle: "Next project"
};
