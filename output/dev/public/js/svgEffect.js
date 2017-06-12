'use strict';

addEventListener('DOMContentLoaded', function () {
            var badPic = document.getElementById('bad-pic');
            badPic.addEventListener("load", function () {

                        // get the inner DOM of alpha.svg
                        var svgDoc = badPic.contentDocument;
                        console.log(badPic
                        // get the inner element by id
                        );var delta = svgDoc.getElementsByTagName('path');
                        // add behaviour
                        Array.from(delta).forEach(function (el) {
                                    return $(el).fadeOut(Math.random() * 10000);
                        });
            }, false);
});