export const NOTIFICATION_CONTENT = {
  introTitle: "Notification reminder",
  introBody: `Within our current digital age, we're constantly bombarded with notifications. Be it emails, text messages, push notifications from apps we never use. This can often be overwhelming, and important notifications could be easily missed. My aim was to create a tool to allow notifications to be prioritized and reminds the user about them.

In most phones, there is usually an option to turn off notifications, but there isn't really an option to prioritize or keep reminders about them. This is an issue as often we see notifications and we ignore them because we're busy in the moment, but then we forget about them entirely. This tool would allow the user to keep a track of them and remind them at a later date.`,

  challengeTitle: "Challenge",
  challengeBody: `Being an offender of this and often forgetting to reply back to messages and other app notices, I wanted to create a solution that would allow the user to feel in control of their notifications.

The purpose of creating this is for the user to stay updated and remind themselves to look back at things they've missed, rather than them being buried in a plethora of notifications. 

The aim of this project was to understand why people find this difficult and struggle with digital communication and find a way to navigate this. The result was to create a tool that works with existing notification systems, allowing users to categorize and set reminders for them.`,

  researchTitle: "Research",
  surveyTitle: "User Survey",
  surveyBody: `I started by surveying friends and family about their phone notifications and how they manage them. Most of them said they find it difficult to stay on top of notifications, especially if they are busy and often forget to reply to them. 

Key findings from survey:
• 80% of users felt overwhelmed by the amount of notifications.
• 75% of users admitted to forgetting to reply to messages.
• 70% of users would like a feature that allows them to prioritize notifications.
• 60% of users felt that it would help them stay more organized with their tasks and messages.

A common theme was that people feel overwhelmed with the amount of notifications and often feel like they are not in control. Therefore, the common theme was that people find it difficult to manage their notifications and often feel like they are missing out on important information.`,

  analysisTitle: "Competitive Analysis",
  analysisBody1: `I looked at different apps currently on the market, such as iOS notifications, Android notifications, and other third-party apps like Notification History Log. I found that while these apps allow you to see previous notifications, they do not allow you to prioritize them or set reminders for them.`,

  insightsTitle: "Insights",
  insightsItems: [
    "Users find it difficult to stay on top of notifications.",
    "Users often forget to reply to messages.",
    "There is a need for a feature that allows users to prioritize notifications and set reminders."
  ],

  ideationTitle: "Ideation",
  ideationBody: `After gathering all the information from the research, I started to brainstorm ideas for the app. The result was to create a tool that would allow the user to categorize their notifications into three categories: 
• High priority (red)
• Medium priority (yellow)
• Low priority (green)
Each category would have a different color to represent the level of priority.`,

  iteration1Title: "First Iteration",
  iteration1Body: `In the first iteration, the user would enter the app and see a list of all their notifications. From there, they could choose which notification they want to prioritize. This would allow the user to easily see all their notifications in one place and then decide which ones are important.`,

  finalIterationTitle: "Final Iteration",
  finalIterationBody: `In the final iteration, I decided to simplify the process. Instead of the user having to enter the app to prioritize, the app would now allow the user to prioritize directly from the notification itself. This would make it easier for the user to stay on top of their notifications and would be less time-consuming.`,

  flowDiagramIntro: "Below is the flow design of how the system would operate:",
  flowDescription: `The design concept allowed the user to filter notifications based on the designated categories. The user could set reminders for when they want to be notified, and they could also see a history of all their notifications and when they were received. This was simply created to allow the user to feel in control and not having to go through a plethora of notifications to find what they're looking for.`,

  proposedAppTitle: "Proposed app design",
  proposedAppBody: "With this in mind, the final design focuses on a minimal UI that complements existing system notifications rather than cluttering the screen. The user is able to prioritize notifications from the lock screen and view their organized list in the app for later.",

  visualIdentity: {
    title: "Visual Identity",
    description: "The concept behind the design language for this feature was to be sleek, simple and easy to navigate. The purpose is for this to be very self-explanatory and easy for the user to navigate while matching modern OS aesthetics.",
    colors: [
      { hex: "#FFB3A1", label: "Pastel red" },
      { hex: "#4A3B37", label: "Espresso brown" },
      { hex: "#F3D8D3", label: "Sandy pink" },
      { hex: "#B79E98", label: "Dusty mushroom" },
      { hex: "#3A2B27", label: "Deep cocoa" },
      { hex: "#2B1F1C", label: "Dark charcoal" }
    ],
    typography: [
      { font: "Work Sans", usage: "Regular, Semi-bold, Bold" }
    ]
  },

  nextStepsTitle: "Next steps",
  nextStepsBody: "As this is still a work in progress for the next steps I would like to:",
  nextStepsItems: [
    "Test the app with users and gather feedback to improve the user experience.",
    "Look into ways to integrate the app with other apps and features.",
    "Finalize the design and look into ways to develop it into a fully functional app."
  ]
};
