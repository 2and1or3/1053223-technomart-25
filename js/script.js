var popupLetter = document.querySelector(".modal-letter");
if(popupLetter !== null){
var linkLetter = document.querySelector(".contacts-button");
var closeLetter = popupLetter.querySelector(".close");
var form = popupLetter.querySelector(".letter-form");
var inputName = popupLetter.querySelector(".letter-name");
var inputMail = popupLetter.querySelector(".letter-mail");
var areaText = popupLetter.querySelector(".letter-text");

var isStorageSupport=true;
var storageName="";
var storageMail="";
}

var popupCart = document.querySelector(".modal-cart");
if(popupCart !== null){
var linkCart = document.querySelectorAll(".button-to-cart");
var closeCart = popupCart.querySelector(".close");
}

var popupMap = document.querySelector(".modal-map");
if(popupMap !== null){
var linkMap = document.querySelector(".button-map");
var closeMap = popupMap.querySelector(".close");
}

var sliderMenu = document.querySelector(".menu-widget");
if(sliderMenu !== null){
var slideList = sliderMenu.querySelectorAll(".menu-slide");
var btnNext = sliderMenu.querySelector(".front-arrow");
var btnBack = sliderMenu.querySelector(".back-arrow");
var btnCircleList = sliderMenu.querySelectorAll(".circle-button");
}

var sliderFeatures = document.querySelector(".features-widget");
if(sliderFeatures !== null){
  var slideFeatureList = sliderFeatures.querySelectorAll(".features-widget-slide");
  var btnFeatureList = sliderFeatures.querySelectorAll(".btn-slide");
}
// index-letter
if(popupLetter !== null){
try{
  storageName=localStorage.getItem("inputName");
  storageMail=localStorage.getItem("inputmail");
} catch(err){
  isStorageSupport=false;
}

linkLetter.addEventListener("click", function(evt){
  evt.preventDefault();
  popupLetter.classList.add("modal-show");

  if(storageName || storageMail){
    if(storageName && storageMail){
      inputName.value=storageName;
      inputMail.value=storageMail;
      areaText.focus();
    }else{
      if(storageName){
        inputName.value=storageName;
        inputMail.focus();
      }else{
        inputMail.value=storageMail;
        inputName.focus();
      }
    }
  }else{
    inputName.focus();
  }

});

closeLetter.addEventListener("click", function(evt){
  evt.preventDefault();
  popupLetter.classList.remove("modal-show");
  popupLetter.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt){
  if(!inputName.value || !inputMail.value || !areaText.value){
  evt.preventDefault();
  popupLetter.classList.remove("modal-error");
  popupLetter.offsetWidth = popupLetter.offsetWidth;
  popupLetter.classList.add("modal-error");
}else{
  if(isStorageSupport){
  localStorage.setItem("inputName", inputName.value);
  localStorage.setItem("inputMail", inputMail.value);
  }
}
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode ===27){
    evt.preventDefault();
    if(popupLetter.classList.contains("modal-show")){
      popupLetter.classList.remove("modal-show");
      popupLetter.classList.remove("modal-error");
    }
  }
});
}
// catalog-cart
if(popupCart !== null){

  for(var i = 0; i< linkCart.length; i++){
  linkCart[i].addEventListener("click", function(evt){
    evt.preventDefault();
    popupCart.classList.add("modal-show");
  });
  }

  closeCart.addEventListener("click", function(evt){
    evt.preventDefault();
    popupCart.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt){
    if(evt.keyCode ===27){
      evt.preventDefault();
      if(popupCart.classList.contains("modal-show")){
        popupCart.classList.remove("modal-show");
        popupCart.classList.remove("modal-error");
      }
    }
  });

}
//index-map
if(popupMap !== null){
  linkMap.addEventListener("click", function(evt){
    evt.preventDefault();
    popupMap.classList.add("modal-show");

  });

  closeMap.addEventListener("click", function(evt){
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt){
    if(evt.keyCode ===27){
      evt.preventDefault();
      if(popupMap.classList.contains("modal-show")){
        popupMap.classList.remove("modal-show");
        popupMap.classList.remove("modal-error");
      }
    }
  });
}
//slider-1
if(sliderMenu !== null){
  var currentSlide = 0;
  var currentCircle = 0;
btnNext.addEventListener("click", function(evt){
  evt.preventDefault();
  slideList[currentSlide].classList.remove("slide-menu-show");
  btnCircleList[currentCircle].classList.remove("circle-button-current");
  currentSlide++;
  currentCircle++;
  if(currentSlide !== slideList.length){
  slideList[currentSlide].classList.add("slide-menu-show");
  btnCircleList[currentSlide].classList.add("circle-button-current");
}else{
  currentSlide = 0;
  currentCircle = 0;
  slideList[currentSlide].classList.add("slide-menu-show");
  btnCircleList[currentSlide].classList.add("circle-button-current");
}
});

btnBack.addEventListener("click", function(evt){
  evt.preventDefault();
  slideList[currentSlide].classList.remove("slide-menu-show");
  btnCircleList[currentCircle].classList.remove("circle-button-current");
  if(currentSlide !== 0){
    currentSlide--;
    currentCircle--;
  slideList[currentSlide].classList.add("slide-menu-show");
  btnCircleList[currentCircle].classList.add("circle-button-current");
}else{
  currentSlide = slideList.length-1;
  currentCircle = slideList.length-1;
  slideList[currentSlide].classList.add("slide-menu-show");
  btnCircleList[currentCircle].classList.add("circle-button-current");
}
});

var getElement = function(number){
  var element =  btnCircleList[number].addEventListener("click", function(evt){
    evt.preventDefault();
    if(!(btnCircleList[number].classList.contains("circle-button-current"))){
          btnCircleList[currentCircle].classList.remove("circle-button-current");
          slideList[currentSlide].classList.remove("slide-menu-show");
         currentCircle = number;
         currentSlide = number;
         btnCircleList[currentCircle].classList.add("circle-button-current");
         slideList[currentSlide].classList.add("slide-menu-show");
       }

  });

  return element;
}

for(var j = 0; j < btnCircleList.length; j++){
  getElement(j);
}

}
//slider-2
if(sliderFeatures !== null){
  var currentFeature = 0;
  var getElementFeatures = function(number){
    var elementFeature =  btnFeatureList[number].addEventListener("click", function(evt){
      evt.preventDefault();
      if(!(btnFeatureList[number].classList.contains("features-active"))){
            btnFeatureList[currentFeature].classList.remove("features-active");
            slideFeatureList[currentFeature].classList.remove("features-widget-slide-active");
           currentFeature = number;
           btnFeatureList[currentFeature].classList.add("features-active");
           slideFeatureList[currentFeature].classList.add("features-widget-slide-active");
         }

    });
    return elementFeature;
  }
  for(var m = 0; m < btnFeatureList.length; m++){
    getElementFeatures(m);
  }
}
