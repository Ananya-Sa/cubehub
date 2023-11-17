function validatename(fullname) {
    if (fullname.trim() === ''){
        return "Fullname cannot be empty.";
    }
    if (!/^[a-zA-Z\s]+$/.test(fullnamename)) {
        return "Fullname can only contain letters and spaces.";
    }
    if(fullname <2 || fullname >50) {
        return "Fullname must be between 2 and 50 characters long.";
    }
    return "Valid Name";
}

function validateemail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
      return "Valid Email";
    } else {
      return "Invalid email address";
    }
}