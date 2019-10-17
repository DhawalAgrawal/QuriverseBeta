
    
    var innerGrid = document.querySelector(".scroll-cards--grid");
      var singleCards = document.querySelectorAll(".list-card");
      var initialLength = singleCards.length;
      // flags
      var cloneTheCards = false;
      var clonesAbout = false;
      var clonedCards = [];
      // translate position counter
      var position = 0;
      function walkCards(cards) {
            position--;
            innerGrid.style.transform = "translateY(" + position + "px)";
            cards.forEach(function (card) {
                  // get info to check for whether we should duplicate
                  var cardHeight = card.clientHeight;
                  var cardPosition = card.getBoundingClientRect().y;
                  if (cardPosition < -cardHeight && cards.length < initialLength * 2 && !clonesAbout) {
                        cloneTheCards = true;
                      }
                      // duplicate the cards
                      if (cloneTheCards) {
                            var clonedCard = card.cloneNode(true);
                            clonedCards.push(clonedCard);
                            if (clonedCards.length >= initialLength) {
                                  cloneTheCards = false;
                                  clonesAbout = true;
                                  clonedCards.map(function (clone) {
                                        return innerGrid.appendChild(clone);
                                      });
                                    }
                                  }
                                });
                                // watch the new clones - remove the old ones and reset position when they reach the top
                                if (clonesAbout) {
                                      if (clonedCards[0].getBoundingClientRect().y <= 0) {
                                            var oldies = Array.from(cards).splice(0, initialLength);
                                            oldies.map(function (item) {
                                                  item.remove();
                                                });
                                                // reset the position - there's some offset here, probably the padding - this is set to -8 to compensate
                                                position = -6;
                                                innerGrid.style.transform = "translateY(" + position + "px)";
                                                clonesAbout = false;
                                                clonedCards = [];
                                              }
                                            }
                                            singleCards = document.querySelectorAll(".list-card");
                                            requestAnimationFrame(function () {
                                                  return walkCards(singleCards);
                                                });
                                              }

                                            requestAnimationFrame(function () {
                                                 walkCards(singleCards);
                                            })

//Auto Typing

var typed = new Typed('#typed', {
    strings: ["Movies", "TVseries","Music","Animes","Games","Teams","Travel","Culture","Lifestyle","Passion","Fsndom","Curiosity"],
    typeSpeed: 30,
    loop:true
  });
  