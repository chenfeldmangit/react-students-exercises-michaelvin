
function getProfileImage() {
    let userProfile = JSON.parse(localStorage.getItem("userProfile"));
    return userProfile.profileImgSrc;
    // return "require('"+userProfile.profileImgSrc+"')";
}