function analyzeCareer(){

    const resume =
    document.getElementById("resume").files.length;

    const github =
    document.getElementById("github").value.trim();

    const leetcode =
    document.getElementById("leetcode").value.trim();

    const linkedin =
    document.getElementById("linkedin").value.trim();


    // Clear Errors

    document.getElementById("resumeError").innerText = "";
    document.getElementById("githubError").innerText = "";
    document.getElementById("leetcodeError").innerText = "";
    document.getElementById("linkedinError").innerText = "";


    // Resume Validation

    if(resume === 0){

        document.getElementById("resumeError")
        .innerText = "Please upload your resume";

        return;
    }


    // GitHub Validation

    if(github === ""){

        document.getElementById("githubError")
        .innerText = "GitHub Username is required";

        return;
    }


    // LeetCode Validation

    if(leetcode === ""){

        document.getElementById("leetcodeError")
        .innerText = "LeetCode Username is required";

        return;
    }


    // LinkedIn Validation

    if(linkedin !== ""){

        const linkedinPattern =
        /^https:\/\/(www\.)?linkedin\.com\/.*$/;

        if(!linkedinPattern.test(linkedin)){

            document.getElementById("linkedinError")
            .innerText =
            "Enter a valid LinkedIn URL";

            return;
        }
    }


    // SAVE DATA FOR DASHBOARD

    localStorage.setItem(
        "github",
        github
    );

    localStorage.setItem(
        "leetcode",
        leetcode
    );

    localStorage.setItem(
        "linkedin",
        linkedin
    );


    // REDIRECT TO DASHBOARD

    window.location.href =
    "dashboard.html";
}