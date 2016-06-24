var config = require('./config.js');
var request = require('request');

describe('youtube spam test', function() {

	var driver = browser.driver;
	var victim = config.baseUrl + "/" + config.victim;
	var random1 = 0;
	var random2 = 0;

	var spam = function() {
		it("should spam", function() {
			for(var i = 0; i < config.spamx.length; i++){
				for(var x = 0; x < config.spamy.length; x++){
					updateRandom();
					driver.sleep(500).then(function() {
						return driver.findElement(by.css('div[class="comment-simplebox-renderer-collapsed-content"]')).click();
					}).then(function() {
						return Math.floor((Math.random() * config.spamx.length) + 0);
					}).then(function(random) {
						return driver.findElement(by.css('div[class="comment-simplebox-text"]')).sendKeys("#" + config.spamx[random] + "_");
					}).then(function() {
						return Math.floor((Math.random() * config.spamy.length) + 0);
					}).then(function(random) {
						return driver.findElement(by.css('div[class="comment-simplebox-text"]')).sendKeys(config.spamy[random]);
					}).then(function() {
						return driver.sleep(1000);
					}).then(function() {
						return driver.findElement(by.css('div[class="comment-simplebox-buttons"]'));
					}).then(function(data) {
						return data.findElements(by.css('button'));
					}).then(function(data) {
						return data[1].click();
					}).then(function() {
						driver.sleep(3000);
					});
				}
			}
		});
	};

	var updateRandom = function() {
		var random1 = Math.floor((Math.random() * config.spamx.length) + 0);
		var random2 = Math.floor((Math.random() * config.spamy.length) + 0);
	};

	it("should get youtube", function () {
		driver.get(config.baseUrl).then(function() {
			return driver.sleep(2000);
		}).then(function() {
			return driver.findElement(by.css('button[class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary"]')).click();
		}).then(function() {
			driver.sleep(1000);
		}).then(function() {
			return driver.findElement(by.css('input[id="Email"]')).sendKeys(config.email1);
		}).then(function() {
			return driver.findElement(by.css('input[id="next"]')).click();
		}).then(function() {
			return driver.sleep(1000);
		}).then(function() {
			return driver.findElement(by.css('input[name="Passwd"]')).sendKeys(config.password);
		}).then(function() {
			return driver.findElement(by.css('input[id="signIn"]')).click();
		}).then(function() {
			return driver.sleep(1000);
		}).then(function() {
			return driver.isElementPresent(by.css('div[token="security/interstitials/recoveryoptions"]'));
		}).then(function(bool) {
			if (bool === true) {
				driver.findElement(by.css('c-sa-ra a-b a-b-G Zg a-b-v-x')).click();
			}
			return driver.sleep(1000);
		}).then(function() {
			console.log(victim);
			return driver.get(victim);
		}).then(function() {
			return driver.sleep(2000);
		});
	});

	it("should scroll down", function() {
		driver.sleep(1000).then(function() {
			for (var i = 0; i < 10; i++) {
				// browser.actions().sendKeys(Key.ARROW_DOWN).perfom();
				driver.findElement(by.css('body')).sendKeys(protractor.Key.ARROW_DOWN);
			}
		}).then(function() {
			driver.sleep(3000);
		});
	});

	spam();

});