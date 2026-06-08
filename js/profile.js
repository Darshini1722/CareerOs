// Graduation Year Dropdown

const graduationYear =
document.getElementById("graduationYear");

for(let year = 1950; year <= 2035; year++){

    let option =
    document.createElement("option");

    option.value = year;
    option.text = year;

    graduationYear.add(option);
}


// Show Custom Role

document.getElementById("targetRole")
.addEventListener("change", function(){

    const customRole =
    document.getElementById("customRole");

    if(this.value === "other"){

        customRole.style.display = "block";

    }else{

        customRole.style.display = "none";

    }

});


// Profile Validation

function validateProfile(){

    const firstName =
    document.getElementById("firstName").value.trim();

    const lastName =
    document.getElementById("lastName").value.trim();

    const collegeName =
    document.getElementById("collegeName").value.trim();

    const branch =
    document.getElementById("branch").value.trim();

    const graduationYear =
    document.getElementById("graduationYear").value;

    const targetRole =
    document.getElementById("targetRole").value;

    const customRole =
    document.getElementById("customRole").value.trim();


    // Clear Errors

    document.getElementById("firstNameError").innerText = "";
    document.getElementById("lastNameError").innerText = "";
    document.getElementById("collegeError").innerText = "";
    document.getElementById("branchError").innerText = "";
    document.getElementById("graduationYearError").innerText = "";
    document.getElementById("targetRoleError").innerText = "";
    document.getElementById("customRoleError").innerText = "";


    // First Name

    if(firstName === ""){

        document.getElementById("firstNameError")
        .innerText = "First Name is required";

        return;
    }


    // Last Name

    if(lastName === ""){

        document.getElementById("lastNameError")
        .innerText = "Last Name is required";

        return;
    }


    // College

    if(collegeName === ""){

        document.getElementById("collegeError")
        .innerText = "College Name is required";

        return;
    }


    // Branch

    if(branch === ""){

        document.getElementById("branchError")
        .innerText = "Branch is required";

        return;
    }


    // Graduation Year

    if(graduationYear === ""){

        document.getElementById("graduationYearError")
        .innerText = "Please select Graduation Year";

        return;
    }


    // Target Role

    if(targetRole === ""){

        document.getElementById("targetRoleError")
        .innerText = "Please select Target Role";

        return;
    }


    // Custom Role

    if(targetRole === "other" && customRole === ""){

        document.getElementById("customRoleError")
        .innerText = "Please enter your target role";

        return;
    }


    // Success

   localStorage.setItem(
"firstName",
firstName
);

localStorage.setItem(
"middleName",
document.getElementById("middleName").value
);

localStorage.setItem(
"lastName",
lastName
);

localStorage.setItem(
"collegeName",
collegeName
);

localStorage.setItem(
"branch",
branch
);

localStorage.setItem(
"graduationYear",
graduationYear
);

if(targetRole === "other"){


localStorage.setItem(
    "targetRole",
    customRole
);


}
else{


localStorage.setItem(
    "targetRole",
    targetRole
);

}

window.location.href =
"connect-accounts.html";
