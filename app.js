let visibleIndex = 0;

const cards = document.getElementsByClassName("page");

const handleUpClick = () => {
    // set the next index active too
    visibleIndex = visibleIndex + 1;

    visibleIndex = Math.min(4, visibleIndex);

    const card = cards[visibleIndex];

    card.dataset.status = "active";
}

const handleDownClick = () => {
    const card = cards[visibleIndex]

    card.dataset.status="inactive";

    visibleIndex = visibleIndex - 1;

    if(visibleIndex < 0){
        visibleIndex = 0;
        card.dataset.status = "active"
    }
}