function openRightNav() {
    document.getElementById("rightSidenav").style.width = "300px";
}

function closeRightNav() {
    document.getElementById("rightSidenav").style.width = "0";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function() {
    if ($(window).width() < 1200) {
        $('#rightSidenav').addClass('rightsidenav');
        $('#mySidenav').addClass('sidenav');
    } else {
        $('#rightSidenav').removeClass('rightsidenav');
        $('#mySidenav').removeClass('sidenav');
    }
    var acc = document.getElementsByClassName("nested-accordian");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var nestedpanel = this.nextElementSibling;
            if (nestedpanel.style.display === "block") {
                nestedpanel.style.display = "none";
            } else {
                nestedpanel.style.display = "block";
            }
        });
    }
    var acc = document.getElementsByClassName("accordion1");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel1 = this.nextElementSibling;
            if (panel1.style.display === "block") {
                panel1.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
    /*calender start*/
    $(function() {
        function c() {
            p();
            var e = h();
            var r = 0;
            var u = false;
            l.empty();
            while (!u) {
                if (s[r] == e[0].weekday) {
                    u = true
                } else {
                    l.append('<div class="blank"></div>');
                    r++
                }
            }
            for (var c = 0; c < 42 - r; c++) {
                if (c >= e.length) {
                    l.append('<div class="blank"></div>')
                } else {
                    var v = e[c].day;
                    var m = g(new Date(t, n - 1, v)) ? '<div class="today">' : "<div>";
                    l.append(m + "" + v + "</div>")
                }
            }
            var y = o[n - 1];
            a.css("background-color", y).find("h2").text(i[n - 1] + " " + t);
            f.find("div").css("color", y);
            l.find(".today").css("background-color", y);
            d()
        }

        function h() {
            var e = [];
            for (var r = 1; r < v(t, n) + 1; r++) {
                e.push({
                    day: r,
                    weekday: s[m(t, n, r)]
                })
            }
            return e
        }

        function p() {
            f.empty();
            for (var e = 0; e < 7; e++) {
                f.append("<div>" + s[e].substring(0, 3) + "</div>")
            }
        }

        function d() {
            var t;
            var n = $("#calendar").css("width", e + "px");
            n.find(t = "#calendar_weekdays, #calendar_content").css("width", e + "px").find("div").css({
                width: e / 7 + "px",
                height: e / 7 + "px",
                "line-height": e / 7 + "px"
            });
            n.find("#calendar_header").css({
                height: e * (1 / 7) + "px"
            }).find('i[class^="icon-chevron"]').css("line-height", e * (1 / 7) + "px")
        }

        function v(e, t) {
            return (new Date(e, t, 0)).getDate()
        }

        function m(e, t, n) {
            return (new Date(e, t - 1, n)).getDay()
        }

        function g(e) {
            return y(new Date) == y(e)
        }

        function y(e) {
            return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate()
        }

        function b() {
            var e = new Date;
            t = e.getFullYear();
            n = e.getMonth() + 1
        }
        var e = 480;
        var t = 2013;
        var n = 9;
        var r = [];
        var i = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var s = ["S", "M", "T", "W", "T", "F", "S"];
        var o = ["#16a085", "#1abc9c", "#c0392b", "#27ae60", "#FF6860", "#f39c12", "#f1c40f", "#e67e22", "#2ecc71", "#e74c3c", "#d35400", "#2c3e50"];
        var u = $("#calendar");
        var a = u.find("#calendar_header");
        var f = u.find("#calendar_weekdays");
        var l = u.find("#calendar_content");
        b();
        c();
        a.find('i[class^="icon-chevron"]').on("click", function() {
            var e = $(this);
            var r = function(e) {
                n = e == "next" ? n + 1 : n - 1;
                if (n < 1) {
                    n = 12;
                    t--
                } else if (n > 12) {
                    n = 1;
                    t++
                }
                c()
            };
            if (e.attr("class").indexOf("left") != -1) {
                r("previous")
            } else {
                r("next")
            }
        })
    })
    /*calender end*/
    const uploadArea = document.querySelector('#uploadArea')
    const dropZoon = document.querySelector('#dropZoon');
    const loadingText = document.querySelector('#loadingText');
    const fileInput = document.querySelector('#fileInput');
    const previewImage = document.querySelector('#previewImage');
    const fileDetails = document.querySelector('#fileDetails');
    const uploadedFile = document.querySelector('#uploadedFile');
    const uploadedFileInfo = document.querySelector('#uploadedFileInfo');
    const uploadedFileName = document.querySelector('.uploaded-file__name');
    const uploadedFileIconText = document.querySelector('.uploaded-file__icon-text');
    const uploadedFileCounter = document.querySelector('.uploaded-file__counter');
    const toolTipData = document.querySelector('.upload-area__tooltip-data');
    const imagesTypes = [
        "jpeg",
        "png",
        "svg",
        "gif"
    ];
    toolTipData.innerHTML = [...imagesTypes].join(', .');
    dropZoon.addEventListener('dragover', function(event) {
        event.preventDefault();
        dropZoon.classList.add('drop-zoon--over');
    });
    dropZoon.addEventListener('dragleave', function(event) {
        dropZoon.classList.remove('drop-zoon--over');
    });
    dropZoon.addEventListener('drop', function(event) {
        event.preventDefault();
        dropZoon.classList.remove('drop-zoon--over');
        const file = event.dataTransfer.files[0];
        uploadFile(file);
    });
    dropZoon.addEventListener('click', function(event) {
        fileInput.click();
    });
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        uploadFile(file);
    });

    function uploadFile(file) {
        const fileReader = new FileReader();
        const fileType = file.type;
        const fileSize = file.size;
        if (fileValidate(fileType, fileSize)) {
            dropZoon.classList.add('drop-zoon--Uploaded');
            loadingText.style.display = "block";
            previewImage.style.display = 'none';
            uploadedFile.classList.remove('uploaded-file--open');
            uploadedFileInfo.classList.remove('uploaded-file__info--active');
            fileReader.addEventListener('load', function() {
                setTimeout(function() {
                    uploadArea.classList.add('upload-area--open');
                    loadingText.style.display = "none";
                    previewImage.style.display = 'block';
                    fileDetails.classList.add('file-details--open');
                    uploadedFile.classList.add('uploaded-file--open');
                    uploadedFileInfo.classList.add('uploaded-file__info--active');
                }, 500);
                previewImage.setAttribute('src', fileReader.result);
                uploadedFileName.innerHTML = file.name;
                progressMove();
            });
            fileReader.readAsDataURL(file);
        } else {
            this;

        };
    };

    function progressMove() {
        let counter = 0;
        setTimeout(() => {
            let counterIncrease = setInterval(() => {
                if (counter === 100) {
                    clearInterval(counterIncrease);
                } else {
                    counter = counter + 10;
                    uploadedFileCounter.innerHTML = `${counter}%`
                }
            }, 100);
        }, 600);
    };

    function fileValidate(fileType, fileSize) {
        let isImage = imagesTypes.filter((type) => fileType.indexOf(`image/${type}`) !== -1);
        if (isImage[0] === 'jpeg') {
            uploadedFileIconText.innerHTML = 'jpg';
        } else {
            uploadedFileIconText.innerHTML = isImage[0];
        };
        if (isImage.length !== 0) {
            if (fileSize <= 2000000) {
                return true;
            } else {
                return alert('Please Your File Should be 2 Megabytes or Less');
            };
        } else {
            return alert('Please make sure to upload An Image File Type');
        };
    };
});