function collect_ratings() {
    const ratings = { count: 0, sum: 0, averge: 0 };

    let rating = 0; 
    const elements = document.querySelectorAll(".rating");

    elements.forEach(element => {
        rating = parseInt(element.id.replace("star", " "));
        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value)*rating;
    });
    if (ratings.count !== 0) {
        ratings.averge = (ratings.sum / ratings.count);
        
    }
    return rating;
}

document.addEventListener("change", () => {
    const rating = collect_ratings();
    document.querySelector('#average ').value = rating.averge.tofixed(2);
});

