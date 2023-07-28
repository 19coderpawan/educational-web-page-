let userName = document.getElementsByClassName("userName")[0];
let subSection = document.getElementsByClassName("frame-parent5")[0];
// console.log("userName", userName);
// console.log("subSection", subSection);

userName.addEventListener("click", (event) => {
  console.log("click handled");
  subSection.classList.toggle("hide");
});

const dummyDoubtsSessions = [
  {
    className: "Science",
    date: "25th April, 2023",
    link: "https://www.google.com/",
  },
  {
    className: "Math",
    date: "27th April, 2023",
    link: "https://www.google.com/",
  },
  {
    className: "Math",
    date: "27th April, 2023",
    link: "https://www.google.com/",
  },
  {
    className: "Math",
    date: "27th April, 2023",
    link: "https://www.google.com/",
  },
];

// TODO::
//! need to make API call
const makeDoubtClassItem = (className, date, link) => {
  return `<div class="doubt-item-wrapper">
          <div class='rule'>
            <div class="doubt-item-content">
              <span>Your</span>
              <span class="science-doubt-session">${className} Doubt session</span>
              <span> is scheduled on </span>
              <span class="science-doubt-session">${date}</span>
            </div>
            <div class="join-doubt-class">
              <div class="join-btn">
                <a href='${link}'>Join Session</a>
              </div>
            </div>
          </div>
          </div>`;
};

let doubts = document.getElementsByClassName("doubts")[0];

for (let doubt of dummyDoubtsSessions) {
  console.log("doubs session appended", doubt);
  doubts.innerHTML += makeDoubtClassItem(
    doubt.className,
    doubt.date,
    doubt.link
  );
}

const dummyNotificationData = [
  "There will be no doubt session between 21 oct to 28 oct due to Diwali season.",
  "There will be no doubt session between 21 oct to 28 oct due to Diwali season.",
  "There will be no doubt session between 21 oct to 28 oct due to Diwali season.",
  "There will be no doubt session between 21 oct to 28 oct due to Diwali season.",
  "There will be no doubt session between 21 oct to 28 oct due to Diwali season.",
];

const makeNotificationClassItem = (data) => {
  return `<div class='notification-item'>
            <div class='notification-content-container'>
              <p class='notification-content'>${data}</p>
            </div>
          </div>`;
};

let notifications = document.getElementsByClassName("notifications")[0];

for (let notification of dummyNotificationData) {
  console.log("notification appended", notification);
  notifications.innerHTML += makeNotificationClassItem(
    notification,
  );
}
