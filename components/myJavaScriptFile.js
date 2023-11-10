"use client"
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wrapper = document.querySelector(".wrapper");
      const header = document.querySelector(".header");
      const toggleButton = document.querySelector(".dark-light");
      const jobCards = document.querySelectorAll(".job-card");
      const logo = document.querySelector(".logo");
      const jobLogos = document.querySelector(".job-logos");
      const jobDetailTitle = document.querySelector(".job-explain-content .job-card-title");
      const jobBg = document.querySelector(".job-bg");

      wrapper.addEventListener("scroll", (e) => {
        e.target.scrollTop > 30
          ? header.classList.add("header-shadow")
          : header.classList.remove("header-shadow");
      });

      toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });

      jobCards.forEach((jobCard) => {
        jobCard.addEventListener("click", () => {
          const number = Math.floor(Math.random() * 10);
          const url = `https://unsplash.it/640/425?image=${number}`;
          jobBg.src = url;

          const logo = jobCard.querySelector("svg");
          const bg = logo.style.backgroundColor;

          jobBg.style.background = bg;
          const title = jobCard.querySelector(".job-card-title");
          jobDetailTitle.textContent = title.textContent;
          jobLogos.innerHTML = logo.outerHTML;
          wrapper.classList.add("detail-page");
          wrapper.scrollTop = 0;
        });
      });

      logo.addEventListener("click", () => {
        wrapper.classList.remove("detail-page");
        wrapper.scrollTop = 0;
        jobBg.style.background = bg;
      });
    }
  }, []);

  return (
    <div>
      {/* Your JSX for the component */}
    </div>
  );
}

export default MyComponent;
