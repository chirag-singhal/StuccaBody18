"use strict";

function init() {
	// Edit this to change tjhe transition duration (in seconds)
	const TRANSITION_DURATION = 4;

	let PSEUDO_COUNT = 0;
	const ANIMATION_DURATION = 3;

	const IMAGES = [
		{
			name: "1",
			stuccanName: "Amritanshu Jain",
			stuccanDept: "Department Of Visual Media",
			require: () => ("imgs/AmritanshuJain.png")
		},
		{
			name: "2",
			stuccanName: "Aditi Pandey", 
			stuccanDept: "Department of Publications And Correspondence",
			require: () => ("imgs/AditiPandey.png")
		},
		{
			name: "3.png",
			stuccanName: "Rahul Unnithan",
			stuccanDept: "Department Of Reception And Accomodation",
			require: () => ("imgs/RahulUnnithan.png")
		},
		{
			name: "4.png",
			stuccanName: "Aakash Singh", 
			stuccanDept: "General Secretary Student Union",
			require: () => ("imgs/AakashSingh.png")
		},
		{
			name: "5.png",
			stuccanName: "Chirag Parikh",
			stuccanDept: "Department Of Art, Design And Publicity",
			require: () => ("imgs/ChiragParikh.png")
		},
		{
			name: "6.png",
			stuccanName: "Punit Batra", 
			stuccanDept: "Department of Sponsorship And Marketing",
			require: () => ("imgs/PunitBatra.png")
		},
		{
			name: "6.png",
			stuccanName: "Satyansh Rai", 
			stuccanDept: "President Student Union",
			require: () => ("imgs/SatyanshRai.png")
		},
		{
			name: "6.png",
			stuccanName: "Yash Devnani", 
			stuccanDept: "Department of Events, Competitions And Operations",
			require: () => ("imgs/YashDevnani.png")
		}
	];
	const CONTAINER = document.getElementById("image-container");

	// function to create images in HTML
	IMAGES.map((obj, index) => createImages(obj, index));
	function createImages(obj, index) {
		let div = document.createElement("div");
		div.classList.add("image");
		div.id = "img" + index;

		let img = document.createElement("img");
		img.setAttribute("src", obj.require());
		img.setAttribute("alt", obj.title);
		img.id = "image" + index;
		div.appendChild(img);

		// let h1 = document.createElement("H1");
		// h1.innerHTML = obj.title;
		// div.appendChild(h1);

		// display none if not first image
		if (index != 0) {
			div.style.opacity = 0;
		}

		CONTAINER.appendChild(div);
	}

	IMAGES.map(ob => {
		console.log(ob.stuccanName)
		return ob.stuccanName;
	}).map(n => {
			const e = document.createElement('div');
			e.append(document.createTextNode(n));
			e.classList.add('stuccan-name')
			return e;
		}).forEach(e =>document.getElementById('stuccan-name-container').append(e))
	const dummyEl = document.createElement('div');
	dummyEl.append(document.createTextNode('d'));
	dummyEl.classList.add('dummy');
	document.getElementById('stuccan-name-container').append(dummyEl);
	
	IMAGES.map(ob => ob.stuccanDept)
		.map(n => {
			const e = document.createElement('div');
			e.append(document.createTextNode(n));
			e.classList.add('stuccan-dept')
			return e;
		}).forEach(e =>document.getElementById('stuccan-dept-container').append(e))
		
	let checkState = setInterval(function () {
		// check if the image divs have been mounted to the document
		if (document.readyState === "complete") {
			clearInterval(checkState);
			// start animation/transition
			startAnim();
		}
	}, 100);


	function startAnim() {
		// set background in the pseudo elements of all containers
		IMAGES.map((obj, index) => {
			let dimensions = getDimensions(index);
			setURL(index, dimensions);
		});

		let currentIndex = 0;

		// setInterval(next, TRANSITION_DURATION * 1000);

		// function to go to next image - defined inside startAnim to access currentIndex
  }

  let currentIndex = 0;

  const navigate = {
    currentIndex: 0,
    goToImage(newIndex) {
	  animateOut(this.currentIndex, ANIMATION_DURATION);
	  flickerOut(document.getElementsByClassName('stuccan-name')[this.currentIndex]);
	  flickerOut(document.getElementsByClassName('stuccan-dept')[this.currentIndex]);

      this.currentIndex = newIndex;
      console.log(newIndex)
      // let nextIndex = (++currentIndex) % (IMAGES.length);
	  animateIn(this.currentIndex, ANIMATION_DURATION);
	  flickerIn(document.getElementsByClassName('stuccan-name')[this.currentIndex]);
	  flickerIn(document.getElementsByClassName('stuccan-dept')[this.currentIndex]);

      // currentIndex = nextIndex;
    },
    next(){
      // console.log(IMAGES.length)
      const index = (this.currentIndex+1) % IMAGES.length;
      console.log(index)
	  this.goToImage(index)
    },
    previous(){
      const index = ((this.currentIndex-1) + IMAGES.length ) % IMAGES.length;
      console.log(index)
	  this.goToImage(index)
    },
    keyMap(key){
      const index = key - 1;
	  this.goToImage(index)
    }
  }

	function getDimensions(index) {
		let height = document.getElementById("img" + index).clientHeight;
		let width = document.getElementById("img" + index).clientWidth;
		return { height: height, width: width };
	}

	function setURL(index, dimensions) {
		let UID = {
			getNew: function () {
				PSEUDO_COUNT++;
				return PSEUDO_COUNT;
			}
		};

		HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
			let _this = this;
			let _sheetId = "pseudoStyles";
			let _head = document.head || document.getElementsByTagName("head")[0];
			let _sheet = document.getElementById(_sheetId) || document.createElement("style");
			_sheet.id = _sheetId;
			let className = "pseudoStyle" + UID.getNew();

			_this.className += " " + className;

			_sheet.innerHTML += "\n." + className + ":" + element + "{" + prop + ":" + value + "}";
			_head.appendChild(_sheet);
			return this;
		};

		let div = document.getElementById("img" + index);
		div.pseudoStyle("before", "content", "''");
		div.pseudoStyle("before", "background-image", "url(\"" + IMAGES[index].require() + "\")");
		div.pseudoStyle("before", "height", dimensions.height + "px");
		div.pseudoStyle("before", "width", dimensions.width + "px");
		div.pseudoStyle("before", "background-size", dimensions.width + "px " + dimensions.height + "px");
		div.pseudoStyle("after", "content", "''");
		div.pseudoStyle("after", "background-image", "url(\"" + IMAGES[index].require() + "\")");
		div.pseudoStyle("after", "height", dimensions.height + "px");
		div.pseudoStyle("after", "width", dimensions.width + "px");
		div.pseudoStyle("after", "background-size", dimensions.width + "px " + dimensions.height + "px");
	}

	function animateIn(index, duration) {
		let UID = {
			getNew: function () {
				PSEUDO_COUNT++;
				return PSEUDO_COUNT;
			}
		};

		HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
			let _this = this;
			let _sheetId = "pseudoStyles";
			let _head = document.head || document.getElementsByTagName("head")[0];
			let _sheet = document.getElementById(_sheetId) || document.createElement("style");
			_sheet.id = _sheetId;
			let className = "pseudoStyle" + UID.getNew();

			_this.className += " " + className;

			_sheet.innerHTML += "\n." + className + ":" + element + "{" + prop + ":" + value + "}";
			_head.appendChild(_sheet);
			return this;
		};

		let div = document.getElementById("img" + index);

		// flicker in
		div.classList.add("imageFlickerIn");
		setTimeout(function () {
			div.style.opacity = 1;
			div.classList.remove("imageFlickerIn");
		}, 3000);

		// glitch
		div.pseudoStyle("before", "animation", "noise-anim " + duration + "s linear alternate-reverse");
		let beforePseudoCount = PSEUDO_COUNT;
		setTimeout(function () { div.classList.remove("pseudoStyle" + beforePseudoCount); }, duration * 1000);

		div.pseudoStyle("after", "animation", "noise-anim " + duration + "s linear alternate-reverse");
		let afterPseudoCount = PSEUDO_COUNT;
		setTimeout(function () { div.classList.remove("pseudoStyle" + afterPseudoCount); }, duration * 1000);
	}

	function animateOut(index, duration) {
		let UID = {
			getNew: function () {
				PSEUDO_COUNT++;
				return PSEUDO_COUNT;
			}
		};

		HTMLElement.prototype.pseudoStyle = function (element, prop, value) {
			let _this = this;
			let _sheetId = "pseudoStyles";
			let _head = document.head || document.getElementsByTagName("head")[0];
			let _sheet = document.getElementById(_sheetId) || document.createElement("style");
			_sheet.id = _sheetId;
			let className = "pseudoStyle" + UID.getNew();

			_this.className += " " + className;

			_sheet.innerHTML += "\n." + className + ":" + element + "{" + prop + ":" + value + "}";
			_head.appendChild(_sheet);
			return this;
		};

		let div = document.getElementById("img" + index);

		// flicker out
		div.classList.add("imageFlickerOut");
		setTimeout(function () {
			div.style.opacity = 0;
			div.classList.remove("imageFlickerOut");
		}, 1500);

		// glitch
		div.pseudoStyle("before", "animation", "noise-anim " + duration + "s linear alternate-reverse");
		let beforePseudoCount = PSEUDO_COUNT;
		setTimeout(function () { div.classList.remove("pseudoStyle" + beforePseudoCount); }, duration * 1000);

		div.pseudoStyle("after", "animation", "noise-anim " + duration + "s linear alternate-reverse");
		let afterPseudoCount = PSEUDO_COUNT;
		setTimeout(function () { div.classList.remove("pseudoStyle" + afterPseudoCount); }, duration * 1000);

	}

  return {
    navigate, noOfImages: IMAGES.length
  }

}

const flickerIn = elem => {
	elem.classList.add('imageFlickerIn');
	setTimeout(_ => {
		elem.style.opacity = 1;
		elem.classList.remove('imageFlickerIn');
	}, 3000);
}

const flickerOut = elem => {
	elem.classList.add('imageFlickerOut');
	setTimeout(_ => {
		elem.style.opacity = 0;
		elem.classList.remove('imageFlickerOut');
	}, 1500);
}

const { navigate, noOfImages } = init();
let {next, previous, keyMap} = navigate
next = next.bind(navigate)
previous = previous.bind(navigate)
keyMap = keyMap.bind(navigate)
