//exercise 1
$("document").ready(() => {
	$("#loadBtn").click(() => {
		$("#div1").load("source.txt", function (responseTxt, statusTxt, xhr) {
			console.log(responseTxt);
			if (statusTxt === "success") {
				alert("External content loaded successfully!" + responseTxt);
			}
			if (statusTxt === "error") {
				alert(`Error: ${xhr.status}: ${xhr.statusText} `);
			}
		});
	});
});

//exercise 2
$("document").ready(() => {
	$("#owlCarousel").owlCarousel({
		loop: true,
		margin: 10,
	});
	$("#owlCarousel div").css({
		with: "400px",
		height: "400px",
		"object-fit": "contain",
	});
	$("#owlCarousel").css({ "margin-top": "20px" });
});

// exercise 3
