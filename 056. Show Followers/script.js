const followers = document.querySelectorAll(".followers");

followers.forEach((followersCounter) => {
  followersCounter.innerHTML = "0";

  const updateFollowerCounter = () => {
    const target = +followersCounter.getAttribute("data-target");
    const c = +followersCounter.innerText;

    const increment = target / 500;

    if (c < target) {
      followersCounter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateFollowerCounter, 1);
    } else {
      followersCounter.innerText = target;
    }
  };

  updateFollowerCounter();
});
