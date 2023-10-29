let likeCount = 0;
let liked = false;

function toggleLike() {
    liked = !liked;
    likeCount += liked ? 1 : -1;
    updateLikeButton();
}

function updateLikeButton() {
    const likeButton = document.getElementById('likeButton');
    const likeCountElement = document.getElementById('likeCount');
    
    likeButton.textContent = liked ? 'Liked' : 'Like';
    likeCountElement.textContent = likeCount;
}
